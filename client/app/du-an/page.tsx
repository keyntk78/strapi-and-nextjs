'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['Tất cả', 'Kiểm định', 'Quan trắc', 'Giám định', 'Tư vấn'];

const projects = [
  {
    id: 1,
    title: 'Chung cư cao cấp Sky Garden',
    category: 'Kiểm định',
    location: 'Quận 7, TP.HCM',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Cầu vượt nút giao thông Gò Vấp',
    category: 'Quan trắc',
    location: 'Quận Gò Vấp, TP.HCM',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Nhà máy sản xuất Intel Việt Nam',
    category: 'Giám định',
    location: 'Khu Công Nghệ Cao, TP. Thủ Đức',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Tòa nhà văn phòng Bitexco Financial Tower',
    category: 'Tư vấn',
    location: 'Quận 1, TP.HCM',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Bệnh viện Đa khoa Quốc tế Hạnh Phúc',
    category: 'Kiểm định',
    location: 'Bình Dương',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Hầm chui nút giao thông Nguyễn Văn Linh',
    category: 'Quan trắc',
    location: 'Quận 7, TP.HCM',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'Tất cả' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Projects Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#002b49]/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">Dự án tiêu biểu</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 font-medium drop-shadow-md leading-relaxed">
              Khám phá danh sách các công trình trọng điểm mà 510 CIC đã tham gia kiểm định và tư vấn kỹ thuật.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-16 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-10 py-3 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all border-2",
                    activeCategory === category
                      ? "bg-[#002b49] border-[#002b49] text-white shadow-2xl scale-105"
                      : "bg-white text-gray-500 hover:bg-gray-50 border-gray-100 hover:border-[#002b49]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-md group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="TÌM KIẾM DỰ ÁN, ĐỊA ĐIỂM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-sm border-2 border-gray-100 focus:outline-none focus:border-[#002b49] focus:ring-4 focus:ring-[#002b49]/5 transition-all bg-gray-50 text-xs font-black uppercase tracking-widest placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-sm shadow-xl">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-[#002b49]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                      <button className="bg-white text-[#002b49] px-10 py-4 rounded-sm font-black uppercase text-[10px] tracking-[0.2em] transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-red-600 hover:text-white">
                        XEM CHI TIẾT
                      </button>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-[#002b49] mb-8 group-hover:text-red-600 transition-colors uppercase tracking-tight leading-tight min-h-[3.5rem]">{project.title}</h3>
                    <div className="space-y-6 mb-10 mt-auto">
                      <div className="flex items-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-red-50 transition-colors">
                          <MapPin size={14} className="text-red-600" />
                        </div>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-red-50 transition-colors">
                          <Calendar size={14} className="text-red-600" />
                        </div>
                        <span>Năm hoàn thành: {project.year}</span>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-gray-100 flex justify-between items-center group-hover:border-red-100 transition-colors">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] group-hover:text-[#002b49]">510 CIC Project</span>
                      <div className="w-8 h-8 rounded-full bg-[#002b49] text-white flex items-center justify-center transform group-hover:rotate-45 transition-transform group-hover:bg-red-600">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-40 border-4 border-dashed border-gray-100 rounded-sm"
            >
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-10 text-gray-200">
                <Building2 size={48} />
              </div>
              <h3 className="text-3xl font-black text-[#002b49] mb-6 uppercase tracking-tighter">KHÔNG TÌM THẤY DỰ ÁN</h3>
              <p className="text-gray-400 font-medium mb-10">Vui lòng thử lại với từ khóa khác hoặc danh mục khác.</p>
              <button 
                onClick={() => {setActiveCategory('Tất cả'); setSearchQuery('');}}
                className="px-10 py-4 bg-red-600 text-white font-black uppercase text-xs tracking-widest hover:bg-[#002b49] transition-colors"
              >
                XÓA TẤT CẢ BỘ LỌC
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
