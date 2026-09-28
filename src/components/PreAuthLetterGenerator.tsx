import React, { useState } from 'react';
import { 
  FileCheck2, ShieldCheck, Printer, CheckCircle2, QrCode, 
  Building2, User, FileText, ArrowRight, Download, AlertCircle, Stamp 
} from 'lucide-react';
import { PreAuthVoucher } from '../types';
import { PRIMARY_INSURANCES, SUPPLEMENTARY_INSURANCES, MEDICAL_SERVICES } from '../data/insurancesData';
import { ISFAHAN_HOSPITALS } from '../data/hospitalsData';
import { DOCTORS_DATA } from '../data/doctorsData';

interface PreAuthLetterGeneratorProps {
  onClose?: () => void;
}

export const PreAuthLetterGenerator: React.FC<PreAuthLetterGeneratorProps> = ({ onClose }) => {
  const [patientName, setPatientName] = useState('فاطمه سادات حسینی');
  const [fatherName, setFatherName] = useState('سید محمد');
  const [nationalId, setNationalId] = useState('۱۲۸۹۴۵۶۷۸۱');
  const [selectedInsuranceId, setSelectedInsuranceId] = useState('dana');
  const [policyNumber, setPolicyNumber] = useState('DA-1405-882941');
  const [selectedHospitalId, setSelectedHospitalId] = useState('saadi-hospital');
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-barzegar');
  const [selectedServiceId, setSelectedServiceId] = useState('knee_replacement');
  const [generatedVoucher, setGeneratedVoucher] = useState<PreAuthVoucher | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeSupplementary = SUPPLEMENTARY_INSURANCES.filter(i => i.id !== 'none_supp');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      const ins = SUPPLEMENTARY_INSURANCES.find(i => i.id === selectedInsuranceId) || SUPPLEMENTARY_INSURANCES[0];
      const hosp = ISFAHAN_HOSPITALS.find(h => h.id === selectedHospitalId) || ISFAHAN_HOSPITALS[0];
      const doc = DOCTORS_DATA.find(d => d.id === selectedDoctorId) || DOCTORS_DATA[0];
      const serv = MEDICAL_SERVICES.find(s => s.id === selectedServiceId) || MEDICAL_SERVICES[0];

      const tariffTotal = serv.baseTariff;
      const approvedInsuranceShare = Math.round(tariffTotal * (ins.coveragePercentage.surgery / 100));
      const patientPayable = Math.max(0, tariffTotal - approvedInsuranceShare);
      const issueNumber = 'VEB-AUTH-' + Math.floor(100000 + Math.random() * 900000);
      const barcode = '|| | |||| | ||| |||| | |||||| || |';

      const voucher: PreAuthVoucher = {
        id: 'v-' + Date.now(),
        issueNumber,
        nationalId,
        patientName,
        fatherName,
        insuranceName: ins.name,
        policyNumber: policyNumber || 'POL-' + Math.floor(100000 + Math.random() * 900000),
        hospitalName: hosp.name,
        doctorName: doc.name,
        diagnosis: 'آرتروز پیشرفته زانو و ساییدگی غضروف درجه ۴ (M17.1)',
        procedureName: serv.name,
        tariffTotal,
        approvedInsuranceShare,
        patientPayable,
        validUntil: '۱۴۰۵/۰۲/۱۵ (اعتبار ۳۰ روزه)',
        status: 'approved',
        createdAt: '۱۴۰۵/۰۱/۱۶ ساعت ۱۱:۵۰',
        approvalBarcode: barcode,
      };

      setGeneratedVoucher(voucher);
      setIsGenerating(false);
    }, 600);
  };

  const formatToman = (num: number) => {
    return new Intl.NumberFormat('fa-IR').format(num) + ' تومان';
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-right space-y-6">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
          <FileCheck2 className="w-4 h-4" />
          <span>سامانه الکترونیک صدور آنلاین معرفی‌نامه بستری و جراحی</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          صدور آنی معرفی‌نامه رسمی بیمارستانی وب‌کلینیک
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          جهت پذیرش بدون معطلی در بیمارستان‌های سعدی، کاشانی، الزهرا و کلینیک‌های اصفهان، اطلاعات بیمار را وارد کرده و برگه رسمی تاییدشده با بارکد اصالت و مهر دیجیتال را فوراً دریافت نمایید.
        </p>
      </div>

      {!generatedVoucher ? (
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">نام و نام خانوادگی بیمار *</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">نام پدر</label>
              <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">کد ملی ۱۰ رقمی *</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">شرکت بیمه تکمیلی طرف قرارداد</label>
              <select
                value={selectedInsuranceId}
                onChange={(e) => setSelectedInsuranceId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
              >
                {activeSupplementary.map(i => (
                  <option key={i.id} value={i.id}>
                    {i.name} (پورتال برخط: {i.portalName})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">شماره بیمه‌نامه تکمیلی / کد پرسنلی</label>
              <input
                type="text"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">بیمارستان یا مرکز جراحی مقصد</label>
              <select
                value={selectedHospitalId}
                onChange={(e) => setSelectedHospitalId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
              >
                {ISFAHAN_HOSPITALS.map(h => (
                  <option key={h.id} value={h.id}>{h.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">پزشک جراح معالج</label>
              <select
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
              >
                {DOCTORS_DATA.map(d => (
                  <option key={d.id} value={d.id}>{d.name} ({d.subSpecialty})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">نوع عمل جراحی / خدمت</label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
              >
                {MEDICAL_SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={isGenerating}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs disabled:opacity-70"
            >
              {isGenerating ? (
                <span>در حال ارتباط با وب‌سرویس و ثبت معرفی‌نامه...</span>
              ) : (
                <>
                  <FileCheck2 className="w-4 h-4" />
                  <span>صدور آنی معرفی‌نامه و بارکد بیمارستان</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Printable Official Letter Voucher */
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 border-2 border-blue-600/40 rounded-2xl relative overflow-hidden shadow-xs print:m-0 print:border-black space-y-4">
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none text-slate-900 select-none">
              <span className="text-7xl font-black rotate-[-25deg]">VEBCLINIC AUTH</span>
            </div>

            {/* Official Voucher Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4">
              <div className="text-right">
                <span className="text-xs text-slate-500 block">جمهوری اسلامی ایران</span>
                <span className="text-sm font-black text-slate-900 block">
                  معرفی‌نامه الکترونیکی بستری و جراحی ارتوپدی
                </span>
                <span className="text-[11px] text-blue-800 font-semibold">
                  سامانه برخط وب‌کلینیک اصفهان (تأییدیه وب‌سرویس پورتال درمان)
                </span>
              </div>
              <div className="text-left font-mono text-[11px] text-slate-600 space-y-0.5">
                <div>شماره معرفی‌نامه: <strong className="text-slate-900">{generatedVoucher.issueNumber}</strong></div>
                <div>تاریخ صدور: <strong>{generatedVoucher.createdAt}</strong></div>
                <div>مهلت اعتبار: <strong className="text-blue-700">{generatedVoucher.validUntil}</strong></div>
              </div>
            </div>

            {/* Patient & Admission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs bg-white p-4 rounded-xl border border-slate-200">
              <div>• <span className="text-slate-500">نام و نام خانوادگی:</span> <strong className="text-slate-900">{generatedVoucher.patientName}</strong></div>
              <div>• <span className="text-slate-500">نام پدر:</span> <strong className="text-slate-900">{generatedVoucher.fatherName}</strong></div>
              <div>• <span className="text-slate-500">کد ملی:</span> <strong className="font-mono text-slate-900">{generatedVoucher.nationalId}</strong></div>
              <div>• <span className="text-slate-500">شرکت بیمه تکمیلی:</span> <strong className="text-blue-800">{generatedVoucher.insuranceName}</strong></div>
              <div>• <span className="text-slate-500">شماره بیمه‌نامه:</span> <strong className="font-mono text-slate-900">{generatedVoucher.policyNumber}</strong></div>
              <div>• <span className="text-slate-500">بیمارستان مقصد:</span> <strong className="text-slate-900">{generatedVoucher.hospitalName}</strong></div>
              <div>• <span className="text-slate-500">جراح معالج:</span> <strong className="text-slate-900">{generatedVoucher.doctorName}</strong></div>
              <div className="sm:col-span-2">• <span className="text-slate-500">تشخیص بالینی:</span> <strong className="text-slate-800">{generatedVoucher.diagnosis}</strong></div>
            </div>

            {/* Financial Approval Row */}
            <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200 text-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-slate-600 block">تعرفه کل مصوب جراحی:</span>
                <strong className="text-slate-900 text-sm">{formatToman(generatedVoucher.tariffTotal)}</strong>
              </div>
              <div>
                <span className="text-blue-800 block font-semibold">مبلغ تعهد و تایید بیمه تکمیلی:</span>
                <strong className="text-blue-700 text-sm font-black">{formatToman(generatedVoucher.approvedInsuranceShare)}</strong>
              </div>
              <div>
                <span className="text-slate-600 block">فرانشیز پرداختی بیمار در ترخیص:</span>
                <strong className="text-rose-700 text-sm font-bold">{formatToman(generatedVoucher.patientPayable)}</strong>
              </div>
            </div>

            {/* Footer Signatures, QR Code & Barcode */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white p-1.5 border border-slate-300 rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-slate-800" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block tracking-widest">{generatedVoucher.approvalBarcode}</span>
                  <span className="text-[11px] text-blue-700 font-semibold block">کد اصالت تاییدیه دیجیتال: {generatedVoucher.issueNumber}</span>
                  <span className="text-[10px] text-slate-500 block">پذیرش بیمارستان بدون نیاز به نسخه کاغذی مجاز می‌باشد.</span>
                </div>
              </div>

              {/* Official Seal Mock */}
              <div className="border border-blue-600 text-blue-800 bg-blue-50 px-3 py-2 rounded-xl text-center text-[11px] font-bold">
                <CheckCircle2 className="w-4 h-4 mx-auto mb-0.5 text-blue-600" />
                <span>مهر تایید وب‌سرویس پذیرش برخط</span>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setGeneratedVoucher(null)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              صدور معرفی‌نامه جدید
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>چاپ رسمی معرفی‌نامه</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
