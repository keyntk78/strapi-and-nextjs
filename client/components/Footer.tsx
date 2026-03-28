import Link from 'next/link';
import { Phone, Mail, MapPin, Play, Globe, MessageCircle, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Contact Info Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tighter text-white">THÔNG TIN LIÊN HỆ</h3>
            <div className="w-20 h-1 bg-white/20"></div>
          </div>
          
          <ul className="space-y-6 text-gray-400 font-medium text-sm">
            <li className="flex flex-col space-y-1">
              <span className="text-white">0933.401.905 – (08) 62.785.510</span>
            </li>
            <li className="flex flex-col space-y-1 underline decoration-gray-600 hover:text-white transition-colors">
              <a href="mailto:info@510cic.com">info@510cic.com</a>
            </li>
            <li className="flex flex-col space-y-1 underline decoration-gray-600 hover:text-white transition-colors">
              <a href="https://510cic.com" target="_blank" rel="noopener noreferrer">www.510cic.com</a>
            </li>
            <li className="flex flex-col space-y-2 pt-2">
              <p>Số 4 Đường 11A, Khu phố 23, P. An Khánh, Thành phố Hồ Chí Minh</p>
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div className="space-y-10 lg:pl-10">
          <div>
            <h3 className="text-xl font-black mb-1 uppercase tracking-tighter text-white">FOLLOW US</h3>
            <div className="w-20 h-1 bg-white/20"></div>
          </div>

          <div className="flex flex-col space-y-4">
            {[
              { name: 'YOUTUBE', icon: Play },
              { name: 'TIKTOK', icon: MessageCircle },
              { name: 'FACEBOOK', icon: Globe }
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="flex items-center space-x-4 border border-yellow-800/50 px-8 py-4 rounded-sm group hover:bg-yellow-800/20 transition-all w-fit min-w-[200px]"
              >
                <social.icon size={20} className="text-yellow-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-black tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Map Column */}
        <div className="h-[300px] lg:h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2458145826!2d106.7335713!3d10.79251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e09090909%3A0x0!2zQ8O0bmcgdHkgQ1AgS2nhu4NtIMSR4buLbmggQ8O0bmcgdHLDrG5oIDUxMA!5e0!3m2!1svi!2svn!4v1711612000000!5m2!1svi!2svn" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] space-y-6 md:space-y-0">
        <p>© 2026 CÔNG TY CỔ PHẦN KIỂM ĐỊNH CÔNG TRÌNH 510. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-10">
          <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
          <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
}
