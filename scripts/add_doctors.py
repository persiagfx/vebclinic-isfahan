import json
import os

new_doctors = [
  {
    "id": "dr-tabatabaei",
    "name": "دکتر سید حسن طباطبایی",
    "avatarText": "د.ط",
    "avatarImage": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب تخصصی ارتوپدی و ستون فقرات"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "سالن انتظار مجتمع قصر"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "اتاق معاینه و ارزیابی قامت"}
    ],
    "medicalCode": "۴۳۲۱۸",
    "title": "فوق تخصص جراحی ستون فقرات",
    "subSpecialty": "فوق تخصص جراحی ستون فقرات، اسکولیوز و جراحی‌های کم‌تهاجمی دیسک (MISS)",
    "specialtyTag": "spine",
    "experienceYears": 18,
    "rating": 4.9,
    "reviewCount": 178,
    "satisfactionRate": 98,
    "academicRank": "دانشیار دانشگاه علوم پزشکی اصفهان، عضو انجمن ستون فقرات اروپا (AO Spine)",
    "workingHours": "روزهای زوج از ساعت ۱۵:۳۰ الی ۲۰:۳۰",
    "address": "اصفهان، خیابان شمس‌آبادی، نبش مادی فرشادی، مجتمع پزشکی قصر، طبقه سوم",
    "district": "خیابان شمس‌آبادی",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع پزشکی قصر",
    "floorAndUnit": "طبقه سوم، واحد ۳۰۴",
    "coordinates": {"lat": 32.6570, "lng": 51.6675},
    "instagram": "dr.tabatabaei_spine",
    "whatsapp": "989133182020",
    "telegram": "dr_tabatabaei_spine",
    "website": "https://drtabatabaei.vebclinic.ir",
    "specialtiesList": [
      "جراحی لیزری و آندوسکوپی دیسک کمر و گردن",
      "اصلاح انحراف ستون فقرات (اسکولیوز و کیفوز) در نوجوانان و بزرگسالان",
      "جراحی تنگی کانال نخاعی با روش‌های کم‌تهاجمی بدون بیهوشی سنگین",
      "تثبیت شکستگی‌های مهره با پدیکولار اسکرو و ورتبروپلاستی"
    ],
    "hospitals": ["بیمارستان آیت‌الله کاشانی اصفهان", "بیمارستان سینا اصفهان", "بیمارستان سعدی"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "parsian"],
    "consultationFee": 340000,
    "nextAvailableSlot": "فردا - ساعت ۱۶:۰۰",
    "phone": "031-32204560",
    "biography": "دکتر سید حسن طباطبایی فوق تخصص جراحی ستون فقرات از دانشگاه علوم پزشکی تهران و فلوشیپ جراحی‌های پیشرفته ستون فقرات از آلمان، با بیش از ۱۸ سال تجربه بالینی و جراحی هزاران عمل موفق دیسک و اسکولیوز در اصفهان.",
    "memberships": [
      "عضو رسمی انجمن جهانی ستون فقرات (AO Spine)",
      "عضو انجمن جراحان ستون فقرات ایران",
      "عضو هیئت علمی دانشگاه علوم پزشکی اصفهان"
    ],
    "clinicAmenities": ["دسترسی کامل با ویلچر و آسانسور برانکاردبر", "سیستم نوبت‌دهی هوشمند بدون معطلی", "اتاق مشاوره خصوصی و ارزیابی عکس MRI"],
    "services": ["ویزیت فوق تخصصی ستون فقرات", "تزریق ترانس‌فورامینال اپیدورال ضد درد", "تفسیر ام‌آر‌آی و رادیوگرافی تخصصی", "مشاوره قبل از عمل جراحی دیسک"],
    "availableDays": ["شنبه", "دوشنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "tab1", "day": "فردا", "date": "فردا", "time": "۱۶:۰۰", "period": "عصر"},
      {"id": "tab2", "day": "فردا", "date": "فردا", "time": "۱۷:۳۰", "period": "عصر"},
      {"id": "tab3", "day": "چهارشنبه", "date": "پس‌فردا", "time": "۱۶:۱۵", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-tab1",
        "patientName": "حسین فرهمند",
        "date": "۳ روز پیش",
        "rating": 5,
        "treatment": "جراحی کم‌تهاجمی دیسک کمر ال۴-ال۵",
        "comment": "با درد سیاتیک شدید مراجعه کردم. بعد از جراحی اندوسکوپی همان روز مرخص شدم و تمام دردم ناپدید شد. دست دکتر طباطبایی طلاست.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-yazdani",
    "name": "دکتر بهزاد یزدانی",
    "avatarText": "د.ی",
    "avatarImage": "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "کلینیک فوق‌تخصصی زانو و پزشکی ورزشی"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "اتاق تست دینامیک زانو و رباط"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "بخش ارزیابی ورزشکاران حرفه‌ای"}
    ],
    "medicalCode": "۴۹۱۷۴",
    "title": "فوق تخصص جراحی زانو و آرتروسکوپی",
    "subSpecialty": "فلوشیپ فوق‌تخصصی آسیب‌های ورزشی، بازسازی رباط صلیبی (ACL) و پیوند مینیسک",
    "specialtyTag": "knee",
    "experienceYears": 14,
    "rating": 4.8,
    "reviewCount": 134,
    "satisfactionRate": 96,
    "academicRank": "جراح معتمد باشگاه‌های ورزشی برتر، فلوشیپ آرتروسکوپی زانو",
    "workingHours": "روزهای یکشنبه، سه‌شنبه و پنجشنبه از ساعت ۱۶:۰۰ الی ۲۱:۰۰",
    "address": "اصفهان، خیابان آمادگاه، مجتمع درمانی سپاهان، طبقه اول، واحد ۱۰۴",
    "district": "خیابان آمادگاه",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع درمانی سپاهان",
    "floorAndUnit": "طبقه اول، واحد ۱۰۴",
    "coordinates": {"lat": 32.6532, "lng": 51.6748},
    "instagram": "dr.behzad_yazdani_knee",
    "whatsapp": "989132049090",
    "telegram": "dr_yazdani_knee",
    "website": "https://dryazdani.vebclinic.ir",
    "specialtiesList": [
      "جراحی بسته (آرتروسکوپی) بازسازی رباط صلیبی قدامی و خلفی",
      "ترمیم و دوخت مینیسک زانو با تکنیک Inside-Out و All-Inside",
      "درمان دررفتگی مکرر کشکک زانو و بازسازی لیگامان MPFL",
      "تزریق پلاسمای غنی از پلاکت (PRP) با کیت استاندارد تحت هدایت سونو"
    ],
    "hospitals": ["بیمارستان الزهرا (س) اصفهان", "بیمارستان سعدی اصفهان", "کلینیک فوق‌تخصصی خانواده"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "asia", "alborz", "mellat"],
    "consultationFee": 320000,
    "nextAvailableSlot": "سه‌شنبه - ساعت ۱۷:۰۰",
    "phone": "031-32219800",
    "biography": "دکتر بهزاد یزدانی دارای بورد تخصصی ارتوپدی و فلوشیپ جراحی زانو، با سال‌ها تجربه در درمان تخصصی آسیب‌های زانو در فوتبالیست‌ها، کوهنوردان و ورزشکاران استان اصفهان.",
    "memberships": [
      "عضو انجمن جراحان زانو، آرتروسکوپی و آسیب‌های ورزشی ایران (ISKAST)",
      "عضو جامعه بین‌المللی آرتروسکوپی و ارتوپدی ورزشی (ISAKOS)"
    ],
    "clinicAmenities": ["دستگاه سونوگرافی مفصلی داخل مطب", "امکان صدور گواهی و معرفی‌نامه آنلاین", "پارکینگ عمومی نزدیک در خیابان باغ گلدسته"],
    "services": ["آرتروسکوپی زانو", "تزریق اسید هیالورونیک و پی‌آرپی", "معاینه کامل رباط و مینیسک", "برنامه بازگشت به ورزش"],
    "availableDays": ["یکشنبه", "سه‌شنبه", "پنجشنبه"],
    "availableSlots": [
      {"id": "yaz1", "day": "فردا (سه‌شنبه)", "date": "سه‌شنبه", "time": "۱۷:۰۰", "period": "عصر"},
      {"id": "yaz2", "day": "فردا (سه‌شنبه)", "date": "سه‌شنبه", "time": "۱۸:۳۰", "period": "عصر"},
      {"id": "yaz3", "day": "پنجشنبه", "date": "پنجشنبه", "time": "۱۶:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-yaz1",
        "patientName": "مهدی کاظمی (فوتبالیست)",
        "date": "هفته پیش",
        "rating": 5,
        "treatment": "ترمیم رباط صلیبی زانوی راست",
        "comment": "رباط صلیبی‌ام در مسابقه پاره شد. آقای دکتر یزدانی به بهترین شکل عمل کردند و بعد از ۶ ماه دوباره به تمرینات برگشتم.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-mirzaei",
    "name": "دکتر پروانه میرزایی",
    "avatarText": "د.م",
    "avatarImage": "https://images.unsplash.com/photo-1594824813524-118c72834b6e?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب تخصصی ارتوپدی کودکان و نوزادان"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "اتاق غربالگری سونوگرافی هیپ نوزاد"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "فضای بازی و سرگرمی کودک"}
    ],
    "medicalCode": "۵۵۴۲۰",
    "title": "فوق تخصص ارتوپدی کودکان",
    "subSpecialty": "فوق تخصص ارتوپدی اطفال، درمان پای چنبری (کلاب‌فوت)، دررفتگی مادرزادی لگن و زانوی پرانتزی",
    "specialtyTag": "pediatric",
    "experienceYears": 13,
    "rating": 4.9,
    "reviewCount": 162,
    "satisfactionRate": 99,
    "academicRank": "استادیار ارتوپدی کودکان، فلوشیپ بین‌المللی ارتوپدی اطفال",
    "workingHours": "روزهای شنبه، یکشنبه، سه‌شنبه از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    "address": "اصفهان، خیابان بزرگمهر، تقاطع هشت بهشت غربی، ساختمان پزشکان پارت، طبقه پنجم",
    "district": "خیابان بزرگمهر",
    "city": "اصفهان",
    "clinicBuilding": "ساختمان پزشکان پارت",
    "floorAndUnit": "طبقه پنجم، واحد ۵۰۲",
    "coordinates": {"lat": 32.6515, "lng": 51.6920},
    "instagram": "dr.parvaneh_mirzaei",
    "whatsapp": "989134015520",
    "telegram": "dr_mirzaei_pediatric",
    "website": "https://drmirzaei.vebclinic.ir",
    "specialtiesList": [
      "درمان پای چنبری (کلاب فوت) با روش استاندارد پونستی و بریس",
      "غربالگری زودهنگام دررفتگی مادرزادی مفصل ران نوزادان (DDH)",
      "اصلاح پای ضربدری و پرانتزی کودکان با پلیت‌های هدایت رشد (8-plate)",
      "درمان ناهنجاری‌های راه‌رفتن و فلج مغزی (CP) کودکان"
    ],
    "hospitals": ["بیمارستان تخصصی کودکان امام حسین (ع) اصفهان", "بیمارستان میلاد اصفهان"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "dey"],
    "consultationFee": 325000,
    "nextAvailableSlot": "شنبه آینده - ساعت ۱۵:۳۰",
    "phone": "031-32671140",
    "biography": "دکتر پروانه میرزایی فوق تخصص ارتوپدی کودکان و از برجسته‌ترین پزشکان فعال در تشخیص زودهنگام ناهنجاری‌های اسکلتی نوزادان با صبوری بی‌نظیر و محیطی آرامش‌بخش برای کودکان.",
    "memberships": [
      "عضو انجمن جراحان ارتوپدی اطفال اروپا (EPOS)",
      "عضو انجمن علمی ارتوپدی کودکان ایران"
    ],
    "clinicAmenities": ["اتاق اختصاصی معاینه نوزادان مجهز به گرم‌کننده", "محیط کارتونی و شاد", "سونوگرافی اختصاصی لگن متد گراف"],
    "services": ["سونوگرافی غربالگری هیپ", "گچ‌گیری اصلاحی پونستی", "مشاوره انحراف اندام تحتانی", "معاینه کف پای صاف کودکان"],
    "availableDays": ["شنبه", "یکشنبه", "سه‌شنبه"],
    "availableSlots": [
      {"id": "mir1", "day": "شنبه آینده", "date": "شنبه", "time": "۱۵:۳۰", "period": "عصر"},
      {"id": "mir2", "day": "شنبه آینده", "date": "شنبه", "time": "۱۶:۴۵", "period": "عصر"},
      {"id": "mir3", "day": "یکشنبه آینده", "date": "یکشنبه", "time": "۱۶:۰۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-mir1",
        "patientName": "زهره سعادتمند (مادر باران)",
        "date": "۵ روز پیش",
        "rating": 5,
        "treatment": "درمان کلاب فوت نوزاد با روش پونستی",
        "comment": "پای نوزادم کاملاً کج به دنیا اومده بود. خانم دکتر میرزایی با ۵ جلسه گچ‌گیری و برش تاندون پای بچم رو کاملاً صاف کردند. همیشه دعاشون می‌کنیم.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-ansari",
    "name": "دکتر رضا انصاری",
    "avatarText": "د.ا",
    "avatarImage": "https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی جراحی دست و اعصاب"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "میز اختصاصی میکروسرجری و معاینه دست"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "سالن لابی مراجعین مجتمع بهشت"}
    ],
    "medicalCode": "۳۹۸۶۲",
    "title": "فوق تخصص جراحی دست و میکروسرجری",
    "subSpecialty": "فوق تخصص جراحی دست و اعصاب محیطی، سندرم تونل کارپال، تاندون‌ها و قطع عضو",
    "specialtyTag": "shoulder",
    "experienceYears": 20,
    "rating": 4.85,
    "reviewCount": 149,
    "satisfactionRate": 97,
    "academicRank": "استاد جراحی ارتوپدی و میکروسرجری دست، پیوند اعصاب",
    "workingHours": "روزهای یکشنبه تا چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    "address": "اصفهان، خیابان طیب، جنب بیمارستان آیت‌الله کاشانی، مجتمع بهشت، طبقه دوم",
    "district": "خیابان طیب",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع بهشت",
    "floorAndUnit": "طبقه دوم، واحد ۲۰۱",
    "coordinates": {"lat": 32.6598, "lng": 51.6660},
    "instagram": "dr.reza_ansari_hand",
    "whatsapp": "989131109988",
    "telegram": "dr_ansari_hand",
    "website": "https://dransari.vebclinic.ir",
    "specialtiesList": [
      "جراحی آندوسکوپی آزادسازی تونل مچ دست (CTS) بدون جای بخیه عمیق",
      "ترمیم پارگی تاندون‌های فلکسور و اکستانسور انگشتان",
      "جراحی شکستگی‌های پیچیده اسکافوئید و مفصل مچ دست",
      "جراحی تعویض مفاصل کوچک انگشتان و درمان انگشت ماشه‌ای (Trigger Finger)"
    ],
    "hospitals": ["بیمارستان آیت‌الله کاشانی اصفهان", "بیمارستان سینا اصفهان"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "parsian"],
    "consultationFee": 310000,
    "nextAvailableSlot": "فردا - ساعت ۱۷:۱۵",
    "phone": "031-32357790",
    "biography": "دکتر رضا انصاری فوق تخصص جراحی دست و میکروسرجری از دانشگاه علوم پزشکی شهید بهشتی، با سابقه بیش از ۲ هزار عمل جراحی ظریف اعصاب دست و تاندون در استان اصفهان.",
    "memberships": [
      "عضو انجمن جراحان دست ایران (ISSH)",
      "عضو فدراسیون بین‌المللی جوامع جراحی دست (IFSSH)"
    ],
    "clinicAmenities": ["مجاورت با بیمارستان ارتوپدی کاشانی", "امکان آتل‌بندی و گچ‌گیری سبک ترموپلاستیک", "نوبت‌دهی منظم و دقیق"],
    "services": ["معاینه دقیق اعصاب دست و حس لمس", "تزریق استروئید تاندون دست تحت گاید", "جراحی CTS با بی‌حسی موضعی", "مشاوره توانبخشی دست"],
    "availableDays": ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "ans1", "day": "فردا", "date": "فردا", "time": "۱۷:۱۵", "period": "عصر"},
      {"id": "ans2", "day": "فردا", "date": "فردا", "time": "۱۸:۳۰", "period": "عصر"},
      {"id": "ans3", "day": "پس‌فردا", "date": "پس‌فردا", "time": "۱۶:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-ans1",
        "patientName": "مریم احمدی",
        "date": "یک هفته پیش",
        "rating": 5,
        "treatment": "جراحی چسبندگی عصب مچ دست (تونل کارپال)",
        "comment": "دست راستم شب‌ها مدام بی‌حس و تیر می‌کشید. آقای دکتر انصاری سرپایی در کمتر از ۲۰ دقیقه عملم کردند و همان شب راحتی را حس کردم.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-mousavi",
    "name": "دکتر سید علیرضا موسوی",
    "avatarText": "د.م",
    "avatarImage": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی زانو و آرتروپلاستی"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "سالن مراجعین مجتمع نگین وحید"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "اتاق نمایش پروتزها و ایمپلنت‌های زانو"}
    ],
    "medicalCode": "۴۱۸۵۰",
    "title": "جراح ارتوپد و فوق تخصص تعویض مفصل زانو",
    "subSpecialty": "فوق تخصص تعویض کامل مفصل زانو (TKR) با سیستم نویگیشن، تعویض مفصل نیمه (UKI)",
    "specialtyTag": "knee",
    "experienceYears": 17,
    "rating": 4.9,
    "reviewCount": 156,
    "satisfactionRate": 98,
    "academicRank": "فلوشیپ آرتروپلاستی زانو از اتریش، جراح برتر تعویض مفصل اصفهان",
    "workingHours": "روزهای شنبه تا سه‌شنبه از ساعت ۱۵:۳۰ الی ۲۰:۰۰",
    "address": "اصفهان، خیابان وحید، ابتدای خیابان خاقانی، مجتمع نگین وحید، طبقه سوم",
    "district": "خیابان وحید",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع نگین وحید",
    "floorAndUnit": "طبقه سوم، واحد ۳۰۶",
    "coordinates": {"lat": 32.6360, "lng": 51.6500},
    "instagram": "dr.alireza_mousavi_knee",
    "whatsapp": "989138805566",
    "telegram": "dr_mousavi_knee",
    "website": "https://drmousavi.vebclinic.ir",
    "specialtiesList": [
      "تعویض کامل مفصل زانو (Total Knee Arthroplasty) با ایمپلنت‌های آمریکایی و اروپایی",
      "جراحی تعویض مجدد زانو (Revision TKR) در صورت شل‌شدگی پروتز قبلی",
      "تعویض نیمه‌مفصل زانو (Unicondylar Knee) برای ساییدگی‌های محدود",
      "اصلاح راستای زانو با استئوتومی بالا تسبیا (HTO)"
    ],
    "hospitals": ["بیمارستان سعدی اصفهان", "بیمارستان میلاد اصفهان", "بیمارستان سینا"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "karafarin"],
    "consultationFee": 335000,
    "nextAvailableSlot": "امروز - ساعت ۱۸:۳۰",
    "phone": "031-36284450",
    "biography": "دکتر سید علیرضا موسوی جراح استخوان و مفاصل با فلوشیپ تخصصی جراحی زانو از گراتس اتریش، مجری پروتکل ترخیص سریع بعد از تعویض مفصل و راه رفتن بیمار در روز عمل.",
    "memberships": [
      "عضو جامعه بین‌المللی تعویض مفصل (EKA)",
      "عضو هیئت مدیره انجمن ارتوپدی شاخه اصفهان"
    ],
    "clinicAmenities": ["پروتزهای شبیه‌ساز زانو برای لمس و مشاهده بیمار", "آسانسور ویلچربر اختصاصی", "پوشش کامل بیمه‌های تکمیلی"],
    "services": ["مشاوره ویزیت تعویض مفصل زانو", "ارزیابی گراف‌های زانو و هم‌راستایی (Alignment)", "تزریقات غضروف‌ساز و سلول‌درمانی"],
    "availableDays": ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه"],
    "availableSlots": [
      {"id": "mou1", "day": "امروز", "date": "امروز", "time": "۱۸:۳۰", "period": "عصر"},
      {"id": "mou2", "day": "فردا", "date": "فردا", "time": "۱۶:۰۰", "period": "عصر"},
      {"id": "mou3", "day": "فردا", "date": "فردا", "time": "۱۷:۴۵", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-mou1",
        "patientName": "نصرت رضوی (۶۲ ساله)",
        "date": "۲ هفته پیش",
        "rating": 5,
        "treatment": "تعویض کامل مفصل زانوی چپ",
        "comment": "چند سال از درد زانو گریه می‌کردم. دکتر موسوی هر دو پای من رو با فاصله ۶ ماه عمل کردند و الان بدون هیچ عصایی پیاده‌روی می‌کنم. بی‌نهایت سپاسگزارم.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-ebrahimi",
    "name": "دکتر داوود ابراهیمی",
    "avatarText": "د.ا",
    "avatarImage": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی ارتوپدی تروما و لگن"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "سالن انتظار ساختمان امید"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "تجهیزات رادیولوژی و سنجش تراکم استخوان"}
    ],
    "medicalCode": "۳۷۴۱۰",
    "title": "فوق تخصص جراحی لگن و تروما",
    "subSpecialty": "فوق تخصص جراحی ارتوپدی تروما، شکستگی‌های پیچیده مفصل ران، لگن و استابولوم",
    "specialtyTag": "hip",
    "experienceYears": 22,
    "rating": 4.9,
    "reviewCount": 168,
    "satisfactionRate": 99,
    "academicRank": "استاد تمام دانشگاه علوم پزشکی، رئیس سابق بخش ترومای بیمارستان کاشانی",
    "workingHours": "روزهای شنبه، دوشنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    "address": "اصفهان، خیابان محتشم کاشانی، نبش کوچه بیست و دوم، ساختمان پزشکان امید، طبقه چهارم",
    "district": "خیابان محتشم کاشانی",
    "city": "اصفهان",
    "clinicBuilding": "ساختمان پزشکان امید",
    "floorAndUnit": "طبقه چهارم، واحد ۴۰۲",
    "coordinates": {"lat": 32.6320, "lng": 51.6580},
    "instagram": "dr.davood_ebrahimi_trauma",
    "whatsapp": "989133148877",
    "telegram": "dr_ebrahimi_ortho",
    "website": "https://drebrahimi.vebclinic.ir",
    "specialtiesList": [
      "جراحی شکستگی‌های پیچیده حفره استابولوم و حلقه لگن",
      "جراحی نکروز سر استخوان ران (AVN) با تکنیک مغز استخوان و دکمپرشن",
      "درمان جوش‌نخوردگی و بدجوش‌خوردگی‌های استخوان (Non-union & Mal-union)",
      "جراحی تعویض مفصل ران در شکستگی‌های گردن فمور افراد مسن"
    ],
    "hospitals": ["بیمارستان آیت‌الله کاشانی اصفهان", "بیمارستان سعدی اصفهان", "بیمارستان عسکریه"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "sina"],
    "consultationFee": 330000,
    "nextAvailableSlot": "فردا - ساعت ۱۷:۳۰",
    "phone": "031-36245580",
    "biography": "دکتر داوود ابراهیمی با بیش از دو دهه تجربه جراحی در پرتروماتیک‌ترین مرکز ارتوپدی اصفهان، مرجع ارجاع بیماران بدحال و شکستگی‌های چندگانه استخوانی از سراسر استان‌های مجاور.",
    "memberships": [
      "عضو جامعه بین‌المللی ارتوپدی تروما (AO Trauma)",
      "عضو انجمن جراحان هیپ و لگن ایران"
    ],
    "clinicAmenities": ["امکان انجام مشاوره فوری موارد تصادفی", "رمپ استاندارد ورود ویلچر", "طرف قرارداد مستقیم با تمام بیمه‌ها"],
    "services": ["ویزیت تخصصی شکستگی‌ها و مفاصل", "مشاوره بعد از تصادفات شدید", "تعویض پروتز هیپ در سالمندان", "بررسی نکروز استخوان"],
    "availableDays": ["شنبه", "دوشنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "ebr1", "day": "فردا", "date": "فردا", "time": "۱۷:۳۰", "period": "عصر"},
      {"id": "ebr2", "day": "فردا", "date": "فردا", "time": "۱۹:۰۰", "period": "عصر"},
      {"id": "ebr3", "day": "چهارشنبه", "date": "پس‌فردا", "time": "۱۶:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-ebr1",
        "patientName": "علیرضا نجفی",
        "date": "۱ ماه پیش",
        "rating": 5,
        "treatment": "جراحی شکستگی خردشده لگن در تصادف",
        "comment": "پدرم در تصادف تصادف وحشتناکی دچار شکستگی لگن شد و چند بیمارستان عمل نمی‌کردند. دکتر ابراهیمی با مهارت فوق‌العاده عمل کردند و پدرم الان دوباره روی پای خودش ایستاده.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-ghasemi",
    "name": "دکتر حمیدرضا قاسمی",
    "avatarText": "د.ق",
    "avatarImage": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب تخصصی ارتوپدی و مفاصل لگن"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "لابی مجتمع پزشکی سینا"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "اتاق گچ‌گیری و معاینه بالینی"}
    ],
    "medicalCode": "۴۵۲۹۰",
    "title": "جراح ارتوپد و فوق تخصص تعویض مفصل ران",
    "subSpecialty": "فوق تخصص تعویض کامل مفصل لگن (THR)، اصلاح انحراف پرانتزی زانو و پای پرانتزی",
    "specialtyTag": "hip",
    "experienceYears": 16,
    "rating": 4.8,
    "reviewCount": 128,
    "satisfactionRate": 95,
    "academicRank": "فلوشیپ آرتروپلاستی و تعویض مفاصل، جراح ارتوپدی",
    "workingHours": "روزهای یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    "address": "اصفهان، خیابان شمس‌آبادی، روبروی بیمارستان سینا، مجتمع پزشکی سینا، طبقه اول",
    "district": "خیابان شمس‌آبادی",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع پزشکی سینا",
    "floorAndUnit": "طبقه اول، واحد ۱۰۲",
    "coordinates": {"lat": 32.6565, "lng": 51.6668},
    "instagram": "dr.hamidreza_ghasemi",
    "whatsapp": "989132104433",
    "telegram": "dr_ghasemi_ortho",
    "website": "https://drghasemi.vebclinic.ir",
    "specialtiesList": [
      "تعویض مفصل ران با پروتزهای سرامیکی دلتا و متال آن متال",
      "جراحی استئوتومی اصلاح پای پرانتزی (Genu Varum)",
      "درمان نکروز آواسکولار سر فمور (سیاه شدن سر استخوان ران)",
      "تعویض مفصل زانو با روش کم‌تهاجمی مینی ساب واستوس"
    ],
    "hospitals": ["بیمارستان سینا اصفهان", "بیمارستان سپاهان اصفهان", "بیمارستان خانواده"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "razy"],
    "consultationFee": 315000,
    "nextAvailableSlot": "سه‌شنبه - ساعت ۱۶:۰۰",
    "phone": "031-32215560",
    "biography": "دکتر حمیدرضا قاسمی جراح ارتوپد و فوق تخصص تعویض مفاصل با سال‌ها سابقه جراحی در بیمارستان سینا و سپاهان اصفهان، پیشگام به کارگیری پروتزهای سرامیکی نسل جدید با طول عمر بالای ۳۰ سال.",
    "memberships": [
      "عضو انجمن جراحان ارتوپدی ایران",
      "عضو انجمن آرتروپلاستی مفصل ران و زانو"
    ],
    "clinicAmenities": ["واقع در مرکز پزشکی خیابان شمس‌آبادی", "پوشش دستگاه کارتخوان و معرفی‌نامه", "آسانسور برانکاردبر"],
    "services": ["ویزیت دردهای مفصل لگن و کشاله ران", "بررسی عکس رادیولوژی و ام‌آر‌آی لگن", "تزریق داخل مفصل هیپ تحت گاید", "مشاوره جراحی پروتز لگن"],
    "availableDays": ["یکشنبه", "سه‌شنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "gha1", "day": "سه‌شنبه", "date": "فردا", "time": "۱۶:۰۰", "period": "عصر"},
      {"id": "gha2", "day": "سه‌شنبه", "date": "فردا", "time": "۱۷:۳۰", "period": "عصر"},
      {"id": "gha3", "day": "چهارشنبه", "date": "پس‌فردا", "time": "۱۵:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-gha1",
        "patientName": "محمود انصاری پور",
        "date": "۳ هفته پیش",
        "rating": 5,
        "treatment": "تعویض مفصل ران با پروتز سرامیک دلتا",
        "comment": "به خاطر ساییدگی شدید لگن لنگش داشتم. الان ۶ ماهه از عملم گذشته، لنگش کاملا رفع شده و دردم صفر شده.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-rostami",
    "name": "دکتر مهشید رستمی",
    "avatarText": "د.ر",
    "avatarImage": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "کلینیک طب فیزیکی و توانبخشی"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "دستگاه پیشرفته نوار عصب و عضله (EMG-NCS)"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "اتاق لیزردرمانی پرتوان و مگنت"}
    ],
    "medicalCode": "۵۸۳۱۰",
    "title": "متخصص طب فیزیکی، توانبخشی و الکترودیاگنوز",
    "subSpecialty": "متخصص درمان غیرجراحی دیسک کمر، سیاتیک، آرتروز مفاصل و نوار عصب و عضله (EMG-NCS)",
    "specialtyTag": "rehab",
    "experienceYears": 12,
    "rating": 4.95,
    "reviewCount": 182,
    "satisfactionRate": 99,
    "academicRank": "رتبه برتر بورد تخصصی طب فیزیکی و توانبخشی کشور",
    "workingHours": "روزهای شنبه تا چهارشنبه از ساعت ۱۴:۳۰ الی ۱۹:۰۰",
    "address": "اصفهان، خیابان آمادگاه، مجتمع پزشکی گلدیس، ورودی اول، طبقه دوم",
    "district": "خیابان آمادگاه",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع پزشکی گلدیس",
    "floorAndUnit": "ورودی اول، طبقه دوم، واحد ۲۱۸",
    "coordinates": {"lat": 32.6530, "lng": 51.6740},
    "instagram": "dr.mahshid_rostami_pmr",
    "whatsapp": "989134551122",
    "telegram": "dr_rostami_rehab",
    "website": "https://drrostami.vebclinic.ir",
    "specialtiesList": [
      "نوار عصب و عضله ۴ اندام (EMG-NCS) با دستگاه مدرن اروپایی",
      "درمان غیرجراحی دیسک ستون فقرات با لیزر پرتوان و دکمپرشن ستون فقرات",
      "تزریق اوزون، ژل و پی‌آرپی تحت سونوگرافی دقیق مفصلی",
      "طب سوزنی تخصصی (Dry Needling) برای گرفتگی‌های عضلانی میوفاشیال"
    ],
    "hospitals": ["بیمارستان الزهرا (س) اصفهان", "بیمارستان شهید فیض"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "parsian", "moalem"],
    "consultationFee": 290000,
    "nextAvailableSlot": "امروز - ساعت ۱۶:۳۰",
    "phone": "031-32228840",
    "biography": "دکتر مهشید رستمی متخصص طب فیزیکی و توانبخشی با دانش روز در درمان محافظه‌کارانه و غیرجراحی دردهای اسکلتی و مفاصل، پیشگام درمان دیسک کمر بدون جراحی در اصفهان.",
    "memberships": [
      "عضو انجمن طب فیزیکی و توانبخشی ایران",
      "عضو انجمن بین‌المللی طب فیزیکی و توانبخشی (ISPRM)"
    ],
    "clinicAmenities": ["مجهز به مدرن‌ترین دستگاه الکترومیوگرافی", "امکان انجام نوار عصب در همان روز ویزیت", "محیط آرام و پرسنل صبور خانم"],
    "services": ["انجام نوار عصب و عضله دست و پا", "تزریق اوزون در مفصل زانو و شانه", "تزریق بوتاکس برای اسپاستیسیتی و میگرن", "برنامه توانبخشی بعد از عمل دیسک"],
    "availableDays": ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "ros1", "day": "امروز", "date": "امروز", "time": "۱۶:۳۰", "period": "عصر"},
      {"id": "ros2", "day": "امروز", "date": "امروز", "time": "۱۸:۰۰", "period": "عصر"},
      {"id": "ros3", "day": "فردا", "date": "فردا", "time": "۱۵:۰۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-ros1",
        "patientName": "سمیه حیدری",
        "date": "۴ روز پیش",
        "rating": 5,
        "treatment": "نوار عصب و عضله و درمان دیسک کمر",
        "comment": "خانم دکتر بسیار با اخلاق، با دقت و صبور هستند. نوار عصب را بدون ذره‌ای درد انجام دادند و با ۵ جلسه لیزر دردم فروکش کرد.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-akbari",
    "name": "دکتر فرهاد اکبری",
    "avatarText": "د.ا",
    "avatarImage": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی جراحی مچ و کف پا"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "اتاق اسکن سه‌بعدی کف پا و پدوباروگرافی"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "سالن پذیرش مراجعین خیابان بزرگمهر"}
    ],
    "medicalCode": "۴۲۹۰۰",
    "title": "فوق تخصص جراحی مچ پا و کف پا (Foot & Ankle)",
    "subSpecialty": "فلوشیپ فوق تخصصی جراحی مچ پا، اصلاح انحراف شست پا (هالوکس والگوس) و آرتروسکوپی مچ",
    "specialtyTag": "knee",
    "experienceYears": 15,
    "rating": 4.88,
    "reviewCount": 139,
    "satisfactionRate": 97,
    "academicRank": "فلوشیپ جراحی مچ و پا از سوئیس، جراح استخوان و مفاصل",
    "workingHours": "روزهای زوج از ساعت ۱۶:۰۰ الی ۲۰:۰۰",
    "address": "اصفهان، خیابان بزرگمهر، نبش خیابان شریف واقفی، ساختمان فراز، طبقه سوم",
    "district": "خیابان بزرگمهر",
    "city": "اصفهان",
    "clinicBuilding": "ساختمان فراز",
    "floorAndUnit": "طبقه سوم، واحد ۳۰۵",
    "coordinates": {"lat": 32.6500, "lng": 51.6910},
    "instagram": "dr.farhad_akbari_ankle",
    "whatsapp": "989133092211",
    "telegram": "dr_akbari_foot",
    "website": "https://drakbari.vebclinic.ir",
    "specialtiesList": [
      "جراحی اصلاحی قوز شست پا (هالوکس والگوس) با متد کم‌تهاجمی بدون بازگشت",
      "آرتروسکوپی مچ پا برای ضایعات استئوکندرال تالوس (OCD) و گیر افتادگی مچ",
      "ترمیم پارگی‌های حاد و مزمن تاندون آشیل با متد کم‌تهاجمی",
      "اصلاح کف پای صاف شدید و انحراف پاشنه پا در بزرگسالان"
    ],
    "hospitals": ["بیمارستان الزهرا (س) اصفهان", "بیمارستان سعدی اصفهان", "بیمارستان میلاد"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "novin"],
    "consultationFee": 315000,
    "nextAvailableSlot": "دوشنبه - ساعت ۱۷:۰۰",
    "phone": "031-32662050",
    "biography": "دکتر فرهاد اکبری متخصص ارتوپدی و فلوشیپ جراحی فوق‌تخصصی مچ پا و پا، مبدع استفاده از تکنیک‌های بسته و کم‌تهاجمی جراحی هالوکس والگوس با ترخیص در همان روز در استان اصفهان.",
    "memberships": [
      "عضو انجمن جراحی مچ و پای اروپا (EFAS)",
      "عضو جامعه جراحان ارتوپدی ایران"
    ],
    "clinicAmenities": ["مجهز به اسکن کامپیوتری کف پا برای کفی طبی", "امکان استفاده از بریس و کفش‌های بعد از جراحی هالوکس", "آسانسور"],
    "services": ["اسکن فشاری کف پا", "جراحی هالوکس والگوس", "آرتروسکوپی مچ پا", "تزریق پی‌آرپی در خار پاشنه و آشیل"],
    "availableDays": ["شنبه", "دوشنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "akb1", "day": "فردا (دوشنبه)", "date": "دوشنبه", "time": "۱۷:۰۰", "period": "عصر"},
      {"id": "akb2", "day": "فردا (دوشنبه)", "date": "دوشنبه", "time": "۱۸:۳۰", "period": "عصر"},
      {"id": "akb3", "day": "چهارشنبه", "date": "چهارشنبه", "time": "۱۶:۱۵", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-akb1",
        "patientName": "فاطمه شمس",
        "date": "۱ هفته پیش",
        "rating": 5,
        "treatment": "جراحی هر دو شست پا (هالوکس والگوس)",
        "comment": "سال‌ها نمی‌تونستم کفش مناسب بپوشم از درد شست پا. دکتر اکبری با متد جدید جراحی کردند و اصلا درد وحشتناکی که دیگران می‌گفتند رو تجربه نکردم.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-esmaeili",
    "name": "دکتر جواد اسماعیلی",
    "avatarText": "د.ا",
    "avatarImage": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی جراحی شانه و آرنج"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "سالن انتظار مجتمع پارسیان وحید"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "اتاق مشاوره و ارزیابی دامنه حرکتی شانه"}
    ],
    "medicalCode": "۴۴۷۸۰",
    "title": "فوق تخصص جراحی شانه و آرنج",
    "subSpecialty": "فلوشیپ فوق تخصصی آرتروسکوپی شانه، ترمیم تاندون روتاتور کاف و پروتز معکوس شانه (Reverse TSA)",
    "specialtyTag": "shoulder",
    "experienceYears": 18,
    "rating": 4.91,
    "reviewCount": 164,
    "satisfactionRate": 98,
    "academicRank": "دانشیار ارتوپدی، فلوشیپ جراحی شانه از فرانسه",
    "workingHours": "روزهای یکشنبه، سه‌شنبه، چهارشنبه از ساعت ۱۶:۰۰ الی ۲۰:۳۰",
    "address": "اصفهان، خیابان وحید، نبش خیابان باغ دریاچه، مجتمع پارسیان، طبقه دوم",
    "district": "خیابان وحید",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع پارسیان",
    "floorAndUnit": "طبقه دوم، واحد ۲۰۴",
    "coordinates": {"lat": 32.6345, "lng": 51.6515},
    "instagram": "dr.javad_esmaeili_shoulder",
    "whatsapp": "989132247700",
    "telegram": "dr_esmaeili_shoulder",
    "website": "https://dresmaeili.vebclinic.ir",
    "specialtiesList": [
      "جراحی آرتروسکوپی ترمیم پارگی تاندون شانه (Rotator Cuff Tear)",
      "جراحی دررفتگی مکرر شانه به روش بنکارت آرتروسکوپیک و لاتارژه",
      "تعویض مفصل شانه (پروتز معکوس ریورس) در پارگی‌های غیرقابل ترمیم تاندون",
      "درمان خشکی و شانه منجمد (Frozen Shoulder) با هیدرودیلیتیشن و رهایش بسته"
    ],
    "hospitals": ["بیمارستان الزهرا (س) اصفهان", "بیمارستان سینا اصفهان", "بیمارستان سعدی"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "mellat"],
    "consultationFee": 330000,
    "nextAvailableSlot": "سه‌شنبه - ساعت ۱۷:۴۵",
    "phone": "031-37774020",
    "biography": "دکتر جواد اسماعیلی جراح فوق تخصص شانه و آرنج با سال‌ها آموزش در مراکز پیشرو جراحی شانه در لیون فرانسه، مرجع اصلی درمان پارگی‌های شدید تاندون شانه و جراحی‌های تعویض شانه در مرکز ایران.",
    "memberships": [
      "عضو انجمن جراحان شانه و آرنج اروپا (SECEC)",
      "عضو انجمن جراحان ارتوپدی ایران"
    ],
    "clinicAmenities": ["امکان معاینه تخصصی تست‌های قدرت عضلات شانه", "فضای مدرن و خلوت", "سیستم ثبت دیجیتال پرونده MRI"],
    "services": ["آرتروسکوپی شانه", "تزریق کورتیزون و پی‌آرپی تحت سونو شانه", "درمان شانه منجمد", "تعویض مفصل شانه"],
    "availableDays": ["یکشنبه", "سه‌شنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "esm1", "day": "سه‌شنبه", "date": "فردا", "time": "۱۷:۴۵", "period": "عصر"},
      {"id": "esm2", "day": "سه‌شنبه", "date": "فردا", "time": "۱۹:۰۰", "period": "عصر"},
      {"id": "esm3", "day": "چهارشنبه", "date": "پس‌فردا", "time": "۱۶:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-esm1",
        "patientName": "اکبر طاهری",
        "date": "۲ هفته پیش",
        "rating": 5,
        "treatment": "ترمیم آرتروسکوپی تاندون شانه راست",
        "comment": "دستم بالا نمی‌آمد و شب‌ها از درد خواب نداشتم. دکتر اسماعیلی با عمل بسته شانه مشکلم رو حل کردند و الان دستم دامنه کامل حرکتی داره.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-soleimani",
    "name": "دکتر پیمان سلیمانی",
    "avatarText": "د.س",
    "avatarImage": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب تخصصی پزشکی ورزشی و ارتوپدی"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "دستگاه سونوگرافی عضلانی اسکلتی دقیق"},
      {"url": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "title": "اتاق تزریقات بیولوژیک سلول‌های بنیادی و پی‌آرپی"}
    ],
    "medicalCode": "۴۶۱۱۵",
    "title": "متخصص جراحی ارتوپدی و آسیب‌های ورزشی",
    "subSpecialty": "متخصص ارتوپدی، پزشکی ورزشی، تزریقات بیولوژیک غضروف، PRP و سلول‌درمانی آرتروز",
    "specialtyTag": "knee",
    "experienceYears": 13,
    "rating": 4.87,
    "reviewCount": 115,
    "satisfactionRate": 96,
    "academicRank": "پزشک تیم‌های ملی و باشگاهی، متخصص ارتوپدی و طب ورزش",
    "workingHours": "روزهای شنبه، دوشنبه، سه‌شنبه از ساعت ۱۶:۳۰ الی ۲۱:۰۰",
    "address": "اصفهان، خیابان طیب، روبروی ارگ جهان‌نما، مجتمع قائم، طبقه اول",
    "district": "خیابان طیب",
    "city": "اصفهان",
    "clinicBuilding": "مجتمع قائم",
    "floorAndUnit": "طبقه اول، واحد ۱۰۸",
    "coordinates": {"lat": 32.6585, "lng": 51.6680},
    "instagram": "dr.peyman_soleimani_sports",
    "whatsapp": "989135003344",
    "telegram": "dr_soleimani_sports",
    "website": "https://drsoleimani.vebclinic.ir",
    "specialtiesList": [
      "تزریق سلول‌های بنیادی خون‌ساز و ژل غضروف‌ساز تحت گاید سونوگرافی",
      "درمان غیرتهاجمی کشیدگی‌های رباط و پارگی‌های ناقص تاندون",
      "آرتروسکوپی زانو و شستشوی مفصلی",
      "چکاپ اسکلتی عضلانی ورزشکاران و پیشگیری از آسیب‌های لیگامانی"
    ],
    "hospitals": ["بیمارستان سینا اصفهان", "بیمارستان آیت‌الله کاشانی"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "kowsar"],
    "consultationFee": 310000,
    "nextAvailableSlot": "امروز - ساعت ۱۷:۰۰",
    "phone": "031-32360090",
    "biography": "دکتر پیمان سلیمانی متخصص ارتوپدی با تمرکز بر پزشکی ورزشی و درمان‌های نوین بازساختی (Regenerative Medicine)، پیشگام در تزریقات فوق‌تخصصی داخل مفصلی بدون درد و با حداکثر اثربخشی.",
    "memberships": [
      "عضو فدراسیون پزشکی ورزشی ایران",
      "عضو انجمن جهانی طب ورزش (FIMS)"
    ],
    "clinicAmenities": ["مجهز به سانتریفیوژ پیشرفته پی‌آرپی دو مرحله‌ای", "سونوگرافی داخل اتاق ویزیت", "موقعیت عالی نزدیک ایستگاه مترو امام حسین"],
    "services": ["تزریق PRP غنی‌شده", "تزریق ژل هیالورونات آمریکایی", "سونوگرافی عضلات و مفاصل", "مشاوره توانبخشی ورزشی"],
    "availableDays": ["شنبه", "دوشنبه", "سه‌شنبه"],
    "availableSlots": [
      {"id": "sol1", "day": "امروز", "date": "امروز", "time": "۱۷:۰۰", "period": "عصر"},
      {"id": "sol2", "day": "امروز", "date": "امروز", "time": "۱۸:۳۰", "period": "عصر"},
      {"id": "sol3", "day": "فردا (سه‌شنبه)", "date": "فردا", "time": "۱۶:۳۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-sol1",
        "patientName": "کامران شریفی",
        "date": "۵ روز پیش",
        "rating": 5,
        "treatment": "تزریق پی‌آرپی زانو با گاید سونوگرافی",
        "comment": "به خاطر ساییدگی زانو پله نمی‌تونستم بالا برم. دکتر سلیمانی با سونوگرافی دقیق در دو جلسه پی‌آرپی تزریق کردند و دردم حداقل ۷۰ درصد کاهش پیدا کرد.",
        "recommended": True
      }
    ]
  },
  {
    "id": "dr-kazemi",
    "name": "دکتر نیلوفر کاظمی",
    "avatarText": "د.ک",
    "avatarImage": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=400&h=400&q=80",
    "clinicCoverImage": "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    "clinicPhotos": [
      {"url": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", "title": "مطب فوق تخصصی ارتوپدی اطفال و انحراف ستون فقرات"},
      {"url": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", "title": "فضای بازی و آرامش کودکان"},
      {"url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", "title": "تجهیزات ارزیابی اسکولیوز با اسکن نوری"}
    ],
    "medicalCode": "۵۶۸۴۰",
    "title": "فوق تخصص ارتوپدی اطفال و نوجوانان",
    "subSpecialty": "فوق تخصص ارتوپدی اطفال، کوتاهی اندام، انحرافات مادرزادی ستون فقرات و صفحات رشد",
    "specialtyTag": "pediatric",
    "experienceYears": 14,
    "rating": 4.93,
    "reviewCount": 145,
    "satisfactionRate": 99,
    "academicRank": "استادیار دانشگاه، فلوشیپ فوق تخصصی ارتوپدی اطفال از دانشگاه تورنتو کانادا",
    "workingHours": "روزهای زوج از ساعت ۱۵:۰۰ الی ۱۹:۳۰",
    "address": "اصفهان، خیابان محتشم کاشانی، روبروی کوچه بیستم، ساختمان پردیس، طبقه سوم",
    "district": "خیابان محتشم کاشانی",
    "city": "اصفهان",
    "clinicBuilding": "ساختمان پردیس",
    "floorAndUnit": "طبقه سوم، واحد ۳۰۳",
    "coordinates": {"lat": 32.6325, "lng": 51.6575},
    "instagram": "dr.niloufar_kazemi_pediatric",
    "whatsapp": "989134027788",
    "telegram": "dr_kazemi_kids",
    "website": "https://drkazemi.vebclinic.ir",
    "specialtiesList": [
      "درمان و اصلاح کوتاهی اندام در کودکان با فیکساتورهای الیزاروف و میله‌های تلسکوپی",
      "تشخیص و درمان اسکولیوز زودرس اطفال و نوجوانان با بریس‌های مدرن سه‌بعدی (Cheneau)",
      "درمان نرمی غضروف و دررفتگی مادرزادی کشکک زانو در دختران نوجوان",
      "جراحی شکستگی‌های خاص صفحات رشد استخوان (Salter-Harris)"
    ],
    "hospitals": ["بیمارستان تخصصی کودکان امام حسین (ع) اصفهان", "بیمارستان الزهرا (س)"],
    "acceptedInsurances": ["tamin", "salamat", "mosallah", "dana", "iran", "alborz", "asia", "samaman"],
    "consultationFee": 325000,
    "nextAvailableSlot": "دوشنبه - ساعت ۱۵:۳۰",
    "phone": "031-36269910",
    "biography": "دکتر نیلوفر کاظمی فوق تخصص ارتوپدی کودکان با فلوشیپ از کانادا، متبحر در درمان بدشکلی‌های مادرزادی استخوان و مفاصل در کودکان و ارائه راهکارهای نوین بریس بدون نیاز به جراحی‌های زودهنگام.",
    "memberships": [
      "عضو آکادمی ارتوپدی اطفال آمریکای شمالی (POSNA)",
      "عضو انجمن جراحان ارتوپدی کودکان ایران"
    ],
    "clinicAmenities": ["اتاق معاینه دوستدار کودک مجهز به اسباب‌بازی‌های ضدحساسیت", "امکان طراحی بریس با اسکن نوری بدون اشعه", "آسانسور"],
    "services": ["غربالگری اسکولیوز و سنجش انحراف ستون فقرات", "سونوگرافی مفصل ران نوزادان", "اصلاح پای پرانتزی و ضربدری اطفال", "مشاوره کوتاهی قد و اندام"],
    "availableDays": ["شنبه", "دوشنبه", "چهارشنبه"],
    "availableSlots": [
      {"id": "kaz1", "day": "فردا (دوشنبه)", "date": "دوشنبه", "time": "۱۵:۳۰", "period": "عصر"},
      {"id": "kaz2", "day": "فردا (دوشنبه)", "date": "دوشنبه", "time": "۱۷:۰۰", "period": "عصر"},
      {"id": "kaz3", "day": "چهارشنبه", "date": "چهارشنبه", "time": "۱۶:۰۰", "period": "عصر"}
    ],
    "reviews": [
      {
        "id": "rev-kaz1",
        "patientName": "الهام نصیری (مادر رادین)",
        "date": "۱ هفته پیش",
        "rating": 5,
        "treatment": "درمان انحراف ستون فقرات (اسکولیوز) نوجوان",
        "comment": "دخترم انحراف ستون فقرات ۳۰ درجه داشت. خانم دکتر کاظمی با بریس اختصاصی و حرکات اصلاحی زاویه رو به ۱۲ درجه رسوندن بدون جراحی. همیشه دعاگوشون هستیم.",
        "recommended": True
      }
    ]
  }
]

with open('src/data/doctorsData.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Replace any repeated avatars in the original 12 doctors so every single one has an entirely distinct portrait:
# dr-seddighin: replace photo-1537368910025-700350fe46c7 with distinct doctor portrait
# dr-salimi: replace photo-1559839734-2b71ea197ec2 with distinct doctor portrait
# dr-rafiei: replace photo-1582750433449-648ed127bb54 with distinct doctor portrait

# dr-seddighin
orig = orig.replace(
    "id: 'dr-seddighin',\n    name: 'دکتر احمد صدیقین',\n    avatarText: 'د.ص',\n    avatarImage: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=400&q=80'",
    "id: 'dr-seddighin',\n    name: 'دکتر احمد صدیقین',\n    avatarText: 'د.ص',\n    avatarImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80'"
)

# dr-salimi
orig = orig.replace(
    "id: 'dr-salimi',\n    name: 'دکتر مریم سلیمی',\n    avatarText: 'د.س',\n    avatarImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80'",
    "id: 'dr-salimi',\n    name: 'دکتر مریم سلیمی',\n    avatarText: 'د.س',\n    avatarImage: 'https://images.unsplash.com/photo-1594824813524-118c72834b6e?auto=format&fit=crop&w=400&h=400&q=80'"
)

# dr-rafiei
orig = orig.replace(
    "id: 'dr-rafiei',\n    name: 'دکتر کامران رفیعی',\n    avatarText: 'د.ر',\n    avatarImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400&q=80'",
    "id: 'dr-rafiei',\n    name: 'دکتر کامران رفیعی',\n    avatarText: 'د.ر',\n    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80'"
)

# Find the last '];'
pos = orig.rfind('];')
if pos == -1:
    raise Exception("Could not find closing ]; in doctorsData.ts")

# Convert new_doctors to TS code
import re

ts_entries = []
for doc in new_doctors:
    json_str = json.dumps(doc, ensure_ascii=False, indent=2)
    # Convert double-quoted keys to standard TS
    # keys: "key": -> key:
    formatted = re.sub(r'\"([a-zA-Z0-9_]+)\":', r'\1:', json_str)
    # indent by 2 spaces
    lines = ['  ' + l for l in formatted.split('\n')]
    ts_entries.append('\n'.join(lines))

new_ts_code = ',\n' + ',\n'.join(ts_entries) + '\n];\n'
updated = orig[:pos] + new_ts_code

with open('src/data/doctorsData.ts', 'w', encoding='utf-8') as f:
    f.write(updated)

print(f"Successfully updated doctorsData.ts with {len(new_doctors)} additional doctors!")

