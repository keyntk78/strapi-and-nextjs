'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ShieldCheck, Globe, ChevronRight, FileCheck, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Chất lượng hàng đầu',
    description: 'Cam kết cung cấp kết quả kiểm định chính xác, khách quan và trung thực nhất.',
    icon: Award,
  },
  {
    title: 'Chuyên nghiệp',
    description: 'Quy trình làm việc khoa học, đội ngũ chuyên gia giàu kinh nghiệm và tận tâm.',
    icon: Users,
  },
  {
    title: 'An toàn là trên hết',
    description: 'Mọi hoạt động đều hướng tới mục tiêu đảm bảo an toàn tuyệt đối cho công trình.',
    icon: ShieldCheck,
  },
  {
    title: 'Đổi mới sáng tạo',
    description: 'Không ngừng cập nhật công nghệ và phương pháp kiểm định tiên tiến nhất.',
    icon: Globe,
  },
];

const timeline = [
  { year: '2010', event: 'Thành lập Công ty Cổ phần Kiểm định Công trình 510.' },
  { year: '2013', event: 'Đạt chứng chỉ ISO 9001:2008 về quản lý chất lượng.' },
  { year: '2015', event: 'Mở rộng quy mô với hệ thống phòng thí nghiệm hiện đại LAS-XD.' },
  { year: '2018', event: 'Trở thành đối tác chiến lược của nhiều tập đoàn xây dựng lớn.' },
  { year: '2022', event: 'Nâng cấp công nghệ quan trắc tự động và kiểm định không phá hủy.' },
  { year: '2026', event: 'Tiếp tục khẳng định vị thế dẫn đầu trong ngành kiểm định xây dựng.' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="About Hero"
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
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">Giới thiệu công ty</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 font-medium drop-shadow-md leading-relaxed">
              Hành trình hơn 15 năm xây dựng niềm tin và khẳng định chất lượng trong lĩnh vực kiểm định xây dựng tại Việt Nam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6">Về chúng tôi</h3>
              <h2 className="text-4xl md:text-5xl font-black text-[#002b49] leading-tight uppercase tracking-tighter">
                SỨ MỆNH BẢO VỆ <br /> SỰ BỀN VỮNG CỦA CÔNG TRÌNH
              </h2>
              <div className="w-24 h-2 bg-red-600 mt-8"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Công ty Cổ phần Kiểm định Công trình 510 (510 CIC) là đơn vị chuyên nghiệp trong lĩnh vực tư vấn, kiểm định và giám định chất lượng công trình xây dựng. Với đội ngũ kỹ sư, chuyên gia giàu kinh nghiệm và hệ thống thiết bị hiện đại, chúng tôi tự hào là đối tác tin cậy của hàng trăm chủ đầu tư và nhà thầu trên khắp cả nước.
            </p>
            <p className="text-gray-500 leading-relaxed border-l-4 border-gray-100 pl-8 italic">
              "Chúng tôi hiểu rằng mỗi công trình là một tâm huyết, một tài sản lớn. Vì vậy, 510 CIC luôn đặt cái tâm và trách nhiệm lên hàng đầu trong mỗi dự án, dù lớn hay nhỏ."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-gray-50 text-[#002b49] rounded-sm flex items-center justify-center shrink-0 shadow-sm">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#002b49] uppercase text-sm mb-3">Sứ mệnh</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">Cung cấp giải pháp kỹ thuật chính xác, đảm bảo an toàn tối đa cho cộng đồng.</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-sm flex items-center justify-center shrink-0 shadow-sm">
                  <Eye size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#002b49] uppercase text-sm mb-3">Tầm nhìn</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">Trở thành biểu tượng niềm tin hàng đầu trong ngành kiểm định xây dựng Việt Nam.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="510 CIC Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-1/2 h-1/2 bg-red-600/10 -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#002b49] text-white p-10 rounded-sm shadow-2xl hidden md:flex flex-col justify-center text-center z-20">
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Năm uy tín</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Giá trị cốt lõi</h3>
            <h2 className="text-4xl md:text-5xl font-black text-[#002b49] uppercase tracking-tighter">PHƯƠNG CHÂM HOẠT ĐỘNG</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 shadow-sm hover:shadow-2xl transition-all text-center group border-t-8 border-transparent hover:border-red-600 h-full flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gray-50 text-[#002b49] rounded-full flex items-center justify-center mb-10 group-hover:bg-[#002b49] group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                  <value.icon size={36} />
                </div>
                <h4 className="text-xl font-black text-[#002b49] mb-6 uppercase tracking-tight leading-tight">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Lịch sử hình thành</h3>
            <h2 className="text-4xl md:text-5xl font-black text-[#002b49] uppercase tracking-tighter">CHẶNG ĐƯỜNG PHÁT TRIỂN</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-8"></div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 relative z-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-white border-4 border-[#002b49] rounded-full flex items-center justify-center mb-8 relative z-10 shadow-xl group-hover:bg-[#002b49] group-hover:text-white transition-all shrink-0">
                    <span className="font-black text-sm">{item.year}</span>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:bg-white hover:shadow-2xl transition-all h-full transform group-hover:-translate-y-2">
                    <p className="text-xs text-gray-500 leading-relaxed font-black uppercase tracking-tight">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-32 bg-[#002b49] text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0 L100,100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-red-500 font-black uppercase tracking-[0.3em] text-xs mb-6">Năng lực & Pháp lý</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1] uppercase tracking-tighter">CHỨNG CHỈ & <br /> GIẤY PHÉP HOẠT ĐỘNG</h2>
              <div className="w-24 h-2 bg-red-600"></div>
            </div>
            
            <p className="text-blue-100/70 text-lg leading-relaxed font-medium">
              510 CIC tự hào sở hữu đầy đủ các chứng chỉ năng lực hoạt động xây dựng hạng I, các giấy phép phòng thí nghiệm chuyên ngành xây dựng (LAS-XD) và các chứng chỉ quản lý chất lượng quốc tế ISO.
            </p>
            
            <ul className="space-y-6 pt-4">
              {[
                'Chứng chỉ năng lực hoạt động xây dựng Hạng I',
                'Giấy chứng nhận đủ điều kiện hoạt động thí nghiệm',
                'Hệ thống quản lý chất lượng ISO 9001:2015',
                'Chứng chỉ hành nghề chuyên gia chủ chốt'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-sm font-black uppercase tracking-widest text-white/90 group">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <FileCheck size={18} className="text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8">
              <button className="bg-white text-[#002b49] px-12 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-2xl group flex items-center">
                Xem hồ sơ năng lực <ChevronRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm flex flex-col items-center justify-center p-8 hover:bg-white/10 transition-all cursor-pointer group hover:border-red-600/50"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase size={40} className="text-white/30 group-hover:text-red-500 transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Chứng chỉ {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
