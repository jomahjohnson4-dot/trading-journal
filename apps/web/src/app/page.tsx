import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      {/* Header Navigation */}
      <header className="max-w-6xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
            TJ
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">TradePro</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            Sign In
          </Link>
          <Link href="/dashboard" className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Launch Terminal
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center flex-1 flex flex-col items-center justify-center">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-6">
          Precision Trading Performance
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Track execution.<br />Master your edge.
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          A minimalist journal engineered for institutional clarity, risk management, and performance analytics.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xs transition text-sm">
            Open Journal Dashboard <ArrowRight size={18} />
          </Link>
          <Link href="/register" className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition text-sm">
            Create Free Account
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left w-full">
          <div className="p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
            <BarChart3 className="text-blue-600 mb-3" size={24} />
            <h3 className="font-bold text-slate-900 text-base mb-1">Execution Analytics</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Instant win rate, profit factor, and equity curve visualizations.</p>
          </div>
          <div className="p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
            <Zap className="text-blue-600 mb-3" size={24} />
            <h3 className="font-bold text-slate-900 text-base mb-1">Rapid Setup Logging</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Record confluences, entry rules, and chart screenshots cleanly.</p>
          </div>
          <div className="p-6 border border-slate-100 bg-slate-50/50 rounded-2xl">
            <ShieldCheck className="text-blue-600 mb-3" size={24} />
            <h3 className="font-bold text-slate-900 text-base mb-1">Psychology Rules</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Evaluate emotional patterns and maintain strict risk discipline.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © 2026 TradePro Journal. All rights reserved.
      </footer>
    </div>
  );
}