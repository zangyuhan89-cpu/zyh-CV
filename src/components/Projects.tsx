import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { X } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'internship' | 'campus'>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1F2937]">项目集</h2>
          <div className="w-16 h-1 bg-[#4CAF50] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[#6B7280]">业务闭环与创新实践</p>
        </div>

        {/* Filter Tabs - PRD: 全部 | 实习项目 | 校园项目 */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
            {[
              { id: 'all', label: '全部' },
              { id: 'internship', label: '实习项目' },
              { id: 'campus', label: '校园项目' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-[#4CAF50] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${project.title}&background=random&color=fff&size=400`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      查看详情
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-[#6B7280] text-sm line-clamp-3 leading-relaxed">
                    {project.summary.split(/(\d+(?:[.,]\d+)*(?:%|份)?)/).map((part, i) =>
                      /^\d/.test(part) ? (
                        <span key={i} className="font-semibold text-[#4CAF50]">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white z-20">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                    <p className="text-[#4CAF50] font-medium mt-1">{selectedProject.role}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-64 object-cover rounded-xl mb-8"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${selectedProject.title}&background=random&color=fff&size=800`;
                    }}
                  />

                  <div className="space-y-8">
                    {selectedProject.details.map((detail, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-[#4CAF50]/30">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-[#4CAF50] rounded-full" />
                        <h4 className="text-lg font-bold text-[#1F2937] mb-2">{detail.label}</h4>
                        <p className="text-[#6B7280] leading-relaxed text-justify">
                          {detail.content.split(/(\d+(?:[.,]\d+)*(?:%|份)?)/).filter(Boolean).map((part, i) =>
                            /^\d/.test(part) ? (
                              <span key={i} className="font-bold text-[#4CAF50]">{part}</span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    关闭
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
