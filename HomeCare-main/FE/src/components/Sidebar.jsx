import React from 'react';
import {
  LayoutDashboard,
  UserRound,
  Users,
  ClipboardList,
  CalendarDays,
  FileText,
  CreditCard,
  BarChart3,
  ShieldAlert,
  Moon,
  Stethoscope
} from 'lucide-react';

const Sidebar = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'dashboard', icon: LayoutDashboard },
    { id: 'caregivers', label: 'caregivers', icon: UserRound },
    { id: 'families', label: 'families', icon: Users },
    { id: 'patients', label: 'patients', icon: Stethoscope },
    { id: 'requests', label: 'requests', icon: ClipboardList, badge: 12 },
    { id: 'schedules', label: 'schedules', icon: CalendarDays },
    { id: 'contracts', label: 'contracts', icon: FileText },
    { id: 'payments', label: 'payments', icon: CreditCard },
    { id: 'reports', label: 'reports', icon: BarChart3 },
    { id: 'incidents', label: 'incidents', icon: ShieldAlert, badge: 1, badgeColor: 'bg-amber-100 text-amber-600' }
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
          <Stethoscope size={24} />
        </div>
        <h1 className="text-xl font-bold text-slate-800">caresync</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                isActive
                  ? 'bg-teal-50 text-teal-700 font-semibold'
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-teal-600' : 'text-slate-400'} />
              <span className="flex-1 text-left text-sm">{item.label}</span>
              {item.badge && (
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor || 'bg-red-100 text-red-600'}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
          <Moon size={18} />
          <span>appearance</span>
        </button>

        <div className="mt-4 flex items-center gap-3 px-3 py-2">
          <img
            src="https://picsum.photos/seed/admin/40/40"
            className="w-9 h-9 rounded-full border"
            alt="profile"
          />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-800">alex johnson</p>
            <p className="text-[11px] text-slate-400 truncate">senior admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
