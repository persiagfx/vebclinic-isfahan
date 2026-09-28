import React, { useState } from 'react';
import { Search, Star, MapPin, Calendar, Clock, Stethoscope, ShieldCheck, Phone, Check, Filter, ChevronDown, X, RotateCcw } from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { Doctor } from '../types';

interface DoctorDirectoryProps {
  onBookDoctor: (doctor: Doctor) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  filterByInsuranceId?: string | null;
}

export const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({
  onBookDoctor,
  onSelectDoctor,
  filterByInsuranceId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialtyTag, setSelectedSpecialtyTag] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedInsuranceFilter, setSelectedInsuranceFilter] = useState<string>(filterByInsuranceId || 'all');

  const districts = [
    { id: 'all', name: 'تمامی مناطق اصفهان' },
    { id: 'خیابان شمس‌آبادی', name: 'خیابان شمس‌آبادی' },
    { id: 'خیابان آمادگاه', name: 'خیابان آمادگاه' },
    { id: 'خیابان طیب', name: 'خیابان طیب' },
    { id: 'خیابان وحید', name: 'خیابان وحید' },
    { id: 'خیابان محتشم کاشانی', name: 'خیابان محتشم کاشانی' },
    { id: 'خیابان بزرگمهر', name: 'خیابان بزرگمهر' },
  ];

  const specialties = [
    { id: 'all', label: 'همه تخصص‌ها' },
    { id: 'knee', label: 'زانو و آرتروسکوپی' },
    { id: 'hip', label: 'مفصل ران و لگن' },
    { id: 'spine', label: 'ستون فقرات و دیسک' },
    { id: 'shoulder', label: 'شانه و دست' },
    { id: 'pediatric', label: 'ارتوپدی اطفال' },
    { id: 'rehab', label: 'طب فیزیکی و توانبخشی' },
  ];

  const allInsurances = [...PRIMARY_INSURANCES, ...SUPPLEMENTARY_INSURANCES.filter(i => i.id !== 'none_supp')];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    // Specialty
    if (selectedSpecialtyTag !== 'all' && doc.specialtyTag !== selectedSpecialtyTag) {
      return false;
    }
    // District
    if (selectedDistrict !== 'all' && doc.district !== selectedDistrict) {
      return false;
    }
    // Insurance
    if (selectedInsuranceFilter !== 'all' && !doc.acceptedInsurances.includes(selectedInsuranceFilter)) {
      return false;
    }
    // Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = doc.name.toLowerCase().includes(q);
      const matchSpec = doc.subSpecialty.toLowerCase().includes(q);
      const matchHosp = doc.hospitals.some(h => h.toLowerCase().includes(q));
      if (!matchName && !matchSpec && !matchHosp) return false;
    }
    return true;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>وب‌کلینیک</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-600 font-semibold">پزشکان ارتوپد اصفهان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            نوبت‌دهی آنلاین متخصصان و جراحان ارتوپد در اصفهان
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
            رزرو آنلاین نوبت ویزیت با مجرب‌ترین فوق‌تخصص‌های زانو، لگن، ستون فقرات و شانه در بیمارستان‌های کاشانی، سعدی و کلینیک‌های خیابان آمادگاه و شمس‌آبادی.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-center">
            
            {/* Search input (Matching 48px height) */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="نام پزشک یا بیماری (مثال: برزگر، تعویض زانو...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-10 pl-9 py-3 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-all text-right"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 transition-colors cursor-pointer"
                  title="پاک کردن جستجو"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Specialty filter (Combobox) */}
            <div className="relative flex items-center">
              <select
                value={selectedSpecialtyTag}
                onChange={(e) => setSelectedSpecialtyTag(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-4 pl-10 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden transition-all appearance-none cursor-pointer text-right"
              >
                {specialties.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform" />
            </div>

            {/* District filter (Combobox) */}
            <div className="relative flex items-center">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-4 pl-10 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden transition-all appearance-none cursor-pointer text-right"
              >
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform" />
            </div>

            {/* Insurance filter (Combobox) */}
            <div className="relative flex items-center">
              <select
                value={selectedInsuranceFilter}
                onChange={(e) => setSelectedInsuranceFilter(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-4 pl-10 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden transition-all appearance-none cursor-pointer text-right"
              >
                <option value="all">همه بیمه‌های طرف قرارداد</option>
                {allInsurances.map((ins) => (
                  <option key={ins.id} value={ins.id}>
                    طرف قرارداد با {ins.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform" />
            </div>

          </div>

          {/* Active Filters Reset Indicator */}
          {(searchQuery !== '' || selectedSpecialtyTag !== 'all' || selectedDistrict !== 'all' || selectedInsuranceFilter !== 'all') && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-500">فیلترهای فعال اعمال شده است.</span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialtyTag('all');
                  setSelectedDistrict('all');
                  setSelectedInsuranceFilter('all');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>پاک کردن همه فیلترها</span>
              </button>
            </div>
          )}

          {/* Quick Specialty Tabs for Fast Access */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none border-t border-slate-100 pt-3">
            <span className="text-[11px] text-slate-400 shrink-0 ml-2">دسته‌بندی سریع:</span>
            {specialties.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSpecialtyTag(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSpecialtyTag === s.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>نمایش {filteredDoctors.length} پزشک متخصص فعال در اصفهان</span>
          {selectedInsuranceFilter !== 'all' && (
            <span className="text-blue-600 font-semibold">
              فیلتر شده بر اساس بیمه منتخب
            </span>
          )}
        </div>

        {/* Doctors Grid (Clean, un-crowded, spacious cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Doctor Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => onSelectDoctor(doc)}
                      className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 cursor-pointer group-hover:scale-105 transition-all shadow-xs border border-slate-100 bg-slate-100"
                      title={`مشاهده صفحه اختصاصی ${doc.name}`}
                    >
                      {doc.avatarImage ? (
                        <img
                          src={doc.avatarImage}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                          {doc.avatarText}
                        </div>
                      )}
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-2xs" title="پزشک دارای پروانه تایید شده" />
                    </div>
                    <div>
                      <h3
                        onClick={() => onSelectDoctor(doc)}
                        className="text-base font-bold text-slate-900 cursor-pointer group-hover:text-blue-600 transition-colors"
                        title={`مشاهده صفحه اختصاصی ${doc.name}`}
                      >
                        {doc.name}
                      </h3>
                      <span className="text-xs text-blue-700 font-semibold block mt-0.5">
                        {doc.title}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200/70 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="tabular-nums">{doc.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">از ۵</span>
                  </div>
                </div>

                {/* Subspecialty / Title line */}
                <span className="text-xs text-slate-500 block">
                  {doc.subSpecialty}
                </span>

                {/* Concise Bio */}
                {doc.biography && (
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                    {doc.biography}
                  </p>
                )}

                {/* Location / District */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{doc.district} · {doc.city}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onBookDoctor(doc)}
                  className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center shadow-xs"
                >
                  رزرو نوبت
                </button>
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="py-2.5 px-4 text-slate-700 hover:text-blue-700 hover:bg-slate-100 text-xs font-bold bg-slate-50 rounded-xl transition-colors cursor-pointer border border-slate-200"
                  title={`مشاهده صفحه اختصاصی ${doc.name}`}
                >
                  مشاهده پروفایل
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
