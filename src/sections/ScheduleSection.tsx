import { motion } from 'framer-motion'
import { useState } from 'react'

import topology1 from '../assets/topology-1.svg'
import huashixiazi from '../assets/huashixiazi.svg'

import schedule1 from '../assets/mobile-schedule-section1.png'
import schedule2 from '../assets/mobile-schedule-section2.png'
import schedule3 from '../assets/mobile-schedule-section3.png'
import schedule4 from '../assets/mobile-schedule-section4.png'

import Burst_pucker from '../assets/Burst-pucker-purple.svg'

const ScheduleSection = () => {
  const [activeSchedule, setActiveSchedule] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scheduleImages = [schedule1, schedule2, schedule3, schedule4]
  const features = [
    '丝滑体验：流畅动画，性能优化',
    '多彩风格：可选iOS主题布局',
    '暗色夜览：自由切换深夜模式',
    '课表截图：一键完整截图保存',
  ]

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1

    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.2
    if (distance === 1) return 1.1
    return 1
  }

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-50"
          style={{
            backgroundImage: `
                            linear-gradient(#D7C5F094 1px, transparent 1px),
                            linear-gradient(90deg, #D7C5F094 1px, transparent 1px)
                        `,
            backgroundSize: 'clamp(25px, 2.5vh, 40px) clamp(25px, 2.5vh, 30px)',
          }}
        />

        <img
          src={topology1}
          alt="topology"
          className="
                        absolute top-[20%] left-2/3 w-auto h-[50vh] transform -translate-x-1/2 -translate-y-1/2 
                        md:top-1/2 md:w-[70vw] md:h-auto
                    "
        />

        <div
          className="
                        absolute top-[75%] left-[20%] w-[50vw] h-[50vw] rounded-full transform -translate-x-1/2 -translate-y-1/2
                        md:top-[55%] md:left-[10%] md:w-[30vw] md:h-[30vw]
                    "
          style={{
            background: 'rgba(208, 197, 240, 0.8)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* 手机 */}
      <div>
        <motion.div
          className="
                        absolute top-[45%] left-1/2 w-[45vw] h-[50vh] transform -translate-x-1/2 -translate-y-1/2
                        sm:top-[40%] sm:left-[75%] sm:w-[32vw] sm:h-[40vh]
                        md:top-1/2 md:left-[80%] md:max-w-[350px] md:max-h-[500px] md:w-auto md:h-auto
                        lg:left-3/4 lg:max-w-[400px] lg:max-h-[600px]
                    "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.img
            key={activeSchedule}
            src={scheduleImages[activeSchedule]}
            alt="手机内容"
            className="w-full h-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.div>
      </div>

      <div>
        <motion.h2
          className="
                        absolute top-[8%] left-[53%] w-full text-[clamp(32px,11vw,96px)] font-bold font-['Microsoft_YaHei'] text-black leading-tight transform -translate-x-1/2 -translate-y-1/2
                        md:top-[10vh] md:left-1/2 md:text-[clamp(48px,7vw,118px)]
                        lg:left-[52%] lg:text-[clamp(52px,6.5vw,120px)]
                    "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          焕新课表<span className="invisible md:visible">·</span>完全重构
        </motion.h2>

        <motion.img
          src={Burst_pucker}
          alt="Burst decoration"
          className="
                        absolute top-[8%] left-[50%] w-[clamp(32px,11vw,96px)] h-auto transform -translate-x-1/2 -translate-y-1/2
                        md:hidden
                    "
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>

      {/*  选择条 */}
      <motion.div
        className="
                    absolute top-[80%] w-full left-[50%] text-center font-light font-['Microsoft_YaHei'] text-black leading-[2em] transform -translate-x-1/2 -translate-y-1/2
                    sm:top-[50%] sm:left-[25%] sm:w-[70vw]
                    md:top-1/2 md:left-[25%] md:max-w-[45vw] md:text-left md:w-full
                    lg:left-[30%] lg:max-w-[50vw]
                "
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.p
            key={index}
            className={`cursor-pointer transition-colors duration-200 text-[clamp(1.2rem,1.3vw,32px)] leading-[2.5em] ${
              activeSchedule === index
                ? 'text-purple-600 font-medium'
                : 'hover:text-purple-500'
            }
                            md:text-[clamp(1.4rem,2vw,60px)]
                            `}
            style={{
              transformOrigin: window.innerWidth >= 768 ? 'left' : 'center',
            }}
            animate={{
              scale: getScale(index),
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            onClick={() => setActiveSchedule(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {feature}
          </motion.p>
        ))}
      </motion.div>

      <div className="absolute bottom-[2vh] left-[1vw] hidden md:block">
        <img
          src={huashixiazi}
          alt="华师匣子 Logo"
          className="w-[80%] max-w-[550px] h-auto"
        />
      </div>
    </section>
  )
}

export default ScheduleSection
