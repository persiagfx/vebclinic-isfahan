import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  Hospital,
  Clock,
  ShieldAlert,
  Ambulance,
  CheckCircle2,
  XCircle,
  HelpCircle,
  MapPin,
  ChevronLeft,
  Activity,
  UserCheck
} from 'lucide-react';

interface OrthopedicEmergencyGuideProps {
  onOpenBooking?: () => void;
  onSelectHospitalsTab?: () => void;
}

export const OrthopedicEmergencyGuide: React.FC<OrthopedicEmergencyGuideProps> = ({
  onOpenBooking,
  onSelectHospitalsTab,
}) => {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Alert Banner */}
        <div className="bg-red-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-red-600/20 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-100 block">فوریت‌های پزشکی استخوان و مفاصل اصفهان</span>
                <h1 className="text-xl sm:text-2xl font-black">
                  راهنمای اورژانس ترومای ارتوپدی و شکستگی‌های حاد
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:115"
                className="px-5 py-2.5 bg-white text-red-600 hover:bg-red-50 font-black rounded-full text-xs transition-colors cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <Ambulance className="w-4 h-4 text-red-600" />
                <span>تماس فوری با اورژانس ۱۱۵</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-red-100 leading-relaxed max-w-3xl">
            در صورت بروز تصادفات، سقوط از ارتفاع، تغییر شکل مشهود اندام، بیرون‌زدگی استخوان (شکستگی باز) یا قطع نبض انگشتان، سریعاً بیمار را به نزدیک‌ترین مرکز ترومای دولتی یا خصوصی اصفهان منتقل نمایید.
          </p>
        </div>

        {/* 2-Column: On-Duty Centers + First-Aid Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Isfahan 24/7 Orthopedic Trauma Centers */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Hospital className="w-5 h-5 text-blue-600" />
              <span>مراکز ترومای ارتوپدی فعال و شبانه‌روزی اصفهان</span>
            </h2>

            <div className="space-y-4">
              
              {/* Kashani Hospital (Main Adult Trauma Center) */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=400&q=80"
                    alt="بیمارستان کاشانی"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        بیمارستان شهید کاشانی
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-800 shrink-0">
                        ۲۴ ساعته فعال
                      </span>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold block mt-0.5">
                      مرکز تخصصی ترومای استان اصفهان
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مجهزترین مرکز ارجاع شکستگی‌های لگن، ستون فقرات و آسیب‌های چندگانه (مولتی‌تروما) با حضور رزیدنت و فلوشیپ ترومای دانشگاه علوم پزشکی.
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                  <span className="text-slate-500">نشانی: خیابان کاشانی</span>
                  <a
                    href="tel:03132330091"
                    className="font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>031-32330091</span>
                  </a>
                </div>
              </div>

              {/* Imam Hossein Hospital (Pediatric Trauma) */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80"
                    alt="بیمارستان امام حسین"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        بیمارستان کودکان امام حسین (ع)
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 shrink-0">
                        ویژه اطفال
                      </span>
                    </div>
                    <span className="text-xs text-blue-600 font-semibold block mt-0.5">
                      اورژانس تخصصی استخوان و شکستگی کودکان
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مرکز ارجاع شکستگی صفحات رشد استخوانی کودکان، دررفتگی‌های آرنج و آسیب‌های اطفال در استان اصفهان.
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                  <span className="text-slate-500">نشانی: خیابان امام خمینی</span>
                  <a
                    href="tel:03133866060"
                    className="font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>031-33866060</span>
                  </a>
                </div>
              </div>

              {/* Saadi Hospital (Private Orthopedics) */}
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
                    alt="بیمارستان سعدی"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        بیمارستان تخصصی سعدی
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                        پذیرش بیمه تکمیلی
                      </span>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                      بخش خصوصی اورژانس ارتوپدی
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  اورژانس مجهز، اتاق عمل‌های استریل ویژه ارتوپدی و پذیرش مستقیم آسیب‌های ورزشی و شکستگی‌های بسته‌ با کلیه بیمه‌های تکمیلی.
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                  <span className="text-slate-500">نشانی: بوستان سعدی، پل فلزی</span>
                  <a
                    href="tel:03136273031"
                    className="font-mono font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>031-36273031</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Golden First-Aid Rules for Orthopedic Trauma */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-6">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Activity className="w-5 h-5 text-emerald-600" />
              <span>اقدامات حیاتی اولیه تا رسیدن به بیمارستان</span>
            </h2>

            {/* First Aid Visual Photo Banner */}
            <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                alt="امداد و کمک‌های اولیه ارتوپدی"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute bottom-3 right-3 text-white text-xs font-bold bg-emerald-600/95 px-3 py-1 rounded-xl backdrop-blur-xs">
                پروتکل استاندارد کمک‌های اولیه فوریت‌های استخوان و مفاصل
              </span>
            </div>

            <div className="space-y-4 text-xs">
              
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    ۱. بی‌حرکت‌سازی عضو با آتل موقت (Immobilization):
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    هرگز سعی نکنید استخوان کج‌شده را صاف کنید یا جا بیاندازید! با استفاده از مقوای ضخیم، تخته یا چوب، مفصل بالا و پایین شکستگی را ثابت نگه دارید.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    ۲. کمپرس یخ غیرمستقیم (Cold Pack):
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    کیسه یخ را درون حوله بپیچید و روی موضع تورم قرار دهید (هرگز یخ را مستقیماً روی پوست نگذارید). این کار خونریزی داخلی و تورم را به شدت کاهش می‌دهد.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    ۳. اکیداً ناشتا نگه داشتن مصدوم (NPO):
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    به بیمار آب، چای یا خوراکی ندهید! در صورت نیاز به عمل جراحی یا جااندازی تحت بیهوشی اورژانس، پر بودن معده مانع بیهوشی شده و عمل ساعت‌ها به تعویق می‌افتد.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-red-50/70 border border-red-200/80">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    ۴. کنترل شکستگی‌های باز (خونریزی خارجی):
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    اگر استخوان پوست را پاره کرده، روی زخم را با گاز استریل تمیز بپوشانید و با پارچه تمیز فشار ملایم دهید تا خونریزی کنترل شود. به هیچ وجه روی زخم بتادین نریزید.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
