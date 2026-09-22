import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs sm:text-sm text-slate-500 py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li>
          <button
            type="button"
            onClick={items[0]?.onClick}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.active || !item.onClick ? (
              <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="text-slate-500 hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded truncate max-w-[180px] sm:max-w-none"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
