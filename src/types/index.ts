export type InsuranceType = 'primary' | 'supplementary';

export interface InsuranceItem {
  id: string;
  name: string;
  nameEn?: string;
  categoryLabel?: string;
  code: string;
  type: InsuranceType;
  logoText: string;
  badgeColor: string;
  coveragePercentage: {
    hospitalization: number;
    surgery: number;
    outpatient: number;
    physiotherapy: number;
    mri: number;
  };
  onlinePreAuth: boolean; // صدور آنلاین معرفی‌نامه
  portalName: string; // سامانه ساتا، رساد، سیناد و...
  description: string;
  patientCoPay: string;
  supportPhone: string;
  isfahanBranch: string;
  requiredDocuments: string[];
  contractedCentersCount: number;
  popularServices: string[];
}

export interface MedicalService {
  id: string;
  name: string;
  category: 'surgery' | 'outpatient' | 'imaging' | 'rehab';
  baseTariff: number; // تومان
  description: string;
  estimatedHospitalStay: string;
  recoveryPeriod: string;
}

export interface DoctorReview {
  id: string;
  patientName: string;
  date: string;
  rating: number;
  treatment: string;
  hospital?: string;
  comment: string;
  recommended: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  avatarText: string;
  avatarImage?: string;
  medicalCode: string;
  title: string; // متخصص جراحی استخوان و مفاصل
  subSpecialty: string; // فوق تخصص تعویض مفصل زانو و لگن
  specialtyTag: 'knee' | 'hip' | 'spine' | 'shoulder' | 'pediatric' | 'rehab';
  experienceYears: number;
  rating: number;
  reviewCount: number;
  address: string;
  district: string; // آمادگاه، شمس‌آبادی، طیب، وحید، بزرگمهر
  city: string;
  hospitals: string[];
  acceptedInsurances: string[]; // insurance IDs
  consultationFee: number; // تومان
  nextAvailableSlot: string; // فردا ساعت ۱۷:۰۰
  phone: string;
  biography: string;
  services: string[];
  availableDays: string[];
  academicRank?: string;
  satisfactionRate?: number;
  workingHours?: string;
  memberships?: string[];
  clinicAmenities?: string[];
  availableSlots?: { id: string; day: string; date: string; time: string; period: 'صبح' | 'عصر' }[];
  reviews?: DoctorReview[];
  instagram?: string;
  whatsapp?: string;
  telegram?: string;
  website?: string;
  clinicBuilding?: string;
  floorAndUnit?: string;
  coordinates?: { lat: number; lng: number };
  specialtiesList?: string[];
  clinicCoverImage?: string;
  clinicPhotos?: { url: string; title: string }[];
}

export interface HospitalCenter {
  id: string;
  name: string;
  type: 'public_hospital' | 'private_hospital' | 'specialized_clinic' | 'imaging_center';
  address: string;
  district: string;
  phone: string;
  emergency: boolean;
  acceptedInsurances: string[];
  orthopedicBeds: number;
  surgeriesSupported: string[];
  rating: number;
  openingHours: string;
  description: string;
  image?: string;
  gallery?: string[];
}

export interface ArticleComment {
  id: string;
  author: string;
  date: string;
  text: string;
  doctorReply?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarText: string;
  };
  publishedAt: string;
  readTime: string;
  audioDuration: string;
  summary: string;
  sections: {
    title: string;
    content: string[];
  }[];
  keyTakeaways: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  comments: ArticleComment[];
}

