import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, ArrowRight, Stethoscope, Clock, ShieldAlert } from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { Doctor } from '../types';

interface SymptomCheckerProps {
  onBookDoctor: (doctor: Doctor) => void;
  onOpenInsurances: () => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  onBookDoctor,
  onOpenInsurances,
}) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('knee');
  const [symptomDuration, setSymptomDuration] = useState<string>('chronic');
  const [selectedPainType, setSelectedPainType] = useState<string>('stiffness_grinding');
  const [hasTrauma, setHasTrauma] = useState<boolean>(false);
  const [hasLocking, setHasLocking] = useState<boolean>(true);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

  const bodyParts = [
    { id: 'knee', label: 'مفصل زانو', tag: 'knee' },
    { id: 'hip', label: 'لگن و مفصل ران', tag: 'hip' },
    { id: 'spine', label: 'کمر و ستون فقرات', tag: 'spine' },
    { id: 'shoulder', label: 'شانه و دست', tag: 'shoulder' },
    { id: 'ankle', label: 'مچ پا و پاشنه', tag: 'rehab' },
    { id: 'child', label: 'درد و انحراف اندام کودک', tag: 'pediatric' },
  ];

  const handleEvaluate = () => {
    setIsEvaluated(true);
  };

  // Matched doctors
  const matchedDoctors = DOCTORS_DATA.filter((d) => {
    if (selectedBodyPart === 'knee' && (d.specialtyTag === 'knee' || d.specialtyTag === 'hip')) return true;
    if (selectedBodyPart === 'hip' && d.specialtyTag === 'hip') return true;
    if (selectedBodyPart === 'spine' && d.specialtyTag === 'spine') return true;
    if (selectedBodyPart === 'shoulder' && d.specialtyTag === 'shoulder') return true;
    if (selectedBodyPart === 'child' && d.specialtyTag === 'pediatric') return true;
    if (selectedBodyPart === 'ankle' && (d.specialtyTag === 'rehab' || d.specialtyTag === 'knee')) return true;
    return false;
  }).slice(0, 2);

  return (
    <section className="py-8 sm:py-12 bg-white text-slate-800 text-right border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-600 mb-1">
            <Activity className="w-4 h-4" />
            <span>سیستم تریاژ و ارزیابی آنلاین علائم مفاصل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            تست هوشمند علائم ارتوپدی: کدام متخصص اصفهان برای شما مناسب است؟
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            موضع درد، نوع علائم و شدت آن را مشخص کنید تا فوق‌تخصص ارتوپد متناسب، ضرورت اورژانسی و نوع تصویربرداری مورد نیاز را دریافت کنید.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
          
          {/* Step 1: Body Part */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              ۱. موضع اصلی درد یا آسیب کجاست؟
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {bodyParts.map((part) => {
                const isSelected = selectedBodyPart === part.id;
                return (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => {
                      setSelectedBodyPart(part.id);
                      setIsEvaluated(false);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-white ring-2 ring-blue-500/20 text-blue-950 font-bold shadow-xs'
                        : 'border-slate-200 bg-white/70 hover:bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-xs block">{part.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pain Characteristics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                ۲. نوع و کیفیت درد:
              </label>
              <div className="space-y-2 text-xs">
                {[
                  { id: 'stiffness_grinding', label: 'سائیدگی، صدای تق‌تق و درد هنگام راه رفتن و پله' },
                  { id: 'sharp_twisting', label: 'درد تیر کشنده همراه با بی‌حسی یا گزگز تا انگشتان' },
                  { id: 'locking_instability', label: 'خالی کردن ناگهانی مفصل و قفل شدن حرکت' },
                  { id: 'night_rest_pain', label: 'درد شبانه هنگام استراحت و خواب' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      selectedPainType === item.id
                        ? 'border-teal-600 bg-teal-50/50 text-teal-950 font-semibold'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="painType"
                      checked={selectedPainType === item.id}
                      onChange={() => setSelectedPainType(item.id)}
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                ۳. مدت زمان و سابقه ضربه:
              </label>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSymptomDuration('acute')}
                    className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer ${
                      symptomDuration === 'acute'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    تازه بروز کرده (کمتر از ۲ هفته)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSymptomDuration('chronic')}
                    className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer ${
                      symptomDuration === 'chronic'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    مزمن (بیش از ۱ ماه است)
                  </button>
                </div>

                {/* Toggles */}
                <div className="pt-2 space-y-2">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasTrauma}
                      onChange={(e) => setHasTrauma(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span className="text-slate-700">در اثر زمین‌خوردگی، تصادف یا ضربه مستقیم ورزشی رخ داده</span>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasLocking}
                      onChange={(e) => setHasLocking(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span className="text-slate-700">مفصل متورم شده یا توانایی تحمل وزن کامل بدن را ندارد</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action evaluate */}
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={handleEvaluate}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Activity className="w-4 h-4 text-blue-200" />
              <span>تحلیل علائم و پیشنهاد پزشک متخصص در اصفهان</span>
            </button>
          </div>

          {/* Evaluation Results */}
          {isEvaluated && (
            <div className="p-5 bg-white rounded-2xl border border-blue-200 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-bold text-blue-700 block mb-0.5">
                    نتیجه تحلیل بالینی اولیه وب‌کلینیک
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900">
                    {selectedBodyPart === 'knee' ? 'احتمال بالای آرتروز پیشرفته مفصل یا آسیب غضروف و مینیسک' :
                     selectedBodyPart === 'spine' ? 'احتمال درگیری دیسک بین‌مهره‌ای یا فشردگی ریشه عصب سیاتیک' :
                     selectedBodyPart === 'hip' ? 'احتمال ساییدگی مفصل ران (کوکسارتروز) یا گیرافتادگی فمورواستابولار' :
                     'آسیب تاندونی و ساختارهای محافظ مفصل'}
                  </h4>
                </div>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shrink-0">
                  نیاز به معاینه ارتوپد
                </span>
              </div>

              {/* Recommendations */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">فوق‌تخصص پیشنهادی:</strong>
                  <span className="text-slate-600">
                    {selectedBodyPart === 'knee' ? 'فوق تخصص جراحی زانو و آرتروسکوپی' :
                     selectedBodyPart === 'spine' ? 'فوق تخصص جراحی دیسک و ستون فقرات' :
                     selectedBodyPart === 'hip' ? 'فوق تخصص تعویض مفصل ران و لگن' :
                     'متخصص جراحی شانه و آسیب‌های ورزشی'}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">اقدامات پاراکلینیکی تشخیصی:</strong>
                  <span className="text-slate-600">
                    رادیوگرافی ایستاده زانو و ام‌آر‌آی (MRI) مفاصل در مرکز سپاهان یا کاشانی
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block">پوشش بیمه در اصفهان:</strong>
                  <span className="text-slate-600">
                    پوشش تا ۹۰٪ در بیمارستان‌های کاشانی و سعدی با بیمه تامین اجتماعی و تکمیلی
                  </span>
                </div>
              </div>

              {/* Doctors recommended */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 block mb-2">
                  پزشکان متخصص متناسب با این علائم در اصفهان:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchedDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        {doc.avatarImage ? (
                          <img
                            src={doc.avatarImage}
                            alt={doc.name}
                            className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-2xs shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {doc.avatarText}
                          </div>
                        )}
                        <div>
                          <strong className="text-xs text-slate-900 block">{doc.name}</strong>
                          <span className="text-[11px] text-slate-500 block">{doc.subSpecialty}</span>
                          <span className="text-[11px] text-blue-700 font-medium">اولین نوبت: {doc.nextAvailableSlot}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onBookDoctor(doc)}
                        className="py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-xs"
                      >
                        رزرو نوبت
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
