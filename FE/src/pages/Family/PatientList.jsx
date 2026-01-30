import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAMILY_MEMBERS } from '../../data/Family/patients';
import { ACTIVITIES } from '../../data/Family/report';
import AddMemberModal from './AddMemberModal';
import ScrollAnimation from "@/components/ui/scroll-animation";

const PatientList = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="font-['Public_Sans'] space-y-8 pb-20 bg-stone-50/30 min-h-screen">

            {/* 1. Header - Blue Gradient Luxury Style */}
            <ScrollAnimation animation="fade-in">
                <div className="bg-[#99C5D3] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-[#99C5D3]/20">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <span className="material-symbols-outlined text-sm">health_and_safety</span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Medical Records</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-2">Patient Directory</h1>
                            <p className="text-white/80 max-w-lg text-sm md:text-base font-medium leading-relaxed">
                                Manage care plans, medical logs, and daily schedules for your loved ones with ease and precision.
                            </p>
                        </div>
                        <button onClick={() => setIsAddModalOpen(true)} className="bg-white text-[#5fa5ba] hover:bg-stone-50 transition-all px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-black/5 hover:-translate-y-0.5 active:translate-y-0 leading-none">
                            <span className="material-symbols-outlined text-lg">add</span>
                            Add New Member
                        </button>
                    </div>
                </div>
            </ScrollAnimation>

            {/* 2. Patient List - Sophisticated "Medical Card" Rows */}
            <div className="space-y-5">
                {FAMILY_MEMBERS.map((member, idx) => (
                    <ScrollAnimation key={member.id} animation="fade-up" delay={idx * 0.1}>
                        <div className="group bg-white rounded-[2rem] p-1 shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-[#99C5D3]/10 transition-all duration-300">
                            <div className="flex flex-col lg:flex-row">

                                {/* Left: Identity */}
                                <div className="p-6 flex items-center gap-6 lg:w-[35%] lg:border-r border-stone-50 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#99C5D3] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative shrink-0">
                                        <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-sm">
                                            <img src={member.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={member.name} onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-[3px] border-white flex items-center justify-center ${member.status === 'At Home' ? 'bg-emerald-400' : 'bg-[#99C5D3]'}`}>
                                            <span className="material-symbols-outlined text-[10px] text-white font-bold">{member.status === 'At Home' ? 'home' : 'local_hospital'}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#5fa5ba] transition-colors">{member.name}</h3>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="bg-stone-50 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-stone-500 border border-stone-100">{member.relation}</span>
                                            <span className="text-xs text-stone-400 font-medium">{member.age} yrs</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle: Medical Context */}
                                <div className="p-6 flex-1 flex flex-col md:flex-row gap-8 items-center justify-between">
                                    <div className="flex flex-col gap-1.5 w-full md:w-auto">
                                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-[#99C5D3] rounded-full"></span>
                                            Next Appointment
                                        </span>
                                        <p className="text-sm font-bold text-stone-700 flex items-center gap-2">
                                            {member.nextVisit || 'No upcoming visits'}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-1.5 w-full md:w-auto">
                                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Caregiver</span>
                                        {member.caregiver ? (
                                            <div className="flex items-center gap-2">
                                                <img src={member.caregiver.image} className="w-6 h-6 rounded-full border border-white shadow-sm" alt="CG" />
                                                <span className="text-sm font-medium text-stone-900">{member.caregiver.name}</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm text-stone-400 italic">Unassigned</span>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Actions */}
                                <div className="p-4 flex items-center justify-end gap-2 lg:w-[25%]">
                                    <button className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-[#99C5D3] hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-lg">chat_bubble</span>
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-[#99C5D3] hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-lg">call</span>
                                    </button>
                                    <Link to={`/family/patients/detail/${member.id}`} className="ml-2 pl-4 pr-1.5 py-1.5 rounded-full border border-stone-100 hover:border-[#99C5D3] bg-white group-hover:bg-[#99C5D3]/10 transition-all flex items-center gap-3">
                                        <span className="text-xs font-bold text-stone-600 group-hover:text-[#5fa5ba]">Care Plan</span>
                                        <span className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-[#5fa5ba] group-hover:text-white text-stone-500 flex items-center justify-center transition-all">
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>

            {/* 3. Bottom: Log Stream with Blue Accents */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
                <ScrollAnimation animation="slide-right" className="lg:col-span-2">
                    <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-sm p-8 h-full">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-stone-900">Clinical Logs</h2>
                            <button className="text-[#5fa5ba] text-xs font-bold hover:underline">View All History</button>
                        </div>
                        <div className="space-y-6">
                            {ACTIVITIES.slice(0, 3).map((act, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#99C5D3] ring-4 ring-[#E0F2F1] group-hover:ring-[#B2EBF2] transition-all"></div>
                                        {i !== 2 && <div className="w-0.5 bg-stone-100 flex-1 my-1"></div>}
                                    </div>
                                    <div className="pb-1">
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">{act.time}</p>
                                        <p className="text-sm text-stone-800 font-medium">
                                            <span className="font-bold">{act.patient}</span>: {act.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slide-left" delay={0.2} className="lg:col-span-1">
                    <div className="bg-[#5fa5ba] rounded-[2.5rem] p-8 text-white h-full relative overflow-hidden flex flex-col justify-center shadow-lg shadow-[#5fa5ba]/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-4 shadow-inner">
                                <span className="material-symbols-outlined text-3xl">medical_services</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
                            <p className="text-white/90 text-sm mb-6 leading-relaxed">Our medical team is available 24/7 for consultations.</p>
                            <button className="w-full py-3.5 bg-white text-[#5fa5ba] rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <AddMemberModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        </div>
    );
};

export default PatientList;
