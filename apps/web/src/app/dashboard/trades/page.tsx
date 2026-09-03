'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { Search, Filter, PlusCircle, ArrowUpDown, ExternalLink } from 'lucide-react';

// Mock trade data matching our Zod Trade schema structure
const MOCK_TRADES = [
  {
    id: 'tr-1',
    symbol: 'EURUSD',
    type: 'LONG',
    entryPrice: 1.08450,
    exitPrice: 1.08750,
    positionSize: 1.5,
    pnl: 450.00,
    status: 'WIN',
    date: '2026-09-03',
    strategy: 'Liquidity Sweep',
  },
  {
    id: 'tr-2',
    symbol: 'BTCUSD',
    type: 'SHORT',
    entryPrice: 64200.00,
    exitPrice: 64600.00,
    positionSize: 0.5,
    pnl: -200.00,
    status: 'LOSS',
    date: '2026-09-02',
    strategy: 'Break & Retest',
  },
  {
    id: 'tr-3',
    symbol: 'GBPUSD',
    type: 'LONG',
    entryPrice: 1.26100,
    exitPrice: 1.26750,
    positionSize: 2.0,
    pnl: 1300.00,
    status: 'WIN',
    date: '2026-09-01',
    strategy: 'Order Block Touch',
  },
  {
    id: 'tr-4',
    symbol: 'XAUUSD',
    type: 'SHORT',
    entryPrice: 2480.50,
    exitPrice: 2492.00,
    positionSize: 0.8,
    pnl: -920.00,
    status: 'LOSS',
    date: '2026-08-30',
    strategy: 'Fair Value Gap',
  },
];

export default function TradesJournalPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredTrades = MOCK_TRADES.filter((trade) => {
    const matchesSymbol = trade.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || trade.status === filterStatus;
    return matchesSymbol && matchesStatus;
  });

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Trade Journal</h1>
          <p className="text-sm text-slate-500">Detailed records and execution parameters for all logged setups.</p>
        </div>
        <Link
          href="/dashboard/trades/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition shadow-xs w-fit"
        >
          <PlusCircle size={18} /> New Entry
        </Link>
      </div>

      {/* Filter and Controls Toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 shadow-xs flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search symbol (e.g. EURUSD)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Filter size={16} /> Filter:
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="ALL">All Outcomes</option>
            <option value="WIN">Wins Only</option>
            <option value="LOSS">Losses Only</option>
          </select>
        </div>
      </div>

      {/* Trades Data Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                <th className="py-3.5 px-6 font-semibold">Date</th>
                <th className="py-3.5 px-6 font-semibold">Symbol</th>
                <th className="py-3.5 px-6 font-semibold">Direction</th>
                <th className="py-3.5 px-6 font-semibold">Strategy</th>
                <th className="py-3.5 px-6 font-semibold">Entry / Exit</th>
                <th className="py-3.5 px-6 font-semibold">Outcome</th>
                <th className="py-3.5 px-6 font-semibold text-right">Net P&L</th>
                <th className="py-3.5 px-6 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
                  <tr key={trade.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 text-slate-500 font-medium text-xs">{trade.date}</td>
                    <td className="py-4 px-6 font-bold text-slate-900">{trade.symbol}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-xs font-extrabold px-2 py-0.5 rounded-md ${
                          trade.type === 'LONG'
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                            : 'text-red-700 bg-red-50 border border-red-200'
                        }`}
                      >
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium text-xs">{trade.strategy}</td>
                    <td className="py-4 px-6 text-slate-500 text-xs font-mono">
                      {trade.entryPrice} → {trade.exitPrice}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                          trade.status === 'WIN'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {trade.status}
                      </span>
                    </td>
                    <td
                      className={`py-4 px-6 text-right font-bold text-base ${
                        trade.pnl >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}
                    >
                      {trade.pnl >= 0 ? `+$${trade.pnl.toFixed(2)}` : `-$${Math.abs(trade.pnl).toFixed(2)}`}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="text-slate-400 hover:text-blue-600 transition p-1">
                        <ExternalLink size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400 text-sm">
                    No trade executions matching search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}