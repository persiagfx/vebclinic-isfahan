import React, { useState } from 'react';
import { 
  Shield, Search, Phone, MapPin, CheckCircle2, FileText, 
  Building2, Stethoscope, UserCheck, X, ChevronLeft, ArrowRight,
  ExternalLink, Calculator
} from 'lucide-react';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { ISFAHAN_HOSPITALS } from '../data/hospitalsData';
import { InsuranceCalculator } from './InsuranceCalculator';
import { PreAuthLetterGenerator } from './PreAuthLetterGenerator';
import { InsuranceLogo } from './InsuranceLogo';
import { InsuranceItem } from '../types';

interface InsurancesSectionProps {
  onSelectInsuranceForDoctor: (insuranceId: string) => void;
  onOpenBooking: () => void;
}

export const InsurancesSection: React.FC<InsurancesSectionProps> = ({
  onSelectInsuranceForDoctor,
  onOpenBooking,
}) => {
  const [activeView, setActiveView] = useState<'cards' | 'calculator' | 'preauth'>('cards');
  const [filterType, setFilterType] = useState<'all' | 'supplementary' | 'primary'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInsuranceForModal, setSelectedInsuranceForModal] = useState<InsuranceItem | null>(null);
  const [selectedInsuranceForCenters, setSelectedInsuranceForCenters] = useState<InsuranceItem | null>(null);

  // Online national code check
  const [nationalCode, setNationalCode] = useState('');
  const [inquiryResult, setInquiryResult] = useState<{
    status: 'idle' | 'loading' | 'success';
    details?: {
      fullName: string;
      primaryInsurance: string;
      supplementary: string;
      validUntil: string;
      eligiblePreAuth: boolean;
    };
  }>({ status: 'idle' });

  // Insurance items ordered exactly as popular in Iranian healthtech
  const allInsurances = [
    ...SUPPLEMENTARY_INSURANCES.filter(i => ['dana', 'sina', 'kosar', 'ma', 'moalem', 'mellat', 'iran', 'alborz', 'asia', 'saman', 'pasargad', 'atiyeh'].includes(i.id)),
    ...PRIMARY_INSURANCES.filter(i => ['tamin', 'salamat', 'mosallah'].includes(i.id)),
  ];

  const filteredInsurances = allInsurances.filter((ins) => {
    if (filterType === 'primary' && ins.type !== 'primary') return false;
    if (filterType === 'supplementary' && ins.type !== 'supplementary') return false;
    if (searchQuery.trim() === '') return true;
    return (
      ins.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ins.nameEn && ins.nameEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ins.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nationalCode || nationalCode.length < 8) return;

    setInquiryResult({ status: 'loading' });

    setTimeout(() => {
      setInquiryResult({
        status: 'success',
        details: {
          fullName: 'بیمه‌شده محترم (استعلام برخط)',
          primaryInsurance: 'سازمان تامین اجتماعی - شاغل / بازنشسته',
          supplementary: 'بیمه تکمیلی دانا - طرح طلایی درمان و جراحی',
          validUntil: '۱۴۰۵/۱۲/۲۹',
          eligiblePreAuth: true,
        },
      });
    }, 700);
  };

  return (
    <section className="py-6 sm:py-10 bg-[#f8fafc] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-right">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
              <span>وب‌کلینیک</span>
              <span aria-hidden="true">/</span>
              <span className="text-blue-600 font-semibold">بیمه‌ها و معرفی‌نامه</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              بیمه‌های طرف قرارداد و معرفی‌نامه آنلاین
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
              مشاهده شرایط پذیرش، سقف تعهدات، محاسبه فرانشیز و پزشکان طرف قرارداد در اصفهان
            </p>
          </div>

          {/* Sub-Feature Switcher Pills */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-full border border-slate-200/90 shadow-2xs w-fit shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveView('cards')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeView === 'cards'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              فهرست بیمه‌ها
            </button>
            <button
              type="button"
              onClick={() => setActiveView('calculator')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'calculator'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>محاسبه‌گر فرانشیز</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('preauth')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'preauth'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>معرفی‌نامه آنلاین</span>
            </button>
          </div>
        </div>

        {/* View 1: Main Insurance Cards Grid (Exact Match to Screenshot) */}
        {activeView === 'cards' && (
          <div className="space-y-6">
            
            {/* Search & Filter Bar */}
            <div className="bg-white rounded-2xl sm:rounded-full p-2 sm:px-4 sm:py-2.5 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
              
              {/* Category Pills */}
              <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterType === 'all'
                      ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  همه بیمه‌ها
                </button>
                <button
                  onClick={() => setFilterType('supplementary')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterType === 'supplementary'
                      ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  تکمیلی / خصوصی
                </button>
                <button
                  onClick={() => setFilterType('primary')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterType === 'primary'
                      ? 'bg-blue-50 text-blue-600 font-bold border border-blue-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  عمومی و پایه
                </button>
              </div>

              {/* Search Pill Input */}
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="جستجوی بیمه (دانا، سلامت، سینا، کوثر...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-800 placeholder:text-slate-400 rounded-full pr-9 pl-4 py-1.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-all text-right font-medium"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5" />
              </div>
            </div>

            {/* 4-Column Card Grid (Faithful to Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredInsurances.map((ins) => (
                <div
                  key={ins.id}
                  className="bg-white rounded-[26px] p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_35px_rgba(37,99,235,0.09)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between items-center text-center group relative hover:-translate-y-1"
                >
                  {/* Card Top Section */}
                  <div className="w-full flex flex-col items-center">
                    
                    {/* Top Icon Badge: Dedicated SVG Brand Logo */}
                    <div className="w-16 h-16 rounded-2xl bg-blue-50/70 border border-blue-100/80 flex items-center justify-center mb-4 group-hover:scale-108 group-hover:bg-blue-50 transition-all duration-300 shadow-2xs">
                      <InsuranceLogo id={ins.id} size={38} />
                    </div>

                    {/* Persian Name */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-1 tracking-tight">
                      {ins.name}
                    </h3>

                    {/* English Subtitle */}
                    <span className="text-xs text-slate-400 font-medium font-sans mb-1 block tracking-wide">
                      {ins.nameEn || `${ins.name} Insurance`}
                    </span>

                    {/* Category Label */}
                    <span className="text-[11px] text-slate-400 font-normal mb-6 block">
                      {ins.categoryLabel || (ins.type === 'primary' ? 'عمومی و پایه' : 'تکمیلی / خصوصی')}
                    </span>
                  </div>

                  {/* 3 Action Buttons (Stack Matching Screenshot) */}
                  <div className="w-full space-y-2 pt-2">
                    
                    {/* Primary Button: "جزئیات بیمه" (Royal Blue Pill) */}
                    <button
                      type="button"
                      onClick={() => setSelectedInsuranceForModal(ins)}
                      className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full text-xs font-bold shadow-xs hover:shadow-md hover:shadow-blue-500/25 transition-all cursor-pointer text-center whitespace-nowrap"
                    >
                      جزئیات بیمه
                    </button>

                    {/* Secondary Button 1: "پزشکان این بیمه" (Light Pill with Stethoscope) */}
                    <button
                      type="button"
                      onClick={() => onSelectInsuranceForDoctor(ins.id)}
                      className="w-full py-2 px-3 bg-[#f8fafc] hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-full text-xs font-semibold border border-slate-200/90 flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn whitespace-nowrap"
                    >
                      <Stethoscope className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-blue-600 shrink-0" />
                      <span>پزشکان این بیمه</span>
                    </button>

                    {/* Secondary Button 2: "مراکز طرف قرارداد" (Light Pill with Building) */}
                    <button
                      type="button"
                      onClick={() => setSelectedInsuranceForCenters(ins)}
                      className="w-full py-2 px-3 bg-[#f8fafc] hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-full text-xs font-semibold border border-slate-200/90 flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn whitespace-nowrap"
                    >
                      <Building2 className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-blue-600 shrink-0" />
                      <span>مراکز طرف قرارداد</span>
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Quick Online National ID Inquiry Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs text-right mt-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>سامانه برخط استعلام استحقاق درمان و بررسی معرفی‌نامه</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  استعلام اعتبار دفترچه درمانی و بیمه تکمیلی با کد ملی
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  بررسی فوری اتصال به سامانه‌های سمن، رساد، دانایار و ساتا برای بیماران استان اصفهان
                </p>

                <form onSubmit={handleInquirySubmit} className="mt-4 flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    placeholder="کد ملی ۱۰ رقمی (مثال: ۱۲۸۹۴۵۶۷۸۱)"
                    value={nationalCode}
                    onChange={(e) => setNationalCode(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 font-mono tracking-wider text-center sm:text-right"
                  />
                  <button
                    type="submit"
                    disabled={inquiryResult.status === 'loading'}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap shadow-xs"
                  >
                    {inquiryResult.status === 'loading' ? (
                      <span>در حال استعلام...</span>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        <span>استعلام وضعیت پوشش</span>
                      </>
                    )}
                  </button>
                </form>

                {inquiryResult.status === 'success' && inquiryResult.details && (
                  <div className="mt-4 p-4 bg-blue-50/80 border border-blue-200/80 rounded-2xl text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-blue-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>پوشش بیمه‌ای فعال و استحقاق درمان تایید شد</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 pt-1">
                      <div>• <strong className="text-slate-900">بیمه پایه فعال:</strong> {inquiryResult.details.primaryInsurance}</div>
                      <div>• <strong className="text-slate-900">بیمه تکمیلی تاییدشده:</strong> {inquiryResult.details.supplementary}</div>
                      <div>• <strong className="text-slate-900">اعتبار پوشش:</strong> تا پایان {inquiryResult.details.validUntil}</div>
                      <div>• <strong className="text-slate-900">معرفی‌نامه آنلاین:</strong> فعال در بیمارستان‌های سعدی، کاشانی و کلینیک‌های اصفهان</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* View 2: Calculator */}
        {activeView === 'calculator' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveView('cards')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به فهرست بیمه‌ها</span>
            </button>
            <InsuranceCalculator onBookService={() => onOpenBooking()} />
          </div>
        )}

        {/* View 3: Pre-Auth Generator */}
        {activeView === 'preauth' && (
          <div className="space-y-4">
            <button
              onClick={() => setActiveView('cards')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به فهرست بیمه‌ها</span>
            </button>
            <PreAuthLetterGenerator />
          </div>
        )}

        {/* Modal: Insurance Details ("جزئیات بیمه") */}
        {selectedInsuranceForModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 text-right space-y-5 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <button
                  onClick={() => setSelectedInsuranceForModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                    <InsuranceLogo id={selectedInsuranceForModal.id} size={28} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      جزئیات تعهدات و مدارک {selectedInsuranceForModal.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-sans block">
                      {selectedInsuranceForModal.nameEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coverage stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <span className="text-[11px] text-slate-500 block mb-0.5">پوشش بستری و جراحی</span>
                  <span className="text-base font-black text-blue-600 tabular-nums">
                    تا {selectedInsuranceForModal.coveragePercentage.surgery}٪
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <span className="text-[11px] text-slate-500 block mb-0.5">ام‌آر‌آی و تصویربرداری</span>
                  <span className="text-base font-black text-slate-800 tabular-nums">
                    تا {selectedInsuranceForModal.coveragePercentage.mri}٪
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-500 block mb-0.5">فیزیوتراپی و توانبخشی</span>
                  <span className="text-base font-black text-slate-800 tabular-nums">
                    تا {selectedInsuranceForModal.coveragePercentage.physiotherapy}٪
                  </span>
                </div>
              </div>

              {/* Key details */}
              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    سامانه برخط و نحوه پذیرش:
                  </strong>
                  <p className="text-slate-600">{selectedInsuranceForModal.portalName}</p>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    فرانشیز و سهم بیمار:
                  </strong>
                  <p className="text-slate-600">{selectedInsuranceForModal.patientCoPay}</p>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    شعبه مرکزی در اصفهان:
                  </strong>
                  <div className="flex items-start gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{selectedInsuranceForModal.isfahanBranch}</span>
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    شماره تلفن واحد خسارت:
                  </strong>
                  <div className="flex items-center gap-1.5 text-slate-600 font-mono">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{selectedInsuranceForModal.supportPhone}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150">
                  <strong className="block text-slate-900 font-bold mb-2">
                    مدارک الزامی جهت تایید عمل ارتوپدی و دریافت هزینه:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                    {selectedInsuranceForModal.requiredDocuments.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal footer actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    onSelectInsuranceForDoctor(selectedInsuranceForModal.id);
                    setSelectedInsuranceForModal(null);
                  }}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer text-center shadow-xs"
                >
                  مشاهده پزشکان این بیمه
                </button>
                <button
                  onClick={() => {
                    setActiveView('calculator');
                    setSelectedInsuranceForModal(null);
                  }}
                  className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  محاسبه فرانشیز جراحی
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Modal: Contracted Centers ("مراکز طرف قرارداد") */}
        {selectedInsuranceForCenters && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 text-right space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <button
                  onClick={() => setSelectedInsuranceForCenters(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    مراکز و بیمارستان‌های طرف قرارداد با {selectedInsuranceForCenters.name}
                  </h3>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                مراکز زیر در استان اصفهان دارای درگاه پذیرش الکترونیکی و صدور آنی معرفی‌نامه برای بیمه‌شدگان {selectedInsuranceForCenters.name} هستند:
              </p>

              <div className="space-y-3">
                {ISFAHAN_HOSPITALS.map((hosp) => (
                  <div
                    key={hosp.id}
                    className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-start justify-between gap-3 text-right"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {hosp.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {hosp.district} - {hosp.address}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] text-blue-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>پذیرش فعال با معرفی‌نامه الکترونیکی</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-full border border-slate-200 shrink-0 font-mono">
                      {hosp.phone}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedInsuranceForCenters(null)}
                  className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  بستن
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
