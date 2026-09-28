import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Building2, ShieldAlert, Clock, Phone } from 'lucide-react';
import { ISFAHAN_DISTRICTS } from '../data/districtsData';
import { DistrictTransitGuide } from '../types';

export const DistrictsTransitGuide: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictTransitGuide>(ISFAHAN_DISTRICTS[0]);

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 text-right space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 mb-1">
          <Navigation className="w-4 h-4" />
          <span>راهنمای تردد شهری، مترو و دسترسی به قطب‌های پزشکی ارتوپدی در اصفهان</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          نقشه و راهنمای مراجعین مطب‌ها و بیمارستان‌های اصفهان
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          اطلاعات دقیق پارکینگ‌های طبقاتی، ایستگاه‌های مترو، خطوط بی‌آر‌تی و وضعیت طرح زوج و فرد اصفهان جهت مراجعه بدون دغدغه بیماران محترم و همراهان.
        </p>
      </div>

      {/* District Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
        {ISFAHAN_DISTRICTS.map((d) => {
          const isSelected = selectedDistrict.id === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDistrict(d)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {d.name.split('(')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Selected District Dashboard */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-6">
        
        {/* District Image Banner */}
        {selectedDistrict.image && (
          <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200 group">
            <img
              src={selectedDistrict.image}
              alt={selectedDistrict.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 right-4 text-white space-y-1">
              <span className="text-xs bg-blue-600/90 px-2.5 py-0.5 rounded-full font-bold inline-block">
                محور پزشکی و درمانی اصفهان
              </span>
              <h4 className="text-base sm:text-lg font-black">{selectedDistrict.name}</h4>
            </div>
          </div>
        )}

        {/* District Title & Traffic Alert */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              {selectedDistrict.name}
            </h4>
            <span className="text-xs text-slate-500 mt-0.5 block">
              نشانه‌ها و دسترسی: {selectedDistrict.landmarks}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-xl text-xs font-semibold self-start sm:self-auto">
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            <span>{selectedDistrict.trafficRestriction}</span>
          </div>
        </div>

        {/* 4 Cards Grid for Transit info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          {/* Metro */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <Train className="w-4 h-4 text-blue-600" />
              <span>ایستگاه‌های مترو نزدیک:</span>
            </div>
            <p className="text-slate-600">{selectedDistrict.nearestMetro}</p>
          </div>

          {/* Bus / BRT */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <Navigation className="w-4 h-4 text-sky-600" />
              <span>خطوط اتوبوس و BRT:</span>
            </div>
            <p className="text-slate-600">{selectedDistrict.busLines}</p>
          </div>

          {/* Parking */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <Car className="w-4 h-4 text-blue-600" />
              <span>پارکینگ‌های عمومی:</span>
            </div>
            <p className="text-slate-600">{selectedDistrict.parkingStatus}</p>
          </div>

          {/* Centers */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <Building2 className="w-4 h-4 text-slate-700" />
              <span>مراکز ارتوپدی این محور:</span>
            </div>
            <p className="text-slate-600">{selectedDistrict.orthopedicHospitals.join(' · ')}</p>
          </div>

        </div>

        {/* Nearby Pharmacies & MRI Centers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1 text-slate-800">
            <strong className="block text-blue-950 font-bold">داروخانه‌های شبانه‌روزی نزدیک:</strong>
            <span>{selectedDistrict.pharmacies.join(' · ')}</span>
          </div>
          <div className="p-3.5 bg-sky-50/70 border border-sky-200 rounded-xl space-y-1 text-slate-800">
            <strong className="block text-sky-950 font-bold">مراکز تصویربرداری و ام‌آر‌آی:</strong>
            <span>{selectedDistrict.mriCenters.join(' · ')}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
