import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  AlertTriangle,
  Info
} from 'lucide-react';

const Schedule = () => {
  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM"
  ];

  const days = ["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27"];

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      <header className="h-16 border-b flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold text-slate-800">Master Schedule</h2>
          <div className="flex bg-slate-100 rounded-lg p-1 ml-4">
            <button className="px-3 py-1 text-xs font-semibold bg-white rounded-md shadow-sm">Week</button>
            <button className="px-3 py-1 text-xs text-slate-500">Month</button>
            <button className="px-3 py-1 text-xs text-slate-500">Day</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r">
            <span className="text-sm font-semibold text-slate-600">
              Oct 23 - Oct 29, 2023
            </span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                <ChevronLeft size={18} />
              </button>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-400">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            <Plus size={18} /> New Shift
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-auto bg-slate-50">
          <div className="p-4 bg-white border-b flex items-center gap-4">
            <div className="relative w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search caregiver..."
                className="w-full pl-9 pr-4 py-1.5 rounded-lg border bg-slate-50 text-xs outline-none"
              />
            </div>

            <div className="ml-auto flex gap-4">
              <Legend color="blue-500" label="Elderly" />
              <Legend color="purple-500" label="Physio" />
              <Legend color="rose-500" label="Surgical" />
            </div>
          </div>

          <div className="grid grid-cols-[100px_repeat(5,1fr)] bg-white sticky top-0 z-10 shadow-sm">
            <div className="p-4 bg-slate-50 border-r" />
            {days.map(day => {
              const isActive = day.includes('Tue');
              const [d, n] = day.split(' ');
              return (
                <div
                  key={day}
                  className={`p-4 text-center border-r ${isActive ? 'bg-teal-50/50' : ''}`}
                >
                  <p className={`text-[10px] font-bold uppercase ${isActive ? 'text-teal-600' : 'text-slate-400'}`}>
                    {d}
                  </p>
                  <p className={`text-xl font-black ${isActive ? 'text-teal-700' : 'text-slate-700'}`}>
                    {n}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-[100px_repeat(5,1fr)] flex-1 bg-white">
            {timeSlots.map(time => (
              <React.Fragment key={time}>
                <div className="p-4 border-r border-b text-[10px] font-bold text-slate-400 h-24">
                  {time}
                </div>

                {days.map((day, idx) => (
                  <div
                    key={`${time}-${day}`}
                    className={`border-r border-b p-2 relative hover:bg-slate-50 ${
                      idx === 1 ? 'bg-teal-50/10' : ''
                    }`}
                  >
                    {time === "08:00 AM" && day === "Mon 23" && (
                      <ShiftCard
                        color="blue"
                        title="Elderly Care"
                        patient="Arthur Miller"
                        caregiver="Elena R."
                      />
                    )}

                    {time === "08:00 AM" && day === "Thu 26" && (
                      <ShiftCard
                        color="rose"
                        title="Surgery Post-Op"
                        patient="Maria Chen"
                        alert
                      />
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        <aside className="w-80 border-l bg-white flex flex-col p-6 overflow-y-auto">
          <Conflicts />
        </aside>
      </div>
    </div>
  );
};

/* ---------- small helpers (JS only, no TS) ---------- */

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2.5 h-2.5 rounded-full bg-${color}`} />
    <span className="text-[10px] font-bold text-slate-500 uppercase">{label}</span>
  </div>
);

const ShiftCard = ({ color, title, patient, caregiver, alert }) => (
  <div
    className={`absolute inset-2 h-20 p-2 rounded-r shadow-sm border-l-4 bg-${color}-100 border-${color}-500`}
  >
    <p className={`text-[10px] font-black uppercase text-${color}-700`}>
      {title}
    </p>
    <p className={`text-[11px] text-${color}-600 mt-1`}>
      P: {patient}
    </p>
    {caregiver && (
      <p className={`text-[10px] text-${color}-600/70`}>
        C: {caregiver}
      </p>
    )}
    {alert && (
      <AlertTriangle size={12} className="absolute top-1 right-1 text-red-600" />
    )}
  </div>
);

const Conflicts = () => (
  <>
    <div className="flex justify-between items-center mb-8">
      <h3 className="font-bold flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={20} />
        Conflicts
        <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full ml-1">
          3 Detected
        </span>
      </h3>
      <button className="text-xs text-teal-600 font-bold">Clear All</button>
    </div>

    <div className="mt-auto pt-6 border-t">
      <div className="flex gap-3 bg-slate-50 p-4 rounded-xl">
        <Info size={16} className="text-slate-400" />
        <p className="text-[11px] text-slate-500 italic">
          Workflow Tip: Approved contracts automatically generate recurring schedules.
        </p>
      </div>
    </div>
  </>
);

export default Schedule;
