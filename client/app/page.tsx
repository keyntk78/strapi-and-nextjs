'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Building2, HardHat, Ruler, Microscope, ChevronRight, ChevronLeft, Award, Search, MessageSquare, Globe, Share2, Camera, Phone, Send, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'CHUYÊN GIA KIỂM ĐỊNH',
    title: 'KIỂM ĐỊNH CÔNG TRÌNH',
    highlight: 'XÂY DỰNG',
    description: 'Đơn vị hàng đầu cung cấp giải pháp kiểm định, giám định và tư vấn kỹ thuật xây dựng chuyên nghiệp tại Việt Nam.',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'UY TÍN - CHẤT LƯỢNG',
    title: 'GIÁM ĐỊNH SỰ CỐ',
    highlight: 'KỸ THUẬT',
    description: 'Xác định nguyên nhân sự cố công trình, đưa ra giải pháp khắc phục và gia cố tối ưu nhất.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop',
    subtitle: 'CÔNG NGHỆ TIÊN TIẾN',
    title: 'QUAN TRẮC BIẾN DẠNG',
    highlight: 'CÔNG TRÌNH',
    description: 'Ứng dụng thiết bị hiện đại trong quan trắc lún, nghiêng và biến dạng công trình xây dựng.',
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'THE GLOBAL CITY',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    subtitle: '510 cic'
  },
  {
    id: 2,
    title: 'METRO STAR',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    subtitle: '510 cic'
  },
  {
    id: 3,
    title: 'URBAN GREEN',
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop',
    subtitle: '510 cic'
  },
  {
    id: 4,
    title: 'SUNRISE CITY',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop',
    subtitle: '510 cic'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002b49]/90 via-[#002b49]/50 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-[1600px] mx-auto px-8 relative z-10 w-full pt-40 md:pt-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-1 bg-yellow-500"></div>
                <span className="text-white text-sm md:text-base font-black uppercase tracking-[0.4em] drop-shadow-lg">
                  {slides[currentSlide].subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl uppercase">
                {slides[currentSlide].title} <br />
                <span className="text-yellow-500">{slides[currentSlide].highlight}</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-xl font-medium drop-shadow-md">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/dich-vu" 
                  className="bg-red-600 text-white px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all shadow-2xl flex items-center justify-center group"
                >
                  Xem dịch vụ <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/lien-he" 
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#002b49] transition-all flex items-center justify-center group"
                >
                  Liên hệ ngay <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-12 z-20 flex items-center space-x-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#002b49] transition-all group"
          >
            <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#002b49] transition-all group"
          >
            <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-12 z-20 flex items-center space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                currentSlide === idx ? "w-12 bg-yellow-500" : "w-4 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-2">Cuộn xuống</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section (About Us) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6">Về chúng tôi</h3>
              <h2 className="text-4xl md:text-5xl font-black text-[#002b49] leading-tight uppercase tracking-tighter">
                CÔNG TY CỔ PHẦN <br /> KIỂM ĐỊNH CÔNG TRÌNH 510
              </h2>
              <div className="w-24 h-2 bg-red-600 mt-8"></div>
            </div>
            
            <p className="text-gray-500 text-lg leading-relaxed font-medium italic border-l-4 border-gray-100 pl-8">
              "Chúng tôi không chỉ kiểm định chất lượng, chúng tôi xây dựng niềm tin và sự an toàn cho mọi công trình Việt."
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Với hơn 15 năm kinh nghiệm, 510 CIC tự hào là đơn vị tiên phong trong lĩnh vực kiểm định và tư vấn kỹ thuật. Chúng tôi cam kết mang đến những giải pháp tối ưu, chính xác và minh bạch nhất cho khách hàng.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#002b49]">15+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-red-600">Năm kinh nghiệm</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#002b49]">500+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-red-600">Dự án hoàn thành</div>
              </div>
            </div>

            <Link href="/gioi-thieu" className="inline-flex items-center bg-[#002b49] text-white px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all shadow-xl group">
              Tìm hiểu thêm <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop"
                alt="Construction Inspection"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-[20px] border-red-600/10 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl z-20 animate-pulse">
              <Award size={48} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="h-[700px] w-full bg-black overflow-hidden flex flex-col md:flex-row relative">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ width: '25%' }}
            whileHover={{ width: '40%' }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className={cn(
              "relative h-full flex-1 group cursor-pointer overflow-hidden border-r border-white/10 last:border-0",
              "transition-all duration-700"
            )}
          >
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0 z-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </motion.div>

            {/* Vertical Text */}
            <div className="absolute left-6 bottom-12 z-20 pointer-events-none">
              <span className="text-white/30 text-[10px] uppercase font-black tracking-[0.8em] [writing-mode:vertical-lr] rotate-180 group-hover:text-yellow-500/50 transition-colors">
                construction inspection
              </span>
            </div>

            {/* Top Content */}
            <div className="absolute top-12 left-10 right-10 z-20">
              <span className="text-white/60 text-[10px] uppercase font-black tracking-widest block mb-4 group-hover:text-white transition-colors">
                {project.subtitle}
              </span>
              <h3 className="text-white text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-white transition-all transform group-hover:scale-105 origin-left tracking-normal">
                {project.title}
              </h3>
            </div>

            {/* Hover Zoom Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <Search size={40} className="text-white" />
              </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-yellow-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </motion.div>
        ))}

      </section>

      {/* Registration Section (Đăng ký Tư Vấn) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <h3 className="text-yellow-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6">CONTACT US</h3>
            <h2 className="text-5xl font-black text-[#002b49] tracking-tighter mb-8">Đăng Ký Tư Vấn</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium text-sm">
              Vui lòng điền đầy đủ thông tin vào form bên dưới để chúng tôi nắm rõ nhu cầu và phạm vi công việc của bạn. Ngay sau khi tiếp nhận, đội ngũ kỹ thuật và chuyên gia của chúng tôi sẽ nhanh chóng liên hệ để tư vấn chi tiết.
            </p>
          </div>

          <form className="space-y-12">
            <div className="space-y-4 border-b border-gray-100 pb-2">
              <label className="block text-[#002b49] font-black text-sm tracking-tight uppercase">Họ & tên</label>
              <input 
                type="text" 
                placeholder="Nhập họ tên của bạn" 
                className="w-full text-sm py-4 bg-transparent outline-none focus:placeholder:opacity-0 transition-all font-medium text-gray-600"
              />
            </div>
            
            <div className="space-y-4 border-b border-gray-100 pb-2">
              <label className="block text-[#002b49] font-black text-sm tracking-tight uppercase">Email</label>
              <input 
                type="email" 
                placeholder="Nhập địa chỉ email của bạn" 
                className="w-full text-sm py-4 bg-transparent outline-none focus:placeholder:opacity-0 transition-all font-medium text-gray-600"
              />
            </div>

            <div className="space-y-4 border-b border-gray-100 pb-2">
              <label className="block text-[#002b49] font-black text-sm tracking-tight uppercase">Nội dung</label>
              <textarea 
                placeholder="Vui lòng nhập nội dung" 
                rows={4}
                className="w-full text-sm py-4 bg-transparent outline-none focus:placeholder:opacity-0 transition-all font-medium text-gray-600 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-8">
              <button className="bg-[#002b49] text-white px-16 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-[#003b66] transition-all shadow-2xl active:scale-95">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Connection Banner (Kết nối Chuyên gia) */}
      <section className="bg-[#002b49] py-20 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="space-y-4 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Kết Nối Với Chuyên Gia Kiểm Định</h2>
            <p className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px]">CÔNG TY CỔ PHẦN KIỂM ĐỊNH CÔNG TRÌNH 510</p>
          </div>
          
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-12 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] transition-all shadow-2xl group/btn active:scale-95 flex items-center">
            KẾT NỐI NGAY <ArrowRight size={18} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[30deg] translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
      </section>
    </div>
  );
}
