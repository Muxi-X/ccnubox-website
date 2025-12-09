import { motion } from 'framer-motion'
import logoCircle from '../assets/logo-circle.png'
import muxiTeamText from '../assets/muxiteam-brandnew.svg'
import slash1 from '../assets/slash-1.svg'
import slash2 from '../assets/slash-2.svg'
import dotsPattern from '../assets/dots-pattern.svg'
import wave from '../assets/wave.svg'
import brandNew from '../assets/BRAND NEW.svg'
import muxiteam2 from '../assets/muxi team2.svg'
import Burst_pucker from '../assets/Burst-pucker-white.svg'
import kestackQrcode from '../assets/kestack-qrcode.jpg'

// 导航链接数据
const navigationLinks = [
  { href: '#', text: '华师匣子 3.0' },
  { href: '#', text: '木犀课栈' },
  { href: 'https://fresh.muxixyz.com/', text: '加入我们' },
  { href: 'https://muxi-tech.xyz/', text: '关于木犀' },
]

const FooterSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-[#E0ADFE] to-[#EED0FF] overflow-hidden">
      <div>
        <img
          src={slash1}
          alt="slash1"
          className="absolute top-[3vh] left-[-0.5vw] w-[16vw] max-w-[200px] h-auto"
          loading="lazy"
        />
      </div>

      <div
        className="
        absolute top-[25%] w-full h-[50%] flex flex-col
        md:top-[25%] md:h-[50%] md:w-full
        lg:top-[10%] lg:h-[35%] lg:w-full
      "
      >
        <div className="w-full flex justify-end">
          <img
            src={muxiTeamText}
            alt="muxiTeamText"
            className="w-auto h-[8vh] max-h-[80px] object-contain hidden md:block"
            loading="lazy"
          />
        </div>

        <div
          className="
          w-[50%] flex justify-right items-center gap-4 self-center
          md:hidden
        "
        >
          <img
            src={muxiteam2}
            alt="muxiteam2"
            className="w-auto h-[12vh] max-h-[100px] object-contain"
          />

          <img
            src={dotsPattern}
            alt="dotsPattern"
            className="w-[12vw] max-w-[150px] h-auto"
            loading="lazy"
          />
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center mb-4">
          <img
            src={wave}
            alt="wave"
            className="
              min-w-[1024px] w-full h-full opacity-40 object-cover
              md:min-w-[0px]
            "
            loading="lazy"
          />

          <motion.h2
            className="
              absolute text-[clamp(2rem,4vw,5rem)] font-bold font-['Microsoft_YaHei'] text-white leading-tight px-4
              md:text-[clamp(3rem,6vw,7rem)] 
            "
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              maxWidth: '90%',
              textAlign: 'center',
            }}
          >
            <span
              className="
              block relative
              md:hidden
            "
            >
              <img
                src={Burst_pucker}
                alt="Burst_pucker"
                className="absolute -left-10 top-0 w-12 h-12 object-contain"
              />
              更多惊喜功能
              <br />
              匣子在路上
              <img
                src={Burst_pucker}
                alt="Burst_pucker"
                className="absolute -right-10 bottom-0 w-12 h-12 object-contain"
              />
            </span>
            <span
              className="
              hidden whitespace-nowrap
              md:block
            "
            >
              更多惊喜功能 · 匣子在路上
            </span>
          </motion.h2>
        </div>

        <div
          className="
           absolute top-full left-1/2 transform -translate-x-1/2 mt-8 block
           md:hidden
         "
        >
          <img
            src={brandNew}
            alt="brandNew"
            className="w-auto h-[8vh] max-h-[80px] object-contain"
          />
        </div>
      </div>

      <motion.nav
        className=" 
          absolute bottom-[7vh] left-1/2 transform -translate-x-1/2 flex items-center gap-[8px] px-4
          sm:px-0
          md:left-1/4
          lg:left-1/5 lg:max-w-[90vw]
        "
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        aria-label="主要导航"
      >
        <img
          src={logoCircle}
          alt="华师匣子"
          className="w-[3vw] h-[3vw] min-w-[30px] min-h-[30px] max-w-[43px] max-h-[43px] mr-4"
          loading="lazy"
        />

        <div
          className="
            flex items-center text-white gap-[8px] flex-nowrap
            sm:gap-[16px]
            md:gap-[24px]
          "
        >
          {navigationLinks.map((link, index) => (
            <div key={index} className="relative group">
              <motion.a
                href={link.href}
                className="text-[clamp(0.75rem,1.2vw,1.5rem)] font-normal font-['Microsoft_YaHei'] hover:text-[#FFFE54] transition-colors duration-300 focus:outline-none rounded px-1 whitespace-nowrap block"
                whileHover={{ scale: 1.05, color: '#FFFE54' }}
                whileFocus={{ scale: 1.05, color: '#FFFE54' }}
                whileTap={{ scale: 0.95, color: '#FFFE54' }}
                aria-label={`访问${link.text}页面`}
              >
                {link.text}
              </motion.a>

              {link.text === '木犀课栈' && (
                <div
                  className="
                    pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    bg-white rounded-2xl shadow-2xl
                    border border-gray-100
                    hidden md:flex flex-col items-center gap-2
                    z-50 !p-4 w-max
                  "
                >
                  <div className="text-sm font-bold text-gray-600 whitespace-nowrap tracking-wide">
                    扫码体验木犀课栈
                  </div>
                  <img
                    src={kestackQrcode}
                    alt="木犀课栈二维码"
                    className="w-[140px] h-auto rounded-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.nav>

      <div
        className="
          absolute bottom-[5%] right-0 w-auto h-auto flex flex-row items-start gap-6
          md:bottom-[-5%]
          lg:bottom-[-13%]
        "
      >
        <img
          src={dotsPattern}
          alt="dotsPattern"
          className="
            w-[15vw] max-w-[200px] h-auto hidden 
            md:block
          "
          loading="lazy"
        />

        <img
          src={slash2}
          alt="slash2"
          className="w-[16vw] max-w-[200px] h-auto"
          loading="lazy"
        />
      </div>

      <div>
        <motion.div
          className="absolute bottom-[2.8vh] left-1/2 transform -translate-x-1/2 text-white text-center opacity-70 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[clamp(0.75rem,1vw,0.875rem)]">
            © 2025 木犀团队 · 华中师范大学
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterSection
