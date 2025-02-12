//Icons
import { FaGithub } from 'react-icons/fa'
import { PiBroadcastBold } from 'react-icons/pi'
import { FaLinkedin } from 'react-icons/fa'

//Component
import TechBadge from '../techBadge'

//Framer motion
import { motion } from 'motion/react'


type Techs =
  "React"
  | "TypeScript"
  | "Firebase"
  | "Tailwind"
  | "Node"
  | "Express"
  | "Vercel"
  | "Render"
  | "CSS"
  | "JavaScript"
  | "FramerMotion"
  | "Zod"

interface ProjectCardProps {
  stack: Techs[]
  projectName: string
  cardImg: string
  description: string
  gitHubLink: string
  deploymentLink?: string
  linkedInLink?: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (

    <motion.div key={props.projectName} className='bg-white rounded-2xl flex flex-col mb-24 max-sm:mb-12 transition-all  max-md:flex-col max-md:pb-4 max-md:w-[90%] border-b-4 hover:border-b-green-500 max-sm:border-b-green-500 h-[600px] max-sm:h-fit opacity-0'
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, }}
      style={{ willChange: "opacity" }}
      layout='position'
    >

      <div className='relative h-[300px] max-md:h-fit flex overflow-hidden rounded-xl group shadow-lg shadow-green-200'>


        <div className='backdrop-blur-sm bg-green-900/40 w-full h-full absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-xl'>
          <span className='mb-4 text-white font-bold max-sm:mb-1'>Onde encontrar esse projeto</span>
          <a className='bg-white/60 p-2 rounded-lg flex items-center gap-x-1 mb-4 cursor-pointer hover:scale-105 transiton-all hover:bg-white/80 duration-500 w-2/4 justify-center max-sm:scale-90 max-sm:mb-2'
            href={props.gitHubLink}
            target='_blank'
            rel='noopener noreferer'
          >
            <FaGithub size={24} />
            <span className='font-medium'>GitHub</span>
          </a>

          {props.deploymentLink && (

            <a className='bg-white/60 p-2 rounded-lg flex items-center gap-x-1 cursor-pointer hover:scale-105 transiton-all hover:bg-white/80 duration-500 w-2/4 justify-center mb-4 max-sm:scale-90 max-sm:mb-2'
              href={props.deploymentLink}
              target='_blank'
              rel='noopener noreferer'
            >
              <PiBroadcastBold size={24} />
              <span className='font-medium'>Live</span>
            </a>
          )}

          {props.linkedInLink && (
            <a className='bg-white/60 p-2 rounded-lg flex items-center gap-x-1 cursor-pointer hover:scale-105 transiton-all hover:bg-white/80 duration-500 w-2/4 justify-center max-sm:scale-90 max-sm:mb-2'
              href={props.linkedInLink}
              target='_blank'
              rel='noopener noreferer'
            >
              <FaLinkedin size={24} />
              <span className='font-medium'>LinkedIn</span>
            </a>
          )}
        </div>


        <img src={props.cardImg} className='rounded-lg object-cover border-b-[5px] border-b-green-200 group-hover:border-green-500 transition-all duration-500 group-hover:scale-125 max-md:w-full max-sm:border-b-green-500 w-full' />
      </div>

      <div className='h-full flex-1  flex-col px-2'>

        <span className='mt-4 mb-2 max-sm:mb-6 block font-medium text-3xl text-black cursor-default'>{props.projectName}</span>

        <p className='text-zinc-600 p-1 cursor-default'>{props.description}</p>

        <div className='mb-4 mt-3 flex flex-wrap gap-x-2 gap-y-2'>

          {props.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}


        </div>
      </div>
    </motion.div >
  )
}

export default ProjectCard