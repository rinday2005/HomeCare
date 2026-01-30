import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";
import { CARE_LOGS_HISTORY, CAREGIVER_INFO } from '../../data/Caregiver/CareLogs';

const CareLogs = () => {
    const navigate = useNavigate();

    // State for filters
    const [searchQuery, setSearchQuery] = useState('');
    const [dateRange, setDateRange] = useState('Last 30 days');
    const [selectedPatient, setSelectedPatient] = useState('All Patients');

    // Derived data for stats
    const totalLogs = CARE_LOGS_HISTORY.length;
    const pendingDrafts = CARE_LOGS_HISTORY.filter(log => log.status === 'Draft').length;
    // Mock avg shift calculation or hardcoded
    const avgShiftLength = "4.2h";

    const filteredLogs = useMemo(() => {
        let logs = CARE_LOGS_HISTORY;

        // Filter by Search (Patient Name)
        if (searchQuery) {
            logs = logs.filter(log =>
                log.patientName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by Patient Select
        if (selectedPatient !== 'All Patients') {
            logs = logs.filter(log => log.patientName === selectedPatient);
        }

        // Date range filter is mock for now as we don't have real date objects in simple mock data usually

        return logs;
    }, [searchQuery, selectedPatient]);

    // Unique patients for dropdown
    const uniquePatients = ['All Patients', ...new Set(CARE_LOGS_HISTORY.map(log => log.patientName))];

    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 custom-scrollbar font-manrope">
            {/* Header */}
            <ScrollAnimation animation="fade-down" delay={0.1}>
                <header className="sticky top-0 z-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-100 dark:border-stone-800 px-8 py-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold text-stone-800 dark:text-white tracking-tight">Care Logs History</h1>
                        <p className="text-sm font-medium text-stone-400 mt-1">Review and manage your past submissions</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="p-2 text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full relative transition-colors">
                            <span className="material-symbols-outlined text-2xl">notifications</span>
                            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-stone-900"></span>
                        </button>
                        <div className="flex items-center gap-4 pl-6 border-l border-stone-100 dark:border-stone-800 group">
                            <Link to="/caregiver/profile">
                                <img alt="Caregiver profile" className="w-12 h-12 rounded-2xl object-cover shadow-lg ring-2 ring-white dark:ring-stone-800 group-hover:ring-[#5fa5ba] transition-all cursor-pointer" src={CAREGIVER_INFO.profileImage} />
                            </Link>
                        </div>
                    </div>
                </header>
            </ScrollAnimation>

            <div className="p-8 max-w-[1700px] mx-auto space-y-8">

                {/* Filters Section */}
                <ScrollAnimation animation="fade-right" delay={0.2}>
                    <div className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800 shadow-sm flex flex-col md:flex-row gap-6 items-end">
                        <div className="flex-1 w-full">
                            <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2 ml-1">Search Patients</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#5fa5ba] transition-colors">search</span>
                                <input
                                    className="w-full pl-12 pr-4 py-3 bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 rounded-2xl focus:ring-2 focus:ring-[#5fa5ba] focus:border-[#5fa5ba] text-sm font-bold text-stone-700 dark:text-stone-200 outline-none transition-all placeholder:font-medium"
                                    placeholder="Search by name..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-56">
                            <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2 ml-1">Date Range</label>
                            <select
                                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 rounded-2xl focus:ring-2 focus:ring-[#5fa5ba] focus:border-[#5fa5ba] text-sm font-bold text-stone-700 dark:text-stone-200 outline-none transition-all cursor-pointer appearance-none"
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                            >
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 3 months</option>
                                <option>Custom range</option>
                            </select>
                        </div>
                        <div className="w-full md:w-56">
                            <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2 ml-1">Patient</label>
                            <select
                                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 rounded-2xl focus:ring-2 focus:ring-[#5fa5ba] focus:border-[#5fa5ba] text-sm font-bold text-stone-700 dark:text-stone-200 outline-none transition-all cursor-pointer appearance-none"
                                value={selectedPatient}
                                onChange={(e) => setSelectedPatient(e.target.value)}
                            >
                                {uniquePatients.map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>
                        <button className="bg-[#5fa5ba] hover:bg-[#4d8ca0] text-white px-8 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#5fa5ba]/20 active:scale-95 h-[48px]">
                            <span className="material-symbols-outlined text-xl">filter_list</span>
                            Apply Filters
                        </button>
                    </div>
                </ScrollAnimation>

                {/* Table Section */}
                <ScrollAnimation animation="fade-up" delay={0.3}>
                    <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#5fa5ba]/5 dark:bg-[#5fa5ba]/10 border-b border-stone-100 dark:border-stone-800">
                                    <tr>
                                        <th className="px-8 py-6 text-[10px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-widest">Date</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-widest">Patient Name</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-widest">Shift Time</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-widest">Status</th>
                                        <th className="px-8 py-6 text-[10px] font-black text-stone-500 dark:text-stone-400 uppercase tracking-widest text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                                    {filteredLogs.map((log) => (
                                        <tr key={log.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-all group">
                                            <td className="px-8 py-6 font-bold text-stone-900 dark:text-white">{log.date}</td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shadow-inner ${log.color ? log.color.replace('bg-', 'bg-opacity-20 bg-') : 'bg-[#5fa5ba]/20 text-[#5fa5ba]'}`}>
                                                        {log.initials}
                                                    </div>
                                                    <span className="text-sm font-bold text-stone-700 dark:text-stone-300 group-hover:text-[#5fa5ba] transition-colors">{log.patientName}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-sm font-bold text-stone-500 dark:text-stone-400">{log.time}</td>
                                            <td className="px-8 py-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${log.status === 'Submitted'
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${log.status === 'Submitted' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                                                    {log.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <Link to={log.status === 'Draft' ? `/caregiver/edit-log/${log.id}` : `/caregiver/care-logs/${log.id}`}>
                                                    <button className="text-[#5fa5ba] hover:text-[#4d8ca0] font-extrabold text-sm inline-flex items-center gap-2 hover:bg-[#5fa5ba]/10 px-4 py-2 rounded-xl transition-all">
                                                        {log.status === 'Draft' ? 'Edit Draft' : 'View Log'}
                                                        <span className="material-symbols-outlined text-lg">
                                                            {log.status === 'Draft' ? 'edit_note' : 'visibility'}
                                                        </span>
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination (Visual Only) */}
                        <div className="px-8 py-6 bg-stone-50 dark:bg-stone-900/50 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                            <span className="text-xs font-bold text-stone-500 dark:text-stone-400">Showing 1-{filteredLogs.length} of {totalLogs} logs</span>
                            <div className="flex gap-2">
                                <button className="p-2 border border-stone-200 dark:border-stone-800 rounded-xl hover:bg-white dark:hover:bg-stone-800 transition-colors disabled:opacity-50 text-stone-400" disabled>
                                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                                </button>
                                <button className="w-9 h-9 bg-[#5fa5ba] text-white rounded-xl font-bold text-xs shadow-lg shadow-[#5fa5ba]/30">1</button>
                                <button className="w-9 h-9 hover:bg-white dark:hover:bg-stone-800 border border-transparent hover:border-stone-200 dark:hover:border-stone-800 rounded-xl font-bold text-xs transition-colors text-stone-500">2</button>
                                <button className="w-9 h-9 hover:bg-white dark:hover:bg-stone-800 border border-transparent hover:border-stone-200 dark:hover:border-stone-800 rounded-xl font-bold text-xs transition-colors text-stone-500">3</button>
                                <button className="p-2 border border-stone-200 dark:border-stone-800 rounded-xl hover:bg-white dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400">
                                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Summary Cards */}
                <ScrollAnimation animation="fade-up" delay={0.4}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">This Month</span>
                                <div className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                    <span className="material-symbols-outlined">article</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2 relative z-10">
                                <span className="text-4xl font-black text-stone-800 dark:text-white">18</span>
                                <span className="text-xs font-bold text-stone-400">logs submitted</span>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-[#5fa5ba]/5 rotate-12 group-hover:scale-110 transition-transform">article</span>
                        </div>

                        <div className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Pending Drafts</span>
                                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">pending_actions</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2 relative z-10">
                                <span className="text-4xl font-black text-stone-800 dark:text-white">{pendingDrafts}</span>
                                <span className="text-xs font-bold text-stone-400">require attention</span>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-amber-500/5 rotate-12 group-hover:scale-110 transition-transform">pending_actions</span>
                        </div>

                        <div className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Avg Shift Length</span>
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">timer</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2 relative z-10">
                                <span className="text-4xl font-black text-stone-800 dark:text-white">{avgShiftLength}</span>
                                <span className="text-xs font-bold text-stone-400">per appointment</span>
                            </div>
                            <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-blue-500/5 rotate-12 group-hover:scale-110 transition-transform">timer</span>
                        </div>
                    </div>
                </ScrollAnimation>

                <footer className="p-8 text-center text-stone-400 text-xs font-bold mt-auto">
                    © 2024 HomeCare Systems Inc. All Rights Reserved. • <a href="#" className="hover:text-[#5fa5ba] underline transition-colors">Privacy Policy</a>
                </footer>
            </div>
        </div>
    );
};

export default CareLogs;