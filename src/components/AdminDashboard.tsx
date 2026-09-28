import React, { useState } from 'react';
import {
  ShieldAlert,
  Users,
  Calendar,
  Building2,
  FileText,
  Settings,
  Plus,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  DollarSign,
  TrendingUp,
  Stethoscope,
  Hospital,
  Scan,
  LogOut,
  Edit,
  Trash2,
  Check,
  ShieldCheck,
  Phone,
  ChevronDown
} from 'lucide-react';
import { AdminUser, Doctor, AppointmentRecord, PreAuthVoucher } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';
import { ISFAHAN_HOSPITALS } from '../data/hospitalsData';
import { ISFAHAN_IMAGING_CENTERS } from '../data/imagingData';
import { InsuranceLogo } from './InsuranceLogo';

interface AdminDashboardProps {
  user: AdminUser;
  appointments: AppointmentRecord[];
  vouchers: PreAuthVoucher[];
  onUpdateAppointments: (updated: AppointmentRecord[]) => void;
  onLogout: () => void;
  onSelectDoctorProfile: (doctor: Doctor) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  user,
  appointments,
  vouchers,
  onUpdateAppointments,
  onLogout,
  onSelectDoctorProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'appointments' | 'vouchers' | 'centers' | 'settings'>('doctors');
  
  // Doctors management local state
  const [doctorsList, setDoctorsList] = useState<Doctor[]>(DOCTORS_DATA);
  const [doctorSearch, setDoctorSearch] = useState('');
  const [newDoctorModalOpen, setNewDoctorModalOpen] = useState(false);

  // New Doctor Form
  const [newDocName, setNewDocName] = useState('');
  const [newDocCode, setNewDocCode] = useState('');
  const [newDocSpec, setNewDocSpec] = useState('');
  const [newDocPhone, setNewDocPhone] = useState('');

  // Appointments Search & Filter
  const [appSearch, setAppSearch] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState<string>('all');

  // Stats calculation
  const totalAppointmentsCount = appointments.length;
  const confirmedCount = appointments.filter((a) => a.status === 'confirmed').length;
  const totalVoucherValue = vouchers.reduce((acc, v) => acc + v.tariffTotal, 0);

  // Filtered Doctors
  const filteredDoctors = doctorsList.filter((d) => {
    if (!doctorSearch.trim()) return true;
    const q = doctorSearch.toLowerCase();
    return d.name.toLowerCase().includes(q) || d.medicalCode.includes(q) || d.district.includes(q);
  });

