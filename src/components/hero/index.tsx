import { useEffect, useState } from 'react'
import Ribbon from '../ribbon/Ribbon'
import devImg from '../../assets/dev.png'
import nodeImg from '../../assets/nodeLogo.png'
import jsLogo from '../../assets/jsLogo.png'
import reactLogo from '../../assets/react.png'
import { motion } from "motion/react"
import { FaLinkedin } from 'react-icons/fa'
import { IoArrowDownCircleOutline, IoDocumentTextOutline } from 'react-icons/io5'
import Container from '../container'
import MotionDiv from '../motionDiv'

const Hero = () => {

	const [changeLayout, setChangeLayout] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1024) {
				setChangeLayout(true);
				console.log(changeLayout)
				return
			}
			else {
				setChangeLayout(false)
			}
		};
		handleResize()
		console.log(changeLayout)

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [changeLayout]);


	return (
		<MotionDiv>
			<Container>
				<div id='home' className=' h-screen flex flex-col items-center max-lg:items-start max-lg:mb-64 mb-60 max-sm:mb-32 justify-center'>

					<section className=' relative w-full pt-24 flex flex-row max-md:flex-col transition-all max-lg:mt-44 max-sm:mt-0 max-sm:pt-20'>

						<Ribbon />
						<div className='max-w-md  flex flex-col justify-between max-lg:max-w-full max-md:max-w-full max-md:mt-0'>

							<div className={`${changeLayout ? "flex" : "hidden"} mt-48 transition-all flex items-end h-[350px] max-sm:h-[300px] max-md:mt-28 max-sm:mt-14 justify-end `}
							>
								<motion.img src={devImg} className='z-20 object-contain max-sm:mt-8' />
								<motion.img src={nodeImg} className='-z-50 absolute w-1/4'
									initial={{ bottom: 180, left: 50, opacity: 1, scale: 0 }}
									animate={{ bottom: 350, left: 200, opacity: 0, scale: 1 }}
									transition={{ duration: 4, delay: 2, repeat: Infinity, repeatDelay: 1, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>
								<motion.img src={jsLogo} className='-z-40 absolute w-1/4'
									initial={{ bottom: 180, left: 110, opacity: 1, scale: 0 }}
									animate={{ bottom: 350, left: 20, opacity: 0, scale: 0.7 }}
									transition={{ delay: 3, duration: 4, repeat: Infinity, repeatDelay: 2, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>
								<motion.img src={reactLogo} className='-z-40 absolute w-1/4'
									initial={{ bottom: 180, left: 110, opacity: 1, scale: 0 }}
									animate={{ bottom: 350, left: 100, opacity: 0, scale: 0.7 }}
									transition={{ delay: 1, duration: 4, repeat: Infinity, repeatDelay: 2.5, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>
							</div>

							<div className='relative transition-all flex justify-end flex-col h-full'					>
								<h2 className='font-black text-green-500 text-3xl max-lg:text-5xl transition-all max-lg:mt-4 max-sm:text-3xl max-sm:mt-0'>Olá, sou o Tailison Ramos</h2>

								<div className='mb-12 max-xl:mb-4 transition-all'>
									<p className='text-white transition-all mt-2'>
										Estudante e desenvolvedor full-stack buscando se especializar em aplicações web e mobile utilizando ferramentas como <span className='text-green-500 font-bold'>React e TypeScript.</span></p>

								</div>

								<div className='flex gap-x-4 h-16 max-xl:h-12 transition-all'>
									<a className='w-full flex gap-x-2 justify-center items-center bg-green-600 font-medium text-white rounded-md hover:bg-green-400 transition-all hover:scale-105'
										href='https://www.linkedin.com/in/0tarsodev'
										target="_blank"
										rel='noopener noreferrer'
									>LinkedIn
										<FaLinkedin size={20} />
									</a>

									<button className='w-full flex gap-x-2 justify-center items-center bg-green-600 font-medium text-white rounded-md hover:bg-green-400 transition-all hover:scale-105'
									>
										Currículo
										<IoDocumentTextOutline size={20} />
									</button>

								</div>
							</div>

						</div>

						<div className='z-20 relative min-2xl:w-full flex ml-[100px] max-xl:ml-[50px] max-lg:ml-0 '>
							<div className={`${changeLayout ? "hidden max-w-0" : "flex"} transition-all slideLeftEffect flex justify-end`}>
								<motion.img src={devImg} className='z-20 max-w-screen-md max-xl:max-w-screen-sm '
									initial={{ scale: 0.98 }}
									animate={{ scale: 1 }}
									transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
									style={{ willChange: "transform" }}

								/>
								<motion.img src={nodeImg} className='-z-50 absolute w-1/4'
									initial={{ bottom: 15, right: 350, opacity: 1, scale: 0 }}
									animate={{ top: -50, right: 300, opacity: 0, scale: 1 }}
									transition={{ duration: 4, delay: 1, repeat: Infinity, repeatDelay: 2, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>
								<motion.img src={jsLogo} className='-z-40 absolute w-1/4'
									initial={{ bottom: 15, right: 400, opacity: 1, scale: 0 }}
									animate={{ top: -50, right: 360, opacity: 0, scale: 0.7 }}
									transition={{ delay: 2, duration: 4, repeat: Infinity, repeatDelay: 2, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>
								<motion.img src={reactLogo} className='-z-40 absolute w-1/4'
									initial={{ bottom: 15, right: 500, opacity: 1, scale: 0 }}
									animate={{ top: -50, right: 400, opacity: 0, scale: 0.7 }}
									transition={{ delay: 3, duration: 4, repeat: Infinity, repeatDelay: 1, repeatType: "loop" }}
									style={{ willChange: "opacity, transform" }}
								/>

							</div>

						</div>
					</section>

					<a className='flex w-full justify-center  mt-8'
						href='#projects'
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

export default Hero