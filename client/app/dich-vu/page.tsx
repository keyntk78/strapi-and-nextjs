'use client';

import { motion } from 'framer-motion';
import { Shield, Microscope, Ruler, HardHat, Building2, CheckCircle, FileText, Search, Activity, Users, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const detailedServices = [
  {
    id: 'kiem-dinh',
    title: 'Kiểm định chất lượng công trình',
    description: 'Đánh giá mức độ an toàn chịu lực và độ bền của kết cấu công trình xây dựng. Kiểm tra các khuyết tật, hư hỏng và đưa ra kết luận về khả năng sử dụng tiếp tục của công trình.',
    icon: Shield,
    features: [
      'Kiểm định định kỳ chất lượng công trình',
      'Kiểm định khi thay đổi công năng sử dụng',
      'Kiểm định để nâng tầng, cải tạo',
      'Kiểm định chất lượng vật liệu xây dựng',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'giam-dinh',
    title: 'Giám định sự cố xây dựng',
    description: 'Xác định nguyên nhân gây ra sự cố, hư hỏng công trình như lún, nứt, nghiêng, sập đổ. Đề xuất giải pháp khắc phục, gia cố và xử lý sự cố một cách an toàn và hiệu quả nhất.',
    icon: Microscope,
    features: [
      'Giám định nguyên nhân nứt, lún công trình',
      'Giám định sự cố sập đổ kết cấu',
      'Đánh giá mức độ nguy hiểm của sự cố',
      'Đề xuất phương án gia cố, sửa chữa',
    ],
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'quan-trac',
    title: 'Quan trắc biến dạng công trình',
    description: 'Theo dõi sự biến đổi về hình học của công trình trong quá trình thi công và vận hành. Cung cấp số liệu chính xác để cảnh báo sớm các nguy cơ mất an toàn.',
    icon: Ruler,
    features: [
      'Quan trắc lún, nghiêng công trình',
      'Quan trắc chuyển vị ngang tường vây',
      'Quan trắc ứng suất cốt thép, bê tông',
      'Lập báo cáo quan trắc định kỳ',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tu-van',
    title: 'Tư vấn giám sát thi công',
    description: 'Đại diện chủ đầu tư kiểm soát chất lượng, khối lượng, tiến độ và an toàn lao động trong quá trình thi công xây dựng công trình theo đúng thiết kế và quy định.',
    icon: HardHat,
    features: [
      'Giám sát chất lượng vật liệu đầu vào',
      'Giám sát quy trình thi công tại hiện trường',
      'Kiểm soát khối lượng và tiến độ thi công',
      'Nghiệm thu các giai đoạn công trình',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'thi-nghiem',
    title: 'Thí nghiệm vật liệu & Cấu kiện',
    description: 'Thực hiện các phép thử cơ lý, hóa học đối với vật liệu xây dựng và cấu kiện công trình tại hiện trường hoặc trong phòng thí nghiệm chuyên dụng LAS-XD.',
    icon: Building2,
    features: [
      'Thử nghiệm cường độ bê tông, cốt thép',
      'Thí nghiệm nén tĩnh cọc, thử tải sàn',
      'Kiểm tra không phá hủy (siêu âm, súng bật nẩy)',
      'Thí nghiệm các chỉ tiêu cơ lý của đất nền',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tham-tra',
    title: 'Thẩm tra thiết kế & Dự toán',
    description: 'Kiểm tra, đánh giá tính đúng đắn, phù hợp của hồ sơ thiết kế và dự toán so với các tiêu chuẩn, quy chuẩn kỹ thuật và quy định hiện hành của pháp luật.',
    icon: FileText,
    features: [
      'Thẩm tra thiết kế kỹ thuật, bản vẽ thi công',
      'Thẩm tra tính toán kết cấu công trình',
      'Thẩm tra dự toán, tổng mức đầu tư',
      'Tư vấn tối ưu hóa giải pháp thiết kế',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Services Hero"
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
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 drop-shadow-2xl">Dịch vụ chuyên nghiệp</h1>
            <div className="w-24 h-2 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 font-medium drop-shadow-md leading-relaxed">
              Chúng tôi cung cấp các giải pháp kỹ thuật toàn diện, chính xác và khách quan cho mọi loại hình công trình xây dựng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center",
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className={cn("space-y-10", index % 2 !== 0 ? "lg:pl-12" : "lg:pr-12")}>
                <div className="inline-flex items-center space-x-4 text-red-600 font-black uppercase tracking-[0.3em] text-xs">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <service.icon size={20} />
                  </div>
                  <span>Dịch vụ {index + 1}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#002b49] leading-tight uppercase tracking-tighter">{service.title}</h2>
                <div className="w-20 h-2 bg-red-600"></div>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-4 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                        <CheckCircle className="text-red-600 group-hover:text-white transition-colors" size={14} />
                      </div>
                      <span className="text-sm text-gray-700 font-black uppercase tracking-tight leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <button className="bg-[#002b49] text-white px-10 py-4 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-all flex items-center shadow-xl group">
                    Yêu cầu tư vấn <ChevronRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="relative group">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#002b49]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#002b49] text-white rounded-sm shadow-2xl flex items-center justify-center p-6 hidden md:flex z-20 group-hover:bg-red-600 transition-colors">
                  <service.icon size={48} />
                </div>
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gray-100 -z-10 rounded-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-xs mb-6">Cam kết của chúng tôi</h3>
            <h2 className="text-4xl md:text-5xl font-black text-[#002b49] uppercase tracking-tighter">TẠI SAO CHỌN 510 CIC?</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Chính xác & Khách quan', icon: Search, desc: 'Mọi kết quả kiểm định đều dựa trên số liệu thực tế và quy chuẩn kỹ thuật nghiêm ngặt nhất.' },
              { title: 'Công nghệ hiện đại', icon: Activity, desc: 'Ứng dụng các thiết bị đo đạc và phần mềm phân tích kết cấu tiên tiến nhất hiện nay.' },
              { title: 'Đội ngũ tận tâm', icon: Users, desc: 'Các chuyên gia luôn sẵn sàng hỗ trợ và tư vấn giải pháp tối ưu, tiết kiệm chi phí nhất.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 shadow-sm border-b-8 border-red-600 text-center space-y-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="w-20 h-20 bg-gray-50 text-[#002b49] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#002b49] group-hover:text-white transition-all">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-[#002b49] uppercase tracking-tight leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
