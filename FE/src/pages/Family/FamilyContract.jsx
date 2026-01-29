import React from 'react';
import { Link } from 'react-router-dom';
import { CONTRACTS_LIST } from '../../data/Family/contracts';
import ScrollAnimation from "@/components/ui/scroll-animation";

const FamilyContract = () => {
    return (
        <div className="space-y-8 animate-fade-in-up pb-12 font-['Public_Sans']">
            {/* Blue Header */}
            <ScrollAnimation animation="fade-in">
                <div className="bg-[#99C5D3] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-sm">history_edu</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Agreements</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Care Contracts</h1>
                        <p className="text-white/80 font-medium mt-1 max-w-lg">Manage and monitor your healthcare agreements efficiently.</p>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <Link to="/family/contracts/new" className="flex items-center gap-2 px-6 py-3 bg-white text-[#5fa5ba] rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            <span className="material-symbols-outlined text-xl">add</span>
                            New Contract
                        </Link>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Contract Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollAnimation animation="fade-up" delay={0.1}>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm relative group hover:shadow-lg hover:border-[#B2EBF2] transition-all">
                        <div className="absolute top-8 right-8 w-10 h-10 bg-[#E0F2F1] rounded-xl flex items-center justify-center text-[#00695C]">
                            <span className="material-symbols-outlined fill">check_box</span>
                        </div>
                        <p className="text-xs font-black text-stone-400 uppercase tracking-widest mb-2">Active Contracts</p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-black text-stone-900">12</span>
                            <span className="text-[#5fa5ba] font-bold text-sm">+2% this month</span>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={0.2}>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm relative hover:shadow-lg hover:border-[#B2EBF2] transition-all">
                        <div className="absolute top-8 right-8 w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                            <span className="material-symbols-outlined">assignment_late</span>
                        </div>
                        <p className="text-xs font-black text-stone-400 uppercase tracking-widest mb-2">Pending Approval</p>
                        <div className="flex flex-col">
                            <span className="text-5xl font-black text-stone-900">03</span>
                            <span className="text-stone-400 font-bold text-sm mt-1">Requiring admin review</span>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up" delay={0.3}>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm relative hover:shadow-lg hover:border-[#B2EBF2] transition-all">
                        <div className="absolute top-8 right-8 w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                            <span className="material-symbols-outlined">event_repeat</span>
                        </div>
                        <p className="text-xs font-black text-stone-400 uppercase tracking-widest mb-2">Next Renewal</p>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black tracking-tight text-stone-900">Oct 24, 2023</span>
                            <span className="text-rose-500 font-bold text-sm mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">notification_important</span>
                                Action required soon
                            </span>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Active Agreements Table */}
            <ScrollAnimation animation="fade-up" delay={0.4}>
                <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-sm overflow-hidden">
                    <div className="p-8 border-b border-stone-50 flex flex-col md:flex-row items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-stone-900">Active Agreements</h2>
                        <div className="relative w-full md:w-auto">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">search</span>
                            <input className="pl-12 pr-6 py-3 bg-[#F0F8FF] border-none rounded-xl w-full md:w-72 text-sm font-medium focus:ring-2 focus:ring-[#99C5D3] text-stone-600 placeholder:text-stone-400" placeholder="Search patients..." />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#F0F8FF]/50">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest">Patient</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest">Caregiver</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest">Service Type</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest">Duration</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest text-center">Status Tracking</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-50">
                                {CONTRACTS_LIST.map((c) => (
                                    <tr key={c.id} className="hover:bg-[#E0F2F1]/30 transition-colors group cursor-pointer">
                                        <td className="px-8 py-6 font-bold flex items-center gap-3">
                                            <div className="w-1.5 h-8 bg-[#5fa5ba] rounded-full mr-2 group-hover:h-10 transition-all"></div>
                                            <span className="text-stone-900">{c.patient.name}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <img src={c.caregiver.image} className="w-8 h-8 rounded-full object-cover border border-stone-100 shadow-sm" alt="CG" />
                                                <span className="font-bold text-stone-600 text-sm">{c.caregiver.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 font-medium text-stone-500 text-sm">{c.type}</td>
                                        <td className="px-8 py-6">
                                            <span className="px-4 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs font-bold border border-stone-100">{c.duration}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 bg-[#5fa5ba] rounded-full flex items-center justify-center text-white text-[10px] shadow-sm"><span className="material-symbols-outlined text-xs">check</span></div>
                                                    <div className="w-6 h-0.5 bg-[#5fa5ba]"></div>
                                                    <div className="w-5 h-5 bg-[#5fa5ba] rounded-full flex items-center justify-center text-white text-[10px] shadow-sm"><span className="material-symbols-outlined text-xs">check</span></div>
                                                    <div className="w-6 h-0.5 bg-[#5fa5ba]"></div>
                                                    <div className="w-5 h-5 bg-[#5fa5ba] rounded-full flex items-center justify-center text-white text-[10px] shadow-sm"><span className="material-symbols-outlined text-xs">check</span></div>
                                                </div>
                                                <span className="ml-4 text-[10px] font-black text-[#5fa5ba] tracking-tighter uppercase border border-[#B2EBF2] px-2 py-0.5 rounded-md bg-[#E0F2F1]">{c.status}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                {/* Weekly shifts teaser */}
                <ScrollAnimation animation="fade-up" delay={0.5}>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm relative overflow-hidden h-full hover:border-[#B2EBF2] transition-colors">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-stone-900">Weekly Care Schedule</h3>
                                <p className="text-stone-400 font-medium text-sm">Recurring shifts for John Doe</p>
                            </div>
                            <button className="text-[#5fa5ba] font-bold text-xs flex items-center gap-2 bg-[#E0F2F1] px-4 py-2 rounded-full">
                                <span className="material-symbols-outlined text-sm">calendar_view_week</span>
                                View All Shifts
                            </button>
                        </div>
                        <div className="flex gap-4">
                            {['MON', 'WED', 'FRI', 'TUE/THU'].map((d, i) => (
                                <div key={d} className={`flex-1 p-4 rounded-2xl text-center border ${i === 1 ? 'bg-[#E0F2F1] border-[#B2EBF2]' : 'bg-stone-50/50 border-stone-100'}`}>
                                    <p className="text-[10px] font-bold text-stone-400 mb-2">{d}</p>
                                    <p className={`font-bold text-sm ${i === 3 ? 'text-stone-300' : 'text-stone-800'}`}>{i === 3 ? 'Off' : '08:00 - 12:00'}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Payment Teaser */}
                <ScrollAnimation animation="fade-up" delay={0.6}>
                    <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm h-full hover:border-[#B2EBF2] transition-colors">
                        <h3 className="text-xl font-bold text-stone-900 mb-6">Payment Status</h3>
                        <div className="bg-[#E0F2F1] p-6 rounded-3xl flex items-center justify-between mb-6 border border-[#B2EBF2]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#00695C] shadow-sm">
                                    <span className="material-symbols-outlined fill">verified</span>
                                </div>
                                <div>
                                    <p className="font-bold text-[#00695C]">Paid</p>
                                    <p className="text-[10px] font-bold text-[#004D40]/60 uppercase">AUG 2023 INVOICE</p>
                                </div>
                            </div>
                            <span className="text-2xl font-black text-[#00695C]">$1,240.00</span>
                        </div>
                        <button className="w-full mt-2 py-4 border border-[#5fa5ba] text-[#5fa5ba] rounded-2xl font-bold text-sm hover:bg-[#5fa5ba] hover:text-white transition-all shadow-sm">
                            Request Contract Change
                        </button>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default FamilyContract;
