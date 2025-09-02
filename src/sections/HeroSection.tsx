import { motion } from 'framer-motion'
import mobile3d from '../assets/mobile-3d.png'
import bell3d from '../assets/bell-3d.png'
import logoCircle from '../assets/logo-circle.png'
// import burstIcon from '../assets/burst-icon.svg'
import bgText from '../assets/bg-text.svg'
import slash1 from '../assets/slash-1.svg'
import slash2 from '../assets/slash-2.svg'
import wave from '../assets/wave.svg'
// import dotsPattern from '../assets/dots-pattern.svg'
import muxiTeamText from '../assets/muxiteam-brandnew.svg'

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] bg-gradient-to-b from-[#E0ADFE] to-[#EED0FF] overflow-hidden">
      {/* 波浪背景装饰 */}
      <img
        src={wave}
        alt="Wave background"
        className="absolute top-[25vh] w-[100vw] opacity-80"
      />

      {/* 背景文字 */}
      <img
        src={bgText}
        alt="Background text"
        className="absolute top-[25vh] w-[100vw]"
      />

      {/* 3D手机 */}
      <motion.img
        src={mobile3d}
        alt="3D Mobile"
        className="absolute top-[15vh] left-[30vw] w-[48vw] h-[48vw] drop-shadow-lg scale-x-[-1] rotate-[15deg]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* 3D钟 */}
      <motion.img
        src={bell3d}
        alt="3D Bell"
        className="absolute top-[5vh] left-[25vw] w-[33vw] h-[33vw]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      />

      {/* 左下角信息 */}
      <div className="absolute bottom-[42px] left-[42px] flex items-center space-x-4">
        <img
          src={logoCircle}
          alt="华师匣子 Logo"
          className="w-[3vw] h-[3vw] rounded-full"
        />
        <div className="text-white">
          <h3 className="text-2xl font-normal font-['Microsoft_YaHei']">
            华师匣子 3.0
          </h3>
          <p className="text-2xl font-light font-['Microsoft_YaHei']">
            Welcome to the new version!
          </p>
        </div>
      </div>

      {/* BRAND NEW & MUXI TEAM */}
      <img
        src={muxiTeamText}
        alt="Brand New & Muxi Team"
        className="absolute top-[14vh] w-[80vw] right-0"
      />

      {/* 装饰斜线 */}
      <img
        src={slash1}
        alt="Slash decoration"
        className="absolute top-[3vh] left-[-0.5vw] w-[16vw]"
      />
      {/* 下载按钮 */}
      <button className="absolute bottom-[5vh] right-[5vw] w-[10vw] h-[10vw]">
        <img src={slash2} alt="Slash decoration" className="w-full h-full" />
      </button>
      <button className="absolute bottom-[5vh] right-[25vw] w-[10vw] h-[10vw]">
        <img src={slash2} alt="Slash decoration" className="w-full h-full" />
      </button>
    </section>
  )
}

export default HeroSection
