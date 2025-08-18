//React
import { useState } from 'react'

//Component
import Input from '../input'
import Container from '../container'

//FramerMotion
import { motion } from 'motion/react'

//Assets
import callme from '../../assets/animeBoy.png'

//Zod
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

//EmailJs
import emailjs from "@emailjs/browser"

//Icon
import { CgSpinner } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'


const CallMe = () => {

  const emailJsService = import.meta.env.VITE_EMAIL_JS_SERVICE_KEY
  const emailJsTemplate = import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY
  const emailJsPublicKey = import.meta.env.VITE_EMAIL_JS_PB_KEY

  const { t: text } = useTranslation()

  const schema = z.object({
    email: z.string().email(text("callMe.formErrors.email")).nonempty('Email obrigatório para mandar uma mensagem'),
    name: z.string().nonempty(text("callMe.formErrors.name")).max(60, 'Máximo 60 caracteres'),
    subject: z.string().min(5, text("callMe.formErrors.subject")).max(100, 'Máximo 100 caracteres'),
    description: z.string().min(20, text("callMe.formErrors.message")).max(1000, 'Máximo 1000 caracteres')
  })


  type FormData = z.infer<typeof schema>

  const [visitorData, setVisitorData] = useState<FormData | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })


  const handleSubmitEmail = async (data: FormData) => {

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
      console.log("Email enviado com sucesso!")

    } catch (error) {
      console.log("Erroooo", error)
    }

    finally {
      setLoading(false)
    }
  }

  return (
    <Container>

      <section id='callme' className='h-screen pt-6 max-md:mt-40 relative max-md:h-full'>

        <div>
          <div className=''>
            <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ willChange: "opacity" }}
            >{text('callMe.title')}
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


            <span className='block text-zinc-300 font-bold text-8xl mt-20 min-2xl:mt-16 -z-40 max-lg:text-6xl max-sm:mt-0 transition-all'>{text("callMe.create")}</span>
            <span className='block text-green-500 font-bold text-8xl mb-44 -z-50 max-lg:text-6xl transition-all'>{text("callMe.together")}</span>

            <img src={callme} className='absolute w-[450px] left-56 h-auto -z-40 bottom-0 filter hue-rotate-30 saturate-[90%] max-lg:left-28 transition-all max-md:left-64 max-sm:w-[350px] max-sm:left-32 max-sm:bottom-[-50px]' />

          </div>


          <div className=' w-full p-6 relative'>

            <div className='bg-white h-full w-full rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md p-4 shadow-xl shadow-green-300/20'>
              <div className=''>
                <p className='text-center text-5xl font-bold mt-2 text-zinc-700 max-sm:text-4xl'>{text("callMe.hello")}</p>



                <form onSubmit={handleSubmit(handleSubmitEmail)} className='mt-10'>

                  <div className='flex gap-x-4 max-sm:flex-col'>
                    <div className='flex-1'>
                      <p className='font-medium mb-1 text-zinc-700'>{text("callMe.form.name")}</p>
                      <Input
                        type='text'
                        register={register}
                        name="name"
                        error={errors.name?.message}
                        placeholder={text("callMe.formPlaceholder.name")}
                      />
                    </div>

                    <div className='flex-1'>
                      <p className='font-medium mb-1 text-zinc-700'>{text("callMe.form.email")}</p>
                      <Input
                        type='text'
                        register={register}
                        name="email"
                        error={errors.email?.message}
                        placeholder={text("callMe.formPlaceholder.email")}
                      />
                    </div>
                  </div>

                  <p className='font-medium mb-1 text-zinc-700'>{text("callMe.form.subject")}</p>
                  <Input
                    type='text'
                    register={register}
                    name="subject"
                    error={errors.subject?.message}
                    placeholder={text("callMe.formPlaceholder.subject")}
                  />

                  <p className='font-medium mb-1 mt-3 text-zinc-700'>{text("callMe.form.message")}</p>
                  <textarea
                    className='resize-none border-2 w-full rounded-md h-24 px-2'
                    {...register("description")}
                    name="description"
                    placeholder={text("callMe.formPlaceholder.message")}
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

                    ) : (
                      <span>{text("callMe.form.send")}</span>
                    )
                    }

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
              <span className='mt-6 text-2xl font-medium text-zinc-800'>{text("callMe.formSuccess.title")}</span>
              <span className='text-2xl font-medium text-zinc-800'>{text("callMe.formSuccess.description")}</span>

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


