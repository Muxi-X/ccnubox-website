import { motion, AnimatePresence } from 'framer-motion'
// import { ThumbsUp } from 'lucide-react'
import { useState, useEffect } from 'react'

import gradeScreen1 from '../assets/grade-screen1.png'
import gradeScreen2 from '../assets/grade-screen2.png'
import gradeScreen3 from '../assets/grade-screen3.png'
import gradeScreen4 from '../assets/grade-screen4.png'
import gradeScreen5 from '../assets/grade-screen5.png'
import thumbUp from '../assets/thumb-up.png'

const GradesSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0)

  // 手机屏幕内容配置
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
    }, 4000) // 每4秒切换一次

    return () => clearInterval(interval)
  }, [phoneScreens.length])

  const currentData = phoneScreens[currentScreen]

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

      {/* 模糊标题背景 */}
      <div className="absolute top-[15vh] left-1/2 -translate-x-1/2 text-[15vw] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] blur-[7px] select-none whitespace-nowrap">
        {currentData.title}
      </div>
      <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 text-[15vw] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] blur-[7px] select-none whitespace-nowrap">
        {currentData.subtitle}
      </div>

      {/* 手机展示 */}
      <motion.div
        className="absolute top-[34px] left-[542px] w-[362px] h-[730px] drop-shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* 手机外框 */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#3A4245] rounded-[40px]" />
          <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[10px] bg-[#121515] rounded-[35px]" />

          {/* 手机屏幕内容 - 成绩界面 */}
          <div className="absolute top-[11px] left-[12px] right-[12px] bottom-[18px] bg-white rounded-[30px] overflow-hidden">
            <AnimatePresence mode="wait">
              {currentData.image ? (
                <motion.img
                  key={currentScreen}
                  src={currentData.image}
                  alt={`${currentData.title}界面`}
                  className="w-full h-full object-cover rounded-[30px]"
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

          {/* 手机按键 */}
          <div className="absolute right-[-3px] top-[265px] w-[3px] h-[44px] bg-[#121515] rounded-r" />
          <div className="absolute right-[-3px] top-[141px] w-[3px] h-[84px] bg-[#121515] rounded-r" />

          {/* 摄像头 */}
          <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[19px] h-[18px] bg-[#262C2D] rounded-full" />
        </div>
      </motion.div>

      {/* 功能卡片区域 - 重新设计为4个固定位置的气泡 */}
      <div className="absolute inset-0">
        {/* 第1个气泡 - 左上角，带尾巴样式 */}
        {currentScreen >= 1 && (
          <motion.div
            className="absolute top-[120px] left-[100px] w-[380px] h-[200px]"
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {/* 主要气泡体 */}
            <div
              className="absolute inset-0 rounded-[25px] backdrop-blur-[25px]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(147, 132, 255, 0.9) 0%, rgba(138, 122, 255, 0.95) 50%, rgba(129, 112, 255, 1) 100%)',
                boxShadow:
                  '0px 8px 32px rgba(102, 85, 228, 0.3), inset 0px 2px 20px rgba(255, 255, 255, 0.2)',
              }}
            />

            {/* 气泡尾巴 */}
            <div
              className="absolute bottom-[-15px] left-[40px] w-[30px] h-[30px]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(147, 132, 255, 0.9) 0%, rgba(138, 122, 255, 0.95) 50%, rgba(129, 112, 255, 1) 100%)',
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                filter: 'blur(0.5px)',
              }}
            />

            <div className="absolute top-[25px] left-[25px] w-[330px] text-white">
              <h3 className="text-[22px] font-bold font-['Microsoft_YaHei'] leading-[1.4em] whitespace-pre-line">
                <span className="text-[#E8DCFF] text-[18px]">查算学分绩：</span>
                {'\n'}
                <span className="text-white">
                  平时期末，明细详情，{'\n'}加权平均，秒出结果
                </span>
              </h3>
            </div>
          </motion.div>
        )}

        {/* 第2个气泡 - 左下角 */}
        {currentScreen >= 2 && (
          <motion.div
            className="absolute bottom-[180px] left-[120px] w-[350px] h-[150px]"
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6655E4] to-[#8B7AE7] rounded-[25px]" />
            <div className="absolute top-[25px] left-[25px] w-[300px] text-white">
              <h3 className="text-[24px] font-bold font-['Microsoft_YaHei'] leading-[1.4em] whitespace-pre-line">
                统计周期、课程性质：{'\n'}自由多选
              </h3>
            </div>
          </motion.div>
        )}

        {/* 第4个气泡 - 点赞图标，右侧中间 */}
        {currentScreen >= 4 && (
          <motion.div
            className="absolute top-[15vh] right-[15vw] w-[150px] h-[120px]"
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6655E4] to-[#D75EFF] opacity-90 rounded-[20px]" />
            <div className="absolute top-[20px] left-[20px] w-[110px] h-[80px] flex items-center justify-center">
              <img src={thumbUp} alt="点赞图标" className="w-[10vw]"></img>
            </div>
          </motion.div>
        )}

        {/* 第3个气泡 - 右上角 */}
        {currentScreen >= 3 && (
          <motion.div
            className="absolute top-[30vh] right-[5vw] w-[380px] h-[220px]"
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div
              className="absolute inset-0 rounded-[25px] backdrop-blur-[25px]"
              style={{
                background:
                  'linear-gradient(128deg, rgba(102, 85, 228, 0.22) 0%, rgba(102, 85, 228, 0.66) 51.58%, rgba(102, 85, 228, 0.78) 78%, rgba(139, 122, 231, 1) 98.85%)',
                boxShadow: 'inset 0px 4px 40px 0px rgba(255, 255, 255, 0.35)',
              }}
            />
            <div className="absolute top-[25px] left-[25px] w-[330px] text-white">
              <h3 className="text-[24px] font-bold font-['Microsoft_YaHei'] leading-[1.4em] whitespace-pre-line">
                已修学分：{'\n'}分类列表，{'\n'}清查学分一目了然
              </h3>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GradesSection
