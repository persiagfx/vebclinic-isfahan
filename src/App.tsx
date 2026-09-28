/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroHome } from './components/HeroHome';
import { InsurancesSection } from './components/InsurancesSection';
import { BlogSection } from './components/BlogSection';
import { DoctorDirectory } from './components/DoctorDirectory';
import { DoctorProfile } from './components/DoctorProfile';
import { PatientProfile } from './components/PatientProfile';
import { DoctorDashboard } from './components/DoctorDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { HospitalsSection } from './components/HospitalsSection';
import { SymptomChecker } from './components/SymptomChecker';
import { ImplantsExplorer } from './components/ImplantsExplorer';
import { RehabProtocols } from './components/RehabProtocols';
import { DistrictsTransitGuide } from './components/DistrictsTransitGuide';
import { SurgeryCostEstimator } from './components/SurgeryCostEstimator';
import { ImagingCentersSection } from './components/ImagingCentersSection';
import { OrthopedicEmergencyGuide } from './components/OrthopedicEmergencyGuide';
import { TeleradiologyModal } from './components/TeleradiologyModal';
import { BookingModal } from './components/BookingModal';
import { AppointmentTrackerModal } from './components/AppointmentTrackerModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { 
  Doctor, 
  AuthUser, 
  UserRole, 
  PatientUser, 
  DoctorUser, 
  AdminUser, 
  AppointmentRecord, 
  PreAuthVoucher 
} from './types';
import { 
  DEMO_PATIENT, 
  DEMO_DOCTOR, 
  DEMO_ADMIN, 
  DEFAULT_APPOINTMENTS, 
  DEFAULT_VOUCHERS 
} from './data/authData';
import { DOCTORS_DATA } from './data/doctorsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Current logged in user (persisted in localStorage, defaults to DEMO_PATIENT for rich demonstration)
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('vebclinic_current_user');
      return saved ? JSON.parse(saved) : DEMO_PATIENT;
    } catch {
      return DEMO_PATIENT;
    }
  });

  // Global appointments & insurance vouchers state (persisted in localStorage)
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(() => {
    try {
      const saved = localStorage.getItem('vebclinic_appointments');
      return saved ? JSON.parse(saved) : DEFAULT_APPOINTMENTS;
    } catch {
      return DEFAULT_APPOINTMENTS;
    }
  });

  const [vouchers, setVouchers] = useState<PreAuthVoucher[]>(() => {
    try {
      const saved = localStorage.getItem('vebclinic_vouchers');
      return saved ? JSON.parse(saved) : DEFAULT_VOUCHERS;
    } catch {
      return DEFAULT_VOUCHERS;
    }
  });

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authInitialRole, setAuthInitialRole] = useState<UserRole>('patient');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isTeleradiologyOpen, setIsTeleradiologyOpen] = useState(false);
  
  // Doctor booking & profile selection
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<Doctor | null>(null);
  const [bookingInitialSlot, setBookingInitialSlot] = useState<string | undefined>(undefined);
  const [selectedDoctorForProfile, setSelectedDoctorForProfile] = useState<Doctor | null>(null);
  const [insuranceFilterForDoctors, setInsuranceFilterForDoctors] = useState<string | null>(null);

  // Authentication handlers
  const handleOpenAuth = (role: UserRole = 'patient') => {
    setAuthInitialRole(role);
    setIsAuthOpen(true);
  };

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('vebclinic_current_user', JSON.stringify(user));
    } catch (e) {
      // storage unavailable
    }
    setIsAuthOpen(false);

    // Auto-navigate to user's dedicated space
    if (user.role === 'patient') {
      setActiveTab('patient-profile');
    } else if (user.role === 'doctor') {
      setActiveTab('doctor-dashboard');
    } else if (user.role === 'admin') {
      setActiveTab('admin-dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('vebclinic_current_user');
    } catch (e) {
      // storage unavailable
    }
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickSwitchRole = (role: UserRole) => {
    if (role === 'patient') {
      setCurrentUser(DEMO_PATIENT);
      try {
        localStorage.setItem('vebclinic_current_user', JSON.stringify(DEMO_PATIENT));
      } catch (e) {}
      setActiveTab('patient-profile');
    } else if (role === 'doctor') {
      setCurrentUser(DEMO_DOCTOR);
      try {
        localStorage.setItem('vebclinic_current_user', JSON.stringify(DEMO_DOCTOR));
      } catch (e) {}
      setActiveTab('doctor-dashboard');
    } else if (role === 'admin') {
      setCurrentUser(DEMO_ADMIN);
      try {
        localStorage.setItem('vebclinic_current_user', JSON.stringify(DEMO_ADMIN));
      } catch (e) {}
      setActiveTab('admin-dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProfile = () => {
    if (!currentUser) {
      handleOpenAuth('patient');
      return;
    }
    if (currentUser.role === 'patient') {
      setActiveTab('patient-profile');
    } else if (currentUser.role === 'doctor') {
      setActiveTab('doctor-dashboard');
    } else if (currentUser.role === 'admin') {
      setActiveTab('admin-dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Appointment & Voucher handlers
  const handleAppointmentBooked = (newAppointment: AppointmentRecord) => {
    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    try {
      localStorage.setItem('vebclinic_appointments', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleUpdateAppointments = (updated: AppointmentRecord[]) => {
    setAppointments(updated);
    try {
      localStorage.setItem('vebclinic_appointments', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleCancelAppointment = (trackingCode: string) => {
    const updated = appointments.map((a) =>
      a.trackingCode === trackingCode ? { ...a, status: 'cancelled' as const } : a
    );
    setAppointments(updated);
    try {
      localStorage.setItem('vebclinic_appointments', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleUpdateUser = (updatedUser: PatientUser) => {
    setCurrentUser(updatedUser);
    try {
      localStorage.setItem('vebclinic_current_user', JSON.stringify(updatedUser));
    } catch (e) {}
  };

  // Booking modal triggers
  const handleOpenBookingWithDoctor = (doctor: Doctor, preselectedSlot?: string) => {
    setSelectedDoctorForBooking(doctor);
    setBookingInitialSlot(preselectedSlot);
    setIsBookingOpen(true);
  };

  const handleOpenBookingGeneral = () => {
    setSelectedDoctorForBooking(null);
    setBookingInitialSlot(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectDoctorForProfile = (doctor: Doctor) => {
    setSelectedDoctorForProfile(doctor);
    setActiveTab('doctor-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectInsuranceForDoctor = (insuranceId: string) => {
    setInsuranceFilterForDoctors(insuranceId);
    setActiveTab('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased font-['Vazirmatn',sans-serif]">
      {/* 3-Zone Clean Header with User Authentication & Role Switching */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={handleOpenBookingGeneral}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenTeleradiology={() => setIsTeleradiologyOpen(true)}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onOpenProfile={handleOpenProfile}
        onLogout={handleLogout}
        onQuickSwitchRole={handleQuickSwitchRole}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* 1. Home Landing Page */}
        {activeTab === 'home' && (
          <HeroHome
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookDoctor={handleOpenBookingWithDoctor}
            onOpenBooking={handleOpenBookingGeneral}
            onSelectDoctor={handleSelectDoctorForProfile}
          />
        )}

        {/* 2. Public Doctor Profile (Dedicated Page) */}
        {activeTab === 'doctor-profile' && (
          <DoctorProfile
            doctor={selectedDoctorForProfile || DOCTORS_DATA[0]}
            onBack={() => {
              setActiveTab('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookDoctor={(doc, slot) => handleOpenBookingWithDoctor(doc, slot)}
            onSelectDoctor={handleSelectDoctorForProfile}
            onOpenInsurances={() => {
              setActiveTab('insurances');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 3. Patient / User Profile */}
        {activeTab === 'patient-profile' && (
          <PatientProfile
            user={
              currentUser && currentUser.role === 'patient'
                ? currentUser
                : DEMO_PATIENT
            }
            appointments={appointments}
            vouchers={vouchers}
            onCancelAppointment={handleCancelAppointment}
            onOpenBooking={handleOpenBookingGeneral}
            onSelectDoctor={handleSelectDoctorForProfile}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            onBack={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 4. Doctor Dashboard & Clinic Portal */}
        {activeTab === 'doctor-dashboard' && (
          <DoctorDashboard
            user={
              currentUser && currentUser.role === 'doctor'
                ? currentUser
                : DEMO_DOCTOR
            }
            appointments={appointments}
            onUpdateAppointments={handleUpdateAppointments}
            onLogout={handleLogout}
            onViewPublicProfile={(doctor) => {
              setSelectedDoctorForProfile(doctor);
              setActiveTab('doctor-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 5. System Administrator Dashboard */}
        {activeTab === 'admin-dashboard' && (
          <AdminDashboard
            user={
              currentUser && currentUser.role === 'admin'
                ? currentUser
                : DEMO_ADMIN
            }
            appointments={appointments}
            vouchers={vouchers}
            onUpdateAppointments={handleUpdateAppointments}
            onLogout={handleLogout}
            onSelectDoctorProfile={(doctor) => {
              setSelectedDoctorForProfile(doctor);
              setActiveTab('doctor-profile');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 6. Insurances Section */}
        {activeTab === 'insurances' && (
          <InsurancesSection
            onSelectInsuranceForDoctor={handleSelectInsuranceForDoctor}
            onOpenBooking={handleOpenBookingGeneral}
          />
        )}

        {/* 7. Blog & Knowledge Base */}
        {activeTab === 'blog' && (
          <BlogSection
            onBookDoctor={handleOpenBookingWithDoctor}
            onSelectDoctor={handleSelectDoctorForProfile}
            onOpenInsurances={() => {
              setActiveTab('insurances');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 8. IRC Implants Explorer */}
        {activeTab === 'implants' && (
          <div className="py-6">
            <ImplantsExplorer />
          </div>
        )}

        {/* 9. Rehabilitation & Home Exercises */}
        {activeTab === 'rehab' && (
          <div className="py-6">
            <RehabProtocols />
          </div>
        )}

        {/* 10. Doctors Directory */}
        {activeTab === 'doctors' && (
          <DoctorDirectory
            onBookDoctor={handleOpenBookingWithDoctor}
            onSelectDoctor={handleSelectDoctorForProfile}
            filterByInsuranceId={insuranceFilterForDoctors}
          />
        )}

        {/* 11. Hospitals Section */}
        {activeTab === 'hospitals' && (
          <HospitalsSection
            onSelectHospitalForBooking={(hospitalName) => {
              handleOpenBookingGeneral();
            }}
            onOpenInsurances={() => {
              setActiveTab('insurances');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 12. Transit Guide & Medical Centers */}
        {activeTab === 'transit' && (
          <div className="py-6 space-y-8">
            <DistrictsTransitGuide />
            <HospitalsSection
              onSelectHospitalForBooking={(hospitalName) => {
                handleOpenBookingGeneral();
              }}
              onOpenInsurances={() => {
                setActiveTab('insurances');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* 13. Smart Joint Pain Triage */}
        {activeTab === 'triage' && (
          <SymptomChecker
            onBookDoctor={handleOpenBookingWithDoctor}
            onOpenInsurances={() => {
              setActiveTab('insurances');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 14. Surgery Cost & Tariff Estimator */}
        {activeTab === 'surgery-cost' && (
          <SurgeryCostEstimator
            onOpenBooking={handleOpenBookingGeneral}
            onSelectDoctorTab={() => {
              setActiveTab('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 15. Imaging & MRI Centers */}
        {activeTab === 'imaging' && (
          <ImagingCentersSection
            onOpenTeleradiology={() => setIsTeleradiologyOpen(true)}
            onSelectHospitalTab={() => {
              setActiveTab('transit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* 16. Orthopedic Emergency & Trauma Guide */}
        {activeTab === 'emergency' && (
          <OrthopedicEmergencyGuide
            onOpenBooking={handleOpenBookingGeneral}
            onSelectHospitalsTab={() => {
              setActiveTab('transit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={handleOpenBookingGeneral}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

      {/* Integrated Auth Modal (Patient, Doctor, Admin) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialRole={authInitialRole}
      />

      {/* Interactive Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          initialDoctor={selectedDoctorForBooking}
          initialTimeSlot={bookingInitialSlot}
          onClose={() => setIsBookingOpen(false)}
          onAppointmentBooked={handleAppointmentBooked}
        />
      )}

      {/* Interactive Appointment Tracker Modal */}
      {isTrackerOpen && (
        <AppointmentTrackerModal
          onClose={() => setIsTrackerOpen(false)}
          onBookNew={() => {
            setIsTrackerOpen(false);
            handleOpenBookingGeneral();
          }}
        />
      )}

      {/* Interactive Teleradiology & MRI Review Modal */}
      {isTeleradiologyOpen && (
        <TeleradiologyModal
          onClose={() => setIsTeleradiologyOpen(false)}
          onBookSpecialist={() => {
            setIsTeleradiologyOpen(false);
            handleOpenBookingGeneral();
          }}
        />
      )}
    </div>
  );
}
