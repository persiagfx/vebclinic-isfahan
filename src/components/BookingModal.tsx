import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, Clock, User, Phone, ShieldCheck, 
  CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, Printer, Share2 
} from 'lucide-react';
import { Doctor, AppointmentRecord } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES } from '../data/insurancesData';

interface BookingModalProps {
  initialDoctor?: Doctor | null;
  initialTimeSlot?: string;
  onClose: () => void;
  onAppointmentBooked?: (appointment: AppointmentRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  initialDoctor,
  initialTimeSlot,
  onClose,
  onAppointmentBooked,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(initialDoctor || DOCTORS_DATA[0]);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(initialTimeSlot ? 3 : 1);

  // Step 1: Service type
  const [serviceType, setServiceType] = useState<'in_person' | 'online' | 'mri_review'>('in_person');

  // Step 2: Date & Slot
  const appointmentDates = [
    { day: 'شنبه', date: '۱۴۰۵/۰۱/۱۸', availableSlots: ['۱۶:۳۰', '۱۷:۰۰', '۱۷:۳۰', '۱۸:۰۰'] },
    { day: 'یکشنبه', date: '۱۴۰۵/۰۱/۱۹', availableSlots: ['۱۶:۰۰', '۱۶:۴۵', '۱۸:۱۵'] },
    { day: 'دوشنبه', date: '۱۴۰۵/۰۱/۲۰', availableSlots: ['۱۷:۰۰', '۱۷:۳۰', '۱۹:۰۰', '۱۹:۳۰'] },
    { day: 'سه‌شنبه', date: '۱۴۰۵/۰۱/۲۱', availableSlots: ['۱۶:۱۵', '۱۸:۰۰', '۱۸:۴۵'] },
    { day: 'چهارشنبه', date: '۱۴۰۵/۰۱/۲۲', availableSlots: ['۱۷:۱۵', '۱۸:۰۰', '۱۹:۰۰'] },
  ];

  const [selectedDateObj, setSelectedDateObj] = useState(appointmentDates[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(initialTimeSlot || appointmentDates[0].availableSlots[0]);

  // Step 3: Patient Information
  const [patientName, setPatientName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedPrimaryIns, setSelectedPrimaryIns] = useState('tamin');
  const [selectedSuppIns, setSelectedSuppIns] = useState('dana');
  const [formError, setFormError] = useState('');

  // Step 4: Confirmed appointment record
  const [confirmedRecord, setConfirmedRecord] = useState<AppointmentRecord | null>(null);

  const handleDateChange = (dateObj: typeof appointmentDates[0]) => {
    setSelectedDateObj(dateObj);
    setSelectedTimeSlot(dateObj.availableSlots[0]);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      setFormError('لطفاً نام و نام خانوادگی بیمار را وارد کنید.');
      return;
    }
    if (!nationalId || nationalId.length < 10) {
      setFormError('کد ملی ۱۰ رقمی معتبر الزامی است.');
      return;
    }
    if (!patientPhone || patientPhone.length < 11) {
      setFormError('شماره همراه ۱۱ رقمی (مانند ۰۹۱۳...) الزامی است.');
      return;
    }

    setFormError('');

    // Generate random 7-digit tracking code
    const trackingCode = 'VEB-' + Math.floor(100000 + Math.random() * 900000);

    const primaryName = PRIMARY_INSURANCES.find(p => p.id === selectedPrimaryIns)?.name || 'تامین اجتماعی';
    const suppName = SUPPLEMENTARY_INSURANCES.find(s => s.id === selectedSuppIns)?.name || 'دانا';

    const newAppointment: AppointmentRecord = {
      trackingCode,
      doctorName: selectedDoctor.name,
      doctorSpecialty: selectedDoctor.subSpecialty,
      clinicAddress: selectedDoctor.address,
      patientName,
      nationalId,
      phone: patientPhone,
      date: `${selectedDateObj.day} ${selectedDateObj.date}`,
      timeSlot: selectedTimeSlot,
      serviceType: serviceType === 'in_person' ? 'ویزیت حضوری مطب' : serviceType === 'online' ? 'مشاوره ویدئویی آنلاین' : 'بررسی مدارک و ام‌آر‌آی',
      primaryInsurance: primaryName,
      supplementaryInsurance: suppName,
      estimatedFee: selectedDoctor.consultationFee,
      patientPayable: Math.round(selectedDoctor.consultationFee * 0.1), // 10% co-pay
      status: 'confirmed',
      createdAt: '۱۴۰۵/۰۱/۱۶ ساعت ۱۱:۴۵',
    };

    // Save to local storage
    try {
      const stored = localStorage.getItem('vebclinic_appointments');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(newAppointment);
      localStorage.setItem('vebclinic_appointments', JSON.stringify(list));
    } catch (err) {
      // storage unavailable
    }

    setConfirmedRecord(newAppointment);
    onAppointmentBooked?.(newAppointment);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-right shadow-2xl space-y-6 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
          <div className="text-right">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              سامانه نوبت‌دهی آنلاین ارتوپدی وب‌کلینیک
            </h2>
            <span className="text-xs text-slate-500">
              تایید فوری با پیامک و صدور معرفی‌نامه الکترونیک
            </span>
          </div>
        </div>

        {/* Step Indicator (Unboxed Clean) */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-100 pb-3">
          <span className={step === 1 ? 'text-blue-600 font-bold' : ''}>۱. پزشک و خدمت</span>
          <span aria-hidden="true">·</span>
          <span className={step === 2 ? 'text-blue-600 font-bold' : ''}>۲. روز و ساعت</span>
          <span aria-hidden="true">·</span>
          <span className={step === 3 ? 'text-blue-600 font-bold' : ''}>۳. مشخصات و بیمه</span>
          <span aria-hidden="true">·</span>
          <span className={step === 4 ? 'text-blue-600 font-bold' : ''}>۴. کارت رزرو</span>
        </div>

        {/* STEP 1: Doctor & Service */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                پزشک متخصص مورد نظر در اصفهان:
              </label>
              <select
                value={selectedDoctor.id}
                onChange={(e) => {
                  const doc = DOCTORS_DATA.find((d) => d.id === e.target.value);
                  if (doc) setSelectedDoctor(doc);
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                {DOCTORS_DATA.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} — {doc.subSpecialty} ({doc.district})
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Info Snapshot */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200 shadow-2xs">
                {selectedDoctor.avatarImage ? (
                  <img
                    src={selectedDoctor.avatarImage}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  selectedDoctor.avatarText
                )}
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">{selectedDoctor.name}</span>
                <p>{selectedDoctor.address}</p>
                <div className="text-blue-600 font-medium">
                  طرف قرارداد با بیمه‌های: تامین اجتماعی، دانا، ایران، البرز، ساتا
                </div>
              </div>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                نوع ویزیت یا خدمت مورد نیاز:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('in_person')}
                  className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                    serviceType === 'in_person'
                      ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-950 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">ویزیت حضوری مطب</span>
                  <span className="text-[11px] text-slate-500 font-normal block">
                    معاینه بالینی کامل مفاصل و بررسی گرافی
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('online')}
                  className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                    serviceType === 'online'
                      ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-950 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">مشاوره آنلاین تصویری</span>
                  <span className="text-[11px] text-slate-500 font-normal block">
                    مناسب بیماران سایر شهرستان‌ها و پیگیری
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('mri_review')}
                  className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                    serviceType === 'mri_review'
                      ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500 text-blue-950 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">تفسیر ام‌آر‌آی و رادیولوژی</span>
                  <span className="text-[11px] text-slate-500 font-normal block">
                    بررسی مدارک پاراکلینیکی قبل از جراحی
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>مرحله بعد: انتخاب روز و ساعت</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Date & Slot */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                انتخاب تاریخ نوبت ویزیت:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {appointmentDates.map((item, idx) => {
                  const isSelected = selectedDateObj.date === item.date;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleDateChange(item)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-bold ring-1 ring-blue-500'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="text-xs block mb-0.5">{item.day}</span>
                      <span className="text-[11px] block font-mono text-slate-500">{item.date.slice(5)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                ساعت‌های خالی موجود برای {selectedDateObj.day} ({selectedDateObj.date}):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedDateObj.availableSlots.map((slot, sIdx) => {
                  const isSlotSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer font-mono text-xs ${
                        isSlotSelected
                          ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                بازگشت
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>مرحله بعد: ثبت اطلاعات بیمار</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Patient Info & Insurance Selection */}
        {step === 3 && (
          <form onSubmit={handleConfirmBooking} className="space-y-4">
            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  نام و نام خانوادگی بیمار *
                </label>
                <input
                  type="text"
                  placeholder="مثال: علی حسینی"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  کد ملی بیمار (۱۰ رقم) *
                </label>
                <input
                  type="text"
                  placeholder="مثال: ۱۲۸۹۴۵۶۷۸۱"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 font-mono focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                شماره تلفن همراه جهت دریافت پیامک نوبت *
              </label>
              <input
                type="text"
                placeholder="مثال: ۰۹۱۳۱۲۳۴۵۶۷"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 font-mono focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  بیمه پایه بیمار
                </label>
                <select
                  value={selectedPrimaryIns}
                  onChange={(e) => setSelectedPrimaryIns(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
                >
                  {PRIMARY_INSURANCES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  بیمه تکمیلی طرف قرارداد
                </label>
                <select
                  value={selectedSuppIns}
                  onChange={(e) => setSelectedSuppIns(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
                >
                  {SUPPLEMENTARY_INSURANCES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-950 flex items-center justify-between">
              <span>فرانشیز قابل پرداخت در مطب:</span>
              <strong className="font-bold text-blue-700 tabular-nums">
                {new Intl.NumberFormat('fa-IR').format(Math.round(selectedDoctor.consultationFee * 0.1))} تومان
              </strong>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                بازگشت
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>تایید نهایی و صدور کارت نوبت</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Confirmed Digital Receipt */}
        {step === 4 && confirmedRecord && (
          <div className="space-y-5 text-right">
            <div className="p-5 bg-blue-50/90 border border-blue-200 rounded-2xl text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-blue-950">
                نوبت ویزیت شما با موفقیت در وب‌کلینیک ثبت شد!
              </h3>
              <p className="text-xs text-blue-800">
                پیامک تاییدیه به شماره {confirmedRecord.phone} ارسال گردید.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">کد پیگیری نوبت:</span>
                <span className="font-mono font-bold text-slate-900 text-sm tracking-wider">
                  {confirmedRecord.trackingCode}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                <div>• <strong className="text-slate-900">پزشک معالج:</strong> {confirmedRecord.doctorName}</div>
                <div>• <strong className="text-slate-900">تخصص:</strong> {confirmedRecord.doctorSpecialty}</div>
                <div>• <strong className="text-slate-900">بیمار:</strong> {confirmedRecord.patientName}</div>
                <div>• <strong className="text-slate-900">کد ملی:</strong> {confirmedRecord.nationalId}</div>
                <div>• <strong className="text-slate-900">تاریخ نوبت:</strong> {confirmedRecord.date}</div>
                <div>• <strong className="text-slate-900">ساعت حضور:</strong> {confirmedRecord.timeSlot}</div>
                <div>• <strong className="text-slate-900">پوشش بیمه:</strong> {confirmedRecord.supplementaryInsurance}</div>
                <div>• <strong className="text-slate-900">نوع خدمت:</strong> {confirmedRecord.serviceType}</div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-slate-600">
                <strong className="text-slate-900 block mb-0.5">آدرس مطب در اصفهان:</strong>
                <p>{confirmedRecord.clinicAddress}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>چاپ کارت نوبت</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                بستن و اتمام
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
