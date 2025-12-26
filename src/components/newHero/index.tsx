//React
import { useEffect, useState } from 'react'

//Component
import Container from '../container'
import MotionDiv from '../motionDiv'
import Ribbon from '../ribbon/Ribbon'

//Assets
import tarsDevImg from '../../assets/HeroImageDrawWeb.webp'

//FramerMotion
import { motion } from "motion/react"

//Icons
import { FaLinkedin } from 'react-icons/fa'
import { IoArrowDownCircleOutline, IoDocumentTextOutline } from 'react-icons/io5'

//Translation texts
import { useTranslation } from 'react-i18next'

const NewHero = () => {
  const { t: text } = useTranslation();

  const [changeLayout, setChangeLayout] = useState(false)

  const hrefCurriculoLink = 'https://drive.google.com/file/d/1mOOccbqSoyblroQaXW2tVHNxj4CFsBqT/view?usp=drive_link'
  const downloadArquivoCurriculo = 'Tailison_Ramos_Dev_Fullstack.pdf'

  const hrefLinkedin = 'https://www.linkedin.com/in/tailison'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setChangeLayout(true);
        return
      }
      else {
        setChangeLayout(false)
      }
    };
    handleResize()

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [changeLayout]);


  return (
    <MotionDiv>

      <Container>

        <div id='home' className='h-screen flex flex-col items-center max-lg:items-start max-lg:mb-64 mb-60 max-sm:mb-32 justify-center'>

          <section className='relative w-full h-full pt-24 flex flex-row justify-between max-md:flex-col-reverse transition-all max-lg:mt-44 max-sm:mt-0 max-sm:pt-20 max-md:items-center'>

            <div className=' flex flex-col flex-1 justify-center max-md:pt-80'>

              <Ribbon />
              <div className='mt-12 max-w-md  flex flex-col justify-between max-lg:max-w-full max-md:max-w-full max-md:mt-0'>

                <div className='relative transition-all flex justify-end flex-col h-full'>

                  <h2 className='font-black text-green-500 text-3xl max-lg:text-3xl transition-all max-lg:mt-4 max-sm:text-xl max-sm:mt-1'>{text("hero.subtitle")}</h2>

                  <div className='mb-12 max-xl:mb-4 transition-all max-sm:mt-4'>
                    <p className='text-white/60 transition-all mt-2'>
                      {text("hero.overview")}<span className='text-green-500/60 font-bold'>{text("hero.reactAndType")}</span></p>

                  </div>

                  <div className='flex gap-x-4 h-16 max-xl:h-12 transition-all'>
                    <a className='w-full flex gap-x-2 justify-center items-center bg-green-600 font-medium text-white rounded-md hover:bg-green-400 transition-all hover:scale-105'
                      href={hrefLinkedin}
                      target="_blank"
                      rel='noopener noreferrer'
                    >{text("hero.linkedin")}
                      <FaLinkedin size={20} />
                    </a>

                    <a className='w-full flex justify-center items-center bg-green-600 font-medium text-white rounded-md hover:bg-green-400 transition-all hover:scale-105 cursor-pointer'
                      href={hrefCurriculoLink}
                      download={downloadArquivoCurriculo}
                    >

                      <button className='flex gap-x-2'>
                        {text("hero.curriculum")}
                        <IoDocumentTextOutline size={20} />
                      </button>
                    </a>

                  </div>


                </div>


              </div>
            </div>

            <div className='flex scale-125 max-xl:scale-100 w-[500px] max-sm:w-[400px] h-[700px] overflow-hidden p-8 max-md:absolute max-md:h-[550px] max-md:top-0 max-md:-z-20 max-sm:-right-24 max-md:scale-125 max-sm:top-8 '>
              {/* <ReactCompareImage leftImage={tarsDevImg} rightImage={tarsDevImg2}
                handle={<React.Fragment />}
                hover
                sliderLineWidth={0}
              /> */}
              <img src={tarsDevImg} className='object-contain w-full h-full p-4' />
            </div>
          </section>



          <a className='flex w-full justify-center  mt-8'
            href='#projects'
            aria-label={text("hero.scrollBottom")}
            title={text("hero.scrollBottom")}
          >
            <motion.div className='rounded-full'
              initial={{ scale: 1, filter: "brightness(2)" }}
              animate={{ scale: 1.1, filter: "brightness(1)" }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', ease: 'easeOut' }}
              style={{ willChange: "transform" }}
            >
              <IoArrowDownCircleOutline size={50} color='#00c400' className="" />
            </motion.div>


          </a>
        </div >


      </Container >
    </MotionDiv >
  )
}

export default NewHero