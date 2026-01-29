import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";

const HealthReportDetail = () => {
    return (
        <div className="flex h-full min-h-screen font-['Public_Sans'] bg-slate-50 text-stone-900 animate-fade-in-up pb-12">
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto space-y-8">
                {/* Blue Header Banner */}
                <ScrollAnimation animation="fade-in">
                    <div className="bg-[#99C5D3] rounded-b-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/10 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6 pb-20 -mx-4 md:mx-0 md:rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-6">
                                <Link to="/family/dashboard" className="hidden lg:flex w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-all">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </Link>
                                <div className="flex items-center gap-5">
                                    <div className="size-16 rounded-full bg-center bg-cover border-2 border-white shadow-md ring-4 ring-[#E0F2F1] shadow-black/5" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDehSEQ4ZqpC5ZgXYV2wWFWiwUMaWeiugW6M4ZJJ9DKBu4uqTaNRYMCDfQwBkPazfdHlyS2j5jmEEtbJ5700pIjhDc1av79NfR1XW6EekdvnJupOb3JpkwFSM6fXho_KKMyYLoYDI7_g_nuYG-0JL8Mf8nQavxbAMsS8wZDmFqZ_u4RUqDW62ODH9n7HP-GFnpm2YkAwl_8Wlxdbl4zoOC2xeQaHFU-KH99cOlCyS5WsrMJwxrSBVjmXxuwqYxRcFgTOryVu6DKM1Tq')" }}></div>
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tight text-white">John Doe</h2>
                                        <p className="text-sm text-white/80 font-semibold flex items-center gap-2">
                                            <span className="size-2 bg-emerald-300 rounded-full"></span>
                                            Currently under care
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                                <div className="relative w-full sm:w-auto">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl">calendar_today</span>
                                    <select className="appearance-none bg-white/10 border border-white/20 rounded-full pl-12 pr-10 py-3 text-sm font-bold focus:ring-2 focus:ring-white/50 w-full sm:w-64 shadow-sm text-white outline-none cursor-pointer hover:bg-white/20 transition-colors">
                                        <option className="text-stone-900">Oct 17 - Oct 24, 2023</option>
                                        <option className="text-stone-900">Oct 10 - Oct 17, 2023</option>
                                        <option className="text-stone-900">Last 30 Days</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none">expand_more</span>
                                </div>
                                <div className="flex gap-3">
                                    <button className="p-3 rounded-full bg-white/20 text-white shadow-sm border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-colors flex items-center justify-center">
                                        <span className="material-symbols-outlined fill-icon text-xl">notifications</span>
                                    </button>
                                    <button className="p-3 rounded-full bg-white/20 text-white shadow-sm border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-colors flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl">settings</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <div className="max-w-7xl mx-auto w-full px-4 md:px-0 -mt-16 relative z-20">
                    {/* Health Summary Card */}
                    <ScrollAnimation animation="fade-up">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-[#99C5D3]/10 border border-stone-100 mb-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="shrink-0 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-[#E0F2F1] text-[#00695C] px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest mb-4 border border-[#B2EBF2]">
                                    <span className="material-symbols-outlined fill-icon text-xl">verified_user</span>
                                    Stable
                                </div>
                                <h3 className="text-3xl font-bold text-stone-900">Health Summary</h3>
                                <p className="text-stone-500 font-medium mt-1">Care Period: Oct 17 - 24</p>
                            </div>
                            <div className="h-px w-full md:w-px md:h-16 bg-stone-200"></div>
                            <div className="flex-1">
                                <p className="text-lg text-stone-700 leading-relaxed font-medium">
                                    John has maintained excellent stability this week. All vitals are within target ranges, and his appetite has improved significantly. No medication adjustments were necessary, and he has been consistently active during the day.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8 flex flex-col gap-10">
                            {/* Vital Signs Dashboard */}
                            <ScrollAnimation animation="fade-up" delay={0.1}>
                                <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
                                    <div className="flex items-center justify-between mb-10">
                                        <h4 className="text-xl font-bold flex items-center gap-3 text-stone-900">
                                            <span className="material-symbols-outlined text-[#5fa5ba] text-2xl fill-icon">monitoring</span>
                                            Vital Signs Dashboard
                                        </h4>
                                        <div className="flex gap-4">
                                            <span className="flex items-center gap-2 text-xs font-bold text-stone-500">
                                                <span className="size-2.5 rounded-full bg-[#5fa5ba]"></span> Blood Pressure
                                            </span>
                                            <span className="flex items-center gap-2 text-xs font-bold text-stone-500">
                                                <span className="size-2.5 rounded-full bg-blue-500"></span> Heart Rate
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-12">
                                        <div>
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Blood Pressure</p>
                                                    <p className="text-2xl font-black text-stone-900">118/78 <span className="text-sm font-normal text-stone-400 ml-1">mmHg (Avg)</span></p>
                                                </div>
                                                <div className="bg-[#E0F2F1] text-[#00695C] px-3 py-1 rounded-lg text-xs font-bold border border-[#B2EBF2]">Optimal</div>
                                            </div>
                                            <div className="h-40 w-full relative bg-gradient-to-b from-[#5fa5ba]/10 to-transparent rounded-2xl overflow-hidden flex items-end">
                                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                                                    <path d="M0,80 C50,70 100,85 150,75 C200,65 250,80 300,70 C350,60 400,75 L400,100 L0,100 Z" fill="none" stroke="#5fa5ba" strokeLinecap="round" strokeWidth="3"></path>
                                                    <circle cx="50" cy="70" fill="white" r="4" stroke="#5fa5ba" strokeWidth="2"></circle>
                                                    <circle cx="150" cy="75" fill="white" r="4" stroke="#5fa5ba" strokeWidth="2"></circle>
                                                    <circle cx="250" cy="80" fill="white" r="4" stroke="#5fa5ba" strokeWidth="2"></circle>
                                                    <circle cx="350" cy="60" fill="white" r="4" stroke="#5fa5ba" strokeWidth="2"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-stone-400 uppercase">
                                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <p className="text-sm font-bold text-stone-400 uppercase tracking-wider">Heart Rate</p>
                                                    <p className="text-2xl font-black text-stone-900">72 <span className="text-sm font-normal text-stone-400 ml-1">BPM (Avg)</span></p>
                                                </div>
                                                <div className="bg-[#E0F2F1] text-[#00695C] px-3 py-1 rounded-lg text-xs font-bold border border-[#B2EBF2]">Stable</div>
                                            </div>
                                            <div className="h-40 w-full relative bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl overflow-hidden flex items-end">
                                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                                                    <path d="M0,60 C50,65 100,55 150,60 C200,70 250,55 300,60 C350,65 400,55 L400,100 L0,100 Z" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3"></path>
                                                    <circle cx="100" cy="55" fill="white" r="4" stroke="#3b82f6" strokeWidth="2"></circle>
                                                    <circle cx="300" cy="60" fill="white" r="4" stroke="#3b82f6" strokeWidth="2"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-stone-400 uppercase">
                                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollAnimation>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Medication */}
                                <ScrollAnimation animation="fade-up" delay={0.2}>
                                    <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100 h-full">
                                        <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-stone-900">
                                            <span className="material-symbols-outlined text-[#5fa5ba] fill-icon">pill</span>
                                            Medication
                                        </h4>
                                        <div className="space-y-6">
                                            {[
                                                { name: "Lisinopril", dose: "10mg • Daily", time: "08:00 AM" },
                                                { name: "Metformin", dose: "500mg • After Breakfast", time: "08:45 AM" },
                                                { name: "Vitamin D3", dose: "2000 IU • Supplement", time: "08:00 AM" }
                                            ].map((med, i) => (
                                                <div key={i} className={`flex items-center justify-between ${i !== 2 ? 'border-b border-stone-100 pb-4' : ''}`}>
                                                    <div>
                                                        <p className="font-bold text-stone-900">{med.name}</p>
                                                        <p className="text-xs text-stone-500">{med.dose}</p>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#5fa5ba] bg-[#E0F2F1] px-2 py-1 rounded">{med.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </ScrollAnimation>

                                {/* Nutrition */}
                                <ScrollAnimation animation="fade-up" delay={0.3}>
                                    <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100 h-full">
                                        <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-stone-900">
                                            <span className="material-symbols-outlined text-[#5fa5ba] fill-icon">restaurant</span>
                                            Nutrition
                                        </h4>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="size-10 rounded-full bg-[#E0F2F1] flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-[#5fa5ba] text-xl">breakfast_dining</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-stone-900">Breakfast</p>
                                                    <p className="text-sm text-stone-500">Oatmeal with berries & walnuts</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="size-10 rounded-full bg-[#E0F2F1] flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-[#5fa5ba] text-xl">lunch_dining</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-stone-900">Lunch</p>
                                                    <p className="text-sm text-stone-500">Grilled chicken salad</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-blue-500 text-xl">water_drop</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-stone-900">Hydration</p>
                                                    <p className="text-sm text-stone-500">1.8L consumed • Target 2.0L</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-10">
                            {/* Safety Status */}
                            <ScrollAnimation animation="fade-up" delay={0.4}>
                                <section className="bg-[#E0F2F1] border border-[#B2EBF2] rounded-[2.5rem] p-8 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-white flex items-center justify-center text-[#00695C] shadow-sm">
                                            <span className="material-symbols-outlined fill-icon text-2xl">check_circle</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#00695C]">Safety Status</h4>
                                            <p className="text-sm text-[#004D40] font-medium">No incidents reported</p>
                                        </div>
                                    </div>
                                </section>
                            </ScrollAnimation>

                            {/* Caregiver Observations */}
                            <ScrollAnimation animation="fade-up" delay={0.5} className="flex-1">
                                <section className="bg-white rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden flex-1 border border-stone-100 h-full">
                                    <div className="absolute -top-6 -right-4 text-[#5fa5ba]/5 scale-[4] pointer-events-none">
                                        <span className="material-symbols-outlined text-8xl fill-icon">history_edu</span>
                                    </div>
                                    <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-[#5fa5ba]">
                                        <span className="material-symbols-outlined fill-icon">chat_bubble</span>
                                        Caregiver Observations
                                    </h4>
                                    <div className="space-y-8 relative">
                                        {[
                                            { date: "Oct 24", author: "Sarah J.", note: "John was very talkative today and enjoyed the short walk in the garden. Vitals are steady." },
                                            { date: "Oct 23", author: "Sarah J.", note: "Rested well in the afternoon. Mentioned he's looking forward to his family visit this weekend." },
                                            { date: "Oct 22", author: "Michael K.", note: "BP slightly elevated in the morning but normalized after medication and rest." }
                                        ].map((obs, i) => (
                                            <div key={i} className="pl-6 border-l-2 border-[#5fa5ba]/30">
                                                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">{obs.date} • {obs.author}</p>
                                                <p className="text-stone-700 leading-relaxed italic font-medium">
                                                    "{obs.note}"
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-10 w-full py-3 rounded-xl border border-[#5fa5ba]/30 text-[#5fa5ba] font-bold text-sm hover:bg-[#E0F2F1] transition-colors">
                                        View all notes
                                    </button>
                                </section>
                            </ScrollAnimation>

                            {/* Actions */}
                            <div className="flex flex-col gap-4 mt-auto">
                                <button className="w-full bg-[#5fa5ba] text-white font-extrabold py-5 px-8 rounded-full shadow-lg shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] transition-all flex items-center justify-center gap-3 text-lg">
                                    <span className="material-symbols-outlined fill-icon text-2xl">medical_information</span>
                                    Share with Doctor
                                </button>
                                <button className="w-full py-5 px-8 rounded-full bg-white border-2 border-stone-100 font-extrabold text-stone-900 hover:bg-stone-50 hover:border-[#99C5D3] transition-colors flex items-center justify-center gap-3 text-lg">
                                    <span className="material-symbols-outlined text-2xl">download</span>
                                    Download PDF Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HealthReportDetail;
