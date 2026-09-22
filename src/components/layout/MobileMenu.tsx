import React from 'react';
import { X, Phone, MessageSquareText, MapPin, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onNavigate: (navId: string) => void;
  onRequestTutor: () => void;
  inquiryCount: number;
  onOpenInquiries: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeNav,
  onNavigate,
  onRequestTutor,
  inquiryCount,
  onOpenInquiries
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'tutors', label: 'Tuition Modes' },
    { id: 'classes', label: 'Academic Levels' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'areas', label: 'Service Zones' },
    { id: 'about', label: 'About Luminar' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact & Inquiries' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
              <span className="font-extrabold text-sm tracking-tight">L</span>
            </div>
            <div>
              <p className="font-bold text-white text-sm leading-tight">Luminar Learning</p>
              <p className="text-[10px] text-blue-300 font-medium">In-Home & Online Tuition</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-2">
          <CTAButton
            onClick={() => {
              onClose();
              onRequestTutor();
            }}
            fullWidth
            size="md"
            className="text-sm shadow-sm font-semibold"
          >
            Request a 1-on-1 Tutor
          </CTAButton>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20ba59] transition-colors shadow-xs"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Navigation list */}
        <nav className="p-3 flex-1 space-y-1">
          {navLinks.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 mt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiries();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span>Coordinator Intake Log</span>
                {inquiryCount > 0 && (
                  <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full font-bold">
                    {inquiryCount}
                  </span>
                )}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </nav>

        {/* Direct Contact info in menu */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2 text-xs text-slate-600">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2.5 text-slate-800 font-semibold hover:text-blue-600"
          >
            <Phone className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <div className="flex items-start gap-2.5 text-slate-500">
            <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <span>Free First Diagnostic Demo Session</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-500">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{BUSINESS_INFO.operatingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
