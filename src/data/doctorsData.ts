import { Doctor } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-najafi',
    name: 'دکتر امیر نجفی',
    avatarText: 'د.ن',
    avatarImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق معاینه و ویزیت داخلی' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن انتظار مجتمع پزشکی سینا' },
      { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', title: 'تجهیزات ارزیابی علائم حیاتی و نوار قلب' },
    ],
    medicalCode: '۵۲۹۴۰',
    title: 'دکتر',
    subSpecialty: 'متخصص داخلی با بیش از ۱۲ سال سابقه بالینی',
    specialtyTag: 'rehab',
    experienceYears: 12,
    rating: 4.5,
    reviewCount: 142,
    satisfactionRate: 95,
    academicRank: 'متخصص بیماری‌های داخلی و گوارش، عضو جامعه پزشکان داخلی',
    workingHours: 'روزهای شنبه تا چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰',
    address: 'اصفهان، خیابان شمس‌آبادی، مجتمع پزشکی سینا، طبقه دوم',
    district: 'خیابان شمس‌آبادی',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع پزشکی سینا',
    floorAndUnit: 'طبقه دوم، واحد ۲۰۱',
    coordinates: { lat: 32.6562, lng: 51.6669 },
    instagram: 'dr.amir_najafi',
    whatsapp: '989128801010',
    telegram: 'dr_najafi_internal',
    website: 'https://drnajafi.vebclinic.ir',
    specialtiesList: [
      'چکاپ جامع سلامت داخلی و غدد',
      'کنترل و درمان دیابت و فشار خون مزمن',
      'بررسی و درمان مشکلات گوارشی و کبد چرب',
      'تفسیر آزمایشات خون و رادیولوژی تخصصی'
    ],
    hospitals: ['بیمارستان سینا اصفهان', 'کلینیک تخصصی نیما'],
    acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran', 'asia', 'ma'],
    consultationFee: 260000,
    nextAvailableSlot: 'امروز - ساعت ۱۷:۰۰',
    phone: '021-8801010',
    biography: 'دکتر امیر نجفی متخصص داخلی با بیش از 12 سال سابقه بالینی.',
    memberships: ['عضو انجمن متخصصین داخلی ایران', 'عضو جامعه پزشکان بالینی'],
    clinicAmenities: ['نوبت‌دهی آنلاین', 'پوشش بیمه پایه و تکمیلی', 'تفسیر سریع آزمایشات'],
    services: ['ویزیت و معاینه داخلی', 'کنترل بیماری‌های مزمن', 'مشاوره رژیم و کبد چرب'],
    availableDays: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'sn1', day: 'امروز', date: 'امروز', time: '۱۷:۰۰', period: 'عصر' },
      { id: 'sn2', day: 'امروز', date: 'امروز', time: '۱۸:۳۰', period: 'عصر' },
      { id: 'sn3', day: 'فردا', date: 'فردا', time: '۱۶:۳۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-n1',
        patientName: 'کامران یاری',
        date: '۲ روز پیش',
        rating: 5,
        treatment: 'چکاپ داخلی و کبد چرب',
        comment: 'بسیار پزشک متین، باحوصله و دانایی هستند. روند درمان عالی پیش رفت.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-heyrani',
    name: 'دکتر مجید حیرانی',
    avatarText: 'د.ح',
    avatarImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق معاینه ارتوپدی و مفاصل' },
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'فضای کلینیک گلدیس آمادگاه' },
      { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', title: 'بخش گچ‌گیری و آتل‌بندی سبک' },
    ],
    medicalCode: '۴۱۲۰۹',
    title: 'متخصص اورتوپدی و طب ورزشی',
    subSpecialty: 'متخصص اورتوپدی و طب ورزشی در اصفهان',
    specialtyTag: 'knee',
    experienceYears: 15,
    rating: 3.3,
    reviewCount: 88,
    satisfactionRate: 85,
    academicRank: 'عضو هیئت علمی دانشگاه و جراح مفاصل و طب ورزشی',
    workingHours: 'روزهای زوج از ساعت ۱۶:۳۰ الی ۲۱:۰۰',
    address: 'اصفهان، خیابان آمادگاه، مجتمع پزشکی گلدیس، ورودی دوم، طبقه سوم',
    district: 'خیابان آمادگاه',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع پزشکی گلدیس',
    floorAndUnit: 'طبقه سوم، واحد ۳۱۴',
    coordinates: { lat: 32.6528, lng: 51.6745 },
    instagram: 'dr.majid_heyrani',
    whatsapp: '989132201010',
    telegram: 'dr_heyrani_ortho',
    website: 'https://drheyrani.vebclinic.ir',
    specialtiesList: [
      'جراحی‌های بسته مفاصل و آسیب‌های ورزشی',
      'ترمیم رباط صلیبی و مینیسک زانو',
      'درمان دررفتگی‌های شانه و کشیدگی تاندون',
      'تزریق ژل و پلاسمای غنی از پلاکت (PRP)'
    ],
    hospitals: ['بیمارستان الزهرا (س)', 'بیمارستان خانواده'],
    acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran', 'alborz', 'asia'],
    consultationFee: 310000,
    nextAvailableSlot: 'فردا - ساعت ۱۷:۱۵',
    phone: '031-32221010',
    biography: 'دکتر مجید حیرانی متخصص ارتوپد در اصفهان و از پزشکان متبحر این رشته می باشد. دکتر حیرانی عضو هیئت علمی دانشگاه و با سوابق کاری درخشان در زمینه جراحی های مفاصل است .',
    memberships: ['عضو هیئت علمی دانشگاه', 'عضو انجمن جراحان ارتوپدی ایران'],
    clinicAmenities: ['آسانسور', 'پارکینگ مجاور', 'سیستم نوبت‌دهی آنلاین'],
    services: ['جراحی مفاصل', 'طب ورزشی', 'ترمیم مینیسک و رباط', 'تزریق مفصلی'],
    availableDays: ['شنبه', 'دوشنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'sh1', day: 'فردا', date: 'فردا', time: '۱۷:۱۵', period: 'عصر' },
      { id: 'sh2', day: 'فردا', date: 'فردا', time: '۱۸:۴۵', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-h1',
        patientName: 'محسن صابری',
        date: 'هفته گذشته',
        rating: 4,
        treatment: 'ویزیت آسیب ورزشی زانو',
        comment: 'پزشک باتجربه و باسوادی هستند و راهنمایی دقیقی ارائه دادند.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-karimi',
    name: 'دکتر محمودرضا کریمی',
    avatarText: 'د.ک',
    avatarImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'مطب فوق‌تخصصی دست و میکروسرجری' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'پذیرش و لابی مراجعین' },
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'میز تخصصی معاینه اعصاب محیطی' },
    ],
    medicalCode: '۴۸۳۹۰',
    title: 'متخصص ارتوپد در اصفهان',
    subSpecialty: 'ارائه درمان های جامع در حوزه سلامت سیستم اسکلتی-عضلانی',
    specialtyTag: 'hip',
    experienceYears: 14,
    rating: 1.0,
    reviewCount: 24,
    satisfactionRate: 70,
    academicRank: 'متخصص جراحی استخوان، مفاصل و ستون فقرات',
    workingHours: 'روزهای یکشنبه و سه‌شنبه از ساعت ۱۶:۰۰ الی ۲۰:۰۰',
    address: 'اصفهان، خیابان شمس‌آبادی، چهارراه قصر، ساختمان پزشکان قصر',
    district: 'خیابان شمس‌آبادی',
    city: 'اصفهان',
    clinicBuilding: 'ساختمان پزشکان قصر',
    floorAndUnit: 'طبقه دوم، واحد ۲۰۴',
    coordinates: { lat: 32.6555, lng: 51.6672 },
    instagram: 'dr.mahmoodreza_karimi',
    whatsapp: '989133102020',
    telegram: 'dr_karimi_ortho',
    website: 'https://drkarimi.vebclinic.ir',
    specialtiesList: [
      'سلامت سیستم اسکلتی-عضلانی',
      'درمان دردهای مفصلی و روماتیسمی',
      'گچ‌گیری و درمان شکستگی‌ها',
      'تزریقات کورتون و غضروف‌ساز'
    ],
    hospitals: ['بیمارستان سینا اصفهان', 'بیمارستان سعدی'],
    acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran'],
    consultationFee: 290000,
    nextAvailableSlot: 'پس‌فردا - ساعت ۱۶:۳۰',
    phone: '031-32219900',
    biography: 'دکتر محمودرضا کریمی به عنو ان یکی از بهترین متخصصان ارتوپد در شهر اصفهان با بهره‌گیری از دانش تخصصی روز دنیا و تکنیک های نوین درمانی به ارائه درمان های جامع در حوزه سلامت سیستم اسکلتی-عضلانی میپردازند . شما عزیزان میتوانید به صورت آنلاین نوبت خود را رزرو نمایید',
    memberships: ['عضو انجمن جراحان ارتوپدی ایران'],
    clinicAmenities: ['آسانسور', 'پذیرش بیمه تکمیلی'],
    services: ['درمان جامع اسکلتی-عضلانی', 'جراحی مفاصل', 'درمان شکستگی'],
    availableDays: ['یکشنبه', 'سه‌شنبه'],
    availableSlots: [
      { id: 'sk1', day: 'سه‌شنبه', date: 'سه‌شنبه', time: '۱۶:۳۰', period: 'عصر' },
      { id: 'sk2', day: 'سه‌شنبه', date: 'سه‌شنبه', time: '۱۸:۰۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-k1',
        patientName: 'بیمار وب‌کلینیک',
        date: 'ماه گذشته',
        rating: 1,
        treatment: 'ویزیت مفاصل',
        comment: 'ویزیت انجام شد و راهنمایی دارویی دریافت شد.',
        recommended: false
      }
    ]
  },
  {
    id: 'dr-ekramnia',
    name: 'دکتر فضل الله اکرام نیا',
    avatarText: 'د.ا',
    avatarImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق ویزیت جراحی ستون فقرات' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن انتظار مراجعین دیسک و کمر' },
      { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'نگاتوسکوپ و ارزیابی MRI ستون فقرات' },
    ],
    medicalCode: '۳۹۵۱۱',
    title: 'متخصص ارتوپد در اصفهان',
    subSpecialty: 'تشخیص و درمان بیماری های اسکلتی و مفاصل',
    specialtyTag: 'knee',
    experienceYears: 18,
    rating: 1.0,
    reviewCount: 19,
    satisfactionRate: 68,
    academicRank: 'متخصص ارتوپد با سابقه درخشان در اصفهان',
    workingHours: 'روزهای شنبه و چهارشنبه از ساعت ۱۵:۳۰ الی ۱۹:۳۰',
    address: 'اصفهان، خیابان بزرگمهر، چهارراه نورباران، ساختمان پزشکان اطبا',
    district: 'خیابان بزرگمهر',
    city: 'اصفهان',
    clinicBuilding: 'ساختمان پزشکان اطبا',
    floorAndUnit: 'طبقه اول، واحد ۱۰۳',
    coordinates: { lat: 32.6515, lng: 51.7018 },
    instagram: 'dr.fazlollah_ekramnia',
    whatsapp: '989132681010',
    telegram: 'dr_ekramnia_ortho',
    website: 'https://drekramnia.vebclinic.ir',
    specialtiesList: [
      'تشخیص بیماری‌های اسکلتی و ستون فقرات',
      'درمان آرتروز زانو و مفاصل',
      'درمان ناهنجاری‌های حرکتی',
      'تزریق داخل مفصلی'
    ],
    hospitals: ['بیمارستان شهید آیت‌الله کاشانی', 'بیمارستان صدوقی'],
    acceptedInsurances: ['tamin', 'salamat', 'dana', 'iran', 'asia'],
    consultationFee: 290000,
    nextAvailableSlot: 'شنبه آینده - ساعت ۱۶:۰۰',
    phone: '031-32681010',
    biography: 'دکتر فضلالله اکرامنیا به عنوان یکی از بهترین متخصصین ارتوپد در شهر اصفهان با تکیه بر تخصص و تجربه خود در زمینه تشخیص و درمان بیماری های اسکلتی آماده ارائه خدمات درمانی به مراجعین عزیز میباشد',
    memberships: ['عضو انجمن جراحان ارتوپدی ایران'],
    clinicAmenities: ['محیط آرام', 'دستگاه نوار عصب مجاور', 'پوشش بیمه'],
    services: ['تشخیص بیماری‌های اسکلتی', 'درمان بیماری‌های استخوان و مفاصل'],
    availableDays: ['شنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'se1', day: 'شنبه', date: 'شنبه', time: '۱۶:۰۰', period: 'عصر' },
      { id: 'se2', day: 'شنبه', date: 'شنبه', time: '۱۷:۳۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-e1',
        patientName: 'مراجع وب‌کلینیک',
        date: 'دو هفته پیش',
        rating: 1,
        treatment: 'ویزیت ستون فقرات',
        comment: 'معاینه انجام شد و توصیه به انجام MRI دادند.',
        recommended: false
      }
    ]
  },
  {
    id: 'dr-barzegar',
    name: 'دکتر محمدرضا برزگر',
    avatarText: 'د.ب',
    avatarImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق معاینه تعویض مفصل زانو و لگن' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'لابی مجتمع پزشکی آمادگاه' },
      { url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80', title: 'ماکت‌های آموزشی پروتز مفاصل' },
    ],
    medicalCode: '۴۳۲۹۱',
    title: 'ارتوپد ، فوق تخصص جراحی لگن و ران',
    subSpecialty: 'فلوشیپ فوق‌تخصصی جراحی تعویض مفاصل لگن و زانو (آرتروپلاستی)',
    specialtyTag: 'hip',
    experienceYears: 19,
    rating: 3.5,
    reviewCount: 384,
    satisfactionRate: 98,
    academicRank: 'عضو هیئت علمی و انجمن جراحان ارتوپدی ایران (IOA) و انجمن بین‌المللی SICOT',
    workingHours: 'روزهای زوج (شنبه، دوشنبه، چهارشنبه) از ساعت ۱۶:۰۰ الی ۲۱:۰۰',
    address: 'اصفهان، خیابان شمس‌آبادی، جنب بیمارستان سینا، مجتمع پزشکی آراد، طبقه ۳، واحد ۳۰۲',
    district: 'خیابان شمس‌آبادی',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع پزشکی آراد',
    floorAndUnit: 'طبقه سوم، واحد ۳۰۲',
    coordinates: { lat: 32.6568, lng: 51.6664 },
    instagram: 'dr.barzegar_ortho',
    whatsapp: '989132204510',
    telegram: 'dr_barzegar_clinic',
    website: 'https://drbarzegar.vebclinic.ir',
    specialtiesList: [
      'جراحی تعویض کامل مفصل زانو (TKR)',
      'تعویض اولیه و بازنگری مفصل لگن و ران (THR)',
      'اصلاح پای پرانتزی و انحراف مفصل (استئوتومی)',
      'آرتروپلاستی کم‌تهاجمی مفاصل',
      'تزریق ژل غضروف‌ساز و سلول‌درمانی PRP',
      'درمان آرتروز پیشرفته مفاصل سالمندان'
    ],
    hospitals: ['بیمارستان تخصصی سعدی اصفهان', 'بیمارستان شهید آیت‌الله کاشانی', 'کلینیک وب‌کلینیک اصفهان'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia', 'kosar', 'atiyeh'],
    consultationFee: 320000,
    nextAvailableSlot: 'فردا - ساعت ۱۷:۳۰',
    phone: '031-32204510',
    biography: 'دکتر محمدرضا برزگر یکی از پزشکان مجرب است که در عرصه جراحی لگن و ران و بیماری های مربوط به ارتوپدی در اصفهان فعالیت می کند. شما می توانید به صورت تلفنی یا اینترنتی نسبت به رزرو نوبت اقدام فرمایید .',
    memberships: [
      'عضو انجمن بین‌المللی جراحان استخوان و مفاصل (SICOT بلژیک)',
      'عضو انجمن جراحان زانو و آسیب‌های ورزشی ایران (ISKAST)',
      'عضو انجمن آرتروپلاستی و تعویض مفصل ایران',
      'دارای گواهینامه جراحی پیشرفته پروتزهای هیپ و زانو از آلمان'
    ],
    clinicAmenities: [
      'آسانسور برانکاردبر و ویلچر ویژه توان‌یابان',
      'دستگاه سونوگرافی اختصاصی جهت تزریقات دقیق داخل مفصل',
      'سیستم ثبت پرونده الکترونیک و ارسال نسخه آنلاین به داروخانه‌ها',
      'دستگاه پوز کارتخوان بانکی و صدور فاکتور رسمی بیمه تکمیلی',
      'نزدیکی به ایستگاه مترو امام حسین (ع) و پارکینگ طبقاتی شمس‌آبادی'
    ],
    services: [
      'جراحی تعویض کامل مفصل زانو (TKR) با پروتزهای روز دنیا',
      'تعویض اولیه و بازنگری مفصل لگن و ران (THR)',
      'درمان آرتروزهای پیشرفته مفاصل سالمندان',
      'تزریقات غضروف‌ساز و پی‌آر‌پی (PRP) تحت گاید سونوگرافی',
      'جراحی اصلاح انحراف زانو پرانتزی (استئوتومی)'
    ],
    availableDays: ['شنبه', 'دوشنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 's1', day: 'فردا (دوشنبه)', date: '۲۸ شهریور', time: '۱۷:۳۰', period: 'عصر' },
      { id: 's2', day: 'فردا (دوشنبه)', date: '۲۸ شهریور', time: '۱۸:۱۵', period: 'عصر' },
      { id: 's3', day: 'فردا (دوشنبه)', date: '۲۸ شهریور', time: '۱۹:۰۰', period: 'عصر' },
      { id: 's4', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۶:۳۰', period: 'عصر' },
      { id: 's5', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۸:۰۰', period: 'عصر' },
      { id: 's6', day: 'شنبه آینده', date: '۲ مهر', time: '۱۷:۰۰', period: 'عصر' },
    ],
    reviews: [
      {
        id: 'rev-1',
        patientName: 'حاج احمد رضایی',
        date: '۳ روز پیش',
        rating: 5,
        treatment: 'عمل تعویض کامل مفصل زانو (بیمارستان سعدی)',
        hospital: 'بیمارستان سعدی اصفهان',
        comment: 'مادرم ۶۸ ساله بودند و به دلیل ساییدگی شدید زانو راه رفتن برایشان مقدور نبود. آقای دکتر برزگر در بیمارستان سعدی عمل تعویض مفصل انجام دادند. الان بعد از ۳ هفته بدون واکر به راحتی راه میروند. اخلاق دکتر و تبحرشان بی‌نظیر است.',
        recommended: true
      },
      {
        id: 'rev-2',
        patientName: 'مهندس حسینی',
        date: 'هفته گذشته',
        rating: 5,
        treatment: 'تعویض مفصل لگن با پروتز سرامیکی',
        hospital: 'بیمارستان کاشانی',
        comment: 'با بیمه دانا معرفی‌نامه آنلاین صادر شد و هزینه فرانشیز خیلی ناچیز شد. جراحی لگن بسیار حساس بود ولی کار آقای دکتر فوق‌العاده تمیز و بدون هیچ دردی انجام شد.',
        recommended: true
      },
      {
        id: 'rev-3',
        patientName: 'مریم کلاهدوزان',
        date: '۲ هفته پیش',
        rating: 4.8,
        treatment: 'تزریق ژل غضروف‌ساز و PRP زانو',
        comment: 'در مطب شمس‌آبادی ویزیت شدم. سونوگرافی دقیق انجام دادند و تزریق ژل بدون هیچ سوزش یا دردی انجام شد. نوبت‌دهی آنلاین وب‌کلینیک هم خیلی معطلی در مطب را کم کرد.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-masoudi',
    name: 'دکتر فرشاد مسعودی',
    avatarText: 'د.م',
    avatarImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'مطب فوق‌تخصصی دیسک و ستون فقرات' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن پذیرش مراجعین شمس‌آبادی' },
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'سامانه تحلیل زاویه انحراف اسکولیوز' },
    ],
    medicalCode: '۵۱۸۰۲',
    title: 'متخصص ارتوپدی و جراحی مفاصل',
    subSpecialty: 'فوق تخصص آرتروسکوپی زانو، شانه و جراحی آسیب‌های ورزشی',
    specialtyTag: 'knee',
    experienceYears: 16,
    rating: 4.85,
    reviewCount: 295,
    satisfactionRate: 97,
    academicRank: 'فوق تخصص جراحی زانو و آرتروسکوپی مفاصل، مشاور آسیب‌های ورزشی باشگاه ذوب‌آهن و سپاهان',
    workingHours: 'روزهای فرد (یکشنبه، سه‌شنبه، پنجشنبه) از ساعت ۱۶:۳۰ الی ۲۱:۳۰',
    address: 'اصفهان، خیابان آمادگاه، مجتمع گلدیس، ورودی اول، طبقه دوم، واحد ۲۱۴',
    district: 'خیابان آمادگاه',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع تجاری و پزشکی گلدیس',
    floorAndUnit: 'ورودی اول، طبقه دوم، واحد ۲۱۴',
    coordinates: { lat: 32.6525, lng: 51.6741 },
    instagram: 'dr.farshad_masoudi',
    whatsapp: '989132228941',
    telegram: 'dr_masoudi_ortho',
    website: 'https://drmasoudi.vebclinic.ir',
    specialtiesList: [
      'جراحی آرتروسکوپیک بازسازی رباط صلیبی (ACL / PCL)',
      'ترمیم پیشرفته مینیسک و پیوند غضروف مفصلی',
      'آرتروسکوپی شانه و ترمیم پارگی تاندون روتاتور کاف',
      'درمان دررفتگی‌های مکرر شانه (جراحی بانکارت)',
      'تزریق ژل هیالورونیک و ارتوکین‌تراپی مفاصل ورزشکاران',
      'جراحی بسته آسیب‌های ورزشی مچ پا'
    ],
    hospitals: ['بیمارستان الزهرا (س)', 'بیمارستان خانواده اصفهان', 'دی‌کلینیک شفا'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'saman', 'pasargad'],
    consultationFee: 300000,
    nextAvailableSlot: 'امروز - ساعت ۱۸:۴۵',
    phone: '031-32228941',
    biography: 'دکتر فرشاد مسعودی پزشک نام‌آشنا در زمینه جراحی بسته رباط صلیبی قدامی (ACL)، ترمیم مینیسک زانو و آسیب‌های شانه ورزشکاران حرفه‌ای در استان اصفهان. بهره‌گیری از متدهای توانبخشی سریع (Fast-Track) جهت بازگشت سریع به ورزش.',
    memberships: [
      'عضو فدراسیون بین‌المللی طب ورزش (FIMS)',
      'عضو انجمن جراحان آرتروسکوپی ایران',
      'پزشک معتمد هیئت پزشکی ورزشی استان اصفهان'
    ],
    clinicAmenities: [
      'دستگاه نوار عصب و مانیتورینگ بیومکانیک حرکتی',
      'دسترسی مناسب در قلب خیابان آمادگاه با پارکینگ اختصاصی گلدیس',
      'امکان صدور گواهی استراحت پزشکی و ارجاع فیزیوتراپی ورزشی',
      'پشتیبانی آنلاین پرونده پس از عمل'
    ],
    services: [
      'جراحی آرتروسکوپیک بازسازی رباط صلیبی زانو',
      'ترمیم مینیسک و پیوند غضروف مفصلی',
      'درمان دررفتگی‌های مکرر شانه و پارگی روتاتور کاف',
      'آرتروسکوپی مچ پا و مفاصل',
      'تزریق ژل هیالورونیک و سلول‌درمانی مفاصل'
    ],
    availableDays: ['یکشنبه', 'سه‌شنبه', 'پنجشنبه'],
    availableSlots: [
      { id: 'sm1', day: 'امروز (یکشنبه)', date: '۲۷ شهریور', time: '۱۸:۴۵', period: 'عصر' },
      { id: 'sm2', day: 'امروز (یکشنبه)', date: '۲۷ شهریور', time: '۱۹:۳۰', period: 'عصر' },
      { id: 'sm3', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۷:۰۰', period: 'عصر' },
      { id: 'sm4', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۸:۳۰', period: 'عصر' },
      { id: 'sm5', day: 'پنجشنبه', date: '۳۱ شهریور', time: '۱۶:۳۰', period: 'عصر' },
    ],
    reviews: [
      {
        id: 'rev-m1',
        patientName: 'امیرعلی صائبی (بازیکن فوتسال)',
        date: '۵ روز پیش',
        rating: 5,
        treatment: 'عمل بازسازی رباط صلیبی ACL به روش آرتروسکوپی',
        hospital: 'بیمارستان خانواده اصفهان',
        comment: 'توی مسابقات دچار پارگی رباط صلیبی و مینیسک شدم. دکتر مسعودی عملم کردند و بعد از ۵ ماه الان تمرینات با توپ رو شروع کردم. پروتکل توانبخشی‌شون واقعا حرفه‌ای بود.',
        recommended: true
      },
      {
        id: 'rev-m2',
        patientName: 'سمانه نصر',
        date: '۱۰ روز پیش',
        rating: 4.9,
        treatment: 'ترمیم مینیسک زانو راست',
        comment: 'تشخیص عالی و سریع با مشاهده ام‌آر‌آی. از منشی مطب تا خود دکتر همه بسیار خوش‌برخورد بودند و فرآیند بیمه تکمیلی بدون معطلی پیش رفت.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-mortazavi',
    name: 'دکتر علیرضا مرتضوی',
    avatarText: 'د.م',
    avatarImage: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'کلینیک تخصصی شانه و آسیب‌های ورزشی' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'لابی مراجعین خیابان وحید' },
      { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', title: 'دستگاه سونوگرافی تاندون‌های روتاتور کاف' },
    ],
    medicalCode: '۴۶۷۱۲',
    title: 'متخصص جراحی استخوان و مفاصل',
    subSpecialty: 'فوق تخصص جراحی تعویض مفصل زانو، لگن و بازنگری پروتز (آرتروپلاستی)',
    specialtyTag: 'hip',
    experienceYears: 18,
    rating: 4.91,
    reviewCount: 340,
    satisfactionRate: 98,
    academicRank: 'فلوشیپ فوق‌تخصصی تعویض مفاصل از سوئیس، عضو انجمن جراحان هیپ و زانو ایران',
    workingHours: 'روزهای یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰',
    address: 'اصفهان، خیابان شمس‌آبادی، چهارراه قصر، مجتمع پزشکی قصر، طبقه دوم',
    district: 'خیابان شمس‌آبادی',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع پزشکی قصر',
    floorAndUnit: 'طبقه دوم، واحد ۲۰۵',
    coordinates: { lat: 32.6552, lng: 51.6675 },
    instagram: 'dr.mortazavi_ortho',
    whatsapp: '989133189900',
    telegram: 'dr_mortazavi_clinic',
    website: 'https://drmortazavi.vebclinic.ir',
    specialtiesList: [
      'جراحی تعویض کامل مفصل زانو با پروتزهای آناتومیک',
      'تعویض مفصل ران و لگن با تکنیک کم‌خونریزی (Direct Anterior)',
      'جراحی‌های تعویض مجدد پروتزهای شل‌شده (Revision Hip & Knee)',
      'درمان نکروز آواسکولار سر فمور (سیاه شدن استخوان ران)',
      'اصلاح انحراف ژنوواروم (پای پرانتزی)'
    ],
    hospitals: ['بیمارستان تخصصی سعدی اصفهان', 'بیمارستان سینا اصفهان', 'بیمارستان شهید آیت‌الله کاشانی'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia'],
    consultationFee: 320000,
    nextAvailableSlot: 'فردا - ساعت ۱۸:۰۰',
    phone: '031-32219800',
    biography: 'دکتر علیرضا مرتضوی از جراحان برجسته تعویض مفصل در اصفهان، همکار نزدیک دکتر برزگر در جراحی‌های پیچیده آرتروپلاستی. وی دوره‌های تکمیلی جراحی بازسازی مفاصل را در سوئیس و آلمان گذرانده و از پیشگامان جراحی کم‌تهاجمی لگن در مرکز کشور می‌باشد.',
    memberships: [
      'عضو انجمن جراحان ارتوپدی ایران (IOA)',
      'عضو انجمن تعویض مفصل اروپا (EKA / ESSKA)',
      'عضو آکادمی جراحان هیپ و زانو'
    ],
    clinicAmenities: [
      'آسانسور اختصاصی و راهروی استاندارد بدون پله',
      'دستگاه اندازه‌گیری انحراف قامت دیجیتال',
      'اتاق پانسمان و کشیدن بخیه مجهز',
      'طرف قرارداد مستقیم با بیمه‌های تکمیلی دانا و ایران'
    ],
    services: [
      'عمل تعویض کامل مفصل زانو (TKR)',
      'عمل تعویض کامل مفصل لگن (THR)',
      'جراحی مجدد تعویض مفصل فرسوده یا لق‌شده',
      'تزریق ژل هیالورونیک و پی‌آر‌پی زانو'
    ],
    availableDays: ['یکشنبه', 'سه‌شنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'mor1', day: 'فردا (یکشنبه)', date: '۲۷ شهریور', time: '۱۸:۰۰', period: 'عصر' },
      { id: 'mor2', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۷:۱۵', period: 'عصر' },
      { id: 'mor3', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۹:۰۰', period: 'عصر' },
    ],
    reviews: [
      {
        id: 'rev-mor1',
        patientName: 'اصغر امینی',
        date: '۴ روز پیش',
        rating: 5,
        treatment: 'تعویض مفصل زانوی چپ در بیمارستان سعدی',
        hospital: 'بیمارستان سعدی اصفهان',
        comment: 'عمل بسیار موفقی داشتم. دکتر مرتضوی هم از نظر اخلاقی فوق‌العاده هستند و هم از نظر تخصص جراحی. بعد از دو هفته خیلی راحت راه رفتم.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-salehi',
    name: 'دکتر محمدحسین صالحی',
    avatarText: 'د.ص',
    avatarImage: 'https://images.unsplash.com/photo-1594824813589-fb5ff52b1130?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'فضای کودک‌محور و شاد معاینه ارتوپدی اطفال' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن بازی و انتظار کودکان و والدین' },
      { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', title: 'دستگاه اسکن پای صاف و زاویه‌سنج پا' },
    ],
    medicalCode: '۳۸۹۴۰',
    title: 'متخصص جراحی استخوان، مفاصل و ستون فقرات',
    subSpecialty: 'فوق تخصص جراحی دیسک، ستون فقرات و اسکولیوز (انحراف ستون مهره‌ها)',
    specialtyTag: 'spine',
    experienceYears: 22,
    rating: 4.92,
    reviewCount: 420,
    satisfactionRate: 99,
    academicRank: 'استاد تمام و فلوشیپ جراحی فوق‌تخصصی ستون فقرات، عضو دپارتمان ارتوپدی دانشگاه علوم پزشکی',
    workingHours: 'روزهای شنبه، سه‌شنبه، چهارشنبه از ساعت ۱۵:۳۰ الی ۲۱:۰۰',
    address: 'اصفهان، خیابان طیب، کوچه مهرداد (شماره ۱۲)، ساختمان پزشکان قائم، طبقه اول، واحد ۱۰۴',
    district: 'خیابان طیب',
    city: 'اصفهان',
    clinicBuilding: 'ساختمان پزشکان قائم',
    floorAndUnit: 'طبقه اول، واحد ۱۰۴',
    coordinates: { lat: 32.6612, lng: 51.6621 },
    instagram: 'dr.salehi_spine',
    whatsapp: '989132367740',
    telegram: 'dr_salehi_spine_clinic',
    website: 'https://drsalehi.vebclinic.ir',
    specialtiesList: [
      'جراحی میکروسکوپی دیسک کمر و گردن (میکرودیسککتومی)',
      'جراحی تنگی کانال نخاعی و لامینکتومی',
      'اصلاح انحراف ستون مهره‌ها (اسکولیوز و قوز پشتی/کیفوز)',
      'تزریق اپیدورال ضددرد و بلاک ریشه عصبی تحت فلوروسکوپی',
      'جراحی بسته شکستگی مهره‌ها (ورتبروپلاستی و کیفوپلاستی)',
      'درمان سر خوردگی مهره‌ها (اسپوندیلولیستزیس)'
    ],
    hospitals: ['بیمارستان شهید آیت‌الله کاشانی', 'بیمارستان سعدی اصفهان'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia', 'atiyeh'],
    consultationFee: 350000,
    nextAvailableSlot: 'پس‌فردا - ساعت ۱۶:۰۰',
    phone: '031-32367740',
    biography: 'دکتر محمدحسین صالحی از اساتید برجسته جراحی ستون فقرات در اصفهان با بیش از دو دهه تجربه در جراحی‌های میکروسکوپی و آندوسکوپی دیسک کمر، گردن و جراحی‌های اصلاح انحراف ستون فقرات با کمترین عوارض و بازگشت سریع به فعالیت‌های روزمره.',
    memberships: [
      'عضو انجمن جراحان ستون فقرات اروپا (EuroSpine)',
      'عضو انجمن جراحان ستون فقرات ایران (ISS)',
      'پژوهشگر ارشد در حوزه فیوژن و تعویض دیسک مصنوعی'
    ],
    clinicAmenities: [
      'تجهیزات ارزیابی ساختار قامتی و اسکنر ستون فقرات',
      'تزریقات اپیدورال ضددرد و بلاک عصبی سرپایی',
      'آسانسور و فضای رمپ مناسب سالمندان و بیماران ویلچری',
      'پذیرش آنلاین با بیمه‌های درمانی تامین اجتماعی و سلامت'
    ],
    services: [
      'میکرودیسککتومی کم‌تهاجمی دیسک کمر و گردن',
      'جراحی تنگی کانال نخاعی و لیزخوردگی مهره‌ها (اسپوندیلولیستزیس)',
      'اصلاح انحراف ستون مهره‌ها (اسکولیوز و کیفوز)',
      'تزریق اپیدورال ضددرد تحت دستگاه فلوروسکوپی',
      'درمان شکستگی‌های مهره با روش ورتبروپلاستی و کیفوپلاستی'
    ],
    availableDays: ['شنبه', 'سه‌شنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'ss1', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۶:۰۰', period: 'عصر' },
      { id: 'ss2', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۷:۳۰', period: 'عصر' },
      { id: 'ss3', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۶:۱۵', period: 'عصر' },
      { id: 'ss4', day: 'شنبه آینده', date: '۲ مهر', time: '۱۶:۳۰', period: 'عصر' },
    ],
    reviews: [
      {
        id: 'rev-s1',
        patientName: 'پروین شفیعی',
        date: '۴ روز پیش',
        rating: 5,
        treatment: 'جراحی میکروسکوپی تنگی کانال نخاعی L4-L5',
        hospital: 'بیمارستان کاشانی',
        comment: 'سال‌ها از سوزش و بی‌حسی پا رنج می‌بردم و از عمل ستون فقرات وحشت داشتم. دکتر صالحی با جراحی میکروسکوپی مشکلم را حل کردند و روز بعد از عمل خودم راه رفتم. دستمریزاد به ایشان.',
        recommended: true
      },
      {
        id: 'rev-s2',
        patientName: 'حمیدرضا زمانی',
        date: '۲ هفته پیش',
        rating: 5,
        treatment: 'تزریق اپیدورال ستون فقرات جهت دیسک گردن',
        comment: 'به جای عمل باز، دکتر برام تزریق ضددرد تجویز کردند و درد شدید دستم کلاً قطع شد. پزشکی بسیار با وجدان و حاذق هستند.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-khodabandeh',
    name: 'دکتر سعید خدابنده',
    avatarText: 'د.خ',
    avatarImage: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق ویزیت ارتوپدی عمومی و شکستگی‌ها' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'پذیرش و لابی مطب بزرگمهر' },
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', title: 'تجهیزات تعویض پانسمان و آتل‌بندی' },
    ],
    medicalCode: '۴۵۱۸۰',
    title: 'متخصص جراحی ارتوپدی و ستون فقرات',
    subSpecialty: 'فوق تخصص جراحی آندوسکوپی دیسک کمر، لیزر دیسک و جراحی‌های کم‌تهاجمی ستون فقرات',
    specialtyTag: 'spine',
    experienceYears: 17,
    rating: 4.87,
    reviewCount: 310,
    satisfactionRate: 97,
    academicRank: 'فلوشیپ فوق‌تخصصی جراحی آندوسکوپیک ستون فقرات، عضو جامعه جراحان کم‌تهاجمی',
    workingHours: 'روزهای یکشنبه، سه‌شنبه، پنجشنبه از ساعت ۱۶:۰۰ الی ۲۱:۰۰',
    address: 'اصفهان، خیابان شمس‌آبادی، بین چهارراه قصر و کوالالامپور، ساختمان پزشکان ایران مهر، طبقه دوم',
    district: 'خیابان شمس‌آبادی',
    city: 'اصفهان',
    clinicBuilding: 'ساختمان پزشکان ایران مهر',
    floorAndUnit: 'طبقه دوم، واحد ۲۰۲',
    coordinates: { lat: 32.6575, lng: 51.6658 },
    instagram: 'dr.khodabandeh_spine',
    whatsapp: '989132200114',
    telegram: 'dr_khodabandeh_clinic',
    website: 'https://drkhodabandeh.vebclinic.ir',
    specialtiesList: [
      'جراحی تمام‌آندوسکوپیک دیسک کمر (بدون بیهوشی عمومی)',
      'لیزر دیسکوتومی و پلاسماتراپی دیسک',
      'درمان سیاتیک مقاوم و تنگی کانال ستون فقرات',
      'تزریق سیمان استخوانی به مهره‌های شکسته سالمندان',
      'درمان دردهای مزمن کمر با رادیوفرکوئنسی (RF)'
    ],
    hospitals: ['بیمارستان سعدی اصفهان', 'بیمارستان الزهرا (س)', 'کلینیک تخصصی صبا'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia'],
    consultationFee: 330000,
    nextAvailableSlot: 'فردا - ساعت ۱۷:۰۰',
    phone: '031-32200114',
    biography: 'دکتر سعید خدابنده از پیشگامان تکنولوژی جراحی تمام‌آندوسکوپیک دیسک و ستون فقرات در استان اصفهان. وی با بهره‌گیری از تجهیزات آلمانی روز دنیا، جراحی دیسک را با برش کمتر از یک سانتیمتر و ترخیص همان روز انجام می‌دهد.',
    memberships: [
      'عضو جامعه بین‌المللی جراحی آندوسکوپی ستون فقرات (ISASS)',
      'عضو انجمن جراحان ارتوپدی ایران'
    ],
    clinicAmenities: [
      'اتاق معاینه مجهز به سیستم نمایش دیجیتال MRI',
      'دستگاه رادیوفرکوئنسی کنترل درد',
      'آسانسور و رمپ ویلچر ویژه توان‌یابان',
      'صدور معرفی‌نامه آنلاین بیمه تکمیلی'
    ],
    services: [
      'دیسککتومی آندوسکوپی دیسک کمر',
      'تزریق رادیوفرکوئنسی مفاصل فاست ستون فقرات',
      'کیفوپلاستی شکستگی‌های استئوپروتیک',
      'بررسی و معاینه جامع اختلالات نخاعی'
    ],
    availableDays: ['یکشنبه', 'سه‌شنبه', 'پنجشنبه'],
    availableSlots: [
      { id: 'kh1', day: 'فردا (یکشنبه)', date: '۲۷ شهریور', time: '۱۷:۰۰', period: 'عصر' },
      { id: 'kh2', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۸:۱۵', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-kh1',
        patientName: 'مرتضی کاویانی',
        date: 'هفته گذشته',
        rating: 5,
        treatment: 'عمل آندوسکوپی دیسک کمر L5-S1',
        hospital: 'بیمارستان سعدی اصفهان',
        comment: 'با بی‌حسی موضعی و آندوسکوپی عملم کردند. ۴ ساعت بعد عمل خودم بدون درد مرخص شدم. کارشون معجزه بود.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-seddighin',
    name: 'دکتر احمد صدیقین',
    avatarText: 'د.ص',
    avatarImage: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'مطب فوق‌تخصصی تعویض مجدد مفاصل' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن انتظار مراجعین کلینیک سعدی' },
      { url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80', title: 'سامانه دیجیتال برنامه‌ریزی پروتز' },
    ],
    medicalCode: '۴۸۷۲۰',
    title: 'متخصص ارتوپدی و جراحی تروما و اندام فوقانی',
    subSpecialty: 'فوق تخصص جراحی شانه، آرنج، دست و شکستگی‌های پیچیده اندام',
    specialtyTag: 'shoulder',
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 215,
    satisfactionRate: 96,
    academicRank: 'فوق تخصص جراحی شانه و دست، عضو هیئت جراحان ترومای ارتوپدی اصفهان',
    workingHours: 'روزهای دوشنبه، چهارشنبه، پنجشنبه از ساعت ۱۷:۰۰ الی ۲۱:۳۰',
    address: 'اصفهان، خیابان وحید، چهارراه خاقانی، مجتمع شمس، طبقه چهارم، واحد ۴۰۱',
    district: 'خیابان وحید',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع تجاری و اداری شمس',
    floorAndUnit: 'طبقه چهارم، واحد ۴۰۱',
    coordinates: { lat: 32.6341, lng: 51.6492 },
    instagram: 'dr.seddighin_hand_shoulder',
    whatsapp: '989136275140',
    telegram: 'dr_seddighin_ortho',
    website: 'https://drseddighin.vebclinic.ir',
    specialtiesList: [
      'جراحی پارگی تاندون روتاتور کاف و شانه یخ‌زده',
      'آزادسازی میکروسکوپیک عصب مچ دست (سندرم تونل کارپال CTS)',
      'تعویض مفصل معکوس و آناتومیک شانه',
      'درمان شکستگی‌های خردشده استخوان ترقوه، بازو و مچ دست',
      'پیوند و ترمیم تاندون‌های فلکسور و اکستانسور دست',
      'آرتروسکوپی شانه و آرنج'
    ],
    hospitals: ['بیمارستان شهید بهشتی اصفهان', 'بیمارستان عسکریه'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'asia', 'kosar'],
    consultationFee: 300000,
    nextAvailableSlot: 'فردا - ساعت ۱۹:۱۵',
    phone: '031-36275140',
    biography: 'دکتر احمد صدیقین جراح باسابقه استخوان و مفاصل با تبحر در جراحی‌های پیچیده تاندون دست، آرتروسکوپی شانه، تعویض مفصل شانه و ترمیم شکستگی‌های خرد شده استخوان‌های دست و پا.',
    memberships: [
      'عضو انجمن جراحان شانه و آرنج ایران',
      'عضو جامعه جراحان دست ایران (ISSH)',
      'دوره‌های تکمیلی تروماتولوژی پیشرفته AO سوئیس'
    ],
    clinicAmenities: [
      'اتاق آتل‌بندی و گچ‌گیری فایبرگلاس سبک و ضدآب',
      'آسانسور با ظرفیت بالا و پارکینگ مجاور مجتمع شمس',
      'سیستم نوبت‌دهی هوشمند بدون معطلی',
      'قرارداد مستقیم بیمه نیروهای مسلح و تکمیلی'
    ],
    services: [
      'جراحی پارگی تاندون روتاتور کاف و شانه یخ‌زده',
      'آزادسازی عصب مچ دست (کانال کارپال) با روش بسته',
      'درمان شکستگی‌های استخوان ترقوه، بازو، مچ دست و زانو',
      'تعویض مفصل معکوس و آناتومیک شانه',
      'اصلاح کوتاهی و بدجوش‌خوردگی شکستگی‌های قدیمی'
    ],
    availableDays: ['دوشنبه', 'چهارشنبه', 'پنجشنبه'],
    availableSlots: [
      { id: 'sed1', day: 'فردا (دوشنبه)', date: '۲۸ شهریور', time: '۱۹:۱۵', period: 'عصر' },
      { id: 'sed2', day: 'فردا (دوشنبه)', date: '۲۸ شهریور', time: '۲۰:۰۰', period: 'عصر' },
      { id: 'sed3', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۷:۴۵', period: 'عصر' },
      { id: 'sed4', day: 'پنجشنبه', date: '۳۱ شهریور', time: '۱۸:۳۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-sed1',
        patientName: 'زهرا موسوی',
        date: '۶ روز پیش',
        rating: 5,
        treatment: 'عمل بسته تونل کارپال (CTS) مچ دست',
        hospital: 'بیمارستان بهشتی',
        comment: 'دست راستم شب‌ها بی‌حس می‌شد و گزگز شدید داشت. دکتر صدیقین با یه برش نیم‌سانتی عملم کردند و همان روز مرخص شدم. دستم کاملاً خوب شده.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-salimi',
    name: 'دکتر مریم سلیمی',
    avatarText: 'د.س',
    avatarImage: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', title: 'سالن بازتوانی و الکتروتراپی طب فیزیکی' },
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'اتاق نوار عصب و عضله (EMG-NCV)' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'لابی مراجعین کلینیک توانبخشی' },
    ],
    medicalCode: '۶۲۳۱۴',
    title: 'متخصص طب فیزیکی، توانبخشی و ارتوپدی غیرجراحی',
    subSpecialty: 'درمان‌های نوین غیرجراحی آرتروز، نوار عصب و عضله (EMG/NCS) و پرولوتراپی',
    specialtyTag: 'rehab',
    experienceYears: 12,
    rating: 4.88,
    reviewCount: 260,
    satisfactionRate: 98,
    academicRank: 'متخصص طب فیزیکی و توانبخشی اسکلتی عضلانی، مدرس کارگاه‌های نوار عصب و عضله',
    workingHours: 'شنبه، یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰',
    address: 'اصفهان، خیابان بزرگمهر، چهارراه نورباران، ساختمان پزشکان اطبا، طبقه دوم، واحد ۱۲',
    district: 'خیابان بزرگمهر',
    city: 'اصفهان',
    clinicBuilding: 'ساختمان پزشکان اطبا',
    floorAndUnit: 'طبقه دوم، واحد ۱۲',
    coordinates: { lat: 32.6511, lng: 51.7012 },
    instagram: 'dr.maryam_salimi_rehab',
    whatsapp: '989132684490',
    telegram: 'dr_salimi_rehab',
    website: 'https://drsalimi.vebclinic.ir',
    specialtiesList: [
      'نوار عصب و عضله فوق‌پیشرفته (EMG/NCS)',
      'درمان آرتروز مفاصل با تزریق ژل هیالورونیک تحت هدایت سونوگرافی',
      'درمان دیسک کمر و گردن بدون جراحی با متد کشش و مانوال تراپی',
      'شاک‌ویوتراپی خار پاشنه و تاندونیت مزمن شانه',
      'پرولوتراپی و سلول‌درمانی رباط‌های آسیب‌دیده',
      'طراحی برنامه‌های فیزیوتراپی و توانبخشی بعد از عمل جراحی'
    ],
    hospitals: ['کلینیک توانبخشی صبا اصفهان', 'بیمارستان صدوقی'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'atiyeh', 'saman'],
    consultationFee: 280000,
    nextAvailableSlot: 'امروز - ساعت ۱۶:۳۰',
    phone: '031-32684490',
    biography: 'دکتر مریم سلیمی متخصص توانبخشی اسکلتی-عضلانی با رویکرد اجتناب از جراحی‌های غیرضروری زانو و ستون فقرات از طریق شیوه‌های پیشرفته اینترونشنال، تزریقات پی‌آر‌پی، طب سوزنی غربی، ورزش‌درمانی هدفمند و نوار عصب و عضله.',
    memberships: [
      'عضو انجمن جهانی طب فیزیکی و توانبخشی (ISPRM)',
      'عضو انجمن طب فیزیکی و توانبخشی ایران',
      'عضو کارگروه نوار عصب و سونوگرافی عضلانی اسکلتی'
    ],
    clinicAmenities: [
      'دستگاه نوار عصب و عضله فوق‌پیشرفته ۴ کاناله با جوابدهی در همان جلسه',
      'دستگاه شاک‌ویو و لیزر پرتوان برای درمان خارپاشنه و تاندونیت',
      'محیط آرام، بهداشتی و اختصاصی برای بانوان و سالمندان',
      'امکان پرداخت الکترونیک و پوشش کامل بیمه‌های تکمیلی'
    ],
    services: [
      'نوار عصب و عضله دقیق (EMG/NCS) تشخیص رادیکولوپاتی و سیاتیک',
      'تزریق ژل هیالورونات و PRP درون کپسول مفصلی با سونوگرافی',
      'درمان آرتروز گردن، زانو و خار پاشنه با شاک‌ویوتراپی',
      'طراحی تمرینات بازتوانی پس از تعویض مفاصل',
      'درمان کمردردهای ناشی از گودی کمر و سندرم پیریفورمیس'
    ],
    availableDays: ['شنبه', 'یکشنبه', 'سه‌شنبه', 'چهارشنبه'],
    availableSlots: [
      { id: 'sal1', day: 'امروز (یکشنبه)', date: '۲۷ شهریور', time: '۱۶:۳۰', period: 'عصر' },
      { id: 'sal2', day: 'امروز (یکشنبه)', date: '۲۷ شهریور', time: '۱۷:۴۵', period: 'عصر' },
      { id: 'sal3', day: 'سه‌شنبه', date: '۲۹ شهریور', time: '۱۶:۱۵', period: 'عصر' },
      { id: 'sal4', day: 'چهارشنبه', date: '۳۰ شهریور', time: '۱۷:۰۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-sal1',
        patientName: 'فاطمه صادقی',
        date: 'هفته گذشته',
        rating: 5,
        treatment: 'نوار عصب و درمان دیسک کمر بدون جراحی',
        comment: 'خانم دکتر با حوصله بسیار نوار عصب گرفتند و توضیح دادند که اصلاً نیاز به جراحی ندارم. با حرکات اصلاحی و دو جلسه تزریق کاملاً بهبود پیدا کردم.',
        recommended: true
      }
    ]
  },
  {
    id: 'dr-rafiei',
    name: 'دکتر کامران رفیعی',
    avatarText: 'د.ر',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    clinicCoverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    clinicPhotos: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', title: 'مطب فوق‌تخصصی جراحی تروما و استخوان' },
      { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', title: 'سالن انتظار مجتمع پزشکی کاشانی' },
      { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', title: 'نمایشگر دیجیتال ۳D سی‌تی‌اسکن شکستگی' },
    ],
    medicalCode: '۳۷۸۲۰',
    title: 'متخصص جراحی استخوان و مفاصل کودکان و ناهنجاری‌ها',
    subSpecialty: 'فوق تخصص ارتوپدی اطفال، انحرافات مادرزادی پا (کلاب فوت) و دررفتگی مادرزادی لگن (DDH)',
    specialtyTag: 'pediatric',
    experienceYears: 24,
    rating: 4.95,
    reviewCount: 510,
    satisfactionRate: 99,
    academicRank: 'استاد پیشکسوت ارتوپدی کودکان، رئیس سابق بخش جراحی اطفال بیمارستان امام حسین (ع)',
    workingHours: 'روزهای شنبه، دوشنبه، پنجشنبه از ساعت ۱۵:۰۰ الی ۲۰:۰۰',
    address: 'اصفهان، خیابان محتشم کاشانی، نبش کوچه باغ دریاچه، مجتمع نگین زاینده‌رود، طبقه سوم، واحد ۳۰۴',
    district: 'خیابان محتشم کاشانی',
    city: 'اصفهان',
    clinicBuilding: 'مجتمع نگین زاینده‌رود',
    floorAndUnit: 'طبقه سوم، واحد ۳۰۴',
    coordinates: { lat: 32.6385, lng: 51.6528 },
    instagram: 'dr.rafiei_pediatric_ortho',
    whatsapp: '989136250912',
    telegram: 'dr_rafiei_pediatric',
    website: 'https://drrafiei.vebclinic.ir',
    specialtiesList: [
      'سونوگرافی غربالگری و درمان دررفتگی مادرزادی لگن نوزادان (DDH)',
      'درمان پاچنبری و کلاب فوت با متد مدرن پونستی و گچ‌گیری سریالی',
      'اصلاح پای پرانتزی و زانوی ضربدری کودکان با پلیت‌های رشد',
      'درمان شکستگی‌های استخوان در اطفال و آسیب صفحات رشد',
      'درمان اسکولیوز و انحرافات ستون فقرات در دوران رشد',
      'جراحی‌های ترمیمی راه رفتن در کودکان فلج مغزی (CP)'
    ],
    hospitals: ['بیمارستان تخصصی کودکان امام حسین (ع) اصفهان', 'بیمارستان الزهرا (س)'],
    acceptedInsurances: ['tamin', 'salamat', 'mosallah', 'dana', 'iran', 'alborz', 'asia', 'atiyeh'],
    consultationFee: 330000,
    nextAvailableSlot: 'شنبه آینده - ساعت ۱۵:۳۰',
    phone: '031-36250912',
    biography: 'دکتر کامران رفیعی از پیشکسوتان ارتوپدی اطفال در منطقه مرکزی ایران، با هزاران مورد درمان موفق دررفتگی مادرزادی لگن نوزادان، پنسوتی متد برای کلاب فوت، انحرافات زاویه‌ای زانو در کودکان و نوجوانان (زانوی ضربدری و پرانتزی).',
    memberships: [
      'عضو انجمن ارتوپدی اطفال اروپا (EPOS)',
      'عضو آکادمی جراحان ارتوپدی آمریکا (AAOS)',
      'پایه‌گذار روش Ponseti نوین برای کلاب فوت در اصفهان'
    ],
    clinicAmenities: [
      'فضای شاد و اتاق انتظار اختصاصی بازی برای کودکان',
      'اتاق مخصوص گچ‌گیری نوزادان و کودکان با وسایل سرگرم‌کننده',
      'دستگاه سونوگرافی اختصاصی هیپ اطفال (متد گراف Graf)',
      'دسترسی عالی با ویلچر و کالسکه در خیابان محتشم کاشانی'
    ],
    services: [
      'سونوگرافی غربالگری و درمان دررفتگی مفصل ران نوزادان (DDH)',
      'درمان اصلاحی کلاب فوت (پاچنبری) با متد پونستی و گچ‌گیری متوالی',
      'اصلاح زانوی پرانتزی و ضربدری کودکان با جراحی‌های هدایت رشد (هپاتی رشد)',
      'درمان شکستگی‌های صفحات رشد استخوانی کودکان',
      'جراحی ناهنجاری‌های فلج مغزی (CP)'
    ],
    availableDays: ['شنبه', 'دوشنبه', 'پنجشنبه'],
    availableSlots: [
      { id: 'raf1', day: 'شنبه آینده', date: '۲ مهر', time: '۱۵:۳۰', period: 'عصر' },
      { id: 'raf2', day: 'شنبه آینده', date: '۲ مهر', time: '۱۶:۴۵', period: 'عصر' },
      { id: 'raf3', day: 'دوشنبه آینده', date: '۴ مهر', time: '۱۵:۰۰', period: 'عصر' }
    ],
    reviews: [
      {
        id: 'rev-raf1',
        patientName: 'پدر نوزاد علی‌اکبر',
        date: 'هفته گذشته',
        rating: 5,
        treatment: 'غربالگری و درمان دررفتگی لگن نوزادی (DDH)',
        comment: 'دخترم در غربالگری مشکوک به دررفتگی لگن بود. دکتر رفیعی با آرامش تمام سونوگرافی کردند و با پاولیک هارنس بعد از ۳ ماه کامل درمان شد بدون هیچ نیازی به جراحی. مدیون مهربانی و علم ایشان هستیم.',
        recommended: true
      }
    ]
  }
,
  {
    id: "dr-tabatabaei",
    name: "دکتر سید حسن طباطبایی",
    avatarText: "د.ط",
    avatarImage: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب تخصصی ارتوپدی و ستون فقرات"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "سالن انتظار مجتمع قصر"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "اتاق معاینه و ارزیابی قامت"
      }
    ],
    medicalCode: "۴۳۲۱۸",
    title: "فوق تخصص جراحی ستون فقرات",
    subSpecialty: "فوق تخصص جراحی ستون فقرات، اسکولیوز و جراحی‌های کم‌تهاجمی دیسک (MISS)",
    specialtyTag: "spine",
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 178,
    satisfactionRate: 98,
    academicRank: "دانشیار دانشگاه علوم پزشکی اصفهان، عضو انجمن ستون فقرات اروپا (AO Spine)",
    workingHours: "روزهای زوج از ساعت ۱۵:۳۰ الی ۲۰:۳۰",
    address: "اصفهان، خیابان شمس‌آبادی، نبش مادی فرشادی، مجتمع پزشکی قصر، طبقه سوم",
    district: "خیابان شمس‌آبادی",
    city: "اصفهان",
    clinicBuilding: "مجتمع پزشکی قصر",
    floorAndUnit: "طبقه سوم، واحد ۳۰۴",
    coordinates: {
      lat: 32.657,
      lng: 51.6675
    },
    instagram: "dr.tabatabaei_spine",
    whatsapp: "989133182020",
    telegram: "dr_tabatabaei_spine",
    website: "https://drtabatabaei.vebclinic.ir",
    specialtiesList: [
      "جراحی لیزری و آندوسکوپی دیسک کمر و گردن",
      "اصلاح انحراف ستون فقرات (اسکولیوز و کیفوز) در نوجوانان و بزرگسالان",
      "جراحی تنگی کانال نخاعی با روش‌های کم‌تهاجمی بدون بیهوشی سنگین",
      "تثبیت شکستگی‌های مهره با پدیکولار اسکرو و ورتبروپلاستی"
    ],
    hospitals: [
      "بیمارستان آیت‌الله کاشانی اصفهان",
      "بیمارستان سینا اصفهان",
      "بیمارستان سعدی"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "parsian"
    ],
    consultationFee: 340000,
    nextAvailableSlot: "فردا - ساعت ۱۶:۰۰",
    phone: "031-32204560",
    biography: "دکتر سید حسن طباطبایی فوق تخصص جراحی ستون فقرات از دانشگاه علوم پزشکی تهران و فلوشیپ جراحی‌های پیشرفته ستون فقرات از آلمان، با بیش از ۱۸ سال تجربه بالینی و جراحی هزاران عمل موفق دیسک و اسکولیوز در اصفهان.",
    memberships: [
      "عضو رسمی انجمن جهانی ستون فقرات (AO Spine)",
      "عضو انجمن جراحان ستون فقرات ایران",
      "عضو هیئت علمی دانشگاه علوم پزشکی اصفهان"
    ],
    clinicAmenities: [
      "دسترسی کامل با ویلچر و آسانسور برانکاردبر",
      "سیستم نوبت‌دهی هوشمند بدون معطلی",
      "اتاق مشاوره خصوصی و ارزیابی عکس MRI"
    ],
    services: [
      "ویزیت فوق تخصصی ستون فقرات",
      "تزریق ترانس‌فورامینال اپیدورال ضد درد",
      "تفسیر ام‌آر‌آی و رادیوگرافی تخصصی",
      "مشاوره قبل از عمل جراحی دیسک"
    ],
    availableDays: [
      "شنبه",
      "دوشنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "tab1",
        day: "فردا",
        date: "فردا",
        time: "۱۶:۰۰",
        period: "عصر"
      },
      {
        id: "tab2",
        day: "فردا",
        date: "فردا",
        time: "۱۷:۳۰",
        period: "عصر"
      },
      {
        id: "tab3",
        day: "چهارشنبه",
        date: "پس‌فردا",
        time: "۱۶:۱۵",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-tab1",
        patientName: "حسین فرهمند",
        date: "۳ روز پیش",
        rating: 5,
        treatment: "جراحی کم‌تهاجمی دیسک کمر ال۴-ال۵",
        comment: "با درد سیاتیک شدید مراجعه کردم. بعد از جراحی اندوسکوپی همان روز مرخص شدم و تمام دردم ناپدید شد. دست دکتر طباطبایی طلاست.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-yazdani",
    name: "دکتر بهزاد یزدانی",
    avatarText: "د.ی",
    avatarImage: "https://images.unsplash.com/photo-1591604021695-0c69b7c03381?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "کلینیک فوق‌تخصصی زانو و پزشکی ورزشی"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "اتاق تست دینامیک زانو و رباط"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "بخش ارزیابی ورزشکاران حرفه‌ای"
      }
    ],
    medicalCode: "۴۹۱۷۴",
    title: "فوق تخصص جراحی زانو و آرتروسکوپی",
    subSpecialty: "فلوشیپ فوق‌تخصصی آسیب‌های ورزشی، بازسازی رباط صلیبی (ACL) و پیوند مینیسک",
    specialtyTag: "knee",
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 134,
    satisfactionRate: 96,
    academicRank: "جراح معتمد باشگاه‌های ورزشی برتر، فلوشیپ آرتروسکوپی زانو",
    workingHours: "روزهای یکشنبه، سه‌شنبه و پنجشنبه از ساعت ۱۶:۰۰ الی ۲۱:۰۰",
    address: "اصفهان، خیابان آمادگاه، مجتمع درمانی سپاهان، طبقه اول، واحد ۱۰۴",
    district: "خیابان آمادگاه",
    city: "اصفهان",
    clinicBuilding: "مجتمع درمانی سپاهان",
    floorAndUnit: "طبقه اول، واحد ۱۰۴",
    coordinates: {
      lat: 32.6532,
      lng: 51.6748
    },
    instagram: "dr.behzad_yazdani_knee",
    whatsapp: "989132049090",
    telegram: "dr_yazdani_knee",
    website: "https://dryazdani.vebclinic.ir",
    specialtiesList: [
      "جراحی بسته (آرتروسکوپی) بازسازی رباط صلیبی قدامی و خلفی",
      "ترمیم و دوخت مینیسک زانو با تکنیک Inside-Out و All-Inside",
      "درمان دررفتگی مکرر کشکک زانو و بازسازی لیگامان MPFL",
      "تزریق پلاسمای غنی از پلاکت (PRP) با کیت استاندارد تحت هدایت سونو"
    ],
    hospitals: [
      "بیمارستان الزهرا (س) اصفهان",
      "بیمارستان سعدی اصفهان",
      "کلینیک فوق‌تخصصی خانواده"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "asia",
      "alborz",
      "mellat"
    ],
    consultationFee: 320000,
    nextAvailableSlot: "سه‌شنبه - ساعت ۱۷:۰۰",
    phone: "031-32219800",
    biography: "دکتر بهزاد یزدانی دارای بورد تخصصی ارتوپدی و فلوشیپ جراحی زانو، با سال‌ها تجربه در درمان تخصصی آسیب‌های زانو در فوتبالیست‌ها، کوهنوردان و ورزشکاران استان اصفهان.",
    memberships: [
      "عضو انجمن جراحان زانو، آرتروسکوپی و آسیب‌های ورزشی ایران (ISKAST)",
      "عضو جامعه بین‌المللی آرتروسکوپی و ارتوپدی ورزشی (ISAKOS)"
    ],
    clinicAmenities: [
      "دستگاه سونوگرافی مفصلی داخل مطب",
      "امکان صدور گواهی و معرفی‌نامه آنلاین",
      "پارکینگ عمومی نزدیک در خیابان باغ گلدسته"
    ],
    services: [
      "آرتروسکوپی زانو",
      "تزریق اسید هیالورونیک و پی‌آرپی",
      "معاینه کامل رباط و مینیسک",
      "برنامه بازگشت به ورزش"
    ],
    availableDays: [
      "یکشنبه",
      "سه‌شنبه",
      "پنجشنبه"
    ],
    availableSlots: [
      {
        id: "yaz1",
        day: "فردا (سه‌شنبه)",
        date: "سه‌شنبه",
        time: "۱۷:۰۰",
        period: "عصر"
      },
      {
        id: "yaz2",
        day: "فردا (سه‌شنبه)",
        date: "سه‌شنبه",
        time: "۱۸:۳۰",
        period: "عصر"
      },
      {
        id: "yaz3",
        day: "پنجشنبه",
        date: "پنجشنبه",
        time: "۱۶:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-yaz1",
        patientName: "مهدی کاظمی (فوتبالیست)",
        date: "هفته پیش",
        rating: 5,
        treatment: "ترمیم رباط صلیبی زانوی راست",
        comment: "رباط صلیبی‌ام در مسابقه پاره شد. آقای دکتر یزدانی به بهترین شکل عمل کردند و بعد از ۶ ماه دوباره به تمرینات برگشتم.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-mirzaei",
    name: "دکتر پروانه میرزایی",
    avatarText: "د.م",
    avatarImage: "https://images.unsplash.com/photo-1594824813524-118c72834b6e?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب تخصصی ارتوپدی کودکان و نوزادان"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "اتاق غربالگری سونوگرافی هیپ نوزاد"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "فضای بازی و سرگرمی کودک"
      }
    ],
    medicalCode: "۵۵۴۲۰",
    title: "فوق تخصص ارتوپدی کودکان",
    subSpecialty: "فوق تخصص ارتوپدی اطفال، درمان پای چنبری (کلاب‌فوت)، دررفتگی مادرزادی لگن و زانوی پرانتزی",
    specialtyTag: "pediatric",
    experienceYears: 13,
    rating: 4.9,
    reviewCount: 162,
    satisfactionRate: 99,
    academicRank: "استادیار ارتوپدی کودکان، فلوشیپ بین‌المللی ارتوپدی اطفال",
    workingHours: "روزهای شنبه، یکشنبه، سه‌شنبه از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    address: "اصفهان، خیابان بزرگمهر، تقاطع هشت بهشت غربی، ساختمان پزشکان پارت، طبقه پنجم",
    district: "خیابان بزرگمهر",
    city: "اصفهان",
    clinicBuilding: "ساختمان پزشکان پارت",
    floorAndUnit: "طبقه پنجم، واحد ۵۰۲",
    coordinates: {
      lat: 32.6515,
      lng: 51.692
    },
    instagram: "dr.parvaneh_mirzaei",
    whatsapp: "989134015520",
    telegram: "dr_mirzaei_pediatric",
    website: "https://drmirzaei.vebclinic.ir",
    specialtiesList: [
      "درمان پای چنبری (کلاب فوت) با روش استاندارد پونستی و بریس",
      "غربالگری زودهنگام دررفتگی مادرزادی مفصل ران نوزادان (DDH)",
      "اصلاح پای ضربدری و پرانتزی کودکان با پلیت‌های هدایت رشد (8-plate)",
      "درمان ناهنجاری‌های راه‌رفتن و فلج مغزی (CP) کودکان"
    ],
    hospitals: [
      "بیمارستان تخصصی کودکان امام حسین (ع) اصفهان",
      "بیمارستان میلاد اصفهان"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "dey"
    ],
    consultationFee: 325000,
    nextAvailableSlot: "شنبه آینده - ساعت ۱۵:۳۰",
    phone: "031-32671140",
    biography: "دکتر پروانه میرزایی فوق تخصص ارتوپدی کودکان و از برجسته‌ترین پزشکان فعال در تشخیص زودهنگام ناهنجاری‌های اسکلتی نوزادان با صبوری بی‌نظیر و محیطی آرامش‌بخش برای کودکان.",
    memberships: [
      "عضو انجمن جراحان ارتوپدی اطفال اروپا (EPOS)",
      "عضو انجمن علمی ارتوپدی کودکان ایران"
    ],
    clinicAmenities: [
      "اتاق اختصاصی معاینه نوزادان مجهز به گرم‌کننده",
      "محیط کارتونی و شاد",
      "سونوگرافی اختصاصی لگن متد گراف"
    ],
    services: [
      "سونوگرافی غربالگری هیپ",
      "گچ‌گیری اصلاحی پونستی",
      "مشاوره انحراف اندام تحتانی",
      "معاینه کف پای صاف کودکان"
    ],
    availableDays: [
      "شنبه",
      "یکشنبه",
      "سه‌شنبه"
    ],
    availableSlots: [
      {
        id: "mir1",
        day: "شنبه آینده",
        date: "شنبه",
        time: "۱۵:۳۰",
        period: "عصر"
      },
      {
        id: "mir2",
        day: "شنبه آینده",
        date: "شنبه",
        time: "۱۶:۴۵",
        period: "عصر"
      },
      {
        id: "mir3",
        day: "یکشنبه آینده",
        date: "یکشنبه",
        time: "۱۶:۰۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-mir1",
        patientName: "زهره سعادتمند (مادر باران)",
        date: "۵ روز پیش",
        rating: 5,
        treatment: "درمان کلاب فوت نوزاد با روش پونستی",
        comment: "پای نوزادم کاملاً کج به دنیا اومده بود. خانم دکتر میرزایی با ۵ جلسه گچ‌گیری و برش تاندون پای بچم رو کاملاً صاف کردند. همیشه دعاشون می‌کنیم.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-ansari",
    name: "دکتر رضا انصاری",
    avatarText: "د.ا",
    avatarImage: "https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی جراحی دست و اعصاب"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "میز اختصاصی میکروسرجری و معاینه دست"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "سالن لابی مراجعین مجتمع بهشت"
      }
    ],
    medicalCode: "۳۹۸۶۲",
    title: "فوق تخصص جراحی دست و میکروسرجری",
    subSpecialty: "فوق تخصص جراحی دست و اعصاب محیطی، سندرم تونل کارپال، تاندون‌ها و قطع عضو",
    specialtyTag: "shoulder",
    experienceYears: 20,
    rating: 4.85,
    reviewCount: 149,
    satisfactionRate: 97,
    academicRank: "استاد جراحی ارتوپدی و میکروسرجری دست، پیوند اعصاب",
    workingHours: "روزهای یکشنبه تا چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    address: "اصفهان، خیابان طیب، جنب بیمارستان آیت‌الله کاشانی، مجتمع بهشت، طبقه دوم",
    district: "خیابان طیب",
    city: "اصفهان",
    clinicBuilding: "مجتمع بهشت",
    floorAndUnit: "طبقه دوم، واحد ۲۰۱",
    coordinates: {
      lat: 32.6598,
      lng: 51.666
    },
    instagram: "dr.reza_ansari_hand",
    whatsapp: "989131109988",
    telegram: "dr_ansari_hand",
    website: "https://dransari.vebclinic.ir",
    specialtiesList: [
      "جراحی آندوسکوپی آزادسازی تونل مچ دست (CTS) بدون جای بخیه عمیق",
      "ترمیم پارگی تاندون‌های فلکسور و اکستانسور انگشتان",
      "جراحی شکستگی‌های پیچیده اسکافوئید و مفصل مچ دست",
      "جراحی تعویض مفاصل کوچک انگشتان و درمان انگشت ماشه‌ای (Trigger Finger)"
    ],
    hospitals: [
      "بیمارستان آیت‌الله کاشانی اصفهان",
      "بیمارستان سینا اصفهان"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "parsian"
    ],
    consultationFee: 310000,
    nextAvailableSlot: "فردا - ساعت ۱۷:۱۵",
    phone: "031-32357790",
    biography: "دکتر رضا انصاری فوق تخصص جراحی دست و میکروسرجری از دانشگاه علوم پزشکی شهید بهشتی، با سابقه بیش از ۲ هزار عمل جراحی ظریف اعصاب دست و تاندون در استان اصفهان.",
    memberships: [
      "عضو انجمن جراحان دست ایران (ISSH)",
      "عضو فدراسیون بین‌المللی جوامع جراحی دست (IFSSH)"
    ],
    clinicAmenities: [
      "مجاورت با بیمارستان ارتوپدی کاشانی",
      "امکان آتل‌بندی و گچ‌گیری سبک ترموپلاستیک",
      "نوبت‌دهی منظم و دقیق"
    ],
    services: [
      "معاینه دقیق اعصاب دست و حس لمس",
      "تزریق استروئید تاندون دست تحت گاید",
      "جراحی CTS با بی‌حسی موضعی",
      "مشاوره توانبخشی دست"
    ],
    availableDays: [
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "ans1",
        day: "فردا",
        date: "فردا",
        time: "۱۷:۱۵",
        period: "عصر"
      },
      {
        id: "ans2",
        day: "فردا",
        date: "فردا",
        time: "۱۸:۳۰",
        period: "عصر"
      },
      {
        id: "ans3",
        day: "پس‌فردا",
        date: "پس‌فردا",
        time: "۱۶:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-ans1",
        patientName: "مریم احمدی",
        date: "یک هفته پیش",
        rating: 5,
        treatment: "جراحی چسبندگی عصب مچ دست (تونل کارپال)",
        comment: "دست راستم شب‌ها مدام بی‌حس و تیر می‌کشید. آقای دکتر انصاری سرپایی در کمتر از ۲۰ دقیقه عملم کردند و همان شب راحتی را حس کردم.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-mousavi",
    name: "دکتر سید علیرضا موسوی",
    avatarText: "د.م",
    avatarImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی زانو و آرتروپلاستی"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "سالن مراجعین مجتمع نگین وحید"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "اتاق نمایش پروتزها و ایمپلنت‌های زانو"
      }
    ],
    medicalCode: "۴۱۸۵۰",
    title: "جراح ارتوپد و فوق تخصص تعویض مفصل زانو",
    subSpecialty: "فوق تخصص تعویض کامل مفصل زانو (TKR) با سیستم نویگیشن، تعویض مفصل نیمه (UKI)",
    specialtyTag: "knee",
    experienceYears: 17,
    rating: 4.9,
    reviewCount: 156,
    satisfactionRate: 98,
    academicRank: "فلوشیپ آرتروپلاستی زانو از اتریش، جراح برتر تعویض مفصل اصفهان",
    workingHours: "روزهای شنبه تا سه‌شنبه از ساعت ۱۵:۳۰ الی ۲۰:۰۰",
    address: "اصفهان، خیابان وحید، ابتدای خیابان خاقانی، مجتمع نگین وحید، طبقه سوم",
    district: "خیابان وحید",
    city: "اصفهان",
    clinicBuilding: "مجتمع نگین وحید",
    floorAndUnit: "طبقه سوم، واحد ۳۰۶",
    coordinates: {
      lat: 32.636,
      lng: 51.65
    },
    instagram: "dr.alireza_mousavi_knee",
    whatsapp: "989138805566",
    telegram: "dr_mousavi_knee",
    website: "https://drmousavi.vebclinic.ir",
    specialtiesList: [
      "تعویض کامل مفصل زانو (Total Knee Arthroplasty) با ایمپلنت‌های آمریکایی و اروپایی",
      "جراحی تعویض مجدد زانو (Revision TKR) در صورت شل‌شدگی پروتز قبلی",
      "تعویض نیمه‌مفصل زانو (Unicondylar Knee) برای ساییدگی‌های محدود",
      "اصلاح راستای زانو با استئوتومی بالا تسبیا (HTO)"
    ],
    hospitals: [
      "بیمارستان سعدی اصفهان",
      "بیمارستان میلاد اصفهان",
      "بیمارستان سینا"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "karafarin"
    ],
    consultationFee: 335000,
    nextAvailableSlot: "امروز - ساعت ۱۸:۳۰",
    phone: "031-36284450",
    biography: "دکتر سید علیرضا موسوی جراح استخوان و مفاصل با فلوشیپ تخصصی جراحی زانو از گراتس اتریش، مجری پروتکل ترخیص سریع بعد از تعویض مفصل و راه رفتن بیمار در روز عمل.",
    memberships: [
      "عضو جامعه بین‌المللی تعویض مفصل (EKA)",
      "عضو هیئت مدیره انجمن ارتوپدی شاخه اصفهان"
    ],
    clinicAmenities: [
      "پروتزهای شبیه‌ساز زانو برای لمس و مشاهده بیمار",
      "آسانسور ویلچربر اختصاصی",
      "پوشش کامل بیمه‌های تکمیلی"
    ],
    services: [
      "مشاوره ویزیت تعویض مفصل زانو",
      "ارزیابی گراف‌های زانو و هم‌راستایی (Alignment)",
      "تزریقات غضروف‌ساز و سلول‌درمانی"
    ],
    availableDays: [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه"
    ],
    availableSlots: [
      {
        id: "mou1",
        day: "امروز",
        date: "امروز",
        time: "۱۸:۳۰",
        period: "عصر"
      },
      {
        id: "mou2",
        day: "فردا",
        date: "فردا",
        time: "۱۶:۰۰",
        period: "عصر"
      },
      {
        id: "mou3",
        day: "فردا",
        date: "فردا",
        time: "۱۷:۴۵",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-mou1",
        patientName: "نصرت رضوی (۶۲ ساله)",
        date: "۲ هفته پیش",
        rating: 5,
        treatment: "تعویض کامل مفصل زانوی چپ",
        comment: "چند سال از درد زانو گریه می‌کردم. دکتر موسوی هر دو پای من رو با فاصله ۶ ماه عمل کردند و الان بدون هیچ عصایی پیاده‌روی می‌کنم. بی‌نهایت سپاسگزارم.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-ebrahimi",
    name: "دکتر داوود ابراهیمی",
    avatarText: "د.ا",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی ارتوپدی تروما و لگن"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "سالن انتظار ساختمان امید"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "تجهیزات رادیولوژی و سنجش تراکم استخوان"
      }
    ],
    medicalCode: "۳۷۴۱۰",
    title: "فوق تخصص جراحی لگن و تروما",
    subSpecialty: "فوق تخصص جراحی ارتوپدی تروما، شکستگی‌های پیچیده مفصل ران، لگن و استابولوم",
    specialtyTag: "hip",
    experienceYears: 22,
    rating: 4.9,
    reviewCount: 168,
    satisfactionRate: 99,
    academicRank: "استاد تمام دانشگاه علوم پزشکی، رئیس سابق بخش ترومای بیمارستان کاشانی",
    workingHours: "روزهای شنبه، دوشنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    address: "اصفهان، خیابان محتشم کاشانی، نبش کوچه بیست و دوم، ساختمان پزشکان امید، طبقه چهارم",
    district: "خیابان محتشم کاشانی",
    city: "اصفهان",
    clinicBuilding: "ساختمان پزشکان امید",
    floorAndUnit: "طبقه چهارم، واحد ۴۰۲",
    coordinates: {
      lat: 32.632,
      lng: 51.658
    },
    instagram: "dr.davood_ebrahimi_trauma",
    whatsapp: "989133148877",
    telegram: "dr_ebrahimi_ortho",
    website: "https://drebrahimi.vebclinic.ir",
    specialtiesList: [
      "جراحی شکستگی‌های پیچیده حفره استابولوم و حلقه لگن",
      "جراحی نکروز سر استخوان ران (AVN) با تکنیک مغز استخوان و دکمپرشن",
      "درمان جوش‌نخوردگی و بدجوش‌خوردگی‌های استخوان (Non-union & Mal-union)",
      "جراحی تعویض مفصل ران در شکستگی‌های گردن فمور افراد مسن"
    ],
    hospitals: [
      "بیمارستان آیت‌الله کاشانی اصفهان",
      "بیمارستان سعدی اصفهان",
      "بیمارستان عسکریه"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "sina"
    ],
    consultationFee: 330000,
    nextAvailableSlot: "فردا - ساعت ۱۷:۳۰",
    phone: "031-36245580",
    biography: "دکتر داوود ابراهیمی با بیش از دو دهه تجربه جراحی در پرتروماتیک‌ترین مرکز ارتوپدی اصفهان، مرجع ارجاع بیماران بدحال و شکستگی‌های چندگانه استخوانی از سراسر استان‌های مجاور.",
    memberships: [
      "عضو جامعه بین‌المللی ارتوپدی تروما (AO Trauma)",
      "عضو انجمن جراحان هیپ و لگن ایران"
    ],
    clinicAmenities: [
      "امکان انجام مشاوره فوری موارد تصادفی",
      "رمپ استاندارد ورود ویلچر",
      "طرف قرارداد مستقیم با تمام بیمه‌ها"
    ],
    services: [
      "ویزیت تخصصی شکستگی‌ها و مفاصل",
      "مشاوره بعد از تصادفات شدید",
      "تعویض پروتز هیپ در سالمندان",
      "بررسی نکروز استخوان"
    ],
    availableDays: [
      "شنبه",
      "دوشنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "ebr1",
        day: "فردا",
        date: "فردا",
        time: "۱۷:۳۰",
        period: "عصر"
      },
      {
        id: "ebr2",
        day: "فردا",
        date: "فردا",
        time: "۱۹:۰۰",
        period: "عصر"
      },
      {
        id: "ebr3",
        day: "چهارشنبه",
        date: "پس‌فردا",
        time: "۱۶:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-ebr1",
        patientName: "علیرضا نجفی",
        date: "۱ ماه پیش",
        rating: 5,
        treatment: "جراحی شکستگی خردشده لگن در تصادف",
        comment: "پدرم در تصادف تصادف وحشتناکی دچار شکستگی لگن شد و چند بیمارستان عمل نمی‌کردند. دکتر ابراهیمی با مهارت فوق‌العاده عمل کردند و پدرم الان دوباره روی پای خودش ایستاده.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-ghasemi",
    name: "دکتر حمیدرضا قاسمی",
    avatarText: "د.ق",
    avatarImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب تخصصی ارتوپدی و مفاصل لگن"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "لابی مجتمع پزشکی سینا"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "اتاق گچ‌گیری و معاینه بالینی"
      }
    ],
    medicalCode: "۴۵۲۹۰",
    title: "جراح ارتوپد و فوق تخصص تعویض مفصل ران",
    subSpecialty: "فوق تخصص تعویض کامل مفصل لگن (THR)، اصلاح انحراف پرانتزی زانو و پای پرانتزی",
    specialtyTag: "hip",
    experienceYears: 16,
    rating: 4.8,
    reviewCount: 128,
    satisfactionRate: 95,
    academicRank: "فلوشیپ آرتروپلاستی و تعویض مفاصل، جراح ارتوپدی",
    workingHours: "روزهای یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    address: "اصفهان، خیابان شمس‌آبادی، روبروی بیمارستان سینا، مجتمع پزشکی سینا، طبقه اول",
    district: "خیابان شمس‌آبادی",
    city: "اصفهان",
    clinicBuilding: "مجتمع پزشکی سینا",
    floorAndUnit: "طبقه اول، واحد ۱۰۲",
    coordinates: {
      lat: 32.6565,
      lng: 51.6668
    },
    instagram: "dr.hamidreza_ghasemi",
    whatsapp: "989132104433",
    telegram: "dr_ghasemi_ortho",
    website: "https://drghasemi.vebclinic.ir",
    specialtiesList: [
      "تعویض مفصل ران با پروتزهای سرامیکی دلتا و متال آن متال",
      "جراحی استئوتومی اصلاح پای پرانتزی (Genu Varum)",
      "درمان نکروز آواسکولار سر فمور (سیاه شدن سر استخوان ران)",
      "تعویض مفصل زانو با روش کم‌تهاجمی مینی ساب واستوس"
    ],
    hospitals: [
      "بیمارستان سینا اصفهان",
      "بیمارستان سپاهان اصفهان",
      "بیمارستان خانواده"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "razy"
    ],
    consultationFee: 315000,
    nextAvailableSlot: "سه‌شنبه - ساعت ۱۶:۰۰",
    phone: "031-32215560",
    biography: "دکتر حمیدرضا قاسمی جراح ارتوپد و فوق تخصص تعویض مفاصل با سال‌ها سابقه جراحی در بیمارستان سینا و سپاهان اصفهان، پیشگام به کارگیری پروتزهای سرامیکی نسل جدید با طول عمر بالای ۳۰ سال.",
    memberships: [
      "عضو انجمن جراحان ارتوپدی ایران",
      "عضو انجمن آرتروپلاستی مفصل ران و زانو"
    ],
    clinicAmenities: [
      "واقع در مرکز پزشکی خیابان شمس‌آبادی",
      "پوشش دستگاه کارتخوان و معرفی‌نامه",
      "آسانسور برانکاردبر"
    ],
    services: [
      "ویزیت دردهای مفصل لگن و کشاله ران",
      "بررسی عکس رادیولوژی و ام‌آر‌آی لگن",
      "تزریق داخل مفصل هیپ تحت گاید",
      "مشاوره جراحی پروتز لگن"
    ],
    availableDays: [
      "یکشنبه",
      "سه‌شنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "gha1",
        day: "سه‌شنبه",
        date: "فردا",
        time: "۱۶:۰۰",
        period: "عصر"
      },
      {
        id: "gha2",
        day: "سه‌شنبه",
        date: "فردا",
        time: "۱۷:۳۰",
        period: "عصر"
      },
      {
        id: "gha3",
        day: "چهارشنبه",
        date: "پس‌فردا",
        time: "۱۵:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-gha1",
        patientName: "محمود انصاری پور",
        date: "۳ هفته پیش",
        rating: 5,
        treatment: "تعویض مفصل ران با پروتز سرامیک دلتا",
        comment: "به خاطر ساییدگی شدید لگن لنگش داشتم. الان ۶ ماهه از عملم گذشته، لنگش کاملا رفع شده و دردم صفر شده.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-rostami",
    name: "دکتر مهشید رستمی",
    avatarText: "د.ر",
    avatarImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "کلینیک طب فیزیکی و توانبخشی"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "دستگاه پیشرفته نوار عصب و عضله (EMG-NCS)"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "اتاق لیزردرمانی پرتوان و مگنت"
      }
    ],
    medicalCode: "۵۸۳۱۰",
    title: "متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز",
    subSpecialty: "متخصص درمان غیرجراحی دیسک کمر، سیاتیک، آرتروز مفاصل و نوار عصب و عضله (EMG-NCS)",
    specialtyTag: "rehab",
    experienceYears: 12,
    rating: 4.95,
    reviewCount: 182,
    satisfactionRate: 99,
    academicRank: "رتبه برتر بورد تخصصی طب فیزیکی و توانبخشی کشور",
    workingHours: "روزهای شنبه تا چهارشنبه از ساعت ۱۴:۳۰ الی ۱۹:۰۰",
    address: "اصفهان، خیابان آمادگاه، مجتمع پزشکی گلدیس، ورودی اول، طبقه دوم",
    district: "خیابان آمادگاه",
    city: "اصفهان",
    clinicBuilding: "مجتمع پزشکی گلدیس",
    floorAndUnit: "ورودی اول، طبقه دوم، واحد ۲۱۸",
    coordinates: {
      lat: 32.653,
      lng: 51.674
    },
    instagram: "dr.mahshid_rostami_pmr",
    whatsapp: "989134551122",
    telegram: "dr_rostami_rehab",
    website: "https://drrostami.vebclinic.ir",
    specialtiesList: [
      "نوار عصب و عضله ۴ اندام (EMG-NCS) با دستگاه مدرن اروپایی",
      "درمان غیرجراحی دیسک ستون فقرات با لیزر پرتوان و دکمپرشن ستون فقرات",
      "تزریق اوزون، ژل و پی‌آرپی تحت سونوگرافی دقیق مفصلی",
      "طب سوزنی تخصصی (Dry Needling) برای گرفتگی‌های عضلانی میوفاشیال"
    ],
    hospitals: [
      "بیمارستان الزهرا (س) اصفهان",
      "بیمارستان شهید فیض"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "parsian",
      "moalem"
    ],
    consultationFee: 290000,
    nextAvailableSlot: "امروز - ساعت ۱۶:۳۰",
    phone: "031-32228840",
    biography: "دکتر مهشید رستمی متخصص طب فیزیکی و توانبخشی با دانش روز در درمان محافظه‌کارانه و غیرجراحی دردهای اسکلتی و مفاصل، پیشگام درمان دیسک کمر بدون جراحی در اصفهان.",
    memberships: [
      "عضو انجمن طب فیزیکی و توانبخشی ایران",
      "عضو انجمن بین‌المللی طب فیزیکی و توانبخشی (ISPRM)"
    ],
    clinicAmenities: [
      "مجهز به مدرن‌ترین دستگاه الکترومیوگرافی",
      "امکان انجام نوار عصب در همان روز ویزیت",
      "محیط آرام و پرسنل صبور خانم"
    ],
    services: [
      "انجام نوار عصب و عضله دست و پا",
      "تزریق اوزون در مفصل زانو و شانه",
      "تزریق بوتاکس برای اسپاستیسیتی و میگرن",
      "برنامه توانبخشی بعد از عمل دیسک"
    ],
    availableDays: [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "ros1",
        day: "امروز",
        date: "امروز",
        time: "۱۶:۳۰",
        period: "عصر"
      },
      {
        id: "ros2",
        day: "امروز",
        date: "امروز",
        time: "۱۸:۰۰",
        period: "عصر"
      },
      {
        id: "ros3",
        day: "فردا",
        date: "فردا",
        time: "۱۵:۰۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-ros1",
        patientName: "سمیه حیدری",
        date: "۴ روز پیش",
        rating: 5,
        treatment: "نوار عصب و عضله و درمان دیسک کمر",
        comment: "خانم دکتر بسیار با اخلاق، با دقت و صبور هستند. نوار عصب را بدون ذره‌ای درد انجام دادند و با ۵ جلسه لیزر دردم فروکش کرد.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-akbari",
    name: "دکتر فرهاد اکبری",
    avatarText: "د.ا",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی جراحی مچ و کف پا"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "اتاق اسکن سه‌بعدی کف پا و پدوباروگرافی"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "سالن پذیرش مراجعین خیابان بزرگمهر"
      }
    ],
    medicalCode: "۴۲۹۰۰",
    title: "فوق تخصص جراحی مچ پا و کف پا (Foot & Ankle)",
    subSpecialty: "فلوشیپ فوق تخصصی جراحی مچ پا، اصلاح انحراف شست پا (هالوکس والگوس) و آرتروسکوپی مچ",
    specialtyTag: "knee",
    experienceYears: 15,
    rating: 4.88,
    reviewCount: 139,
    satisfactionRate: 97,
    academicRank: "فلوشیپ جراحی مچ و پا از سوئیس، جراح استخوان و مفاصل",
    workingHours: "روزهای زوج از ساعت ۱۶:۰۰ الی ۲۰:۰۰",
    address: "اصفهان، خیابان بزرگمهر، نبش خیابان شریف واقفی، ساختمان فراز، طبقه سوم",
    district: "خیابان بزرگمهر",
    city: "اصفهان",
    clinicBuilding: "ساختمان فراز",
    floorAndUnit: "طبقه سوم، واحد ۳۰۵",
    coordinates: {
      lat: 32.65,
      lng: 51.691
    },
    instagram: "dr.farhad_akbari_ankle",
    whatsapp: "989133092211",
    telegram: "dr_akbari_foot",
    website: "https://drakbari.vebclinic.ir",
    specialtiesList: [
      "جراحی اصلاحی قوز شست پا (هالوکس والگوس) با متد کم‌تهاجمی بدون بازگشت",
      "آرتروسکوپی مچ پا برای ضایعات استئوکندرال تالوس (OCD) و گیر افتادگی مچ",
      "ترمیم پارگی‌های حاد و مزمن تاندون آشیل با متد کم‌تهاجمی",
      "اصلاح کف پای صاف شدید و انحراف پاشنه پا در بزرگسالان"
    ],
    hospitals: [
      "بیمارستان الزهرا (س) اصفهان",
      "بیمارستان سعدی اصفهان",
      "بیمارستان میلاد"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "novin"
    ],
    consultationFee: 315000,
    nextAvailableSlot: "دوشنبه - ساعت ۱۷:۰۰",
    phone: "031-32662050",
    biography: "دکتر فرهاد اکبری متخصص ارتوپدی و فلوشیپ جراحی فوق‌تخصصی مچ پا و پا، مبدع استفاده از تکنیک‌های بسته و کم‌تهاجمی جراحی هالوکس والگوس با ترخیص در همان روز در استان اصفهان.",
    memberships: [
      "عضو انجمن جراحی مچ و پای اروپا (EFAS)",
      "عضو جامعه جراحان ارتوپدی ایران"
    ],
    clinicAmenities: [
      "مجهز به اسکن کامپیوتری کف پا برای کفی طبی",
      "امکان استفاده از بریس و کفش‌های بعد از جراحی هالوکس",
      "آسانسور"
    ],
    services: [
      "اسکن فشاری کف پا",
      "جراحی هالوکس والگوس",
      "آرتروسکوپی مچ پا",
      "تزریق پی‌آرپی در خار پاشنه و آشیل"
    ],
    availableDays: [
      "شنبه",
      "دوشنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "akb1",
        day: "فردا (دوشنبه)",
        date: "دوشنبه",
        time: "۱۷:۰۰",
        period: "عصر"
      },
      {
        id: "akb2",
        day: "فردا (دوشنبه)",
        date: "دوشنبه",
        time: "۱۸:۳۰",
        period: "عصر"
      },
      {
        id: "akb3",
        day: "چهارشنبه",
        date: "چهارشنبه",
        time: "۱۶:۱۵",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-akb1",
        patientName: "فاطمه شمس",
        date: "۱ هفته پیش",
        rating: 5,
        treatment: "جراحی هر دو شست پا (هالوکس والگوس)",
        comment: "سال‌ها نمی‌تونستم کفش مناسب بپوشم از درد شست پا. دکتر اکبری با متد جدید جراحی کردند و اصلا درد وحشتناکی که دیگران می‌گفتند رو تجربه نکردم.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-esmaeili",
    name: "دکتر جواد اسماعیلی",
    avatarText: "د.ا",
    avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی جراحی شانه و آرنج"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "سالن انتظار مجتمع پارسیان وحید"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "اتاق مشاوره و ارزیابی دامنه حرکتی شانه"
      }
    ],
    medicalCode: "۴۴۷۸۰",
    title: "فوق تخصص جراحی شانه و آرنج",
    subSpecialty: "فلوشیپ فوق تخصصی آرتروسکوپی شانه، ترمیم تاندون روتاتور کاف و پروتز معکوس شانه (Reverse TSA)",
    specialtyTag: "shoulder",
    experienceYears: 18,
    rating: 4.91,
    reviewCount: 164,
    satisfactionRate: 98,
    academicRank: "دانشیار ارتوپدی، فلوشیپ جراحی شانه از فرانسه",
    workingHours: "روزهای یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    address: "اصفهان، خیابان وحید، نبش خیابان باغ دریاچه، مجتمع پارسیان، طبقه دوم",
    district: "خیابان وحید",
    city: "اصفهان",
    clinicBuilding: "مجتمع پارسیان",
    floorAndUnit: "طبقه دوم، واحد ۲۰۴",
    coordinates: {
      lat: 32.6345,
      lng: 51.6515
    },
    instagram: "dr.javad_esmaeili_shoulder",
    whatsapp: "989132247700",
    telegram: "dr_esmaeili_shoulder",
    website: "https://dresmaeili.vebclinic.ir",
    specialtiesList: [
      "جراحی آرتروسکوپی ترمیم پارگی تاندون شانه (Rotator Cuff Tear)",
      "جراحی دررفتگی مکرر شانه به روش بنکارت آرتروسکوپیک و لاتارژه",
      "تعویض مفصل شانه (پروتز معکوس ریورس) در پارگی‌های غیرقابل ترمیم تاندون",
      "درمان خشکی و شانه منجمد (Frozen Shoulder) با هیدرودیلیتیشن و رهایش بسته"
    ],
    hospitals: [
      "بیمارستان الزهرا (س) اصفهان",
      "بیمارستان سینا اصفهان",
      "بیمارستان سعدی"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "mellat"
    ],
    consultationFee: 330000,
    nextAvailableSlot: "سه‌شنبه - ساعت ۱۷:۴۵",
    phone: "031-37774020",
    biography: "دکتر جواد اسماعیلی جراح فوق تخصص شانه و آرنج با سال‌ها آموزش در مراکز پیشرو جراحی شانه در لیون فرانسه، مرجع اصلی درمان پارگی‌های شدید تاندون شانه و جراحی‌های تعویض شانه در مرکز ایران.",
    memberships: [
      "عضو انجمن جراحان شانه و آرنج اروپا (SECEC)",
      "عضو انجمن جراحان ارتوپدی ایران"
    ],
    clinicAmenities: [
      "امکان معاینه تخصصی تست‌های قدرت عضلات شانه",
      "فضای مدرن و خلوت",
      "سیستم ثبت دیجیتال پرونده MRI"
    ],
    services: [
      "آرتروسکوپی شانه",
      "تزریق کورتیزون و پی‌آرپی تحت سونو شانه",
      "درمان شانه منجمد",
      "تعویض مفصل شانه"
    ],
    availableDays: [
      "یکشنبه",
      "سه‌شنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "esm1",
        day: "سه‌شنبه",
        date: "فردا",
        time: "۱۷:۴۵",
        period: "عصر"
      },
      {
        id: "esm2",
        day: "سه‌شنبه",
        date: "فردا",
        time: "۱۹:۰۰",
        period: "عصر"
      },
      {
        id: "esm3",
        day: "چهارشنبه",
        date: "پس‌فردا",
        time: "۱۶:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-esm1",
        patientName: "اکبر طاهری",
        date: "۲ هفته پیش",
        rating: 5,
        treatment: "ترمیم آرتروسکوپی تاندون شانه راست",
        comment: "دستم بالا نمی‌آمد و شب‌ها از درد خواب نداشتم. دکتر اسماعیلی با عمل بسته شانه مشکلم رو حل کردند و الان دستم دامنه کامل حرکتی داره.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-soleimani",
    name: "دکتر پیمان سلیمانی",
    avatarText: "د.س",
    avatarImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب تخصصی پزشکی ورزشی و ارتوپدی"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "دستگاه سونوگرافی عضلانی اسکلتی دقیق"
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        title: "اتاق تزریقات بیولوژیک سلول‌های بنیادی و پی‌آرپی"
      }
    ],
    medicalCode: "۴۶۱۱۵",
    title: "متخصص جراحی ارتوپدی و آسیب‌های ورزشی",
    subSpecialty: "متخصص ارتوپدی، پزشکی ورزشی، تزریقات بیولوژیک غضروف، PRP و سلول‌درمانی آرتروز",
    specialtyTag: "knee",
    experienceYears: 13,
    rating: 4.87,
    reviewCount: 115,
    satisfactionRate: 96,
    academicRank: "پزشک تیم‌های ملی و باشگاهی، متخصص ارتوپدی و طب ورزش",
    workingHours: "روزهای شنبه، دوشنبه، سه‌شنبه از ساعت ۱۶:۳۰ الی ۲۱:۰۰",
    address: "اصفهان، خیابان طیب، روبروی ارگ جهان‌نما، مجتمع قائم، طبقه اول",
    district: "خیابان طیب",
    city: "اصفهان",
    clinicBuilding: "مجتمع قائم",
    floorAndUnit: "طبقه اول، واحد ۱۰۸",
    coordinates: {
      lat: 32.6585,
      lng: 51.668
    },
    instagram: "dr.peyman_soleimani_sports",
    whatsapp: "989135003344",
    telegram: "dr_soleimani_sports",
    website: "https://drsoleimani.vebclinic.ir",
    specialtiesList: [
      "تزریق سلول‌های بنیادی خون‌ساز و ژل غضروف‌ساز تحت گاید سونوگرافی",
      "درمان غیرتهاجمی کشیدگی‌های رباط و پارگی‌های ناقص تاندون",
      "آرتروسکوپی زانو و شستشوی مفصلی",
      "چکاپ اسکلتی عضلانی ورزشکاران و پیشگیری از آسیب‌های لیگامانی"
    ],
    hospitals: [
      "بیمارستان سینا اصفهان",
      "بیمارستان آیت‌الله کاشانی"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "kowsar"
    ],
    consultationFee: 310000,
    nextAvailableSlot: "امروز - ساعت ۱۷:۰۰",
    phone: "031-32360090",
    biography: "دکتر پیمان سلیمانی متخصص ارتوپدی با تمرکز بر پزشکی ورزشی و درمان‌های نوین بازساختی (Regenerative Medicine)، پیشگام در تزریقات فوق‌تخصصی داخل مفصلی بدون درد و با حداکثر اثربخشی.",
    memberships: [
      "عضو فدراسیون پزشکی ورزشی ایران",
      "عضو انجمن جهانی طب ورزش (FIMS)"
    ],
    clinicAmenities: [
      "مجهز به سانتریفیوژ پیشرفته پی‌آرپی دو مرحله‌ای",
      "سونوگرافی داخل اتاق ویزیت",
      "موقعیت عالی نزدیک ایستگاه مترو امام حسین"
    ],
    services: [
      "تزریق PRP غنی‌شده",
      "تزریق ژل هیالورونات آمریکایی",
      "سونوگرافی عضلات و مفاصل",
      "مشاوره توانبخشی ورزشی"
    ],
    availableDays: [
      "شنبه",
      "دوشنبه",
      "سه‌شنبه"
    ],
    availableSlots: [
      {
        id: "sol1",
        day: "امروز",
        date: "امروز",
        time: "۱۷:۰۰",
        period: "عصر"
      },
      {
        id: "sol2",
        day: "امروز",
        date: "امروز",
        time: "۱۸:۳۰",
        period: "عصر"
      },
      {
        id: "sol3",
        day: "فردا (سه‌شنبه)",
        date: "فردا",
        time: "۱۶:۳۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-sol1",
        patientName: "کامران شریفی",
        date: "۵ روز پیش",
        rating: 5,
        treatment: "تزریق پی‌آرپی زانو با گاید سونوگرافی",
        comment: "به خاطر ساییدگی زانو پله نمی‌تونستم بالا برم. دکتر سلیمانی با سونوگرافی دقیق در دو جلسه پی‌آرپی تزریق کردند و دردم حداقل ۷۰ درصد کاهش پیدا کرد.",
        recommended: true
      }
    ]
  },
  {
    id: "dr-kazemi",
    name: "دکتر نیلوفر کاظمی",
    avatarText: "د.ک",
    avatarImage: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=400&h=400&q=80",
    clinicCoverImage: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    clinicPhotos: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        title: "مطب فوق تخصصی ارتوپدی اطفال و انحراف ستون فقرات"
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        title: "فضای بازی و آرامش کودکان"
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        title: "تجهیزات ارزیابی اسکولیوز با اسکن نوری"
      }
    ],
    medicalCode: "۵۶۸۴۰",
    title: "فوق تخصص ارتوپدی اطفال و نوجوانان",
    subSpecialty: "فوق تخصص ارتوپدی اطفال، کوتاهی اندام، انحرافات مادرزادی ستون فقرات و صفحات رشد",
    specialtyTag: "pediatric",
    experienceYears: 14,
    rating: 4.93,
    reviewCount: 145,
    satisfactionRate: 99,
    academicRank: "استادیار دانشگاه، فلوشیپ فوق تخصصی ارتوپدی اطفال از دانشگاه تورنتو کانادا",
    workingHours: "روزهای زوج از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    address: "اصفهان، خیابان محتشم کاشانی، روبروی کوچه بیستم، ساختمان پردیس، طبقه سوم",
    district: "خیابان محتشم کاشانی",
    city: "اصفهان",
    clinicBuilding: "ساختمان پردیس",
    floorAndUnit: "طبقه سوم، واحد ۳۰۳",
    coordinates: {
      lat: 32.6325,
      lng: 51.6575
    },
    instagram: "dr.niloufar_kazemi_pediatric",
    whatsapp: "989134027788",
    telegram: "dr_kazemi_kids",
    website: "https://drkazemi.vebclinic.ir",
    specialtiesList: [
      "درمان و اصلاح کوتاهی اندام در کودکان با فیکساتورهای الیزاروف و میله‌های تلسکوپی",
      "تشخیص و درمان اسکولیوز زودرس اطفال و نوجوانان با بریس‌های مدرن سه‌بعدی (Cheneau)",
      "درمان نرمی غضروف و دررفتگی مادرزادی کشکک زانو در دختران نوجوان",
      "جراحی شکستگی‌های خاص صفحات رشد استخوان (Salter-Harris)"
    ],
    hospitals: [
      "بیمارستان تخصصی کودکان امام حسین (ع) اصفهان",
      "بیمارستان الزهرا (س)"
    ],
    acceptedInsurances: [
      "tamin",
      "salamat",
      "mosallah",
      "dana",
      "iran",
      "alborz",
      "asia",
      "samaman"
    ],
    consultationFee: 325000,
    nextAvailableSlot: "دوشنبه - ساعت ۱۵:۳۰",
    phone: "031-36269910",
    biography: "دکتر نیلوفر کاظمی فوق تخصص ارتوپدی کودکان با فلوشیپ از کانادا، متبحر در درمان بدشکلی‌های مادرزادی استخوان و مفاصل در کودکان و ارائه راهکارهای نوین بریس بدون نیاز به جراحی‌های زودهنگام.",
    memberships: [
      "عضو آکادمی ارتوپدی اطفال آمریکای شمالی (POSNA)",
      "عضو انجمن جراحان ارتوپدی کودکان ایران"
    ],
    clinicAmenities: [
      "اتاق معاینه دوستدار کودک مجهز به اسباب‌بازی‌های ضدحساسیت",
      "امکان طراحی بریس با اسکن نوری بدون اشعه",
      "آسانسور"
    ],
    services: [
      "غربالگری اسکولیوز و سنجش انحراف ستون فقرات",
      "سونوگرافی مفصل ران نوزادان",
      "اصلاح پای پرانتزی و ضربدری اطفال",
      "مشاوره کوتاهی قد و اندام"
    ],
    availableDays: [
      "شنبه",
      "دوشنبه",
      "چهارشنبه"
    ],
    availableSlots: [
      {
        id: "kaz1",
        day: "فردا (دوشنبه)",
        date: "دوشنبه",
        time: "۱۵:۳۰",
        period: "عصر"
      },
      {
        id: "kaz2",
        day: "فردا (دوشنبه)",
        date: "دوشنبه",
        time: "۱۷:۰۰",
        period: "عصر"
      },
      {
        id: "kaz3",
        day: "چهارشنبه",
        date: "چهارشنبه",
        time: "۱۶:۰۰",
        period: "عصر"
      }
    ],
    reviews: [
      {
        id: "rev-kaz1",
        patientName: "الهام نصیری (مادر رادین)",
        date: "۱ هفته پیش",
        rating: 5,
        treatment: "درمان انحراف ستون فقرات (اسکولیوز) نوجوان",
        comment: "دخترم انحراف ستون فقرات ۳۰ درجه داشت. خانم دکتر کاظمی با بریس اختصاصی و حرکات اصلاحی زاویه رو به ۱۲ درجه رسوندن بدون جراحی. همیشه دعاگوشون هستیم.",
        recommended: true
      }
    ]
  }
];
