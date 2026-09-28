import React, { useState, useEffect } from 'react';
import { Search, CheckCircle2, Clock, MapPin, Calendar, Phone, AlertCircle, X, Trash2 } from 'lucide-react';
import { AppointmentRecord } from '../types';

interface AppointmentTrackerModalProps {
  onClose: () => void;
  onBookNew: () => void;
}

export const AppointmentTrackerModal: React.FC<AppointmentTrackerModalProps> = ({
  onClose,
  onBookNew,
}) => {
  const [query, setQuery] = useState('');
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [searchDone, setSearchDone] = useState(false);
  const [matchedAppointments, setMatchedAppointments] = useState<AppointmentRecord[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('vebclinic_appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      } else {
        // Sample default record for demonstration
        const sample: AppointmentRecord = {
          trackingCode: 'VEB-481920',
          doctorName: 'دکتر محمدرضا برزگر',
          doctorSpecialty: 'فوق تخصص تعویض مفاصل لگن و زانو',
          clinicAddress: 'اصفهان، خیابان شمس‌آبادی، جنب بیمارستان سینا، مجتمع آراد',
          patientName: 'علی رضایی',
          nationalId: '۱۲۸۹۴۵۶۷۸۱',
          phone: '۰۹۱۳۱۲۳۴۵۶۷',
          date: 'دوشنبه ۱۴۰۵/۰۱/۲۰',
          timeSlot: '۱۷:۳۰',
          serviceType: 'ویزیت حضوری و معاینه زانو',
          primaryInsurance: 'بیمه تامین اجتماعی',
          supplementaryInsurance: 'بیمه دانا (معرفی‌نامه آنلاین)',
          estimatedFee: 320000,
          patientPayable: 32000,
          status: 'confirmed',
          createdAt: '۱۴۰۵/۰۱/۱۵',
        };
        setAppointments([sample]);
      }
    } catch (e) {
      // fallback
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const trimmed = query.trim().toLowerCase();
    const results = appointments.filter(
      (a) =>
        a.trackingCode.toLowerCase().includes(trimmed) ||
        a.phone.includes(trimmed) ||
        a.nationalId.includes(trimmed)
    );

    setMatchedAppointments(results);
    setSearchDone(true);
  };

  const handleCancel = (trackingCode: string) => {
    const updated = appointments.map((a) =>
      a.trackingCode === trackingCode ? { ...a, status: 'cancelled' as const } : a
    );
    setAppointments(updated);
    setMatchedAppointments((prev) =>
      prev.map((a) =>
        a.trackingCode === trackingCode ? { ...a, status: 'cancelled' as const } : a
      )
    );
    try {
      localStorage.setItem('vebclinic_appointments', JSON.stringify(updated));
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 text-right space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
          <div className="text-right">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              پیگیری نوبت و استعلام معرفی‌نامه آنلاین
            </h3>
            <span className="text-xs text-slate-500">
              مشاهده وضعیت نوبت، تغییر زمان یا لغو رزرو
            </span>
          </div>
        </div>

        {/* Search input */}
        <form onSubmit={handleSearch} className="space-y-3">
          <label className="block text-xs font-bold text-slate-700">
            کد رهگیری، شماره همراه، یا کد ملی بیمار را وارد کنید:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="مثال: VEB-481920 یا ۰۹۱۳۱۲۳۴۵۶۷"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-full px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-mono"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <Search className="w-4 h-4" />
              <span>جستجو</span>
            </button>
          </div>
        </form>

        {/* Search Results */}
        {searchDone && (
          <div className="space-y-4 pt-2">
            {matchedAppointments.length === 0 ? (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center text-xs text-slate-600 space-y-2">
                <AlertCircle className="w-6 h-6 text-slate-400 mx-auto" />
                <p>هیچ نوبتی با این مشخصات یافت نشد.</p>
                <button
                  onClick={() => {
                    onClose();
                    onBookNew();
                  }}
                  className="text-blue-600 font-bold hover:underline"
                >
                  ثبت نوبت جدید در وب‌کلینیک
                </button>
              </div>
            ) : (
              matchedAppointments.map((app) => (
                <div
                  key={app.trackingCode}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-mono font-bold text-slate-900">
                      کد پیگیری: {app.trackingCode}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${
                        app.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : app.status === 'cancelled'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {app.status === 'confirmed'
                        ? 'تایید شده و فعال'
                        : app.status === 'cancelled'
                        ? 'لغو شده'
                        : 'در انتظار'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <div>• <strong className="text-slate-900">پزشک معالج:</strong> {app.doctorName}</div>
                    <div>• <strong className="text-slate-900">بیمار:</strong> {app.patientName}</div>
                    <div>• <strong className="text-slate-900">تاریخ و ساعت:</strong> {app.date} - ساعت {app.timeSlot}</div>
                    <div>• <strong className="text-slate-900">بیمه تکمیلی:</strong> {app.supplementaryInsurance}</div>
                  </div>

                  <div className="text-slate-600 pt-1">
                    <strong className="text-slate-900 block mb-0.5">آدرس کلینیک / مطب در اصفهان:</strong>
                    <span>{app.clinicAddress}</span>
                  </div>

                  {app.status === 'confirmed' && (
                    <div className="pt-2 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => handleCancel(app.trackingCode)}
                        className="px-3 py-1.5 text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>لغو این نوبت</span>
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Existing recent appointments list if not searching */}
        {!searchDone && appointments.length > 0 && (
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-500 block">
              آخرین نوبت‌های ثبت‌شده در این دستگاه:
            </span>
            {appointments.slice(0, 2).map((app) => (
              <div
                key={app.trackingCode}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-slate-900 block">{app.doctorName}</span>
                  <span className="text-slate-500 text-[11px] block">{app.date} ساعت {app.timeSlot}</span>
                </div>
                <button
                  onClick={() => {
                    setQuery(app.trackingCode);
                    setMatchedAppointments([app]);
                    setSearchDone(true);
                  }}
                  className="px-3 py-1 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-medium cursor-pointer"
                >
                  مشاهده کارت
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
