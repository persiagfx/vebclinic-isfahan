import React, { useState } from 'react';
import {
  Stethoscope,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  DollarSign,
  AlertCircle,
  FileText,
  Settings,
  Phone,
  Building2,
  Plus,
  Trash2,
  LogOut,
  Eye,
  Activity,
  Check,
  Hospital,
  ShieldCheck,
  Star
} from 'lucide-react';
import { DoctorUser, Doctor, AppointmentRecord } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';

interface DoctorDashboardProps {
  user: DoctorUser;
  appointments: AppointmentRecord[];
  onUpdateAppointments: (updated: AppointmentRecord[]) => void;
  onLogout: () => void;
  onViewPublicProfile: (doctor: Doctor) => void;
}

export const DoctorDashboard: React.FC<DoctorDashboardProps> = ({
  user,
  appointments,
  onUpdateAppointments,
  onLogout,
  onViewPublicProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'queue' | 'schedule' | 'settings'>('queue');
  const [isAcceptingAppointments, setIsAcceptingAppointments] = useState(true);

  // Link to doctor's full dataset
  const doctorData = DOCTORS_DATA.find((d) => d.id === user.doctorId) || DOCTORS_DATA[0];

  // Schedule local state
  const [consultationFee, setConsultationFee] = useState(user.consultationFee || doctorData.consultationFee);
  const [activeDays, setActiveDays] = useState<string[]>(doctorData.availableDays);
  const [newSlotTime, setNewSlotTime] = useState('۱۷:۰۰');
  const [slotsList, setSlotsList] = useState(doctorData.availableSlots || []);
  const [feeSaveSuccess, setFeeSaveSuccess] = useState(false);

  // Filter appointments for this doctor
  const doctorAppointments = appointments.filter(
    (a) => a.doctorName.includes(doctorData.name) || a.doctorName.includes(user.name)
  );

  const handleUpdateAppointmentStatus = (trackingCode: string, newStatus: AppointmentRecord['status']) => {
    const updated = appointments.map((a) =>
      a.trackingCode === trackingCode ? { ...a, status: newStatus } : a
    );
    onUpdateAppointments(updated);
  };

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSlotTime.trim()) return;

    const newSlot = {
      id: `slot-${Date.now()}`,
      day: 'روز کاری بعدی',
      date: 'آزاد',
      time: newSlotTime.trim(),
      period: 'عصر' as const,
    };

    setSlotsList([...slotsList, newSlot]);
    setNewSlotTime('');
  };

  const handleRemoveSlot = (id: string) => {
    setSlotsList(slotsList.filter((s) => s.id !== id));
  };

  const handleToggleDay = (day: string) => {
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter((d) => d !== day));
    } else {
      setActiveDays([...activeDays, day]);
    }
  };

  const handleSaveSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setFeeSaveSuccess(true);
    setTimeout(() => setFeeSaveSuccess(false), 3000);
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Doctor Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600" />

          <div className="flex flex-col items-stretch justify-between gap-5 pt-2 xl:flex-row xl:items-center">
            
            {/* Doctor Info */}
            <div className="flex min-w-0 items-start gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center text-2xl font-black shadow-md border-2 border-white shrink-0">
                {doctorData.avatarImage ? (
                  <img
                    src={doctorData.avatarImage}
                    alt={doctorData.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  doctorData.avatarText
                )}
              </div>
              <div className="min-w-0 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg sm:text-2xl font-black leading-snug text-slate-900">
                    پنل اختصاصی مطب: {doctorData.name}
                  </h1>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>پزشک ارتوپد تاییدشده</span>
                  </span>
                </div>

                <div className="text-xs text-slate-600 font-medium">
                  {doctorData.subSpecialty}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                  <span>شماره نظام پزشکی: <strong className="text-slate-900 font-bold">{user.medicalCode}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>تلفن مطب: <strong className="text-slate-900">{doctorData.phone}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans">منطقه: {doctorData.district}</span>
                </div>
              </div>
            </div>

            {/* Status Switcher & Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setIsAcceptingAppointments(!isAcceptingAppointments)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isAcceptingAppointments
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isAcceptingAppointments ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                <span>{isAcceptingAppointments ? 'نوبت‌دهی آنلاین فعال' : 'نوبت‌دهی متوقف شده'}</span>
              </button>

              <button
                onClick={() => onViewPublicProfile(doctorData)}
                className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-full text-xs font-bold transition-colors cursor-pointer border border-blue-200"
              >
                مشاهده صفحه عمومی
              </button>

              <button
                onClick={onLogout}
                className="p-2 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 rounded-full transition-colors cursor-pointer border border-slate-200"
                title="خروج از حساب"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* 4 Metric KPI Cards */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">نوبت‌های رزرو شده:</span>
              <strong className="text-base sm:text-lg font-black text-slate-900 tabular-nums">
                {doctorAppointments.length} بیمار
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">تعرفه ویزیت مطب:</span>
              <strong className="text-base sm:text-lg font-black text-emerald-700 tabular-nums">
                {consultationFee.toLocaleString('fa-IR')} تومان
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">امتیاز رضایت مراجعین:</span>
              <strong className="text-base sm:text-lg font-black text-amber-700 flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{doctorData.rating} از ۵</span>
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">بیمارستان‌های همکار:</span>
              <strong className="text-base sm:text-lg font-black text-blue-700 tabular-nums">
                {doctorData.hospitals.length} مرکز جراحی
              </strong>
            </div>
          </div>

        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('queue')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'queue'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>لیست بیماران و نوبت‌های ثبت‌شده ({doctorAppointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'schedule'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>مدیریت تقویم و نوبت‌های خالی مطب</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>مشخصات مطب و بیمارستان‌ها</span>
          </button>
        </div>

        {/* 1. Queue & Patients Tab */}
        {activeTab === 'queue' && (
          <div className="space-y-4">
            {doctorAppointments.length > 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs">
                <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-sm font-bold text-slate-900 leading-7">
                    بیماران دارای نوبت ویزیت با {doctorData.name}
                  </h3>
                  <span className="text-xs text-slate-500 shrink-0">
                    به‌روزرسانی خودکار نوبت‌ها
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {doctorAppointments.map((app) => (
                    <div
                      key={app.trackingCode}
                      className="p-4 sm:p-5 flex flex-col items-stretch justify-between gap-3 hover:bg-slate-50/60 transition-colors xl:flex-row xl:items-center"
                    >
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">
                            {app.patientName}
                          </span>
                          <span className="text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                            کد ملی: {app.nationalId}
                          </span>
                          <span className="text-[11px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
                            {app.phone}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                          <span className="font-bold text-slate-800">زمان نوبت: {app.date} - ساعت {app.timeSlot}</span>
                          <span aria-hidden="true">·</span>
                          <span>خدمت: {app.serviceType}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-700 font-medium">بیمه: {app.supplementaryInsurance}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            app.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : app.status === 'completed'
                              ? 'bg-blue-50 text-blue-800 border border-blue-200'
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          {app.status === 'confirmed' ? 'در انتظار ویزیت' : app.status === 'completed' ? 'ویزیت انجام شد' : 'لغو شده'}
                        </span>

                        {app.status === 'confirmed' && (
                          <button
                            onClick={() => handleUpdateAppointmentStatus(app.trackingCode, 'completed')}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
                          >
                            ثبت ویزیت شد
                          </button>
                        )}

                        {app.status !== 'cancelled' && (
                          <button
                            onClick={() => handleUpdateAppointmentStatus(app.trackingCode, 'cancelled')}
                            className="px-3 py-1.5 text-red-600 hover:bg-red-50 border border-red-200 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                          >
                            لغو
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center space-y-3">
                <Users className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">هیچ نوبتی برای امروز ثبت نشده است</h3>
                <p className="text-xs text-slate-500">نوبت‌های رزرو شده توسط بیماران در این بخش به نمایش درمی‌آیند.</p>
              </div>
            )}
          </div>
        )}

        {/* 2. Schedule Management Tab */}
        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Days & Fee Form */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-6">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                روزهای حضور در مطب و تعرفه ویزیت
              </h3>

              {feeSaveSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-2xl text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>تغییرات زمان‌بندی و تعرفه با موفقیت در سامانه ذخیره شد.</span>
                </div>
              )}

              <form onSubmit={handleSaveSchedule} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    روزهای فعال جهت پذیرش بیمار در مطب اصفهان:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleToggleDay(day)}
                        className={`py-2 px-3 rounded-xl font-bold border transition-colors cursor-pointer text-center ${
                          activeDays.includes(day)
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    تعرفه مصوب ویزیت حضوری در مطب (تومان):
                  </label>
                  <input
                    type="number"
                    value={consultationFee}
                    onChange={(e) => setConsultationFee(Number(e.target.value))}
                    step={10000}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    معادل: {(consultationFee / 1000).toLocaleString('fa-IR')} هزار تومان
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors cursor-pointer shadow-xs"
                >
                  ذخیره تنظیمات مطب
                </button>
              </form>
            </div>

            {/* Slots List & Add Slot */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">
                  اسلات‌ها و نوبت‌های خالی قابل رزرو
                </h3>
                <span className="text-xs text-slate-500 font-mono">{slotsList.length} نوبت فعال</span>
              </div>

              {/* Add Slot */}
              <form onSubmit={handleAddSlot} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="ساعت جدید (مثال: ۱۷:۳۰)"
                  value={newSlotTime}
                  onChange={(e) => setNewSlotTime(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>افزودن نوبت</span>
                </button>
              </form>

              {/* Slots List */}
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {slotsList.map((slot) => (
                  <div
                    key={slot.id}
                    className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-bold text-slate-800">{slot.day}</span>
                      <span className="text-slate-500">ساعت {slot.time}</span>
                    </div>

                    <button
                      onClick={() => handleRemoveSlot(slot.id)}
                      className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="حذف این نوبت"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 3. Settings & Hospitals Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs max-w-2xl mx-auto space-y-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              اطلاعات جغرافیایی مطب و بیمارستان‌ها
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-500 mb-1">نشانی ثبت‌شده مطب:</label>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium text-slate-800">
                  {doctorData.address}
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">بیمارستان‌های جراحی طرف قرارداد:</label>
                <div className="space-y-1.5">
                  {doctorData.hospitals.map((h, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold flex items-center gap-2">
                      <Hospital className="w-4 h-4 text-emerald-600" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">بیوگرافی و معرفی عمومی:</label>
                <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-700 leading-relaxed text-justify">
                  {doctorData.biography}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
