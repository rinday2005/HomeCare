import React, { useState } from 'react';

const ServiceBookingModal = ({ isOpen, onClose, service }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4 animate-fade-in">
            {/* Modal Container */}
            <div className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[95vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative animate-scale-up font-['Public_Sans']">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 bg-white/80 hover:bg-white transition-all p-2 rounded-full shadow-lg border border-stone-100"
                >
                    <span className="material-symbols-outlined text-stone-600">close</span>
                </button>

                {/* Left Panel: Hero Image & Info */}
                <div className="lg:w-5/12 relative overflow-hidden bg-stone-100 hidden lg:block">
                    <div
                        className="h-full w-full bg-center bg-no-repeat bg-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${service?.image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                        <span className="bg-[#5fa5ba]/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block shadow-sm backdrop-blur-md border border-white/20">
                            {service?.category || 'Daily Care'}
                        </span>
                        <h2 className="text-3xl font-extrabold mb-2 leading-tight">{service?.name || service?.title || 'Service Booking'}</h2>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-3xl font-black text-[#5fa5ba]">${service?.price || '0'}</span>
                            <span className="text-white/80 text-sm font-medium">/ {service?.unit || 'session'}</span>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Booking Form */}
                <div className="lg:w-7/12 p-8 lg:p-10 overflow-y-auto bg-white flex flex-col h-full">
                    <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                        <div className="mb-8 text-center lg:text-left">
                            <h3 className="text-2xl font-extrabold text-stone-900 mb-2">Book Service</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">Customize your care request and confirm your secure payment below.</p>
                        </div>

                        <form className="space-y-6 flex-1" onSubmit={(e) => e.preventDefault()}>
                            {/* Patient Select */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-stone-600 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#5fa5ba] text-lg">person_heart</span>
                                    Select Patient
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-stone-50 border-none rounded-2xl py-4 pl-5 pr-12 focus:ring-2 focus:ring-[#5fa5ba]/50 text-stone-800 font-bold shadow-sm transition-all cursor-pointer hover:bg-stone-100">
                                        <option>Grandpa Robert Jenkins</option>
                                        <option>Aunt Mary Smith</option>
                                        <option>Add New Patient...</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#5fa5ba] pointer-events-none">expand_more</span>
                                </div>
                            </div>

                            {/* Date & Time */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-stone-600 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#5fa5ba] text-lg">calendar_month</span>
                                    Select Date & Time
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input className="w-full bg-stone-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-[#5fa5ba]/50 text-sm font-bold text-stone-800 shadow-sm" type="date" defaultValue="2024-10-24" />
                                    </div>
                                    <div className="relative">
                                        <input className="w-full bg-stone-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-[#5fa5ba]/50 text-sm font-bold text-stone-800 shadow-sm" type="time" defaultValue="09:00" />
                                    </div>
                                </div>
                            </div>

                            {/* Special Instructions */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-stone-600 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#5fa5ba] text-lg">edit_note</span>
                                    Special Instructions
                                </label>
                                <textarea
                                    className="w-full bg-stone-50 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-[#5fa5ba]/50 text-sm font-medium shadow-sm placeholder:text-stone-400 min-h-[100px] resize-none"
                                    placeholder="e.g. Please bring extra warm blankets and prefer soft-cooked meals..."
                                />
                            </div>

                            {/* Payment Section */}
                            <div className="mt-8 pt-8 border-t border-stone-100">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm font-bold text-stone-500">Total Estimated Cost</span>
                                    <span className="text-2xl font-black text-[#5fa5ba]">${service?.price || '0'}</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-xs font-black text-[#5fa5ba] uppercase tracking-widest">Payment Method</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="cursor-pointer group">
                                            <input type="radio" name="payment" className="hidden peer" defaultChecked />
                                            <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-stone-50 peer-checked:border-[#A50064] peer-checked:bg-[#A50064]/5 transition-all h-full hover:bg-stone-100">
                                                <div className="size-8 rounded-lg bg-[#A50064] flex items-center justify-center shrink-0 shadow-sm">
                                                    <span className="material-symbols-outlined text-white text-lg">wallet</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-stone-800 group-peer-checked:text-[#A50064]">MoMo</span>
                                                    <span className="text-[10px] text-stone-400 font-bold">E-Wallet</span>
                                                </div>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer group">
                                            <input type="radio" name="payment" className="hidden peer" />
                                            <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-stone-50 peer-checked:border-[#5fa5ba] peer-checked:bg-[#5fa5ba]/5 transition-all h-full hover:bg-stone-100">
                                                <div className="size-8 rounded-lg bg-[#5fa5ba]/10 flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-[#5fa5ba] text-lg">qr_code_2</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-stone-800 group-peer-checked:text-[#5fa5ba]">Bank QR</span>
                                                    <span className="text-[10px] text-stone-400 font-bold">VietQR Pay</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <button className="w-full bg-[#5fa5ba] hover:bg-[#4d8ca0] text-white font-bold py-4 rounded-full shadow-xl shadow-[#5fa5ba]/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg">
                                    <span>Pay & Confirm Booking</span>
                                    <span className="material-symbols-outlined">lock</span>
                                </button>

                                <div className="mt-4 flex items-center justify-center gap-2 text-stone-400">
                                    <span className="material-symbols-outlined text-sm">verified_user</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">Secure & Encrypted Payment</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBookingModal;
