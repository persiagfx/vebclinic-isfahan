import React, { useState } from 'react';
import { FileSearch, Upload, CheckCircle2, AlertCircle, ArrowLeft, Stethoscope, Eye, Clock, ShieldCheck } from 'lucide-react';
import { SAMPLE_TELERADIOLOGY_CASES } from '../data/teleradiologyData';
import { TeleradiologyCase } from '../types';

interface TeleradiologyModalProps {
  onClose: () => void;
  onBookSpecialist: () => void;
}

export const TeleradiologyModal: React.FC<TeleradiologyModalProps> = ({
  onClose,
  onBookSpecialist,
}) => {
  const [selectedCase, setSelectedCase] = useState<TeleradiologyCase>(SAMPLE_TELERADIOLOGY_CASES[0]);
  const [isSimulatingUpload, setIsSimulatingUpload] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSimulateUpload = () => {
    setIsSimulatingUpload(true);
    setTimeout(() => {
      setIsSimulatingUpload(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 4000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 text-right shadow-2xl space-y-6 my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
          <div className="text-right">
            <h3 className="text-base sm:text-xl font-black text-slate-900">
              میز تخصصی تله‌رادیولوژی و نظر دوم جراح ارتوپد (MRI Second Opinion)
            </h3>
            <span className="text-xs text-slate-500">
              بررسی مدارک ام‌آر‌آی، گرافی ایستاده و سی‌تی‌اسکن قبل از تصمیم‌گیری جراحی
            </span>
          </div>
        </div>

        {/* Upload Simulation Card */}
        <div className="p-5 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 text-center space-y-3">
          <Upload className="w-8 h-8 text-blue-600 mx-auto" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              بارگذاری فایل عکس یا سی‌دی ام‌آر‌آی (DICOM / JPEG / PDF)
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              مناسب بیماران ساکن سایر استان‌ها (چهارمحال و بختیاری، خوزستان، یزد، لرستان) جهت ارزیابی اولیه مدارک
            </p>
          </div>
          
          <button
            type="button"
            onClick={handleSimulateUpload}
            disabled={isSimulatingUpload}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer disabled:opacity-60 inline-flex items-center gap-1.5"
          >
            {isSimulatingUpload ? (
              <span>در حال ارسال و انکریپشن پزشکی فایل...</span>
            ) : (
              <>
                <FileSearch className="w-4 h-4" />
                <span>ارسال نمونه مدارک جهت بررسی</span>
              </>
            )}
          </button>

          {uploadSuccess && (
            <div className="p-3 bg-blue-100 text-blue-900 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>مدارک با موفقیت دریافت و به کارتابل جراح شیفت ارتوپدی وب‌کلینیک ارسال شد.</span>
            </div>
          )}
        </div>

        {/* Case Studies Selector */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-700 block">
            نمونه کیس‌های بالینی تفسیرشده توسط جراحان ارتوپدی وب‌کلینیک:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {SAMPLE_TELERADIOLOGY_CASES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(item)}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                  selectedCase.id === item.id
                    ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className="text-xs block truncate">{item.bodyPart}</span>
                <span className="text-[11px] text-slate-500 block truncate">{item.patientAge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Review Detail */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs">
          <div className="flex items-start justify-between border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-bold text-blue-700 block mb-0.5">
                نوع اسکن: {selectedCase.scanType} — {selectedCase.bodyPart}
              </span>
              <h4 className="text-sm font-bold text-slate-900">{selectedCase.title}</h4>
              <span className="text-[11px] text-slate-500">مشخصات: {selectedCase.patientAge}</span>
            </div>
            <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-600">
              گزارش قطعی رادیولوژی
            </span>
          </div>

          {/* Scan Diagnostic Viewer Box */}
          {selectedCase.sampleImageUrl && (
            <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-black border border-slate-700 group shadow-inner">
              <img
                src={selectedCase.sampleImageUrl}
                alt={selectedCase.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-emerald-400 font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-900/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PACS DICOM VIEWER · {selectedCase.scanType}</span>
              </div>
              <div className="absolute bottom-2.5 right-3 text-white text-[11px] font-bold">
                کلیشه دیجیتال ام‌آر‌آی / رادیولوژی: {selectedCase.bodyPart}
              </div>
            </div>
          )}

          <div>
            <strong className="text-slate-900 block mb-1">علائم بالینی بیمار:</strong>
            <p className="text-slate-700">{selectedCase.symptoms}</p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">یافته‌های پاراکلینیکی رادیولوژیست:</strong>
            <ul className="space-y-1 text-slate-600 list-disc list-inside">
              {selectedCase.radiologyReport.map((rep, idx) => (
                <li key={idx}>{rep}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 text-blue-950 space-y-1">
            <strong className="block text-blue-900 font-bold">
              نظر تخصصی جراح ارتوپد (Orthopedic Impression):
            </strong>
            <p>{selectedCase.orthopedicImpression}</p>
            <div className="pt-1.5 border-t border-blue-200 font-semibold text-blue-800">
              طرح درمان پیشنهادی: {selectedCase.recommendedTreatment}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            بستن پنجره
          </button>
          <button
            onClick={() => {
              onClose();
              onBookSpecialist();
            }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            رزرو نوبت ویزیت با پزشک متخصص
          </button>
        </div>

      </div>
    </div>
  );
};
