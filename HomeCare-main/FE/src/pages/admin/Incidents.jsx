import React from 'react';
import { Siren, Search, Filter, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const mockIncidents = [
  { id: 'INC-001', severity: 'High', type: 'Medical Emergency', reporter: 'Le Thi B', date: '2024-02-20', status: 'Open', description: 'Patient experienced sudden shortness of breath.' },
  { id: 'INC-002', severity: 'Medium', type: 'Property Damage', reporter: 'Tran Thi C', date: '2024-02-18', status: 'Investigating', description: 'Accidental breakage of vase.' },
  { id: 'INC-003', severity: 'Low', type: 'Late Arrival', reporter: 'System', date: '2024-02-15', status: 'Resolved', description: 'Caregiver arrived 30 mins late.' },
];

const Incidents = () => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-50 border-red-100';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Low': return 'text-blue-600 bg-blue-50 border-blue-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Open': return <AlertTriangle size={14} />;
      case 'Investigating': return <Clock size={14} />;
      case 'Resolved': return <CheckCircle size={14} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="h-16 bg-white border-b flex items-center justify-between px-8">
        <h2 className="text-xl font-bold text-slate-800">Incidents & Reports</h2>
        <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">
          <Siren size={16} /> Report Incident
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-slate-500 text-sm font-medium uppercase mb-2">Open Incidents</div>
                <div className="text-3xl font-bold text-red-600">3</div>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-slate-500 text-sm font-medium uppercase mb-2">Under Investigation</div>
                <div className="text-3xl font-bold text-amber-600">5</div>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="text-slate-500 text-sm font-medium uppercase mb-2">Resolved (This Month)</div>
                <div className="text-3xl font-bold text-green-600">12</div>
            </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              placeholder="Search incidents..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 text-sm font-medium">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
            {mockIncidents.map((incident) => (
                <div key={incident.id} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(incident.severity)}`}>
                                {incident.severity}
                            </span>
                            <h3 className="font-bold text-slate-800">{incident.type}</h3>
                            <span className="text-sm text-slate-400">#{incident.id}</span>
                        </div>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                            {getStatusIcon(incident.status)} {incident.status}
                        </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{incident.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                        <div className="flex gap-6">
                            <span>Reported by: <span className="font-medium text-slate-700">{incident.reporter}</span></span>
                            <span>Date: <span className="font-medium text-slate-700">{incident.date}</span></span>
                        </div>
                        <button className="text-blue-600 font-medium hover:underline">View Details</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Incidents;
