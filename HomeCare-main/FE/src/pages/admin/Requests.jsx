import React, { useState } from 'react';
import { Search, Filter, Plus, CheckCircle2, XCircle, Eye, MoreVertical } from 'lucide-react';

const mockRequests = [
  {
    id: 'INC-8842',
    familyRepresentative: 'Sarah Miller',
    patientName: 'Arthur Miller',
    patientAge: 82,
    serviceType: 'Elderly Care',
    period: 'Oct 24 - Oct 31, 2023',
    schedule: 'Daily, 08:00 - 16:00 (8h)',
    status: 'Pending Approval',
    paymentAmount: 850.0,
    paymentMethod: 'Paid Offline (Referral)',
    priority: 'High',
    avatar: 'https://picsum.photos/seed/sarah/40/40'
  },
  {
    id: 'INC-8839',
    familyRepresentative: 'James Wilson',
    patientName: 'Self',
    patientAge: 45,
    serviceType: 'Physiotherapy',
    period: 'Oct 26 - Nov 10, 2023',
    schedule: 'MWF, 10:00 - 11:00 (1h)',
    status: 'Pending Approval',
    paymentAmount: 1200.0,
    paymentMethod: 'Credit Card (Paid)',
    priority: 'Medium',
    avatar: 'https://picsum.photos/seed/james/40/40'
  },
  {
    id: 'INC-8835',
    familyRepresentative: 'Elena Rodriguez',
    patientName: 'Ricardo R.',
    patientAge: 75,
    serviceType: 'Home Nursing',
    period: 'Oct 20 - Oct 25, 2023',
    schedule: 'Daily, 24/7 Service',
    status: 'Approved',
    paymentAmount: 2400.0,
    paymentMethod: 'Invoice Generated',
    priority: 'Medium',
    avatar: 'https://picsum.photos/seed/elena/40/40'
  }
];

const Requests = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">Care Requests</h2>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow">
          <Plus size={18} /> New Request
        </button>
      </header>

      <div className="bg-white border-b px-8">
        <div className="flex gap-8">
          {['All', 'Pending', 'Approved', 'Rejected'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-semibold relative ${
                activeTab === tab ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {tab === 'Pending' && (
                <span className="ml-2 bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  12
                </span>
              )}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="bg-white p-4 rounded-xl border shadow-sm flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              placeholder="Search patients or families..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-slate-50 text-sm outline-none"
            />
          </div>
          <div className="flex gap-3">
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>All Service Types</option>
              <option>Elderly Care</option>
              <option>Physiotherapy</option>
            </select>
            <select className="border rounded-lg px-4 py-2 text-sm">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
            </select>
            <button className="p-2 border rounded-lg text-slate-400 hover:bg-slate-50">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] uppercase text-slate-400 font-bold">
              <tr>
                <th className="px-6 py-4">Family / Patient</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Period</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {mockRequests.map(req => (
                <tr key={req.id} className="hover:bg-slate-50">
                  <td className="px-6 py-5 flex gap-3 items-center">
                    <img src={req.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-bold">{req.familyRepresentative}</p>
                      <p className="text-xs text-slate-400">
                        Patient: {req.patientName} ({req.patientAge})
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2 py-0.5 text-xs font-bold rounded bg-teal-100 text-teal-700">
                      {req.serviceType}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-semibold">{req.period}</p>
                    <p className="text-xs text-slate-400">{req.schedule}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      req.status === 'Approved'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-amber-50 text-amber-600'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-bold">${req.paymentAmount.toFixed(2)}</p>
                    <p className="text-xs text-slate-400">{req.paymentMethod}</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      {req.status === 'Pending Approval' && (
                        <>
                          <button className="bg-teal-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                            Assign
                          </button>
                          <button className="p-2 hover:text-emerald-500">
                            <CheckCircle2 size={18} />
                          </button>
                          <button className="p-2 hover:text-red-500">
                            <XCircle size={18} />
                          </button>
                        </>
                      )}
                      <button className="p-2 hover:text-teal-600">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-6 py-4 bg-slate-50 flex justify-between items-center">
            <p className="text-xs text-slate-400">Showing 1–10 of 42</p>
            <div className="flex gap-1">
              <button className="w-8 h-8 bg-teal-600 text-white rounded-lg text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-lg text-slate-400">2</button>
              <button className="w-8 h-8 rounded-lg text-slate-400">3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
