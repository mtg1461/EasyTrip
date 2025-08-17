"use client";

export default function TrustEvidenceSection() {
  return (
    <section className="px-6 py-12 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <div className="flex-shrink-0 w-full lg:w-96">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/TrustEvidenceImage.png"
                alt="Families and support professionals collaborating"
                className="w-full h-full object-cover aspect-[5/4]"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Built with families and support professionals
            </h3>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In early pilots, families reported fewer abandoned routes, fewer
              panic moments, and fewer unnecessary help alerts.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
                Early Pilot
              </span>
              <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
                U.S. Metros First
              </span>
              <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
                Caregiver-Led Feedback
              </span>
              <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
                Medicaid Pilot Pathway (in progress)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
