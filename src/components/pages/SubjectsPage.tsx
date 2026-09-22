import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Filter, 
  CheckCircle2, 
  Sparkles,
  Search,
  MessageSquareText
} from 'lucide-react';
import { SUBJECTS_DATA, BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SubjectItem } from '../../types';

interface SubjectsPageProps {
  onRequestSubject: (subjectName: string) => void;
  onSelectSubjectDetail?: (subjectSlug: string) => void;
  onNavigateHome: () => void;
}

export const SubjectsPage: React.FC<SubjectsPageProps> = ({
  onRequestSubject,
  onSelectSubjectDetail,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Mathematics', 'Sciences', 'Humanities', 'Technology', 'Languages', 'Test Prep'];

  const filteredSubjects = SUBJECTS_DATA.filter((sub) => {
    const matchesCat = selectedCategory === 'All' || sub.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.curricula.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Core Academic Subjects', active: true }
          ]}
          className="mb-4"
        />

        {/* Header Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Subject Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            1-on-1 Tuition by Academic Subject
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Whether your student is conquering complex calculus mechanics, mastering chemistry stoichiometry, or perfecting analytical essay composition, Luminar Learning matches you with verified educators who specialize in syllabus benchmarks.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative max-w-sm w-full">
              <input
                type="text"
                placeholder="Search subject or syllabus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Field:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {subject.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Free Diagnostic Trial
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {subject.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {subject.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Curricula & Levels Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {subject.curricula.map((curr, i) => (
                      <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {curr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700 block">Syllabus Focus Topics:</span>
                  {subject.keyTopics.slice(0, 3).map((topic: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-500">In-Home & Online</span>

                <button
                  type="button"
                  onClick={() => onRequestSubject(subject.name)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Request Tutor
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Subject Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Need a Specialized Elective or Multi-Subject Combination?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We arrange multi-subject bundles (e.g., Physics + Maths or Biology + Chemistry) with synchronized lesson schedules.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestSubject('')}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-md whitespace-nowrap"
          >
            Inquire for Combined Subjects
          </button>
        </div>

      </div>
    </div>
  );
};
