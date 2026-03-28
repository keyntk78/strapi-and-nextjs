import React from 'react';

type HeaderProps = {
  globalData?: any;
};

export default function Header({ globalData }: HeaderProps) {
  const hotline = globalData?.contactInfo?.hotline || "0933 401 905";
  const email = globalData?.contactInfo?.email || "info@510cic.com";
  const siteName = globalData?.siteName || "NTKCIC";
  const logoUrl = globalData?.logoUrl; // In case they upload logo

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="top-info-bar py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium text-slate-600">
          <div className="flex gap-6">
            <a className="flex items-center gap-1 hover:text-blue-700 transition-colors" href={`mailto:${email}`}>
              <span className="material-symbols-outlined text-base">mail</span> {email}
            </a>
            <a className="flex items-center gap-1 hover:text-blue-700 transition-colors" href={`tel:${hotline.replace(/\s+/g, '')}`}>
              <span className="material-symbols-outlined text-base">call</span> Hotline: {hotline}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <img alt="VN" className="w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOUYw7ShRhxc-2GCO8YLRoFA5iC3kaBYV-FUeWkgp_Lfgwo36Vd25_SWpSdUDf91nrU3-1_ZaDGHaf7O5rUb6Fu1wJqZLwVLqmxoWb7HU5CcMiOzi8wGrYtUVK-qfVwdC4IeoRfqUcgAS3L_wvgzhJqN53TqKKnAsG80XDLfzoWLuGY6jlOJZZZJwgGsf-JN2uIgiuu10muQwn1BvHBFxuapDJ9qNsVYxNjVWHJ8u9z7lHcXSDn_rCEiqC3B53W3tpVMpyBt3VGCfG" />
              <img alt="EN" className="w-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSXrgiPaJMiR6P-3VdozdqT2SNU-NpikNTLvmhXNjAeA1WbblrkmH70dfE0BsNUkBX4gbux4Y-FJKjoxqdHfOG-XQL4cYGlXrvhu1pmbVsdEezljo5cy2dqaRG06VUjjm6R3wpBiTwMMJzHAD5bAYKLGX8EqVi4tvTn-r8FAIP46mAjuRuozAqD5NRg_DccXVJCQ58sqJlgH-N60bRi1UYtuLdGIIPBrzidK3RxW-tWR1iwgp9HF1_ddpxipkpK8WBDJCO-U46jHCi" />
              <span>VI/EN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-xl shadow-sm h-20 md:h-24">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">
            {logoUrl ? <img src={logoUrl} alt={siteName} className="h-10" /> : siteName}
          </div>
          <div className="hidden lg:flex space-x-8 font-['Inter'] text-sm font-semibold tracking-wide uppercase">
            <a className="text-blue-700 border-b-2 border-blue-700 pb-1" href="#">Trang chủ</a>
            <a className="text-slate-600 hover:text-blue-600 transition-colors" href="#">Giới thiệu</a>
            <a className="text-slate-600 hover:text-blue-600 transition-colors" href="#">Dự án</a>
            <a className="text-slate-600 hover:text-blue-600 transition-colors" href="#">Phòng thí nghiệm</a>
            <a className="text-slate-600 hover:text-blue-600 transition-colors" href="#">Tin tức</a>
            <a className="text-slate-600 hover:text-blue-600 transition-colors" href="#">Liên hệ</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-all active:scale-95">
              Liên hệ Tư vấn
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
