import React, { useState } from 'react';
import {
  User,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  FileText,
  Printer,
  XCircle,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  LogOut,
  Edit3,
  Phone,
  CreditCard,
  Building2,
  Stethoscope,
  ChevronLeft,
  Check
} from 'lucide-react';
import { PatientUser, AppointmentRecord, PreAuthVoucher, Doctor } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';
import { InsuranceLogo } from './InsuranceLogo';

interface PatientProfileProps {
  user: PatientUser;
  appointments: AppointmentRecord[];
  vouchers: PreAuthVoucher[];
  onCancelAppointment: (trackingCode: string) => void;
  onOpenBooking: () => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onLogout: () => void;
  onUpdateUser: (updatedUser: PatientUser) => void;
  onBack?: () => void;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({
  user,
  appointments,
  vouchers,
  onCancelAppointment,
  onOpenBooking,
  onSelectDoctor,
  onLogout,
  onUpdateUser,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'vouchers' | 'doctors' | 'edit'>('appointments');
  const [confirmingCancelCode, setConfirmingCancelCode] = useState<string | null>(null);

  // Edit profile state
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [nationalId, setNationalId] = useState(user.nationalId);
  const [primaryIns, setPrimaryIns] = useState(user.insuranceType);
  const [suppIns, setSuppIns] = useState(user.supplementaryInsurance);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Filter appointments for this user
  const userAppointments = appointments.filter(
    (a) => a.phone === user.phone || a.nationalId === user.nationalId || a.patientName === user.name
  );

  // Saved / Recommended Doctors
  const savedDoctors = DOCTORS_DATA.filter((d) => user.savedDoctorIds.includes(d.id));

  const primaryInsuranceObj = PRIMARY_INSURANCES.find((i) => i.id === user.insuranceType);
  const suppInsuranceObj = SUPPLEMENTARY_INSURANCES.find((i) => i.id === user.supplementaryInsurance);
  const primaryLabel = primaryInsuranceObj ? primaryInsuranceObj.name : 'تامین اجتماعی';
  const suppLabel = suppInsuranceObj ? suppInsuranceObj.name : 'بیمه تکمیلی';

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      ...user,
      name,
      phone,
      nationalId,
      insuranceType: primaryIns,
      supplementaryInsurance: suppIns,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePrintSlip = (app: AppointmentRecord) => {
    window.print();
  };

  return (
    <div className="py-6 sm:py-10 bg-slate-50 text-slate-800 text-right min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb & Back */}
        {onBack && (
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>بازگشت به صفحه اصلی</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400">
              پرتال جامع پرونده پزشکی و نوبت‌ها
            </span>
          </div>
        )}

        {/* Profile Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600" />

          <div className="flex flex-col items-stretch justify-between gap-5 pt-2 xl:flex-row xl:items-center">
            
            {/* User Details */}
            <div className="flex min-w-0 items-start gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-2xl font-black shadow-md border-2 border-white shrink-0">
                {user.name[0] || 'ب'}
              </div>
              <div className="min-w-0 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg sm:text-2xl font-black leading-snug text-slate-900">
                    پروفایل کاربری: {user.name}
                  </h1>
                  <span className="bg-blue-50 text-blue-700 border border-blue-200/70 text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0">
                    بیمار عضو وب‌کلینیک
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                  <span>کد ملی: <strong className="text-slate-800 font-sans">{user.nationalId}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>موبایل: <strong className="text-slate-800">{user.phone}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans">عضویت از: {user.createdAt}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-slate-600 font-medium">بیمه فعال:</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <InsuranceLogo id={user.insuranceType} size={14} />
                    <span>{primaryLabel}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    <InsuranceLogo id={user.supplementaryInsurance} size={14} />
                    <span>{suppLabel}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                رزرو نوبت جدید
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-full text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                title="خروج از حساب کاربری"
              >
                <LogOut className="w-4 h-4" />
                <span>خروج</span>
              </button>
            </div>

          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>نوبت‌های من ({userAppointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('vouchers')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'vouchers'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>معرفی‌نامه‌های بیمه تکمیلی ({vouchers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'doctors'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>پزشکان نشان‌شده ({savedDoctors.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('edit')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'edit'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>ویرایش اطلاعات پرونده</span>
          </button>
        </div>

        {/* 1. Appointments List Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            {userAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {userAppointments.map((app) => (
                  <div
                    key={app.trackingCode}
                    className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Top Bar: Tracking code & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500 font-medium">کد رهگیری نوبت:</span>
                          <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                            {app.trackingCode}
                          </span>
                        </div>

                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                            app.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : app.status === 'cancelled'
                              ? 'bg-red-50 text-red-800 border border-red-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {app.status === 'confirmed' ? 'نوبت تایید شده' : app.status === 'cancelled' ? 'لغو شده' : 'در انتظار بررسی'}
                        </span>
                      </div>

                      {/* Doctor & Clinic */}
                      <div className="space-y-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {app.doctorName}
                        </h3>
                        <span className="text-xs text-blue-600 block">
                          {app.doctorSpecialty}
                        </span>

                        <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                          <div className="flex items-center gap-1.5 font-bold text-slate-900">
                            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>زمان حضور در مطب: {app.date} - ساعت {app.timeSlot}</span>
                          </div>

                          <div className="flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{app.clinicAddress}</span>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 text-[11px]">
                            <span className="text-slate-500">فرانشیز پرداختی بیمار:</span>
                            <span className="font-bold text-emerald-700">
                              {app.patientPayable.toLocaleString('fa-IR')} تومان ({app.supplementaryInsurance})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <button
                        onClick={() => handlePrintSlip(app)}
                        className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>چاپ فاکتور نوبت</span>
                      </button>

                      {app.status !== 'cancelled' && (
                        confirmingCancelCode === app.trackingCode ? (
                          <div className="flex items-center gap-1.5 animate-fadeIn">
                            <button
                              onClick={() => {
                                onCancelAppointment(app.trackingCode);
                                setConfirmingCancelCode(null);
                              }}
                              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
                            >
                              تایید لغو
                            </button>
                            <button
                              onClick={() => setConfirmingCancelCode(null)}
                              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-[11px] font-medium transition-colors cursor-pointer"
                            >
                              انصراف
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmingCancelCode(app.trackingCode)}
                            className="px-3.5 py-2 text-red-600 hover:bg-red-50 rounded-full text-xs font-semibold transition-colors cursor-pointer border border-red-200"
                          >
                            لغو نوبت
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center space-y-4">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">شما هنوز نوبتی ثبت نکرده‌اید</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  می‌توانید همین حالا نزدیک‌ترین نوبت را با متخصصان ارتوپد اصفهان رزرو نمایید.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  رزرو اولین نوبت
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. Pre-Auth Vouchers Tab */}
        {activeTab === 'vouchers' && (
          <div className="space-y-4">
            {vouchers.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs text-slate-500">شماره ارجاع و معرفی‌نامه:</span>
                    <span className="font-mono text-sm font-black text-slate-900 mr-2">
                      {v.issueNumber}
                    </span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تایید قطعی سامانه ساتا/رساد - بدون نیاز به پرداخت آزاد</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-slate-400 block mb-0.5">بیمارستان بستری:</span>
                    <strong className="text-slate-900 block">{v.hospitalName}</strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-slate-400 block mb-0.5">پزشک جراح:</span>
                    <strong className="text-slate-900 block">{v.doctorName}</strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-slate-400 block mb-0.5">سهم مصوب بیمه تکمیلی:</span>
                    <strong className="text-emerald-700 block tabular-nums">
                      {v.approvedInsuranceShare.toLocaleString('fa-IR')} تومان
                    </strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-slate-400 block mb-0.5">سهم خالص بیمار (فرانشیز):</span>
                    <strong className="text-blue-700 block tabular-nums">
                      {v.patientPayable.toLocaleString('fa-IR')} تومان
                    </strong>
                  </div>
                </div>

                <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 text-xs text-slate-700 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>عمل جراحی: <strong>{v.procedureName}</strong> (تشخیص: {v.diagnosis})</span>
                  <span className="font-mono text-slate-500">مهلت اعتبار: {v.validUntil}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Saved Doctors Tab */}
        {activeTab === 'doctors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {savedDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      {doc.avatarImage ? (
                        <img
                          src={doc.avatarImage}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        doc.avatarText
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {doc.name}
                      </h4>
                      <span className="text-xs text-slate-500 block truncate">
                        {doc.subSpecialty}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{doc.district}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-600 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{doc.nextAvailableSlot}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    پروفایل و نوبت‌دهی
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. Edit Profile Tab */}
        {activeTab === 'edit' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs max-w-2xl mx-auto space-y-6">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              ویرایش اطلاعات هویتی و بیمه‌ای
            </h2>

            {saveSuccess && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-2xl text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>اطلاعات پروفایل شما با موفقیت ذخیره شد.</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">نام و نام خانوادگی:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">شماره تماس:</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">کد ملی ۱۰ رقمی:</label>
                  <input
                    type="text"
                    required
                    value={nationalId}
                    onChange={(e) => setNationalId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">بیمه پایه:</label>
                  <select
                    value={primaryIns}
                    onChange={(e) => setPrimaryIns(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800"
                  >
                    <option value="tamin">تامین اجتماعی</option>
                    <option value="salamat">بیمه سلامت ایرانیان</option>
                    <option value="mosallah">خدمات درمانی نیروهای مسلح</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">بیمه تکمیلی:</label>
                  <select
                    value={suppIns}
                    onChange={(e) => setSuppIns(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800"
                  >
                    <option value="dana">بیمه دانا</option>
                    <option value="iran">بیمه ایران</option>
                    <option value="alborz">بیمه البرز</option>
                    <option value="asia">بیمه آسیا</option>
                    <option value="kosar">بیمه کوثر</option>
                    <option value="atiyeh">آتیه‌سازان حافظ</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors cursor-pointer shadow-xs mt-2"
              >
                ذخیره تغییرات پرونده
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
