'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { DollarSign, Target, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [userName, setUserName] = useState<string>('Johnson Nyarusanda');

  useEffect(() => {
    try {
      const savedSession = localStorage.getItem('tradepro_session_user');
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        if (parsed.fullName) {
          setUserName(parsed.fullName);
        }
      }
    } catch (err) {
      console.error('Error parsing session user', err);
    }
  }, []);

  const initials = userName
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'JN';

  return (
    <DashboardLayout>
      {/* Header with User Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Performance Overview</h1>
          <p className="text-sm text-slate-500">High-level statistical breakdown of your execution history.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900 leading-tight">{userName}</p>
              <p className="text-[10px] text-slate-500 font-semibold leading-tight">Trader Account</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
              {initials}
            </div>
          </div>

          <Link 
            href="/dashboard/trades/new" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition shadow-xs whitespace-nowrap"
          >
            + Quick Log Trade
          </Link>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-50/60 border border-slate-200 p-6 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Net P&L</span>
            <DollarSign size={18} className="text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-600 flex items-center gap-1">
            +$2,480.00 <ArrowUpRight size={22} />
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">+18.2% account growth this month</p>
        </div>

        <div className="bg-slate-50/60 border border-slate-200 p-6 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Win Rate</span>
            <Target size={18} className="text-blue-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">71.2%</div>
          <p className="text-xs text-emerald-600 font-semibold mt-2">32 Wins / 13 Losses</p>
        </div>

        <div className="bg-slate-50/60 border border-slate-200 p-6 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Profit Factor</span>
            <TrendingUp size={18} className="text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900">2.35</div>
          <p className="text-xs text-slate-500 mt-2 font-medium">Avg Win: $145 | Avg Loss: $62</p>
        </div>
      </div>

      {/* Trades Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-bold text-slate-900">Recent Trade Executions</h2>
          <Link href="/dashboard/trades" className="text-xs font-semibold text-blue-600 hover:underline">
            View All Trades →
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider">
                <th className="pb-3 font-semibold">Symbol</th>
                <th className="pb-3 font-semibold">Type</th>
                <th className="pb-3 font-semibold">Entry</th>
                <th className="pb-3 font-semibold">Status</th>
                <th className="pb-3 font-semibold text-right">P&L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-4 font-bold text-slate-900">EURUSD</td>
                <td className="py-4 text-emerald-600 font-bold">LONG</td>
                <td className="py-4 text-slate-500">1.08450</td>
                <td className="py-4">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-md font-bold">WIN</span>
                </td>
                <td className="py-4 text-right font-bold text-emerald-600">+$150.00</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-slate-900">BTCUSD</td>
                <td className="py-4 text-red-600 font-bold">SHORT</td>
                <td className="py-4 text-slate-500">64,200.00</td>
                <td className="py-4">
                  <span className="bg-red-50 text-red-700 border border-red-200 text-xs px-2.5 py-0.5 rounded-md font-bold">LOSS</span>
                </td>
                <td className="py-4 text-right font-bold text-red-600">-$80.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}