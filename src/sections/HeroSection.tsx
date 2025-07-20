import { motion } from 'framer-motion'
import mobile3d from '../assets/mobile-3d.png'
import bell3d from '../assets/bell-3d.png'
import logoCircle from '../assets/logo-circle.png'
import burstIcon from '../assets/burst-icon.svg'
import bgText from '../assets/bg-text.svg'
import slash1 from '../assets/slash-1.svg'
import slash2 from '../assets/slash-2.svg'
import dotsPattern from '../assets/dots-pattern.svg'

const HeroSection = () => {
  return (
    <section className="relative h-[800px] lg:h-[800px] md:h-[600px] sm:h-[500px] bg-gradient-to-b from-[#E0ADFE] to-[#EED0FF] overflow-hidden">
      {/* 波浪背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-[188px] w-full h-[457px]">
          {/* 重复的波浪线 SVG 可以用 CSS 实现 */}
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-[663px] opacity-80"
                style={{
                  left: `${i * 80 - 680}px`,
                  transform: `translateY(${Math.sin(i * 0.2) * 50}px)`,
                }}
              >
                <svg
                  viewBox="0 0 663 600"
                  className="w-full h-full stroke-white stroke-2 fill-none"
                >
                  <path d="M0,300 Q165,250 331,300 T663,300" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 背景文字 */}
      <img
        src={bgText}
        alt="Background text"
        className="absolute top-[180px] left-[-18px] w-[1476px] h-[465px] opacity-20"
      />

      {/* 3D手机 */}
      <motion.img
        src={mobile3d}
        alt="3D Mobile"
        className="absolute top-[108px] left-[388px] w-[720px] h-[720px] lg:w-[720px] lg:h-[720px] md:w-[500px] md:h-[500px] md:left-[200px] sm:w-[300px] sm:h-[300px] sm:left-[50px] sm:top-[150px] drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* 3D钟 */}
      <motion.img
        src={bell3d}
        alt="3D Bell"
        className="absolute top-[15px] left-[375px] w-[496px] h-[496px]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />

      {/* 左下角信息 */}
      <div className="absolute bottom-[42px] left-[42px] flex items-center space-x-4">
        <img src={logoCircle} alt="华师匣子 Logo" className="w-[43px] h-[43px]" />
        <div className="text-white">
          <h3 className="text-2xl font-normal font-['Microsoft_YaHei']">华师匣子 3.0</h3>
          <p className="text-2xl font-light font-['Microsoft_YaHei']">Welcome to the new version!</p>
        </div>
      </div>

      {/* BRAND NEW & MUXI TEAM */}
      <div className="absolute top-[100px] left-[292px] lg:left-[292px] md:left-[50px] sm:left-[20px] sm:top-[50px] flex items-center space-x-4 sm:space-x-2">
        <img src={burstIcon} alt="Burst" className="w-[88px] h-[88px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" />
        <div className="flex items-center space-x-6 sm:space-x-2 sm:flex-col sm:items-start">
          <h2 className="text-7xl md:text-5xl sm:text-3xl font-black font-['Archivo_Black'] text-white stroke-white stroke-2">
            BRAND NEW
          </h2>
          <span className="text-7xl md:text-5xl sm:text-3xl font-normal text-white sm:hidden">|</span>
          <h2 className="text-7xl md:text-5xl sm:text-3xl font-black font-['Archivo_Black'] text-[#FFFE54]">MUXI TEAM</h2>
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
    </section>
  )
}

export default HeroSection 