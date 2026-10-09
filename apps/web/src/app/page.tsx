'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Terminal,
  BarChart2,
  PieChart,
  ArrowRight,
  ShieldCheck,
  Activity,
  Globe,
  Cpu,
  Server,
  Check,
  HelpCircle,
  ChevronDown,
  Zap,
  Layers,
  Radio
} from 'lucide-react';

/* Animated Counter Component that reliably starts counting from 0 when scrolled into view */
function AnimatedCounter({ end, duration = 2200, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease-out formula for smooth deceleration towards final target
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <h3 ref={counterRef} className="text-4xl sm:text-5xl font-black text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

export default function TradeProLandingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const statsImages = [
    {
      src: '/stats-1.jpg',
      location: 'LIVE SESSION',
      title: 'Global Trading Desk',
      sub: 'Multi-Monitor Strategy Setup'
    },
    {
      src: '/stats-2.jpg',
      location: 'BACKTEST TERMINAL',
      title: 'Institutional Analytics',
      sub: 'Tick-Data Strategy Simulation'
    }
  ];

  // Images change automatically every 5 seconds like a smooth video motion
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % statsImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [statsImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      a: 'The Pro Trader tier allows unlimited slave account connections with individual lot-size multipliers and custom risk controls per account.',
    },
    {
      q: 'How does the mentor/student auditing feature work?',
      a: 'Mentors can view student journals, open positions, and execution metrics in real time without having direct trade permissions or access to private credentials.',
    },
  ];

  const brokers = [
    { name: 'MetaTrader 4', category: 'Terminal Platform', icon: Activity, color: 'text-blue-600' },
    { name: 'MetaTrader 5', category: 'Terminal Platform', icon: Cpu, color: 'text-indigo-600' },
    { name: 'cTrader', category: 'ECN Trading', icon: Globe, color: 'text-sky-600' },
    { name: 'TradingView', category: 'Webhook Alerts', icon: BarChart2, color: 'text-blue-500' },
    { name: 'FTMO', category: 'Prop Firm Sync', icon: ShieldCheck, color: 'text-slate-600' },
    { name: 'FundedNext', category: 'Prop Firm Sync', icon: Zap, color: 'text-blue-600' },
    { name: 'IC Markets', category: 'Forex Broker', icon: Server, color: 'text-sky-600' },
    { name: 'Pepperstone', category: 'ECN Broker', icon: Layers, color: 'text-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      
      {/* 1. Floating Pill Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center ${
          isScrolled ? 'py-3 px-4' : 'py-6 px-8 bg-transparent'
        }`}
      >
        <div
          className={`transition-all duration-300 ease-in-out flex items-center justify-between w-full max-w-7xl ${
            isScrolled
              ? 'bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 rounded-full py-2.5 px-6 shadow-2xl shadow-slate-900/10 max-w-5xl text-white'
              : 'border-b border-slate-200/80 pb-4 text-slate-900'
          }`}
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-md shadow-blue-600/30">
                TJ
              </div>
              <span className={`font-black tracking-tight text-lg ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
                TradePro
              </span>
            </div>

            {/* Nav Menu */}
            <nav className={`hidden lg:flex items-center gap-8 text-xs font-semibold ${isScrolled ? 'text-slate-300' : 'text-slate-600'}`}>
              <a href="#backtester" className="hover:text-blue-600 transition-colors">Backtester</a>
              <a href="#brokers" className="hover:text-blue-600 transition-colors">Supported Brokers</a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#stats" className="hover:text-blue-600 transition-colors">Stats</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className={`text-xs font-semibold transition-colors hidden sm:inline-block ${
                isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105 ${
                isScrolled ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50/30 text-slate-900 flex flex-col justify-between overflow-hidden pt-28">
        
        {/* Right Background Image Container */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0 pointer-events-none overflow-hidden animate-fade-in-right">
          <img
            src="/hero-image.jpg"
            alt="Knowledge vs Action Desk Setup"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/20" />
        </div>

        {/* Hero Left Content */}
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10 relative">
          <div className="lg:col-span-7 text-left space-y-6 pt-10 lg:pt-0">
            
            {/* Spotlight Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full text-[11px] font-bold text-blue-700 tracking-wider animate-fade-in-up backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-blue-600 uppercase font-black">NEXT-GEN TERMINAL</span>
              <span className="text-blue-200">|</span>
              <span>TRADE COPIER & ANALYTICS</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] animate-fade-in-up [animation-delay:150ms]">
              Automate, <span className="text-blue-600">backtest</span> & scale your trading
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed animate-fade-in-up [animation-delay:300ms]">
              One platform for execution, analytics, and trade copying. Built to scale with the world’s leading prop firms and retail brokers.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 animate-fade-in-up [animation-delay:450ms]">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-8 py-3.5 rounded-full transition-all shadow-xl shadow-blue-600/25 flex items-center gap-2 hover:scale-105"
              >
                Join the Platform <ArrowRight size={16} />
              </Link>
              <a
                href="#backtester"
                className="bg-white/90 hover:bg-slate-100 text-slate-800 border border-slate-200/90 font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-xs"
              >
                Explore Features
              </a>
            </div>

            {/* Sync Card */}
            <div className="pt-4 max-w-sm animate-fade-in-up [animation-delay:600ms]">
              <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-2xl flex justify-between items-center text-xs shadow-md shadow-slate-200/50">
                <div>
                  <p className="font-extrabold text-slate-900">Slave Account #1 (Prop Fund)</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Latency: 0.8ms</p>
                </div>
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                  Synced
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Brands Bar */}
        <div className="relative z-10 border-t border-slate-200/80 bg-white/80 backdrop-blur-md py-6 px-8 mt-12">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6 opacity-75 hover:opacity-100 transition-opacity text-xs font-extrabold tracking-widest text-slate-600">
            <span>METATRADER</span>
            <span>TRADINGVIEW</span>
            <span>CTRADER</span>
            <span>FTMO</span>
            <span>IC MARKETS</span>
            <span>PEPPERSTONE</span>
          </div>
        </div>
      </section>

      {/* 3. Universal Compatibility Marquee */}
      <section id="brokers" className="py-20 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Universal Compatibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Connect Any Broker & Prop Firm Seamlessly
          </h2>
        </div>

        <div className="relative w-full overflow-hidden bg-slate-50 py-6 border-y border-slate-100">
          <div className="flex w-[200%] animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-4">
            {[...brokers, ...brokers].map((broker, i) => {
              const IconComp = broker.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-xs shrink-0 hover:shadow-md transition-shadow">
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

      {/* 4. Strategy Backtester */}
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
                  <span className="text-blue-600 font-bold">+1.85 R</span>
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

      {/* 5. Pricing Section */}
      <section id="pricing" className="py-24 bg-white border-b border-slate-100 px-6">
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

            <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
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
                Yearly <span className="text-[10px] text-blue-100 ml-1 font-mono">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                </ul>
              </div>
              <Link href="/signup" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-3 rounded-full transition-colors text-center block">
                Get Started
              </Link>
            </div>

            <div className="bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl text-white">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-full tracking-wider shadow-sm">
                Most Popular
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Pro Trader</h3>
                <p className="text-xs text-slate-400 mb-6">For multi-account prop firm & retail traders.</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-white">
                    ${billingCycle === 'yearly' ? '49' : '59'}
                  </span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <ul className="space-y-3.5 text-xs font-medium text-slate-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-400" /> Everything in Journal
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-400" /> Trade Copier (Unlimited Accounts)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-400" /> Sub-Millisecond Cloud VPS Sync
                  </li>
                </ul>
              </div>
              <Link href="/signup" className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 rounded-full transition-all shadow-md shadow-blue-600/30 text-center block">
                Start Free Trial
              </Link>
            </div>

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
                </ul>
              </div>
              <Link href="/signup" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-3 rounded-full transition-colors text-center block">
                Contact Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Full-Width Edge-to-Edge Automatic Motion Stats Section */}
      <section id="stats" className="relative bg-slate-950 text-white py-28 min-h-[640px] flex items-center overflow-hidden border-y border-slate-800">
        
        {/* Left Edge Canvas with Automatic Ken Burns Motion */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-7/12 h-full z-0 overflow-hidden">
          {statsImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/70 to-slate-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

              {/* Dynamic Live Status Badge */}
              <div className="absolute bottom-8 left-8 z-20 hidden sm:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2.5 rounded-2xl shadow-xl">
                <Radio size={14} className="text-blue-500 animate-pulse" />
                <div>
                  <p className="text-[10px] font-black tracking-widest text-blue-400 uppercase">{img.location}</p>
                  <p className="text-xs font-bold text-white">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content Section */}
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
          <div className="lg:col-start-7 lg:col-span-6 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1 rounded-full text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-4">
                PLATFORM SCALE
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Built for Traders Who Execute with Precision
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                Powering over 20M active users globally. TradePro provides institutional-grade trade copying, tick-precision backtesting, and automated trade journaling built for serious retail traders and prop firm managers.
              </p>
            </div>

            {/* Scroll-Triggered Counter Section */}
            <div className="border-t border-slate-800/80 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <AnimatedCounter end={20} suffix="M+" />
                <p className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mt-1">USERS</p>
              </div>
              <div>
                <AnimatedCounter end={150} suffix="K+" />
                <p className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mt-1">SUBSCRIBERS</p>
              </div>
              <div>
                <AnimatedCounter end={14} suffix="+" />
                <p className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mt-1">YEARS</p>
              </div>
              <div>
                <AnimatedCounter end={170} suffix="+" />
                <p className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mt-1">COUNTRIES</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50/50 border-b border-slate-100 px-6">
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

      {/* 8. Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-[10px]">
              TJ
            </div>
            <span className="font-bold text-white">TradePro Terminal</span>
            <span>© 2026 TradePro Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </footer>

    </div>
  );
}