  // Filtered Appointments
  const filteredAppointments = appointments.filter((a) => {
    if (appStatusFilter !== 'all' && a.status !== appStatusFilter) return false;
    if (appSearch.trim() !== '') {
      const q = appSearch.toLowerCase();
      return (
        a.patientName.toLowerCase().includes(q) ||
        a.trackingCode.toLowerCase().includes(q) ||
        a.phone.includes(q) ||
        a.doctorName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleUpdateAppStatus = (trackingCode: string, newStatus: AppointmentRecord['status']) => {
    const updated = appointments.map((a) =>
      a.trackingCode === trackingCode ? { ...a, status: newStatus } : a
    );
    onUpdateAppointments(updated);
  };

  const handleAddNewDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocName.trim() || !newDocCode.trim()) return;

    const newDoc: Doctor = {
      id: `doc-${Date.now()}`,
      name: newDocName.trim(),
      avatarText: newDocName.trim().slice(0, 3),
      medicalCode: newDocCode.trim(),
      title: 'متخصص جراحی استخوان و مفاصل',
      subSpecialty: newDocSpec.trim() || 'فوق تخصص ارتوپدی',
      specialtyTag: 'knee',
      experienceYears: 10,
      rating: 5.0,
      reviewCount: 1,
      address: 'اصفهان، خیابان شمس‌آبادی',
      district: 'خیابان شمس‌آبادی',
      city: 'اصفهان',
      hospitals: ['بیمارستان تخصصی سعدی'],
      acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran'],
      consultationFee: 300000,
      nextAvailableSlot: 'فردا - ساعت ۱۷:۰۰',
      phone: newDocPhone.trim() || '031-32200000',
      biography: 'پزشک ارتوپد مورد تایید سامانه وب‌کلینیک اصفهان.',
      services: ['ویزیت و معاینه تخصصی مفاصل', 'تزریقات غضروف‌ساز'],
      availableDays: ['شنبه', 'دوشنبه', 'چهارشنبه'],
    };

    setDoctorsList([newDoc, ...doctorsList]);
    setNewDoctorModalOpen(false);
    setNewDocName('');
    setNewDocCode('');
    setNewDocSpec('');
    setNewDocPhone('');
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50 text-slate-800 text-right min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
            
            {/* Admin Info */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-700 to-purple-800 text-white flex items-center justify-center text-2xl font-black shadow-md border-2 border-white shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-2xl font-black text-slate-900">
                    داشبورد جامع مدیریت کل وب‌کلینیک
                  </h1>
                  <span className="bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    دسترسی ریشه (Super Admin)
                  </span>
                </div>

                <div className="text-xs text-slate-600 font-medium">
                  {user.name} - ورود موفق: {user.lastLogin}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                  <span>وضعیت سرور: <strong className="text-emerald-700 font-bold font-sans">فعال و پایدار</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>اتصال به دیتابیس اصفهان: <strong className="text-emerald-700 font-bold font-sans">برقرار</strong></span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 self-stretch md:self-auto justify-end">
              <button
                onClick={() => setNewDoctorModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>افزودن پزشک جدید</span>
              </button>

              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-full text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
                title="خروج از پنل مدیریت"
              >
                <LogOut className="w-4 h-4" />
                <span>خروج</span>
              </button>
            </div>

          </div>

          {/* 4 Metric KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">پزشکان فعال سامانه:</span>
              <strong className="text-base sm:text-lg font-black text-slate-900 tabular-nums">
                {doctorsList.length} متخصص
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">کل نوبت‌های ثبت‌شده:</span>
              <strong className="text-base sm:text-lg font-black text-indigo-700 tabular-nums">
                {totalAppointmentsCount} نوبت ({confirmedCount} تایید)
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">مراکز درمانی و MRI:</span>
              <strong className="text-base sm:text-lg font-black text-blue-700 tabular-nums">
                {ISFAHAN_HOSPITALS.length + ISFAHAN_IMAGING_CENTERS.length} مرکز فعال
              </strong>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-500 block mb-1">گردش مالی معرفی‌نامه‌ها:</span>
              <strong className="text-base sm:text-lg font-black text-emerald-700 tabular-nums">
                {(totalVoucherValue / 1000000).toLocaleString('fa-IR')} میلیون تومان
              </strong>
            </div>
          </div>

        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'doctors'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>مدیریت پزشکان ({doctorsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>مدیریت نوبت‌های کل سامانه ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('vouchers')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'vouchers'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>معرفی‌نامه‌ها و تراکنش‌های بیمه ({vouchers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('centers')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'centers'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <Hospital className="w-4 h-4" />
            <span>بیمارستان‌ها و تصویربرداری</span>
          </button>
        </div>

        {/* 1. Doctors Tab */}
        {activeTab === 'doctors' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="جستجوی پزشک بر اساس نام یا نظام‌پزشکی..."
                  value={doctorSearch}
                  onChange={(e) => setDoctorSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-full pr-9 pl-4 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
              </div>

              <span className="text-xs text-slate-500">
                نمایش {filteredDoctors.length} پزشک فعال
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
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
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{doc.name}</h4>
                          <span className="text-xs text-slate-500 block">{doc.subSpecialty}</span>
                        </div>
                      </div>

                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        فعال
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">کد نظام پزشکی:</span>
                        <strong className="font-mono text-slate-800">{doc.medicalCode}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">تعرفه ویزیت:</span>
                        <strong className="text-emerald-700">{doc.consultationFee.toLocaleString('fa-IR')} تومان</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">منطقه مطب:</span>
                        <span className="text-slate-800">{doc.district}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDoctorProfile(doc)}
                      className="flex-1 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      مشاهده پروفایل پزشک
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs">
              <div className="relative w-full sm:w-80 flex items-center">
                <input
                  type="text"
                  placeholder="جستجو با نام بیمار، کد رهگیری، شماره تماس..."
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className="w-full h-11 sm:h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl pr-10 pl-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all text-right"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative flex items-center w-full sm:w-auto">
                <select
                  value={appStatusFilter}
                  onChange={(e) => setAppStatusFilter(e.target.value)}
                  className="w-full sm:w-auto h-11 sm:h-12 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl pr-4 pl-10 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all appearance-none cursor-pointer text-right"
                >
                  <option value="all">همه وضعیت‌ها</option>
                  <option value="confirmed">نوبت‌های تایید شده</option>
                  <option value="pending">در انتظار تایید</option>
                  <option value="cancelled">لغو شده</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden">
              <div className="divide-y divide-slate-100">
                {filteredAppointments.map((app) => (
                  <div
                    key={app.trackingCode}
                    className="p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-sm text-slate-900">{app.patientName}</span>
                        <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                          رهگیری: {app.trackingCode}
                        </span>
                        <span className="font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                          {app.phone}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-slate-600">
                        <span className="font-bold text-indigo-700">پزشک: {app.doctorName}</span>
                        <span aria-hidden="true">·</span>
                        <span>زمان: {app.date} - ساعت {app.timeSlot}</span>
                        <span aria-hidden="true">·</span>
                        <span>بیمه: {app.supplementaryInsurance}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          app.status === 'confirmed'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : app.status === 'completed'
                            ? 'bg-blue-50 text-blue-800 border border-blue-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        {app.status === 'confirmed' ? 'تایید شده' : app.status === 'completed' ? 'تکمیل شده' : 'لغو شده'}
                      </span>

                      {app.status === 'pending' && (
                        <button
                          onClick={() => handleUpdateAppStatus(app.trackingCode, 'confirmed')}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold"
                        >
                          تایید نوبت
                        </button>
                      )}

                      {app.status !== 'cancelled' && (
                        <button
                          onClick={() => handleUpdateAppStatus(app.trackingCode, 'cancelled')}
                          className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-full text-xs font-semibold border border-red-200"
                        >
                          لغو
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Vouchers Tab */}
        {activeTab === 'vouchers' && (
          <div className="space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                لیست معرفی‌نامه‌های آنلاین صادر شده توسط سامانه
              </h3>

              <div className="space-y-3">
                {vouchers.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{v.patientName}</span>
                        <span className="font-mono text-slate-500">({v.issueNumber})</span>
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                          {v.insuranceName}
                        </span>
                      </div>
                      <div className="text-slate-600">
                        عمل: <strong>{v.procedureName}</strong> - بیمارستان: {v.hospitalName} ({v.doctorName})
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <div className="text-slate-400 text-[11px]">سهم بیمه تاییدشده:</div>
                      <div className="font-bold text-emerald-700 text-sm tabular-nums">
                        {v.approvedInsuranceShare.toLocaleString('fa-IR')} تومان
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. Centers Tab */}
        {activeTab === 'centers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Hospital className="w-5 h-5 text-blue-600" />
                <span>بیمارستان‌های ارتوپدی همکار اصفهان ({ISFAHAN_HOSPITALS.length})</span>
              </h3>
              <div className="space-y-2.5">
                {ISFAHAN_HOSPITALS.map((h) => (
                  <div key={h.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs">
                    <div>
                      <strong className="block text-slate-900">{h.name}</strong>
                      <span className="text-slate-500 text-[11px]">{h.district}</span>
                    </div>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                      {h.orthopedicBeds} تخت فعال
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Scan className="w-5 h-5 text-blue-600" />
                <span>مراکز تصویربرداری و MRI فعال ({ISFAHAN_IMAGING_CENTERS.length})</span>
              </h3>
              <div className="space-y-2.5">
                {ISFAHAN_IMAGING_CENTERS.map((img) => (
                  <div key={img.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs">
                    <div>
                      <strong className="block text-slate-900">{img.name}</strong>
                      <span className="text-slate-500 text-[11px]">{img.teslaPower}</span>
                    </div>
                    {img.isOpenMri && (
                      <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-[10px]">
                        Open MRI
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add Doctor Modal */}
        {newDoctorModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-slate-900">افزودن پزشک متخصص جدید به سامانه</h3>
                <button
                  onClick={() => setNewDoctorModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddNewDoctor} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">نام کامل پزشک:</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: دکتر علیرضا میردامادی"
                    value={newDocName}
                    onChange={(e) => setNewDocName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">شماره نظام پزشکی:</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: ۵۴۲۱۰"
                    value={newDocCode}
                    onChange={(e) => setNewDocCode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-mono text-left"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">فوق‌تخصص / گرایش بالینی:</label>
                  <input
                    type="text"
                    placeholder="مثال: فلوشیپ تعویض مفصل زانو"
                    value={newDocSpec}
                    onChange={(e) => setNewDocSpec(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">شماره تماس مطب:</label>
                  <input
                    type="tel"
                    placeholder="031-3220xxxx"
                    value={newDocPhone}
                    onChange={(e) => setNewDocPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-mono text-left"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs shadow-xs mt-2"
                >
                  ثبت و فعال‌سازی پزشک
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
