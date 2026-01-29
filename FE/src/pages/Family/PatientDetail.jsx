import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";

const PatientDetail = () => {
    const { id } = useParams();

    return (
        <div className="space-y-10 animate-fade-in-up pb-12 font-['Public_Sans']">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-bold text-stone-400">
                <Link to="/family/patients" className="hover:text-[#5fa5ba]">Patients</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-stone-800">Caring Profile</span>
            </div>

            {/* Profile Header Card */}
            <ScrollAnimation animation="fade-in">
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F2F1]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-[#E0F2F1]/70 transition-colors duration-700"></div>

                    <div className="flex flex-col md:flex-row gap-10 relative z-10">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-[2.5rem] bg-cover bg-center shadow-lg border-4 border-white" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0eu2SOqdxFgfEmhiWSDi2ivJWrT-WIcPinXh46oi13jltBdzCEl_OsUDSi48jFnJerxGBQr2RsbcIfjZi90yS9tRmgucGq01KIoWwemuCcdx7a2n_MO5FEA13lv67XgMoW2pZsBynf83VLA9l5zctKpaKf8kli5MBVLMRsM2A3f0u7sXqRuLului-fhGRd6zuk9mX_wWBriD0PoHQIA1IjrLr7AwMRaLhCnY5XviPMfAZbRRwzv4z-fIAJl-pueWd-RIz1DwjIGLK")' }}></div>
                            <button className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#5fa5ba] text-white rounded-2xl flex items-center justify-center shadow-md border-4 border-white hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-stone-900 tracking-tight">Robert Jenkins</h1>
                                <p className="text-xl font-medium text-stone-500 mt-1">Father • 72 Years Old</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="px-5 py-2.5 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-orange-500">medical_services</span>
                                    <span className="text-sm font-bold text-orange-700">Type 2 Diabetes</span>
                                </div>
                                <div className="px-5 py-2.5 bg-[#E0F2F1] rounded-2xl border border-[#B2EBF2] flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#00695C]">blood_pressure</span>
                                    <span className="text-sm font-bold text-[#00695C]">Hypertension</span>
                                </div>
                            </div>

                            <p className="text-stone-600 leading-relaxed font-medium max-w-2xl">
                                Robert requires daily monitoring of blood sugar levels and assistance with meal preparation. He enjoys afternoon walks and reading history books.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Split Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Vitals & Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Vitals Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ScrollAnimation animation="fade-up" delay={0.1}>
                            <div className="bg-white p-6 rounded-[2rem] border border-stone-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl">favorite</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Heart Rate</p>
                                    <p className="text-2xl font-black text-stone-900">72 <span className="text-sm font-medium text-stone-400">bpm</span></p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={0.2}>
                            {/* CRITICAL ALERT EXAMPLE - RED */}
                            <div className="bg-red-50 p-6 rounded-[2rem] border-2 border-red-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all animate-pulse">
                                <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl">priority_high</span>
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-red-400">Blood Pressure</p>
                                    <p className="text-2xl font-black text-red-600">145/95 <span className="text-sm font-bold text-red-400">High</span></p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Care Plan */}
                    <ScrollAnimation animation="fade-up">
                        <div className="bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-black text-stone-900">Daily Care Plan</h3>
                                <button className="text-stone-900 text-sm font-bold hover:underline bg-stone-100 px-4 py-2 rounded-full border border-stone-200">View Full Schedule</button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { time: '08:00 AM', task: 'Morning Medication', icon: 'pill', done: true },
                                    { time: '09:30 AM', task: 'Breakfast & Glucose Check', icon: 'bakery_dining', done: true },
                                    { time: '02:00 PM', task: 'Physical Therapy Session', icon: 'accessibility_new', done: false, urgent: true },
                                    { time: '06:00 PM', task: 'Evening Walk', icon: 'directions_walk', done: false },
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border ${item.done ? 'bg-[#F8FAFC] border-stone-100' :
                                            item.urgent ? 'bg-red-50 border-red-100 ring-1 ring-red-100' : // Urgent item styling
                                                'bg-white border-stone-100 hover:border-stone-300 hover:shadow-md'
                                        } transition-all`}>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.done ? 'bg-emerald-100 text-emerald-600' :
                                                item.urgent ? 'bg-white text-red-500 border border-red-100' :
                                                    'bg-stone-100 text-stone-600'
                                            }`}>
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-bold text-base ${item.done ? 'text-stone-400 line-through' : item.urgent ? 'text-red-700' : 'text-stone-800'}`}>{item.task}</p>
                                            <p className={`text-xs font-bold ${item.urgent ? 'text-red-400' : 'text-stone-400'}`}>{item.time}</p>
                                        </div>
                                        {item.done && (
                                            <span className="material-symbols-outlined text-emerald-500 font-bold">check_circle</span>
                                        )}
                                        {item.urgent && !item.done && (
                                            <span className="bg-red-100 text-red-600 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">Due Soon</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Right Column - Documents & Contact */}
                <div className="space-y-6">
                    <ScrollAnimation animation="fade-left">
                        <div className="bg-[#5fa5ba] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-[#5fa5ba]/20">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                            <h3 className="text-lg font-bold mb-6 relative z-10">Care Team</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30"></div>
                                <div>
                                    <p className="font-bold">Dr. Sarah Smith</p>
                                    <p className="text-xs opacity-80">Primary Physician</p>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-white text-[#5fa5ba] rounded-xl font-bold text-sm mt-4 hover:bg-stone-50 transition-colors">Call Doctor</button>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-left" delay={0.1}>
                        <div className="bg-white rounded-[2.5rem] p-8 border border-stone-100 shadow-sm">
                            <h3 className="text-lg font-bold text-stone-900 mb-6">Documents</h3>
                            <div className="space-y-3">
                                {['Insurance_Card.pdf', 'Medical_History_2023.pdf', 'Allergy_List.pdf'].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                                            <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                                        </div>
                                        <span className="text-sm font-bold text-stone-600 group-hover:text-stone-900 truncate flex-1">{doc}</span>
                                        <span className="material-symbols-outlined text-stone-300 group-hover:text-[#5fa5ba]">download</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-3 mt-6 border-2 border-dashed border-stone-200 text-stone-400 rounded-xl font-bold text-sm hover:border-[#5fa5ba] hover:text-[#5fa5ba] transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">add</span> Upload Document
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
