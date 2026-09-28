import React, { useState } from 'react';
import { 
  ShieldCheck, Calendar, Activity, Search, Building2, Stethoscope, 
  ArrowLeft, CheckCircle2, Star, Clock, FileText, ChevronLeft, MapPin, 
  Sparkles, Check, Phone, Heart, Percent, CreditCard, BookOpen, ChevronDown,
  ExternalLink, Shield, Zap, Award, Layers
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { Doctor } from '../types';

interface HeroHomeProps {
  onNavigateTab: (tab: string) => void;
  onBookDoctor: (doctor: Doctor) => void;
  onOpenBooking: () => void;
  onSelectDoctor?: (doctor: Doctor) => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  onNavigateTab,
  onBookDoctor,
  onOpenBooking,
  onSelectDoctor,
}) => {
  const [quickSearch, setQuickSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('اصفهان');
  const [activeSpecialtyTab, setActiveSpecialtyTab] = useState('همه تخصص‌ها');
  const [activeCenterCategory, setActiveCenterCategory] = useState<'all' | 'clinic' | 'hospital' | 'lab'>('all');
  const [selectedSpecialtyTariff, setSelectedSpecialtyTariff] = useState('orthopedics');

  const CITIES = [
    'اصفهان', 'تهران', 'مشهد', 'شیراز', 'تبریز', 'کرج', 
    'اهواز', 'قم', 'کرمانشاه', 'ارومیه', 'رشت', 'یزد'
  ];

  // Featured doctors for homepage spotlight
  const featuredDoctors = DOCTORS_DATA.filter(d => 
    ['dr-najafi', 'dr-heyrani', 'dr-karimi', 'dr-ekramnia', 'dr-barzegar', 'dr-tabatabaei', 'dr-mirzaei', 'dr-mousavi'].includes(d.id)
  );

  // 12 Medical Specialties requested by user
  const SPECIALTIES_LIST = [
    { id: 'orthopedics', name: 'ارتوپدی', en: 'orthopedics', icon: Stethoscope, desc: 'جراحی استخوان، مفاصل، تعویض مفصل و آسیب‌های ورزشی', installment: 'امکان پرداخت اقساطی تا ۱۲ ماه' },
    { id: 'pediatrics', name: 'اطفال', en: 'pediatrics', icon: Heart, desc: 'سلامت، رشد و بیماری‌های نوزادان، کودکان و نوجوانان', installment: 'امکان پرداخت اقساطی خدمات درمان' },
    { id: 'internal', name: 'داخلی', en: 'internal', icon: Activity, desc: 'بیماری‌های گوارش، غدد، کبد چرب، ریه و فشار خون', installment: 'امکان پرداخت اقساطی بستری و چکاپ' },
    { id: 'dentistry', name: 'دندانپزشکی', en: 'dentistry', icon: Sparkles, desc: 'ایمپلنت، ارتودنسی، لمینت و جراحی فک و دندان', installment: 'اقساط ویژه ایمپلنت و زیبایی دندان' },
    { id: 'psychiatry', name: 'روانپزشکی', en: 'psychiatry', icon: BookOpen, desc: 'روان‌درمانی، مدیریت اضطراب، افسردگی و خواب', installment: 'امکان پرداخت اقساطی جلسات روان‌درمانی' },
    { id: 'gynecology', name: 'زنان و زایمان', en: 'gynecology', icon: Heart, desc: 'مراقبت‌های بارداری، زایمان، نازایی و لاپاراسکوپی', installment: 'امکان پرداخت اقساطی زایمان و عمل‌های زنان' },
    { id: 'cardiology', name: 'قلب و عروق', en: 'cardiology', icon: Activity, desc: 'اکوکاردیوگرافی، آنژیوگرافی و فشار خون بالا', installment: 'امکان پرداخت اقساطی آنژیوگرافی و درمان' },
    { id: 'neurology', name: 'مغز و اعصاب', en: 'neurology', icon: Zap, desc: 'مغز و اعصاب گرایشی از پزشکی است که به اختلالات سیستم عصبی از جمله مغز، عروق خونی، ماهیچه ها و اعصاب می پردازد', installment: 'امکان پرداخت اقساطی نوار مغز و درمان' },
    { id: 'general', name: 'پزشکی عمومی', en: 'general', icon: Stethoscope, desc: 'معاینات دوره‌ای، چکاپ‌های اولیه و ارجاع تخصصی', installment: 'امکان پرداخت اقساطی خدمات جامع' },
    { id: 'dermatology', name: 'پوست و مو', en: 'dermatology', icon: Sparkles, desc: 'لیزر درمانی، کاشت مو، درمان آکنه و جوانسازی', installment: 'امکان پرداخت اقساطی کاشت مو و لیزر' },
    { id: 'ophthalmology', name: 'چشم‌پزشکی', en: 'ophthalmology', icon: EyeIcon, desc: 'عمل لیزیک، آب مروارید، گلوکوم و معاینه چشم', installment: 'امکان پرداخت اقساطی عمل لیزیک و لنز' },
    { id: 'ent', name: 'گوش و حلق و بینی', en: 'ent', icon: Activity, desc: 'جراحی بینی، سینوس، کم‌شنوایی و لوزه', installment: 'امکان پرداخت اقساطی جراحی بینی و گوش' }
  ];

  function EyeIcon(props: any) {
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
  }

  // Clinics requested by user
  const CLINICS_LIST = [
    { id: 'c-nima', name: 'کلینیک تخصصی نیما', isFeatured: true, badge: 'کلینیک منتخب', type: 'clinic', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک تخصصی نیما — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'خیابان شمس‌آبادی' },
    { id: 'c-arya', name: 'کلینیک آریا', isFeatured: false, badge: 'تخصصی', type: 'clinic', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک آریا — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'خیابان آمادگاه' },
    { id: 'c-sepahan', name: 'کلینیک سپاهان', isFeatured: false, badge: 'تخصصی', type: 'hospital', image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک سپاهان — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'خیابان بزرگمهر' },
    { id: 'c-noor', name: 'کلینیک نور چشم', isFeatured: false, badge: 'فوق‌تخصصی', type: 'clinic', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک نور چشم — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'خیابان وحید' },
    { id: 'c-zendegi', name: 'کلینیک زندگی سالم', isFeatured: false, badge: 'تخصصی', type: 'clinic', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک زندگی سالم — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'خیابان محتشم کاشانی' },
    { id: 'c-koodakan', name: 'کلینیک کودکان شاد', isFeatured: false, badge: 'تخصصی اطفال', type: 'clinic', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80', desc: 'کلینیک کودکان شاد — ارائه خدمات تخصصی با پوشش بیمه و نوبت آنلاین.', city: 'اصفهان', district: 'چهارراه قصر' }
  ];

  // Insurances requested by user
  const INSURANCES_LIST = [
    { id: 'asia', name: 'بیمه آسیا', color: 'from-blue-600 to-indigo-700', coverage: 'پوشش تا ۹۰٪ هزینه‌ها', onlinePreAuth: true },
    { id: 'iran', name: 'بیمه ایران', color: 'from-emerald-600 to-teal-700', coverage: 'پوشش کامل بیمارستانی', onlinePreAuth: true },
    { id: 'dana', name: 'بیمه دانا', color: 'from-amber-600 to-orange-700', coverage: 'صدور آنلاین معرفی‌نامه', onlinePreAuth: true },
    { id: 'salamat', name: 'بیمه سلامت', color: 'from-sky-600 to-blue-700', coverage: 'بیمه پایه سلامت ایرانیان', onlinePreAuth: true },
    { id: 'sina', name: 'بیمه سینا', color: 'from-purple-600 to-pink-700', coverage: 'پوشش خدمات تخصصی و جراحی', onlinePreAuth: true },
    { id: 'ma', name: 'بیمه ما', color: 'from-rose-600 to-red-700', coverage: 'پوشش ویژه درمان و بستری', onlinePreAuth: true }
  ];

  // Discounts requested by user
  const DISCOUNTS_LIST = [
    { title: 'ایمپلنت دندان', percent: '۳۰٪', badge: '۳۰٪ تخفیف', note: 'مشاوره رایگان قبل از درمان', bg: 'from-blue-500 to-indigo-600' },
    { title: 'جراحی زیبایی', percent: '۲۰٪', badge: '۲۰٪ تخفیف', note: 'پکیج‌های ویژه فصلی', bg: 'from-pink-500 to-rose-600' },
    { title: 'لیزر پوست', percent: '۲۵٪', badge: '۲۵٪ تخفیف', note: 'جلسات اقساطی', bg: 'from-purple-500 to-violet-600' },
    { title: 'فیزیوتراپی', percent: '۱۵٪', badge: '۱۵٪ تخفیف', note: 'اولین جلسه با تخفیف', bg: 'from-emerald-500 to-teal-600' }
  ];

  // 12 Blog Posts requested by user
  const BLOG_ARTICLES = [
    { id: 'b1', title: 'برنامه واکسیناسیون کودکان', isFeatured: true, badge: 'مقاله منتخب', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80', text: 'برنامه واکسیناسیون کودکان — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'ادامه مطلب' },
    { id: 'b2', title: 'آنفولانزای فصلی؛ کی به پزشک برویم؟', isFeatured: false, badge: 'عمومی', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80', text: 'آنفولانزای فصلی؛ کی به پزشک برویم؟ — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b3', title: 'راهنمای کامل کبد چرب', isFeatured: false, badge: 'داخلی', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', text: 'راهنمای کامل کبد چرب — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b4', title: '۱۰ عادت غذایی برای قلب سالم', isFeatured: false, badge: 'قلب', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80', text: '۱۰ عادت غذایی برای قلب سالم — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b5', title: 'بهترین دکتر جراحی لگن اصفهان', isFeatured: false, badge: 'ارتوپدی', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80', text: 'دکتر محمد برزگر معروف به دکتر پنجه طلا جراحی لگن اصفهان می باشد. وی تا کنون جراحی های موفقیت آمیز فراوانی در خصوص شکستگی های لگن و ران داشته است . در ادامه با این پزشک متبحر بیشتر آشنا می شوید .', cta: 'بخوانید' },
    { id: 'b6', title: 'کمک‌های اولیه آسیب ورزشی', isFeatured: false, badge: 'طب ورزشی', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', text: 'کمک‌های اولیه آسیب ورزشی — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b7', title: 'تغذیه سالم در بارداری', isFeatured: false, badge: 'زنان', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', text: 'تغذیه سالم در بارداری — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b8', title: 'کنترل فشار خون در خانه', isFeatured: false, badge: 'داخلی', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80', text: 'کنترل فشار خون در خانه — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b9', title: 'بهداشت دهان و دندان بزرگسالان', isFeatured: false, badge: 'دندانپزشکی', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80', text: 'بهداشت دهان و دندان بزرگسالان — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b10', title: 'چک‌لیست معاینه چشم سالانه', isFeatured: false, badge: 'چشم‌پزشکی', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', text: 'چک‌لیست معاینه چشم سالانه — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b11', title: 'مدیریت اضطراب روزمره', isFeatured: false, badge: 'روانپزشکی', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', text: 'مدیریت اضطراب روزمره — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' },
    { id: 'b12', title: 'مراقبت پوست در زمستان', isFeatured: false, badge: 'پوست و مو', image: 'https://images.unsplash.com/photo-1512290900672-1f55b9e0234d?auto=format&fit=crop&w=800&q=80', text: 'مراقبت پوست در زمستان — راهنمای کاربردی به زبان ساده برای بیماران و همراهان.', cta: 'بخوانید' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateTab('doctors');
  };

  const filteredClinics = CLINICS_LIST.filter(c => {
    if (activeCenterCategory === 'all') return true;
    return c.type === activeCenterCategory;
  });

  return (
    <div className="space-y-14 sm:space-y-20 text-right">
      
      {/* 1. HERO SECTION: رزرو آنلاین نوبت پزشکی */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/80 rounded-3xl shadow-2xs">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 text-center">
          
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>رزرو آنلاین نوبت پزشکی در سراسر ایران</span>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">
              نوبت پزشک را از هر شهر ایران آنلاین رزرو کنید
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-medium">
              بهترین متخصص‌ها را اینجا پیدا کنید و همان لحظه نوبت بگیرید.
            </p>
          </div>

          {/* Integrated Search Bar with City Selector */}
          <div className="max-w-3xl mx-auto bg-white p-2.5 sm:p-3 rounded-3xl sm:rounded-full border border-slate-200/90 shadow-lg ring-4 ring-slate-100">
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2">
              
              {/* Search text input */}
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="پزشک وب کلینیک"
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-900 placeholder:text-slate-400 rounded-full pr-11 pl-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200 text-right"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* City selector */}
              <div className="relative w-full sm:w-48 shrink-0">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/60 focus:bg-white text-slate-800 rounded-full pr-10 pl-8 py-3.5 text-xs sm:text-sm font-bold border border-slate-200 appearance-none cursor-pointer focus:outline-hidden text-right"
                >
                  <option value="" disabled>انتخاب شهر</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <MapPin className="w-4 h-4 text-red-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full sm:w-auto py-3.5 px-7 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-full text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md"
              >
                <span>جستجوی نوبت</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Support Phone Callout */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-slate-500">
            <span>پشتیبانی و نوبت‌دهی تلفنی ۲۴ ساعته:</span>
            <a href="tel:0218801010" className="font-mono text-blue-700 font-bold hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>۰۲۱۸۸۰۱۰۱۰</span>
            </a>
          </div>

          {/* Trust Avatars & Stats Showcase */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 text-xs text-slate-600 bg-white/60 backdrop-blur-xs py-2.5 px-5 rounded-full border border-slate-200/80 max-w-lg mx-auto shadow-2xs">
            <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden p-0.5">
              {featuredDoctors.slice(0, 5).map((doc) => (
                <img
                  key={doc.id}
                  src={doc.avatarImage}
                  alt={doc.name}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover object-top shadow-xs"
                />
              ))}
            </div>
            <div className="text-right">
              <span className="font-bold text-slate-900 block text-xs">پزشکان فوق‌تخصص تاییدشده نظام پزشکی</span>
              <span className="text-[10px] text-slate-500">نوبت‌دهی قطعی، معرفی‌نامه آنلاین و مشاوره</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SECTION: نوبت‌دهی بهترین پزشکان */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/90 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
              <Stethoscope className="w-4 h-4" />
              <span>پزشکان برگزیده</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              نوبت‌دهی بهترین پزشکان
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              پزشکان برتر را ببینید و همان لحظه نوبت رزرو کنید.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('doctors')}
            className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full text-xs font-bold transition-colors cursor-pointer border border-blue-200/80 flex items-center gap-1"
          >
            <span>مشاهده همه پزشکان</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Doctor Cards matching prompt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div 
                      onClick={() => onSelectDoctor?.(doc)}
                      className="relative w-12 h-12 rounded-2xl overflow-hidden shrink-0 cursor-pointer shadow-xs border border-slate-100 bg-slate-100 group-hover:scale-105 transition-all"
                      title={`مشاهده صفحه و نوبت‌دهی ${doc.name}`}
                    >
                      {doc.avatarImage ? (
                        <img
                          src={doc.avatarImage}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          {doc.avatarText}
                        </div>
                      )}
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-2xs" />
                    </div>
                    <div>
                      <h3 
                        onClick={() => onSelectDoctor?.(doc)}
                        className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {doc.name}
                      </h3>
                      <span className="text-xs text-blue-600 font-medium block">
                        {doc.title} · {doc.subSpecialty}
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200/80 text-amber-800 text-xs font-bold shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{doc.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">از ۵</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                  {doc.biography}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{doc.district}</span>
                  </span>
                  <span className="text-blue-700 font-bold font-mono text-[11px]">
                    {doc.nextAvailableSlot}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => onSelectDoctor?.(doc)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
                >
                  مشاهده پروفایل
                </button>
                <button
                  onClick={() => onBookDoctor(doc)}
                  className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center shadow-xs"
                >
                  رزرو نوبت
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION: بهترین کلینیک‌ها و مراکز درمانی */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/90 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-1">
              <Building2 className="w-4 h-4" />
              <span>مراکز منتخب</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              بهترین کلینیک‌ها
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              کلینیک‌های منتخب با خدمات متنوع و دسترسی آسان.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveCenterCategory('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeCenterCategory === 'all' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              همه مراکز
            </button>
            <button
              onClick={() => setActiveCenterCategory('clinic')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeCenterCategory === 'clinic' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              درمانگاه‌ها (کلینیک)
            </button>
            <button
              onClick={() => setActiveCenterCategory('hospital')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeCenterCategory === 'hospital' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              بیمارستان‌ها (بستری)
            </button>
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClinics.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group overflow-hidden"
            >
              <div className="space-y-3">
                {/* Clinic Image Banner */}
                {center.image && (
                  <div className="relative h-40 w-full rounded-2xl overflow-hidden bg-slate-100 -mt-1 shadow-2xs">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs ${
                      center.isFeatured ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-900/80 text-white backdrop-blur-xs'
                    }`}>
                      {center.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shadow-2xs shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  {!center.image && (
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      center.isFeatured 
                        ? 'bg-amber-50 text-amber-800 border-amber-200' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {center.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {center.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {center.desc}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{center.city}، {center.district}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => onNavigateTab('transit')}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
                >
                  جزئیات
                </button>
                <button
                  onClick={() => onNavigateTab('transit')}
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center shadow-xs"
                >
                  مشاهده مرکز
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION: انتخاب مراکز درمانی و پزشکان بر اساس بیمه مورد نظر */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>پوشش آنلاین هزینه‌ها</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-black">
            انتخاب مراکز درمانی و پزشکان بر اساس بیمه مورد نظر
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            برای استعلام سهم بیمه و دریافت معرفی‌نامه آنلاین، بیمه تحت پوشش خود را انتخاب کنید:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSURANCES_LIST.map((ins) => (
            <button
              key={ins.id}
              onClick={() => onNavigateTab('insurances')}
              className="p-4 rounded-2xl bg-slate-800/80 hover:bg-blue-900/60 border border-slate-700/80 hover:border-blue-400 transition-all text-right flex flex-col justify-between space-y-3 cursor-pointer group shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:bg-blue-600 transition-colors">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {ins.name}
                </h4>
                <span className="text-[10px] text-slate-400 block mt-1">
                  {ins.coverage}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 5. SECTION: هزینه‌های درمانی (راهنمای هزینه و تعرفه) */}
      <section id="specialties-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/90 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 mb-1">
              <Activity className="w-4 h-4" />
              <span>هزینه‌های درمانی</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              راهنمای هزینه و تعرفه — هزینه‌های درمانی را شفاف ببینید
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              تخصص مورد نظرتان را از لیست کنار انتخاب کنید و تعرفه، خدمات و پزشکان مرتبط را ببینید.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('surgery-cost')}
            className="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full text-xs font-bold transition-colors cursor-pointer border border-indigo-200 flex items-center gap-1"
          >
            <span>محاسبه‌گر هوشمند هزینه عمل</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 12 Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SPECIALTIES_LIST.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      تخصص {spec.en}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {spec.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {spec.desc}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateTab('doctors')}
                  className="w-full py-2 px-3 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between"
                >
                  <span>مشاهده تعرفه و پزشکان</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SECTION: خدمات درمانی اقساطی */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50/40 to-slate-50 p-6 sm:p-10 rounded-3xl border border-blue-200/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" />
              <span>طرح‌های اعتباری و سلامت بدون دغدغه</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              خدمات درمانی اقساطی
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              بدون فشار مالی، خدمات درمانی مورد نیازتان را اقساطی دریافت کنید.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SPECIALTIES_LIST.map((spec) => (
            <div
              key={spec.id}
              className="bg-white p-4 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all flex flex-col justify-between space-y-2 shadow-2xs"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {spec.name}
                </h4>
                <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
                  امکان پرداخت اقساطی
                </span>
              </div>
              <button
                onClick={() => onNavigateTab('surgery-cost')}
                className="py-1.5 px-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 rounded-lg text-xs font-bold transition-colors cursor-pointer text-center w-full"
              >
                مشاهده
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION: تخفیف‌های درمانی */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/90 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-600 mb-1">
            <Percent className="w-4 h-4" />
            <span>فرصت‌های ویژه</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            تخفیف‌های درمانی
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            پیشنهادهای تخفیف‌دار برای خدمات پرمخاطب.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DISCOUNTS_LIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group overflow-hidden relative"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                    {item.percent}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">پکیج ویژه</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600">
                  {item.note}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-700 rounded-xl text-xs font-bold transition-all cursor-pointer text-center"
              >
                رزرو نوبت تخفیف‌دار
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SECTION: رزرو نوبت براساس تخصص پزشک & برترین متخصصان */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/90 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              رزرو نوبت براساس تخصص پزشک
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              تخصص مورد نظر خود را انتخاب کرده و برترین پزشکان آن رشته را مشاهده فرمایید.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('doctors')}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold transition-colors cursor-pointer hover:bg-blue-700"
          >
            همه پزشکان
          </button>
        </div>

        {/* Specialty Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveSpecialtyTab('همه تخصص‌ها')}
            className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeSpecialtyTab === 'همه تخصص‌ها' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            همه تخصص‌ها
          </button>
          {SPECIALTIES_LIST.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSpecialtyTab(s.name)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeSpecialtyTab === s.name ? 'bg-blue-600 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Selected Specialty Doctors List */}
        <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>برترین متخصصان ({activeSpecialtyTab})</span>
            </h3>
            <span className="text-xs text-slate-500">پزشکان تایید شده وب کلینیک</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div 
                      onClick={() => onSelectDoctor?.(doc)}
                      className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 cursor-pointer shadow-2xs"
                      title={doc.name}
                    >
                      {doc.avatarImage ? (
                        <img
                          src={doc.avatarImage}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                          {doc.avatarText}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 
                        onClick={() => onSelectDoctor?.(doc)}
                        className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer"
                      >
                        {doc.name} {doc.title}
                      </h4>
                      <span className="text-xs text-blue-600 font-medium block mt-0.5">
                        {doc.subSpecialty}
                      </span>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {doc.biography}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 shrink-0">
                    امتیاز {doc.rating} از ۵
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500">{doc.district}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDoctor?.(doc)}
                      className="px-3 py-1.5 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg font-bold cursor-pointer"
                    >
                      مشاهده پروفایل
                    </button>
                    <button
                      onClick={() => onBookDoctor(doc)}
                      className="px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-bold cursor-pointer"
                    >
                      رزرو نوبت
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION: پربازدیدترین مطالب (وبلاگ و مقالات) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/90 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
              <BookOpen className="w-4 h-4" />
              <span>مرجع آموزشی بیماران</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              پربازدیدترین مطالب
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              مقالات راهنما برای انتخاب بهتر پزشک و درمان.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('blog')}
            className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full text-xs font-bold transition-colors cursor-pointer border border-blue-200"
          >
            مشاهده همه مقالات
          </button>
        </div>

        {/* 12 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_ARTICLES.map((art) => (
            <div
              key={art.id}
              className={`rounded-3xl border p-5 sm:p-6 transition-all flex flex-col justify-between space-y-4 group overflow-hidden ${
                art.isFeatured
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50/50 border-blue-200 shadow-sm'
                  : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                {/* Article Image Banner */}
                {art.image && (
                  <div 
                    onClick={() => onNavigateTab('blog')}
                    className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100 -mt-1 cursor-pointer shadow-2xs"
                  >
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-xs ${
                      art.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-900/80 text-white backdrop-blur-xs'
                    }`}>
                      {art.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {!art.image && (
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      art.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {art.badge}
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400">راهنمای بالینی</span>
                </div>

                <h3 
                  onClick={() => onNavigateTab('blog')}
                  className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-snug"
                >
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {art.text}
                </p>
              </div>

              <button
                onClick={() => onNavigateTab('blog')}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                  art.isFeatured
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{art.cta}</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
