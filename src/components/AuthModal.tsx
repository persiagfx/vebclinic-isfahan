import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Stethoscope,
  ShieldAlert,
  Phone,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  KeyRound,
  LogIn,
  UserPlus,
  ShieldCheck
} from 'lucide-react';
import { AuthUser, PatientUser, DoctorUser, AdminUser, UserRole } from '../types';
import { DEMO_PATIENT, DEMO_DOCTOR, DEMO_ADMIN } from '../data/authData';
import { DOCTORS_DATA } from '../data/doctorsData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AuthUser) => void;
  initialRole?: UserRole;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialRole = 'patient',
}) => {
  const [activeRole, setActiveRole] = useState<UserRole>(initialRole);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [isDoctorRegisterMode, setIsDoctorRegisterMode] = useState(false);

  // Sync role when modal opens or initialRole changes
  useEffect(() => {
    if (isOpen) {
      setActiveRole(initialRole);
      setErrorMessage('');
    }
  }, [isOpen, initialRole]);

  // Patient inputs
  const [patientPhone, setPatientPhone] = useState('09131112233');
  const [patientName, setPatientName] = useState('احمد رضایی');
  const [patientNationalId, setPatientNationalId] = useState('1289944321');
  const [patientPrimaryIns, setPatientPrimaryIns] = useState('tamin');
  const [patientSuppIns, setPatientSuppIns] = useState('dana');

  // Doctor inputs (existing doctor login)
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-barzegar');
  const [doctorMedicalCode, setDoctorMedicalCode] = useState('۴۳۲۹۱');
  const [doctorPhone, setDoctorPhone] = useState('09132223344');
  const [doctorPassword, setDoctorPassword] = useState('123456');

  // Doctor registration inputs
  const [newDoctorName, setNewDoctorName] = useState('');
  const [newDoctorCode, setNewDoctorCode] = useState('');
  const [newDoctorSpec, setNewDoctorSpec] = useState('فوق تخصص جراحی زانو و آرتروسکوپی');
  const [newDoctorClinicPhone, setNewDoctorClinicPhone] = useState('031-32200000');

  // Admin inputs
  const [adminUsername, setAdminUsername] = useState('admin');
  const [adminPassword, setAdminPassword] = useState('admin123');

  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientPhone.trim()) {
      setErrorMessage('لطفاً شماره موبایل را وارد کنید.');
      return;
    }

    const patientUser: PatientUser = {
      id: `pat-${Date.now()}`,
      name: patientName.trim() || 'کاربر گرامی',
      phone: patientPhone.trim(),
      nationalId: patientNationalId.trim() || '1280000000',
      insuranceType: patientPrimaryIns,
      supplementaryInsurance: patientSuppIns,
      policyNumber: 'DN-994201',
      role: 'patient',
      createdAt: '۱۴۰۵/۰۱/۰۱',
      savedDoctorIds: ['dr-barzegar', 'dr-masoudi'],
    };

    onLoginSuccess(patientUser);
    onClose();
  };

  const handleDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isDoctorRegisterMode) {
      if (!newDoctorName.trim() || !newDoctorCode.trim()) {
        setErrorMessage('لطفاً نام پزشک و شماره نظام پزشکی را وارد نمایید.');
        return;
      }

      const registeredDoctor: DoctorUser = {
        id: `doc-${Date.now()}`,
        doctorId: `dr-reg-${Date.now()}`,
        name: newDoctorName.trim(),
        medicalCode: newDoctorCode.trim(),
        phone: newDoctorClinicPhone.trim() || doctorPhone,
        specialty: newDoctorSpec.trim() || 'متخصص ارتوپدی',
        role: 'doctor',
        consultationFee: 320000,
        availableDays: ['شنبه', 'دوشنبه', 'چهارشنبه'],
        status: 'active',
      };

      onLoginSuccess(registeredDoctor);
      onClose();
      return;
    }

    const docData = DOCTORS_DATA.find((d) => d.id === selectedDoctorId) || DOCTORS_DATA[0];

    const doctorUser: DoctorUser = {
      id: `doc-${docData.id}`,
      doctorId: docData.id,
      name: docData.name,
      medicalCode: docData.medicalCode || doctorMedicalCode,
      phone: doctorPhone || docData.phone,
      specialty: docData.subSpecialty,
      role: 'doctor',
      consultationFee: docData.consultationFee,
      availableDays: docData.availableDays,
      status: 'active',
    };

    onLoginSuccess(doctorUser);
    onClose();
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername.trim() === 'admin' && adminPassword === 'admin123') {
      onLoginSuccess(DEMO_ADMIN);
      onClose();
    } else {
      setErrorMessage('نام کاربری یا رمز عبور اشتباه است. (دمو: admin / admin123)');
    }
  };

  const handleQuickDemoPatient = () => {
    onLoginSuccess(DEMO_PATIENT);
    onClose();
  };

  const handleQuickDemoDoctor = (docId: string = 'dr-barzegar') => {
    const docData = DOCTORS_DATA.find((d) => d.id === docId) || DOCTORS_DATA[0];
    const docUser: DoctorUser = {
      id: `doc-${docData.id}`,
      doctorId: docData.id,
      name: docData.name,
      medicalCode: docData.medicalCode,
      phone: docData.phone,
      specialty: docData.subSpecialty,
      role: 'doctor',
      consultationFee: docData.consultationFee,
      availableDays: docData.availableDays,
      status: 'active',
    };
    onLoginSuccess(docUser);
    onClose();
  };

  const handleQuickDemoAdmin = () => {
    onLoginSuccess(DEMO_ADMIN);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 text-right">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200/90 space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <LogIn className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                ورود به درگاه هوشمند وب‌کلینیک
              </h2>
              <span className="text-xs text-slate-500">
                پرتال یکپارچه بیماران، پزشکان و مدیریت سامانه
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Role Switcher Pills */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/60">
          <button
            type="button"
            onClick={() => {
              setActiveRole('patient');
              setErrorMessage('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'patient'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>بیمار / مراجع</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole('doctor');
              setErrorMessage('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'doctor'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>پزشک متخصص</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole('admin');
              setErrorMessage('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'admin'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>مدیر سامانه</span>
          </button>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 1. PATIENT FORM */}
        {activeRole === 'patient' && (
          <div className="space-y-4">
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100/80 flex items-center justify-between text-xs">
              <span className="text-blue-900 font-semibold">تست سریع با اکانت پیش‌فرض:</span>
              <button
                type="button"
                onClick={handleQuickDemoPatient}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
              >
                ورود فوری بیمار (احمد رضایی)
              </button>
            </div>

            <form onSubmit={handlePatientSubmit} className="space-y-3.5 text-xs">
              {isRegisterMode && (
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="مثال: احمد رضایی"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  شماره موبایل:
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="0913xxxxxxx"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-4 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              {isRegisterMode && (
                <>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      کد ملی بیمار:
                    </label>
                    <input
                      type="text"
                      required
                      value={patientNationalId}
                      onChange={(e) => setPatientNationalId(e.target.value)}
                      placeholder="۱۰ رقم کد ملی"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        بیمه پایه:
                      </label>
                      <select
                        value={patientPrimaryIns}
                        onChange={(e) => setPatientPrimaryIns(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                      >
                        <option value="tamin">تامین اجتماعی</option>
                        <option value="salamat">بیمه سلامت</option>
                        <option value="mosallah">نیروهای مسلح</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        بیمه تکمیلی:
                      </label>
                      <select
                        value={patientSuppIns}
                        onChange={(e) => setPatientSuppIns(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                      >
                        <option value="dana">بیمه دانا</option>
                        <option value="iran">بیمه ایران</option>
                        <option value="alborz">بیمه البرز</option>
                        <option value="asia">بیمه آسیا</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors cursor-pointer shadow-xs text-center mt-2"
              >
                {isRegisterMode ? 'ثبت‌نام و ورود به پروفایل بیمار' : 'ورود با شماره موبایل و کد تایید'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsRegisterMode(!isRegisterMode)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  {isRegisterMode ? 'قبلاً ثبت‌نام کرده‌اید؟ ورود سریع' : 'حساب کاربری ندارید؟ ثبت‌نام رایگان بیمار'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 2. DOCTOR FORM */}
        {activeRole === 'doctor' && (
          <div className="space-y-4">
            <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100/80 space-y-2 text-xs">
              <span className="text-emerald-900 font-bold block">ورود فوری پزشک جهت ارزیابی پنل مطب:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickDemoDoctor('dr-barzegar')}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
                >
                  دکتر برزگر (تعویض زانو)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoDoctor('dr-masoudi')}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
                >
                  دکتر مسعودی (آرتروسکوپی)
                </button>
              </div>
            </div>

            <form onSubmit={handleDoctorSubmit} className="space-y-3.5 text-xs">
              {isDoctorRegisterMode ? (
                /* Doctor Registration Mode */
                <>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      نام و نام خانوادگی پزشک:
                    </label>
                    <input
                      type="text"
                      required
                      value={newDoctorName}
                      onChange={(e) => setNewDoctorName(e.target.value)}
                      placeholder="مثال: دکتر علیرضا نادری"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      شماره نظام پزشکی:
                    </label>
                    <input
                      type="text"
                      required
                      value={newDoctorCode}
                      onChange={(e) => setNewDoctorCode(e.target.value)}
                      placeholder="۵ رقمی نظام پزشکی"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      تخصص و فوق تخصص جراحی:
                    </label>
                    <input
                      type="text"
                      required
                      value={newDoctorSpec}
                      onChange={(e) => setNewDoctorSpec(e.target.value)}
                      placeholder="فوق تخصص جراحی زانو، لگن، ستون فقرات..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      تلفن مطب یا هماهنگی منشی:
                    </label>
                    <input
                      type="tel"
                      required
                      value={newDoctorClinicPhone}
                      onChange={(e) => setNewDoctorClinicPhone(e.target.value)}
                      placeholder="۰۳۱-۳xxxxxxx"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono"
                    />
                  </div>
                </>
              ) : (
                /* Existing Doctor Selection */
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    انتخاب پزشک متخصص عضو سامانه:
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-medium"
                  >
                    {DOCTORS_DATA.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} - نظام پزشکی: {d.medicalCode}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  شماره موبایل پزشک یا منشی مطب:
                </label>
                <input
                  type="tel"
                  required
                  value={doctorPhone}
                  onChange={(e) => setDoctorPhone(e.target.value)}
                  placeholder="0913xxxxxxx"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  رمز عبور پنل مطب:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={doctorPassword}
                    onChange={(e) => setDoctorPassword(e.target.value)}
                    placeholder="••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-4 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors cursor-pointer shadow-xs text-center mt-2"
              >
                {isDoctorRegisterMode ? 'ثبت‌نام پزشک و ورود به پنل مطب' : 'ورود به پنل مدیریت مطب و نوبت‌ها'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsDoctorRegisterMode(!isDoctorRegisterMode)}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer"
                >
                  {isDoctorRegisterMode
                    ? 'پزشک عضو سامانه هستید؟ ورود به پنل'
                    : 'پزشک جدید هستید؟ ثبت‌نام و فعال‌سازی پنل مطب'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3. ADMIN FORM */}
        {activeRole === 'admin' && (
          <div className="space-y-4">
            <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100/80 flex items-center justify-between text-xs">
              <span className="text-indigo-900 font-semibold">تست سریع با حساب سرپرست سیستم:</span>
              <button
                type="button"
                onClick={handleQuickDemoAdmin}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
              >
                ورود سریع به پنل مدیریت کل
              </button>
            </div>

            <form onSubmit={handleAdminSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  نام کاربری مدیر سامانه:
                </label>
                <input
                  type="text"
                  required
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">پیش‌فرض: admin</span>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  رمز عبور امنیتی سرپرست:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-4 py-2.5 text-slate-800 font-mono text-left focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  />
                  <KeyRound className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">پیش‌فرض: admin123</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-colors cursor-pointer shadow-xs text-center mt-2"
              >
                ورود به داشبورد جامع مدیریت وب‌کلینیک
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
