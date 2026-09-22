import React from 'react';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SubjectItem } from '../../types';

interface SubjectCardProps {
  subject: SubjectItem;
  onRequestSubject: (subjectName: string) => void;
  onViewSubject?: (slug: string) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  onRequestSubject,
  onViewSubject
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Category & Availability Badge */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            {subject.category}
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>{subject.tutorAvailability} Tutors</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-1.5">
          {subject.name}
        </h3>

        {/* Short description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          {subject.description}
        </p>

        {/* Curricula Chips */}
        <div className="mb-3">
          <span className="text-[11px] text-slate-400 font-medium block mb-1">Boards Covered:</span>
          <div className="flex flex-wrap gap-1">
            {subject.curricula.map((curr, idx) => (
              <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                {curr}
              </span>
            ))}
          </div>
        </div>

        {/* Key topics preview */}
        <div className="pt-2 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 block mb-1">Key Topics:</span>
          <p className="text-[11px] text-slate-600 line-clamp-2">
            {subject.keyTopics.join(' • ')}
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onRequestSubject(subject.name)}
          className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
        >
          <span>Find {subject.name} Tutor</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {onViewSubject && (
          <button
            type="button"
            onClick={() => onViewSubject(subject.slug)}
            className="text-[11px] text-slate-500 hover:text-slate-800 font-medium"
          >
            Syllabus
          </button>
        )}
      </div>
    </div>
  );
};
