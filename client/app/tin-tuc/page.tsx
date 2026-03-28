'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, Search, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    title: '510 CIC hoàn thành kiểm định chất lượng cho dự án Sky Garden',
    date: '15/03/2026',
    author: 'Admin',
    category: 'Sự kiện',
    excerpt: 'Sau 3 tháng triển khai, đội ngũ chuyên gia của 510 CIC đã hoàn tất công tác kiểm định chất lượng cho toàn bộ khối nhà chung cư Sky Garden...',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Quy chuẩn kỹ thuật quốc gia mới về an toàn cháy cho nhà và công trình',
    date: '10/03/2026',
    author: 'Kỹ sư Nam',
    category: 'Kiến thức',
    excerpt: 'Bộ Xây dựng vừa ban hành thông tư mới cập nhật các quy chuẩn về an toàn phòng cháy chữa cháy. Đây là những thay đổi quan trọng mà các chủ đầu tư cần lưu ý...',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Ứng dụng công nghệ AI trong quan trắc biến dạng công trình',
    date: '05/03/2026',
    author: 'Phòng Kỹ thuật',
    category: 'Công nghệ',
    excerpt: 'Việc tích hợp trí tuệ nhân tạo vào hệ thống quan trắc giúp đưa ra các dự báo chính xác hơn về sự ổn định của nền móng và kết cấu...',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop"
            alt="News Hero"
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
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">Tin tức & Sự kiện</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 font-medium drop-shadow-md leading-relaxed">
              Cập nhật những tin tức mới nhất về hoạt động của 510 CIC và các kiến thức chuyên ngành xây dựng.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main News List */}
            <div className="lg:col-span-2 space-y-12">
              {newsItems.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col md:flex-row h-full md:h-[300px]"
                >
                  <div className="md:w-2/5 overflow-hidden relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="px-4 py-1.5 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-sm">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-10 flex flex-col">
                    <div className="flex items-center space-x-6 text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-4">
                      <span className="flex items-center"><Calendar size={14} className="mr-2 text-red-600" /> {news.date}</span>
                    </div>
                    <h2 className="text-xl font-black text-[#002b49] mb-4 group-hover:text-red-600 transition-colors leading-tight uppercase tracking-tighter line-clamp-2">
                      {news.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-medium">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                      <div className="flex items-center text-[10px] text-gray-400 font-black uppercase tracking-widest">
                        <User size={14} className="mr-2 text-red-600" /> {news.author}
                      </div>
                      <Link href="#" className="text-[#002b49] font-black uppercase text-[10px] tracking-[0.2em] flex items-center group/btn hover:text-red-600 transition-colors">
                        Đọc tiếp <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
              
              {/* Pagination */}
              <div className="flex justify-center pt-12 space-x-4">
                {[1, 2, 3].map((p) => (
                  <button key={p} className={cn(
                    "w-12 h-12 rounded-sm flex items-center justify-center font-black text-xs transition-all border-2",
                    p === 1 ? "bg-[#002b49] border-[#002b49] text-white shadow-xl scale-110" : "bg-white text-gray-400 border-gray-100 hover:border-[#002b49] hover:text-[#002b49]"
                  )}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-12">
              {/* Search */}
              <div className="bg-white rounded-sm border border-gray-100 p-10 shadow-sm">
                <h3 className="text-lg font-black text-[#002b49] mb-8 uppercase tracking-tighter border-l-4 border-red-600 pl-6">Tìm kiếm</h3>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="NHẬP TỪ KHÓA..."
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 focus:outline-none focus:border-[#002b49] transition-all text-[10px] font-black uppercase tracking-widest"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-sm border border-gray-100 p-10 shadow-sm">
                <h3 className="text-lg font-black text-[#002b49] mb-8 uppercase tracking-tighter border-l-4 border-red-600 pl-6">Danh mục</h3>
                <ul className="space-y-2">
                  {['Sự kiện công ty', 'Kiến thức chuyên ngành', 'Dự án mới', 'Thông báo', 'Công nghệ xây dựng'].map((cat, idx) => (
                    <li key={idx}>
                      <a href="#" className="flex items-center justify-between text-gray-400 hover:text-[#002b49] font-black uppercase text-[10px] tracking-widest transition-all group py-4 border-b border-gray-50 last:border-0">
                        <span>{cat}</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-red-600" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-[#002b49] rounded-sm p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter relative z-10">Đăng ký nhận tin</h3>
                <p className="text-blue-100 text-sm mb-10 opacity-70 leading-relaxed font-medium relative z-10">Nhận những thông tin kỹ thuật mới nhất và thông báo từ 510 CIC.</p>
                <div className="space-y-6 relative z-10">
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                      type="email"
                      placeholder="EMAIL CỦA BẠN"
                      className="w-full pl-16 pr-6 py-5 bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-all text-[10px] font-black uppercase tracking-widest"
                    />
                  </div>
                  <button className="w-full py-5 bg-red-600 text-white rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#002b49] transition-all shadow-2xl active:scale-95">
                    ĐĂNG KÝ NGAY
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
