'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Target, PlusCircle, CheckCircle2, TrendingUp, Layers, ChevronRight } from 'lucide-react';

const STRATEGIES = [
  {
    id: 'strat-1',
    name: 'Liquidity Sweep',
    description: 'Capitalizes on stop runs beyond key swing highs/lows into higher timeframe order blocks.',
    winRate: 77.8,
    totalTrades: 18,
    avgRR: '1:3.2',
    netPnl: 1850.0,
    rules: [
      'Wait for London/NY session high or low sweep',
      'Confirm market structure shift (MSS) on 5m timeframe',
      'Enter on 50% retracement into Fair Value Gap',
      'Stop Loss placed beyond the sweep high/low',
    ],
  },
  {
    id: 'strat-2',
    name: 'Break & Retest',
    description: 'Trend continuation strategy taking entries on retests of key broken support or resistance levels.',
    winRate: 64.2,
    totalTrades: 14,
    avgRR: '1:2.1',
    netPnl: 820.0,
    rules: [
      'Identify clear higher timeframe trend (1H/4H)',
      'Wait for strong impulse candle break above resistance',
      'Enter on limit order upon first touch of broken level',
      'Target previous swing high',
    ],
  },
  {
    id: 'strat-3',
    name: 'Order Block Touch',
    description: 'Precision entry technique off institutional order blocks during prime trading sessions.',
    winRate: 55.5,
    totalTrades: 9,
    avgRR: '1:2.8',
    netPnl: 210.0,
    rules: [
      'Mark 15m order block causing displacement',
      'Verify killzone session alignment (London or NY open)',
      'Set limit order at 50% body of order block',
    ],
  },
];

export default function StrategiesPage() {
  const [selectedStrategy, setSelectedStrategy] = useState(STRATEGIES[0]);

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Playbook & Strategies</h1>
          <p className="text-xs text-slate-500 font-medium">Define execution rules and evaluate strategy profitability.</p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-xs w-fit cursor-pointer">
          <PlusCircle size={16} /> Add Strategy
        </button>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Strategy List */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1">Your Playbooks</span>
          {STRATEGIES.map((strat) => {
            const isSelected = selectedStrategy.id === strat.id;
            return (
              <div
                key={strat.id}
                onClick={() => setSelectedStrategy(strat)}
                className={`p-4 rounded-2xl border transition cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/50 border-blue-500 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm text-slate-900">{strat.name}</h3>
                  <ChevronRight size={16} className={isSelected ? 'text-blue-600' : 'text-slate-300'} />
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">{strat.description}</p>
                
                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="font-semibold text-slate-600">{strat.totalTrades} Trades</span>
                  <span className="font-extrabold text-blue-600">{strat.winRate}% Win</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Strategy Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2">
                  Active Playbook
                </span>
                <h2 className="text-xl font-bold text-slate-900">{selectedStrategy.name}</h2>
              </div>
              <span className={`text-sm font-extrabold ${selectedStrategy.netPnl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {selectedStrategy.netPnl >= 0 ? `+$${selectedStrategy.netPnl.toFixed(2)}` : `-$${Math.abs(selectedStrategy.netPnl).toFixed(2)}`}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">{selectedStrategy.description}</p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl mb-6 text-center">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Win Rate</span>
                <span className="text-sm font-extrabold text-slate-900">{selectedStrategy.winRate}%</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Avg R:R</span>
                <span className="text-sm font-extrabold text-blue-600">{selectedStrategy.avgRR}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Executions</span>
                <span className="text-sm font-extrabold text-slate-900">{selectedStrategy.totalTrades}</span>
              </div>
            </div>

            {/* Strategy Execution Rules */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-600" /> Standard Operating Checklist
              </h4>
              <ul className="space-y-2">
                {selectedStrategy.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50/60 border border-slate-100 p-2.5 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-extrabold text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium pt-0.5">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}