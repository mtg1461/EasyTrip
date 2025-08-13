"use client";

export default function TrustEvidenceSection() {
  return (
    <section className="px-6 py-12 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-lg font-medium text-slate-600 mb-4">
          Built with families and support professionals
        </h3>

        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
          In early pilots, families reported fewer abandoned routes, fewer panic
          moments, and fewer unnecessary help alerts.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
            Early Pilot
          </span>
          <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
            U.S. Metros First
          </span>
          <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
            Caregiver-Led Feedback
          </span>
          <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
            Medicaid Pilot Pathway (in progress)
          </span>
        </div>
      </div>
    </section>
  );
}
