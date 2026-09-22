import React from 'react';
import { ShieldCheck, Users, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { TRUST_POINTS } from '../../data/businessData';

export const TrustPoints: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'ClockCheck':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="bg-white py-10 sm:py-12 border-b border-slate-200" aria-label="Trust and Reliability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-slate-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
