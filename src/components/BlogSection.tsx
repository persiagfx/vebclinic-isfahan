import React, { useState, useEffect } from 'react';
import { 
  FileText, Play, Pause, Volume2, Share2, Bookmark, Check, 
  HelpCircle, MessageSquare, ChevronDown, ChevronUp, User, 
  Clock, Calendar, Stethoscope, ArrowLeft, Heart, Send, CheckCircle2 
} from 'lucide-react';
import { ORTHOPEDIC_ISFAHAN_ARTICLE, RELATED_BLOG_POSTS } from '../data/articlesData';
import { DOCTORS_DATA } from '../data/doctorsData';
import { Doctor } from '../types';

interface BlogSectionProps {
  onBookDoctor: (doctor: Doctor) => void;
  onOpenInsurances: () => void;
  onSelectDoctor?: (doctor: Doctor) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onBookDoctor,
  onOpenInsurances,
  onSelectDoctor,
}) => {
  const article = ORTHOPEDIC_ISFAHAN_ARTICLE;

  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(15);

  // Text size state
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<1 | 1.1 | 1.25>(1);

  // Bookmarking & Link Copying
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // FAQ Accordion Open Items
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  // Interactive KOOS Score Assessment
  const [koosAnswers, setKoosAnswers] = useState<{
    painWhenStairs: number;
    swelling: number;
    stiffnessMorning: number;
    bendingLimit: number;
  }>({
    painWhenStairs: 2,
    swelling: 1,
    stiffnessMorning: 2,
    bendingLimit: 1,
  });

  // Patient Comments List
  const [comments, setComments] = useState(article.comments);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Simulated audio progress timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleFaq = (index: number) => {
    if (openFaqIndices.includes(index)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== index));
    } else {
      setOpenFaqIndices([...openFaqIndices, index]);
    }
  };

  const copyArticleLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment = {
      id: 'c-' + Date.now(),
      author: newCommentName,
      date: 'هم‌اکنون',
      text: newCommentText,
      doctorReply: 'سوال شما در صف بررسی ارتوپد شیفت وب‌کلینیک قرار گرفت و به زودی پاسخ داده می‌شود.',
    };

    setComments([newComment, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  // KOOS Score evaluation
  const totalScorePoints = koosAnswers.painWhenStairs + koosAnswers.swelling + koosAnswers.stiffnessMorning + koosAnswers.bendingLimit;
  const severityLevel = 
    totalScorePoints >= 9 ? 'آرتروز پیشرفته و نیاز جدی به مشاوره جراحی تعویض مفصل زانو' :
    totalScorePoints >= 5 ? 'ساییدگی متوسط زانو؛ نیازمند فیزیوتراپی، تمرین‌درمانی و تزریق PRP' :
    'علائم خفیف اولیه؛ قابل کنترل با اصلاح سبک زندگی و تقویت عضلات ران';

  const relevantDoctors = DOCTORS_DATA.filter(
    (d) => d.id === 'dr-barzegar' || d.id === 'dr-masoudi' || d.id === 'dr-salehi'
  );

  return (
    <article className="py-8 sm:py-12 bg-[#f8fafc] text-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>وب‌کلینیک</span>
          <span aria-hidden="true">/</span>
          <span>دانشنامه تخصصی پزشکی</span>
          <span aria-hidden="true">/</span>
          <span className="text-blue-600 font-medium">ارتوپدی اصفهان (Orthopedic Isfahan)</span>
        </div>

        {/* Article Hero Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-6">
          
          {/* Metadata: Zero-Pill Unboxed Text */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4">
            <span className="font-semibold text-blue-700">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>انتشار: {article.publishedAt}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>بیمارستان‌های کاشانی و سعدی اصفهان</span>
          </div>

          {/* Main Title & Subtitle */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
              {article.subtitle}
            </p>
          </div>

          {/* Author & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 font-bold text-xs">
                {article.author.avatarText}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  {article.author.name}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {article.author.role}
                </span>
              </div>
            </div>

            {/* Reading Tools (Font size, bookmark, share) */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-100 rounded-lg p-1 text-xs">
                <button
                  onClick={() => setFontSizeMultiplier(1)}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSizeMultiplier === 1 ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-500'}`}
                >
                  الف
                </button>
                <button
                  onClick={() => setFontSizeMultiplier(1.1)}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSizeMultiplier === 1.1 ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-500'}`}
                >
                  الف+
                </button>
                <button
                  onClick={() => setFontSizeMultiplier(1.25)}
                  className={`px-2 py-1 rounded cursor-pointer ${fontSizeMultiplier === 1.25 ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-500'}`}
                >
                  الف++
                </button>
              </div>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                title="ذخیره مقاله"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={copyArticleLink}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1 text-xs"
                title="اشتراک‌گذاری"
              >
                {isCopied ? <Check className="w-4 h-4 text-blue-600" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isCopied ? 'کپی شد' : 'اشتراک'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Doctor Audio Podcast Player */}
          <div className="bg-gradient-to-l from-slate-900 to-blue-950 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md shrink-0"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-[-1px]" />}
              </button>
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold mb-0.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>پادکست صوتی توضیحات ارتوپد</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  نکات کلیدی تعویض مفصل و بیمه‌ها در اصفهان ({article.audioDuration})
                </h4>
              </div>
            </div>

            {/* Audio Wave / Progress */}
            <div className="w-full sm:w-64 space-y-1">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-400 rounded-full transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>01:14</span>
                <span>04:32</span>
              </div>
            </div>
          </div>

          {/* Article Main Hero Photo Banner */}
          <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden shadow-md border border-slate-200 group">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 right-4 left-4 text-white flex items-center justify-between text-xs">
              <span className="bg-blue-600/90 backdrop-blur-xs px-3 py-1 rounded-full font-bold">
                اتاق عمل ارتوپدی پیشرفته اصفهان — تجهیزات جراحی مفاصل و ناوبری کامپیوتری
              </span>
              <span className="hidden sm:inline text-slate-300 font-medium">عکاسی بالینی مستند</span>
            </div>
          </div>

        </div>

        {/* Content Layout (Article Body + Sticky Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Quick Summary Callout */}
            <div className="bg-blue-50/70 border-r-4 border-blue-600 p-5 rounded-2xl text-slate-800 text-sm leading-relaxed">
              <strong className="block text-blue-950 font-bold mb-1.5 text-base">
                چکیده بالینی برای مراجعین اصفهان:
              </strong>
              {article.summary}
            </div>

            {/* Article Sections */}
            <div
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-8"
              style={{ fontSize: `${15 * fontSizeMultiplier}px`, lineHeight: 1.8 }}
            >
              {article.sections.map((section, idx) => (
                <section key={idx} className="space-y-3 pt-2 first:pt-0">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-slate-700">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Inline Educational Clinical Photos */}
                  {idx === 0 && (
                    <div className="pt-2">
                      <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80"
                          alt="مراکز درمانی و بیمارستان‌های فوق‌تخصصی اصفهان"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-2.5 right-3 text-white text-[11px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          بیمارستان شهید کاشانی و مراکز تخصصی اصفهان
                        </span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="pt-2">
                      <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                          alt="جراحی تعویض مفصل با پروتز روز دنیا و ناوبری پیشرفته"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-2.5 right-3 text-white text-[11px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          نمای بالینی پروتزهای بیوکامپتیبل و بازسازی مفصل
                        </span>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="pt-2">
                      <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                        <img
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                          alt="مشاوره بالینی و مدارک پزشکی جهت فرانشیز بیمه"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-2.5 right-3 text-white text-[11px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          پوشش بیمه تکمیلی و مدارک پرونده بیمارستانی
                        </span>
                      </div>
                    </div>
                  )}
                </section>
              ))}

              {/* Key Takeaways */}
              <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  نکات کلیدی و راهنمای مراجعین
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {article.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive KOOS Score Assessment Widget */}
            <div className="bg-white rounded-2xl border border-teal-200 p-6 sm:p-8 shadow-xs text-right space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-700 mb-1">
                  <Stethoscope className="w-4 h-4" />
                  <span>تست آنلاین ارزیابی بالینی زانو (KOOS Quick Assessment)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  محاسبه آنلاین شدت آرتروز و ضرورت جراحی تعویض مفصل
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  با پاسخ به ۴ سوال زیر، شدت تخریب مفصل زانو و راهکار درمانی پیشنهادی توسط تیم ارتوپدی وب‌کلینیک اصفهان را مشاهده نمایید:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Q1 */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-800 block mb-2">
                    ۱. هنگام بالا یا پایین رفتن از پله چقدر درد دارید؟
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'خفیف', val: 1 },
                      { label: 'متوسط', val: 2 },
                      { label: 'شدید / غیرممکن', val: 3 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setKoosAnswers({ ...koosAnswers, painWhenStairs: opt.val })}
                        className={`py-1.5 px-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                          koosAnswers.painWhenStairs === opt.val
                            ? 'bg-teal-600 text-white font-bold'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-800 block mb-2">
                    ۲. آیا زانوی شما دچار تورم، داغی یا صدای تق‌تق می‌شود؟
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'به ندرت', val: 1 },
                      { label: 'گاهی اوقات', val: 2 },
                      { label: 'همیشه و متورم', val: 3 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setKoosAnswers({ ...koosAnswers, swelling: opt.val })}
                        className={`py-1.5 px-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                          koosAnswers.swelling === opt.val
                            ? 'bg-teal-600 text-white font-bold'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-800 block mb-2">
                    ۳. خشکی صبحگاهی مفصل زانو چقدر طول می‌کشد؟
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'کمتر از ۱۰ دقیقه', val: 1 },
                      { label: '۱۰ تا ۳۰ دقیقه', val: 2 },
                      { label: 'بیش از ۳۰ دقیقه', val: 3 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setKoosAnswers({ ...koosAnswers, stiffnessMorning: opt.val })}
                        className={`py-1.5 px-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                          koosAnswers.stiffnessMorning === opt.val
                            ? 'bg-teal-600 text-white font-bold'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-slate-800 block mb-2">
                    ۴. خم کردن زانو برای نماز، نشستن روی مبل یا رانندگی:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'مشکلی ندارم', val: 1 },
                      { label: 'با کمی دشواری', val: 2 },
                      { label: 'کاملاً محدود', val: 3 },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setKoosAnswers({ ...koosAnswers, bendingLimit: opt.val })}
                        className={`py-1.5 px-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                          koosAnswers.bendingLimit === opt.val
                            ? 'bg-teal-600 text-white font-bold'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Assessment Result Box */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-900">
                    نتیجه ارزیابی هوشمند مفصل:
                  </span>
                  <span className="text-xs font-extrabold text-teal-800 tabular-nums">
                    امتیاز شدت: {totalScorePoints} از ۱۲
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-teal-950">
                  {severityLevel}
                </p>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                پرسش‌های متداول بیماران ارتوپدی در اصفهان
              </h3>
              
              <div className="space-y-3">
                {article.faqs.map((faq, index) => {
                  const isOpen = openFaqIndices.includes(index);
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-right flex items-center justify-between gap-3 bg-slate-50/70 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Comments & Doctor Q&A */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    پرسش و پاسخ بیماران و پاسخ ارتوپد ({comments.length})
                  </h3>
                </div>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block">
                  طرح سوال از متخصصین ارتوپد اصفهان:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="نام و سن شما (مثال: رضایی، ۵۲ ساله)"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="بیماری یا مشکل اصلی (مثال: درد زانو در پله)"
                    className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="شرح کامل درد، سوابق ام‌آر‌آی یا جراحی قبلی..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center justify-between pt-1">
                  {commentSuccess ? (
                    <span className="text-xs text-blue-700 font-semibold">
                      سوال شما با موفقیت ثبت شد و پاسخ داده خواهد شد.
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      پاسخ توسط پزشک معتمد وب‌کلینیک داده می‌شود.
                    </span>
                  )}
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>ارسال سوال پزشکی</span>
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 rounded-xl border border-slate-100 bg-white space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-slate-900">{comment.author}</span>
                      <span>{comment.date}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {comment.text}
                    </p>
                    {comment.doctorReply && (
                      <div className="mt-2.5 p-3 bg-blue-50/70 border-r-2 border-blue-600 rounded-lg text-xs text-blue-950 space-y-1">
                        <span className="font-bold text-blue-800 block text-[11px]">
                          پاسخ دکتر ارتوپد وب‌کلینیک:
                        </span>
                        <p>{comment.doctorReply}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top Specialists Mentioned in Article */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-900">
                  پزشکان برجسته نام‌برده در مقاله
                </span>
                <span className="text-[11px] text-blue-700 font-semibold">
                  اصفهان
                </span>
              </div>

              <div className="space-y-3">
                {relevantDoctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 hover:border-blue-300 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4
                          onClick={() => onSelectDoctor?.(doc)}
                          className="text-xs font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors"
                          title={`مشاهده صفحه اختصاصی ${doc.name}`}
                        >
                          {doc.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 block truncate max-w-[180px]">
                          {doc.subSpecialty}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        ★ {doc.rating}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 flex items-center justify-between">
                      <span>{doc.district}</span>
                      <span className="text-blue-700 font-medium">{doc.nextAvailableSlot}</span>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                      <button
                        onClick={() => onBookDoctor(doc)}
                        className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-semibold transition-colors cursor-pointer shadow-xs text-center"
                      >
                        رزرو نوبت
                      </button>
                      <button
                        onClick={() => onSelectDoctor?.(doc)}
                        className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-full text-xs font-semibold transition-colors cursor-pointer text-center"
                      >
                        پروفایل
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Knowledge Base Articles */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              <span className="text-xs font-bold text-slate-900 block border-b border-slate-100 pb-2">
                مقالات و دانستنی‌های مرتبط
              </span>
              <div className="space-y-3">
                {RELATED_BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-blue-700 font-medium">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast Insurance Check Banner */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-5 rounded-2xl shadow-xs space-y-3">
              <span className="text-xs text-blue-300 font-semibold block">
                تامین اجتماعی · دانا · ایران · ساتا
              </span>
              <h4 className="text-sm font-bold leading-snug">
                می‌خواهید بدانید عمل زانو یا دیسک چقدر تحت پوشش بیمه شماست؟
              </h4>
              <p className="text-xs text-slate-300">
                با محاسبه‌گر فرانشیز وب‌کلینیک، سهم خود و سهم بیمه را آنلاین بسنجید.
              </p>
              <button
                onClick={onOpenInsurances}
                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-xs transition-colors cursor-pointer shadow-xs"
              >
                ورود به بخش محاسبه‌گر بیمه‌ها
              </button>
            </div>

          </div>

        </div>

      </div>
    </article>
  );
};
