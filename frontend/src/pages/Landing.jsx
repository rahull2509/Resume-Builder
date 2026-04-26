import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layout, FileText, Download, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <header className="sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-[#DCD7CE]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2"><span className="font-serif-display text-xl">Pressroom</span></Link>
          <Link to="/builder" className="btn-primary">Start Building <ArrowRight size={16} /></Link>
        </div>
      </header>
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="overline mb-5">A bespoke résumé press · est. 2026</div>
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter">A résumé worth <em className="text-[#E06D53] not-italic">printing.</em></h1>
          <p className="mt-6 text-[17px] text-[#5C5A56] max-w-xl">Write once, switch between three handcrafted templates, and export a PDF that looks like it came off a real press.</p>
          <div className="mt-8 flex gap-3"><Link to="/builder" className="btn-primary">Build my résumé <ArrowRight size={16} /></Link><Link to="/dashboard" className="btn-secondary">View my résumés</Link></div>
        </div>
        <div className="lg:col-span-5 flex items-center justify-center"><img src="/hero.png" alt="Resume Preview" className="w-full h-auto object-cover rounded-xl shadow-2xl" /></div>
      </section>
      <footer className="border-t border-[#DCD7CE] py-8 text-center text-sm text-[#5C5A56]">Pressroom · A typographer's résumé builder.</footer>
    </div>
  );
}
