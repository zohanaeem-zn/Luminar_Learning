import React from 'react';
import { HelpCircle, MessageSquareText, Phone, Sparkles } from 'lucide-react';
import { FAQAccordion } from '../home/FAQAccordion';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';

interface FAQPageProps {
  onRequestTutor: () => void;
  onNavigateHome: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onRequestTutor, onNavigateHome }) => {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Frequently Asked Questions', active: true }
          ]}
          className="mb-4"
        />

        {/* Page Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Guidance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Clear, transparent answers about our mentor vetting rigor, diagnostic demo session policy, in-home scheduling, live interactive digital classrooms, and flexible fees.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
            <CTAButton
              onClick={onRequestTutor}
              size="md"
              className="shadow-sm font-semibold"
            >
              Request 1-on-1 Mentor
            </CTAButton>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Ask an Advisor on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Accordion Component */}
        <div className="mb-16">
          <FAQAccordion />
        </div>

      </div>
    </div>
  );
};
