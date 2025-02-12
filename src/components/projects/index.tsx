//Assets
import prepcarsPage from '../../assets/prepPag.png'
import encurtandoPage from '../../assets/encurtandoPag.png'
import portfolioPage from '../../assets/portfolioImg.png'


//Components
import Container from '../container'
import ProjectCard from '../projectCard'

//Framer Motion
import { motion } from 'motion/react'

const Projects = () => {

  return (

    <Container>
      <section className='w-full h-full flex flex-col justify-center relative' >

        <div className='flex flex-col items-start mb-12'>

          <motion.span className='block w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ willChange: "opacity" }}
          >Projetos Desenvolvidos
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

        <div className=' grid grid-cols-3 place-items-center gap-8 max-md:gap-2 max-xl:grid-cols-2 max-md:grid-cols-1'>
          <ProjectCard
            cardImg={prepcarsPage}
            projectName='PrepCars'
            stack={['TypeScript', 'React', 'Zod', 'Firebase', 'Tailwind', 'FramerMotion', 'Vercel']}
            description='Uma plataforma de anúncios de carros. Fácil e simples de usar. Onde o usuário pode fazer o seu anúncio e interagir com outros anunciantes, favoritando seus carros e salvando seus preferidos.'
            deploymentLink='https://prepcars.vercel.app/'
            gitHubLink='https://github.com/0tarso/PrepCars-ReactJS'

          />

          <ProjectCard
            cardImg={encurtandoPage}
            projectName='Encurtando'
            stack={['JavaScript', 'React', 'CSS', 'Firebase', 'Node', 'Express', 'Vercel', 'Render']}
            description='Trata-se de um encurtador de links e gerador de QRcode. Gentil e amigável com o usuário, ele foca naquilo que se propõe. Encurtar links.'
            linkedInLink='https://www.linkedin.com/posts/0tarsodev_react-nodejs-vite-activity-7284577439949705218-2Rzl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMBAUABqnfFxb1lWRc-PSTPvy7KqtDmHvQ'
            gitHubLink='https://github.com/0tarso/Encurtando--Full'
            deploymentLink='https://www.encurtando.com/'
          />

          <ProjectCard
            cardImg={portfolioPage}
            projectName='TailisonDev'
            stack={['TypeScript', 'React', 'Tailwind', 'FramerMotion', 'Vercel']}
            description='Meu primeiro portfólio. Aqui, usei as habilidades que adquiri até o momento para apresentar um pouco sobre mim a você. Espero que goste!'
            linkedInLink='...'
            gitHubLink='...'
          />
        </div>


      </section>

    </Container>
  )
}

export default Projects