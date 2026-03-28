'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'TRANG CHỦ', path: '/' },
  { name: 'GIỚI THIỆU', path: '/gioi-thieu' },
  { name: 'DỰ ÁN', path: '/du-an' },
  { name: 'DỊCH VỤ', path: '/dich-vu' }, // Updated from phong-thi-nghiem to match pages
  { name: 'TIN TỨC', path: '/tin-tuc' },   // Updated from hoat-dong to match pages
  { name: 'LIÊN HỆ', path: '/lien-he' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-[#002b49]/95 backdrop-blur-md shadow-xl py-2" : "bg-gradient-to-b from-black/80 to-transparent py-4"
    )}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
              {/* Outer Blue Ring */}
              <circle cx="50" cy="50" r="48" fill="#004a99" />
              
              {/* Curved Text */}
              <path id="curve" d="M 20,50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="transparent" />
              <text className="text-[6px] font-black fill-white uppercase tracking-[0.1em]">
                <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                  COMPANY CONSTRUCTION INSPECTION
                </textPath>
              </text>

              {/* Inner White Circle */}
              <circle cx="50" cy="50" r="35" fill="white" stroke="#004a99" strokeWidth="1" />
              
              {/* Center Text */}
              <text x="50" y="48" textAnchor="middle" className="text-[18px] font-black fill-[#004a99] uppercase tracking-tighter">510</text>
              <text x="50" y="62" textAnchor="middle" className="text-[12px] font-black fill-[#004a99] uppercase tracking-widest">CIC</text>
              
              {/* Bottom Decoration */}
              <circle cx="50" cy="85" r="2" fill="white" />
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-10">
          <nav>
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={cn(
                      "text-[14px] font-black tracking-tight transition-all duration-300 uppercase",
                      pathname === link.path 
                        ? "text-[#facc15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                        : "text-white hover:text-[#facc15]"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-3 text-[14px] font-black text-white border-l border-white/20 pl-8">
            <button className="text-[#facc15] hover:scale-110 transition-transform">VI</button>
            <span className="opacity-30">|</span>
            <button className="hover:text-[#facc15] hover:scale-110 transition-transform opacity-70 hover:opacity-100">EN</button>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:0933401905" 
              className="bg-[#d4a017] hover:bg-[#b88a14] text-white px-5 py-3 rounded-sm flex items-center space-x-3 transition-all shadow-lg active:scale-95 group"
            >
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Phone size={14} fill="white" className="text-white" />
              </div>
              <div className="flex items-center space-x-3 border-l border-white/20 pl-3">
                <span className="text-[15px] font-black tracking-tight">0933 401 905</span>
              </div>
            </a>
            <a 
              href="tel:0862785510" 
              className="bg-[#d4a017] hover:bg-[#b88a14] text-white px-5 py-3 rounded-sm flex items-center space-x-3 transition-all shadow-lg active:scale-95 group"
            >
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Phone size={14} fill="white" className="text-white" />
              </div>
              <div className="flex items-center space-x-3 border-l border-white/20 pl-3">
                <span className="text-[15px] font-black tracking-tight">0862 785 510</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-3 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl xl:hidden z-[60]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#002b49] shadow-2xl z-[70] xl:hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-white/10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#004a99] font-black border-2 border-[#004a99]">510</div>
                <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"><X size={32} /></button>
              </div>
              
              <div className="flex-grow overflow-y-auto py-10 px-8">
                <ul className="space-y-8">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        className={cn(
                          "text-xl font-black uppercase tracking-widest block transition-colors",
                          pathname === link.path ? "text-[#facc15]" : "text-white hover:text-[#facc15]"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-10 border-t border-white/10 bg-black/40">
                <div className="space-y-6">
                  <a href="tel:0933401905" className="flex items-center space-x-4 text-white group">
                    <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Phone size={20} fill="white" />
                    </div>
                    <span className="font-black text-lg">0933 401 905</span>
                  </a>
                  <a href="tel:0862785510" className="flex items-center space-x-4 text-white group">
                    <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Phone size={20} fill="white" />
                    </div>
                    <span className="font-black text-lg">0862 785 510</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
