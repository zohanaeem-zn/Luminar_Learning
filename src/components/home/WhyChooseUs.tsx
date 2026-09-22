import React from 'react';
import { Target, Home, BookOpen, Clock, ShieldCheck, ArrowRight, Monitor } from 'lucide-react';
import { WHY_CHOOSE_US_BENEFITS, BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';

interface WhyChooseUsProps {
  onRequestTutor: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onRequestTutor }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-blue-600" />;
      case 1:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 2:
        return <Home className="w-6 h-6 text-blue-600" />;
      case 3:
        return <Clock className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
            Why Parents & Students Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Dedicated In-Home & Live Online Mentorship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Every learner requires a distinct rhythm. We prioritize conceptual clarity, syllabus alignment, and student confidence without the fatigue of large group coaching.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  {getIcon(idx)}
                </div>
                <span className="text-[11px] font-bold text-blue-700 tracking-wide uppercase block mb-1">
                  {benefit.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                  <span>Guaranteed Standard</span>
                  <span className="text-slate-400">• Free Trial</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <CTAButton
            onClick={onRequestTutor}
            size="lg"
            className="shadow-md font-semibold"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Match with a Vetted 1-on-1 Mentor
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
