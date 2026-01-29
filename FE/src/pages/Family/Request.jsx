import React from 'react';
import { Link } from 'react-router-dom';
import { REQUESTS_LIST } from '../../data/Family/requests';
import ScrollAnimation from "@/components/ui/scroll-animation";

const Request = () => {
    return (
        <div className="space-y-8 animate-fade-in-up pb-12 font-['Public_Sans']">
            {/* Blue Header */}
            <ScrollAnimation animation="fade-in">
                <div className="bg-[#99C5D3] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/20 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <span className="material-symbols-outlined text-sm">assignment_add</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Hospital Referrals</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Initial Care Requests</h1>
                        <p className="text-white/80 font-medium mt-1 max-w-lg">Manage evaluations and processing for new hospital referrals.</p>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <Link to="/family/requests/new" className="flex items-center gap-2 px-6 py-3 bg-white text-[#5fa5ba] rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            <span className="material-symbols-outlined text-xl">add</span>
                            New Referral
                        </Link>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Greeting Banner */}
            <div className="bg-[#E0F2F1] border border-[#B2EBF2] p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-xl">
                    <h2 className="text-2xl font-bold text-[#00695C] mb-2">Welcome, Sarah</h2>
                    <p className="text-[#004D40] font-medium opacity-80">You have 2 pending hospital-referred care requests that need initial evaluation.</p>
                </div>
                <div className="flex gap-12 text-center md:border-l border-[#B2EBF2] md:pl-12">
                    <div>
                        <p className="text-4xl font-black text-[#5fa5ba]">02</p>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">IN PROGRESS</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-stone-300">08</p>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">COMPLETED</p>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="space-y-6">
                {REQUESTS_LIST.map((req) => (
                    <ScrollAnimation key={req.id} animation="fade-up">
                        <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-sm overflow-hidden group hover:border-[#B2EBF2] hover:shadow-lg hover:shadow-[#99C5D3]/10 transition-all">
                            <div className="p-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-6 w-full">
                                    <div className="w-16 h-16 bg-[#E0F2F1] rounded-2xl flex items-center justify-center text-[#00695C] shadow-inner">
                                        <span className="material-symbols-outlined text-3xl fill">add_box</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-bold tracking-tight text-stone-900">{req.title}</h3>
                                            {req.priority === 'URGENT' && (
                                                <span className="bg-[#5fa5ba] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm">URGENT</span>
                                            )}
                                        </div>
                                        <p className="text-stone-400 font-bold text-sm">
                                            {req.patient} <span className="mx-2 text-stone-300">•</span> Referral ID: #{req.referralId}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right w-full md:w-auto">
                                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">CREATED</p>
                                    <p className="font-bold text-stone-800">{req.date}</p>
                                </div>
                            </div>

                            {/* Workflow Step Indicator */}
                            <div className="px-8 md:px-12 py-10 relative">
                                <div className="absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-stone-100"></div>
                                <div className="flex justify-between relative z-10">
                                    {req.steps.map((step, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-4 flex-1">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all border-4 border-white ${step.status === 'completed' ? 'bg-[#5fa5ba] text-white' :
                                                step.status === 'active' ? 'bg-white text-[#5fa5ba] border-[#5fa5ba]' :
                                                    'bg-stone-50 text-stone-300'
                                                }`}>
                                                <span className="material-symbols-outlined text-sm md:text-lg font-bold">
                                                    {step.status === 'completed' ? 'check' :
                                                        idx === 0 ? 'assignment' : idx === 1 ? 'analytics' : 'group'}
                                                </span>
                                            </div>
                                            <div className="text-center hidden sm:block">
                                                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 ${step.status === 'pending' ? 'text-stone-300' : 'text-stone-800'
                                                    }`}>{step.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="bg-[#F0F8FF]/50 p-6 flex flex-col md:flex-row items-center justify-between border-t border-stone-50 gap-4">
                                <div className="flex items-center gap-3 text-[#5fa5ba] font-bold text-xs">
                                    <span className="material-symbols-outlined text-lg">info</span>
                                    Payment settled offline at Hospital Billing Desk.
                                </div>
                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-stone-200 rounded-xl font-bold text-xs text-stone-600 hover:bg-stone-50 hover:border-[#99C5D3] transition-all">
                                        View Files
                                    </button>
                                    <button className="flex-1 md:flex-none px-6 py-3 bg-[#5fa5ba] text-white rounded-xl font-bold text-xs shadow-lg shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] transition-all">
                                        Support Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>

            {/* New Referral Placeholder */}
            <ScrollAnimation animation="fade-up">
                <div className="bg-white border-4 border-dashed border-[#B2EBF2] rounded-[3rem] p-12 text-center group cursor-pointer hover:bg-[#E0F2F1]/30 transition-all">
                    <div className="w-16 h-16 bg-[#E0F2F1] text-[#00695C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Need another referral?</h3>
                    <p className="text-stone-400 font-medium max-w-sm mx-auto mb-6 text-sm">If you've just received a hospital referral letter, you can start the evaluation process here.</p>
                    <Link to="/family/requests/new" className="px-8 py-3 bg-[#5fa5ba] text-white rounded-full font-bold text-xs hover:bg-[#4d8ca0] transition-all uppercase tracking-widest inline-block shadow-lg shadow-[#5fa5ba]/20">
                        Start New Request
                    </Link>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default Request;
