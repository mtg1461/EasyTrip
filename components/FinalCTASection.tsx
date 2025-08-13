"use client";

type Props = { onCTA: () => void };

export default function FinalCTASection({ onCTA }: Props) {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready for calmer, safer trips?
        </h2>
        <p className="text-xl text-slate-700 mb-8">
          See exactly how the Safety Demo works and what you'll get.
        </p>

        <button
          onClick={onCTA}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 focus:ring-4 focus:ring-teal-300 focus:outline-none"
          aria-label="See EasyTrip in action"
        >
          See EasyTrip in action
        </button>

        <p className="text-sm text-slate-600 mt-3">
          Takes 2 minutes • Not an emergency service
        </p>
      </div>
    </section>
  );
}
