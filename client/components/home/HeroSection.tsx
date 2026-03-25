import React from 'react';

export default function HeroSection() {
  return (
    <header className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img alt="Large-scale construction site at dusk" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7HUVMPDgS1H-4XmFuVJZ9aBEaxxxivXIjHjqdM55TrJvZFh_9FK3XZ_Tq09eYC4NU3jcWKCpgvTmU6jzjsW6xohZLqgoi2xqCdgpcyJ7xRZRRtg51c63p13DLmdnklILnYT-CHlP6Czf2zhBfGD-ABA-pea3GTptEVIYPs8RfMVrtNv0BWs57nHugq0fzuDYtiZqdlQdrmBbiyvvZyFrcx49_CQWBpZcvSDZv-NjEADmlVmqMu76hI5rTZknerxtLM1mfI9JFjnk2"/>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase mb-6">Chuyên gia kiểm định & tư vấn hàng đầu</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tighter">
            Công ty Cổ phần Tư vấn và Kiểm định Xây dựng 510
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
            Kiểm soát chất lượng, Đảm bảo an toàn, Tối ưu giải pháp. Chúng tôi đồng hành cùng sự bền vững của mọi công trình.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="accent-gradient px-10 py-4 rounded-full text-white font-bold text-sm tracking-wide shadow-xl flex items-center gap-2 hover:scale-105 transition-transform uppercase">
              Khám phá dự án
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-4 rounded-full text-white font-bold text-sm tracking-wide hover:bg-white/20 transition-all uppercase">
              Dịch vụ của chúng tôi
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