export interface AppointmentRecord {
  trackingCode: string;
  doctorName: string;
  doctorSpecialty: string;
  clinicAddress: string;
  patientName: string;
  nationalId: string;
  phone: string;
  date: string;
  timeSlot: string;
  serviceType: string;
  primaryInsurance: string;
  supplementaryInsurance: string;
  estimatedFee: number;
  patientPayable: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface PreAuthVoucher {
  id: string;
  issueNumber: string;
  nationalId: string;
  patientName: string;
  fatherName: string;
  insuranceName: string;
  policyNumber: string;
  hospitalName: string;
  doctorName: string;
  diagnosis: string;
  procedureName: string;
  tariffTotal: number;
  approvedInsuranceShare: number;
  patientPayable: number;
  validUntil: string;
  status: 'approved' | 'in_progress';
  createdAt: string;
  approvalBarcode: string;
}

export interface ImplantItem {
  id: string;
  brand: string;
  manufacturer: string;
  country: string;
  category: 'knee' | 'hip' | 'spine' | 'shoulder';
  material: string; // سرامیک دلتا، کوبالت کروم، پلی‌اتیلن کراس‌لینک
  expectedLifespan: string; // ۲۵ الی ۳۰ سال
  estimatedPrice: number; // تومان
  insuranceCoverageAmount: number; // حداکثر تعهد بیمه تکمیلی
  ttacRegistered: boolean; // ثبت در سامانه تی‌تک
  ircCode: string;
  keyFeatures: string[];
  description: string;
  image?: string;
}

export interface RehabExercise {
  id: string;
  name: string;
  phase: 'phase1' | 'phase2' | 'phase3';
  phaseTitle: string; // هفته ۱ تا ۲: کنترل تورم و انقباض عضلانی
  frequency: string; // ۳ بار در روز، هر بار ۱۰ تکرار
  description: string;
  caution: string;
  difficulty: 'easy' | 'moderate' | 'advanced';
  image?: string;
}

export interface TeleradiologyCase {
  id: string;
  title: string;
  patientAge: string;
  scanType: 'MRI ۱.۵ تسلا' | 'گرافی رادیولوژی دیجیتال' | 'سی‌تی‌اسکن سه بعدی';
  bodyPart: string;
  symptoms: string;
  radiologyReport: string[];
  orthopedicImpression: string;
  recommendedTreatment: string;
  sampleImageUrl: string;
}

export interface DistrictTransitGuide {
  id: string;
  name: string;
  landmarks: string;
  nearestMetro: string;
  busLines: string;
  parkingStatus: string;
  trafficRestriction: string; // داخل محدوده زوج و فرد اصفهان
  orthopedicHospitals: string[];
  pharmacies: string[];
  mriCenters: string[];
  image?: string;
}

export interface ImagingCenter {
  id: string;
  name: string;
  type: 'mri_center' | 'radiology_clinic' | 'comprehensive_imaging';
  teslaPower?: string;
  isOpenMri: boolean; // ام‌آر‌آی روباز برای افراد دارای کلاستروفوبیا
  address: string;
  district: string;
  phone: string;
  operatingHours: string;
  acceptedInsurances: string[];
  features: string[];
  rating: number;
  image?: string;
  gallery?: string[];
}

export interface SurgeryCostConfig {
  id: string;
  name: string;
  nameEn: string;
  category: 'knee' | 'hip' | 'spine' | 'shoulder' | 'trauma';
  averageHospitalStayDays: number;
  basePrivateTariff: number;
  basePublicTariff: number;
  defaultImplantCost: number;
  taminBaseShare: number;
  salamatBaseShare: number;
  mosallahBaseShare: number;
  description: string;
  image?: string;
}

export type UserRole = 'patient' | 'doctor' | 'admin';

export interface PatientUser {
  id: string;
  name: string;
  phone: string;
  nationalId: string;
  insuranceType: string;
  supplementaryInsurance: string;
  policyNumber: string;
  role: 'patient';
  createdAt: string;
  savedDoctorIds: string[];
}

export interface DoctorUser {
  id: string;
  doctorId: string; // matches Doctor.id in DOCTORS_DATA
  name: string;
  medicalCode: string;
  phone: string;
  specialty: string;
  role: 'doctor';
  consultationFee: number;
  availableDays: string[];
  status: 'active' | 'pending';
}

export interface AdminUser {
  id: string;
  name: string;
  username: string;
  role: 'admin';
  lastLogin: string;
}

export type AuthUser = PatientUser | DoctorUser | AdminUser;

