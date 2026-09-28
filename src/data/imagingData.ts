import { ImagingCenter } from '../types';

export const ISFAHAN_IMAGING_CENTERS: ImagingCenter[] = [
  {
    id: 'mri-shamsabadi',
    name: 'مرکز جامع تصویربرداری پزشکی و MRI شمس‌آبادی',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'],
    type: 'comprehensive_imaging',
    teslaPower: '۱.۵ تسلا زیمنس مگنتوم (Siemens Magnetom)',
    isOpenMri: false,
    address: 'اصفهان، خیابان شمس‌آبادی، مابین چهارراه قصر و عیسی بن مریم، ساختمان پزشکان شمس',
    district: 'خیابان شمس‌آبادی',
    phone: '031-32219010',
    operatingHours: 'شنبه تا پنجشنبه: ۸:۰۰ الی ۲۳:۰۰ - پذیرش اورژانس ارتوپدی',
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia', 'atiyeh', 'saman', 'kosar'],
    features: [
      'ام‌آر‌آی اختصاصی زانو، هیپ و ستون فقرات با کویل‌های چندکاناله',
      'گرافی فول لگ الایمنت ویو (Full Leg Alignment View) سه مفصلی دیجیتال',
      'سی‌تی‌اسکن مولتی دیتکتور ۶۴ اسلایس با بازسازی سه بعدی مفاصل',
      'سامانه مشاهده و ارسال آنلاین کلیشه‌ها و گزارش (PACS اختصاصی)'
    ],
    rating: 4.88
  },
  {
    id: 'mri-sepahan-open',
    name: 'مرکز تصویربرداری پزشکی سپاهان (ام‌آر‌آی روباز)',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'],
    type: 'mri_center',
    teslaPower: 'MRI روباز (Open MRI) ویژه اطفال و بیماران کلاستروفوبیا',
    isOpenMri: true,
    address: 'اصفهان، خیابان آمادگاه، روبروی هتل عباسی، مجتمع پزشکی سپاهان، طبقه زیرزمین',
    district: 'خیابان آمادگاه',
    phone: '031-32224590',
    operatingHours: 'همه روزه از ساعت ۸:۰۰ الی ۲۱:۰۰',
    acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran', 'alborz', 'asia', 'pasargad', 'moalem'],
    features: [
      'دستگاه MRI با دهانه باز بدون احساس خفگی یا ترس از فضای بسته',
      'امکان همراهی والدین کنار کودک هنگام اسکن بدون نیاز به بیهوشی',
      'تجهیزات ارتوپدی اختصاصی شانه، مچ دست و مچ پا',
      'ارائه تصاویر بر روی CD و لینک اینترنتی فوری'
    ],
    rating: 4.92
  },
  {
    id: 'radiology-ashtari',
    name: 'مرکز تخصصی رادیولوژی و سنجش تراکم استخوان دکتر اشتری',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'],
    type: 'radiology_clinic',
    teslaPower: 'رادیولوژی دیجیتال DDR و دنسیتومتری Hologic',
    isOpenMri: false,
    address: 'اصفهان، خیابان طیب، خیابان آیت‌الله نجفی، مجتمع پزشکی دی، طبقه اول',
    district: 'خیابان طیب',
    phone: '031-32356070',
    operatingHours: 'شنبه تا چهارشنبه: ۹:۰۰ الی ۲۰:۳۰',
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'atiyeh'],
    features: [
      'سنجش دقیق تراکم استخوان (DEXA) با دستگاه پیشرفته هولوژیک آمریکا',
      'گرافی تخصصی استخوان‌های بلند و زاویه‌سنجی زانو پرانتزی و ضربدری',
      'رادیولوژی دیجیتال کم‌پرتو ویژه بانوان و نوجوانان',
      'گزارش‌نویسی و تطبیق زاویه اندیکاسیون جراحی استئوتومی'
    ],
    rating: 4.8
  },
  {
    id: 'mri-kowsar',
    name: 'مرکز تصویربرداری پیشرفته کوثر اصفهان',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'],
    type: 'comprehensive_imaging',
    teslaPower: '۱.۵ تسلا فیلیپس با قابلیت تصویربرداری فلزات (Metal Artifact Reduction)',
    isOpenMri: false,
    address: 'اصفهان، خیابان بزرگمهر، تقاطع خیابان شریف واقفی، ساختمان کوثر',
    district: 'خیابان بزرگمهر',
    phone: '031-32651120',
    operatingHours: 'شنبه تا پنجشنبه به صورت شبانه‌روزی (۲۴ ساعته)',
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'asia', 'alborz', 'kosar', 'saman'],
    features: [
      'پروتکل اختصاصی MARS برای بیماران دارای پروتز و پلاتین فلزی در بدن',
      'سونوگرافی داپلر رنگی عروقی جهت رد لخته خون DVT بعد از عمل مفاصل',
      'سی‌تی آنژیوگرافی و تصویربرداری اینترونشنال',
      'پذیرش مستقیم بیمه تکمیلی بدون نیاز به مراجعه حضوری به نمایندگی'
    ],
    rating: 4.85
  },
  {
    id: 'mri-kashani-academic',
    name: 'بخش تصویربرداری ام‌آر‌آی و سی‌تی‌اسکن بیمارستان کاشانی',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'],
    type: 'comprehensive_imaging',
    teslaPower: '۳ تسلا پژوهشی و سی‌تی ۱۲۸ اسلایس ترومای حاد',
    isOpenMri: false,
    address: 'اصفهان، خیابان آیت‌الله کاشانی، مرکز آموزشی درمانی کاشانی',
    district: 'خیابان کاشانی',
    phone: '031-32330091',
    operatingHours: '۲۴ ساعته شبانه‌روزی برای بیماران اورژانس تروما و شکستگی',
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia', 'atiyeh', 'kosar'],
    features: [
      'تنها مرکز تصویربرداری فوریتی ترومای حاد استخوان و مفاصل در اصفهان',
      'دستگاه سی‌تی‌اسکن تروما با بیشترین سرعت اسکن در کسر ثانیه',
      'پوشش ۱۰۰ درصدی بیمه‌های پایه دولتی با کمترین تعرفه کشوری',
      'حضور مستمر متخصصین رادیولوژی هیئت علمی دانشگاه علوم پزشکی اصفهان'
    ],
    rating: 4.78
  }
];
