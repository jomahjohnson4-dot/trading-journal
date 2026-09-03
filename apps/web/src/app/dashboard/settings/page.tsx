'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { User, Shield, Bell, DollarSign, Save } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'risk' | 'notifications'>('profile');

  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Account & Platform Settings</h1>
          <p className="text-xs text-slate-500 font-medium">Manage profile details, default risk parameters, and notifications.</p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-xs w-fit cursor-pointer">
          <Save size={16} /> Save Changes
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 mb-6 gap-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 text-xs font-bold transition flex items-center gap-2 cursor-pointer border-b-2 ${
            activeTab === 'profile'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <User size={16} /> Profile Information
        </button>

        <button
          onClick={() => setActiveTab('risk')}
          className={`pb-3 text-xs font-bold transition flex items-center gap-2 cursor-pointer border-b-2 ${
            activeTab === 'risk'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <DollarSign size={16} /> Default Risk Management
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 text-xs font-bold transition flex items-center gap-2 cursor-pointer border-b-2 ${
            activeTab === 'notifications'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Bell size={16} /> Notifications & Alerts
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-3xl">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Trader Profile</h2>
          
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue="Johnson John Nyarusanda"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  defaultValue="trader@tradepro.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Trading Base Currency</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500">
                <option value="USD">USD ($) - US Dollar</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="GBP">GBP (£) - British Pound</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Risk Management Tab */}
      {activeTab === 'risk' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-3xl">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Default Execution Parameters</h2>
          
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Default Account Size ($)</label>
                <input
                  type="number"
                  defaultValue={10000}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Max Risk per Trade (%)</label>
                <input
                  type="number"
                  step="0.1"
                  defaultValue={1.0}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Daily Max Drawdown Stop Limit ($)</label>
              <input
                type="number"
                defaultValue={500}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-blue-500"
              />
              <p className="text-[11px] text-slate-400 mt-1">Alerts trigger when daily net loss approaches this threshold.</p>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-3xl">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Notification Preferences</h2>
          
          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <div>
                <span className="font-bold text-slate-900 block">Daily Performance Summary Email</span>
                <span className="text-slate-500 text-[11px]">Receive an end-of-day summary of logged trades and daily return.</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <div>
                <span className="font-bold text-slate-900 block">Risk Drawdown Alerts</span>
                <span className="text-slate-500 text-[11px]">Get alerted when your daily drawdown limit is reached or exceeded.</span>
              </div>
            </label>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}