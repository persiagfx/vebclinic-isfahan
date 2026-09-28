import React, { useState } from 'react';
import {
  Calculator,
  Building2,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  FileText,
  Hospital,
  AlertCircle,
  HelpCircle,
  Download,
  Share2,
  Check,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { SURGERIES_COST_DATA } from '../data/surgeriesData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { InsuranceLogo } from './InsuranceLogo';

interface SurgeryCostEstimatorProps {
  onOpenBooking?: () => void;
  onSelectDoctorTab?: () => void;
}

export const SurgeryCostEstimator: React.FC<SurgeryCostEstimatorProps> = ({
  onOpenBooking,
  onSelectDoctorTab,
}) => {
  const [selectedSurgeryId, setSelectedSurgeryId] = useState<string>('tkr');
  const [hospitalType, setHospitalType] = useState<'private' | 'public'>('private');
  const [primaryIns, setPrimaryIns] = useState<string>('tamin');
  const [suppIns, setSuppIns] = useState<string>('dana');
  const [suppCeiling, setSuppCeiling] = useState<number>(100000000); // 100 میلیون پیش‌فرض
  const [implantQuality, setImplantQuality] = useState<'premium' | 'standard'>('premium');
  const [isCopied, setIsCopied] = useState(false);

  const selectedSurgery = SURGERIES_COST_DATA.find((s) => s.id === selectedSurgeryId) || SURGERIES_COST_DATA[0];

  // Base hospital fee based on private vs public
  const baseHospitalFee = hospitalType === 'private' ? selectedSurgery.basePrivateTariff : selectedSurgery.basePublicTariff;

  // Implant fee with optional multiplier
  const finalImplantFee = implantQuality === 'premium' ? selectedSurgery.defaultImplantCost : Math.round(selectedSurgery.defaultImplantCost * 0.75);

  const totalGrossCost = baseHospitalFee + finalImplantFee;

  // Primary insurance share
  let primaryInsuranceShare = 0;
  if (primaryIns === 'tamin') {
    primaryInsuranceShare = selectedSurgery.taminBaseShare;
  } else if (primaryIns === 'salamat') {
    primaryInsuranceShare = selectedSurgery.salamatBaseShare;
  } else if (primaryIns === 'mosallah') {
    primaryInsuranceShare = selectedSurgery.mosallahBaseShare;
  }

  if (hospitalType === 'public') {
    // In public hospitals, primary insurance covers a higher percentage of the hospital bill
    primaryInsuranceShare = Math.round(primaryInsuranceShare * 1.35);
  }

  // Cost remaining before supplementary insurance
  const costAfterPrimary = Math.max(0, totalGrossCost - primaryInsuranceShare);

  // Supplementary insurance share (typically covers 80-90% up to ceiling)
  let supplementaryInsuranceShare = 0;
  if (suppIns !== 'none') {
    const theoreticalCoverage = Math.round(costAfterPrimary * 0.9); // 10% franchise
    supplementaryInsuranceShare = Math.min(theoreticalCoverage, suppCeiling);
  }

  // Net out-of-pocket for patient
  const netPatientPayable = Math.max(0, totalGrossCost - primaryInsuranceShare - supplementaryInsuranceShare);

  // Percentage saved by insurances
  const savingsPercent = Math.round(((totalGrossCost - netPatientPayable) / totalGrossCost) * 100);

  const handleShareCalculation = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `برآورد هزینه ${selectedSurgery.name} در اصفهان:\nکل هزینه: ${(totalGrossCost / 1000000).toFixed(1)} میلیون\nسهم بیمه پایه و تکمیلی: ${((primaryInsuranceShare + supplementaryInsuranceShare) / 1000000).toFixed(1)} میلیون\nپرداختی خالص شما: ${(netPatientPayable / 1000000).toFixed(1)} میلیون تومان`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span>وب‌کلینیک</span>
              <span aria-hidden="true">/</span>
              <span className="text-blue-600 font-semibold">محاسبه‌گر جامع هزینه جراحی</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Calculator className="w-7 h-7 text-blue-600" />
              <span>استعلام آنلاین هزینه عمل‌های جراحی ارتوپدی و پروتز در اصفهان</span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl">
              محاسبه دقیق تعرفه اتاق عمل، دستمزد جراح، هزینه پروتز تیتانیومی/سرامیکی و سهم بیمه‌های پایه و تکمیلی به تفکیک بیمارستان‌های سعدی، کاشانی و الزهرا.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShareCalculation}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">برآورد کپی شد</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>اشتراک‌گذاری برآورد</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-6">
            
            {/* 1. Surgery Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-900 block">
                ۱. نوع عمل جراحی ارتوپدی:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SURGERIES_COST_DATA.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSurgeryId(s.id)}
                    className={`p-3 rounded-2xl text-right transition-all border cursor-pointer flex items-center gap-3 ${
                      selectedSurgeryId === s.id
                        ? 'bg-blue-50/80 border-blue-500 text-blue-900 shadow-2xs ring-1 ring-blue-500/30'
                        : 'bg-slate-50/60 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {s.image && (
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                        loading="lazy"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold block truncate">{s.name}</span>
                      <span className="text-[10px] text-slate-400 font-sans block mt-0.5 truncate">{s.nameEn}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Hospital Type */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-900 block">
                ۲. نوع بیمارستان و مرکز جراحی در اصفهان:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setHospitalType('private')}
                  className={`p-3.5 rounded-2xl text-right transition-all border cursor-pointer ${
                    hospitalType === 'private'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">بیمارستان خصوصی درجه ۱</span>
                    <Hospital className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] block ${hospitalType === 'private' ? 'text-blue-100' : 'text-slate-500'}`}>
                    مانند بیمارستان سعدی، خانواده، دی‌کلینیک
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setHospitalType('public')}
                  className={`p-3.5 rounded-2xl text-right transition-all border cursor-pointer ${
                    hospitalType === 'public'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">بیمارستان دولتی / دانشگاهی</span>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] block ${hospitalType === 'public' ? 'text-blue-100' : 'text-slate-500'}`}>
                    مانند بیمارستان شهید آیت‌الله کاشانی، الزهرا
                  </span>
                </button>
              </div>
            </div>

            {/* 3. Primary Insurance Selection */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-900 block">
                ۳. بیمه پایه درمانی:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'tamin', name: 'تأمین اجتماعی' },
                  { id: 'salamat', name: 'بیمه سلامت' },
                  { id: 'mosallah', name: 'نیروهای مسلح' },
                  { id: 'none', name: 'آزاد (بدون پایه)' }
                ].map((ins) => (
                  <button
                    key={ins.id}
                    type="button"
                    onClick={() => setPrimaryIns(ins.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      primaryIns === ins.id
                        ? 'bg-blue-50 text-blue-700 border-blue-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {ins.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Supplementary Insurance Selection */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-900 block">
                ۴. شرکت بیمه تکمیلی درمان:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'dana', name: 'بیمه دانا' },
                  { id: 'iran', name: 'بیمه ایران' },
                  { id: 'alborz', name: 'بیمه البرز' },
                  { id: 'asia', name: 'بیمه آسیا' },
                  { id: 'kosar', name: 'بیمه کوثر' },
                  { id: 'atiyeh', name: 'آتیه‌سازان' },
                  { id: 'saman', name: 'بیمه سامان' },
                  { id: 'none', name: 'بدون بیمه تکمیلی' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSuppIns(s.id)}
                    className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      suppIns === s.id
                        ? 'bg-blue-50 text-blue-700 border-blue-400'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {s.id !== 'none' && <InsuranceLogo id={s.id} size={18} />}
                    <span className="truncate">{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Supplementary Ceiling & Implant Grade */}
            {suppIns !== 'none' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1.5">
                    سقف تعهد جراحی در بیمه‌نامه شما:
                  </label>
                  <select
                    value={suppCeiling}
                    onChange={(e) => setSuppCeiling(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  >
                    <option value={200000000}>سقف نامحدود / بالای ۲۰۰ میلیون تومان</option>
                    <option value={100000000}>سقف ۱۰۰ میلیون تومان</option>
                    <option value={70000000}>سقف ۷۰ میلیون تومان</option>
                    <option value={50000000}>سقف ۵۰ میلیون تومان</option>
                    <option value={30000000}>سقف ۳۰ میلیون تومان</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1.5">
                    رده کیفیت و برند پروتز / ایمپلنت:
                  </label>
                  <select
                    value={implantQuality}
                    onChange={(e) => setImplantQuality(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="premium">پروتز آمریکایی/اروپایی پریمیوم (زیمر، استرایکر، دلتا)</option>
                    <option value="standard">پروتز تاییدشده استاندارد تی‌تک TTAC</option>
                  </select>
                </div>
              </div>
            )}

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Surgery Photo Banner */}
            {selectedSurgery.image && (
              <div className="relative h-44 sm:h-52 w-full rounded-3xl overflow-hidden shadow-xs border border-slate-200 group">
                <img
                  src={selectedSurgery.image}
                  alt={selectedSurgery.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 right-3 text-white space-y-0.5">
                  <span className="text-[10px] bg-blue-600/90 text-white font-bold px-2 py-0.5 rounded-md inline-block">
                    اتاق عمل و جراحی مفاصل
                  </span>
                  <h4 className="text-xs sm:text-sm font-black">{selectedSurgery.name}</h4>
                </div>
              </div>
            )}

            {/* Net Payable Card */}
            <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-blue-600/20 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-blue-100 mb-2">
                <span>سهم خالص پرداختی بیمار (فرانشیز قانونی)</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold">
                  تخفیف {savingsPercent}٪ با بیمه
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black tabular-nums tracking-tight my-3">
                {netPatientPayable.toLocaleString('fa-IR')} <span className="text-base font-normal">تومان</span>
              </div>

              <p className="text-xs text-blue-100 leading-relaxed border-t border-white/20 pt-3">
                این مبلغ پس از کسر تعهد بیمه پایه و صدور آنلاین معرفی‌نامه بیمه تکمیلی در بیمارستان محاسبه شده است.
              </p>

              <div className="mt-5 space-y-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-full text-xs transition-colors cursor-pointer text-center shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>رزرو نوبت مشاوره پیش از عمل</span>
                </button>
                <button
                  onClick={onSelectDoctorTab}
                  className="w-full py-2.5 bg-blue-800/60 hover:bg-blue-800 text-white font-medium rounded-full text-xs transition-colors cursor-pointer text-center border border-white/20"
                >
                  مشاهده جراحان متخصص این عمل در اصفهان
                </button>
              </div>
            </div>

            {/* Detailed Breakdown Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>ریز پیش‌فاکتور تخمینی بیمارستان</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>هزینه هتلینگ، اتاق عمل و بیهوشی:</span>
                  <span className="font-bold text-slate-800 tabular-nums">
                    {baseHospitalFee.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>هزینه پروتز / پیچ و پلاک استخوانی:</span>
                  <span className="font-bold text-slate-800 tabular-nums">
                    {finalImplantFee.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-900 font-bold pt-2 border-t border-slate-100">
                  <span>کل تعرفه مصوب جراحی:</span>
                  <span className="tabular-nums">
                    {totalGrossCost.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                <div className="flex items-center justify-between text-emerald-700 font-semibold bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/70">
                  <span>سهم پرداختی بیمه پایه:</span>
                  <span className="tabular-nums">
                    - {primaryInsuranceShare.toLocaleString('fa-IR')} تومان
                  </span>
                </div>

                {suppIns !== 'none' && (
                  <div className="flex items-center justify-between text-blue-700 font-semibold bg-blue-50/70 p-2.5 rounded-xl border border-blue-200/70">
                    <span>سهم پرداختی بیمه تکمیلی ({suppIns.toUpperCase()}):</span>
                    <span className="tabular-nums">
                      - {supplementaryInsuranceShare.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                )}
              </div>

              {/* Advice Note */}
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 space-y-1">
                <div className="flex items-center gap-1 font-bold">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>توصیه مهم برای دریافت حداکثر خسارت:</span>
                </div>
                <p className="leading-relaxed">
                  حتماً قبل از بستری در بیمارستان سعدی یا کاشانی، دستور بستری جراح را در وب‌کلینیک ثبت کنید تا معرفی‌نامه الکترونیک به صورت مستقیم صادر شده و نیاز به پرداخت نقدی به بیمارستان نداشته باشید.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
