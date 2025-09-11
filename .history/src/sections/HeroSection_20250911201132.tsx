import { motion } from 'framer-motion'
import mobile3d from '../assets/mobile-3d.png'
import bell3d from '../assets/bell-3d.png'
import logoCircle from '../assets/logo-circle.png'
import bgText from '../assets/bg-text.svg'
import slash1 from '../assets/slash-1.svg'
import wave from '../assets/wave.svg'
import muxiTeamText from '../assets/muxiteam-brandnew.svg'
import Burst_pucker from '../assets/Burst-pucker-2.svg'
import muxiTeam from '../assets/MUXI TEAM.svg'

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#E0ADFE] to-[#EED0FF] overflow-hidden">
      <div
        className="
                    relative top-[5%] left-0 w-full h-[5%] hidden
                    md:block
                "
      >
        <img
          src={slash1}
          alt="Slash decoration"
          className="absolute top-0 left-0 w-[16vw] max-w-[240px] h-auto"
        />
      </div>

      <div className="relative w-screen h-screen">
        <div
          className="
                    absolute top-[25%] w-full h-[50%] flex flex-col
                    md:top-[25%] md:h-[50%] md:w-full
                    lg:top-[5%] lg:h-[35%] lg:w-full
                "
        >
          <div
            className="
                            absolute w-full flex justify-center 
                            md:hidden
                        "
          >
            <img
              src={bgText}
              alt="Background text"
              className="min-w-[80vh] rotate-90 h-auto"
            />
          </div>

          <div
            className="
                            w-full flex flex-col justify-center
                            items-start md:items-end
                        "
          >
            <div className="w-full flex justify-end pr-[10%] z-5">
              <img
                src={muxiTeamText}
                alt="Brand New & Muxi Team"
                className="
                                    hidden w-[80vw] max-w-[1200px] h-auto
                                    md:block"
              />
            </div>

            <div
              className="
                                w-full flex justify-start pl-[10%] 
                                md:hidden
                            "
            >
              <div className="flex items-center gap-4 z-5">
                <img
                  src={Burst_pucker}
                  alt="Burst_pucker"
                  className="w-[6vw] h-[10vh] max-w-[88px] max-h-[88px]"
                />
                <img
                  src={muxiTeam}
                  alt="Muxi Team"
                  className="w-[32vw] h-[10vh] max-w-[464px] max-h-[80px]"
                />
              </div>
            </div>
          </div>

          <div className="relative flex-1 w-full">
            <img
              src={bgText}
              alt="Background text"
              className="
                                hidden absolute top-0 left-1/2 w-full h-full object-cover transform -translate-x-1/2
                                md:block"
            />

            <img
              src={wave}
              alt="Wave background"
              className="
                                min-w-[768px] w-full h-full object-cover
                                md:min-w-0"
            />

            <motion.img
              src={mobile3d}
              alt="3D Mobile"
              className="
                                absolute top-1/2 left-1/2 w-[70vw] max-w-[567px] h-auto drop-shadow-lg scale-x-[-1] rotate-[15deg] transform -translate-x-1/2 -translate-y-1/2
                                md:w-[50vw]
                                lg:w-[35vw]
                            "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            <motion.img
              src={bell3d}
              alt="3D Bell"
              className="
                                absolute top-[40%] left-[40%] w-[50vw] max-w-[567px] transform -translate-x-1/2 -translate-y-1/2
                                md:top-[30%] md:w-[50vw]
                                lg:w-[35vw]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div>
          <div
            className="
                            hidden absolute bottom-[10%] left-[3%] items-center gap-[14px] hidden 
                            md:flex
                        "
          >
            <img
              src={logoCircle}
              alt="华师匣子 Logo"
              className="min-w-[43px] min-h-[43px] rounded-full"
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

          <div className="absolute bottom-[10%] right-[1.5%] flex gap-[2vw]">
            <motion.button
              className="w-[47vw] h-[5vh] whitespace-nowrap bg-[#D893FF] rounded-[10px] opacity-70 hover:opacity-80 active:opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out md:max-w-[238px] min-h-[50px]"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.1, 1] }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <p className="text-2xl font-bold text-white">App Store下载</p>
            </motion.button>

            <motion.button
              className="w-[47vw] h-[5vh] whitespace-nowrap bg-[#D893FF] rounded-[10px] opacity-70 hover:opacity-80 active:opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out md:max-w-[238px] min-h-[50px]"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.1, 1] }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="text-2xl font-bold text-white">安卓下载</p>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
