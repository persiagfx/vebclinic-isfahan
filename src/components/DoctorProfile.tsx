import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Clock,
  Phone,
  CheckCircle2,
  Share2,
  Bookmark,
  Check,
  Navigation,
  MessageCircle,
  Send,
  Users,
  Copy,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  Stethoscope,
  Camera,
  X
} from 'lucide-react';
import { Doctor } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookDoctor: (doctor: Doctor, preselectedSlot?: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenInsurances?: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({
  doctor,
  onBack,
  onBookDoctor,
  onSelectDoctor,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string } | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(
    doctor.availableSlots && doctor.availableSlots.length > 0 ? doctor.availableSlots[0].id : null
  );

  const colleaguesRef = useRef<HTMLDivElement>(null);

  // List of specialties/tags for this doctor
  const doctorSpecialties: string[] = [
    doctor.title,
    doctor.subSpecialty,
    ...(doctor.specialtiesList || []),
  ].filter((item, index, self) => item && self.indexOf(item) === index);

  // Find same-field colleagues
  const colleagueDoctors = DOCTORS_DATA.filter((d) => {
    if (d.id === doctor.id) return false;
    if (selectedSpecialtyFilter) {
      const q = selectedSpecialtyFilter.toLowerCase();
      return (
        d.title.toLowerCase().includes(q) ||
        d.subSpecialty.toLowerCase().includes(q) ||
        (d.specialtiesList && d.specialtiesList.some(s => s.toLowerCase().includes(q))) ||
        d.specialtyTag === doctor.specialtyTag
      );
    }
    // Default same-field: matching specialty tag or title/subSpecialty
    return (
      d.specialtyTag === doctor.specialtyTag ||
      d.title === doctor.title ||
      (d.specialtiesList && doctor.specialtiesList && d.specialtiesList.some(s => doctor.specialtiesList?.includes(s)))
    );
  });

  const handleSpecialtyClick = (spec: string) => {
    setSelectedSpecialtyFilter(spec);
    // Smooth scroll down to colleagues section
    if (colleaguesRef.current) {
      colleaguesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(doctor.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(doctor.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${doctor.name} - ${doctor.title}`,
        text: `پروفایل و نوبت‌دهی آنلاین ${doctor.name} در وب‌کلینیک`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const lat = doctor.coordinates?.lat || 32.6546;
  const lng = doctor.coordinates?.lng || 51.6680;

  // External routing URLs
  const neshanUrl = `https://neshan.org/maps/@${lat},${lng},16z`;
  const baladUrl = `https://balad.ir/location?latitude=${lat}&longitude=${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const instagramHandle = doctor.instagram || 'vebclinic';
  const whatsappNumber = doctor.whatsapp || '989128801010';
  const telegramHandle = doctor.telegram || 'vebclinic_ir';

  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen text-right">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">

        {/* 1. TOP BREADCRUMB & BACK BUTTON */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-full border border-slate-200/90 shadow-2xs"
          >
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span>بازگشت به لیست پزشکان</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title="نشان‌کردن پزشک"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'ذخیره شد' : 'نشان کردن'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:bg-slate-50 text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5"
              title="اشتراک‌گذاری"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'کپی شد' : 'اشتراک'}</span>
            </button>
          </div>
        </div>

        {/* 2. MAIN DOCTOR CARD (خلوت، مرتب، شیک) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Avatar with photo */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-2 border-slate-100 shadow-md bg-slate-100 flex items-center justify-center">
                {doctor.avatarImage ? (
                  <img
                    src={doctor.avatarImage}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-2xl sm:text-3xl flex items-center justify-center">
                    {doctor.avatarText}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-2xs" title="پزشک دارای پروانه تایید شده">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-right space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                    {doctor.name}
                  </h1>
                  <p className="text-sm font-bold text-blue-700 mt-1">
                    {doctor.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {doctor.subSpecialty}
                  </p>
                </div>

                {/* Rating Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 bg-amber-50 px-3.5 py-1.5 rounded-2xl border border-amber-200/80 text-amber-900 text-sm font-bold self-center sm:self-start">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{doctor.rating}</span>
                  <span className="text-xs text-slate-400 font-normal">از ۵</span>
                </div>
              </div>

              {doctor.biography && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {doctor.biography}
                </p>
              )}

              {/* Quick Contact & Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  onClick={() => onBookDoctor(doctor, selectedSlotId || undefined)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-full transition-colors cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>رزرو نوبت آنلاین</span>
                </button>

                <a
                  href={`tel:${doctor.phone}`}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-600" />
                  <span>تماس: {doctor.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. تخصص‌ها (با قابلیت کلیک برای آوردن پزشکان هم‌رشته) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              <h2>تخصص‌ها و زمینه‌های درمانی</h2>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              روی هر تخصص کلیک کنید تا پزشکان هم‌رشته نمایش داده شوند
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {doctorSpecialties.map((spec, index) => {
              const isSelected = selectedSpecialtyFilter === spec;
              return (
                <button
                  key={index}
                  onClick={() => handleSpecialtyClick(spec)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100/90 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200/70'
                  }`}
                  title="مشاهده پزشکان هم‌رشته این تخصص"
                >
                  <span>{spec}</span>
                  <Users className="w-3 h-3 opacity-70" />
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. آدرس مطب و لوکیشن (مرتب، خلوت، خوانا) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* آدرس و اطلاعات مطب (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h3>آدرس مطب و ساعت کاری</h3>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 cursor-pointer bg-blue-50 px-2.5 py-1 rounded-lg"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAddress ? 'کپی شد' : 'کپی آدرس'}</span>
                </button>
              </div>

              {/* Full Address */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">نشانی دقیق: </span>
                {doctor.address}
                {doctor.floorAndUnit && (
                  <span className="text-slate-500 block mt-1 font-medium">
                    {doctor.clinicBuilding ? `${doctor.clinicBuilding} - ` : ''}
                    {doctor.floorAndUnit}
                  </span>
                )}
              </div>

              {/* Working Hours */}
              {doctor.workingHours && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>ساعت کاری مطب: </strong>{doctor.workingHours}</span>
                </div>
              )}

              {/* Phone info */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-700 pt-1">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>تلفن تماس مطب:</span>
                  <strong className="font-mono text-slate-900">{doctor.phone}</strong>
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="text-slate-500 hover:text-slate-800 text-xs flex items-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'کپی شد' : 'کپی'}</span>
                </button>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 block mb-2 font-medium">مسیریابی سریع با اپلیکیشن‌ها:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <a
                  href={neshanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl transition-colors text-center border border-blue-200/80 flex items-center justify-center gap-1"
                >
                  <span>نشان</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={baladUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-colors text-center border border-emerald-200/80 flex items-center justify-center gap-1"
                >
                  <span>بلد</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-bold rounded-xl transition-colors text-center border border-cyan-200/80 flex items-center justify-center gap-1"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors text-center border border-slate-200 flex items-center justify-center gap-1"
                >
                  <span>گوگل مپ</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* لوکیشن / نقشه بصری (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                <Navigation className="w-4 h-4 text-blue-600" />
                <h3>لوکیشن و نقشه</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {lat.toFixed(4)}, {lng.toFixed(4)}
              </span>
            </div>

            {/* Visual Minimal Map Card */}
            <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center group">
              {/* Clean Map Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
              
              {/* Simulated Map Elements */}
              <div className="absolute inset-x-8 top-1/2 h-2.5 bg-slate-300/80 -translate-y-1/2 rounded-full" />
              <div className="absolute inset-y-6 left-1/3 w-2.5 bg-blue-200/80 rounded-full" />
              <div className="absolute inset-y-10 right-1/4 w-2 bg-slate-300/80 rounded-full" />

              {/* Pin Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-2.5 bg-red-600 text-white rounded-full shadow-lg ring-4 ring-red-100 animate-bounce">
                  <MapPin className="w-5 h-5 fill-white" />
                </div>
                <div className="mt-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-800 shadow-xs border border-slate-200">
                  {doctor.district}
                </div>
              </div>

              {/* Map Overlay Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 z-20 px-2.5 py-1 bg-white/90 hover:bg-white text-blue-700 text-[11px] font-bold rounded-lg shadow-xs border border-slate-200 flex items-center gap-1 transition-all"
              >
                <span>باز کردن در نقشه</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              دسترسی آسان با مترو و تاکسی، واقع در محدوده {doctor.district}
            </p>
          </div>

        </div>

        {/* 5. شبکه‌های اجتماعی و پیام‌رسان‌ها (اینستاگرام، واتساپ، تلگرام) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <h3>ارتباط با پزشک در شبکه‌های اجتماعی</h3>
            </div>
            <span className="text-xs text-slate-400">
              اینستاگرام · واتساپ · تلگرام
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Instagram */}
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-pink-200/80 bg-gradient-to-br from-pink-50/70 to-rose-50/40 hover:from-pink-100/70 hover:to-rose-100/60 transition-all flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                اینستا
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-rose-600 transition-colors">
                  اینستاگرام مطب
                </span>
                <span className="text-[11px] text-slate-500 font-mono truncate block direction-ltr text-right">
                  @{instagramHandle}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-600 shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 to-teal-50/40 hover:from-emerald-100/70 hover:to-teal-100/60 transition-all flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                <Send className="w-5 h-5 -rotate-45" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors">
                  واتساپ پشتیبانی
                </span>
                <span className="text-[11px] text-slate-500 font-mono truncate block direction-ltr text-right">
                  +{whatsappNumber}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0" />
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/${telegramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-sky-200/80 bg-gradient-to-br from-sky-50/70 to-blue-50/40 hover:from-sky-100/70 hover:to-blue-100/60 transition-all flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                <Send className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-900 block group-hover:text-sky-600 transition-colors">
                  کانال تلگرام
                </span>
                <span className="text-[11px] text-slate-500 font-mono truncate block direction-ltr text-right">
                  @{telegramHandle}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 shrink-0" />
            </a>
          </div>
        </div>

        {/* 5.5 گالری تصاویر محیط مطب و کلینیک */}
        {doctor.clinicPhotos && doctor.clinicPhotos.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                <Camera className="w-4 h-4 text-blue-600" />
                <h3>تصاویر و فضای مطب / کلینیک</h3>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {doctor.clinicBuilding ? `${doctor.clinicBuilding} (${doctor.district})` : doctor.district}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {doctor.clinicPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-2xs hover:shadow-md transition-all h-48"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 right-3 left-3 text-right">
                    <span className="text-xs font-bold text-white block drop-shadow-md">
                      {photo.title}
                    </span>
                    <span className="text-[10px] text-slate-300 mt-0.5 inline-flex items-center gap-1">
                      <span>مشاهده در اندازه بزرگتر</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. نوبت‌های در دسترس (ساده، سریع، بدون شلوغی) */}
        {doctor.availableSlots && doctor.availableSlots.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-blue-600" />
                <h3>نوبت‌های حضوری در دسترس</h3>
              </div>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                رزرو آنی آنلاین
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {doctor.availableSlots.map((slot) => {
                const isSelected = selectedSlotId === slot.id;
                return (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlotId(slot.id)}
                    className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 block">
                      {slot.day} ({slot.date})
                    </span>
                    <span className="text-xs text-blue-700 font-mono font-bold block mt-1">
                      ساعت {slot.time}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onBookDoctor(doctor, selectedSlotId || undefined)}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-full transition-colors cursor-pointer shadow-xs text-center"
              >
                ادامه رزرو نوبت برای نوبت انتخابی
              </button>
            </div>
          </div>
        )}

        {/* 7. پزشکان هم‌رشته (دکترهای هم‌رشته - خلوت، تمیز و مرتب) */}
        <div ref={colleaguesRef} className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/90 pb-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
                <Users className="w-4 h-4" />
                <span>همکاران و متخصصان هم‌رشته</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {selectedSpecialtyFilter ? (
                  <>پزشکان هم‌رشته در زمینه «{selectedSpecialtyFilter}»</>
                ) : (
                  <>سایر پزشکان هم‌رشته {doctor.title}</>
                )}
              </h2>
            </div>

            {selectedSpecialtyFilter && (
              <button
                onClick={() => setSelectedSpecialtyFilter(null)}
                className="text-xs text-blue-600 hover:underline cursor-pointer font-medium self-start sm:self-auto"
              >
                نمایش همه همکاران
              </button>
            )}
          </div>

          {colleagueDoctors.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              پزشک دیگری در این شاخه ثبت نشده است.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colleagueDoctors.slice(0, 6).map((colleague) => (
                <div
                  key={colleague.id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => onSelectDoctor(colleague)}
                          className="relative w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 text-white flex items-center justify-center font-bold text-sm shrink-0 cursor-pointer shadow-2xs group-hover:scale-105 transition-all"
                          title={`مشاهده صفحه ${colleague.name}`}
                        >
                          {colleague.avatarImage ? (
                            <img
                              src={colleague.avatarImage}
                              alt={colleague.name}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                              {colleague.avatarText}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4
                            onClick={() => onSelectDoctor(colleague)}
                            className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors"
                          >
                            {colleague.name}
                          </h4>
                          <span className="text-xs text-slate-500 block">
                            {colleague.title}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60 text-amber-800 text-xs font-bold shrink-0">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{colleague.rating}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {colleague.biography || colleague.subSpecialty}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{colleague.district}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onSelectDoctor(colleague)}
                      className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
                    >
                      مشاهده پروفایل
                    </button>
                    <button
                      onClick={() => onBookDoctor(colleague)}
                      className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
                    >
                      رزرو نوبت
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Photo Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-slate-950/90 border-b border-slate-800 text-white">
                <span className="text-sm font-bold flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span>{selectedPhoto.title}</span>
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="بستن تصویر"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-16/10 max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
