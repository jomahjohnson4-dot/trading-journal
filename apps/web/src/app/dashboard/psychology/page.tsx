'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Brain, HeartPulse, CheckCircle2, AlertTriangle, ShieldCheck, Smile, Frown, Flame, ShieldAlert } from 'lucide-react';

const EMOTIONAL_STATES = [
  { emotion: 'Disciplined & Calm', count: 28, winRate: '78.5%', impact: 'High Profit' },
  { emotion: 'Anxious / Fearful', count: 8, winRate: '50.0%', impact: 'Early Exits' },
  { emotion: 'FOMO / Impulsive', count: 6, winRate: '33.3%', impact: 'Revenge Losses' },
  { emotion: 'Overconfident', count: 3, winRate: '66.6%', impact: 'Oversized Risk' },
];

const MOCK_JOURNAL_ENTRIES = [
  {
    id: 'psy-1',
    date: '2026-09-03',
    emotion: 'Disciplined & Calm',
    ruleAdherence: '100%',
    rating: 5,
    note: 'Stuck strictly to the Liquidity Sweep checklist. Took target at 1:3 RR without micromanaging.',
    mistake: 'None',
  },
  {
    id: 'psy-2',
    date: '2026-09-02',
    emotion: 'FOMO / Impulsive',
    ruleAdherence: '60%',
    rating: 2,
    note: 'Entered BTC short late after seeing a big red candle on 1m chart. Did not wait for a FVG confirmation.',
    mistake: 'Chasing Price',
  },
];

export default function PsychologyPage() {
  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Psychology & Mindset Tracker</h1>
          <p className="text-xs text-slate-500 font-medium">Monitor emotional discipline, rule adherence, and mental state impact.</p>
        </div>
      </div>

      {/* Psychology KPI Summary Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Rule Discipline Score</span>
          <span className="text-lg font-extrabold text-emerald-600">88.5%</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Calm Executions</span>
          <span className="text-lg font-extrabold text-blue-600">28 Trades</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">FOMO Losses</span>
          <span className="text-lg font-extrabold text-red-600">-$380.00</span>
        </div>
        <div className="pt-2 sm:pt-0 sm:pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Discipline Streak</span>
          <span className="text-lg font-extrabold text-slate-800">5 Days</span>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Mindset Impact Matrix */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Emotional State vs Performance</h2>
          <div className="space-y-3">
            {EMOTIONAL_STATES.map((item, idx) => (
              <div key={idx} className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-800">{item.emotion}</span>
                  <span className="text-xs font-extrabold text-blue-600">{item.winRate} Win</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 font-medium">
                  <span>{item.count} Executions</span>
                  <span className={item.impact.includes('Loss') ? 'text-red-500 font-semibold' : 'text-slate-600'}>
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Psychological Reflections Log */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Recent Mindset Reflection Log</h2>
          <div className="space-y-4">
            {MOCK_JOURNAL_ENTRIES.map((entry) => (
              <div key={entry.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/40">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{entry.date}</span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        entry.emotion.includes('Disciplined')
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {entry.emotion}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Adherence: {entry.ruleAdherence}</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-3">{entry.note}</p>

                <div className="flex items-center gap-2 text-[11px] pt-2 border-t border-slate-200/60">
                  <span className="text-slate-400 font-semibold">Flagged Mistake:</span>
                  <span className="font-bold text-slate-800">{entry.mistake}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}