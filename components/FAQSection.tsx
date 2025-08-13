"use client";

export default function FAQSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Who is EasyTrip for?</h3>
            <p className="text-slate-700">
              Non-speaking autistic adults living semi-independently in U.S.
              metros, plus their caregivers and support professionals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              How does one-tap help work?
            </h3>
            <p className="text-slate-700">
              If the traveler taps help, caregivers receive an instant alert
              with live location and simple next steps.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is EasyTrip accessible?
            </h3>
            <p className="text-slate-700">
              Yes—clear visual schedules, large touch targets, high contrast,
              and optional reduced motion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Do you store personal data?
            </h3>
            <p className="text-slate-700">
              We use industry-standard encryption and only the data needed to
              provide the service. See our Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Will it work in my city?
            </h3>
            <p className="text-slate-700">
              We're focused on U.S. metros first. The demo will show current
              coverage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Is this a medical device or emergency service?
            </h3>
            <p className="text-slate-700">
              No. EasyTrip supports daily independence but is not a substitute
              for 911 or clinical care.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Is Medicaid covered?</h3>
            <p className="text-slate-700">
              A Medicaid reimbursement pilot pathway is in progress. We'll share
              updates inside the demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
