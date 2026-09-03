'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { TrendingUp, ArrowUpRight, DollarSign, Calendar, Target, Activity } from 'lucide-react';

// Monthly Equity Curve Data
const EQUITY_DATA = [
  { date: 'Aug 1', balance: 10000 },
  { date: 'Aug 5', balance: 10450 },
  { date: 'Aug 10', balance: 10270 },
  { date: 'Aug 15', balance: 11090 },
  { date: 'Aug 20', balance: 11240 },
  { date: 'Aug 25', balance: 11550 },
  { date: 'Aug 30', balance: 11330 },
  { date: 'Sep 4', balance: 11930 },
];

// Monthly Performance Breakdowns
const MONTHLY_RETURNS = [
  { month: 'September 2026', trades: 14, pnl: '+$1,930.00', returnPct: '+19.3%', status: 'positive' },
  { month: 'August 2026', trades: 28, pnl: '+$1,420.50', returnPct: '+14.2%', status: 'positive' },
  { month: 'July 2026', trades: 22, pnl: '+$890.00', returnPct: '+8.9%', status: 'positive' },
  { month: 'June 2026', trades: 19, pnl: '-$310.00', returnPct: '-3.1%', status: 'negative' },
];

export default function PerformancePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Account Performance</h1>
        <p className="text-xs text-slate-500 font-medium">
          Track cumulative account growth, equity curves, and period-over-period returns.
        </p>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">Current Balance</span>
            <DollarSign size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$11,930.00</div>
          <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <ArrowUpRight size={14} /> +$1,930.00 (+19.3%) overall
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">Peak Balance</span>
            <TrendingUp size={18} className="text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$11,930.00</div>
          <p className="text-xs text-slate-500 font-medium mt-1">All-time high equity achieved today</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">Avg Monthly Return</span>
            <Activity size={18} className="text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">+9.8%</div>
          <p className="text-xs text-slate-500 font-medium mt-1">Based on last 4 calendar months</p>
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">Profit Target</span>
            <Target size={18} className="text-amber-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">77.2%</div>
          <p className="text-xs text-slate-500 font-medium mt-1">$1,930 of $2,500 monthly goal</p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Equity Curve Visualizer */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Equity Growth Curve</h2>
              <p className="text-xs text-slate-400">Account trajectory from initial deposit</p>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
              +$1,930.00 Cumulative
            </span>
          </div>

          {/* Simple SVG Chart */}
          <div className="w-full h-48 my-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
              {/* Gradient Background */}
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,110 Q 70,80 140,90 T 280,30 T 420,40 L 500,10"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0,110 Q 70,80 140,90 T 280,30 T 420,40 L 500,10 L 500,150 L 0,150 Z"
                fill="url(#blueGrad)"
              />
            </svg>
          </div>

          <div className="flex justify-between text-[11px] font-bold text-slate-400 border-t border-slate-100 pt-3">
            {EQUITY_DATA.map((item, idx) => (
              <span key={idx}>{item.date}</span>
            ))}
          </div>
        </div>

        {/* Monthly Breakdown Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Monthly Returns</h2>
            <Calendar size={16} className="text-slate-400" />
          </div>

          <div className="space-y-3">
            {MONTHLY_RETURNS.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{item.month}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{item.trades} Executions</span>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-extrabold block ${item.status === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {item.pnl}
                  </span>
                  <span className={`text-[10px] font-bold ${item.status === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {item.returnPct}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}