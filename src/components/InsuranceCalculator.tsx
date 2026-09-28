import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, CheckCircle2, AlertCircle, FileText, ArrowRight, HelpCircle, Building } from 'lucide-react';
import { MEDICAL_SERVICES, PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { ISFAHAN_HOSPITALS } from '../data/hospitalsData';

interface InsuranceCalculatorProps {
  onSelectDoctorOrCenter?: (centerId?: string) => void;
  onBookService?: (serviceName: string, primaryIns: string, suppIns: string) => void;
}

export const InsuranceCalculator: React.FC<InsuranceCalculatorProps> = ({
  onBookService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(MEDICAL_SERVICES[0].id);
  const [selectedPrimaryId, setSelectedPrimaryId] = useState<string>('tamin');
  const [selectedSuppId, setSelectedSuppId] = useState<string>('dana');
  const [selectedHospitalId, setSelectedHospitalId] = useState<string>('saadi-hospital');

  const selectedService = useMemo(() => {
    return MEDICAL_SERVICES.find((s) => s.id === selectedServiceId) || MEDICAL_SERVICES[0];
  }, [selectedServiceId]);

  const selectedPrimary = useMemo(() => {
    return PRIMARY_INSURANCES.find((i) => i.id === selectedPrimaryId) || PRIMARY_INSURANCES[0];
  }, [selectedPrimaryId]);

  const selectedSupp = useMemo(() => {
    return SUPPLEMENTARY_INSURANCES.find((i) => i.id === selectedSuppId) || SUPPLEMENTARY_INSURANCES[0];
  }, [selectedSuppId]);

  const selectedHospital = useMemo(() => {
    return ISFAHAN_HOSPITALS.find((h) => h.id === selectedHospitalId) || ISFAHAN_HOSPITALS[0];
  }, [selectedHospitalId]);

  // Calculation Math
  const calculation = useMemo(() => {
    const totalTariff = selectedService.baseTariff;

    // Primary percentage based on procedure category
    let primaryRate = 0;
    if (selectedPrimary.id !== 'free') {
      if (selectedService.category === 'surgery') {
        primaryRate = selectedHospital.type === 'public_hospital' ? 0.85 : 0.40;
      } else if (selectedService.category === 'imaging') {
        primaryRate = 0.70;
      } else if (selectedService.category === 'rehab') {
        primaryRate = 0.50;
      } else {
        primaryRate = 0.60;
      }
    }

    const primaryCoverageAmount = Math.round(totalTariff * primaryRate);
    const remainderAfterPrimary = Math.max(0, totalTariff - primaryCoverageAmount);

    // Supplementary coverage
    let suppRate = 0;
    if (selectedSupp.id !== 'none_supp') {
      if (selectedService.category === 'surgery') {
        suppRate = 0.85; // 85% of remainder or hospital share
      } else if (selectedService.category === 'outpatient') {
        suppRate = 0.75;
      } else if (selectedService.category === 'imaging') {
        suppRate = 0.90;
      } else {
        suppRate = 0.80;
      }
    }

    const suppCoverageAmount = Math.round(remainderAfterPrimary * suppRate);
    const patientFinalShare = Math.max(0, remainderAfterPrimary - suppCoverageAmount);

    const totalSaved = primaryCoverageAmount + suppCoverageAmount;
    const coveragePercent = Math.min(100, Math.round((totalSaved / totalTariff) * 100));

    return {
      totalTariff,
      primaryCoverageAmount,
      suppCoverageAmount,
      patientFinalShare,
      coveragePercent,
      isPreAuthAvailable: selectedSupp.onlinePreAuth && selectedPrimary.onlinePreAuth,
    };
  }, [selectedService, selectedPrimary, selectedSupp, selectedHospital]);

  const formatToman = (val: number) => {
    return new Intl.NumberFormat('fa-IR').format(val) + ' تومان';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 p-6 text-white text-right">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
              <Calculator className="w-4 h-4" />
              <span>سیستم هوشمند استعلام فرانشیز و تعرفه جراحی</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              محاسبه‌گر آنلاین سهم بیمه پایه و تکمیلی ارتوپدی در اصفهان
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              خدمت ارتوپدی، بیمه پایه و شرکت بیمه تکمیلی خود را انتخاب کنید تا سهم پرداختی بیمار، میزان پوشش و سامانه معرفی‌نامه آنلاین را در لحظه مشاهده کنید.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-center">
            <span className="text-[11px] text-slate-300 block">پوشش محاسبه‌شده</span>
            <span className="text-2xl font-extrabold text-blue-400 tabular-nums">
              {calculation.coveragePercent}٪
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Form Controls */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-right">
        
        {/* Left / Input Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ۱. نوع خدمت درمانی یا جراحی ارتوپدی
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {MEDICAL_SERVICES.map((serv) => (
                <option key={serv.id} value={serv.id}>
                  {serv.name} (تعرفه تقریبی: {formatToman(serv.baseTariff)})
                </option>
              ))}
            </select>
            <div className="mt-2 text-xs text-slate-500 bg-slate-50/80 p-3 rounded-lg border border-slate-100 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                {selectedService.description} —{' '}
                <strong className="text-slate-700">مدت بستری:</strong> {selectedService.estimatedHospitalStay}
              </span>
            </div>
          </div>

          {/* Step 2: Select Primary Insurance */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ۲. نوع بیمه پایه (دفترچه درمانی)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRIMARY_INSURANCES.map((ins) => {
                const isSelected = ins.id === selectedPrimaryId;
                return (
                  <button
                    key={ins.id}
                    type="button"
                    onClick={() => setSelectedPrimaryId(ins.id)}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 block truncate">
                      {ins.logoText}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 block truncate">
                      {ins.name.replace('بیمه ', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Select Supplementary Insurance */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ۳. بیمه تکمیلی طرف قرارداد
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-56 overflow-y-auto p-1 border border-slate-200 rounded-2xl bg-slate-50/50">
              {SUPPLEMENTARY_INSURANCES.map((supp) => {
                const isSelected = supp.id === selectedSuppId;
                return (
                  <button
                    key={supp.id}
                    type="button"
                    onClick={() => setSelectedSuppId(supp.id)}
                    className={`p-2.5 rounded-xl border text-right transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-500 font-semibold text-blue-700'
                        : 'border-transparent bg-white/70 hover:bg-white text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center justify-between">
                      <span>{supp.name}</span>
                      {supp.onlinePreAuth && (
                        <span className="text-[10px] text-blue-600 font-normal">معرفی برخط</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Select Target Hospital / Clinic */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ۴. مرکز درمانی یا بیمارستان منتخب در اصفهان
            </label>
            <select
              value={selectedHospitalId}
              onChange={(e) => setSelectedHospitalId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
            >
              {ISFAHAN_HOSPITALS.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.type === 'public_hospital' ? 'دولتی دانشگاهی' : 'خصوصی / کلینیک تخصصی'})
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Right / Financial Summary Box (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold text-slate-500">خلاصه برآورد مالی</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                تعرفه ۱۴۰۵
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600">هزینه و تعرفه کل مصوب:</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {formatToman(calculation.totalTariff)}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 text-blue-700 font-medium">
                <span className="flex items-center gap-1">
                  <span>سهم پرداختی بیمه پایه ({selectedPrimary.logoText}):</span>
                </span>
                <span className="font-bold tabular-nums">
                  - {formatToman(calculation.primaryCoverageAmount)}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 text-blue-700 font-medium">
                <span className="flex items-center gap-1">
                  <span>سهم بیمه تکمیلی ({selectedSupp.name}):</span>
                </span>
                <span className="font-bold tabular-nums">
                  - {formatToman(calculation.suppCoverageAmount)}
                </span>
              </div>

              <div className="border-t border-dashed border-slate-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-slate-900">
                    پرداختی نهایی بیمار (فرانشیز):
                  </span>
                  <span className="text-lg font-black text-blue-700 tabular-nums">
                    {formatToman(calculation.patientFinalShare)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  معادل صرفه‌جویی {calculation.coveragePercent} درصدی از کل هزینه با پوشش بیمه‌ای شما
                </p>
              </div>
            </div>

            {/* Verification & Online Status */}
            <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>وضعیت معرفی‌نامه الکترونیک:</span>
              </div>
              <p className="text-xs text-slate-600">
                {calculation.isPreAuthAvailable
                  ? `بیمه ${selectedSupp.name} و مرکز ${selectedHospital.name} به سامانه صدور آنلاین معرفی‌نامه متصل هستند و نیازی به دریافت برگه فیزیکی نیست.`
                  : `برای دریافت خسارت، پس از ترخیص فاکتور رسمی ممهور به همراه گواهی جراح به شعبه بیمه در اصفهان ارائه گردد.`}
              </p>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>پورتال: {selectedSupp.portalName}</span>
                <span>تلفن: {selectedSupp.supportPhone}</span>
              </div>
            </div>

            {/* Required Docs note */}
            <div className="mt-3 text-[11px] text-slate-400">
              <strong className="text-slate-600">مدارک لازم برای پذیرش:</strong>{' '}
              {selectedSupp.requiredDocuments.slice(0, 2).join(' · ')}
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => onBookService?.(selectedService.name, selectedPrimary.name, selectedSupp.name)}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>رزرو نوبت پزشک با پوشش بیمه {selectedSupp.name}</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
