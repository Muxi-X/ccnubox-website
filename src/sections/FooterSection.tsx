import { motion } from 'framer-motion'
import logoCircle from '../assets/logo-circle.png'
import burstIcon from '../assets/burst-icon.svg'
import slash1 from '../assets/slash-1.svg'
import slash2 from '../assets/slash-2.svg'
import dotsPattern from '../assets/dots-pattern.svg'

const FooterSection = () => {
  return (
    <section className="relative h-[800px] bg-gradient-to-b from-[#E0ADFE] to-[#EED0FF] overflow-hidden">
      {/* 波浪背景装饰 - 类似 Hero 区域但颜色调整 */}
      <div className="absolute inset-0">
        <div className="absolute top-[188px] w-full h-[457px]">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-[663px] opacity-60"
                style={{
                  left: `${i * 80 - 680}px`,
                  transform: `translateY(${Math.sin(i * 0.2) * 50}px)`,
                }}
              >
                <svg
                  viewBox="0 0 663 600"
                  className="w-full h-full stroke-[#EDCEFF] stroke-2 fill-none"
                >
                  <path d="M0,300 Q165,250 331,300 T663,300" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 主标题 */}
      <motion.h2 
        className="absolute top-[334px] left-[118px] text-[100px] font-bold font-['Microsoft_YaHei'] text-white leading-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        更多惊喜功能 · 匣子在路上
      </motion.h2>

      {/* 导航链接区域 */}
      <motion.div 
        className="absolute bottom-[51px] left-[23px] flex items-center space-x-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={logoCircle} alt="华师匣子 Logo" className="w-[43px] h-[43px] mr-4" />
        
        <div className="flex items-center space-x-12 text-white">
          <motion.a 
            href="#" 
            className="text-2xl font-normal font-['Microsoft_YaHei'] hover:text-[#FFFE54] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            华师匣子 3.0
          </motion.a>
          
          <motion.a 
            href="#" 
            className="text-2xl font-normal font-['Microsoft_YaHei'] hover:text-[#FFFE54] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            木犀课栈
          </motion.a>
          
          <motion.a 
            href="#" 
            className="text-2xl font-normal font-['Microsoft_YaHei'] hover:text-[#FFFE54] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            加入我们
          </motion.a>
          
          <motion.a 
            href="#" 
            className="text-2xl font-normal font-['Microsoft_YaHei'] hover:text-[#FFFE54] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            关于木犀
          </motion.a>
        </div>
      </motion.div>

      {/* BRAND NEW & MUXI TEAM 区域 */}
      <div className="absolute top-[100px] left-[292px] flex items-center space-x-4">
        <img src={burstIcon} alt="Burst" className="w-[88px] h-[88px]" />
        <div className="flex items-center space-x-6">
          <h2 className="text-7xl font-black font-['Archivo_Black'] text-white stroke-white stroke-2">
            BRAND NEW
          </h2>
          <span className="text-7xl font-normal text-white">|</span>
          <h2 className="text-7xl font-black font-['Archivo_Black'] text-white">MUXI TEAM</h2>
        </div>
      </div>

      {/* 装饰斜线 */}
      <img
        src={slash1}
        alt="Slash decoration"
        className="absolute top-[41px] left-[-6px] w-[242px] h-[30px]"
      />
      <img
        src={slash2}
        alt="Slash decoration"
        className="absolute bottom-[47px] right-[0px] w-[242px] h-[48px]"
      />

      {/* 点阵装饰 */}
      <img
        src={dotsPattern}
        alt="Dots pattern"
        className="absolute bottom-[96px] right-[262px] w-[170px] h-[155px]"
      />

      {/* 版权信息 */}
      <motion.div 
        className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-white text-center opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-sm">© 2024 木犀团队 · 华中师范大学</p>
      </motion.div>

      {/* 浮动装饰元素 */}
      <motion.div
        className="absolute top-[200px] right-[100px] w-4 h-4 bg-white rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[300px] left-[100px] w-3 h-3 bg-[#FFFE54] rounded-full opacity-80"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute top-[450px] right-[200px] w-2 h-2 bg-white rounded-full opacity-50"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}

export default FooterSection 