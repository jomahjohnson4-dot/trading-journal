'use client';

import { use } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  ArrowLeft,
  Calendar,
  Clock,
  TrendingUp,
  ShieldAlert,
  Target,
  Edit,
  Trash2,
  ExternalLink,
  CheckCircle2,
  ImageIcon,
} from 'lucide-react';

// Mock trade data matching id parameter
const MOCK_TRADE = {
  id: 'tr-101',
  symbol: 'BTC/USD',
  type: 'LONG',
  status: 'CLOSED',
  outcome: 'WIN',
  pnl: 820.0,
  pnlPercentage: 8.2,
  rrRatio: '1:3.2',
  entryPrice: 58200.0,
  exitPrice: 59840.0,
  stopLoss: 57700.0,
  takeProfit: 59800.0,
  positionSize: '0.5 BTC',
  fees: 12.5,
  strategy: 'Liquidity Sweep',
  emotion: 'Disciplined & Calm',
  entryTime: '2026-09-03 14:15',
  exitTime: '2026-09-03 18:45',
  duration: '4h 30m',
  notes:
    'Swept previous day low during New York session open. Waited for a 5-minute Market Structure Shift (MSS) and filled limit order inside the 15-minute Fair Value Gap (FVG). Target hit smoothly without drawdown.',
  checklist: [
    'Liquidity sweep on 1H/4H timeframe confirmed',
    'Market Structure Shift (MSS) on 5m timeframe',
    'FVG entry alignment',
    'Risk kept under 1% of total account',
  ],
  chartUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
};

export default function TradeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/trades"
            className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition border border-slate-200"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{MOCK_TRADE.symbol}</h1>
              <span
                className={`text-xs font-black px-2.5 py-0.5 rounded-md ${
                  MOCK_TRADE.type === 'LONG'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {MOCK_TRADE.type}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase">#{resolvedParams.id}</span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Executed on {MOCK_TRADE.entryTime} • Duration: {MOCK_TRADE.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer">
            <Edit size={15} /> Edit
          </button>
          <button className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer border border-red-200">
            <Trash2 size={15} /> Delete
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Chart & Notes */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart Screenshot */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon size={16} className="text-blue-600" /> Chart Setup & Execution
              </h2>
              <a
                href={MOCK_TRADE.chartUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline"
              >
                Full Resolution <ExternalLink size={12} />
              </a>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
              <img
                src={MOCK_TRADE.chartUrl}
                alt="Trade Execution Chart"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Trade Execution Notes */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Trade Rationale & Notes
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 border border-slate-100 p-4 rounded-xl mb-5">
              {MOCK_TRADE.notes}
            </p>

            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-600" /> Playbook Checklist Confluence
            </h3>
            <ul className="space-y-2">
              {MOCK_TRADE.checklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50/60 border border-slate-100 p-2.5 rounded-xl"
                >
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Execution Metrics */}
        <div className="space-y-6">
          {/* PnL Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Net Realized P&L
            </span>
            <div className="text-3xl font-black text-emerald-600 mb-1">
              +${MOCK_TRADE.pnl.toFixed(2)}
            </div>
            <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
              +{MOCK_TRADE.pnlPercentage}% Return
            </span>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100 text-xs">
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">R:R Multiple</span>
                <span className="font-extrabold text-blue-600">{MOCK_TRADE.rrRatio}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block text-[11px]">Trading Fees</span>
                <span className="font-extrabold text-slate-800">${MOCK_TRADE.fees}</span>
              </div>
            </div>
          </div>

          {/* Execution Level Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Price Levels
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 font-semibold">Entry Price</span>
                <span className="font-bold text-slate-900">${MOCK_TRADE.entryPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 font-semibold">Exit Price</span>
                <span className="font-bold text-slate-900">${MOCK_TRADE.exitPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-red-50/50 rounded-xl border border-red-100">
                <span className="text-red-700 font-semibold">Stop Loss</span>
                <span className="font-bold text-red-700">${MOCK_TRADE.stopLoss.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <span className="text-emerald-700 font-semibold">Take Profit</span>
                <span className="font-bold text-emerald-700">${MOCK_TRADE.takeProfit.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 font-semibold">Position Size</span>
                <span className="font-bold text-slate-900">{MOCK_TRADE.positionSize}</span>
              </div>
            </div>
          </div>

          {/* Classification Tags */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Strategy & Mindset
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 text-[11px] font-medium block mb-1">Playbook Setup</span>
                <span className="font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl inline-block">
                  {MOCK_TRADE.strategy}
                </span>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] font-medium block mb-1">Emotional State</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl inline-block">
                  {MOCK_TRADE.emotion}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}