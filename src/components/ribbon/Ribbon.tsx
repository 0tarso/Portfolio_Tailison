import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const Ribbon = () => {
    const { t: text } = useTranslation();

    const techTexts = ['Javascript', 'ReactJS', 'TypeScript', 'Full-stack']

    const [tech, setTech] = useState<string>("")
    const [indexTech, setIndexTech] = useState<number>(0)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const typeWriting = (text: string) => {
            let writingText = ""
            let i = 0

            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    writingText += text[i]
                    setTech(writingText + (i % 2 ? "|" : ""))
                    i++
                } else {
                    clearInterval(typingInterval)
                }
            }, 150)
        }

        typeWriting(techTexts[indexTech])

        intervalRef.current = setInterval(() => {
            setIndexTech((prevIndex) => (prevIndex + 1) % techTexts.length)
        }, 3000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [indexTech])

    return (
        <motion.div className='absolute'
            initial={{ translateX: "-500px", opacity: 0 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ willChange: "opacity, transform" }}
        >
            <h1 className='text-7xl font-bold text-white max-lg:text-6xl transition-all max-sm:text-5xl'>{text("hero.title")}</h1>
            <span className='text-7xl text-green-500 font-bold max-lg:text-5xl max-xl:text-5xl'>{tech}</span>
        </motion.div>
    )
}

export default Ribbon