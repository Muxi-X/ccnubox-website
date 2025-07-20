import { motion } from 'framer-motion'
import { ThumbsUp } from 'lucide-react'

const GradesSection = () => {
  return (
    <section className="relative h-[800px] bg-white overflow-hidden">
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

      {/* 模糊标题背景 */}
      <div className="absolute top-[18px] left-[190px] text-[266px] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] opacity-20 blur-[15px] select-none">
        成绩查询
      </div>
      <div className="absolute top-[349px] left-[186px] text-[266px] font-bold font-['Microsoft_YaHei'] text-[#D7C5F0] opacity-20 blur-[15px] select-none">
        一键计算
      </div>

      {/* 手机展示 */}
      <motion.div 
        className="absolute top-[34px] left-[542px] w-[362px] h-[730px] drop-shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* 手机外框 */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#3A4245] rounded-[40px]" />
          <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[10px] bg-[#121515] rounded-[35px]" />
          
          {/* 手机屏幕内容 - 成绩界面 */}
          <div className="absolute top-[11px] left-[12px] right-[12px] bottom-[18px] bg-white rounded-[30px] overflow-hidden">
            <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-lg font-bold text-gray-800 mb-4">成绩查询</div>
              
              {/* 成绩列表 */}
              <div className="space-y-3">
                {[
                  { name: '高等数学', score: '95', credit: '4.0', type: '必修' },
                  { name: '线性代数', score: '88', credit: '3.0', type: '必修' },
                  { name: '概率统计', score: '92', credit: '3.0', type: '必修' },
                  { name: '数据结构', score: '90', credit: '3.5', type: '专业' },
                  { name: '算法分析', score: '85', credit: '3.0', type: '专业' },
                ].map((course, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-800">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.type}课 · {course.credit}学分</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          parseInt(course.score) >= 90 ? 'text-green-600' : 
                          parseInt(course.score) >= 80 ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {course.score}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 统计信息 */}
              <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">学分绩点统计</div>
                <div className="flex justify-between">
                  <span>总学分: 16.5</span>
                  <span>平均分: 90.2</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 手机按键 */}
          <div className="absolute right-[-3px] top-[265px] w-[3px] h-[44px] bg-[#121515] rounded-r" />
          <div className="absolute right-[-3px] top-[141px] w-[3px] h-[84px] bg-[#121515] rounded-r" />
          
          {/* 摄像头 */}
          <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[19px] h-[18px] bg-[#262C2D] rounded-full" />
        </div>
      </motion.div>

      {/* 功能卡片区域 */}
      <div className="absolute top-[138px] left-[81px] space-y-8">
        {/* 点赞图标卡片 */}
        <motion.div 
          className="relative w-[187px] h-[158px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6655E4] to-[#D75EFF] opacity-70 rounded-lg" />
          <div className="absolute top-[15px] left-[38px] w-[114px] h-[114px] drop-shadow-lg">
            <ThumbsUp className="w-full h-full text-white" />
          </div>
        </motion.div>

        {/* 学分绩计算卡片 */}
        <motion.div 
          className="relative w-[425px] h-[289px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div 
            className="absolute inset-0 rounded-[42px] shadow-inner backdrop-blur-[25px]"
            style={{
              background: 'linear-gradient(128deg, rgba(102, 85, 228, 0.22) 0%, rgba(102, 85, 228, 0.66) 51.58%, rgba(102, 85, 228, 0.78) 78%, rgba(139, 122, 231, 1) 98.85%)',
              boxShadow: 'inset 0px 4px 40px 0px rgba(255, 255, 255, 0.35)'
            }}
          />
          <div className="absolute top-[37px] left-[41px] w-[367px] text-white">
            <h3 className="text-[32px] font-bold font-['Microsoft_YaHei'] leading-[1.5em]">
              查算学分绩：<br />
              平时期末，明细详情，<br />
              加权平均，秒出结果
            </h3>
          </div>
        </motion.div>
      </div>

      {/* 右侧功能卡片 */}
      <div className="absolute top-[250px] right-[54px] space-y-8">
        {/* 已修学分卡片 */}
        <motion.div 
          className="relative w-[413px] h-[288px]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div 
            className="absolute inset-0 backdrop-blur-[25px]"
            style={{
              background: 'linear-gradient(128deg, rgba(102, 85, 228, 0.22) 0%, rgba(102, 85, 228, 0.66) 51.58%, rgba(102, 85, 228, 0.78) 78%, rgba(139, 122, 231, 1) 98.85%)',
              boxShadow: 'inset 0px 4px 40px 0px rgba(255, 255, 255, 0.35)'
            }}
          />
          <div className="absolute top-[29px] left-[46px] w-[367px] text-white">
            <h3 className="text-[32px] font-bold font-['Microsoft_YaHei'] leading-[1.5em]">
              已修学分：<br />
              分类列表，<br />
              清查学分一目了然
            </h3>
          </div>
        </motion.div>

        {/* 统计选项卡片 */}
        <motion.div 
          className="relative w-[392px] h-[187px]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6655E4] to-[#D75EFF] rounded-[42px]" />
          <div className="absolute top-[59px] left-[32px] w-[360px] text-white">
            <h3 className="text-[32px] font-bold font-['Microsoft_YaHei'] leading-[1.5em]">
              统计周期、课程性质：<br />
              自由多选
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GradesSection 