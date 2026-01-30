import React from 'react';
import { Search, Filter, MoreVertical, Home, Phone, Mail, User } from 'lucide-react';

const mockFamilies = [
  { id: 'FAM-001', name: 'Nguyen Van A Family', contactPerson: 'Nguyen Van A', phone: '0901234567', email: 'nguyenvana@example.com', address: '123 Le Loi, District 1, HCMC', status: 'Active', members: 3 },
  { id: 'FAM-002', name: 'Tran Thi B Family', contactPerson: 'Tran Thi B', phone: '0909876543', email: 'tranthib@example.com', address: '456 Nguyen Hue, District 1, HCMC', status: 'Active', members: 2 },
  { id: 'FAM-003', name: 'Le Van C Family', contactPerson: 'Le Van C', phone: '0912345678', email: 'levanc@example.com', address: '789 Hai Ba Trung, District 3, HCMC', status: 'Inactive', members: 4 },
];

const Families = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Inactive': return 'text-slate-500 bg-slate-100';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">Families Management</h2>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90">
          <Home size={16} /> Add New Family
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50">
        {/* Filters */}
        <div className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              placeholder="Search families..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 text-sm font-medium">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-700">Family ID</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Family Name</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Contact Person</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Contact Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Members</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockFamilies.map((family) => (
                <tr key={family.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-900">{family.id}</td>
                  <td className="px-6 py-4 text-slate-900 font-medium">{family.name}</td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="flex items-center gap-2">
                        <User size={14} className="text-slate-400" />
                        {family.contactPerson}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <div className="flex flex-col gap-1 text-xs">
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-slate-400" />
                            {family.phone}
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={12} className="text-slate-400" />
                            {family.email}
                        </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{family.members}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(family.status)}`}>
                      {family.status}
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

export default Families;
