"use client";

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          What caregivers are saying
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-slate-700 mb-4 italic">
              "For the first time, I wasn't texting every five minutes. Our
              grocery trip was calm."
            </p>
            <p className="text-sm text-slate-600">
              — Maya R., caregiver and pilot participant (Seattle)
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-slate-700 mb-4 italic">
              "I could follow the pictures and knew where the quiet spots were."
            </p>
            <p className="text-sm text-slate-600">
              — J., autistic adult and pilot participant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
