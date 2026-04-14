import Container from '../container'

import { motion } from 'motion/react'

export default function LinkedinFrame() {


  const linkedinPosts = [
    { link: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7444166053825310720?collapsed=1' },
    { link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7427790681601011713?collapsed=1' },

  ]

  return (
    <Container>
      <div className='max-sm:mt-[400px]'>


        <div className=''>
          <motion.span className='w-fit text-white text-6xl font-bold max-sm:text-4xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ willChange: "opacity" }}
          >Social
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

        <motion.div className='flex gap-12 relative'

        >

          <div className="w-full flex justify-center max-md:items-center mt-8 gap-4 max-md:flex-col">


            {linkedinPosts.map((post, index) => (

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index + 0.5 }}
                style={{ willChange: "opacity" }}
                key={post.link} className=" relative rounded-xl p-[2px] bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-500/20 max-w-[550px] w-full">

                <div className="rounded-xl bg-white backdrop-blur-3xl p-3 overflow-hidden border-b-4 border-b-green-500">

                  <div className="w-full h-[550px] max-md:h-[550px] overflow-hidden rounded-lg">
                    <iframe
                      loading='lazy'
                      src={post.link}
                      className="w-full h-full border-none -mb-16"
                      scrolling="no"
                      title="Publicação incorporada"
                    />
                  </div>

                </div>
              </motion.div>
            )

            )}

          </div>
        </motion.div>
      </div>

    </Container>
  )
}
