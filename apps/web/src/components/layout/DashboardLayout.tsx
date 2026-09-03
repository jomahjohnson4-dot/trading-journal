'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  BarChart3,
  TrendingUp,
  Target,
  Brain,
  FileText,
  Settings,
  PlusCircle,
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Journal Trades', href: '/dashboard/trades', icon: BookOpen },
    { label: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
    { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { label: 'Performance', href: '/dashboard/performance', icon: TrendingUp },
    { label: 'Strategies', href: '/dashboard/strategies', icon: Target },
    { label: 'Psychology', href: '/dashboard/psychology', icon: Brain },
    { label: 'Reports', href: '/dashboard/reports', icon: FileText },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-white text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-50/80 border-r border-slate-200 h-screen flex flex-col justify-between p-5 fixed left-0 top-0 z-20">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-8 px-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
              TJ
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">TradePro</span>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/dashboard'
                  ? pathname === '/dashboard'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition font-medium text-sm ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} /> {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link
          href="/dashboard/trades/new"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold shadow-xs transition text-sm cursor-pointer"
        >
          <PlusCircle size={18} /> Log New Trade
        </Link>
      </aside>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Header Bar */}
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-end sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-700">Trader Account</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
              TA
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 bg-white">{children}</main>
      </div>
    </div>
  );
}