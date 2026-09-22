import React from 'react';
import { 
  ClipboardList, 
  UserCheck, 
  Compass, 
  GraduationCap, 
  ArrowRight,
  MessageSquareText
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../../data/businessData';
import { CTAButton } from '../common/CTAButton';

interface HowItWorksProps {
  onRequestTutor: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestTutor }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-blue-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      default:
        return <ClipboardList className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
            Transparent Placement Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            How 1-on-1 Mentor Matching Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Finding the ideal mentor shouldn't rely on guesswork. Our structured intake assessment pairs students with syllabus specialists, followed by a free diagnostic session before any ongoing schedule is confirmed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600/30 font-mono">
                    {stepItem.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    {getStepIcon(stepItem.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-blue-600">
                  {index === 2 ? 'Zero Financial Obligation' : 'Advisor Coordinated'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <CTAButton
            onClick={onRequestTutor}
            size="lg"
            className="shadow-md font-semibold"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Start Intake & Diagnostic Demo
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
