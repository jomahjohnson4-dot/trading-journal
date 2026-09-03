'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Upload, AlertCircle } from 'lucide-react';

export default function NewTradePage() {
  const router = Router();
  const [formData, setFormData] = useState({
    symbol: '',
    type: 'LONG',
    entryPrice: '',
    exitPrice: '',
    stopLoss: '',
    takeProfit: '',
    positionSize: '',
    strategy: 'Liquidity Sweep',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for database API submit will go here
    router.push('/dashboard/trades');
  };

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="mb-8">
        <Link 
          href="/dashboard/trades" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition mb-3"
        >
          <ArrowLeft size={16} /> Back to Trade Journal
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Log New Trade Execution</h1>
        <p className="text-sm text-slate-500">Record entry data, risk metrics, and strategy context for your trade.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
        {/* Basic Execution Parameters */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100">
            1. Execution Parameters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Symbol / Ticker
              </label>
              <input
                type="text"
                name="symbol"
                required
                placeholder="e.g. EURUSD or BTCUSD"
                value={formData.symbol}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 uppercase font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Direction
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-semibold"
              >
                <option value="LONG">LONG (Buy)</option>
                <option value="SHORT">SHORT (Sell)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Strategy Tag
              </label>
              <select
                name="strategy"
                value={formData.strategy}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-medium"
              >
                <option value="Liquidity Sweep">Liquidity Sweep</option>
                <option value="Break & Retest">Break & Retest</option>
                <option value="Order Block Touch">Order Block Touch</option>
                <option value="Fair Value Gap">Fair Value Gap</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & Risk Allocation */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100">
            2. Price & Risk Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Entry Price
              </label>
              <input
                type="number"
                step="any"
                name="entryPrice"
                required
                placeholder="0.00"
                value={formData.entryPrice}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Exit Price
              </label>
              <input
                type="number"
                step="any"
                name="exitPrice"
                required
                placeholder="0.00"
                value={formData.exitPrice}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Position Size (Lots/Contracts)
              </label>
              <input
                type="number"
                step="any"
                name="positionSize"
                required
                placeholder="1.0"
                value={formData.positionSize}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Stop Loss (Optional)
              </label>
              <input
                type="number"
                step="any"
                name="stopLoss"
                placeholder="0.00"
                value={formData.stopLoss}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Take Profit (Optional)
              </label>
              <input
                type="number"
                step="any"
                name="takeProfit"
                placeholder="0.00"
                value={formData.takeProfit}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Execution Notes & Context */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100">
            3. Psychological Notes & Attachments
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Trade Reflection & Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Why did you enter this setup? Did you follow your risk rules?"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 text-slate-800"
              />
            </div>

            {/* Chart Screenshot Drop Area Placeholder */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Chart Screenshot
              </label>
              <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 bg-slate-50/50 rounded-2xl p-6 text-center cursor-pointer transition">
                <Upload className="mx-auto text-slate-400 mb-2" size={24} />
                <p className="text-xs font-semibold text-slate-700">Click to upload or drag screenshot</p>
                <p className="text-[11px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 justify-end">
          <Link
            href="/dashboard/trades"
            className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition shadow-xs cursor-pointer"
          >
            <Save size={18} /> Save Trade Record
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}

// Simple router helper to handle standard client routing
function Router() {
  return useRouter();
}