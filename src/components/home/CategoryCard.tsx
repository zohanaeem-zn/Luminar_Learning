import React from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { TutorCategory } from '../../types';

interface CategoryCardProps {
  category: TutorCategory;
  onSelect: (categorySlug: string) => void;
  onRequestForCategory: (categoryName: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelect,
  onRequestForCategory
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
            {category.shortTag}
          </span>
          <span className="text-[11px] text-slate-500 font-medium capitalize">
            {category.availableModes === 'both' ? 'Home & Online' : `${category.availableModes} Tuition`}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>

        {/* Short Subtitle / Description */}
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
          {category.description}
        </p>

        {/* Popular Subjects Chips */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 block mb-2">
            Key Subjects Covered:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {category.popularSubjects.slice(0, 4).map((sub, i) => (
              <span
                key={i}
                className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
              >
                {sub}
              </span>
            ))}
            {category.popularSubjects.length > 4 && (
              <span className="text-[11px] text-blue-600 font-medium self-center pl-1">
                +{category.popularSubjects.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key highlights bullets */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
          {category.keyHighlights.slice(0, 2).map((hl, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(category.slug)}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Class Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onRequestForCategory(category.name)}
          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold transition-colors"
        >
          Request Tutor
        </button>
      </div>
    </div>
  );
};
