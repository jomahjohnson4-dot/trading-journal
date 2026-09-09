'use client';

import React, { useState } from 'react';
import {
  Terminal,
  BarChart2,
  PieChart,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Award,
  Globe,
  Cpu,
  Smartphone,
  Server,
  Check,
  HelpCircle,
  ChevronDown,
  Zap,
  Layers
} from 'lucide-react';

export default function TradeProLandingPage() {
  const [mentorRole, setMentorRole] = useState<'student' | 'mentor'>('student');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqList = [
    {
      q: 'How fast is the Trade Copier execution latency?',
      a: 'Our cloud-native infrastructure mirrors trades across linked sub-accounts with sub-millisecond execution speeds (average 0.8ms - 1.2ms latency), ensuring minimal slippage.',
    },
    {
      q: 'Supported trading platforms and brokers?',
      a: 'We natively support MetaTrader 4 (MT4), MetaTrader 5 (MT5), cTrader, TradingView Webhooks, and direct REST API integrations for prop firms like FTMO, FundedNext, and MyFundedFX.',
    },
    {
      q: 'Is there a limit on how many slave accounts I can connect?',
      a: 'The Pro Trader and Mentor tiers allow unlimited slave account connections with individual lot-size multipliers and custom risk controls per account.',
    },
    {
      q: 'How does the mentor/student auditing feature work?',
      a: 'Mentors can view student journals, open positions, and execution metrics in real time without having direct trade permissions or access to private credentials.',
    },
  ];

  const brokers = [
    { name: 'MetaTrader 4', category: 'Terminal Platform', icon: Activity, color: 'text-blue-600' },
    { name: 'MetaTrader 5', category: 'Terminal Platform', icon: Cpu, color: 'text-indigo-600' },
    { name: 'cTrader', category: 'ECN Trading', icon: Globe, color: 'text-emerald-600' },
    { name: 'TradingView', category: 'Webhook Alerts', icon: BarChart2, color: 'text-blue-500' },
    { name: 'FTMO', category: 'Prop Firm Sync', icon: ShieldCheck, color: 'text-amber-500' },
    { name: 'FundedNext', category: 'Prop Firm Sync', icon: Zap, color: 'text-purple-600' },
    { name: 'IC Markets', category: 'Forex Broker', icon: Server, color: 'text-sky-600' },
    { name: 'Pepperstone', category: 'ECN Broker', icon: Layers, color: 'text-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-md shadow-blue-500/20">
              TJ
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base">TradePro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#backtester" className="hover:text-blue-600 transition-colors">Backtester</a>
            <a href="#brokers" className="hover:text-blue-600 transition-colors">Supported Brokers</a>
            <a href="#mentorship" className="hover:text-blue-600 transition-colors">Mentorship</a>
            <a href="#integrations" className="hover:text-blue-600 transition-colors">Integrations</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* 2. Restored Hero Section */}
      <section className="pt-20 pb-12 px-6 max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-6">
          Next-Gen Trade Copier & Analytics
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Automate, Backtest & Scale Your Trading Operations
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Synchronize master and slave accounts instantly across prop firms and top brokers with sub-millisecond execution speeds.
        </p>

        {/* Hero Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
            Start Free Trial <ArrowRight size={14} />
          </a>
          <a href="#backtester" className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-6 py-3.5 rounded-xl transition-colors">
            Explore Features
          </a>
        </div>

        {/* Account Sync Status Card */}
        <div className="mt-12 max-w-md mx-auto space-y-3 text-left">
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex justify-between items-center hover:border-blue-300 transition-all">
            <div>
              <p className="text-xs font-bold text-slate-900">Slave Account #1 (Prop Fund)</p>
              <p className="text-[10px] font-mono text-slate-500 mt-0.5">Copied • Latency: 1.2ms</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Synced
            </span>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex justify-between items-center hover:border-blue-300 transition-all">
            <div>
              <p className="text-xs font-bold text-slate-900">Slave Account #2 (Personal FX)</p>
              <p className="text-[10px] font-mono text-slate-500 mt-0.5">Copied • Latency: 0.8ms</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Synced
            </span>
          </div>
        </div>
      </section>

      {/* 3. Animated Brokers & Prop Firms Section */}
      <section id="brokers" className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Universal Compatibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Connect Any Broker & Prop Firm Seamlessly
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden bg-slate-50 py-6 border-y border-slate-100">
          <div className="flex w-[200%] animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-4">
            {[...brokers, ...brokers].map((broker, i) => {
              const IconComp = broker.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-200/80 px-5 py-3 rounded-xl shadow-xs shrink-0 hover:shadow-md transition-shadow">
                  <div className="p-2 rounded-lg bg-slate-50">
                    <IconComp className={`w-5 h-5 ${broker.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">{broker.name}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{broker.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Deep Backtesting Engine & Strategy Lab */}
      <section id="backtester" className="py-24 bg-slate-50/60 border-b border-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <Terminal size={16} className="text-blue-600" /> Strategy Backtester
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  99.9% Tick Quality
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs text-slate-600">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex justify-between items-center">
                  <span>Total Simulated Trades:</span>
                  <span className="text-slate-900 font-bold">1,420</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex justify-between items-center">
                  <span>Expectancy per Trade:</span>
                  <span className="text-emerald-600 font-bold">+1.85 R</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex justify-between items-center">
                  <span>Consecutive Max Wins:</span>
                  <span className="text-blue-600 font-bold">12 Trades</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex justify-between items-center">
                  <span>Sharpe Ratio:</span>
                  <span className="text-indigo-600 font-bold">2.84</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
                Historical Edge Validation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Simulate Years of Trading Data in Minutes
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Eliminate emotional bias by backtesting your technical setups against tick-level historical data. Verify edge stability, win probabilities, and drawdown curves before risking live capital.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs">
                  <BarChart2 size={16} className="text-blue-600" /> Custom Rule Builders
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-3.5 rounded-xl shadow-xs">
                  <PieChart size={16} className="text-indigo-600" /> Monte Carlo Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mentor & Student Collaboration Section */}
      <section id="mentorship" className="py-24 bg-white border-b border-slate-100 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              Interactive Mentorship
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Reach Your Goals Faster with Expert Mentors
            </h2>
            <p className="text-slate-600 text-sm">
              Connect your journal directly with verified trading coaches for live performance auditing and transparent execution review rooms.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex shadow-inner border border-slate-200">
              <button
                onClick={() => setMentorRole('student')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  mentorRole === 'student' ? 'bg-white text-blue-600 shadow-md shadow-slate-200' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Student View
              </button>
              <button
                onClick={() => setMentorRole('mentor')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  mentorRole === 'mentor' ? 'bg-white text-blue-600 shadow-md shadow-slate-200' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Mentor Dashboard
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/40">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-extrabold text-slate-900">
                  {mentorRole === 'mentor' ? "Mentor's Live Roster" : "Assigned Mentor Session"}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Active Sync</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Carroll Medhurst', account: 'Closed', pnl: '+$420.00' },
                  { name: 'Robin Powlowski', account: 'Closed', pnl: '+$1,120.00' },
                  { name: 'Spencer Sipes', account: 'Closed', pnl: '-$150.00' },
                  { name: 'Roland Moore', account: 'Closed', pnl: '+$840.00' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/70 rounded-xl text-xs hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 font-bold text-xs flex items-center justify-center text-blue-700 border border-blue-200">
                        {item.name[0]}
                      </div>
                      <span className="font-bold text-slate-800">{item.name}</span>
                    </div>
                    <span className={`font-mono font-extrabold ${item.pnl.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                      {item.pnl}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ul className="space-y-4 text-xs font-semibold text-slate-700 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" /> One-on-One Coaching with verified execution data
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" /> Real-time feedback on open and closed positions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" /> Shared trading experiences and setup review rooms
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" /> Accelerated learning curve through automated auditing
                </li>
              </ul>

              <a href="#pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                Discover Mentorship <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Automated Behavioral Risk & Rules Engine */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              Behavioral Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Automated Discipline & Risk Guards
            </h2>
            <p className="text-slate-600 text-sm">
              Protect yourself from revenge trading, over-leveraging, and tilt. Set strict automated alerts before you break your trading plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Daily Drawdown Circuit Breaker</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically disconnects trading copying and sends mobile push alerts if daily loss limit hits your threshold.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                <Activity size={26} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Over-Trading Detector</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flags abnormal trade frequencies and warns you when execution pacing deviates from backtested statistics.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                <Award size={26} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Strategy Compliance Score</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Get scored on how faithfully you adhere to stop losses, position sizing, and predetermined trade setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Platform Integrations */}
      <section id="integrations" className="py-20 bg-white border-b border-slate-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Seamlessly Connects Across Your Infrastructure
          </h2>
          <p className="text-xs text-slate-600 max-w-xl mx-auto mb-10">
            Sync data instantly across Web terminals, Desktop platforms, Mobile devices, and VPS hosting providers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-slate-700">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-blue-500 transition-colors">
              <Globe className="text-blue-600" size={24} />
              <span>Web Cloud Terminal</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-indigo-500 transition-colors">
              <Cpu className="text-indigo-600" size={24} />
              <span>Direct API Sync</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-emerald-500 transition-colors">
              <Smartphone className="text-emerald-600" size={24} />
              <span>iOS & Android Apps</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-amber-500 transition-colors">
              <Server className="text-amber-600" size={24} />
              <span>Ultra-Low Latency VPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50/70 border-b border-slate-100 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              Flexible Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Invest in Your Trading Edge
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Choose the plan that fits your execution tier. Save 20% with annual billing.
            </p>

            <div className="inline-flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yearly <span className="text-[10px] text-emerald-300 ml-1 font-mono">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Trader Journal</h3>
                <p className="text-xs text-slate-500 mb-6">Essential analytics for single account traders.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">
                    ${billingCycle === 'yearly' ? '19' : '24'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>
                <ul className="space-y-3.5 text-xs font-medium text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Unlimited Trade Journaling
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Duration & Hour Analytics
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> 1 Connected Account
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Standard Analytics
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-3 rounded-xl transition-colors text-center block">
                Get Started
              </a>
            </div>

            {/* Pro Tier (Featured) */}
            <div className="bg-gradient-to-b from-blue-50/50 to-white border-2 border-blue-600 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl shadow-blue-500/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-full tracking-wider shadow-sm">
                Most Popular
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pro Trader</h3>
                <p className="text-xs text-slate-500 mb-6">For multi-account prop firm & retail traders.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">
                    ${billingCycle === 'yearly' ? '49' : '59'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>
                <ul className="space-y-3.5 text-xs font-medium text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Everything in Journal
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Trade Copier (Unlimited Accounts)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Sub-Millisecond Cloud VPS Sync
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Historical Strategy Backtester
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-500/20 text-center block">
                Start 14-Day Free Trial
              </a>
            </div>

            {/* Fund Tier */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Mentor & Fund</h3>
                <p className="text-xs text-slate-500 mb-6">For trading coaches, prop funds & teams.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-slate-900">
                    ${billingCycle === 'yearly' ? '99' : '119'}
                  </span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>
                <ul className="space-y-3.5 text-xs font-medium text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Everything in Pro Trader
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Student & Roster Management
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Shared Setup & Audit Rooms
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-600" /> Dedicated Priority Support
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-3 rounded-xl transition-colors text-center block">
                Contact Enterprise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-24 bg-white border-b border-slate-100 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500">
              Everything you need to know about TradePro terminal capabilities and setup.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 cursor-pointer transition-all hover:border-blue-300 shadow-xs"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2.5">
                    <HelpCircle size={16} className="text-blue-600 shrink-0" />
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Banner Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-blue-600 text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-sm md:text-base text-blue-100 mt-4 max-w-2xl mx-auto leading-relaxed font-medium">
            Wake up everyday with the confidence that you have the tools and insights to make informed trading decisions. With TradePro, you’re not just trading; you’re thriving.
          </p>
          <a
            href="#pricing"
            className="inline-block mt-8 bg-white text-blue-600 hover:bg-blue-50 text-xs font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-[10px]">
              TJ
            </div>
            <span className="font-extrabold text-white text-sm">TradePro</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} TradePro Terminal Inc. All rights reserved. High-risk investment warning applies.
          </p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </footer>

    </div>
  );
}