"use client";

export default function SiteFooter() {
  return (
    <footer className="px-6 py-8 bg-slate-900 text-slate-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
