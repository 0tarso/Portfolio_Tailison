//React
import { useEffect, useState } from 'react'

//Component
import Container from '../container'
import { GitHubCalendar } from "react-github-calendar";

//FramerMotion
import { motion } from 'motion/react'

//Asset
// import profileImg from '../../assets/profileImg.png'
import profileImg from '../../assets/HeroImage.png'
import { useTranslation } from 'react-i18next'

type WakaData = {
  dailyAverage: string,
  weekAverage: string
}

const AboutMe = () => {
  const { t: text } = useTranslation()

  // const hrefGitStreakStatus = 'https://github-readme-streak-stats.herokuapp.com/?user=0tarso&theme=vue&hide_border=true'

  const birthDayAge = 2000
  const age = new Date().getFullYear() - birthDayAge

  const [wakaData, setWakaData] = useState<WakaData | null>()
  const [updateComponent, setUpdateComponent] = useState<number>(0)


  const explicitTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#191919', '#2b2b2b', '#5b5b5b', '#929292', '#ededed'],
  }

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
        .catch(error => {
          console.log(error)
        })
    }
  }, [wakaData])


  return (
    <Container>
      <div className='mt-40 pt-12' id='about'>

        <div className=''>
          <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ willChange: "opacity" }}
          >{text('about.title')}
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


        <motion.div className='h-screen flex gap-12 relative'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ willChange: "opacity" }}
        >

          <div className=' w-full relative h-screen'>

            <div className=' flex flex-row mt-12 w-full transition-all item-center justify-start max-sm:flex-col max-sm:items-center'>


              <div className='overflow-hidden rounded-full flex h-64 w-64 items-center shadow-xl shadow-green-400/30  ml-6 hover:scale-105 transition-all'>
                <img src={profileImg} className='object-cover rounded-full mt-24 saturate-[0.75]' />
              </div>



              <div className='flex flex-col justify-end ml-12 mb-2 transition-all min-w-fit max-sm:w-full max-sm:ml-0'>


                <div className='flex flex-col p-4'>
                  <span className='inline-block text-4xl text-zinc-200 font-medium max-sm:text-center'>Tailison Ramos</span>
                  <span className='inline-block text-zinc-400 text-2xl max-sm:text-center'>{age} {text("about.years")}</span>
                </div>


                <div className='flex gap-x-12 bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-4 max-md:gap-x-4 max-sm:justify-center max-sm:gap-x-6'>

                  <GitHubCalendar
                    username="0tarso"
                    blockSize={5}
                    blockMargin={1}
                    fontSize={10}
                    blockRadius={1}
                    year={2026}
                    colorScheme='dark'
                    theme={explicitTheme}
                  />

                  {/* <img
                    className='h-40'
                    src={hrefGitStreakStatus}
                  /> */}


                  {/* 
                  <div className='flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>{text("about.dailyCode")}</p>
                    <span key={updateComponent} className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>{wakaData ? wakaData?.dailyAverage : '...'}</span>
                  </div>

                  <div className=' flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>{text("about.weeklyCode")}</p>
                    <span className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>{wakaData ? wakaData.weekAverage : '...'}</span>
                  </div> */}


                  {/* <div className=' flex justify-center items-center flex-col'>
                    <p className='text-zinc-200 font-medium max-sm:text-sm'>{text("about.projects")}</p>
                    <span className='text-3xl font-bold text-zinc-100 max-lg:text-xl transition-all max-md:text-lg'>5</span>
                  </div> */}

                </div>


              </div>


            </div>


            <div className=' h-full relative '>

              <div className=' rounded-lg h-fit w-full p-4 pt-12 absolute -top-6 -z-10'>

                <p className='text-2xl text-green-500 font-bold'>{text("about.whoIam.title")}</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>{text("about.whoIam.description")}</p>

                <p className='text-2xl text-green-500 font-bold mt-4'>{text("about.whatIamDoing.title")}</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>{text("about.whatIamDoing.description")}</p>

                <p className='text-2xl text-green-500 font-bold mt-4'>{text("about.whatAmIworkingOn.title")}</p>
                <p className='text-xl max-md:text-lg max-sm:text-sm text-zinc-300 font-normal transition-all'>{text("about.whatAmIworkingOn.description")}</p>


              </div>

            </div>

          </div>

        </motion.div>




      </div>
    </Container>
  )
}

export default AboutMe