import React from 'react';
import { FileSignature, Search, Download, Filter, MoreVertical, CheckCircle2, Clock, XCircle } from 'lucide-react';

const mockContracts = [
  { id: 'CTR-2024-001', family: 'Nguyen Van A', caregiver: 'Le Thi B', type: 'Full-time', startDate: '2024-01-15', status: 'Active', value: '$1,200/mo' },
  { id: 'CTR-2024-002', family: 'Tran Thi C', caregiver: 'Pham Van D', type: 'Part-time', startDate: '2024-02-01', status: 'Pending', value: '$600/mo' },
  { id: 'CTR-2024-003', family: 'Hoang Van E', caregiver: 'Nguyen Thi F', type: 'Hourly', startDate: '2024-02-10', status: 'Expired', value: '$25/hr' },
];

const Contracts = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-amber-600 bg-amber-50';
      case 'Expired': return 'text-slate-500 bg-slate-100';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">Contracts Management</h2>
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-slate-50">
            <Download size={16} /> Export
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90">
            <FileSignature size={16} /> New Contract
            </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50">
        {/* Filters */}
        <div className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              placeholder="Search contracts..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 text-sm font-medium">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-700">Contract ID</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Family</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Caregiver</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Type</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Start Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Value</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockContracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-900">{contract.id}</td>
                  <td className="px-6 py-4 text-slate-600">{contract.family}</td>
                  <td className="px-6 py-4 text-slate-600">{contract.caregiver}</td>
                  <td className="px-6 py-4 text-slate-600">{contract.type}</td>
                  <td className="px-6 py-4 text-slate-600">{contract.startDate}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{contract.value}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                      {contract.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={16} />
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

export default Contracts;
