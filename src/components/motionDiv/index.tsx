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
        scale: 1 // Torna o conteúdo visível quando entra na tela
      }}
      viewport={{ once: false }} // Garante que o efeito será aplicado repetidamente
      transition={{ duration: 0.9 }} // Duração da transição
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv