import { motion, useScroll, useSpring } from "motion/react"

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        id="scroll-indicator"

        style={{
          scaleX,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          z: 1000,
          backgroundColor: "#4ade80",
        }}
        className="max-sm:hidden rounded-r-xl"
      />
    </>
  )
}