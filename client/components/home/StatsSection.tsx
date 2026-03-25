import React from 'react';

export default function StatsSection() {
  return (
    <section className="py-24 stats-bg-pattern text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">15+</div>
            <div className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">Năm kinh nghiệm</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">500+</div>
            <div className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">Dự án hoàn thành</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">120+</div>
            <div className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">Đối tác tin cậy</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black mb-2">35+</div>
            <div className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">Chuyên gia kỹ thuật</div>
          </div>
        </div>
      </div>
    </section>
  );
}
