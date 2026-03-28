'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Contact Hero"
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
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">Liên hệ với chúng tôi</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 font-medium drop-shadow-md leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về dịch vụ kiểm định và tư vấn kỹ thuật.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-16">
              <div className="space-y-12">
                <div className="relative">
                  <h2 className="text-3xl font-black text-[#002b49] uppercase tracking-tighter mb-8">THÔNG TIN LIÊN HỆ</h2>
                  <div className="w-20 h-2 bg-red-600"></div>
                </div>
                
                <div className="space-y-10">
                  {[
                    { title: 'Địa chỉ trụ sở', info: ['Số 510, Đường ABC, Quận XYZ, TP. Hồ Chí Minh'], icon: MapPin },
                    { title: 'Điện thoại', info: ['028.3844.5100', '090.123.4567 (Hotline)'], icon: Phone, highlight: true },
                    { title: 'Email', info: ['info@510cic.com', 'support@510cic.com'], icon: Mail },
                    { title: 'Giờ làm việc', info: ['Thứ 2 - Thứ 6: 08:00 - 17:30', 'Thứ 7: 08:00 - 12:00'], icon: Clock },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-6 group">
                      <div className="w-16 h-16 bg-gray-50 rounded-sm flex items-center justify-center text-[#002b49] group-hover:bg-[#002b49] group-hover:text-white transition-all shrink-0 shadow-sm group-hover:rotate-6">
                        <item.icon size={28} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-black text-[#002b49] uppercase text-[10px] tracking-[0.2em] mb-2">{item.title}</h3>
                        {item.info.map((line, i) => (
                          <p key={i} className={cn(
                            "text-sm leading-relaxed font-medium",
                            item.highlight && i === 1 ? "text-red-600 font-black" : "text-gray-500"
                          )}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <h2 className="text-xl font-black text-[#002b49] uppercase tracking-widest mb-8">KẾT NỐI VỚI CHÚNG TÔI</h2>
                <div className="flex space-x-4">
                  {[1, 2, 3].map((idx) => (
                    <a key={idx} href="#" className="w-14 h-14 rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center text-[#002b49] hover:bg-red-600 hover:text-white transition-all shadow-sm hover:-translate-y-1">
                      <ChevronRight size={24} className="-rotate-45" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 rounded-sm border border-gray-100 p-12 md:p-20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <div className="flex items-center space-x-6 mb-16 relative z-10">
                <div className="w-16 h-2 bg-red-600"></div>
                <h2 className="text-4xl font-black text-[#002b49] uppercase tracking-tighter">GỬI YÊU CẦU TƯ VẤN</h2>
              </div>
              
              <form className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Họ và tên *</label>
                    <input
                      type="text"
                      placeholder="NGUYỄN VĂN A"
                      className="w-full px-8 py-5 rounded-sm border-2 border-white focus:outline-none focus:border-[#002b49] transition-all bg-white text-xs font-black uppercase tracking-widest placeholder:text-gray-200"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Số điện thoại *</label>
                    <input
                      type="tel"
                      placeholder="090 123 4567"
                      className="w-full px-8 py-5 rounded-sm border-2 border-white focus:outline-none focus:border-[#002b49] transition-all bg-white text-xs font-black uppercase tracking-widest placeholder:text-gray-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Email *</label>
                    <input
                      type="email"
                      placeholder="EXAMPLE@GMAIL.COM"
                      className="w-full px-8 py-5 rounded-sm border-2 border-white focus:outline-none focus:border-[#002b49] transition-all bg-white text-xs font-black uppercase tracking-widest placeholder:text-gray-200"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Dịch vụ quan tâm</label>
                    <div className="relative">
                      <select className="w-full px-8 py-5 rounded-sm border-2 border-white focus:outline-none focus:border-[#002b49] transition-all bg-white text-[10px] font-black uppercase tracking-widest appearance-none cursor-pointer">
                        <option>CHỌN DỊCH VỤ</option>
                        <option>KIỂM ĐỊNH CHẤT LƯỢNG</option>
                        <option>GIÁM ĐỊNH SỰ CỐ</option>
                        <option>QUAN TRẮC CÔNG TRÌNH</option>
                        <option>TƯ VẤN GIÁM SÁT</option>
                        <option>THÍ NGHIỆM VẬT LIỆU</option>
                      </select>
                      <ChevronRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">Nội dung yêu cầu *</label>
                  <textarea
                    rows={6}
                    placeholder="VUI LÒNG MÔ TẢ CHI TIẾT YÊU CẦU CỦA BẠN..."
                    className="w-full px-8 py-6 rounded-sm border-2 border-white focus:outline-none focus:border-[#002b49] transition-all bg-white text-xs font-black uppercase tracking-widest placeholder:text-gray-200 resize-none"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button className="w-full md:w-auto bg-red-600 text-white px-16 py-6 rounded-sm font-black uppercase text-xs tracking-[0.3em] hover:bg-[#002b49] transition-all shadow-2xl flex items-center justify-center group active:scale-95">
                    GỬI YÊU CẦU <Send size={20} className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[600px] relative border-t border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.214695015!2d106.6666!3d10.794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzM4LjQiTiAxMDbCsDM5JzU5LjgiRQ!5e0!3m2!1svi!2s!4v1616161616161!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100"
        ></iframe>
        <div className="absolute top-16 left-16 bg-[#002b49] p-12 shadow-2xl rounded-sm border border-white/10 hidden md:block max-w-sm text-white">
          <div className="w-12 h-1 bg-red-600 mb-8"></div>
          <h4 className="font-black uppercase text-sm mb-6 tracking-tighter">VĂN PHÒNG 510 CIC</h4>
          <p className="text-xs text-blue-100/60 leading-relaxed font-medium mb-10">Số 510, Đường ABC, Quận XYZ, TP. Hồ Chí Minh, Việt Nam</p>
          <div className="flex items-center text-red-500 font-black text-[10px] uppercase tracking-[0.3em] cursor-pointer group">
            <span>XEM TRÊN BẢN ĐỒ</span>
            <ChevronRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </section>
    </div>
  );
}
