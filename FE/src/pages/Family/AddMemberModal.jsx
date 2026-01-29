import React, { useState } from 'react';

const AddMemberModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0d4e5c]/40 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl shadow-[#99C5D3]/20 border border-[#B2EBF2] flex flex-col overflow-hidden max-h-[95vh]">
                <div className="px-8 py-6 flex items-center justify-between border-b border-stone-50 bg-[#F0F8FF]/30">
                    <div>
                        <h2 className="text-2xl font-bold text-stone-900 font-display">Add New Member</h2>
                        <p className="text-stone-500 font-medium text-sm">Create a care profile for your loved one.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-100 text-stone-400 hover:text-[#5fa5ba] hover:border-[#5fa5ba] transition-all"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="p-8 overflow-y-auto">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-[2rem] bg-[#E0F2F1] border-2 border-dashed border-[#B2EBF2] flex flex-col items-center justify-center cursor-pointer hover:bg-[#B2EBF2]/50 transition-colors overflow-hidden group-hover:scale-105 duration-300">
                                    <span className="material-symbols-outlined text-[#5fa5ba] text-4xl mb-1 group-hover:scale-110 transition-transform">add_a_photo</span>
                                    <span className="text-[10px] font-bold text-[#5fa5ba] uppercase tracking-widest">Upload Photo</span>
                                </div>
                                <input className="hidden" id="patient-photo" type="file" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-400 ml-1 uppercase tracking-wider" htmlFor="full-name">Full Name</label>
                                <input className="w-full px-6 py-4 bg-[#F8FAFC] border border-stone-100 rounded-2xl focus:ring-2 focus:ring-[#99C5D3] focus:border-[#5fa5ba] text-stone-800 placeholder:text-stone-300 transition-all outline-none font-medium" id="full-name" placeholder="Enter patient's name" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-400 ml-1 uppercase tracking-wider" htmlFor="dob">Date of Birth</label>
                                <input className="w-full px-6 py-4 bg-[#F8FAFC] border border-stone-100 rounded-2xl focus:ring-2 focus:ring-[#99C5D3] focus:border-[#5fa5ba] text-stone-800 transition-all outline-none font-medium text-stone-500" id="dob" type="date" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-400 ml-1 uppercase tracking-wider" htmlFor="relationship">Relationship</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 bg-[#F8FAFC] border border-stone-100 rounded-2xl focus:ring-2 focus:ring-[#99C5D3] focus:border-[#5fa5ba] text-stone-800 transition-all outline-none font-medium appearance-none" id="relationship">
                                        <option value="">Select relationship</option>
                                        <option value="parent">Parent</option>
                                        <option value="spouse">Spouse</option>
                                        <option value="sibling">Sibling</option>
                                        <option value="child">Child</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-400 ml-1 uppercase tracking-wider" htmlFor="gender">Gender</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 bg-[#F8FAFC] border border-stone-100 rounded-2xl focus:ring-2 focus:ring-[#99C5D3] focus:border-[#5fa5ba] text-stone-800 transition-all outline-none font-medium appearance-none" id="gender">
                                        <option value="">Select gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Non-binary</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-stone-400 ml-1 uppercase tracking-wider" htmlFor="medical-history">Medical History</label>
                            <textarea className="w-full px-6 py-4 bg-[#F8FAFC] border border-stone-100 rounded-3xl focus:ring-2 focus:ring-[#99C5D3] focus:border-[#5fa5ba] text-stone-800 placeholder:text-stone-300 transition-all resize-none outline-none font-medium" id="medical-history" placeholder="Briefly describe any chronic conditions, allergies, or regular medications..." rows="4"></textarea>
                        </div>

                        <div className="pt-4 pb-2">
                            <button className="w-full bg-[#5fa5ba] text-white py-4 rounded-full font-bold text-lg hover:bg-[#4d8ca0] transition-all shadow-xl shadow-[#5fa5ba]/20 flex items-center justify-center gap-2" type="submit">
                                <span>Create Profile</span>
                                <span className="material-symbols-outlined">how_to_reg</span>
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full mt-4 text-stone-400 font-bold text-sm hover:text-stone-600 transition-colors uppercase tracking-widest"
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMemberModal;
