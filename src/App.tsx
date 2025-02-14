import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import ScrollLinked from './components/scrollLinked'
import Skills from './components/skills'

import { motion } from 'motion/react'
import AboutMe from './components/aboutMe'
import CallMe from './components/callMe'
import Footer from './components/footer'

function App() {

  // useEffect(() => {

  // caminho correto na Vercel
  // fetch('/api/wakatime')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(error => {
  //     console.log(error + "Errrooooo")
  //     console.log(error.message)
  //     console.log(error.code)
  //   })


  return (
    <div className='max-md:overflow-x-clip'>

      <ScrollLinked />

      <Header />

      <Hero />

      <div className='relative' id='projects' >
        <Projects />
        <div className='absolute -z-50 w-full h-9 bg-green-600 opacity-5'></div>
        <div className='absolute -z-50 w-full h-24 bg-green-600 opacity-10 bottom-4'></div>
        <div className='absolute -z-50 w-full h-12 bg-green-600 opacity-5 top-20'></div>
        <div className='absolute -z-50 w-full h-12 bg-green-600 opacity-5 bottom-64'></div>
      </div>


      <motion.div className='relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, }}
        style={{ willChange: "opacity" }}
      >
        <Skills />
        <div className='bg-green-500 h-[400px] max-sm:h-[500px] w-full absolute top-0 -z-10' ></div>
      </motion.div>


      <AboutMe />


      <CallMe />

      <Footer />
    </div>
  )
}

export default App
// bg-gradient-to-t from-green-700/10 to-[#1a1a1a]/50