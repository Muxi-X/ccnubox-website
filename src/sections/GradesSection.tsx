import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import gradeScreen1 from '../assets/grade-screen1.png'
import gradeScreen2 from '../assets/grade-screen2.png'
import gradeScreen3 from '../assets/grade-screen3.png'
import gradeScreen4 from '../assets/grade-screen4.png'
import gradeScreen5 from '../assets/grade-screen5.png'
import thumbUp from '../assets/thumb-up.png'

const GradesSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0)

  const phoneScreens = [
    {
      image: gradeScreen1,
      title: '成绩查询',
      subtitle: '一键计算',
    },
    {
      image: gradeScreen2,
      title: '成绩查询',
      subtitle: '一键计算',
    },
    {
      image: gradeScreen3,
      title: '成绩查询',
      subtitle: '一键计算',
    },
    {
      image: gradeScreen4,
      title: '成绩查询',
      subtitle: '一键计算',
    },
    {
      image: gradeScreen5,
      title: '成绩查询',
      subtitle: '一键计算',
    },
  ]

  // 自动切换屏幕
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % phoneScreens.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [phoneScreens.length])

  const currentData = phoneScreens[currentScreen]

  return (
    <section className="relative h-screen bg-white overflow-hidden">
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

        <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 text-[clamp(6rem,12vw,10rem)] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] blur-[7px] select-none whitespace-nowrap">
          {currentData.title}
        </div>
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 text-[clamp(6rem,12vw,10rem)] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] blur-[7px] select-none whitespace-nowrap">
          {currentData.subtitle}
        </div>
      </div>

      <motion.div
        className="
                        absolute top-1/2 left-1/2 w-[65vw] h-[65vh] drop-shadow-lg transform -translate-x-1/2 -translate-y-1/2
                        md:w-[clamp(280px,20vw,400px)] md:h-[clamp(585px,42vw,835px)] md:max-h-[85vh] md:min-h-[500px]
                    "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#3A4245] rounded-[40px]" />
          <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[10px] bg-[#121515] rounded-[35px]" />

          <div className="absolute top-[11px] left-[12px] right-[12px] bottom-[18px] bg-white rounded-[30px] overflow-hidden">
            <AnimatePresence mode="wait">
              {currentData.image ? (
                <motion.img
                  key={currentScreen}
                  src={currentData.image}
                  alt={`${currentData.title}界面`}
                  className="w-2xs object-cover rounded-[30px]"
                  style={{
                    objectPosition: 'center center',
                    imageRendering: 'crisp-edges',
                    minWidth: '100%',
                    minHeight: '100%',
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.div
                  key={currentScreen}
                  className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-[30px] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-xl font-bold text-gray-700 mb-2">
                      {currentData.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentData.subtitle}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute right-[-3px] top-[36.3%] w-[3px] h-[6%] bg-[#121515] rounded-r" />
          <div className="absolute right-[-3px] top-[19.3%] w-[3px] h-[11.5%] bg-[#121515] rounded-r" />

          <div className="absolute top-[2.7%] left-1/2 transform -translate-x-1/2 w-[5.2%] h-[2.5%] bg-[#262C2D] rounded-full" />
        </div>
      </motion.div>

      <div className="absolute inset-0">
        {currentScreen >= 1 && (
          <motion.div
            className="
                            absolute top-[12vh] left-[4vw] w-[clamp(180px,30vw,240px)] h-[clamp(90px,15vh,130px)] 
                            md:top-[8vh] md:left-[8vw] md:w-[28vw] md:h-[16vh] md:max-w-[380px] md:max-h-[200px]
                        "
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-[25px] backdrop-blur-[25px]"
              style={{
                background:
                  'linear-gradient(231.04deg, rgba(102, 85, 228, 0.066) 6.89%, rgba(102, 85, 228, 0.198) 47.15%, rgba(102, 85, 228, 0.234) 67.73%, rgba(139, 122, 231, 0.3) 84.04%)',
                boxShadow:
                  '0px 8px 32px rgba(102, 85, 228, 0.3), inset 0px 2px 20px rgba(255, 255, 255, 0.2)',
              }}
            />

            <div
              className="absolute bottom-[-25px] right-[15%] w-[35px] h-[25px]"
              style={{
                background:
                  'linear-gradient(231.04deg, rgba(102, 85, 228, 0.066) 6.89%, rgba(102, 85, 228, 0.198) 47.15%, rgba(102, 85, 228, 0.234) 67.73%, rgba(139, 122, 231, 0.3) 84.04%)',
                clipPath: 'polygon(0% 0%, 70% 0%, 100% 100%)',
                filter: 'blur(0.5px)',
                transform: 'rotate(-15deg)',
              }}
            />

            <div
              className="
                    absolute top-[8%] left-[5%] w-[90%] h-[84%] flex flex-col justify-center p-2
                    md:top-[12.5%] md:left-[6.6%] md:w-[86.8%] md:h-auto md:p-0
                "
            >
              <h3
                className="
                    text-[clamp(0.9rem,3vw,1.2rem)] font-bold font-['Microsoft_YaHei'] leading-[1.3em]
                    md:text-[clamp(1.2rem,1.6vw,1.5rem)] md:leading-[1.4em]
                "
              >
                <div
                  className="
                        text-[#D893FF] text-[clamp(1rem,3.2vw,1.3rem)] mb-1
                        md:text-[clamp(1.3rem,1.6vw,48px)] md:mb-2
                    "
                >
                  查算学分绩：
                </div>
                <div
                  className="
                        text-black text-[clamp(0.8rem,2.5vw,1rem)] leading-[1.3em]
                        md:text-[clamp(1.2rem,1.4vw,32px)] md:leading-[1.3em]
                    "
                >
                  平时期末，明细详情，
                  <br />
                  加权平均，秒出结果
                </div>
              </h3>
            </div>
          </motion.div>
        )}

        {currentScreen >= 2 && (
          <motion.div
            className="
                            absolute bottom-[20vh] left-[5vw] w-[clamp(160px,25vw,240px)] h-[clamp(70px,10vh,120px)] 
                            md:bottom-[15vh] md:left-[10vw] md:w-[26vw] md:h-[14vh] md:max-w-[360px] md:max-h-[160px]
                        "
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-[25px]"
              style={{
                background:
                  'linear-gradient(139.57deg, #6655E4 28.56%, rgba(215, 94, 255, 0.7) 93.11%)',
              }}
            />

            <div
              className="absolute top-[-25px] right-[15%] w-[35px] h-[25px]"
              style={{
                background:
                  'linear-gradient(139.57deg, #6655E4 28.56%, rgba(215, 94, 255, 0.7) 93.11%)',
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)',
                filter: 'blur(0.5px)',
                transform: 'rotate(0deg)',
              }}
            />

            <div
              className="
                    absolute top-[8%] left-[5%] w-[90%] h-[84%] flex flex-col justify-center p-2
                    md:top-[16.7%] md:left-[7.1%] md:w-[85.7%] md:h-auto md:p-0
                "
            >
              <h3
                className="
                    text-[clamp(0.9rem,3vw,1.2rem)] font-bold font-['Microsoft_YaHei'] leading-[1.3em]
                    md:text-[clamp(1.2rem,1.6vw,1.5rem)] md:leading-[1.4em]
                "
              >
                <div
                  className="
                                text-white text-[clamp(1rem,3.2vw,1.3rem)] mb-1
                                md:text-[clamp(1.3rem,1.6vw,48px)] md:mb-2
                            "
                >
                  统计周期、课程性质：
                </div>
                <div
                  className="
                        text-[#e4e4e4] text-[clamp(0.8rem,2.5vw,1rem)] leading-[1.3em]
                        md:text-[clamp(1.2rem,1.4vw,32px)] md:leading-[1.3em]
                    "
                >
                  自由多选
                </div>
              </h3>
            </div>
          </motion.div>
        )}

        {currentScreen >= 3 && (
          <motion.div
            className="
                            absolute top-[40vh] right-[5vw] w-[clamp(180px,28vw,260px)] h-[clamp(100px,14vh,150px)] 
                            md:top-[42vh] md:right-[10vw] md:w-[28vw] md:h-[18vh] md:max-w-[400px] md:max-h-[220px]
                        "
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-[25px] backdrop-blur-[25px]"
              style={{
                background:
                  'linear-gradient(231.04deg, rgba(102, 85, 228, 0.066) 6.89%, rgba(102, 85, 228, 0.198) 47.15%, rgba(102, 85, 228, 0.234) 67.73%, rgba(139, 122, 231, 0.3) 84.04%)',
                boxShadow: 'inset 0px 4px 40px 0px rgba(255, 255, 255, 0.35)',
              }}
            />

            <div
              className="absolute bottom-[-25px] left-[15%] w-[35px] h-[25px]"
              style={{
                background:
                  'linear-gradient(231.04deg, rgba(102, 85, 228, 0.066) 6.89%, rgba(102, 85, 228, 0.198) 47.15%, rgba(102, 85, 228, 0.234) 67.73%, rgba(139, 122, 231, 0.3) 84.04%)',
                clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                filter: 'blur(0.5px)',
                transform: 'rotate(0deg)',
              }}
            />

            <div
              className="
                        absolute top-[8%] left-[5%] w-[90%] h-[84%] flex flex-col justify-center p-2
                        md:top-[11.4%] md:left-[6.6%] md:w-[86.8%] md:h-auto md:p-0
                    "
            >
              <h3
                className="
                        text-[clamp(0.9rem,3vw,1.2rem)] font-bold font-['Microsoft_YaHei'] leading-[1.3em]
                        md:text-[clamp(1.2rem,1.6vw,1.5rem)] md:leading-[1.4em]
                    "
              >
                <div
                  className="
                            text-[#D893FF] text-[clamp(1rem,3.2vw,1.3rem)] mb-1
                            md:text-[clamp(1.3rem,1.6vw,48px)] md:mb-2
                        "
                >
                  已修学分：
                </div>
                <div
                  className="
                            text-black text-[clamp(0.8rem,2.5vw,1rem)] leading-[1.3em]
                            md:text-[clamp(1.2rem,1.4vw,32px)] md:leading-[1.3em]
                        "
                >
                  分类列表，
                  <br />
                  清查学分一目了然
                </div>
              </h3>
            </div>
          </motion.div>
        )}

        {currentScreen >= 4 && (
          <motion.div
            className="
                            absolute top-[20vh] right-[8vw] w-[clamp(70px,10vw,120px)] h-[clamp(50px,8vh,80px)]
                            md:top-[18vh] md:right-[22vw] md:w-[12vw] md:h-[12vh] md:max-w-[160px] md:max-h-[120px]
                        "
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-[20px]"
              style={{
                background:
                  'linear-gradient(139.57deg, #6655E4 28.56%, rgba(215, 94, 255, 0.7) 93.11%)',
              }}
            />

            <div
              className="absolute bottom-[-25px] left-[15%] w-[35px] h-[25px]"
              style={{
                background:
                  'linear-gradient(139.57deg, #6655E4 28.56%, rgba(215, 94, 255, 0.7) 93.11%)',
                clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                filter: 'blur(0.5px)',
                transform: 'rotate(0deg)',
              }}
            />

            <div
              className="
                                    absolute top-[8%] left-[5%] w-[90%] h-[84%] flex items-center justify-center p-2
                                    md:top-[16.7%] md:left-[13.3%] md:w-[73.3%] md:h-[66.7%] md:p-0
                                "
            >
              <img
                src={thumbUp}
                alt="thumbUp"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GradesSection
