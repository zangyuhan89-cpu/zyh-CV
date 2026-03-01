import { useState } from 'react';
import { profile } from '../data';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, type: 'email' | 'phone') => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">期待与您共事</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              如果您对我的经历感兴趣，或者有任何 B 端产品 / AI 落地相关的探讨，欢迎随时联系我。我随时准备好迎接新的挑战。
            </p>

            <div className="space-y-6">
              {/* Email Card - 点击唤起 Mail，一键复制按钮 */}
              <a
                href={`mailto:${profile.email}`}
                className="bg-gray-800 p-6 rounded-xl flex items-center justify-between group hover:bg-gray-700 transition-colors border border-gray-700 block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#4CAF50]/20 p-3 rounded-lg text-[#4CAF50]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">邮箱</div>
                    <div className="font-mono text-lg">{profile.email}</div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleCopy(e, profile.email, 'email')}
                  className="p-2 hover:bg-gray-600 rounded-lg transition-colors relative"
                  title="一键复制"
                >
                  {copiedItem === 'email' ? (
                    <Check size={20} className="text-[#4CAF50]" />
                  ) : (
                    <Copy size={20} className="text-gray-400" />
                  )}
                  <AnimatePresence>
                    {copiedItem === 'email' && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: -24 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#4CAF50] text-white px-3 py-1.5 rounded-lg whitespace-nowrap z-10"
                      >
                        已复制到剪贴板
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </a>

              {/* Phone Card - 移动端唤起拨号，一键复制 */}
              <a
                href={`tel:${profile.phone}`}
                className="bg-gray-800 p-6 rounded-xl flex items-center justify-between group hover:bg-gray-700 transition-colors border border-gray-700 block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#2196F3]/20 p-3 rounded-lg text-[#64B5F6]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">电话</div>
                    <div className="font-mono text-lg">{profile.phone}</div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleCopy(e, profile.phone, 'phone')}
                  className="p-2 hover:bg-gray-600 rounded-lg transition-colors relative"
                  title="一键复制"
                >
                  {copiedItem === 'phone' ? (
                    <Check size={20} className="text-[#4CAF50]" />
                  ) : (
                    <Copy size={20} className="text-gray-400" />
                  )}
                  <AnimatePresence>
                    {copiedItem === 'phone' && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: -24 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[#4CAF50] text-white px-3 py-1.5 rounded-lg whitespace-nowrap z-10"
                      >
                        已复制到剪贴板
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </a>

              {/* Address Card */}
              <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 border border-gray-700">
                <div className="bg-[#2196F3]/20 p-3 rounded-lg text-[#64B5F6]">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">地址</div>
                  <div className="text-lg">{profile.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-80 lg:h-96 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 opacity-30">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                 <grid className="w-full h-full" />
               </svg>
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 to-gray-900"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                 <div className="w-4 h-4 bg-[#4CAF50] rounded-full mx-auto mb-4 animate-ping" />
                 <div className="text-2xl font-bold text-white">北京 · 海淀</div>
                 <div className="text-gray-400 mt-2">学院路 30 号</div>
               </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
