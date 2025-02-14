import { ReactNode } from 'react'
import { motion } from 'motion/react'

const MotionDiv = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      style={{
        width: 'auto',
        height: 'auto',
        scale: 0.9,
        opacity: 0,
        willChange: "opacity, transform"
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: false }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv