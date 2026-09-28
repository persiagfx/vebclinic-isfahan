import React, { useState } from 'react';
import { Building2, MapPin, Phone, ShieldCheck, Bed, Clock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ISFAHAN_HOSPITALS } from '../data/hospitalsData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';

interface HospitalsSectionProps {
  onSelectHospitalForBooking?: (hospitalName: string) => void;
  onOpenInsurances: () => void;
}

export const HospitalsSection: React.FC<HospitalsSectionProps> = ({
  onSelectHospitalForBooking,
  onOpenInsurances,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'public_hospital' | 'private_hospital' | 'specialized_clinic'>('all');

  const filtered = ISFAHAN_HOSPITALS.filter((h) => {
    if (filterType === 'all') return true;
    return h.type === filterType;
  });

  const getInsuranceNames = (ids: string[]) => {
    const list = [...PRIMARY_INSURANCES, ...SUPPLEMENTARY_INSURANCES];
    return ids.map(id => list.find(item => item.id === id)?.name || id).filter(Boolean);
  };

  return (
    <section className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>وب‌کلینیک</span>
            <span aria-hidden="true">/</span>
            <span className="text-blue-600 font-semibold">بیمارستان‌ها و کلینیک‌های طرف قرارداد در اصفهان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            مراکز جراحی، بیمارستان‌های ارتوپدی و تصویربرداری طرف قرارداد
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            اطلاعات کامل بیمارستان‌های شهید کاشانی، سعدی، الزهرا، کلینیک فوق‌تخصصی وب‌کلینیک و مراکز ام‌آر‌آی مفاصل اصفهان با صدور برخط معرفی‌نامه بیمه تکمیلی.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              filterType === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            همه مراکز درمانی
          </button>
          <button
            onClick={() => setFilterType('public_hospital')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              filterType === 'public_hospital'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            بیمارستان‌های دولتی و دانشگاهی (کاشانی، الزهرا)
          </button>
          <button
            onClick={() => setFilterType('private_hospital')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              filterType === 'private_hospital'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            بیمارستان‌های خصوصی (سعدی، خانواده)
          </button>
          <button
            onClick={() => setFilterType('specialized_clinic')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              filterType === 'specialized_clinic'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            کلینیک‌های تخصصی و جراحی سرپایی
          </button>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((hospital) => {
            const insNames = getInsuranceNames(hospital.acceptedInsurances);
            return (
              <div
                key={hospital.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Hospital Image Banner */}
                  {hospital.image && (
                    <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-100 group shadow-2xs">
                      <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-semibold text-white bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                          {hospital.type === 'public_hospital' ? 'دولتی و دانشگاهی' : hospital.type === 'private_hospital' ? 'خصوصی و درجه یک' : 'کلینیک تخصصی'}
                        </span>
                        {hospital.emergency && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-rose-600/90 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                            اورژانس ۲۴ ساعته تروما
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 text-white text-xs font-medium flex items-center gap-1 drop-shadow-md">
                        <MapPin className="w-3.5 h-3.5 text-blue-300" />
                        <span>{hospital.district}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-xs">
                        <span>★ {hospital.rating}</span>
                      </div>
                    </div>
                  )}

                  {/* Top metadata (fallback if no image) */}
                  {!hospital.image && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-500">
                        {hospital.type === 'public_hospital' ? 'دولتی و دانشگاهی' : hospital.type === 'private_hospital' ? 'خصوصی و درجه یک' : 'کلینیک تخصصی'}
                        <span className="mx-1.5" aria-hidden="true">·</span>
                        {hospital.district}
                      </span>
                      {hospital.emergency && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                          اورژانس شبانه‌روزی تروما
                        </span>
                      )}
                    </div>
                  )}

                  {/* Hospital Title */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {hospital.name}
                    </h3>
                    {!hospital.image && (
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md shrink-0">
                        ★ {hospital.rating}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail gallery */}
                  {hospital.gallery && hospital.gallery.length > 0 && (
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="text-[11px] text-slate-400 font-medium">تصاویر بخش‌ها:</span>
                      {hospital.gallery.map((gUrl, idx) => (
                        <img
                          key={idx}
                          src={gUrl}
                          alt={`${hospital.name} - بخش ${idx + 1}`}
                          className="w-14 h-10 rounded-lg object-cover border border-slate-200 hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {hospital.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Bed className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>
                        تخت‌های ارتوپدی: <strong>{hospital.orthopedicBeds > 0 ? `${hospital.orthopedicBeds} تخت فعال` : 'مرکز پاراکلینیک'}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{hospital.openingHours}</span>
                    </div>
                  </div>

                  {/* Address & Phone */}
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{hospital.phone}</span>
                    </div>
                  </div>

                  {/* Surgeries supported */}
                  <div className="text-xs text-slate-500">
                    <strong className="text-slate-700">جراحی‌ها و خدمات:</strong>{' '}
                    <span>{hospital.surgeriesSupported.join(' · ')}</span>
                  </div>

                  {/* Insurances supported tags */}
                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-700">بیمه‌های متصل:</span>{' '}
                    <span>{insNames.slice(0, 5).join(' · ')} {insNames.length > 5 ? `و ${insNames.length - 5} بیمه دیگر` : ''}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectHospitalForBooking?.(hospital.name)}
                    className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer text-center shadow-xs"
                  >
                    نوبت‌گیری در این مرکز
                  </button>
                  <button
                    onClick={onOpenInsurances}
                    className="py-2.5 px-4 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                  >
                    محاسبه هزینه بیمه
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
