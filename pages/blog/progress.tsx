import { FC } from 'react'
import { motion, MotionValue } from 'framer-motion'

interface Props {
  progress: MotionValue<number>
}

export const ProgressBar: FC<Props> = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 w-full h-2 bg-purple-400 large:h-3 transform-origin-0"
      style={{ scaleX: progress }}
    />
  )
}
