import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../../data/Family/report';
import ScrollAnimation from "@/components/ui/scroll-animation";

const CareReport = () => {
    return (
        <div className="space-y-10 animate-fade-in-up pb-12 font-['Public_Sans']">
            {/* Blue Header Banner */}
            <ScrollAnimation animation="fade-in">
                <div className="bg-[#99C5D3] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-sm">monitor_heart</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Wellness Tracking</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Family Health Reports</h1>
                        <p className="text-white/80 font-medium mt-1 max-w-lg">Keep track of your family's wellness journey with detailed analytics.</p>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Filters */}
            <div className="bg-white p-3 rounded-[2rem] border border-stone-100 flex flex-wrap items-center gap-4 shadow-sm">
                <div className="relative flex-1 min-w-[280px]">
                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-400">search</span>
                    <input className="w-full pl-14 pr-6 py-4 bg-[#F8FAFC] border-none rounded-3xl focus:ring-2 focus:ring-[#99C5D3] text-sm font-medium placeholder:text-stone-400 outline-none transition-all" placeholder="Search by name or report type..." type="text" />
                </div>
                <div className="flex items-center gap-3 px-2 w-full md:w-auto">
                    <div className="relative w-full md:w-auto">
                        <select className="appearance-none w-full bg-[#F8FAFC] border-none rounded-3xl text-sm font-bold focus:ring-2 focus:ring-[#99C5D3] py-4 pl-6 pr-10 outline-none cursor-pointer text-stone-700">
                            <option>Everyone</option>
                            <option>Robert Jenkins</option>
                            <option>Eleanor Jenkins</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">expand_more</span>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#5fa5ba] text-white hover:bg-[#4d8ca0] rounded-3xl text-sm font-bold transition-all shadow-lg shadow-[#5fa5ba]/20 w-auto whitespace-nowrap">
                        <span className="material-symbols-outlined text-lg">tune</span>
                        <span className="hidden sm:inline">Apply Filters</span>
                    </button>
                </div>
            </div>

            {/* Main Report Detail Card */}
            <ScrollAnimation animation="fade-up">
                <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-stone-100">
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10 pb-10 border-b border-stone-50">
                        <div className="shrink-0 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-[#E0F2F1] text-[#00695C] px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest mb-4 border border-[#B2EBF2]">
                                <span className="material-symbols-outlined fill text-xl">verified_user</span>
                                Stable
                            </div>
                            <h3 className="text-3xl font-bold text-stone-900">Health Summary</h3>
                            <p className="text-stone-500 font-medium mt-1">Care Period: Oct 17 - 24</p>
                        </div>
                        <div className="h-px w-full md:w-px md:h-16 bg-stone-100"></div>
                        <div className="flex-1">
                            <p className="text-lg text-stone-700 leading-relaxed font-medium">
                                John has maintained excellent stability this week. All vitals are within target ranges, and his appetite has improved significantly. No medication adjustments were necessary, and he has been consistently active during the day.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Blood Pressure Chart */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Blood Pressure</p>
                                    <p className="text-2xl font-black text-stone-900">118/78 <span className="text-sm font-normal text-stone-400 ml-1">mmHg (Avg)</span></p>
                                </div>
                                <div className="bg-[#E0F2F1] text-[#00695C] px-3 py-1 rounded-lg text-xs font-bold border border-[#B2EBF2]">Optimal</div>
                            </div>
                            <div className="h-[200px] w-full bg-[#FAFAFA] rounded-2xl p-4 border border-stone-50">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient id="colorBp" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#5fa5ba" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#5fa5ba" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="bp" stroke="#5fa5ba" fillOpacity={1} fill="url(#colorBp)" strokeWidth={3} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold', fill: '#9ca3af' }} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            itemStyle={{ color: '#5fa5ba', fontWeight: 'bold' }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Heart Rate Chart */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Heart Rate</p>
                                    <p className="text-2xl font-black text-stone-900">72 <span className="text-sm font-normal text-stone-400 ml-1">BPM (Avg)</span></p>
                                </div>
                                <div className="bg-[#E0F2F1] text-[#00695C] px-3 py-1 rounded-lg text-xs font-bold border border-[#B2EBF2]">Stable</div>
                            </div>
                            <div className="h-[200px] w-full bg-[#FAFAFA] rounded-2xl p-4 border border-stone-50">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="hr" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHr)" strokeWidth={3} />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold', fill: '#9ca3af' }} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Insights Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
                <ScrollAnimation animation="fade-up" delay={0.1}>
                    <div className="bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-100 flex flex-col gap-4 h-full hover:shadow-lg transition-all hover:bg-emerald-50">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100/50">
                            <span className="material-symbols-outlined font-bold text-xl">trending_up</span>
                        </div>
                        <h4 className="text-lg font-bold text-stone-900">Health Trend</h4>
                        <p className="text-sm text-stone-600 font-medium leading-relaxed">Family health scores rose <span className="text-emerald-600 font-black">+4%</span> this month. Keep up the activity levels!</p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={0.2}>
                    <div className="bg-red-500 p-8 rounded-[2rem] border border-red-400 flex flex-col gap-4 h-full shadow-lg shadow-red-500/20 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-sm border border-white/30 relative z-10">
                            <span className="material-symbols-outlined font-bold text-xl">warning</span>
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-lg font-black mb-1">Attention Needed</h4>
                            <p className="text-sm text-white/90 font-medium leading-relaxed">Eleanor's sodium levels are <span className="font-black bg-white/20 px-1 rounded">Critical</span>. Please review the diet plan immediately.</p>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={0.3}>
                    <div className="bg-[#E0F2F1]/50 p-8 rounded-[2rem] border border-[#B2EBF2] flex flex-col gap-4 h-full hover:shadow-lg transition-all hover:bg-[#E0F2F1]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5fa5ba] shadow-sm border border-[#B2EBF2]/50">
                            <span className="material-symbols-outlined font-bold text-xl">verified</span>
                        </div>
                        <h4 className="text-lg font-bold text-stone-900">Daily Compliance</h4>
                        <p className="text-sm text-stone-600 font-medium leading-relaxed">Excellent! <span className="text-[#5fa5ba] font-black">98%</span> of daily checks were logged. Your family care is on track.</p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default CareReport;
