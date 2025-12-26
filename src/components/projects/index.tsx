//Assets
import prepcarsPage from '../../assets/prepPag.png'
import portfolioPage from '../../assets/portfolioImg.png'
import encurtandoPage from '../../assets/encurtandoPag.png'
import maiconPage from '../../assets/maiconPag.png'
import vendazenPage from '../../assets/vendazenPage.png'

import correDesign from '../../assets/corredesign.png'
import itabaratoDesgin from '../../assets/itabaratodesign.png'
import zkiDesign from '../../assets/zkidesign.png'
import ultramedDesign from '../../assets/ultrameddesign.png'


//Components
import Container from '../container'
import ProjectCard from '../projectCard'

//Framer Motion
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const Projects = () => {

  const { t: text } = useTranslation();

  return (

    <Container>

      <section className='w-full h-full flex flex-col justify-center relative' >

        <div className='flex flex-col items-start mb-12'>

          <motion.span className='block w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ willChange: "opacity" }}
          >{text('projects.title')}
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

        <motion.span className='block w-fit text-white text-4xl font-regular max-sm:text-2xl mb-8 mt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ willChange: "opacity" }}
        >Web Projects
        </motion.span>

        <div className=' grid grid-cols-3 place-items-stretch gap-8 max-md:gap-2 max-xl:grid-cols-2 max-md:grid-cols-1'>


          <ProjectCard
            cardImg={prepcarsPage}
            projectName='PrepCars'
            stack={['TypeScript', 'React', 'Zod', 'Firebase', 'Tailwind', 'FramerMotion', 'Vercel']}
            description={text('projects.prepcars.description')}
            deploymentLink='https://prepcars.vercel.app/'
            gitHubLink='https://github.com/0tarso/PrepCars-ReactJS'
          />

          <ProjectCard
            cardImg={encurtandoPage}
            projectName='Encurtando'
            stack={['JavaScript', 'React', 'CSS', 'Firebase', 'Node', 'Express', 'Vercel', 'Render']}
            description={text('projects.encurtando.description')}
            linkedInLink='https://www.linkedin.com/posts/0tarsodev_react-nodejs-vite-activity-7284577439949705218-2Rzl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMBAUABqnfFxb1lWRc-PSTPvy7KqtDmHvQ'
            gitHubLink='https://github.com/0tarso/Encurtando--Full'
            deploymentLink='https://www.encurtando.com/'
          />
          <ProjectCard
            cardImg={maiconPage}
            projectName='Maicon Luchese'
            stack={['TypeScript', 'React', 'Tailwind', 'Vercel', 'FramerMotion']}
            description={text('projects.maiconLandingPage.description')}
            gitHubLink='https://github.com/0tarso/ml-landing-page'
            deploymentLink='https://mluchese.vercel.app/'
          />

          <ProjectCard
            cardImg={vendazenPage}
            projectName='Vendazen App LP'
            stack={['TypeScript', 'React', 'Tailwind', 'Vercel']}
            description={text('projects.vendazenLandingPage.description')}
            gitHubLink='https://github.com/0tarso/vendazen-landing-page'
            deploymentLink='https://vendazen.vercel.app/'
          />

          <ProjectCard
            cardImg={portfolioPage}
            projectName='TailisonDev'
            stack={['TypeScript', 'React', 'Tailwind', 'FramerMotion', 'Vercel']}
            description={text('projects.tailisonDev.description')}
            linkedInLink='...'
            gitHubLink='...'
          />
        </div>




        <motion.span className='block w-fit text-white text-4xl font-regular max-sm:text-2xl mb-8 mt-8'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ willChange: "opacity" }}
        >Social Media Projects
        </motion.span>

        <div className=' grid grid-cols-3 gap-8 gap-y-0 max-md:gap-2 max-xl:grid-cols-2 max-md:grid-cols-1'>

          <ProjectCard
            cardImg={zkiDesign}
            projectName='Zki Piscinas'
            stack={[]}
            cardType='design'
            // description={text('projects.prepcars.description')}
            deploymentLink='https://drive.google.com/file/d/1NgK4SuLDaLHx9bfP1URji0oRFmIo7EC0/view?usp=sharing'
          // gitHubLink=''
          />

          <ProjectCard
            cardImg={itabaratoDesgin}
            projectName='Mercado ItaBarato'
            stack={[]}
            cardType='design'
            // description={text('projects.encurtando.description')}
            deploymentLink='https://drive.google.com/file/d/1M0-3B3YWMDbmNdoohnqI-oqehUNJzg4G/view?usp=sharing'
          />

          <ProjectCard
            cardImg={correDesign}
            projectName='Corre Multiserviços'
            stack={[]}
            cardType='design'
            // description={text('projects.tailisonDev.description')}
            deploymentLink='https://drive.google.com/file/d/1FlxWcf-iit9t-EcNwmsCnxUHoApBp8yM/view?usp=sharing'
          />
          <ProjectCard
            cardImg={ultramedDesign}
            projectName='Ultramed Popular'
            stack={[]}
            cardType='design'
            // description={text('projects.tailisonDev.description')}
            deploymentLink='https://drive.google.com/drive/folders/1wDfwSvQYArbwPFwZSTjNHtyieskjmi-W?usp=sharing'
          />
        </div>


      </section>

    </Container>
  )
}

export default Projects