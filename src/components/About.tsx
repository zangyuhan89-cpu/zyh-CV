import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { education, skills, interests, certificates } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937]">关于我</h2>
          <div className="w-16 h-1 bg-[#4CAF50] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#6B7280]">立体多维的个人画像</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2196F3] rounded-full" />
                基础信息
              </h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-[#6B7280]">姓名</div>
                <div className="font-medium text-[#1F2937]">臧雨晗</div>
                <div className="text-[#6B7280]">年龄</div>
                <div className="font-medium text-[#1F2937]">23</div>
                <div className="text-[#6B7280]">民族</div>
                <div className="font-medium text-[#1F2937]">汉族</div>
                <div className="text-[#6B7280]">学历</div>
                <div className="font-medium text-[#1F2937]">硕士在读</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-2">
                <GraduationCap className="text-[#4CAF50]" size={24} />
                教育背景
              </h3>
              <div className="relative border-l-2 border-[#4CAF50]/30 ml-3 space-y-10 pb-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#4CAF50] rounded-full border-4 border-white shadow-sm" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-bold text-[#1F2937]">{edu.school}</h4>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-2 py-1 rounded-md">{edu.period}</span>
                    </div>
                    <p className="text-[#4CAF50] font-medium mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((ach, aIdx) => (
                        <span key={aIdx} className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-2 py-1 rounded-md">
                          {ach}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-2">
                <Award className="text-[#2196F3]" size={24} />
                核心证书
              </h3>
              <div className="flex flex-wrap gap-3">
                {certificates.map((cert, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#1F2937] shadow-sm hover:border-[#4CAF50]/30 transition-colors">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                专业技能
              </h3>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-[#1F2937]">{skill.name}</span>
                      <span className="text-sm text-[#6B7280]">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#1F2937] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2196F3] rounded-full" />
                  兴趣矩阵
                </h3>
                <span className="text-xs text-gray-400">Hover 翻转 · 点击寻找同好</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((interest, idx) => (
                  <InterestCard key={idx} interest={interest} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestCard({ interest }: { interest: { name: string; icon: React.ComponentType<{ className?: string; size?: number }> } }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const Icon = interest.icon;

  const handleClick = () => {
    const newSelected = !isSelected;
    setIsSelected(newSelected);
    if (!newSelected) setIsFlipped(false);
    if (newSelected) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    }
  };

  return (
    <div className="relative">
      <div
        className="aspect-square cursor-pointer perspective-1000"
        onClick={handleClick}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => !isSelected && setIsFlipped(false)}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2 border transition-colors ${
              isSelected ? 'border-[#4CAF50] bg-[#4CAF50]/5' : 'border-gray-100 bg-[#F9FAFB]'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Icon className={isSelected ? 'text-[#4CAF50]' : 'text-gray-400'} size={28} />
            <span className={`text-xs font-medium ${isSelected ? 'text-[#4CAF50]' : 'text-[#6B7280]'}`}>
              {interest.name}
            </span>
          </div>
          <div
            className="absolute inset-0 rounded-xl flex flex-col items-center justify-center bg-[#4CAF50] text-white font-medium shadow-lg gap-2"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <Icon className="text-white" size={28} />
            <span className="text-xs">{interest.name}</span>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 bg-[#4CAF50] text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap"
          >
            找到同好了！
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


