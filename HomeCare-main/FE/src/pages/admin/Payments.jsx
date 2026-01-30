import React from 'react';
import {
  Download,
  Wallet,
  TrendingUp,
  Clock,
  AlertCircle,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Search
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'May', rev: 92000, payout: 62000 },
  { name: 'Jun', rev: 105000, payout: 71000 },
  { name: 'Jul', rev: 98000, payout: 65000 },
  { name: 'Aug', rev: 112000, payout: 75000 },
  { name: 'Sep', rev: 108000, payout: 72000 },
  { name: 'Oct', rev: 128450, payout: 84200 }
];

const Payments = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">Payment & Revenue Dashboard</h2>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm">
          <Download size={16} /> Export Report
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Gross Revenue', value: '$128,450.00', note: '+18.2%', icon: Wallet, color: 'indigo' },
            { label: 'Caregiver Payouts', value: '$84,200.00', note: 'Pending', icon: TrendingUp, color: 'blue' },
            { label: 'Outstanding Invoices', value: '$15,840.50', note: '12 overdue', icon: Clock, color: 'amber' },
            { label: 'Net Margin', value: '28.4%', note: 'Optimized', icon: AlertCircle, color: 'emerald' }
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border">
              <div className="flex justify-between mb-4">
                <div className={`p-3 bg-${c.color}-50 text-${c.color}-600 rounded-2xl`}>
                  <c.icon size={22} />
                </div>
                <span className="text-[10px] font-black">{c.note}</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase">{c.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{c.value}</h3>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl border">
          <h4 className="font-black mb-6">Revenue vs Payouts</h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip />
                <Bar dataKey="rev" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="payout" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl border overflow-hidden">
          <div className="p-8 border-b flex justify-between">
            <h4 className="font-black">Recent Transactions</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                placeholder="Filter..."
                className="pl-9 pr-4 py-1.5 text-xs bg-slate-50 rounded-xl outline-none"
              />
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr className="text-[10px] font-black text-slate-400 uppercase">
                <th className="px-8 py-4">TXN ID</th>
                <th className="px-8 py-4">Account</th>
                <th className="px-8 py-4">Service</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4 text-right">Amount</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {[
                { id: 'TXN-984210', user: 'Sarah Miller', type: 'ELDERLY CARE', date: 'Oct 24, 2023', amount: 850, status: 'Completed', trend: 'up' },
                { id: 'TXN-984211', user: 'James Wilson', type: 'PHYSIO', date: 'Oct 23, 2023', amount: 1200, status: 'Completed', trend: 'up' },
                { id: 'TXN-984212', user: 'Robert Chen', type: 'POST-SURGERY', date: 'Oct 22, 2023', amount: 3450, status: 'Pending', trend: 'down' }
              ].map((t, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-8 py-5 font-mono text-xs text-slate-400">{t.id}</td>
                  <td className="px-8 py-5 font-bold">{t.user}</td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-black rounded">
                      {t.type}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-slate-500">{t.date}</td>
                  <td className="px-8 py-5 text-right font-black">
                    {t.trend === 'up'
                      ? <ArrowUpRight size={14} className="inline text-emerald-500" />
                      : <ArrowDownRight size={14} className="inline text-amber-500" />}
                    ${t.amount.toLocaleString()}
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-1 rounded-full text-xs font-black ${
                      t.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-amber-50 text-amber-600'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
