import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";

const ShiftDetail = () => {
    return (
        <div className="flex h-full min-h-screen font-['Public_Sans'] bg-slate-50 text-stone-900 animate-fade-in-up pb-12">
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto space-y-8">
                {/* Blue Header Banner */}
                <ScrollAnimation animation="fade-in">
                    <div className="bg-[#99C5D3] rounded-b-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/10 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6 pb-20 -mx-4 md:mx-0 md:rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4 self-start md:self-center">
                                <Link to="/family/dashboard" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-all">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </Link>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-white/90 bg-white/10 px-2 py-0.5 rounded-md">Log #2938</span>
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight">Shift Detail</h2>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="hidden md:flex relative flex-1 md:flex-none">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl">search</span>
                                    <input
                                        className="bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-white/50 w-full md:w-80 placeholder-white/60 outline-none transition-shadow text-white"
                                        placeholder="Search shifts..."
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <div className="max-w-7xl w-full mx-auto px-4 md:px-0 -mt-16 relative z-20">
                    {/* Caregiver Profile Card */}
                    <ScrollAnimation animation="fade-up">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#99C5D3]/10 border border-stone-100 mb-8">
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative">
                                        <div className="size-28 rounded-full bg-center bg-cover border-4 border-white shadow-2xl ring-4 ring-[#E0F2F1]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDehSEQ4ZqpC5ZgXYV2wWFWiwUMaWeiugW6M4ZJJ9DKBu4uqTaNRYMCDfQwBkPazfdHlyS2j5jmEEtbJ5700pIjhDc1av79NfR1XW6EekdvnJupOb3JpkwFSM6fXho_KKMyYLoYDI7_g_nuYG-0JL8Mf8nQavxbAMsS8wZDmFqZ_u4RUqDW62ODH9n7HP-GFnpm2YkAwl_8Wlxdbl4zoOC2xeQaHFU-KH99cOlCyS5WsrMJwxrSBVjmXxuwqYxRcFgTOryVu6DKM1Tq')" }}></div>
                                        <div className="absolute bottom-1 right-1 size-6 bg-emerald-500 border-4 border-white rounded-full"></div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl font-bold text-stone-900">Sarah Jenkins, RN</h3>
                                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                                            <span className="material-symbols-outlined text-[#5fa5ba] text-xl">medical_services</span>
                                            <p className="text-stone-500 font-bold text-lg leading-none">Nursing Care for <span className="text-stone-900">John Doe</span></p>
                                        </div>
                                        <p className="text-sm text-[#5fa5ba] mt-3 font-bold uppercase tracking-wider bg-[#E0F2F1] w-fit px-3 py-1 rounded-full mx-auto md:mx-0">Date: Tuesday, October 24, 2023</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                                    <div className="bg-[#E0F2F1] text-[#00695C] px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 uppercase tracking-widest border border-[#B2EBF2]">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        COMPLETED
                                    </div>
                                    <button className="w-full lg:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#5fa5ba] text-white font-bold hover:bg-[#4d8ca0] transition-all shadow-lg shadow-[#5fa5ba]/20 text-md">
                                        <span className="material-symbols-outlined text-xl">chat</span>
                                        Contact Caregiver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Timeline Section */}
                        <section className="lg:col-span-5">
                            <ScrollAnimation animation="fade-up" delay={0.1} className="h-full">
                                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-100 h-full">
                                    <h4 className="text-lg font-bold mb-10 flex items-center gap-3 text-stone-900">
                                        <span className="material-symbols-outlined text-[#5fa5ba] text-2xl">schedule</span>
                                        Visit Timeline
                                    </h4>
                                    <div className="relative pl-2">
                                        <div className="absolute left-4 top-5 bottom-12 w-0 border-l-2 border-dashed border-stone-200"></div>
                                        <div className="relative flex gap-8 pb-12">
                                            <div className="relative z-10 size-8 bg-white border-2 border-[#5fa5ba] rounded-full flex items-center justify-center translate-x-[-1px] shadow-sm">
                                                <div className="size-2.5 bg-[#5fa5ba] rounded-full"></div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-stone-600 text-sm mb-1 uppercase tracking-wider">Scheduled Start</p>
                                                <p className="text-[#5fa5ba] font-black text-2xl">08:00 AM</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-8 pb-12">
                                            <div className="relative z-10 size-8 bg-emerald-500 rounded-full flex items-center justify-center text-white translate-x-[-1px] shadow-md ring-4 ring-emerald-50">
                                                <span className="material-symbols-outlined text-[16px] font-black">check</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-stone-900 text-sm mb-1 uppercase tracking-wider">Actual Check-in</p>
                                                <p className="text-emerald-600 font-black text-2xl">08:05 AM</p>
                                                <p className="text-xs text-stone-400 flex items-center gap-2 mt-2 font-bold bg-stone-50 w-fit px-3 py-1.5 rounded-full border border-stone-100">
                                                    <span className="material-symbols-outlined text-sm text-[#5fa5ba]">location_on</span>
                                                    GPS Verified
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-8">
                                            <div className="relative z-10 size-8 bg-white border-2 border-stone-200 rounded-full flex items-center justify-center translate-x-[-1px]">
                                                <span className="material-symbols-outlined text-[16px] text-stone-400">logout</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-stone-600 text-sm mb-1 uppercase tracking-wider">Actual Check-out</p>
                                                <p className="text-stone-900 font-black text-2xl">12:00 PM</p>
                                                <p className="text-sm text-stone-400 mt-2 font-medium italic">Duration: 3h 55m</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </section>

                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Activities Section */}
                            <ScrollAnimation animation="fade-up" delay={0.2}>
                                <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-100">
                                    <h4 className="text-lg font-bold mb-8 flex items-center gap-3 text-stone-900">
                                        <span className="material-symbols-outlined text-[#5fa5ba] text-2xl">check_circle</span>
                                        Activities Performed
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { title: "Vital Signs", desc: "BP: 120/80 mmHg" },
                                            { title: "Medication Admin.", desc: "Morning doses given" },
                                            { title: "Light Meal Prep", desc: "Oatmeal & Fresh Fruit" },
                                            { title: "Personal Care", desc: "Assisted with bath" }
                                        ].map((activity, i) => (
                                            <div key={i} className="flex items-start gap-4 p-5 rounded-3xl bg-[#F8FAFC] border border-stone-100 hover:border-[#B2EBF2] hover:bg-[#E0F2F1]/30 transition-colors group">
                                                <span className="material-symbols-outlined text-emerald-500 text-xl mt-0.5">check_circle</span>
                                                <div>
                                                    <p className="text-base font-bold text-stone-900 group-hover:text-[#00695C]">{activity.title}</p>
                                                    <p className="text-sm text-stone-500 mt-1 font-medium">{activity.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollAnimation>

                            {/* Notes Section */}
                            <ScrollAnimation animation="fade-up" delay={0.3}>
                                <section className="bg-[#FFF8E1] rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden border border-[#FFECB3]">
                                    <div className="absolute -top-4 -right-2 text-[#FFE082] scale-[3.5] pointer-events-none opacity-40">
                                        <span className="material-symbols-outlined text-8xl">format_quote</span>
                                    </div>
                                    <h4 className="text-lg font-bold mb-6 flex items-center gap-3 text-amber-700">
                                        <span className="material-symbols-outlined text-2xl">chat_bubble</span>
                                        Note from Sarah
                                    </h4>
                                    <p className="text-stone-700 leading-relaxed italic text-lg pr-8 font-serif relative z-10 border-l-4 border-amber-300 pl-4 py-2 bg-white/50 rounded-r-xl">
                                        "John had a great morning! He was in high spirits today. He especially enjoyed the walk around the garden and finished all of his breakfast. His blood pressure remains stable."
                                    </p>
                                    <div className="mt-6 flex items-center gap-3 relative z-10">
                                        <div className="size-2 bg-amber-400 rounded-full"></div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Posted at 12:05 PM</p>
                                    </div>
                                </section>
                            </ScrollAnimation>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <Link to="/family/reports/detail/1" className="flex-1 bg-[#5fa5ba] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] transition-all flex items-center justify-center gap-3 text-base group">
                                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
                                    View Full Health Report
                                </Link>
                                <button className="px-8 py-4 rounded-full bg-white font-bold text-stone-600 hover:bg-stone-50 transition-colors text-base flex items-center justify-center border border-stone-200 hover:border-[#99C5D3]">
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ShiftDetail;
