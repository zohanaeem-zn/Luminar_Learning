import React from 'react';
import { MapPin, Navigation, ArrowRight, ShieldCheck, Home, Monitor } from 'lucide-react';
import { LocationZone } from '../../types';

interface AreaCardProps {
  area: {
    id: string;
    slug: string;
    name: string;
    zone: string;
    sectors: string[];
    coverageHighlights: string;
    prominentNearby: string;
    homeTutorReadiness: string;
  };
  onRequestArea: (areaName: string) => void;
  onSelectArea?: (areaSlug: string) => void;
}

export const AreaCard: React.FC<AreaCardProps> = ({
  area,
  onRequestArea,
  onSelectArea
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Zone Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{area.zone}</span>
          </span>
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            {area.homeTutorReadiness}
          </span>
        </div>

        {/* Area Name */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {area.name}
        </h3>

        {/* Highlights */}
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          {area.coverageHighlights}
        </p>

        {/* Sectors Preview */}
        <div className="mt-3 pt-3 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-semibold block mb-1">
            Key Neighborhoods & Sub-districts:
          </span>
          <p className="text-xs text-slate-700 font-medium">
            {area.sectors.slice(0, 4).join(', ')}
            {area.sectors.length > 4 && ` + ${area.sectors.length - 4} more`}
          </p>
        </div>

        {/* Matching Speed */}
        <div className="mt-2 text-[11px] text-slate-500">
          <strong className="text-slate-600">Avg. Matching Time:</strong> {area.prominentNearby}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => {
            if (onSelectArea) onSelectArea(area.slug);
            else onRequestArea(area.name);
          }}
          className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          <span>District Info</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        <button
          type="button"
          onClick={() => onRequestArea(area.name)}
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
        >
          Request in District
        </button>
      </div>
    </div>
  );
};
