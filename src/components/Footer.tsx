import React, { useState } from 'react';
import { Phone, MapPin, Mail, Heart, Check, Send } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onOpenAuth?: (role?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenBooking,
  onOpenTracker,
  onOpenAuth,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-right mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & About VebClinic */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Heart className="w-5 h-5 text-white fill-white/20" strokeWidth={2.2} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white">
                  VebClinic
                </span>
                <span className="text-[10px] font-bold text-blue-400 font-sans tracking-wide bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800">
                  وب کلینیک
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-white block">
                درباره وب کلینیک
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                وب کلینیک سامانه رزرو نوبت و معرفی پزشکان و مراکز درمانی است؛ تخصص مناسب را پیدا کنید و آنلاین نوبت بگیرید.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold text-white block">
                خبرنامه
              </span>
              <p className="text-[11px] text-slate-400">
                برای دریافت جدیدترین اخبار ایمیل خود را وارد کنید
              </p>
              {subscribed ? (
                <div className="bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs px-3 py-2 rounded-xl flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>ایمیل شما با موفقیت در خبرنامه ثبت شد.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="ایمیل خود را وارد کنید..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-hidden focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs transition-colors cursor-pointer shrink-0"
                    title="ارسال ایمیل"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Quick Access (دسترسی سریع) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              دسترسی سریع
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateTab('doctors')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  پزشکان
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('transit')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  مراکز درمانی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('insurances')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  بیمه‌ها
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  تخصص‌ها
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('blog')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  مقالات و پربازدیدترین مطالب
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('doctors')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  جستجوی پیشرفته پزشکان
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTracker}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right text-emerald-400"
                >
                  پیگیری و استعلام کد نوبت
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links (لینک‌های مفید) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              لینک‌های مفید
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  تماس با ما
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  درباره ما
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth ? onOpenAuth('patient') : onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  ورود کاربران و بیماران
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth ? onOpenAuth('patient') : onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right"
                >
                  ثبت‌نام بیمار جدید
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth ? onOpenAuth('doctor') : onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right text-blue-300"
                >
                  ورود به پنل مطب پزشکان
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth ? onOpenAuth('admin') : onNavigateTab('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-right text-indigo-300"
                >
                  ورود مدیریت سامانه
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Methods (راه‌های ارتباطی) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              راه‌های ارتباطی
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-500 block">تلفن پشتیبانی:</span>
                <a
                  href="tel:0215501746"
                  className="font-mono text-white hover:text-blue-400 font-bold block"
                >
                  ۰۲۱-۵۵۰۱۷۴۶
                </a>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-500 block">رزرو تلفنی نوبت:</span>
                <a
                  href="tel:0218801010"
                  className="font-mono text-emerald-400 hover:text-emerald-300 font-bold block text-sm"
                >
                  ۰۲۱۸۸۰۱۰۱۰
                </a>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-500 block flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" />
                  <span>ایمیل رسمی:</span>
                </span>
                <a
                  href="mailto:Hi@alizadehyari.com"
                  className="font-mono text-slate-300 hover:text-blue-400 block text-[11px]"
                >
                  Hi@alizadehyari.com
                </a>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-500 block flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>آدرس دفتر مرکزی:</span>
                </span>
                <span className="text-[11px] text-slate-300 block leading-relaxed">
                  تهران، خیابان شریعتی، کوچه...
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© تمامی حقوق برای سامانه نوبت‌دهی آنلاین VebClinic محفوظ است.</p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>تلفن پشتیبانی: ۰۲۱-۵۵۰۱۷۴۶</span>
            <span>·</span>
            <span>رزرو نوبت: ۰۲۱۸۸۰۱۰۱۰</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
