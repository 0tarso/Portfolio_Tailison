import { useEffect, useState } from 'react'
import Container from '../container'
import { motion } from 'motion/react'

import profileImg from '../../assets/profileImg.png'

type WakaData = {
  dailyAverage: string,
  weekAverage: string
}


const AboutMe = () => {

  const [wakaData, setWakaData] = useState<WakaData | null>()
  const [updateComponent, setUpdateComponent] = useState<number>(0)

  useEffect(() => {
    if (!wakaData) {
      fetch(`/api/wakatime`)
        .then(res => res.json())
        .then(dataResponse => {

          const rawData = dataResponse.data.data

          const wakaStats = {
            dailyAverage: rawData.human_readable_daily_average.replace(/\s+/g, ""),
            weekAverage: rawData.human_readable_total.replace(/\s+/g, ""),
          }

          console.log(wakaStats)
          setWakaData({ ...wakaStats })
          setUpdateComponent(prevState => prevState + 1)

        })
        .catch(error => console.log(error))
    }

    console.log("wakaData abaix", wakaData)

  }, [wakaData])




  return (
    <Container>
      <div className='mt-40' id='about'>

        <div className=''>
          <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0, translateX: "-200px" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            style={{ willChange: "opacity, transform" }}
          >Sobre Mim
          </motion.span>

          {/* Detalhe de layout */}
          <motion.div className='bg-green-500 mt-2'
            initial={{ width: "0px", height: 4, opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, width: "90%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            style={{ willChange: "opacity" }}
          ></motion.div>
        </div>


        <div className='h-screen flex gap-12 relative'>

          <div className=' w-full relative h-screen'>

            <div className=' flex flex-row mt-12 w-full transition-all item-center justify-start max-sm:flex-col max-sm:items-center'>

              <div className='overflow-hidden rounded-full flex h-fit w-64 items-center shadow-xl shadow-green-400/30 bg-red-500 ml-6 hover:scale-105 transition-all'>
                <img src={profileImg} className='object-cover rounded-full' />
              </div>

              <div className='flex flex-col justify-end ml-12 mb-2 transition-all min-w-fit max-sm:w-full max-sm:ml-0'>
                <div className='flex flex-col p-4'>
                  <span className='inline-block text-4xl text-zinc-200 font-medium max-sm:text-center'>Tailison Ramos</span>
                  <span className='inline-block text-zinc-400 text-2xl max-sm:text-center'>24 anos</span>

                </div>
                <div className='flex gap-x-12 bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-4 max-md:gap-x-4 max-sm:justify-center max-sm:gap-x-6'>

                  <div className='flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>Código Diário</p>
                    <span key={updateComponent} className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>{wakaData ? wakaData?.dailyAverage : '...'}</span>
                  </div>
                  <div className=' flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>Código Semanal</p>
                    <span className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>{wakaData ? wakaData.weekAverage : '...'}</span>
                  </div>
                  <div className=' flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>Projetos</p>
                    <span className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>5</span>
                  </div>
                </div>
              </div>

            </div>


            <div className=' h-full relative '>
              <div className=' rounded-lg h-fit w-full p-4 pt-12 absolute -top-6 -z-10'>
                <p className='text-2xl text-green-500 font-bold'>Quem sou eu?</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>Sou um aspirante a desenvolvedor full-stack apaixonado por tecnologia e inovação. </p>

                <p className='text-2xl text-green-500 font-bold mt-4'>O que estou fazendo?</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>Atualmente, estou cursando Análise e Desenvolvimento de Sistemas para expandir meus conhecimentos e aprimorar minhas habilidades no desenvolvimento web.</p>

                <p className='text-2xl text-green-500 font-bold mt-4'>Com o que trabalho?</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>Estou focado em aprender as melhores práticas utilizando React/Native na criação de interfaces modernas e reutilizáveis. Para a criação de projetos completos, busco conhecimento em linguagens SQL e NoSQL, como Postgres e Firebase, utilizando NodeJs no servidor.</p>
              </div>

            </div>

          </div>

        </div>




      </div>
    </Container>
  )
}

export default AboutMe