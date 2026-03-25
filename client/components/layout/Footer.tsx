import React from 'react';

type FooterProps = {
  globalData?: any;
};

export default function Footer({ globalData }: FooterProps) {
  console.log(globalData);

  const siteName = globalData?.siteName || "510CIC";
  const shortDescription = globalData?.footerContent?.shortDescription || "Công ty Cổ phần Tư vấn và Kiểm định Xây dựng 510. Đồng hành cùng chất lượng và sự an toàn của các công trình Việt.";
  const copyrightText = globalData?.footerContent?.copyrightText || "© 2023 510CIC. All rights reserved. GPKD số 0101234567 cấp bởi Sở KH&ĐT Hà Nội.";
  const address = globalData?.contactInfo?.address || "Hà Nội: Tầng 5, Tòa nhà A, Số 123 Đường Láng, Q. Đống Đa";
  const email = globalData?.contactInfo?.email || "info@510cic.com";
  const hotline = globalData?.contactInfo?.hotline || "0933 401 905";
  const socialLinks = globalData?.socialLinks || [];

  return (
    <footer className="bg-slate-50 w-full pt-24 pb-12 border-t border-slate-200 font-['Inter'] text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1">
          <span className="text-2xl font-black text-blue-800 mb-6 block tracking-tighter">{siteName}</span>
          <p className="text-slate-500 mb-8 max-w-xs">{shortDescription}</p>
          <div className="flex gap-5">
            {socialLinks.length > 0 ? (
              socialLinks.map((social: any, idx: number) => (
                <a key={idx} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href={social.url || "#"} target="_blank" rel="noreferrer">
                  {/* Nếu người dùng có upload Icon thì dùng ảnh, không thì dùng tên nền tảng (chữ cái đầu) */}
                  {social.icon?.data?.attributes?.url ? (
                    <img src={`http://127.0.0.1:1337${social.icon.data.attributes.url}`} alt={social.platform} className="w-5 h-5 object-contain" />
                  ) : (
                    <span className="font-bold text-xs uppercase">{social.platform?.substring(0, 2) || "S"}</span>
                  )}
                </a>
              ))
            ) : (
              // Mặc định fallback
              <>
                <a className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href={`mailto:${email}`}>
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              </>
            )}
          </div>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">Dịch vụ chuyên môn</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Thí nghiệm vật liệu (LAS-XD)</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Kiểm định chất lượng</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Tư vấn thiết kế</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Quản lý dự án &amp; Giám sát</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">Truy cập nhanh</h5>
          <ul className="space-y-4">
            <li><a className="text-blue-600 font-semibold" href="#">Trang chủ</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Giới thiệu về 510CIC</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Danh mục Dự án</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Tin tức chuyên ngành</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">Thông tin Liên hệ</h5>
          <div className="space-y-4 text-slate-500">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-blue-600 shrink-0">location_on</span>
              <p>{address}</p>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-blue-600 shrink-0">mail</span>
              <p>{email}</p>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-blue-600 shrink-0">call</span>
              <p>Hotline: {hotline}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs font-medium">{copyrightText}</p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-wider">
          <a className="text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
