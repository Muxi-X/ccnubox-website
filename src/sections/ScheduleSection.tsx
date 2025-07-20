import { motion } from 'framer-motion'
import burstIcon from '../assets/burst-icon.svg'

const ScheduleSection = () => {
  return (
    <section className="relative h-[800px] lg:h-[800px] md:h-[600px] sm:h-[500px] bg-white overflow-hidden">
      {/* 网络拓扑背景装饰 */}
      <div className="absolute top-[-143px] left-[521px] w-[1049px] h-[1047px]">
        <svg viewBox="0 0 1049 1047" className="w-full h-full stroke-[#D7C5F0] stroke-[1.25px] fill-none">
          {/* 简化的网络拓扑图案 */}
          <circle cx="524" cy="523" r="400" />
          <circle cx="524" cy="523" r="300" />
          <circle cx="524" cy="523" r="200" />
          <circle cx="524" cy="523" r="100" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * Math.PI / 180
            const x1 = 524 + Math.cos(angle) * 100
            const y1 = 523 + Math.sin(angle) * 100
            const x2 = 524 + Math.cos(angle) * 400
            const y2 = 523 + Math.sin(angle) * 400
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </svg>
      </div>

      {/* 模糊圆形装饰 */}
      <div 
        className="absolute top-[313px] left-[48px] w-[377px] h-[370px] rounded-full opacity-58"
        style={{
          background: 'rgba(215, 197, 240, 0.58)',
          filter: 'blur(108px)'
        }}
      />

      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-10">
        {/* 横向网格线 */}
        <div className="space-y-[25px] mt-1">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={`h-${i}`} className="w-full h-0 border-t border-[#6655E4]" />
          ))}
        </div>
        {/* 纵向网格线 */}
        <div className="absolute top-0 left-[23px] flex space-x-[25px]">
          {Array.from({ length: 56 }).map((_, i) => (
            <div key={`v-${i}`} className="w-0 h-[800px] border-l border-[#6655E4]" />
          ))}
        </div>
      </div>

      {/* 手机展示 */}
      <motion.div 
        className="absolute top-[181px] right-[60px] w-[417px] h-[675px]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* 手机外框 */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#3A4245] rounded-[40px] shadow-lg" />
          <div className="absolute top-[5px] left-[6px] right-[6px] bottom-[9px] bg-[#121515] rounded-[35px]" />
          
          {/* 手机屏幕内容 - 课表界面 */}
          <div className="absolute top-[10px] left-[14px] right-[14px] bottom-[17px] bg-white rounded-[30px] overflow-hidden">
            <div className="p-4 h-full bg-gradient-to-br from-purple-100 to-pink-100">
              <div className="text-lg font-bold text-gray-800 mb-4">课程表</div>
              
              {/* 课表网格 */}
              <div className="grid grid-cols-5 gap-1 h-full">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`
                      rounded-lg p-2 text-xs
                      ${Math.random() > 0.7 ? 
                        Math.random() > 0.5 ? 'bg-purple-200 text-purple-800' : 'bg-pink-200 text-pink-800'
                        : 'bg-gray-50'
                      }
                    `}
                  >
                    {Math.random() > 0.7 && (
                      <>
                        <div className="font-medium">课程</div>
                        <div className="text-[10px] opacity-70">教室</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 手机按键 */}
          <div className="absolute right-[-3px] top-[245px] w-[3px] h-[41px] bg-[#121515] rounded-r" />
          <div className="absolute right-[-3px] top-[131px] w-[3px] h-[78px] bg-[#121515] rounded-r" />
          
          {/* 摄像头 */}
          <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-[22px] h-[17px] bg-[#262C2D] rounded-full" />
        </div>
      </motion.div>

      {/* 主标题 */}
      <motion.h2 
        className="absolute top-[18px] left-[48px] lg:left-[48px] md:left-[24px] sm:left-[20px] text-[118px] lg:text-[118px] md:text-[80px] sm:text-[48px] font-bold font-['Microsoft_YaHei'] text-black leading-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        焕新课表·完全重构
      </motion.h2>

      {/* 功能介绍文本 */}
      <motion.div 
        className="absolute top-[310px] left-[134px] max-w-[728px] text-2xl font-light font-['Microsoft_YaHei'] text-black leading-[2em]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>丝滑体验：流畅动画，性能优化</p>
        <p>多彩风格：可选iOS主题布局</p>
        <p>暗色夜览：自由切换深夜模式</p>
        <p>课表截图：一键完整截图保存</p>
      </motion.div>

      {/* HUASHIXIAZI 标题 */}
      <div className="absolute bottom-[12px] left-[4px] flex items-center space-x-4">
        <img src={burstIcon} alt="Burst" className="w-[88px] h-[88px] opacity-80" />
        <h3 className="text-7xl font-black font-['Archivo_Black'] text-white stroke-[#D7C5F0] stroke-2">
          HUASHIXIAZI
        </h3>
      </div>
    </section>
  )
}

export default ScheduleSection 