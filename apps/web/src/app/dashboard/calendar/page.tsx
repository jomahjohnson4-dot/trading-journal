'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

// Mock performance data keyed by YYYY-MM
const MONTHLY_DATA: Record<string, { label: string; stats: Record<string, { pnl: number; trades: number }> }> = {
  '2026-09': {
    label: 'September 2026',
    stats: {
      '2026-09-01': { pnl: 450, trades: 2 },
      '2026-09-02': { pnl: -180, trades: 1 },
      '2026-09-03': { pnl: 820, trades: 3 },
      '2026-09-04': { pnl: 150, trades: 1 },
      '2026-09-07': { pnl: 310, trades: 2 },
      '2026-09-08': { pnl: -220, trades: 2 },
      '2026-09-09': { pnl: 600, trades: 4 },
    },
  },
  '2026-08': {
    label: 'August 2026',
    stats: {
      '2026-08-03': { pnl: 200, trades: 1 },
      '2026-08-12': { pnl: -150, trades: 2 },
      '2026-08-18': { pnl: 540, trades: 3 },
    },
  },
  '2026-10': {
    label: 'October 2026',
    stats: {
      '2026-10-01': { pnl: 300, trades: 1 },
    },
  },
};

const MONTH_KEYS = ['2026-08', '2026-09', '2026-10'];

export default function CalendarPage() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // September 2026
  const currentKey = MONTH_KEYS[currentMonthIndex];
  const currentMonthData = MONTHLY_DATA[currentKey];

  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < MONTH_KEYS.length - 1) setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const paddingDays = [null];

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Trading Calendar</h1>
          <p className="text-xs text-slate-500 font-medium">Daily net return breakdown and execution frequency.</p>
        </div>

        {/* Functional Month Navigation Controls */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 shadow-xs w-fit">
          <button
            onClick={handlePrevMonth}
            disabled={currentMonthIndex === 0}
            className="text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition p-1 cursor-pointer"
            title="Previous Month"
          >
            <ChevronLeft size={18} />
          </button>
          
          <span className="text-xs font-bold text-slate-800 flex items-center gap-2 min-w-[120px] justify-center">
            <CalendarIcon size={14} className="text-blue-600" />
            {currentMonthData.label}
          </span>

          <button
            onClick={handleNextMonth}
            disabled={currentMonthIndex === MONTH_KEYS.length - 1}
            className="text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition p-1 cursor-pointer"
            title="Next Month"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Monthly Performance Summary Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Monthly Net P&L</span>
          <span className="text-lg font-extrabold text-emerald-600">+$1,930.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Traded Days</span>
          <span className="text-lg font-extrabold text-slate-900">7 Days</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Win Rate</span>
          <span className="text-lg font-extrabold text-blue-600">71.4%</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Profit Factor</span>
          <span className="text-lg font-extrabold text-slate-800">2.45</span>
        </div>
      </div>

      {/* Calendar Grid Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {paddingDays.map((_, idx) => (
            <div key={`pad-${idx}`} className="h-24 bg-slate-50/40 rounded-xl border border-dashed border-slate-100" />
          ))}

          {daysInMonth.map((day) => {
            const dateKey = `${currentKey}-${day < 10 ? `0${day}` : day}`;
            const stats = currentMonthData.stats[dateKey];

            return (
              <div
                key={day}
                className={`h-24 p-2 rounded-xl border flex flex-col justify-between transition ${
                  stats
                    ? stats.pnl >= 0
                      ? 'bg-emerald-50/50 border-emerald-200/80'
                      : 'bg-red-50/50 border-red-200/80'
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-700">{day}</span>
                  {stats && (
                    <span className="text-[10px] font-semibold text-slate-400">
                      {stats.trades} {stats.trades === 1 ? 'trade' : 'trades'}
                    </span>
                  )}
                </div>

                {stats ? (
                  <div className="text-right">
                    <span
                      className={`text-xs font-black block ${
                        stats.pnl >= 0 ? 'text-emerald-700' : 'text-red-700'
                      }`}
                    >
                      {stats.pnl >= 0 ? `+$${stats.pnl}` : `-$${Math.abs(stats.pnl)}`}
                    </span>
                  </div>
                ) : (
                  <span className="text-[10px] text-slate-300 self-end">—</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}