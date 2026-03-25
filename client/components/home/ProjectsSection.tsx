import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Dự án tiêu biểu</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-on-surface">Công trình hoàn thành tiêu biểu</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="h-72 overflow-hidden relative">
              <img alt="Modern high-rise commercial building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmGNOe0KGVbhLFveTWiAaRfQNLkAYHC_7MZaRD-7KSCTdDGJ7VV8iVHx_SKzLcM853iJ9v-Bj8SRXzzpRWNWGJPvd1WjJ3zcyWtu5E82Hf86GY0R0FDrrIK14DoLfFeU4LwQGlGqzHCBkXHPqAOjj2ar8-6udA75lajsaX77Jj8E3dU7d-UAl5JuHsRlZ49NV1e5VzDazY88gcqfLyujZcoBYKcfm2v71fJJ1mmhJz4lrKVJZcduLEccOEHaGUQy5mZs8HqYZT6rFH"/>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Kiểm định</span>
              </div>
            </div>
            <div className="p-10">
              <h4 className="text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Financial Center Tower</h4>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">Kiểm định chất lượng kết cấu thép và bê tông cường độ cao cho dự án tháp tài chính quy mô 45 tầng.</p>
              <a className="inline-flex items-center gap-2 text-on-surface font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary transition-all" href="#">CHI TIẾT DỰ ÁN</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="h-72 overflow-hidden relative">
              <img alt="Industrial plant infrastructure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2NgtQkuq80jqF5RwGTpiZV9k3V-v2zTI1zg3HoXtGP7bDIAASw-vSyELibvlCuoWM4NXNttOEEmkEHxTlTuAR33sQX0Ahr5DKX3OHb6iR_j-EXf_273p9EPy90P9-RqGYOUJA4IHz5m7TDLAIoe3FJoo7u1x_MhEvkQUnCfP0Bhu63SvzvukSU-0bznU05JaHRBuQ4VT3rLo3lGAKV2I9QCdXpRGTbYvRUmA5wIbl0cGDSGoWlG8fvkMFIpw__ByuEPt4jGr7pdl"/>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Thí nghiệm</span>
              </div>
            </div>
            <div className="p-10">
              <h4 className="text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Khu Liên hợp Gang thép</h4>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">Thực hiện thí nghiệm nén tĩnh cọc tải trọng lớn và khảo sát địa chất chuyên sâu cho hạ tầng nhà máy.</p>
              <a className="inline-flex items-center gap-2 text-on-surface font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary transition-all" href="#">CHI TIẾT DỰ ÁN</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
            <div className="h-72 overflow-hidden relative">
              <img alt="Modern suspension bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs3s6R9zvSkBNjFYdaI2Dxj4ttcmD_8aPegeDrdX8ybAeb8Wh81FpO8SocMKbRDBwDsc_z7MEfxNgO8XbEVAf-MMsEDxlfvAo6nwi9nTFXE95bEqJCFm1UpRDOItCGQtLEay-loYw3NWaUIY6yBouc5ZDersy9USB42EYvKCdA2KuMxINBPFfJ4caJbET4hAWV-dEUtQpXCe3QOYjDVSMlJdySLmofyj6ndTNm_fanunMkrIZHJjlt8eiuNCuHxQmvc936vKzAplRw"/>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Giám sát</span>
              </div>
            </div>
            <div className="p-10">
              <h4 className="text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">Cầu Hạ Tầng Đô Thị</h4>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">Giám sát thi công toàn diện và kiểm định dầm cầu bê tông dự ứng lực, đảm bảo tuổi thọ công trình.</p>
              <a className="inline-flex items-center gap-2 text-on-surface font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary transition-all" href="#">CHI TIẾT DỰ ÁN</a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-container transition-all shadow-lg uppercase text-sm">Xem toàn bộ danh mục dự án</button>
        </div>
      </div>
    </section>
  );
}
