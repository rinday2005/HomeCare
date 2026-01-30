import React from 'react';
import {
  FileDown,
  Share2,
  TrendingUp,
  AlertTriangle,
  Clock,
  Star,
  Download,
  Search
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

const radarData = [
  { subject: 'Punctuality', A: 96, fullMark: 100 },
  { subject: 'Empathy', A: 92, fullMark: 100 },
  { subject: 'Documentation', A: 89, fullMark: 100 },
  { subject: 'Skillset', A: 95, fullMark: 100 },
  { subject: 'Communication', A: 94, fullMark: 100 },
  { subject: 'Speed', A: 88, fullMark: 100 }
];

const Reports = () => {
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Operational Reports</h2>
          <p className="text-xs text-slate-400">Oct 01, 2023 - Oct 31, 2023</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm">
            <Share2 size={16} /> Share
          </button>
          <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <FileDown size={16} /> Download PDF
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Shifts', value: '4,210', icon: Clock, trend: '+12%', bg: 'bg-indigo-50 text-indigo-600' },
            { label: 'High-Priority Incidents', value: '3', icon: AlertTriangle, trend: '-2', bg: 'bg-rose-50 text-rose-600' },
            { label: 'Avg. Completion Time', value: '4.2h', icon: TrendingUp, trend: 'Steady', bg: 'bg-emerald-50 text-emerald-600' },
            { label: 'Reliability Score', value: '98.4%', icon: Star, trend: 'Target achieved', bg: 'bg-amber-50 text-amber-600' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <div className={`p-2 rounded-xl inline-flex ${s.bg}`}>
                <s.icon size={22} />
              </div>
              <p className="text-xs text-slate-500 uppercase mt-4">{s.label}</p>
              <h3 className="text-3xl font-black">{s.value}</h3>
              <p className="text-[11px] text-emerald-600 font-bold mt-1">{s.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border">
            <h4 className="font-bold mb-4">Caregiver Activity Heatmap</h4>
            <div className="space-y-1">
              {days.map(day => (
                <div key={day} className="flex gap-1">
                  <span className="w-10 text-[10px] font-bold text-slate-400">{day}</span>
                  <div className="grid grid-cols-12 gap-1 flex-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-8 rounded-sm"
                        style={{ backgroundColor: `rgba(79,70,229,${Math.random()})` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-1 pt-2">
                <span className="w-10" />
                <div className="grid grid-cols-12 gap-1 flex-1">
                  {hours.map(h => (
                    <span key={h} className="text-[10px] text-center text-slate-400">
                      {h.split(':')[0]}h
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold mb-4">Performance Metrics</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                  <Radar dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="p-6 border-b flex justify-between">
            <h4 className="font-bold">Staff Performance Deep-Dive</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input className="pl-9 pr-4 py-2 border rounded-lg text-sm bg-slate-50" placeholder="Filter by name..." />
            </div>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr className="text-[10px] uppercase text-slate-400">
                <th className="px-6 py-4">Caregiver</th>
                <th className="px-6 py-4">Shifts</th>
                <th className="px-6 py-4">Late</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Efficiency</th>
                <th className="px-6 py-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { name: 'Elena Martinez', shifts: 48, late: 0, rating: 4.98, score: 98 },
                { name: 'David Richards', shifts: 42, late: 1, rating: 4.95, score: 92 },
                { name: 'Sandra Kim', shifts: 56, late: 3, rating: 4.72, score: 84 }
              ].map((s, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">{s.name}</td>
                  <td className="px-6 py-4">{s.shifts}</td>
                  <td className="px-6 py-4 text-rose-500 font-bold">{s.late}</td>
                  <td className="px-6 py-4 flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" /> {s.rating}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 rounded-full h-1.5">
                      <div className="h-full bg-teal-600" style={{ width: `${s.score}%` }} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-teal-600 text-xs font-bold">View Log</button>
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

export default Reports;
