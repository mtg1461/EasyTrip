"use client";

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          How EasyTrip works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              n: "1",
              title: "Plan",
              text: "Enter a destination and EasyTrip generates a clear, visual travel script tailored to routine and sensory needs.",
            },
            {
              n: "2",
              title: "Go",
              text: "Follow the sensory-aware map with quiet-zone cues and simple steps that make wayfinding feel predictable.",
            },
            {
              n: "3",
              title: "Stay in sync",
              text: "Caregivers see automatic check-ins and can respond if the one-tap help signal is sent.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-teal-600">
                  {item.n}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
