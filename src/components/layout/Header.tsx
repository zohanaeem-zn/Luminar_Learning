import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquareText, 
  MapPin, 
  Menu, 
  Sparkles,
  ClipboardList,
  Compass,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  activeNav: string;
  onNavigate: (navId: string) => void;
  onRequestTutor: () => void;
  inquiryCount: number;
  onOpenInquiries: () => void;
  onOpenCaseStudy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  onNavigate,
  onRequestTutor,
  inquiryCount,
  onOpenInquiries,
  onOpenCaseStudy
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tutors', label: 'Tuition Modes' },
    { id: 'classes', label: 'Academic Levels' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'areas', label: 'Service Zones' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white w-full transition-shadow duration-200 border-b border-slate-100">
        {/* Top announcement & case study bar (Desktop / Tablet) */}
        <div className="hidden md:block bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>1-on-1 In-Home Tutoring & Global Live Online Classrooms</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Free Diagnostic Demo Session with Every Match</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Portfolio Case Study Trigger Button */}
              <button
                type="button"
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600/30 text-blue-300 border border-blue-400/40 hover:bg-blue-600/50 hover:text-white transition-colors text-xs font-medium"
              >
                <FileText className="w-3 h-3 text-blue-400" />
                <span>View Portfolio UX/UI Case Study</span>
              </button>

              <span className="text-slate-700">|</span>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-white font-medium hover:text-blue-300 transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                title="WhatsApp Direct Inquiry"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Advisor Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Primary Navbar */}
        <div className={`transition-all duration-200 ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
            
            {/* Logo: Luminar Learning Minimalist Academic Prism */}
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 shadow-md group-hover:scale-105 transition-transform duration-200 relative overflow-hidden">
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-blue-500/30 rounded-full blur-xs pointer-events-none" />
                <div className="flex items-baseline font-black font-sans tracking-tighter text-xl text-white">
                  <span>L</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 ml-0.5 animate-pulse"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-none">
                    Luminar
                  </span>
                  <span className="font-bold text-blue-600 text-lg sm:text-xl tracking-tight leading-none">
                    Learning
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide mt-1">
                  1-on-1 In-Home & Live Online Tuition
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Inquiries / Tracker Button */}
              <button
                type="button"
                onClick={onOpenInquiries}
                title="View Coordinator Intake Log"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 text-xs font-medium transition-colors"
              >
                <ClipboardList className="w-4 h-4 text-slate-500" />
                <span className="hidden md:inline">Intake Log</span>
                {inquiryCount > 0 && (
                  <span className="px-1.5 py-0.2 bg-blue-600 text-white rounded-full text-[10px] font-bold">
                    {inquiryCount}
                  </span>
                )}
              </button>

              {/* Primary Call to Action */}
              <CTAButton
                onClick={onRequestTutor}
                size="md"
                className="shadow-sm font-semibold"
                id="header-cta-button"
              >
                Request a Tutor
              </CTAButton>
            </div>

            {/* Mobile Controls (Menu Toggle & Quick Action) */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={onOpenCaseStudy}
                className="p-2 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold"
                aria-label="View case study"
              >
                Case Study
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeNav={activeNav}
        onNavigate={onNavigate}
        onRequestTutor={onRequestTutor}
        inquiryCount={inquiryCount}
        onOpenInquiries={onOpenInquiries}
      />
    </>
  );
};
