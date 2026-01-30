import React from 'react';
import { Link } from 'react-router-dom';
import {
    CAREGIVER_INFO,
    DASHBOARD_STATS,
    UPCOMING_SHIFTS,
    RECENT_LOGS_MINI
} from '../../data/Caregiver/Dashboard';
import { FAMILY_MEMBERS } from '../../data/Family/patients';
import ScrollAnimation from "@/components/ui/scroll-animation";

const ACTIVE_PATIENT = FAMILY_MEMBERS[0];

const Dashboard = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 font-manrope">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-100 dark:border-stone-800 px-8 py-5 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold text-stone-800 dark:text-white tracking-tight">Caregiver Dashboard</h1>
                    <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mt-1">Welcome back, {DASHBOARD_STATS.caregiverName}</p>
                </div>
                <div className="flex items-center gap-5">
                    <button className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-[#5fa5ba] hover:bg-[#5fa5ba]/10 rounded-full transition-all relative">
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-stone-900"></span>
                    </button>
                    <div className="flex items-center gap-4 pl-6 border-l border-stone-100 dark:border-stone-800 group">
                        <Link to="/caregiver/profile">
                            <img
                                alt="Caregiver profile"
                                className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white dark:ring-stone-800 group-hover:ring-[#5fa5ba] transition-all cursor-pointer"
                                src={CAREGIVER_INFO.profileImage}
                            />
                        </Link>
                    </div>
                </div>
            </header>

            <div className="p-8 max-w-[1600px] mx-auto space-y-8">
                {/* Top Section: Active Shift & Overview */}
                <ScrollAnimation animation="fade-up" delay={0.1}>
                    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        {/* Active Shift Card */}
                        <div className="xl:col-span-2 bg-gradient-to-br from-[#5fa5ba] to-[#458194] rounded-[2rem] p-8 text-white shadow-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                            {/* Decorative Background Icons */}
                            <span className="material-symbols-outlined absolute -top-10 -right-10 text-[18rem] text-white/5 rotate-12 transition-transform group-hover:rotate-6">health_and_safety</span>

                            <div className="flex-1 space-y-5 relative z-10 w-full text-center md:text-left">
                                <div>
                                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        Active Shift
                                    </span>
                                    <h2 className="text-3xl font-extrabold mt-3 tracking-tight">Current Appointment</h2>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                        </div>
                                        <span className="text-lg font-bold">Mrs. {ACTIVE_PATIENT.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                        </div>
                                        <span className="font-medium text-blue-50">09:00 AM - 01:00 PM (4 hours)</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                        </div>
                                        <span className="font-medium text-blue-50">{ACTIVE_PATIENT.address}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-shrink-0 relative z-10 flex flex-col items-center">
                                <Link to="/caregiver/active-shift" className="bg-white text-[#5fa5ba] hover:bg-blue-50 px-8 py-5 rounded-2xl font-black text-lg shadow-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group/btn">
                                    <span className="material-symbols-outlined text-2xl group-hover/btn:rotate-12 transition-transform">login</span>
                                    QUICK CHECK-IN
                                </Link>
                                <p className="text-white/80 text-xs mt-3 text-center italic font-medium">Arrived at location? Tap to start log.</p>
                            </div>
                        </div>

                        {/* Today's Overview */}
                        <div className="bg-white dark:bg-stone-900 rounded-[2rem] p-8 shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-stone-800 dark:text-white">
                                <span className="w-8 h-8 rounded-lg bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-lg">analytics</span>
                                </span>
                                Today's Overview
                            </h3>
                            <div className="space-y-4 flex-1">
                                <div className="flex justify-between items-center p-4 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-100 dark:border-stone-800">
                                    <span className="text-stone-500 dark:text-stone-400 font-bold text-xs uppercase tracking-wider">Total Hours</span>
                                    <span className="font-black text-xl text-stone-800 dark:text-white">{DASHBOARD_STATS.totalHours}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-100 dark:border-stone-800">
                                    <span className="text-stone-500 dark:text-stone-400 font-bold text-xs uppercase tracking-wider">Completed Shifts</span>
                                    <span className="font-black text-xl text-stone-800 dark:text-white">{DASHBOARD_STATS.completedShifts}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-100 dark:border-stone-800">
                                    <span className="text-stone-500 dark:text-stone-400 font-bold text-xs uppercase tracking-wider">Incidents</span>
                                    <span className="font-black text-xl text-emerald-500">{DASHBOARD_STATS.incidents}</span>
                                </div>
                            </div>
                            <Link to="/caregiver/my-schedule" className="w-full mt-6 py-3 text-[#5fa5ba] border-2 border-[#5fa5ba]/20 hover:bg-[#5fa5ba] hover:text-white rounded-xl transition-all font-bold text-sm text-center">
                                View Full Schedule
                            </Link>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Middle Section: Upcoming & Recent Logs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upcoming Today */}
                    <ScrollAnimation animation="fade-up" delay={0.2} className="h-full">
                        <section className="space-y-5 h-full">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-xl font-bold flex items-center gap-2 text-stone-800 dark:text-white">
                                    <span className="material-symbols-outlined text-[#5fa5ba]">event_note</span>
                                    Upcoming Today
                                </h2>
                                <span className="text-sm text-stone-400 font-bold uppercase tracking-wider">May 24, 2024</span>
                            </div>
                            <div className="space-y-4">
                                {UPCOMING_SHIFTS.map((shift, index) => (
                                    <div key={index} className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400 font-bold text-lg">
                                                    {shift.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-stone-800 dark:text-white">{shift.name}</h4>
                                                    <p className="text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1 font-medium mt-0.5">
                                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                                        {shift.addr}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-sm font-black text-[#5fa5ba] bg-[#5fa5ba]/10 px-3 py-1 rounded-lg block mb-1">{shift.time}</span>
                                                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Scheduled</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 flex gap-2">
                                            {shift.tags.map((tag, i) => (
                                                <span key={i} className="px-4 py-1.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-xl text-xs font-bold border border-stone-200 dark:border-stone-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </ScrollAnimation>

                    {/* Recent Care Logs */}
                    <ScrollAnimation animation="fade-up" delay={0.3} className="h-full">
                        <section className="space-y-5 h-full">
                            <div className="flex items-center justify-between px-1">
                                <h2 className="text-xl font-bold flex items-center gap-2 text-stone-800 dark:text-white">
                                    <span className="material-symbols-outlined text-[#5fa5ba]">history_edu</span>
                                    Recent Care Logs
                                </h2>
                                <Link to="/caregiver/care-logs" className="text-xs text-[#5fa5ba] font-black uppercase tracking-widest hover:underline">See all</Link>
                            </div>
                            <div className="bg-white dark:bg-stone-900 rounded-[2rem] border border-stone-100 dark:border-stone-800 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-stone-50 dark:bg-stone-800/50 border-b border-stone-100 dark:border-stone-800">
                                        <tr>
                                            <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Patient</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Date/Time</th>
                                            <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                                        {RECENT_LOGS_MINI.map((log, i) => (
                                            <tr key={i} className="hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
                                                <td className="px-8 py-5 font-bold text-stone-800 dark:text-white">{log.p}</td>
                                                <td className="px-8 py-5 text-sm font-medium text-stone-500 dark:text-stone-400">{log.dt}</td>
                                                <td className="px-8 py-5">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${log.s === 'Submitted'
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                        }`}>
                                                        {log.s}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </ScrollAnimation>
                </div>

                {/* Incident Report Banner */}
                <ScrollAnimation animation="scale-up" delay={0.4}>
                    <section className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 shadow-inner">
                                <span className="material-symbols-outlined text-3xl">warning</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-800 dark:text-red-200 text-lg">Something went wrong?</h3>
                                <p className="text-sm text-red-700/70 dark:text-red-300/60 font-medium">Report incidents immediately to ensure patient safety and company compliance.</p>
                            </div>
                        </div>
                        <Link to="/caregiver/incidents" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-600/20 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:scale-95">
                            <span className="material-symbols-outlined">add_circle</span>
                            NEW INCIDENT REPORT
                        </Link>
                    </section>
                </ScrollAnimation>
            </div>

            <footer className="p-8 text-center text-stone-400 text-xs font-bold">
                © 2024 HomeCare Systems Inc. All Rights Reserved. • <a className="hover:text-[#5fa5ba] underline transition-colors" href="#">Privacy Policy</a>
            </footer>
        </div>
    );
};

export default Dashboard;