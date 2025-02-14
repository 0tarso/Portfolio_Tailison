//Icons
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='h-[150px] max-sm:h-fit pt-5 w-full bg-gradient-to-t from-green-600 to-green-500 flex flex-col justify-around'>

      <div className='w-full flex px-12 justify-around max-sm:block'>

        <div className=''>

          <span className='text-zinc-800 text-center block text-xl font-bold'>Conecte-se!</span>

          <div className=' flex justify-center pt-2 flex-row gap-y-2 gap-x-2'>

            <a className='flex items-end max-sm:mr-12 cursor-pointer hover:bg-white p-1 rounded-xl transition-all duration-500'
              href='https://www.linkedin.com/in/0tarsodev'
              target='_blank'
              rel='noopener noreferer'
            >
              <FaLinkedin size={36} color='#1e1e20' />
              <span className='hidden max-sm:block text-xl'>/0tarsodev</span>
            </a>

            <a className='flex items-end cursor-pointer hover:bg-white p-1 rounded-xl transition-all duration-500'
              href='https://www.github.com/0tarso'
              target='_blank'
              rel='noopener noreferer'
            >
              <FaSquareGithub size={36} color='#1e1e20' />
              <span className='hidden max-sm:block text-xl'>/0tarso</span>
            </a>
          </div>
        </div>


        <div className='flex flex-col items-center max-sm:py-4 max-sm:bg-white max-sm:mt-2 mb-2 rounded-2xl drop-shadow-xl'>

          <a className="font-bold text-xl text-zinc-800 hover:text-zinc-200 transition-all duration-500"
            href="#home"
          >

            <span className="">{"< "}</span>
            <span className=''>TailisonDev</span>
            <span className="">{" />"}</span>

          </a>

          <span className='text-sm font-extralight'>Desenvolvedor Full-stack </span>

        </div>

      </div>

      <span className='text-sm pt-6 max-sm:pt-0 block text-center pb-2'>Illustrations by Freepik</span>
    </div>
  )
}

export default Footer