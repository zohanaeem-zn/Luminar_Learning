import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { TutorRequestForm } from './TutorRequestForm';
import { TutorRequest } from '../../types';

interface TutorRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmitted: (req: TutorRequest) => void;
  initialClass?: string;
  initialSubject?: string;
  initialArea?: string;
}

export const TutorRequestModal: React.FC<TutorRequestModalProps> = ({
  isOpen,
  onClose,
  onFormSubmitted,
  initialClass,
  initialSubject,
  initialArea
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Request a Home Tutor in Lahore">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close tutor request dialog"
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-1 sm:p-2">
            <TutorRequestForm
              onFormSubmitted={(req) => {
                onFormSubmitted(req);
              }}
              initialClass={initialClass}
              initialSubject={initialSubject}
              initialArea={initialArea}
            />
          </div>

        </div>
      </div>
    </div>
  );
};
