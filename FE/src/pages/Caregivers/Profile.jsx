import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";
import { PROFILE_DATA } from '../../data/Caregiver/Profile';
import { CAREGIVER_INFO } from '../../data/Caregiver/CareLogs';

const Profile = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 custom-scrollbar font-manrope">
            <ScrollAnimation animation="fade-down" delay={0.1}>
                <header className="sticky top-0 z-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-100 dark:border-stone-800 px-8 py-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold text-stone-800 dark:text-white tracking-tight">Personal Profile</h1>
                        <p className="text-sm font-medium text-stone-400 mt-1">Manage your credentials and preferences</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="w-11 h-11 flex items-center justify-center text-stone-400 hover:text-[#5fa5ba] hover:bg-[#5fa5ba]/10 rounded-full transition-all relative">
                            <span className="material-symbols-outlined text-2xl">notifications</span>
                        </button>
                        <div className="flex items-center gap-4 pl-6 border-l border-stone-100 dark:border-stone-800 group">
                            <Link to="/caregiver/profile">
                                <img alt="Caregiver profile" className="w-12 h-12 rounded-2xl object-cover shadow-lg ring-2 ring-white dark:ring-stone-800 group-hover:ring-[#5fa5ba] transition-all cursor-pointer" src={CAREGIVER_INFO.profileImage} />
                            </Link>
                        </div>
                    </div>
                </header>
            </ScrollAnimation>

            <div className="p-8 max-w-5xl mx-auto space-y-8 pb-20">
                {/* Personal Information Section */}
                <ScrollAnimation animation="fade-right" delay={0.2}>
                    <section className="bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-stone-800 overflow-hidden group">
                        <div className="px-10 py-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-stone-50/50 dark:bg-stone-900/50">
                            <h2 className="font-bold text-xl flex items-center gap-3 text-stone-800 dark:text-white">
                                <div className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 flex items-center justify-center text-[#5fa5ba]">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                Personal Information
                            </h2>
                            <button className="flex items-center gap-2 text-xs font-black text-[#5fa5ba] hover:bg-[#5fa5ba]/10 px-5 py-2.5 rounded-xl transition-all border border-transparent uppercase tracking-wider">
                                <span className="material-symbols-outlined text-lg">edit</span>
                                Edit
                            </button>
                        </div>
                        <div className="p-10 flex flex-col md:flex-row gap-12 items-start">
                            <div className="relative group/avatar">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#5fa5ba] to-teal-400 rounded-[2.5rem] opacity-0 group-hover/avatar:opacity-20 blur-xl transition-all duration-500"></div>
                                <img alt="Caregiver large" className="w-48 h-48 rounded-[2rem] object-cover shadow-2xl relative z-10 border-4 border-white dark:border-stone-800" src={CAREGIVER_INFO.profileImage} />
                                <button className="absolute -bottom-4 -right-4 bg-white dark:bg-stone-800 p-3.5 rounded-2xl shadow-xl border-2 border-stone-100 dark:border-stone-700 text-[#5fa5ba] hover:scale-110 transition-transform active:scale-95 z-20 hover:text-[#4d8ca0]">
                                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 flex-1">
                                {PROFILE_DATA.personalInfo.map((info, i) => (
                                    <div key={i} className="space-y-2 border-b border-stone-50 dark:border-stone-800 pb-3 hover:border-stone-200 transition-colors">
                                        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{info.label}</p>
                                        <p className="font-bold text-stone-800 dark:text-stone-200 text-lg leading-tight">{info.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Professional Certifications Section */}
                <ScrollAnimation animation="fade-left" delay={0.3}>
                    <section className="bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-stone-800 overflow-hidden">
                        <div className="px-10 py-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-stone-50/50 dark:bg-stone-900/50">
                            <h2 className="font-bold text-xl flex items-center gap-3 text-stone-800 dark:text-white">
                                <div className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 flex items-center justify-center text-[#5fa5ba]">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                Professional Certifications
                            </h2>
                            <button className="flex items-center gap-2 text-xs font-black text-[#5fa5ba] hover:bg-[#5fa5ba]/10 px-5 py-2.5 rounded-xl transition-all border border-transparent uppercase tracking-wider">
                                <span className="material-symbols-outlined text-lg">add</span>
                                Add New
                            </button>
                        </div>
                        <div className="p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PROFILE_DATA.certifications.map((cert, i) => (
                                    <div key={i} className="p-6 border border-stone-200 dark:border-stone-700 rounded-[2rem] bg-white dark:bg-stone-800 flex justify-between items-center transition-all hover:border-[#5fa5ba]/50 hover:shadow-lg group">
                                        <div className="flex gap-5 items-center">
                                            <div className="w-16 h-16 bg-stone-50 dark:bg-stone-900 text-[#5fa5ba] rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-stone-800 dark:text-white leading-tight">{cert.title}</h4>
                                                <p className="text-sm text-stone-500 font-medium mt-1">{cert.id}</p>
                                                <p className={`text-[10px] font-black mt-2 uppercase tracking-widest ${cert.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'}`}>{cert.exp}</p>
                                            </div>
                                        </div>
                                        <button className="text-stone-300 hover:text-[#5fa5ba] transition-colors p-2 hover:bg-[#5fa5ba]/5 rounded-full">
                                            <span className="material-symbols-outlined">edit</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Work Preferences Section */}
                <ScrollAnimation animation="fade-up" delay={0.4}>
                    <section className="bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-stone-800 overflow-hidden">
                        <div className="px-10 py-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-stone-50/50 dark:bg-stone-900/50">
                            <h2 className="font-bold text-xl flex items-center gap-3 text-stone-800 dark:text-white">
                                <div className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 flex items-center justify-center text-[#5fa5ba]">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </div>
                                Work Preferences
                            </h2>
                            <button className="flex items-center gap-2 text-xs font-black text-[#5fa5ba] hover:bg-[#5fa5ba]/10 px-5 py-2.5 rounded-xl transition-all border border-transparent uppercase tracking-wider">
                                <span className="material-symbols-outlined text-lg">settings</span>
                                Manage
                            </button>
                        </div>
                        <div className="p-10 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-6 ml-1">General Availability</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                                    {PROFILE_DATA.availability.map(item => (
                                        <div key={item.day} className={`p-4 rounded-3xl text-center transition-all ${item.status === 'work'
                                            ? 'bg-[#5fa5ba] text-white shadow-xl shadow-[#5fa5ba]/20 hover:-translate-y-1'
                                            : 'bg-stone-50 dark:bg-stone-800 text-stone-400 border border-dashed border-stone-200 dark:border-stone-700'
                                            }`}>
                                            <span className={`block text-[10px] font-black uppercase tracking-widest mb-1 ${item.status === 'work' ? 'opacity-80' : ''}`}>{item.day}</span>
                                            <span className={`text-xs font-bold ${item.status === 'off' ? 'italic' : ''}`}>{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-10 border-t border-stone-100 dark:border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-5">
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Service Types</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {PROFILE_DATA.serviceTypes.map(tag => (
                                            <span key={tag} className="px-5 py-2.5 bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-2xl text-xs font-bold border border-stone-200 dark:border-stone-700 shadow-sm hover:border-[#5fa5ba] transition-colors cursor-default">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Max Travel Distance</h4>
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1 h-4 bg-stone-100 dark:bg-stone-800 rounded-full relative overflow-hidden shadow-inner">
                                            <div
                                                className="absolute inset-y-0 left-0 bg-[#5fa5ba] rounded-full shadow-[0_0_10px_rgba(95,165,186,0.6)]"
                                                style={{ width: `${(PROFILE_DATA.travelDistance / 20) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="font-bold text-2xl text-stone-800 dark:text-white tabular-nums">{PROFILE_DATA.travelDistance} miles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>

                <div className="pt-8 flex justify-center">
                    <button className="flex items-center gap-3 px-10 py-5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-2xl transition-all font-bold text-lg border-2 border-transparent hover:border-red-200 active:scale-95">
                        <span className="material-symbols-outlined text-2xl">logout</span>
                        Sign Out
                    </button>
                </div>
            </div>
            <footer className="p-8 text-center text-stone-400 text-xs font-bold mt-auto mb-4">
                © 2024 HomeCare Systems Inc. All Rights Reserved. • <a href="#" className="hover:text-[#5fa5ba] underline transition-colors">Privacy Policy</a>
            </footer>
        </div>
    );
};

export default Profile;