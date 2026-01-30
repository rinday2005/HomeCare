import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { REPORTS_METRICS } from '../../data/Caregiver/Reports';
import { CAREGIVER_INFO } from '../../data/Caregiver/CareLogs';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-stone-800 p-4 border border-stone-200 dark:border-stone-700 rounded-2xl shadow-xl">
                <p className="text-xs font-black text-stone-400 uppercase tracking-widest mb-2">{label}</p>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-[#5fa5ba]">Hours: {payload[0].value}h</p>
                    <p className="text-xs text-stone-500 italic font-medium">Target: {payload[1].value}h</p>
                </div>
            </div>
        );
    }
    return null;
};

const Reports = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 custom-scrollbar font-manrope animate-in slide-in-from-bottom-8 fade-in duration-700">
            <header className="sticky top-0 z-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-100 dark:border-stone-800 px-8 py-5 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-stone-800 dark:text-white tracking-tight">Performance Reports</h1>
                    <p className="text-sm font-medium text-stone-400 mt-1">Review your care metrics and monthly summaries</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end mr-2">
                        <span className="text-sm font-bold text-stone-800 dark:text-white">{CAREGIVER_INFO.name}</span>
                        <span className="text-xs text-stone-400 font-bold uppercase tracking-wider">{CAREGIVER_INFO.role}</span>
                    </div>
                    <Link to="/caregiver/profile" className="group">
                        <img alt="Caregiver profile" className="w-12 h-12 rounded-2xl object-cover shadow-lg ring-2 ring-white dark:ring-stone-800 group-hover:ring-[#5fa5ba] transition-all cursor-pointer" src={CAREGIVER_INFO.profileImage} />
                    </Link>
                </div>
            </header>

            <div className="p-8 max-w-[1700px] mx-auto space-y-8">
                {/* Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <button className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all font-bold shadow-sm text-stone-700 dark:text-white group">
                            <span className="material-symbols-outlined text-stone-400 group-hover:text-[#5fa5ba] transition-colors">calendar_month</span>
                            <span>May 2024</span>
                            <span className="material-symbols-outlined text-stone-400 text-lg">expand_more</span>
                        </button>
                        <span className="text-sm text-stone-400 font-bold">Compared to April 2024</span>
                    </div>
                    <button className="flex items-center gap-2 px-8 py-4 bg-[#5fa5ba] text-white font-bold rounded-2xl shadow-xl shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] transition-all active:scale-95 group hover:-translate-y-0.5">
                        <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
                        Download PDF Report
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REPORTS_METRICS.stats.map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-2xl shadow-inner ${stat.label === 'Completion Rate' ? 'bg-emerald-50 text-emerald-600' : 'bg-[#5fa5ba]/10 text-[#5fa5ba]'}`}>
                                    <span className={`material-symbols-outlined text-3xl`}>{stat.icon}</span>
                                </div>
                                <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest ${stat.pct.includes('+') ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' : 'text-stone-400 bg-stone-50 dark:bg-stone-900/50'}`}>
                                    {stat.pct}
                                </span>
                            </div>
                            <h3 className="text-stone-400 dark:text-stone-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-black text-stone-800 dark:text-white">{stat.val}</span>
                                <span className="text-stone-400 text-xs font-bold uppercase">{stat.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart & Testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="font-bold text-2xl text-stone-800 dark:text-white tracking-tight">Hours Activity</h3>
                                <p className="text-sm font-medium text-stone-500 mt-1">Weekly breakdown of logged hours</p>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#5fa5ba] shadow-[0_0_8px_rgba(95,165,186,0.6)]"></span>
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Current</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-stone-200 dark:bg-stone-700"></span>
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Target</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={REPORTS_METRICS.weeklyActivity} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.5} />
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#a8a29e', fontSize: 11, fontWeight: 800 }}
                                        dy={15}
                                    />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 11, fontWeight: 800 }} />
                                    <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                                    <Bar dataKey="hours" radius={[8, 8, 8, 8]} barSize={28}>
                                        {REPORTS_METRICS.weeklyActivity.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.hours >= 7 ? '#5fa5ba' : '#9ec5d1'} />
                                        ))}
                                    </Bar>
                                    <Bar dataKey="target" fill="#f5f5f4" radius={[8, 8, 8, 8]} barSize={28} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined text-9xl">format_quote</span>
                        </div>
                        <h3 className="font-bold text-2xl text-stone-800 dark:text-white mb-8 tracking-tight relative z-10">Patient Testimonials</h3>
                        <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar relative z-10">
                            {REPORTS_METRICS.testimonials.map((test, i) => (
                                <div key={i} className={`border-l-[3px] ${test.primary ? 'border-[#5fa5ba] bg-[#5fa5ba]/5' : 'border-stone-200 dark:border-stone-700'} pl-6 py-4 transition-all hover:bg-stone-50 dark:hover:bg-stone-800 rounded-r-2xl`}>
                                    <p className="text-sm italic font-medium text-stone-600 dark:text-stone-300 leading-relaxed">"{test.quote}"</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-stone-900 dark:text-white uppercase tracking-widest">{test.from}</span>
                                        <div className="flex text-amber-400 gap-0.5">
                                            {[...Array(5)].map((_, j) => (
                                                <span key={j} className="material-symbols-outlined text-[16px] font-fill">
                                                    {j < test.rating ? 'star' : 'star_outline'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-10 text-[#5fa5ba] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2 group relative z-10">
                            View All Feedback
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-stone-800 dark:text-white px-2 tracking-tight">Recent Monthly Summaries</h2>
                    <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-stone-50 dark:bg-stone-900/50 border-b border-stone-100 dark:border-stone-800">
                                <tr>
                                    <th className="px-8 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest">Month</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest">Total Shifts</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest">Avg. Rating</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-stone-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                                {[
                                    { m: 'May 2024', s: 42, r: '4.9 / 5.0', st: 'Current', cur: true },
                                    { m: 'April 2024', s: 38, r: '4.8 / 5.0', st: 'Closed', cur: false },
                                    { m: 'March 2024', s: 40, r: '4.9 / 5.0', st: 'Closed', cur: false }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-all group">
                                        <td className="px-8 py-6 font-bold text-stone-900 dark:text-white">{row.m}</td>
                                        <td className="px-8 py-6 text-sm text-stone-500 font-semibold">{row.s} Shifts</td>
                                        <td className="px-8 py-6 text-sm text-stone-500 font-bold">{row.r}</td>
                                        <td className="px-8 py-6">
                                            <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${row.cur ? 'bg-[#5fa5ba]/10 text-[#5fa5ba]' : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
                                                }`}>
                                                {row.st}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="text-[#5fa5ba] hover:text-[#4d8ca0] font-bold text-sm flex items-center gap-2 ml-auto group-hover:scale-105 transition-all">
                                                <span className="material-symbols-outlined text-lg">{row.cur ? 'visibility' : 'download'}</span>
                                                {row.cur ? 'View' : 'Download'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reports;