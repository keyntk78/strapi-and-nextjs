'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageSquare, Share2, Camera, Globe, ChevronUp, MessageCircle, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function FloatingControls() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Bottom Left Hotline & Close */}
      <div className="fixed left-0 bottom-10 z-[100] flex flex-col items-start space-y-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="flex items-center"
            >
              <Link href="tel:0933401905" className="bg-[#002b49] p-4 shadow-2xl rounded-r-full flex items-center space-x-4 hover:bg-[#003b66] transition-all group">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-white font-black text-sm pr-4 tracking-tighter">0933401905</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="ml-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          {isOpen ? <X size={24} /> : <Phone size={24} />}
        </button>
      </div>

      {/* Right Middle Social Stack */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col space-y-4">
        {[
          { Icon: MessageCircle, label: 'Zalo' },
          { Icon: Share2, label: 'Twitter' },
          { Icon: Camera, label: 'Instagram' },
          { Icon: Play, label: 'Facebook' }
        ].map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="w-14 h-14 rounded-full bg-[#002b49]/90 backdrop-blur-md flex items-center justify-center text-white border-4 border-[#002b49]/20 shadow-xl hover:bg-blue-600 hover:scale-110 transition-all cursor-pointer">
              <item.Icon size={24} />
            </div>
            {/* Tooltip or Label effect could go here if needed */}
          </div>
        ))}
      </div>

      {/* Bottom Right Scroll To Top */}
      <div className={cn(
        "fixed right-10 bottom-10 z-[100] transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}>
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-500/80 backdrop-blur-md text-white rounded-md flex items-center justify-center hover:bg-[#002b49] transition-all shadow-xl group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </>
  );
}
