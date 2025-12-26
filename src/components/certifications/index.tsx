import Container from '../container'

import { motion } from 'motion/react'
import gitPreviewImg from '../../assets/gitCertification.png'
import bootcampoPreviewImg from '../../assets/bootcampCertification.png'
import oneBitCodePreviewImg from '../../assets/oneBitCodeCertification.png'
import { useTranslation } from 'react-i18next'


export default function Certifications() {

  const { t: text } = useTranslation()

  const certifications = [
    { name: 'Git Certification', company: 'DIO', year: '2025', linkToCertification: 'https://hermes.dio.me/certificates/WISBKOVD.pdf', imagePreview: gitPreviewImg },
    { name: 'Bootcamp Mobile Developer', company: 'DIO - Meutudo', year: '2025', linkToCertification: 'https://hermes.dio.me/certificates/EN0UZFWD.pdf', imagePreview: bootcampoPreviewImg },
    { name: 'JavaScript Fullstack', company: 'OneBitCode', year: '2024', linkToCertification: '', imagePreview: oneBitCodePreviewImg },

  ]


  return (
    <Container>
      <div className='mt-40 pt-12' id='certifications'>

        <div className=''>
          <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ willChange: "opacity" }}
          >{text('certifications.title')}
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

            <div className='max-sm:mt-5 mt-10 grid grid-cols-2 place-items-center gap-8 max-md:gap-2 max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-8'>

              {certifications.map((item, index) => (
                <motion.a key={index} href={item.linkToCertification}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}

                  style={{ willChange: "opacity" }}
                  layout='position'
                  target='_blank'
                  rel='noopener noreferer'
                  className='hover:scale-105 transition-all bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-5 w-[100%] flex flex-row items-end justify-start'>

                  <img src={item.imagePreview} className='w-40 h-auto bg-red-400 rounded-md max-sm:w-24' />

                  <div>

                    <p className='text-zinc-200 font-medium text-3xl ml-5 max-xl:text-xl max-sm:text-sm'>{item.name}</p>
                    <p className='text-zinc-200 font-medium text-xl ml-5 max-sm:text-sm'>{item.company}</p>
                    <p className='text-zinc-200 font-medium text-xl ml-5 max-sm:text-sm'>{item.year}</p>

                  </div>

                </motion.a>
              ))}


            </div>




          </div>

        </motion.div>

      </div>
    </Container>
  )
}
