import { motion } from 'framer-motion'
import { useState } from 'react'

import topology1 from '../assets/topology-1.svg'
import huashixiazi from '../assets/huashixiazi.svg'
import schedule1 from '../assets/schedule-section1.svg'
import schedule2 from '../assets/schedule-section2.svg'
import schedule3 from '../assets/schedule-section3.svg'
import schedule4 from '../assets/schedule-section4.svg'

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

  // 计算缩放效果
  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.5
    if (distance === 1) return 1.2
    return 1
  }
  return (
    <section className="relative h-[100vh] bg-white overflow-hidden">
      {/* 网格背景 */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(#D7C5F094 1px, transparent 1px),
              linear-gradient(90deg, #D7C5F094 1px, transparent 1px)
            `,
            backgroundSize: '3vh 3vh',
          }}
        />
      </div>

      {/* 网络拓扑背景装饰 */}
      <img
        src={topology1}
        alt="topology"
        className="absolute top-[0vh] right-[0vh] w-[70vw]"
      />

      {/* 模糊圆形装饰 */}
      <div
        className="absolute top-[313px] left-[48px] w-[377px] h-[370px] rounded-full"
        style={{
          background: 'rgba(208, 197, 240, 0.8)',
          filter: 'blur(60px)',
        }}
      />

      {/* HUASHIXIAZI 标题 */}
      <div className="absolute bottom-[3vh] left-[3vw]">
        <img src={huashixiazi} alt="华师匣子 Logo" className="w-[50vw] " />
      </div>

      {/* 手机展示 */}
      <motion.div
        className="absolute bottom-[-3vh] right-[5vw] w-[50vh]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* 手机内容 */}
        <motion.img
          key={activeSchedule}
          src={scheduleImages[activeSchedule]}
          alt="手机内容"
          className="w-[50vw] bottom-[0vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* 主标题 */}
      <motion.h2
        className="absolute top-[18px] left-[48px] lg:left-[48px] md:left-[24px] sm:left-[20px] text-[118px] lg:text-[118px] md:text-[80px] sm:text-[48px] font-bold font-['Microsoft_YaHei'] text-black leading-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        焕新课表·完全重构
      </motion.h2>

      {/* 功能介绍文本 */}
      <motion.div
        className="absolute top-[310px] left-[134px] max-w-[728px] text-2xl font-light font-['Microsoft_YaHei'] text-black leading-[2em]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.p
            key={index}
            className={`cursor-pointer transition-colors duration-200 text-3xl leading-[2.5em] ${
              activeSchedule === index
                ? 'text-purple-600 font-medium'
                : 'hover:text-purple-500'
            }`}
            style={{
              transformOrigin: 'left center',
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
    </section>
  )
}

export default ScheduleSection
