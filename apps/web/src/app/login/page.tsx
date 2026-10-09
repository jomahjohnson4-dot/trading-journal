'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, Mail, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check stored user data
    const savedUserRaw = localStorage.getItem('tradepro_user');
    
    if (!savedUserRaw) {
      setError('No account found with this email. Please sign up first.');
      return;
    }

    const savedUser = JSON.parse(savedUserRaw);

    if (savedUser.email.toLowerCase() !== email.toLowerCase()) {
      setError('No account found with this email. Please sign up first.');
      return;
    }

    if (savedUser.password !== password) {
      setError('Incorrect password. Please try again.');
      return;
    }

    setIsLoading(true);
    localStorage.setItem('tradepro_session_user', JSON.stringify({ fullName: savedUser.fullName, email: savedUser.email }));

    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6 relative overflow-hidden font-sans">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <Link
        href="/"
        className="absolute top-8 left-8 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center mx-auto mb-4 text-base shadow-lg shadow-blue-600/30">
            TJ
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Welcome Back to TradePro</h1>
          <p className="text-xs text-slate-400 mt-1">Enter your credentials to access your trading dashboard</p>
        </div>

        {error && (
          <div className="mb-4 bg-red-950/80 border border-red-800 text-red-200 text-xs p-3 rounded-xl flex items-center gap-2.5">
            <AlertCircle size={16} className="text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jomahjohnson4@gmail.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-600 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-slate-300">Password</label>
              <a href="#" className="text-[11px] font-semibold text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-600 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-extrabold text-xs py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 mt-2 cursor-pointer"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-800/80 pt-6 text-xs text-slate-400">
          {"Don't have an account yet?"}{' '}
          <Link href="/signup" className="text-blue-400 font-bold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}