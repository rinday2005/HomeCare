import React from 'react';
import {
  Users,
  ClipboardCheck,
  Handshake,
  TrendingUp,
  Search,
  Bell,
  ArrowRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 22 },
  { name: 'Sat', value: 30 },
  { name: 'Sun', value: 28 }
];

const pieData = [
  { name: 'Elderly Care', value: 45, color: '#6366f1' },
  { name: 'Nursing', value: 25, color: '#10b981' },
  { name: 'Therapy', value: 20, color: '#f59e0b' },
  { name: 'Pediatric', value: 10, color: '#f43f5e' }
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">dashboard overview</h2>
        <div className="flex items-center gap-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              placeholder="search data..."
              className="w-full pl-10 pr-4 py-1.5 rounded-full border bg-slate-50 text-sm outline-none"
            />
          </div>
          <button className="relative text-slate-400">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'active caregivers', value: '142', trend: '+12%', icon: Users, bg: 'bg-blue-50 text-blue-600' },
            { label: 'pending requests', value: '24', trend: 'high', icon: ClipboardCheck, bg: 'bg-amber-50 text-amber-600' },
            { label: 'active contracts', value: '89', trend: '+5%', icon: Handshake, bg: 'bg-teal-50 text-teal-600' },
            { label: 'monthly revenue', value: '$42.5k', trend: '+22%', icon: TrendingUp, bg: 'bg-emerald-50 text-emerald-600' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <div className="flex justify-between mb-4">
                <div className={`p-2 rounded-lg ${s.bg}`}>
                  <s.icon size={22} />
                </div>
                <span className="text-[11px] font-bold">{s.trend}</span>
              </div>
              <p className="text-xs text-slate-500 uppercase">{s.label}</p>
              <h3 className="text-3xl font-bold">{s.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border">
            <h4 className="font-bold mb-4">platform growth</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0d9488" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold mb-6">service distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={60} outerRadius={80} dataKey="value">
                    {pieData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="p-6 border-b flex justify-between">
            <h4 className="font-bold">requests needing attention</h4>
            <button className="text-teal-600 flex items-center gap-1">
              view all <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
