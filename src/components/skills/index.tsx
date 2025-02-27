//FramerMotion
import { motion } from 'motion/react'

//Assets
import devStudy from '../../assets/devStudy.png'

//Component
import Container from '../container'
import StackProgress from '../stackProgress'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t: text } = useTranslation()

  return (

    <Container>

      <section className='mt-20 h-screen max-sm:h-full relative' id='skills'>

        <div className='mb-5 pt-6'>
          <motion.span className='block w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ willChange: "opacity" }}
          >{text('skills.title')}
          </motion.span>

          {/* Detalhe de layout */}
          <motion.div className='bg-zinc-100 mt-2'
            initial={{ width: "0px", height: 4, opacity: 0 }}
            whileInView={{ opacity: 1, width: "90%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            style={{ willChange: "opacity" }}
          ></motion.div>
        </div>


        <div className='h-full flex flex-col relative '>
          <motion.img src={devStudy} className='absolute w-2/4 right-[-90px] top-0 max-lg:right-[-40px] max-md:top-[320px] max-md:right-[-100px] max-sm:top-[-280px] max-sm:right-[-120px] max-sm:w-[350px]'
            initial={{ translateY: "-10px" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 2, bounce: 0.5, type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
            style={{ willChange: "transform" }}
          />

          <div className='h-fit rounded-2xl grid grid-cols-3 p-4 gap-x-4 max-md:grid-cols-2 max-sm:grid-cols-1 transition-all max-sm:place-items-center'>

            <motion.div className='flex bg-white flex-col p-4 rounded-xl h-fit max-sm:w-3/4 max-sm:mb-8'
              initial={{ translateY: "100%", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ willChange: "opacity, transform" }}
            >
              <span className=' text-3xl text-center block font-bold mb-4 text-zinc-600'>Frontend</span>

              <StackProgress progress={90} stack='HTML' />
              <StackProgress progress={89} stack='CSS' />
              <StackProgress progress={70} stack='JavaScript' />
              <StackProgress progress={60} stack='React' />
              <StackProgress progress={44} stack='Tailwind' />
              <StackProgress progress={49} stack='TypeScript' />
              <StackProgress progress={54} stack='ReactNative' />

            </motion.div>


            <motion.div className='flex bg-white flex-col p-4 rounded-xl h-fit max-sm:w-3/4'
              initial={{ translateY: "100%", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ willChange: "opacity, transform" }}
            >
              <span className=' text-3xl text-center block font-bold mb-4 text-zinc-600'>Backend</span>

              <StackProgress progress={35} stack='PostgreSQL' />
              <StackProgress progress={60} stack='Firebase' />
              <StackProgress progress={55} stack='Node' />
              <StackProgress progress={60} stack='Express' />
              <StackProgress progress={30} stack='PrismaORM' />
              <StackProgress progress={35} stack='Python' />

            </motion.div>

          </div>
          <p className='text-zinc-300 font-medium w-3/4 px-4 max-lg:w-full max-md:w-3/4 max-xl:w-5/6 max-sm:w-full max-sm:text-center'>{text("skills.overview")}</p>

        </div>

      </section>

    </Container >
  )
}

export default Skills