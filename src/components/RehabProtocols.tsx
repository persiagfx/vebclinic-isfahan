import React, { useState, useEffect } from 'react';
import { Activity, Clock, Play, Pause, RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';
import { REHAB_EXERCISES } from '../data/rehabData';
import { RehabExercise } from '../types';

export const RehabProtocols: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');
  const [selectedExercise, setSelectedExercise] = useState<RehabExercise>(REHAB_EXERCISES[0]);
  
  // Interactive Exercise Timer
  const [timerSeconds, setTimerSeconds] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      setCompletedCount((c) => c + 1);
      setTimerSeconds(5);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const filtered = REHAB_EXERCISES.filter((e) => e.phase === activePhase);

  const handleSelectExercise = (ex: RehabExercise) => {
    setSelectedExercise(ex);
    setIsTimerRunning(false);
    setTimerSeconds(5);
  };

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-right space-y-8">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-1">
          <Activity className="w-4 h-4" />
          <span>پروتکل رسمی توانبخشی پس از جراحی‌های تعویض مفصل زانو، لگن و آرتروسکوپی</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          برنامه تمرینی فیزیوتراپی در منزل (Fast-Track Recovery)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          تمرینات گام‌به‌گام طراحی‌شده توسط اساتید طب فیزیکی و جراحان ارتوپدی اصفهان، جهت بازیابی زاویه خم شدن زانو، کاهش ورم و تقویت عضله ران بدون نیاز به خروج از منزل در روزهای اول پس از عمل.
        </p>
      </div>

      {/* Phase Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => {
            setActivePhase('phase1');
            setSelectedExercise(REHAB_EXERCISES.find(e => e.phase === 'phase1')!);
          }}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            activePhase === 'phase1'
              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 hover:bg-slate-50 bg-white'
          }`}
        >
          <span className="text-xs font-extrabold text-blue-800 block mb-0.5">فاز اول (هفته ۱ و ۲)</span>
          <span className="text-xs font-bold text-slate-900 block">کنترل درد، تورم و تمرین تخت</span>
          <span className="text-[11px] text-slate-500 mt-1 block">پیشگیری از چسبندگی مفصل</span>
        </button>

        <button
          onClick={() => {
            setActivePhase('phase2');
            setSelectedExercise(REHAB_EXERCISES.find(e => e.phase === 'phase2')!);
          }}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            activePhase === 'phase2'
              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 hover:bg-slate-50 bg-white'
          }`}
        >
          <span className="text-xs font-extrabold text-blue-800 block mb-0.5">فاز دوم (هفته ۳ تا ۶)</span>
          <span className="text-xs font-bold text-slate-900 block">انتقال از واکر به عصا</span>
          <span className="text-[11px] text-slate-500 mt-1 block">افزایش دامنه خم شدن تا ۱۱۰ درجه</span>
        </button>

        <button
          onClick={() => {
            setActivePhase('phase3');
            setSelectedExercise(REHAB_EXERCISES.find(e => e.phase === 'phase3')!);
          }}
          className={`p-4 rounded-2xl border text-right transition-all cursor-pointer ${
            activePhase === 'phase3'
              ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 hover:bg-slate-50 bg-white'
          }`}
        >
          <span className="text-xs font-extrabold text-blue-800 block mb-0.5">فاز سوم (هفته ۷ تا ۱۲)</span>
          <span className="text-xs font-bold text-slate-900 block">راه رفتن مستقل و پله</span>
          <span className="text-[11px] text-slate-500 mt-1 block">تعادل و بازگشت کامل به زندگی عادی</span>
        </button>
      </div>

      {/* Exercise Detail & Active Timer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Exercise List for Selected Phase (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filtered.map((ex) => {
            const isSelected = selectedExercise.id === ex.id;
            return (
              <div
                key={ex.id}
                onClick={() => handleSelectExercise(ex)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-right transition-all cursor-pointer flex items-center gap-3.5 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 bg-white'
                }`}
              >
                {ex.image && (
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="w-13 h-13 rounded-xl object-cover border border-slate-200 shrink-0 shadow-2xs"
                    loading="lazy"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {ex.name}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                      ex.difficulty === 'easy' ? 'bg-blue-100 text-blue-800' :
                      ex.difficulty === 'moderate' ? 'bg-sky-100 text-sky-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {ex.difficulty === 'easy' ? 'مقدماتی' : ex.difficulty === 'moderate' ? 'متوسط' : 'پیشرفته'}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 block truncate">
                    {ex.frequency}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exercise Coaching & Timer (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5">
          {/* Exercise Coaching Photo Banner */}
          {selectedExercise.image && (
            <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200 group">
              <img
                src={selectedExercise.image}
                alt={selectedExercise.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 text-white text-xs font-bold bg-slate-900/80 px-3 py-1 rounded-xl backdrop-blur-xs">
                آموزش تصویری تمرین فیزیوتراپی در منزل
              </div>
            </div>
          )}

          <div>
            <span className="text-xs font-bold text-blue-700 block mb-1">
              {selectedExercise.phaseTitle}
            </span>
            <h4 className="text-lg font-black text-slate-900">
              {selectedExercise.name}
            </h4>
            <span className="text-xs text-slate-500 block mt-1">
              تعداد توصیه‌شده: {selectedExercise.frequency}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="block text-slate-900 font-bold">روش صحیح انجام تمرین:</strong>
            <p>{selectedExercise.description}</p>
          </div>

          {/* Interactive Repetition Timer */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center font-mono text-2xl font-black text-blue-300">
                0{timerSeconds}
              </div>
              <div className="text-right">
                <span className="text-xs text-blue-400 font-semibold block">شمارشگر انقباض و مکث عضله</span>
                <span className="text-sm font-bold text-white block">انجام هر ست ۵ ثانیه‌ای</span>
                <span className="text-xs text-slate-400">تکرارهای تکمیل‌شده: {completedCount} بار</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isTimerRunning ? 'توقف' : 'شروع شمارش'}</span>
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(5);
                }}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors cursor-pointer"
                title="تنظیم مجدد"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Caution Note */}
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">هشدار ایمنی جراح ارتوپد:</strong>
              <span>{selectedExercise.caution}</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
