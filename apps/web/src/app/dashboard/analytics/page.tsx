'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { Calendar, TrendingUp, Zap, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

const STRATEGY_PERFORMANCE = [
  { name: 'Liquidity Sweep', trades: 18, winRate: 77.8, netPnl: 1850.00 },
  { name: 'Break & Retest', trades: 14, winRate: 64.2, netPnl: 820.00 },
  { name: 'Order Block Touch', trades: 9, winRate: 55.5, netPnl: 210.00 },
  { name: 'Fair Value Gap', trades: 4, winRate: 25.0, netPnl: -400.00 },
];

const DAY_PERFORMANCE = [
  { day: 'Mon', winRate: 50, pnl: '+$120.00' },
  { day: 'Tue', winRate: 75, pnl: '+$1,150.00' },
  { day: 'Wed', winRate: 80, pnl: '+$980.00' },
  { day: 'Thu', winRate: 63, pnl: '+$430.00' },
  { day: 'Fri', winRate: 33, pnl: '-$200.00' },
];

export default function AnalyticsPage() {
  const totalWinRate = 71.2;
  const strokeDashoffset = 283 - (283 * totalWinRate) / 100;

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Edge Insights</h1>
        <p className="text-xs text-slate-500 font-medium">Statistical execution analysis and win-rate distribution.</p>
      </div>

      {/* Top Statistical Summary Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 shadow-xs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        <div className="pt-2 sm:pt-0">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Trades</span>
          <span className="text-lg font-extrabold text-slate-900">45</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Gross Profit</span>
          <span className="text-lg font-extrabold text-emerald-600">+$4,310.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Gross Loss</span>
          <span className="text-lg font-extrabold text-red-600">-$1,830.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Avg Win</span>
          <span className="text-lg font-extrabold text-slate-800">$145.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Avg Loss</span>
          <span className="text-lg font-extrabold text-slate-800">$62.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Profit Factor</span>
          <span className="text-lg font-extrabold text-blue-600">2.35</span>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Left Column: Radial Circular Chart Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between items-center text-center">
          <div className="w-full text-left mb-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Overall Win Rate</h2>
            <p className="text-xs text-slate-400">Ratio of winning executions vs losses</p>
          </div>

          {/* SVG Circular Progress Ring */}
          <div className="relative w-44 h-44 my-4 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                className="text-slate-100 stroke-current"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                className="text-blue-600 stroke-current transition-all duration-1000 ease-out"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 tracking-tight">{totalWinRate}%</span>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full mt-1">
                32W / 13L
              </span>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">Expectancy</span>
              <span className="font-extrabold text-slate-800">+$55.11 / Trade</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">Max Drawdown</span>
              <span className="font-extrabold text-red-600">-4.2%</span>
            </div>
          </div>
        </div>

        {/* Right Column (2 Spans): Strategy & Day Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Strategy Performance Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Strategy Matrix</h2>
              <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">View Details</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider">
                    <th className="pb-2.5 font-semibold">Strategy</th>
                    <th className="pb-2.5 font-semibold text-center">Trades</th>
                    <th className="pb-2.5 font-semibold">Win % Progress</th>
                    <th className="pb-2.5 font-semibold text-right">Net P&L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {STRATEGY_PERFORMANCE.map((strat, i) => (
                    <tr key={i}>
                      <td className="py-3 font-bold text-slate-900">{strat.name}</td>
                      <td className="py-3 text-center font-semibold text-slate-500">{strat.trades}</td>
                      <td className="py-3 w-40">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-blue-600 h-full rounded-full"
                              style={{ width: `${strat.winRate}%` }}
                            />
                          </div>
                          <span className="font-bold text-slate-800 w-9 text-right">{strat.winRate}%</span>
                        </div>
                      </td>
                      <td
                        className={`py-3 text-right font-extrabold ${
                          strat.netPnl >= 0 ? 'text-emerald-600' : 'text-red-600'
                        }`}
                      >
                        {strat.netPnl >= 0 ? `+$${strat.netPnl.toFixed(2)}` : `-$${Math.abs(strat.netPnl).toFixed(2)}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Day of Week Bars */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Day of Week Distribution</h2>
            <div className="grid grid-cols-5 gap-3">
              {DAY_PERFORMANCE.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 text-center">
                  <span className="text-xs font-bold text-slate-500 block mb-1">{item.day}</span>
                  <span className="text-sm font-extrabold text-slate-900 block">{item.winRate}%</span>
                  <span
                    className={`text-[10px] font-bold block mt-1 ${
                      item.pnl.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {item.pnl}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}