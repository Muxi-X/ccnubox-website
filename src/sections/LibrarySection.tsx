import { motion } from 'framer-motion'

const LibrarySection = () => {
  // 彩色图标数据
  const iconBoxes = [
    {
      color: 'from-red-400 to-red-600',
      size: 'w-[198px] h-[196px]',
      position: 'top-[280px] left-[243px]',
    },
    {
      color: 'from-blue-400 to-blue-600',
      size: 'w-[220px] h-[214px]',
      position: 'top-[66px] left-[441px]',
    },
    {
      color: 'from-green-400 to-green-600',
      size: 'w-[154px] h-[147px]',
      position: 'top-[115px] left-[777px]',
    },
    {
      color: 'from-yellow-400 to-yellow-600',
      size: 'w-[125px] h-[120px]',
      position: 'top-[101px] left-[1001px]',
    },
    {
      color: 'from-purple-400 to-purple-600',
      size: 'w-[101px] h-[98px]',
      position: 'top-[-1px] left-[699px]',
      opacity: 'opacity-50',
    },
    {
      color: 'from-indigo-400 to-indigo-600',
      size: 'w-[101px] h-[98px]',
      position: 'top-[26px] left-[323px]',
      opacity: 'opacity-25',
    },
    {
      color: 'from-pink-400 to-pink-600',
      size: 'w-[187px] h-[185px]',
      position: 'bottom-[114px] left-[49px]',
    },
    {
      color: 'from-teal-400 to-teal-600',
      size: 'w-[130px] h-[124px]',
      position: 'top-[342px] left-[618px]',
      opacity: 'opacity-25',
    },
  ]

  return (
    <section className="relative h-[800px] bg-white overflow-hidden">
      {/* 模糊圆形装饰 */}
      <div
        className="absolute top-[188px] right-[115px] w-[377px] h-[370px] rounded-full"
        style={{
          background: 'rgba(215, 197, 240, 0.58)',
          filter: 'blur(108px)',
        }}
      />

      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-10">
        {/* 横向网格线 */}
        <div className="space-y-[25px] mt-1">
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="w-full h-0 border-t border-[#6655E4]"
            />
          ))}
        </div>
        {/* 纵向网格线 */}
        <div className="absolute top-0 left-[23px] flex space-x-[25px]">
          {Array.from({ length: 56 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="w-0 h-[800px] border-l border-[#6655E4]"
            />
          ))}
        </div>
      </div>

      {/* 装饰性线条 */}
      <div className="absolute top-[-62px] left-[-122px] w-[1243px] h-[720px]">
        <svg
          viewBox="0 0 1243 720"
          className="w-full h-full stroke-[#8B7AE7] stroke-[56px] fill-none"
        >
          <path d="M100,360 Q400,200 700,360 T1143,360" opacity="0.3" />
        </svg>
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

      {/* 彩色图标网格 */}
      <div className="absolute inset-0">
        {iconBoxes.map((box, i) => (
          <motion.div
            key={i}
            className={`absolute ${box.size} ${box.position} ${box.opacity || ''} rounded-[20px] bg-gradient-to-br ${box.color} drop-shadow-lg`}
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
            {/* 图标内容 - 这里可以放置实际的图标 */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 装饰网络图案 */}
      <div className="absolute top-[24px] left-[14px] w-[309px] h-[274px] opacity-60">
        <svg
          viewBox="0 0 309 274"
          className="w-full h-full stroke-[rgba(139,122,231,0.64)] stroke-[20px] fill-none"
        >
          {/* 网络节点连接线 */}
          <circle cx="155" cy="137" r="55" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="260" cy="60" r="15" />
          <circle cx="80" cy="220" r="25" />
          <circle cx="230" cy="200" r="20" />

          <line x1="155" y1="137" x2="50" y2="50" />
          <line x1="155" y1="137" x2="260" y2="60" />
          <line x1="155" y1="137" x2="80" y2="220" />
          <line x1="155" y1="137" x2="230" y2="200" />

          <line x1="156" y1="215" x2="156" y2="274" strokeWidth="10" />
          <line x1="59" y1="203" x2="98" y2="249" strokeWidth="8" />
          <line x1="26" y1="49" x2="55" y2="80" strokeWidth="12" />
          <line x1="223" y1="34" x2="254" y2="91" strokeWidth="8" />
          <line x1="245" y1="130" x2="309" y2="139" strokeWidth="6" />
          <line x1="221" y1="189" x2="265" y2="247" strokeWidth="10" />
          <line x1="133" y1="0" x2="156" y2="54" strokeWidth="8" />
          <line x1="0" y1="145" x2="65" y2="149" strokeWidth="12" />
          <line x1="58" y1="203" x2="46" y2="218" strokeWidth="8" />
        </svg>
      </div>
    </section>
  )
}

export default LibrarySection
