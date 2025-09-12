import { motion } from 'framer-motion'
import { useState } from 'react'

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
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    ['图书馆预约', '快人一步', '免操作，秒登录'], // 对应 rectangle2
    ['校园卡支付', '秒开小程序', '链接支付宝，华大V卡通', '秒跳转，更轻松'], // 对应 rectangle3
    [
      '急着找部门？',
      '整合学校各部门电话、地址、工作时间',
      '点击号码自动跳转拨号并填充号码',
    ], // 对应 rectangle5
    ['微信服务号·不再走迷宫', '官网校历', '宿舍电费', 'GIS立体3D官方地图'], // 对应 rectangle3 rectangle7 rectangle8
    [
      '整合常用网站',
      '真·一站式懒人服务',
      '————永远"在线"',
      '密码自动填充，登录自动点击',
      '————登录的事儿，匣子帮你干',
    ], // 对应 rectangle6
  ]

  const icons = [
    {
      id: 0, // 学分绩
      size: 'w-[clamp(60px,10vw,140px)] h-[clamp(60px,10vh,140px)]',
      position: 'bottom-[3%] left-[1%]',
      image: rectangle1,
      // 你怎么会没有feature呢
      opacity: 1,
      row: 0,
    },
    {
      id: 1, // 图书馆
      size: 'w-[clamp(60px,10vw,140px)] h-[clamp(60px,10vh,140px)]',
      position: 'bottom-[35%] left-[20%]',
      image: rectangle2,
      featureIndex: 0,
      opacity: 1,
      row: 0,
    },
    {
      id: 2, // 校园卡
      size: 'w-[clamp(80px,10vw,140px)] h-[clamp(80px,10vh,140px)]',
      position: 'bottom-[70%] left-[35%]',
      image: rectangle3,
      featureIndex: 1,
      opacity: 1,
      row: 1,
    },
    {
      id: 3, // 地图
      size: 'w-[clamp(80px,10vw,140px)] h-[clamp(80px,10vh,140px)]',
      position: 'bottom-[80%] left-[60%]',
      image: rectangle4,
      featureIndex: 3,
      opacity: 1,
      row: 1,
    },
    {
      id: 4, // 本子
      size: 'w-[clamp(50px,7vw,80px)] h-[clamp(50px,7vh,80px)]',
      position: 'bottom-[50%] left-[50%]',
      image: rectangle5,
      featureIndex: 2,
      opacity: 0.4,
      row: 0,
    },
    {
      id: 5, // 网站
      size: 'w-[clamp(50px,7vw,80px)] h-[clamp(50px,7vh,80px)]',
      position: 'top-[5%] left-[50%]',
      image: rectangle6,
      featureIndex: 4,
      opacity: 0.4,
      row: 1,
    },
    {
      id: 6, // 黄色册子
      size: 'w-[clamp(50px,7vw,80px)] h-[clamp(50px,7vh,80px)]',
      position: 'top-[8%] left-[30%]',
      image: rectangle8,
      featureIndex: 3,
      opacity: 0.4,
      row: 0,
    },
    {
      id: 7, // 电费
      size: 'w-[clamp(50px,7vw,80px)] h-[clamp(50px,7vh,80px)]',
      position: 'top-[15%] left-[75%]',
      image: rectangle7,
      featureIndex: 3,
      opacity: 1,
      row: 1,
    },
  ]

  return (
    <section className="relative h-screen bg-white overflow-x-hidden overflow-y-visible">
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

        {/* 忠诚！！！ */}
        <img
          src={sun}
          alt="sun"
          className="
                        absolute top-[15vh] left-3/4 w-[40vw] max-w-[300px] h-auto  transform -translate-x-1/2 -translate-y-1/2
                        md:left-[15%] md:w-[20vw]
                    "
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <div
          className="
                        absolute bottom-[25%] left-0 w-full h-full flex items-end justify-start z-[-6]
                        md:bottom-0
                    "
        >
          <img
            src={line}
            alt="line"
            className="h-[100%] w-auto "
            style={{
              objectFit: 'contain',
              objectPosition: 'left bottom',
              minHeight: '400px',
            }}
          />
        </div>

        <div
          className="
                        absolute inset-0 hidden z-10
                        md:block 
                    "
        >
          {icons.map((icon, i) => (
            <motion.div
              key={icon.id}
              className={`absolute ${icon.size} ${icon.position} rounded-[20px] drop-shadow-lg overflow-hidden cursor-pointer`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: icon.opacity }}
              transition={{
                duration: 0.6,
                delay: (i + 5) * 0.1,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                opacity: icon.opacity,
                transition: { duration: 0.1 },
              }}
              onClick={() =>
                icon.featureIndex !== undefined &&
                setActiveFeature(icon.featureIndex)
              }
            >
              <img
                src={icon.image}
                alt={`Decoration ${icon.id + 1}`}
                className="w-full h-full object-contain rounded-[20px]"
                style={{
                  imageRendering: 'crisp-edges',
                  backfaceVisibility: 'hidden',
                }}
              />
            </motion.div>
          ))}
        </div>

        <div
          className="
                        absolute inset-0 block 
                        md:hidden
                    "
        >
          <div className="absolute top-[35vh] left-[-4%] w-[96vw] h-[12vh] grid grid-cols-4 gap-6">
            {icons
              .filter(icon => icon.row === 0)
              .map((icon, i) => (
                <motion.div
                  key={icon.id}
                  className="w-full h-full rounded-[12px] drop-shadow-lg overflow-hidden cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                  onClick={() =>
                    icon.featureIndex !== undefined &&
                    setActiveFeature(icon.featureIndex)
                  }
                >
                  <img
                    src={icon.image}
                    alt={`Feature ${icon.id + 1}`}
                    className="w-full h-full object-contain rounded-[12px]"
                    style={{
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                </motion.div>
              ))}
          </div>

          <div className="absolute top-[48vh] left-[6%] w-[96vw] h-[12vh] grid grid-cols-4 gap-6">
            {icons
              .filter(icon => icon.row === 1)
              .map((icon, i) => (
                <motion.div
                  key={icon.id}
                  className="w-full h-full rounded-[12px] drop-shadow-lg overflow-hidden cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: (i + 5) * 0.1,
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                  onClick={() =>
                    icon.featureIndex !== undefined &&
                    setActiveFeature(icon.featureIndex)
                  }
                >
                  <img
                    src={icon.image}
                    alt={`Decoration ${icon.id + 1}`}
                    className="w-full h-full object-contain rounded-[12px]"
                    style={{
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="
                    absolute top-[85%] left-1/2 w-[90%] max-w-[400px] min-h-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10
                    md:top-[60%] md:left-[70%] md:w-[45%] md:h-[20%] md:min-h-0 md:max-w-none
                "
      >
        <div
          className="absolute rounded-full"
          style={{
            background: 'rgba(215, 197, 240, 0.6)',
            filter: 'blur(30px)',
            width: '200px',
            height: '200px',
            left: '60%',
            top: '0%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <motion.div
          className="inset-0 flex flex-col p-4 text-right md:p-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          key={activeFeature}
        >
          <h2
            className="
                            text-[clamp(1.5rem,4vw,2.2rem)] font-bold font-['Microsoft_YaHei'] text-[#B485F6] mb-3 leading-tight hidden
                            md:text-[clamp(1.8rem,3vw,2.8rem)] md:mb-4 md:block
                        "
          >
            {features[activeFeature][0]}
          </h2>

          <div className="space-y-1 md:space-y-2">
            {features[activeFeature].slice(1).map((line, index) => (
              <p
                key={index}
                className="text-[clamp(1.3rem,3.5vw,1.9rem)] font-bold md:text-[clamp(1.2rem,2vw,1.6rem)] text-gray-700 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          <h2
            className="
                            text-[clamp(1.4rem,3.5vw,2rem)] font-bold font-['Microsoft_YaHei'] text-[#B485F6] mb-3 leading-tight block
                            md:text-[clamp(1.8rem,3vw,2.8rem)] md:mb-4 md:hidden
                        "
          >
            {features[activeFeature][0]}
          </h2>
        </motion.div>
      </div>

      <div
        className="
                    absolute top-[8vh] left-[5%] w-[60%] md:bottom-[5%] 
                    md:left-[40%] md:top-auto
                "
      >
        <motion.h2
          className="
                        text-[clamp(2.5rem,4vw,128px)] font-bold font-['Microsoft_YaHei'] text-black leading-tight whitespace-nowrap
                        md:text-[clamp(3.5rem,5vw,180px)] md:text-right 
                    "
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          有匣子,
          <br className="md:hidden" />
          生活更从容
        </motion.h2>
      </div>
    </section>
  )
}

export default LibrarySection
