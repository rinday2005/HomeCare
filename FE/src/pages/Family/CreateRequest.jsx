import React from 'react';
import { Link } from 'react-router-dom';

const CreateRequest = () => {
    return (
        <div className="max-w-4xl mx-auto pb-24 font-['Public_Sans']">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight">Create New Care Request</h1>
                    <p className="text-xs font-bold text-[#5fa5ba] uppercase tracking-widest mt-1">Let's set up the best care plan for your loved one</p>
                </div>
            </div>

            <div className="space-y-10 animate-fade-in-up">

                {/* Section 1: Who is the care for? */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#00695C] flex items-center justify-center border border-[#B2EBF2]">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <h2 className="text-xl font-bold text-stone-900">1. Who is the care for?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input defaultChecked className="hidden peer" id="patient1" name="patient" type="radio" />
                            <label className="flex items-center gap-4 p-5 bg-white border-2 border-stone-100 rounded-[2rem] cursor-pointer hover:border-[#B2EBF2] transition-all peer-checked:border-[#5fa5ba] peer-checked:bg-[#E0F2F1]/30 hover:shadow-md" htmlFor="patient1">
                                <img alt="Robert" className="w-16 h-16 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eu2SOqdxFgfEmhiWSDi2ivJWrT-WIcPinXh46oi13jltBdzCEl_OsUDSi48jFnJerxGBQr2RsbcIfjZi90yS9tRmgucGq01KIoWwemuCcdx7a2n_MO5FEA13lv67XgMoW2pZsBynf83VLA9l5zctKpaKf8kli5MBVLMRsM2A3f0u7sXqRuLului-fhGRd6zuk9mX_wWBriD0PoHQIA1IjrLr7AwMRaLhCnY5XviPMfAZbRRwzv4z-fIAJl-pueWd-RIz1DwjIGLK" />
                                <div>
                                    <p className="font-bold text-stone-900 text-lg">Robert Jenkins</p>
                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Father • Age 72</p>
                                </div>
                                <span className="material-symbols-outlined ml-auto text-[#5fa5ba] opacity-0 peer-checked:opacity-100 font-bold scale-110">check_circle</span>
                            </label>
                        </div>
                        <div className="relative">
                            <input className="hidden peer" id="patient2" name="patient" type="radio" />
                            <label className="flex items-center gap-4 p-5 bg-white border-2 border-stone-100 rounded-[2rem] cursor-pointer hover:border-[#B2EBF2] transition-all peer-checked:border-[#5fa5ba] peer-checked:bg-[#E0F2F1]/30 hover:shadow-md" htmlFor="patient2">
                                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-300">
                                    <span className="material-symbols-outlined text-3xl">add</span>
                                </div>
                                <div>
                                    <p className="font-bold text-stone-900 text-lg">New Profile</p>
                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Add Member</p>
                                </div>
                                <span className="material-symbols-outlined ml-auto text-[#5fa5ba] opacity-0 peer-checked:opacity-100 font-bold scale-110">check_circle</span>
                            </label>
                        </div>
                    </div>
                </section>

                {/* Section 2: Referral Details */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#00695C] flex items-center justify-center border border-[#B2EBF2]">
                            <span className="material-symbols-outlined">description</span>
                        </div>
                        <h2 className="text-xl font-bold text-stone-900">2. Referral Details</h2>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 space-y-8 shadow-sm">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase tracking-widest text-stone-400 ml-2">Hospital Referral Document</label>
                            <div className="w-full border-2 border-dashed border-[#B2EBF2] rounded-[2rem] p-10 flex flex-col items-center justify-center bg-[#E0F2F1]/30 group hover:bg-[#E0F2F1]/50 transition-colors cursor-pointer text-center">
                                <span className="material-symbols-outlined text-[#5fa5ba]/50 text-5xl mb-4 group-hover:scale-110 transition-transform">upload_file</span>
                                <p className="text-sm font-bold text-stone-600">Drop the referral document or photo here</p>
                                <p className="text-xs text-stone-400 mt-1 font-medium">Supports PDF, JPG, PNG up to 10MB</p>
                                <button className="mt-6 px-6 py-2.5 bg-white border-2 border-[#E0F2F1] hover:border-[#5fa5ba] rounded-full text-xs font-bold text-[#00695C] shadow-sm transition-all hover:shadow-md">Select File</button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase tracking-widest text-stone-400 ml-2">Hospital Diagnosis / Clinical Notes</label>
                            <textarea
                                className="w-full rounded-[1.5rem] border-stone-200 p-6 text-sm font-medium focus:ring-4 focus:ring-[#E0F2F1] focus:border-[#5fa5ba] transition-all min-h-[120px] outline-none text-stone-700 placeholder:text-stone-400"
                                placeholder="Please share any specific notes from the hospital or the primary diagnosis..."
                            ></textarea>
                        </div>
                    </div>
                </section>

                {/* Section 3: Level of Care Required */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#00695C] flex items-center justify-center border border-[#B2EBF2]">
                            <span className="material-symbols-outlined">monitor_heart</span>
                        </div>
                        <h2 className="text-xl font-bold text-stone-900">3. Level of Care Required</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative h-full">
                            <input defaultChecked className="hidden peer" id="service1" name="service" type="radio" />
                            <label className="flex flex-col p-8 bg-white border-2 border-stone-100 rounded-[2.5rem] cursor-pointer hover:border-[#B2EBF2] transition-all peer-checked:border-[#5fa5ba] peer-checked:bg-[#E0F2F1]/30 h-full hover:shadow-lg hover:-translate-y-1" htmlFor="service1">
                                <span className="material-symbols-outlined text-4xl text-[#5fa5ba] mb-6">healing</span>
                                <p className="font-bold text-stone-900 text-lg">Post-Op Recovery</p>
                                <p className="text-xs text-stone-500 mt-3 leading-relaxed font-medium">Specialized care following surgery or hospital discharge.</p>
                            </label>
                        </div>
                        <div className="relative h-full">
                            <input className="hidden peer" id="service2" name="service" type="radio" />
                            <label className="flex flex-col p-8 bg-white border-2 border-stone-100 rounded-[2.5rem] cursor-pointer hover:border-[#B2EBF2] transition-all peer-checked:border-[#5fa5ba] peer-checked:bg-[#E0F2F1]/30 h-full hover:shadow-lg hover:-translate-y-1" htmlFor="service2">
                                <span className="material-symbols-outlined text-4xl text-[#5fa5ba] mb-6">clinical_notes</span>
                                <p className="font-bold text-stone-900 text-lg">Chronic Care</p>
                                <p className="text-xs text-stone-500 mt-3 leading-relaxed font-medium">Long-term management of persistent health conditions.</p>
                            </label>
                        </div>
                        <div className="relative h-full">
                            <input className="hidden peer" id="service3" name="service" type="radio" />
                            <label className="flex flex-col p-8 bg-white border-2 border-stone-100 rounded-[2.5rem] cursor-pointer hover:border-[#B2EBF2] transition-all peer-checked:border-[#5fa5ba] peer-checked:bg-[#E0F2F1]/30 h-full hover:shadow-lg hover:-translate-y-1" htmlFor="service3">
                                <span className="material-symbols-outlined text-4xl text-[#5fa5ba] mb-6">volunteer_activism</span>
                                <p className="font-bold text-stone-900 text-lg">Personal Care</p>
                                <p className="text-xs text-stone-500 mt-3 leading-relaxed font-medium">Assistance with daily activities and companionship.</p>
                            </label>
                        </div>
                    </div>
                </section>

                {/* Section 4: Preferred Schedule */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#00695C] flex items-center justify-center border border-[#B2EBF2]">
                            <span className="material-symbols-outlined">calendar_month</span>
                        </div>
                        <h2 className="text-xl font-bold text-stone-900">4. Preferred Schedule</h2>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase tracking-widest text-stone-400 ml-2">Desired Start Date</label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-[1.5rem] border-stone-200 py-4 px-6 text-sm font-bold text-stone-800 focus:ring-4 focus:ring-[#E0F2F1] focus:border-[#5fa5ba] transition-all outline-none"
                                    type="date"
                                    defaultValue="2024-11-01"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase tracking-widest text-stone-400 ml-2">Typical Daily Hours</label>
                            <div className="relative">
                                <select
                                    className="w-full rounded-[1.5rem] border-stone-200 py-4 px-6 text-sm font-bold text-stone-800 focus:ring-4 focus:ring-[#E0F2F1] focus:border-[#5fa5ba] transition-all outline-none appearance-none"
                                >
                                    <option>4-6 Hours / Day</option>
                                    <option>8-10 Hours / Day</option>
                                    <option>12 Hours (Day Shift)</option>
                                    <option>12 Hours (Night Shift)</option>
                                    <option>24/7 Full-time Care</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Verification */}
                <section className="bg-[#E0F2F1] p-8 rounded-[2.5rem] border border-[#B2EBF2] flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" id="paymentVerify" type="checkbox" />
                        <div className="w-14 h-8 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5fa5ba]"></div>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-[#00695C] text-lg">Payment Verification</h3>
                        <p className="text-sm text-[#004D40]/70 mt-1 font-medium">I have settled the initial deposit payment at the hospital billing desk.</p>
                    </div>
                    <div className="ml-auto">
                        <span className="material-symbols-outlined text-[#5fa5ba] text-3xl">verified_user</span>
                    </div>
                </section>

                {/* Footer Buttons */}
                <div className="flex flex-col items-center pt-8 space-y-8">
                    <p className="text-sm text-stone-400 max-w-md text-center font-medium leading-relaxed">
                        By submitting this request, our care coordination team will review the hospital referral and reach out to you within 2-4 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                        <Link to="/family/dashboard" className="px-10 py-4 text-sm font-black text-stone-400 hover:text-stone-600 transition-colors uppercase tracking-widest text-center">
                            Discard
                        </Link>
                        <button className="px-16 py-5 bg-[#5fa5ba] text-white text-base font-black rounded-full shadow-xl shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] hover:-translate-y-1 transition-all uppercase tracking-widest active:scale-95 flex items-center justify-center gap-3">
                            Submit to Admin
                            <span className="material-symbols-outlined font-bold">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateRequest;
