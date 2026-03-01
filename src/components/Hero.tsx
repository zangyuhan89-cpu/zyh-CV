import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { profile, experience } from '../data';
import { ArrowDown, Briefcase, Cpu } from 'lucide-react';

const abilityTags = ['Axure', 'SQL', '逻辑思维', '辩论队长', 'X-mind', 'Excel', '数据驱动'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTagIndex((i) => (i + 1) % abilityTags.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-[#F9FAFB] relative overflow-hidden"
    >
      {/* 鼠标跟随微光 - AI 属性 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[100px] transition-all duration-500"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(76,175,80,0.3) 0%, rgba(33,150,243,0.2) 40%, transparent 70%)',
        }}
      />

      {/* 背景装饰 blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2196F3]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#4CAF50]/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* 能力标签云 - 动态轮播高亮 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {abilityTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  animate={{
                    scale: tagIndex === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-400 ${
                    tagIndex === i
                      ? 'bg-[#4CAF50]/15 text-[#388E3C] ring-1 ring-[#4CAF50]/30'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-[#4CAF50]/15 text-[#388E3C] rounded-full text-sm font-medium flex items-center gap-1">
                <Briefcase size={14} /> B端产品经理
              </span>
              <span className="px-3 py-1 bg-[#2196F3]/15 text-[#1976D2] rounded-full text-sm font-medium flex items-center gap-1">
                <Cpu size={14} /> AI产品经理
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-4 tracking-tight">
              你好，我是<span className="text-[#4CAF50]">{profile.name}</span>
            </h1>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="space-y-5 text-[#6B7280] text-sm leading-7">
                <p><span className="font-semibold text-[#1F2937]">产品思维：</span>聚焦降本增效与系统流程化，善用 AI 赋能提升产品效率；担任辩论队队长与研究生会主席，具备逻辑思维与沟通能力。</p>
                <p><span className="font-semibold text-[#1F2937]">工具使用：</span>掌握 Axure、X-mind 及 Excel、SQL、Stata、Spss 等数据分析工具，支撑产品决策与发展路径。</p>
                <p><span className="font-semibold text-[#1F2937]">学习能力：</span>学业成绩位居专业前 5%；系统学习公开产品课程，搭建知识框架。</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Avatar with breathing glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-center relative w-full min-w-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 overflow-hidden rounded-full">
              {/* 呼吸灯光圈 - 暗示在线/活跃 */}
              <div className="absolute inset-0 rounded-full border-2 border-[#4CAF50]/50 animate-breathe-glow z-20 pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-[#2196F3]/20 opacity-60 pointer-events-none" />

              <img
                src={profile.avatar}
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-full shadow-2xl border-4 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=臧雨晗&background=4CAF50&color=fff&size=400';
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* 核心实习经历 - 时间轴卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#4CAF50] rounded-full" />
            <h2 className="text-2xl font-bold text-[#1F2937]">核心实习经历</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">
                      {exp.company} - {exp.role}
                    </h3>
                    <p className="text-[#6B7280] text-sm mt-1">{exp.description}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 text-[#6B7280] rounded-full text-xs font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {exp.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      whileHover={{ y: -5 }}
                      className="bg-[#F9FAFB] p-5 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#4CAF50]/20 transition-all cursor-default"
                    >
                      <h4 className="font-bold text-[#4CAF50] mb-2 text-sm">{detail.title}</h4>
                      <p className="text-[#6B7280] text-xs leading-5 text-justify">{detail.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}
