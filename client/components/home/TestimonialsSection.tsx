import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Ý kiến khách hàng</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-on-surface">Khách hàng nói gì về chúng tôi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 opacity-40">format_quote</span>
            <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Đội ngũ kỹ sư của 510CIC làm việc rất chuyên nghiệp và tận tâm. Kết quả kiểm định luôn chính xác và đúng thời hạn cam kết, giúp chúng tôi hoàn toàn yên tâm về chất lượng công trình."</p>
            <div className="flex items-center gap-4">
              <img alt="Client Avatar 1" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbTrhnGLPUedKv8IvRxwveVWdigEPl0t8lRf9AsGSAVYp8LmBK_Up8tbtBR99IEx9N-2kkpKIsTX_zo9WhaC4pHqq2IY2BV6VfnMTTk8f0pj-JLft2Nvx4J9eiImQaXoX-Ian22oJnaZsmpIa5Wbs1FdxpiBXmfIjgOtQq5h7Wasu8vwPKDaDaFal8dmPVtRdpSkeVk6ZRgKKvg6Nj531SOH-w_lZc2rG7mDgX9UWcWtfDqj1gkr6dX2ap1XwSNVa6ONq5KwoDWW_7"/>
              <div>
                <div className="font-bold text-on-surface">Ông Nguyễn Văn Thành</div>
                <div className="text-xs text-on-surface-variant uppercase font-medium">GĐ Dự án - Group_A</div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 opacity-40">format_quote</span>
            <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Chúng tôi đánh giá cao năng lực thí nghiệm tại LAS-XD 510. Thiết bị hiện đại và quy trình nghiêm ngặt đã cung cấp cho chúng tôi những số liệu kỹ thuật tin cậy nhất cho thiết kế nền móng."</p>
            <div className="flex items-center gap-4">
              <img alt="Client Avatar 2" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsK_9hUBENqrPbN1q7CGifnuPB97RemIS2GZMJGXN_714CWsVjf6c3oOFEmfE84-aMMS812iYHDPJtNjgoTfS_-7pTaXfgthE_bAKHmX5iKK6h6TDNgYJU9iVDWnQbqoJaPgmNsY1MshpbGE43bcz2B6VzlXhjcYODxxxAt5rVDDaQZ_dwGQEdDZqR3fcEHYKpmLjwoiw7Xyz-EBUlrl7dCDs41OEL08yG4ePHpPaVsfMsdezgfB4l1pwKxZDs_asNgXmuMaKhBSkF"/>
              <div>
                <div className="font-bold text-on-surface">Bà Lê Thị Mai</div>
                <div className="text-xs text-on-surface-variant uppercase font-medium">Trưởng phòng Kỹ thuật - Corp_02</div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 opacity-40">format_quote</span>
            <p className="text-on-surface-variant italic mb-8 leading-relaxed">"Sự phối hợp giữa tư vấn thiết kế và giám sát thi công của 510CIC thực sự hiệu quả. Họ không chỉ phát hiện vấn đề mà còn đề xuất những giải pháp xử lý tối ưu về chi phí."</p>
            <div className="flex items-center gap-4">
              <img alt="Client Avatar 3" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2YZhSnlBKI55mfbM8Aj6L-cJdRGhNaJRUbHKK-sBlmp6Yk6zd0N54-vLww50pFDfb_y96kG5Ad_dogEC5l8nhf6O_AwQDtZAnHdfsirlIdwMMqxUeeYEFGyoGTBcZn-AdlVTW1Crfx1l7j7y3VK6nYQOhKY6hh03qB9Zw-npeC4-2jyhpnw22X4c7vL4lek16VCfAFwxvxifIcu7fm34YCddGMfWnLKqi1QrWScgXFa2vGVMCNNCg-1NGdFb37XgnpWV31WzTLevZ"/>
              <div>
                <div className="font-bold text-on-surface">Ông Trần Hữu Đức</div>
                <div className="text-xs text-on-surface-variant uppercase font-medium">Chủ đầu tư - Build_GRP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
