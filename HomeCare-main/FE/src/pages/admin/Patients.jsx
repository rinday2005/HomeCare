import React from 'react';
import { Search, Plus, MoreVertical, UserCheck, Clock } from 'lucide-react';

const Patients = () => {
  const patientData = [
    { name: 'Jane Cooper', id: 'HC-9231', rep: 'Robert Cooper', repType: 'Son / Primary', caregiver: 'Eleanor Pena', plan: 'Chronic Care', status: 'At Home', statusColor: 'bg-emerald-500', avatar: 'https://picsum.photos/seed/p1/40/40' },
    { name: 'Cody Fisher', id: 'HC-8821', rep: 'Arlene McCoy', repType: 'Daughter', caregiver: 'Guy Hawkins', plan: 'Post-Op Recovery', status: 'Hospitalized', statusColor: 'bg-rose-500', avatar: 'https://picsum.photos/seed/p2/40/40' },
    { name: 'Esther Howard', id: 'HC-7742', rep: 'Cameron W.', repType: 'Spouse', caregiver: 'Brooklyn Simmons', plan: 'Stable', status: 'At Home', statusColor: 'bg-emerald-500', avatar: 'https://picsum.photos/seed/p3/40/40' },
    { name: 'Jenny Wilson', id: 'HC-4512', rep: 'Leslie Alex', repType: 'Nephew', caregiver: 'Unassigned', plan: 'Chronic Care', status: 'Service Ending', statusColor: 'bg-amber-500', avatar: 'https://picsum.photos/seed/p4/40/40' }
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="h-20 bg-white border-b px-10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Patient Directory</h2>
          <p className="text-sm text-slate-500">Manage and track care for all active patients.</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
          <Plus size={20} /> Add New Patient
        </button>
      </header>

      <div className="px-10 py-5 flex gap-4 bg-white/50 border-b">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            placeholder="Search by name, ID, or representative..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border bg-white text-sm outline-none"
          />
        </div>
        <button className="px-4 py-3 rounded-xl border bg-white text-sm font-bold text-slate-600">
          Family Group: <span className="text-slate-800">All</span>
        </button>
        <button className="px-4 py-3 rounded-xl border bg-white text-sm font-bold text-slate-600">
          Health Status: <span className="text-slate-800">All</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-10">
        <div className="bg-white rounded-3xl border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Patient</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Family / Representative</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Assigned Caregiver</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Care Plan</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase">Quick Status</th>
                <th />
              </tr>
            </thead>
            <tbody className="divide-y">
              {patientData.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-8 py-6">
                    <div className="flex gap-4">
                      <img src={p.avatar} className="w-12 h-12 rounded-2xl" alt="" />
                      <div>
                        <p className="font-extrabold">{p.name}</p>
                        <p className="text-xs text-slate-400 font-bold">ID: {p.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold">{p.rep}</p>
                    <p className="text-[10px] text-slate-400 uppercase">{p.repType}</p>
                  </td>
                  <td className="px-8 py-6">
                    {p.caregiver === 'Unassigned' ? (
                      <div className="flex items-center gap-2 text-slate-300 italic">
                        <Clock size={14} /> Unassigned
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-teal-600 font-bold">
                        <UserCheck size={14} /> {p.caregiver}
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1.5 rounded-full bg-slate-100 text-[11px] font-black uppercase">
                      {p.plan}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${p.statusColor}`} />
                      <span className="text-[11px] font-black uppercase">{p.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-300 hover:text-slate-600">
                      <MoreVertical size={20} />
                    </button>
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

export default Patients;
