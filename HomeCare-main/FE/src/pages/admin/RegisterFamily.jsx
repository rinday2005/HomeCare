import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Smartphone, 
  MapPin, 
  Mail, 
  RefreshCcw, 
  PlusCircle, 
  Trash2,
  Users,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const RegisterFamily = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: '', age: '', relationship: 'Parent' },
    { id: 2, name: '', age: '', relationship: 'Parent' }
  ]);

  const addPatient = () => {
    setPatients([
      ...patients,
      { id: Date.now(), name: '', age: '', relationship: 'Other' }
    ]);
  };

  const removePatient = (id) => {
    if (patients.length > 1) {
      setPatients(patients.filter(p => p.id !== id));
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50">
      <header className="h-16 flex-shrink-0 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <nav className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400 tracking-widest">
            <span>Families</span>
            <ChevronRight size={10} />
            <span className="text-slate-800">Add New</span>
          </nav>
          <h2 className="text-lg font-black tracking-tight text-slate-800">
            Register New Family
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50">
            Cancel
          </button>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-teal-600/20 flex items-center gap-2">
            <PlusCircle size={18} /> Create Account
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-12 max-w-5xl mx-auto w-full space-y-12">
        {/* Primary Representative */}
        <section className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
              <User size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">
                Primary Representative
              </h3>
              <p className="text-xs font-medium text-slate-400">
                Main contact point for the family account and billing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input icon={User} label="Full Name" placeholder="e.g. Harrison Murphy" />
            <Input icon={Mail} label="Email Address" type="email" placeholder="h.murphy@example.com" />
            <Input icon={Smartphone} label="Phone Number" type="tel" placeholder="(555) 000-0000" />
            <Input icon={MapPin} label="Home Address" placeholder="Street, City, State, ZIP" />
          </div>
        </section>

        {/* Account Security */}
        <section className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
              <Lock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">Account Security</h3>
              <p className="text-xs font-medium text-slate-400">
                Configure login credentials for the portal access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="label">Username</label>
              <input className="input" placeholder="h_murphy_88" />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="flex gap-2">
                <input
                  readOnly
                  value="●●●●●●●●●●●●"
                  className="input flex-1"
                />
                <button className="px-4 py-3 bg-slate-100 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2">
                  <RefreshCcw size={14} /> Generate
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm font-bold text-slate-600">
              Force password change on first login
            </span>
          </div>
        </section>

        {/* Patients */}
        <section className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10 space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Users size={24} className="text-amber-600" />
              <div>
                <h3 className="text-lg font-black text-slate-800">Initial Patients</h3>
                <p className="text-xs text-slate-400">
                  Add family members who will receive care services.
                </p>
              </div>
            </div>
            <button onClick={addPatient} className="btn-outline">
              <PlusCircle size={14} /> Add Patient
            </button>
          </div>

          <div className="space-y-4">
            {patients.map(p => (
              <div key={p.id} className="grid grid-cols-[1fr_100px_150px_auto] gap-4 items-end p-6 bg-slate-50 rounded-3xl">
                <input className="input" placeholder="Patient Name" />
                <input className="input" type="number" placeholder="Age" />
                <select className="input">
                  <option>Parent</option>
                  <option>Spouse</option>
                  <option>Self</option>
                  <option>Other</option>
                </select>
                <button onClick={() => removePatient(p.id)}>
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="flex items-center gap-4 bg-teal-900 rounded-[32px] p-8 text-white">
          <ShieldCheck size={32} className="text-teal-400" />
          <div className="flex-1">
            <h4 className="text-lg font-black">Ready to Finalize Registration?</h4>
            <p className="text-sm text-teal-200">
              An invitation will be sent to the primary representative.
            </p>
          </div>
          <button className="bg-teal-400 text-teal-900 px-10 py-4 rounded-2xl font-black">
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  );
};

/* small helper */
const Input = ({ icon: Icon, label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest pl-1">
      {label}
    </label>
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />}
      <input {...props} className="w-full pl-12 pr-4 py-3 rounded-2xl border bg-slate-50 text-sm" />
    </div>
  </div>
);

export default RegisterFamily;
