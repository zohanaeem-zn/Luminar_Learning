import React from 'react';
import { MessageSquareText, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

interface MobileStickyBarProps {
  onRequestTutor: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onRequestTutor }) => {
  return (
    <aside 
      aria-label="Quick contact actions" 
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#25D366] text-white text-sm font-semibold shadow-sm hover:bg-[#20ba59] active:scale-[0.98] transition-all"
          aria-label="Direct WhatsApp inquiry"
        >
          <MessageSquareText className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onRequestTutor}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          <Search className="w-4 h-4 shrink-0" />
          <span className="truncate">Find a Tutor</span>
        </button>
      </div>
    </aside>
  );
};
