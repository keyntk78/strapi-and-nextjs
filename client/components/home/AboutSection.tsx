import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Về 510CIC</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight mb-8">Kiến tạo niềm tin qua chất lượng kỹ thuật</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
            Với sứ mệnh đảm bảo an toàn và chất lượng cho các công trình, 510CIC tập trung vào việc cung cấp các dịch vụ kiểm định, thí nghiệm và tư vấn thiết kế với độ chính xác tuyệt đối. Chúng tôi không chỉ cung cấp kết quả, chúng tôi cung cấp sự an tâm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Chất lượng hàng đầu</h4>
                <p className="text-sm text-on-surface-variant">Quy trình kiểm soát nghiêm ngặt theo tiêu chuẩn ISO 9001 và ISO/IEC 17025.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Công nghệ hiện đại</h4>
                <p className="text-sm text-on-surface-variant">Sử dụng thiết bị thí nghiệm tối tân nhập khẩu từ các thương hiệu uy tín thế giới.</p>
              </div>
            </div>
          </div>
          <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
            TÌM HIỂU THÊM VỀ CHÚNG TÔI <span className="material-symbols-outlined">east</span>
          </a>
        </div>
        <div className="lg:col-span-7 relative order-1 lg:order-2">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img alt="Professional engineers reviewing blueprints" className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_Qk6th7IBKY9dP-qA64SuueXtTcz5dymN5mjPiwv1f7cs7f7X5eNeU1MRMazEFSTMwJAfJcy41UV6H_BVxbuQkIbuwX8VpE3Q18I6PX1vxMSXY3WXtdE04ylli7oL4_Cio4eMvsw8IOG0iwKuL24fe30M33lNd-DV8DIR9mohbFz6MA_vwtfsGcv5R1haMl9--0EXl0c9Cjk_Kr3d8K-HlJyiE-EQ2XhGaDaSyrVKZHUnbjgPUZwkscMTYIpdM1zjC6bRe6olAe1"/>
          </div>
          <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-3xl hidden md:block shadow-2xl">
            <div className="text-white text-6xl font-black mb-2">15+</div>
            <div className="text-white/80 text-sm font-bold tracking-widest uppercase">Năm kinh nghiệm vươn tầm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
