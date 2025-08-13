"use client";

import { Check, MapPin, Shield, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Why families choose EasyTrip
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
            <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg text-slate-700">
              Predictable, step-by-step travel scripts reduce uncertainty and
              panic moments.
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
            <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg text-slate-700">
              Sensory-aware maps highlight quiet zones and avoid crowded
              hotspots.
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
            <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
              <Check className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg text-slate-700">
              Visual schedules build confidence and make routines stick.
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
            <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg text-slate-700">
              One-tap help alerts caregivers instantly with live location.
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
            <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
              <Check className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-lg text-slate-700">
              Less planning and fewer check-ins means more time back each week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
