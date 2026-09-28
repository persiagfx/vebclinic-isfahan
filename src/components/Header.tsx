import React, { useState } from 'react';
import { 
  Heart, Search, Phone, Moon, Sun, User, Menu, X, 
  ChevronDown, Stethoscope, Building2, ShieldCheck, Activity, FileText,
  LogOut, ShieldAlert, CheckCircle2, LogIn, Calendar, Sparkles, UserCheck
} from 'lucide-react';
import { AuthUser, UserRole } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onOpenTeleradiology: () => void;
  currentUser?: AuthUser | null;
  onOpenAuth: (role?: UserRole) => void;
  onOpenProfile: () => void;
  onLogout: () => void;
  onQuickSwitchRole?: (role: UserRole) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenTracker,
  onOpenTeleradiology,
  currentUser,
  onOpenAuth,
  onOpenProfile,
  onLogout,
  onQuickSwitchRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setSpecialtiesOpen(false);
    setUserDropdownOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('doctors');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-2 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-200/80 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3">
          
          {/* Right Section: Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-hidden shrink-0 select-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 border border-blue-100 shadow-2xs group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-red-500 fill-red-500/20" strokeWidth={2.2} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black text-blue-600 font-mono tracking-tighter mt-0.5">
                  ✚
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                وب‌کلینیک
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold text-blue-600 font-sans tracking-wide bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/80">
                Yeb Clinic
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Clean pill active states) */}
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto text-xs font-semibold text-slate-600 lg:flex 2xl:gap-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              صفحه اصلی
            </button>

            <button
              onClick={() => handleNavClick('doctors')}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'doctors'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              پزشکان
            </button>

            <button
              onClick={() => handleNavClick('transit')}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'transit' || activeTab === 'hospitals'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              مراکز درمانی
            </button>

            <button
              onClick={() => handleNavClick('insurances')}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'insurances'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              بیمه‌ها
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'blog'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              بلاگ
            </button>

            {/* Specialties & Tools dropdown */}
            <div className="relative">
              <button
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  specialtiesOpen || ['implants', 'rehab', 'triage', 'surgery-cost', 'imaging', 'emergency'].includes(activeTab)
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>تخصص‌ها</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {specialtiesOpen && (
                <div 
                  className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 text-right text-xs"
                  onMouseLeave={() => setSpecialtiesOpen(false)}
                >
                  <button
                    onClick={() => {
                      handleNavClick('home');
                      setTimeout(() => {
                        document.getElementById('specialties-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full text-right px-4 py-2.5 hover:bg-blue-50/70 font-bold text-blue-700 flex items-center justify-between whitespace-nowrap cursor-pointer"
                  >
                    <span>مشاهده تمام تخصص‌ها و تعرفه‌ها</span>
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={() => handleNavClick('surgery-cost')}
                    className="w-full text-right px-4 py-2.5 hover:bg-blue-50/70 font-medium text-slate-700 hover:text-blue-700 flex items-center justify-between whitespace-nowrap cursor-pointer"
                  >
                    <span>محاسبه هزینه جراحی و پروتز</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">هوشمند</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('imaging')}
                    className="w-full text-right px-4 py-2.5 hover:bg-blue-50/70 font-medium text-slate-700 hover:text-blue-700 flex items-center justify-between whitespace-nowrap cursor-pointer"
                  >
                    <span>مراکز تصویربرداری و MRI</span>
                    <Activity className="w-4 h-4 text-blue-500" />
                  </button>
                  <button
                    onClick={() => handleNavClick('emergency')}
                    className="w-full text-right px-4 py-2.5 hover:bg-red-50/70 font-bold text-red-700 flex items-center justify-between whitespace-nowrap cursor-pointer"
                  >
                    <span>اورژانس شکستگی و تروما</span>
                    <span className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full">۲۴ ساعته</span>
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={() => {
                      onOpenTeleradiology();
                      setSpecialtiesOpen(false);
                    }}
                    className="w-full text-right px-4 py-2.5 hover:bg-blue-50 font-bold text-blue-600 flex items-center justify-between whitespace-nowrap cursor-pointer"
                  >
                    <span>تفسیر آنلاین ام‌آر‌آی</span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">آنلاین</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-full whitespace-nowrap text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            >
              تماس با ما
            </button>

            <button
              onClick={() => {
                const footer = document.querySelector('footer');
                footer?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-full whitespace-nowrap text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            >
              درباره ما
            </button>
          </nav>

          {/* Direct Phone Number Pill */}
          <a
            href="tel:0218801010"
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all cursor-pointer shrink-0 shadow-2xs font-mono"
            title="تماس فوری با رزرو نوبت"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span className="font-sans text-[11px] text-emerald-900">نوبت‌دهی:</span>
            <span>۰۲۱۸۸۰۱۰۱۰</span>
          </a>

          {/* Search Pill Input (Responsive) */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden 2xl:flex items-center relative w-40 shrink-0"
          >
            <input
              type="text"
              placeholder="جستجوی پزشک..."
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-800 placeholder:text-slate-400 rounded-full pr-8 pl-3 py-1.5 text-xs border border-slate-200/90 focus:outline-hidden focus:ring-1 focus:ring-blue-500 transition-all text-right font-medium"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
          </form>

          {/* Left Controls: Quick Role Switcher, Profile/Auth, Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Quick Demo Role Switcher for seamless testing */}
            <div className="hidden md:flex items-center bg-slate-100/80 p-0.5 rounded-full border border-slate-200/80 text-[11px]">
              <button
                type="button"
                onClick={() => onQuickSwitchRole?.('patient')}
                title="مشاهده پرتال بیمار (احمد رضایی)"
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  currentUser?.role === 'patient'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                بیمار
              </button>
              <button
                type="button"
                onClick={() => onQuickSwitchRole?.('doctor')}
                title="مشاهده پنل پزشک (دکتر برزگر)"
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  currentUser?.role === 'doctor'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                پزشک
              </button>
              <button
                type="button"
                onClick={() => onQuickSwitchRole?.('admin')}
                title="مشاهده داشبورد مدیریت کل"
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  currentUser?.role === 'admin'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-indigo-700'
                }`}
              >
                ادمین
              </button>
            </div>

            {/* Dark Mode Icon Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer shrink-0"
              aria-label="تغییر حالت تم"
              title="تغییر تم"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
            </button>

            {/* USER LOGGED IN: Profile pill with Dropdown */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer border ${
                    currentUser.role === 'patient'
                      ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                      : currentUser.role === 'doctor'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                      : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-black ${
                    currentUser.role === 'patient'
                      ? 'bg-blue-600'
                      : currentUser.role === 'doctor'
                      ? 'bg-emerald-600'
                      : 'bg-indigo-600'
                  }`}>
                    {currentUser.role === 'patient' ? (
                      currentUser.name[0] || 'ب'
                    ) : currentUser.role === 'doctor' ? (
                      <Stethoscope className="w-3 h-3" />
                    ) : (
                      <ShieldAlert className="w-3 h-3" />
                    )}
                  </div>

                  <span className="max-w-[90px] sm:max-w-[120px] truncate">
                    {currentUser.name}
                  </span>

                  <span className={`hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded-md ${
                    currentUser.role === 'patient'
                      ? 'bg-blue-200/70 text-blue-900'
                      : currentUser.role === 'doctor'
                      ? 'bg-emerald-200/70 text-emerald-900'
                      : 'bg-indigo-200/70 text-indigo-900'
                  }`}>
                    {currentUser.role === 'patient' ? 'بیمار' : currentUser.role === 'doctor' ? 'پزشک' : 'مدیر'}
                  </span>

                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                {/* Profile Dropdown Menu */}
                {userDropdownOpen && (
                  <div 
                    className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 text-right text-xs space-y-1"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    {/* User Summary Header */}
                    <div className="px-4 py-2 border-b border-slate-100 mb-1">
                      <span className="font-bold text-slate-900 block truncate">{currentUser.name}</span>
                      <span className="text-[11px] text-slate-500">
                        {currentUser.role === 'patient'
                          ? `بیمار · موبایل: ${currentUser.phone}`
                          : currentUser.role === 'doctor'
                          ? `پزشک · کدنظام: ${currentUser.medicalCode}`
                          : 'مدیر ارشد سامانه وب‌کلینیک'}
                      </span>
                    </div>

                    {/* Role-Specific Actions */}
                    {currentUser.role === 'patient' && (
                      <>
                        <button
                          onClick={() => handleNavClick('patient-profile')}
                          className="w-full text-right px-4 py-2 hover:bg-blue-50 text-blue-700 font-bold flex items-center gap-2 cursor-pointer"
                        >
                          <User className="w-4 h-4 text-blue-600" />
                          <span>پروفایل من و پیگیری نوبت‌ها</span>
                        </button>
                        <button
                          onClick={() => {
                            onOpenTracker();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-right px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2 cursor-pointer"
                        >
                          <FileText className="w-4 h-4 text-slate-500" />
                          <span>استعلام معرفی‌نامه با کد رهگیری</span>
                        </button>
                        <button
                          onClick={() => {
                            onOpenBooking();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-right px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2 cursor-pointer"
                        >
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span>رزرو نوبت پزشک جدید</span>
                        </button>
                      </>
                    )}

                    {currentUser.role === 'doctor' && (
                      <>
                        <button
                          onClick={() => handleNavClick('doctor-dashboard')}
                          className="w-full text-right px-4 py-2 hover:bg-emerald-50 text-emerald-800 font-bold flex items-center gap-2 cursor-pointer"
                        >
                          <Stethoscope className="w-4 h-4 text-emerald-600" />
                          <span>پنل اختصاصی مطب و نوبت‌های من</span>
                        </button>
                        <button
                          onClick={() => {
                            handleNavClick('doctor-profile');
                          }}
                          className="w-full text-right px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2 cursor-pointer"
                        >
                          <Activity className="w-4 h-4 text-slate-500" />
                          <span>مشاهده صفحه عمومی من در سایت</span>
                        </button>
                      </>
                    )}

                    {currentUser.role === 'admin' && (
                      <>
                        <button
                          onClick={() => handleNavClick('admin-dashboard')}
                          className="w-full text-right px-4 py-2 hover:bg-indigo-50 text-indigo-800 font-bold flex items-center gap-2 cursor-pointer"
                        >
                          <ShieldAlert className="w-4 h-4 text-indigo-600" />
                          <span>داشبورد جامع مدیریت کل سامانه</span>
                        </button>
                        <button
                          onClick={() => handleNavClick('admin-dashboard')}
                          className="w-full text-right px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2 cursor-pointer"
                        >
                          <UserCheck className="w-4 h-4 text-slate-500" />
                          <span>مدیریت پزشکان، نوبت‌ها و استعلام بیمه</span>
                        </button>
                      </>
                    )}

                    <div className="border-t border-slate-100 my-1 pt-1">
                      {/* Role switcher menu */}
                      <div className="px-4 py-1.5 text-[11px] text-slate-400 font-semibold">
                        جابجایی سریع نقش آزمایشی:
                      </div>
                      <div className="grid grid-cols-3 gap-1 px-3 pb-1">
                        <button
                          onClick={() => {
                            onQuickSwitchRole?.('patient');
                            setUserDropdownOpen(false);
                          }}
                          className="py-1 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-center text-[10px] font-bold border border-slate-200 cursor-pointer"
                        >
                          بیمار
                        </button>
                        <button
                          onClick={() => {
                            onQuickSwitchRole?.('doctor');
                            setUserDropdownOpen(false);
                          }}
                          className="py-1 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-lg text-center text-[10px] font-bold border border-slate-200 cursor-pointer"
                        >
                          پزشک
                        </button>
                        <button
                          onClick={() => {
                            onQuickSwitchRole?.('admin');
                            setUserDropdownOpen(false);
                          }}
                          className="py-1 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-lg text-center text-[10px] font-bold border border-slate-200 cursor-pointer"
                        >
                          ادمین
                        </button>
                      </div>

                      <div className="border-t border-slate-100 my-1" />

                      <button
                        onClick={() => {
                          onLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-right px-4 py-2 hover:bg-red-50 text-red-600 font-bold flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>خروج از حساب</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* USER LOGGED OUT: Login / Register Button */
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onOpenAuth('patient')}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full transition-all shadow-xs cursor-pointer whitespace-nowrap"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>ورود / ثبت‌نام</span>
                </button>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 text-right space-y-3 max-h-[85vh] overflow-y-auto">
          
          {/* Active User Card on Mobile */}
          {currentUser ? (
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">{currentUser.name}</span>
                <span className="text-[11px] text-slate-500">
                  {currentUser.role === 'patient'
                    ? 'پرتال بیمار'
                    : currentUser.role === 'doctor'
                    ? 'پنل پزشک متخصص'
                    : 'مدیریت کل سامانه'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentUser.role === 'patient') handleNavClick('patient-profile');
                    else if (currentUser.role === 'doctor') handleNavClick('doctor-dashboard');
                    else handleNavClick('admin-dashboard');
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold"
                >
                  مشاهده پنل
                </button>
                <button
                  onClick={onLogout}
                  className="p-1.5 text-red-600 hover:bg-red-50 rounded-full"
                  title="خروج"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onOpenAuth('patient');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 bg-blue-600 text-white rounded-2xl text-xs font-bold text-center"
              >
                ورود بیمار
              </button>
              <button
                onClick={() => {
                  onOpenAuth('doctor');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 bg-emerald-600 text-white rounded-2xl text-xs font-bold text-center"
              >
                ورود پزشک
              </button>
              <button
                onClick={() => {
                  onOpenAuth('admin');
                  setMobileMenuOpen(false);
                }}
                className="py-2 px-3 bg-indigo-600 text-white rounded-2xl text-xs font-bold text-center"
              >
                ادمین
              </button>
            </div>
          )}

          {/* Quick role test switcher on mobile */}
          <div className="bg-slate-100 p-2 rounded-2xl flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-600">تغییر سریع نقش:</span>
            <div className="flex gap-1">
              <button
                onClick={() => {
                  onQuickSwitchRole?.('patient');
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 bg-white rounded-lg font-bold text-blue-700 shadow-2xs"
              >
                بیمار
              </button>
              <button
                onClick={() => {
                  onQuickSwitchRole?.('doctor');
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 bg-white rounded-lg font-bold text-emerald-700 shadow-2xs"
              >
                پزشک
              </button>
              <button
                onClick={() => {
                  onQuickSwitchRole?.('admin');
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 bg-white rounded-lg font-bold text-indigo-700 shadow-2xs"
              >
                ادمین
              </button>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="نام پزشک، مرکز، تخصص..."
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
              className="w-full bg-slate-50 text-slate-800 rounded-full pr-9 pl-4 py-2 text-xs border border-slate-200"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          </form>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'home' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            صفحه اصلی
          </button>
          <button
            onClick={() => handleNavClick('doctors')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'doctors' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            پزشکان ارتوپد اصفهان
          </button>
          <button
            onClick={() => handleNavClick('insurances')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'insurances' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            بیمه‌ها و استعلام سهم درمان
          </button>
          <button
            onClick={() => handleNavClick('surgery-cost')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'surgery-cost' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            محاسبه هزینه جراحی و پروتز
          </button>
          <button
            onClick={() => handleNavClick('imaging')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'imaging' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            مراکز تصویربرداری و MRI اصفهان
          </button>
          <button
            onClick={() => handleNavClick('emergency')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap ${
              activeTab === 'emergency' ? 'bg-red-50 text-red-600' : 'text-red-700 hover:bg-red-50/50'
            }`}
          >
            اورژانس شکستگی و تروما (۲۴ ساعته)
          </button>
          <button
            onClick={() => handleNavClick('transit')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'transit' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            مراکز درمانی و راهنمای تردد
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-right px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap ${
              activeTab === 'blog' ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            دانشنامه و بلاگ
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold text-center shadow-xs cursor-pointer whitespace-nowrap"
            >
              نوبت‌دهی آنلاین
            </button>
            <button
              onClick={() => {
                onOpenTracker();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold text-center whitespace-nowrap"
            >
              پیگیری نوبت و معرفی‌نامه
            </button>
          </div>
        </div>
      )}
    </>
  );
};
