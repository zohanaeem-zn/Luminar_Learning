import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Filter, 
  ShieldCheck, 
  CheckCircle2, 
  Search,
  MessageSquareText,
  Navigation,
  Globe,
  Home,
  Monitor
} from 'lucide-react';
import { LOCATION_ZONES, BUSINESS_INFO } from '../../data/businessData';
import { Breadcrumbs } from '../common/Breadcrumbs';

interface AreasPageProps {
  onRequestArea: (areaName: string) => void;
  onSelectAreaDetail?: (areaSlug: string) => void;
  onNavigateHome: () => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({
  onRequestArea,
  onSelectAreaDetail,
  onNavigateHome
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'Metropolitan In-Home', 'Suburban In-Home', 'Live Digital Classrooms'];

  const filteredZones = LOCATION_ZONES.filter((zone) => {
    const matchesRegion = selectedRegion === 'All' || zone.region === selectedRegion;
    const matchesSearch = searchQuery === '' || 
      zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.coverageHighlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.districts.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: onNavigateHome },
            { label: 'Service Zones & Global Online', active: true }
          ]}
          className="mb-4"
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dual Modality Service Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Service Districts & Global Digital Classrooms
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Luminar Learning provides verified in-home domestic visits across key metropolitan residential hubs, backed by real-time interactive online tuition available globally for all time zones.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative max-w-sm w-full">
              <input
                type="text"
                placeholder="Search neighborhood or district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-slate-50 text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Region Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Region:
              </span>
              {regions.map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedRegion === reg
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center gap-1">
                    {zone.region === 'Live Digital Classrooms' ? <Monitor className="w-3 h-3 text-emerald-600" /> : <Home className="w-3 h-3 text-blue-600" />}
                    <span>{zone.region}</span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {zone.homeTutorReadiness}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {zone.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {zone.coverageHighlights}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Key Neighborhoods & Sub-districts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.districts.map((dst, i) => (
                      <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {dst}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-medium text-slate-700">Dispatch / Match Time:</span>
                  <span className="font-semibold text-blue-700">{zone.averageMatchingTime}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                {onSelectAreaDetail ? (
                  <button
                    type="button"
                    onClick={() => onSelectAreaDetail(zone.slug)}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    <span>View District Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : <span />}

                <button
                  type="button"
                  onClick={() => onRequestArea(zone.name)}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Request Tutor in Zone
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Online Reassurance */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white">Located outside our domestic visit perimeter?</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Our interactive online classroom platform matches students anywhere in the world with identical tutor vetting standards, live screen sharing, and diagnostic sessions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestArea('Live Online Classrooms (Worldwide)')}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-md whitespace-nowrap"
          >
            Start Online Tuition
          </button>
        </div>

      </div>
    </div>
  );
};
