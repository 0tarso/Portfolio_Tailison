import { motion } from 'motion/react'
import { memo } from 'react'

interface SkillsCardProps {
  stack: string
  progress: number
}

const StackProgress = memo(({ stack, progress }: SkillsCardProps) => {
  return (

    <div className='mb-6' key={stack}>

      <span className='font-medium text-zinc-400'>{stack}</span>

      <div className='bg-gray-200 shadow-green-300 shadow-md -skew-x-6'>
        <motion.div
          style={{ willChange: "transform", originX: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: `${progress}%`, }}
          transition={{ duration: 0.3, ease: 'linear' }}
          className='h-[6px] bg-gradient-to-r from-green-800 to-green-400 rounded-r-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-green-200'
        >
        </motion.div>

      </div>
    </div>
  )
})

export default StackProgress