import { motion } from 'framer-motion'

import sun from '../assets/sun.svg'
import line from '../assets/line.svg'
import rectangle1 from '../assets/rectangle1.png'
import rectangle2 from '../assets/rectangle2.png'
import rectangle3 from '../assets/rectangle3.png'
import rectangle4 from '../assets/rectangle4.png'
import rectangle5 from '../assets/rectangle5.png'
import rectangle6 from '../assets/rectangle6.png'
import rectangle7 from '../assets/rectangle7.png'
import rectangle8 from '../assets/rectangle8.png'

const LibrarySection = () => {
  // 彩色图标数据
  const iconBoxes = [
    {
      size: 'w-[198px] h-[196px]',
      position: 'top-[280px] left-[243px]',
      image: rectangle1,
    },
    {
      size: 'w-[220px] h-[214px]',
      position: 'top-[66px] left-[441px]',
      image: rectangle2,
    },
    {
      size: 'w-[154px] h-[147px]',
      position: 'top-[115px] left-[777px]',
      image: rectangle3,
    },
    {
      size: 'w-[125px] h-[120px]',
      position: 'top-[101px] left-[1001px]',
      image: rectangle4,
    },
    {
      size: 'w-[101px] h-[98px]',
      position: 'top-[-1px] left-[699px]',
      opacity: 'opacity-50',
      image: rectangle5,
    },
    {
      size: 'w-[101px] h-[98px]',
      position: 'top-[26px] left-[323px]',
      opacity: 'opacity-25',
      image: rectangle6,
    },
    {
      size: 'w-[187px] h-[185px]',
      position: 'bottom-[114px] left-[49px]',
      image: rectangle7,
    },
    {
      size: 'w-[130px] h-[124px]',
      position: 'top-[342px] left-[618px]',
      opacity: 'opacity-25',
      image: rectangle8,
    },
  ]

  return (
    <section className="relative h-[100vh] bg-white overflow-hidden">
      {/* 模糊圆形装饰 */}
      <div
        className="absolute top-[188px] right-[115px] w-[377px] h-[370px] rounded-full"
        style={{
          background: 'rgba(215, 197, 240, 0.6)',
          filter: 'blur(50px)',
        }}
      />

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

      {/* 装饰性线条 */}
      <div className="absolute top-[-62px] left-[-122px] w-[1243px] h-[720px]">
        <img
          src={line}
          alt="line"
          className="absolute top-[5vh] left-[5vh] w-[100vw]"
        />
      </div>

      {/* 主标题 */}
      <motion.h2
        className="absolute top-[572px] left-[301px] text-[128px] font-bold font-['Microsoft_YaHei'] text-black text-center leading-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        有匣子, 生活更从容
      </motion.h2>

      {/* 功能描述 */}
      <motion.div
        className="absolute top-[311px] right-[42px] max-w-[336px] text-right"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3 className="text-[48px] font-bold font-['Microsoft_YaHei'] text-[#626262] leading-tight mb-4">
          图书馆预约
          <br />
          快人一步
          <br />
          免操作，秒登录
        </h3>
      </motion.div>

      {/* 图片网格 */}
      <div className="absolute inset-0">
        {iconBoxes.map((box, i) => (
          <motion.div
            key={i}
            className={`absolute ${box.size} ${box.position} ${box.opacity || ''} rounded-[20px] drop-shadow-lg overflow-hidden`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: box.opacity ? 0.5 : 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* 显示rectangle图片 */}
            <img
              src={box.image}
              alt={`Rectangle ${i + 1}`}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </motion.div>
        ))}
      </div>

      {/* 太阳图案 */}
      <img
        src={sun}
        alt="sun"
        className="absolute top-[5vh] left-[5vh] w-[20vw]"
      />
    </section>
  )
}

export default LibrarySection
