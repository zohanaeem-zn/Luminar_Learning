import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquareText, Search } from 'lucide-react';
import { FAQS_LIST, BUSINESS_INFO } from '../../data/businessData';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items?: FAQItem[];
  showCategoryFilter?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = FAQS_LIST,
  showCategoryFilter = false
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Tutors', 'Subjects & Classes', 'Areas', 'Fees & Billing'];

  const filteredItems = items.filter((item: FAQItem) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Common Questions From Parents & Students
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear answers about our tutor matching process, diagnostic demonstration sessions, in-home vs online tuition, and curriculum coverage.
          </p>
        </div>

        {/* Optional Search & Filters */}
        {showCategoryFilter && (
          <div className="mb-8 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. trial demo, fees, female tutor, DHA)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Accordion list */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions Accordion">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-sm bg-white rounded-xl border border-slate-200 p-6">
              No questions found matching your search. Please ask directly on WhatsApp!
            </div>
          ) : (
            filteredItems.map((item: FAQItem) => {
              const isOpen = openId === item.id;
              const buttonId = `faq-btn-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen ? 'bg-white border-blue-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Have a specific question about your child’s syllabus?
              </h4>
              <p className="text-xs text-slate-500">
                Our academic coordinators in Garden Town, Lahore are available 7 days a week.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm shrink-0"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
