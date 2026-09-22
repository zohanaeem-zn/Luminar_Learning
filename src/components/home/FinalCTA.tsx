import React from 'react';
import { Phone, MessageSquareText, ShieldCheck, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';
import { WhatsAppButton } from '../common/WhatsAppButton';

interface FinalCTAProps {
  onRequestTutor: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestTutor }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden" id="final-cta">
      {/* Glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-6 border border-blue-400/20">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Verified & Background Checked 1-on-1 Academic Faculty</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Accelerate Your Child’s Academic Journey?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Connect with an Academic Placement Advisor today. We match learners with curriculum specialists suited to their goals, followed by an obligation-free diagnostic demonstration session.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
          <CTAButton
            onClick={onRequestTutor}
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/30"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Request a 1-on-1 Tutor
          </CTAButton>

          <WhatsAppButton
            size="lg"
            className="w-full sm:w-auto shadow-md"
            customText="Chat with Advisor on WhatsApp"
            prefilledMessage="Hello Luminar Learning, I am interested in scheduling a 1-on-1 tutor diagnostic consultation."
          />
        </div>

        {/* Helpline and Location bar */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Advisory Desk: <strong className="text-white">{BUSINESS_INFO.phoneDisplay}</strong></span>
          </a>

          <span className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Free Diagnostic Demo with Every Placement</span>
          </span>

          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Long-Term Lock-in</span>
          </span>
        </div>

      </div>
    </section>
  );
};
