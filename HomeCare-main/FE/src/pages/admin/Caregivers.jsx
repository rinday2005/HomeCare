import React from 'react';
import { Search, Plus, Filter, Star, MoreVertical, MapPin } from 'lucide-react';

const mockCaregivers = [
  {
    id: 'CG-88291',
    name: 'Elena Rodriguez',
    email: 'elena.r@caresync.com',
    skills: ['Registered Nurse', 'Elderly Care'],
    status: 'Available',
    rating: 4.9,
    reviews: 124,
    experience: '8 Years',
    avatar: 'https://picsum.photos/seed/care1/40/40'
  },
  {
    id: 'CG-88292',
    name: 'David Chen',
    email: 'd.chen@caresync.com',
    skills: ['Physical Therapy', 'Injury Rehab'],
    status: 'On-duty',
    rating: 4.7,
    reviews: 89,
    experience: '5 Years',
    avatar: 'https://picsum.photos/seed/care2/40/40'
  },
  {
    id: 'CG-88293',
    name: 'Sarah Jenkins',
    email: 's.jenkins@caresync.com',
    skills: ['Pediatric Care'],
    status: 'Offline',
    rating: 5.0,
    reviews: 210,
    experience: '12 Years',
    avatar: 'https://picsum.photos/seed/care3/40/40'
  }
];

const Caregivers = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      <header className="h-16 border-b flex items-center justify-between px-8">
        <h2 className="text-lg font-bold text-slate-800">caregiver management</h2>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
          <Plus size={18} /> add new caregiver
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
        <div className="bg-white p-4 rounded-2xl border flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
            <input
              placeholder="search by name, email, or id..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 text-sm outline-none"
            />
          </div>
          <select className="text-sm border rounded-lg px-3 py-2">
            <option>all skills</option>
          </select>
          <select className="text-sm border rounded-lg px-3 py-2">
            <option>all status</option>
          </select>
          <button className="p-2">
            <Filter size={18} />
          </button>
        </div>

        <div className="bg-white rounded-3xl border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
              <tr>
                <th className="px-8 py-5">caregiver</th>
                <th className="px-8 py-5">skills</th>
                <th className="px-8 py-5">status</th>
                <th className="px-8 py-5">rating</th>
                <th className="px-8 py-5 text-right">actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockCaregivers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="px-8 py-6 flex items-center gap-4">
                    <img src={c.avatar} className="w-12 h-12 rounded-full" alt="" />
                    <div>
                      <p className="text-sm font-bold">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.email}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    {c.skills.map((s, i) => (
                      <span key={i} className="mr-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded">
                        {s}
                      </span>
                    ))}
                  </td>
                  <td className="px-8 py-6 text-xs font-bold">{c.status}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm text-slate-700">{c.rating}</span>
                      <span className="text-[10px] text-slate-400">({c.reviews})</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">availability</p>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <p className="text-[10px] text-slate-400">available</p>
                <div className="h-1.5 bg-slate-100 rounded">
                  <div className="h-full bg-emerald-500 w-[65%]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-400">on-duty</p>
                <div className="h-1.5 bg-slate-100 rounded">
                  <div className="h-full bg-blue-500 w-[45%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border">
            <MapPin size={24} />
            <p className="text-2xl font-bold">nursing</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border">
            <Star size={24} className="fill-current text-amber-500" />
            <p className="text-2xl font-bold">4.85</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caregivers;
