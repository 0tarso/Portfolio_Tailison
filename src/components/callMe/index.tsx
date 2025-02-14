import Container from '../container'
import { motion } from 'motion/react'

import callme from '../../assets/animeBoy.png'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../input'

import emailjs from "@emailjs/browser"
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'


const schema = z.object({
  email: z.string().email('Insira um email válido').nonempty('Email obrigatório para mandar uma mensagem'),
  name: z.string().nonempty('Meu nome é Tailison, e o seu?').max(60, 'Máximo 60 caracteres'),
  subject: z.string().min(5, 'Vamos lá, só 5 caracteres para eu encontrar você mais rapidamente').max(100, 'Máximo 100 caracteres'),
  description: z.string().min(20, 'Você pode mandar qualquer coisa, qualquer coisa com no mínimo 20 caracteres').max(1000, 'Máximo 1000 caracteres')
})


type FormData = z.infer<typeof schema>


const CallMe = () => {

  const emailJsService = import.meta.env.VITE_EMAIL_JS_SERVICE_KEY
  const emailJsTemplate = import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY
  const emailJsPublicKey = import.meta.env.VITE_EMAIL_JS_PB_KEY

  const [visitorData, setVisitorData] = useState<FormData | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })


  const handleSubmitEmail = async (data: FormData) => {

    console.log(data)

    setVisitorData(data)

    setLoading(true)

    try {
      await emailjs.send(
        emailJsService,
        emailJsTemplate,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.description,
          to_name: "Tailison Ramos",
        },
        { publicKey: emailJsPublicKey }
      )

      reset()

      setEmailSent(true)
      // console.log("Email enviado com sucesso!")

    } catch (error) {
      console.log("Erroooo", error)
    }

    finally {
      setLoading(false)
    }
  }

  return (
    <Container>

      <section id='callme' className='h-screen pt-6 max-md:mt-40 relative'>

        <div>
          <div className=''>
            <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ willChange: "opacity" }}
            >Contato
            </motion.span>

            {/* Detalhe de layout */}
            <motion.div className='bg-green-500 mt-2'
              initial={{ width: "0px", height: 4, opacity: 0 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, width: "90%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{ willChange: "opacity" }}
            ></motion.div>
          </div>
        </div>

        <motion.div className='min-h-[550px] flex mt-8 relative max-md:flex-col-reverse '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ willChange: "opacity" }}
        >


          <div className=' w-full flex flex-col justify-start '>


            <span className='block text-zinc-300 font-bold text-8xl mt-20 min-2xl:mt-16 -z-40 max-lg:text-6xl max-sm:mt-0 transition-all'>Vamos criar</span>
            <span className='block text-green-500 font-bold text-8xl mb-44 -z-50 max-lg:text-6xl transition-all'>#Juntos</span>

            <img src={callme} className='absolute w-[450px] left-56 h-auto -z-40 bottom-0 filter hue-rotate-30 saturate-[90%] max-lg:left-28 transition-all max-md:left-64 max-sm:w-[350px] max-sm:left-32 max-sm:bottom-[-50px]' />

          </div>


          <div className=' w-full p-6 relative'>

            <div className='bg-white h-full w-full rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md p-4 shadow-xl shadow-green-300/20'>
              <div className=''>
                <p className='text-center text-5xl font-bold mt-2 text-zinc-700 max-sm:text-4xl'>Diga um Olá!</p>



                <form onSubmit={handleSubmit(handleSubmitEmail)} className='mt-10'>

                  <div className='flex gap-x-4 max-sm:flex-col'>
                    <div className='flex-1'>
                      <p className='font-medium mb-1 text-zinc-700'>Seu nome</p>
                      <Input
                        type='text'
                        register={register}
                        name="name"
                        error={errors.name?.message}
                        placeholder='John Doe'
                      />
                    </div>

                    <div className='flex-1'>
                      <p className='font-medium mb-1 text-zinc-700'>Email</p>
                      <Input
                        type='text'
                        register={register}
                        name="email"
                        error={errors.email?.message}
                        placeholder='johndoe@gmail.com'
                      />
                    </div>
                  </div>

                  <p className='font-medium mb-1 text-zinc-700'>Assunto</p>
                  <Input
                    type='text'
                    register={register}
                    name="subject"
                    error={errors.subject?.message}
                    placeholder='Um simples olá'
                  />

                  <p className='font-medium mb-1 mt-3 text-zinc-700'>Mensagem</p>
                  <textarea
                    className='resize-none border-2 w-full rounded-md h-24 px-2'
                    {...register("description")}
                    name="description"
                    placeholder='Olá, Tailison Ramos! Vim pelo seu portfólio'
                  />


                  {errors.description?.message ? (
                    <p className='text-green-600 text-sm'>{errors.description.message}</p>
                  ) : (
                    <p className='text-sm opacity-0'>Olá</p>
                  )}


                  <button className='bg-green-500 w-full py-4 mt-8 max-sm:mt-2 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-md text-white font-medium text-xl drop-shadow-md hover:scale-[1.02] hover:bg-green-400 transition-all duration-500 flex justify-center'>

                    {loading ? (
                      <motion.div initial={{ rotate: 0 }} whileInView={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}>
                        <CgSpinner size={28} />
                      </motion.div>

                    ) : "Enviar"}


                  </button>

                </form>
              </div>
            </div>
          </div>


        </motion.div>

        {emailSent && (

          <motion.div className='min-h-screen w-full mt-8 top-16 p-6 absolute z-50 bg-gradient-to-t from-zinc-900 to-zinc-900/20 rounded-3xl max-sm:p-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='bg-green-600 w-full h-fit rounded-lg flex flex-col items-center p-8 '>
              <span className='text-zinc-100 text-7xl font-bold max-sm:text-5xl max-sm:self-start'>Olá, {visitorData?.name}</span>
              <span className='mt-6 text-2xl font-medium text-zinc-800'>Será um prazer responder você.</span>
              <span className='text-2xl font-medium text-zinc-800'>Fique de olho em seu email!</span>

              <button className='bg-white w-2/4 max-sm:w-full py-4 mt-8 max-sm:mt-2 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-md text-green-800 font-bold text-2xl drop-shadow-md hover:scale-[1.02] hover:bg-green-400 hover:text-white transition-all duration-500'
                onClick={() => setEmailSent(!emailSent)}
              >Ok!</button>
            </div>
          </motion.div>
        )}

      </section>
    </Container>
  )
}

export default CallMe


