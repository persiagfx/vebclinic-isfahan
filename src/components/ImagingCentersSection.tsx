import React, { useState } from 'react';
import {
  Scan,
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle2,
  ShieldCheck,
  Search,
  Filter,
  FileText,
  UploadCloud,
  ChevronLeft,
  Sparkles,
  Info,
  Check,
  ChevronDown
} from 'lucide-react';
import { ISFAHAN_IMAGING_CENTERS } from '../data/imagingData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { InsuranceLogo } from './InsuranceLogo';
import { ImagingCenter } from '../types';

interface ImagingCentersSectionProps {
  onOpenTeleradiology: () => void;
  onSelectHospitalTab?: () => void;
}

export const ImagingCentersSection: React.FC<ImagingCentersSectionProps> = ({
  onOpenTeleradiology,
  onSelectHospitalTab,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('all');
  const [selectedInsuranceFilter, setSelectedInsuranceFilter] = useState<string>('all');
  const [openMriOnly, setOpenMriOnly] = useState(false);

  const filteredCenters = ISFAHAN_IMAGING_CENTERS.filter((center) => {
    // Open MRI filter
    if (openMriOnly && !center.isOpenMri) return false;

    // Type filter
    if (selectedTypeFilter !== 'all' && center.type !== selectedTypeFilter) return false;

    // Insurance filter
    if (selectedInsuranceFilter !== 'all' && !center.acceptedInsurances.includes(selectedInsuranceFilter)) {
      return false;
    }

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = center.name.toLowerCase().includes(q);
      const matchDistrict = center.district.toLowerCase().includes(q);
      const matchFeatures = center.features.some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchDistrict && !matchFeatures) return false;
    }

    return true;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span>وب‌کلینیک</span>
              <span aria-hidden="true">/</span>
              <span className="text-blue-600 font-semibold">مراکز تصویربرداری و MRI اصفهان</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Scan className="w-7 h-7 text-blue-600" />
              <span>مراکز ام‌آر‌آی (MRI)، سی‌تی‌اسکن و رادیولوژی تخصصی مفاصل در اصفهان</span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
              جستجو و نوبت‌دهی معتبرترین مراکز تصویربرداری استخوان و مفاصل اصفهان با دستگاه‌های ۱.۵ و ۳ تسلا، MRI روباز ویژه اطفال و گرافی دیجیتال سه مفصل (الایمنت ویو).
            </p>
          </div>

          <button
            onClick={onOpenTeleradiology}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer shadow-xs shrink-0"
          >
            <UploadCloud className="w-4 h-4" />
            <span>تفسیر اینترنتی عکس و MRI شما</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 items-center">
            
            {/* Search */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="جستجوی نام مرکز یا منطقه (مثال: شمس‌آبادی، سپاهان، آمادگاه)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-10 pl-4 py-3 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-all text-right"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Type selector (Combobox) */}
            <div className="relative flex items-center">
              <select
                value={selectedTypeFilter}
                onChange={(e) => setSelectedTypeFilter(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-4 pl-10 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden transition-all appearance-none cursor-pointer text-right"
              >
                <option value="all">همه انواع مراکز تصویربرداری</option>
                <option value="comprehensive_imaging">مراکز جامع MRI و سی‌تی‌اسکن</option>
                <option value="mri_center">مراکز تخصصی MRI مفاصل</option>
                <option value="radiology_clinic">کلینیک‌های رادیولوژی و سنجش تراکم استخوان</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform" />
            </div>

            {/* Insurance selector (Combobox) */}
            <div className="relative flex items-center">
              <select
                value={selectedInsuranceFilter}
                onChange={(e) => setSelectedInsuranceFilter(e.target.value)}
                className="w-full h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100/70 rounded-2xl pr-4 pl-10 py-3 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden transition-all appearance-none cursor-pointer text-right"
              >
                <option value="all">تمامی بیمه‌های طرف قرارداد</option>
                <option value="tamin">تامین اجتماعی</option>
                <option value="salamat">بیمه سلامت</option>
                <option value="mosallah">نیروهای مسلح</option>
                <option value="dana">بیمه تکمیلی دانا</option>
                <option value="iran">بیمه تکمیلی ایران</option>
                <option value="alborz">بیمه تکمیلی البرز</option>
                <option value="asia">بیمه تکمیلی آسیا</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform" />
            </div>

          </div>

          {/* Quick Filter Pill for Open MRI */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setOpenMriOnly(!openMriOnly)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                openMriOnly
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>فقط مراکز دارای MRI روباز (Open MRI بدون تونل)</span>
            </button>
            <span className="text-[11px] text-slate-400">
              نمایش {filteredCenters.length} مرکز فعال در اصفهان
            </span>
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                
                {/* Center Image Banner */}
                {center.image && (
                  <div className="relative h-44 sm:h-50 w-full rounded-2xl overflow-hidden bg-slate-100 group shadow-2xs">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badges on image */}
                    <div className="absolute top-3 right-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-white bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        {center.type === 'comprehensive_imaging' ? 'مرکز جامع تصویربرداری' : center.type === 'mri_center' ? 'مرکز تخصصی MRI' : 'کلینیک رادیولوژی'}
                      </span>
                      {center.isOpenMri && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-emerald-600/95 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                          دستگاه MRI روباز
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 text-white text-xs font-medium flex items-center gap-1 drop-shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-blue-300" />
                      <span>{center.district}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 fill-slate-950" />
                      <span>{center.rating}</span>
                    </div>
                  </div>
                )}

                {/* Center Title & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {center.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                      <Scan className="w-3.5 h-3.5" />
                      <span>{center.teslaPower}</span>
                    </div>
                  </div>

                  {!center.image && (
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 shrink-0">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{center.rating}</span>
                    </span>
                  )}
                </div>

                {/* Gallery thumbnails */}
                {center.gallery && center.gallery.length > 0 && (
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-[11px] text-slate-400 font-medium">تصاویر تجهیزات:</span>
                    {center.gallery.map((gUrl, idx) => (
                      <img
                        key={idx}
                        src={gUrl}
                        alt={`${center.name} - تجهیزات ${idx + 1}`}
                        className="w-14 h-10 rounded-lg object-cover border border-slate-200 hover:opacity-90 transition-opacity"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                {/* Open MRI badge if applicable */}
                {center.isOpenMri && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>دارای دستگاه ام‌آر‌آی روباز بدون استرس و کلاستروفوبیا</span>
                  </div>
                )}

                {/* Key Features List */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 space-y-1.5 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">خدمات و تجهیزات ویژه این مرکز:</span>
                  <ul className="space-y-1">
                    {center.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Address & Hours */}
                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{center.address}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{center.operatingHours}</span>
                  </div>
                </div>

                {/* Insurances Accepted */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">بیمه‌های طرف قرارداد:</span>
                  <span className="text-blue-700 font-bold">
                    {center.acceptedInsurances.length} شرکت بیمه پایه و تکمیلی
                  </span>
                </div>

              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`tel:${center.phone}`}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-full text-xs transition-colors cursor-pointer text-center shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>تماس و رزرو نوبت ({center.phone})</span>
                </a>
                <button
                  onClick={onOpenTeleradiology}
                  className="py-2.5 px-3.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-full text-xs border border-slate-200 transition-colors cursor-pointer text-center"
                  title="آپلود تصاویر ام‌آر‌آی جهت نظر دوم جراح ارتوپد"
                >
                  تفسیر عکس
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Teleradiology Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-black">
              ام‌آر‌آی یا عکس رادیولوژی گرفته‌اید و نیاز به نظر دوم متخصص دارید؟
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              تصاویر سی‌دی ام‌آر‌آی یا عکس گرافی خود را در سامانه تله‌رادیولوژی وب‌کلینیک ارسال کنید تا توسط جراحان ارتوپد بررسی و اندیکاسیون عمل یا درمان غیرجراحی اعلام شود.
            </p>
          </div>

          <button
            onClick={onOpenTeleradiology}
            className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full text-xs transition-colors cursor-pointer shadow-md shrink-0 flex items-center gap-2"
          >
            <UploadCloud className="w-4 h-4 text-blue-600" />
            <span>ثبت درخواست تفسیر MRI</span>
          </button>
        </div>

      </div>
    </div>
  );
};
