'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { Download, FileText, Calendar, Filter, BarChart3, ArrowDownToLine } from 'lucide-react';

const RECENT_REPORTS = [
  {
    id: 'rep-1',
    title: 'August 2026 Monthly Statement',
    dateRange: 'Aug 1, 2026 - Aug 31, 2026',
    format: 'PDF',
    size: '1.2 MB',
    trades: 34,
    netPnl: 1420.50,
  },
  {
    id: 'rep-2',
    title: 'Q2 2026 Comprehensive Review',
    dateRange: 'Apr 1, 2026 - Jun 30, 2026',
    format: 'PDF',
    size: '3.4 MB',
    trades: 112,
    netPnl: 4890.00,
  },
  {
    id: 'rep-3',
    title: '2026 YTD Raw Execution Data',
    dateRange: 'Jan 1, 2026 - Aug 31, 2026',
    format: 'CSV',
    size: '450 KB',
    trades: 284,
    netPnl: 11250.00,
  },
];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Performance Reports</h1>
          <p className="text-xs text-slate-500 font-medium">Generate, export, and download comprehensive trade statements.</p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-xs w-fit cursor-pointer">
          <Download size={16} /> Generate Custom Report
        </button>
      </div>

      {/* Quick Export Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <FileText size={18} />
            </div>
            <h3 className="font-bold text-sm text-slate-900 mb-1">Monthly Statement</h3>
            <p className="text-xs text-slate-500 mb-4">Full execution log, profit factor breakdown, and fee summaries for the current month.</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 py-2 rounded-xl transition w-full cursor-pointer">
            <ArrowDownToLine size={14} /> Export PDF
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <BarChart3 size={18} />
            </div>
            <h3 className="font-bold text-sm text-slate-900 mb-1">Tax & Accounting Export</h3>
            <p className="text-xs text-slate-500 mb-4">CSV format optimized for tax filing with detailed entry/exit timestamps and net returns.</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 py-2 rounded-xl transition w-full cursor-pointer">
            <ArrowDownToLine size={14} /> Export CSV
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Calendar size={18} />
            </div>
            <h3 className="font-bold text-sm text-slate-900 mb-1">Strategy Breakdown Report</h3>
            <p className="text-xs text-slate-500 mb-4">In-depth statistical comparison across all active playbook setups.</p>
          </div>
          <button className="flex items-center justify-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 py-2 rounded-xl transition w-full cursor-pointer">
            <ArrowDownToLine size={14} /> Export PDF
          </button>
        </div>
      </div>

      {/* Generated Reports Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Generated Statement History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider font-bold">
                <th className="pb-3 pl-2">Report Name</th>
                <th className="pb-3">Date Range</th>
                <th className="pb-3">Trades</th>
                <th className="pb-3">Net Profit</th>
                <th className="pb-3">Format</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_REPORTS.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-3.5 pl-2 font-bold text-slate-900">{report.title}</td>
                  <td className="py-3.5 text-slate-500">{report.dateRange}</td>
                  <td className="py-3.5 font-medium text-slate-700">{report.trades}</td>
                  <td className="py-3.5 font-extrabold text-emerald-600">+${report.netPnl.toFixed(2)}</td>
                  <td className="py-3.5">
                    <span className="font-bold text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {report.format} ({report.size})
                    </span>
                  </td>
                  <td className="py-3.5 text-right pr-2">
                    <button className="text-blue-600 font-bold hover:underline cursor-pointer">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}