import React, { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import AddMemberModal from './AddMemberModal';

const FamilyProfile = () => {
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    // Use the context provided by FamilyLayout
    const context = useOutletContext();
    const [profileImage, setProfileImage] = context || useState("https://lh3.googleusercontent.com/aida-public/AB6AXuATwx2wJ8s4atMXmdC52DEtcb2VMMv5VWXuryzLtZqEpSTVRtwyDC-Puy9aZh24Mm-jpr8NOV_kye2GvLKWbvfbRRxq1npzrzol_KvprM3qjnaApHIknSirSNSbFy2lSeXMOKRsGUzwNs2SeUexDHAtukUbKSucZPRUmQyjl0bJREfXZHvCBYCywShUbCe3C09Hs1mP1RdsMRqkYG_jeLKxAC-dSlqns8YI5MtzWeE_2Xs48R-XgWAMdSDSHAs0sMs7H7lF9Sqb1T4b"); // Fallback if context is missing for some reason


    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col max-w-[960px] w-full gap-8 mx-auto font-['Manrope'] pb-12 animate-fade-in-up">

            {/* Profile Header */}
            <div className="flex p-8 bg-white rounded-[2rem] shadow-sm border border-stone-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#5fa5ba]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex w-full flex-col gap-6 items-center relative z-10">
                    <div className="flex gap-6 flex-col items-center">
                        <div className="relative group cursor-pointer" onClick={handleImageClick}>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 ring-4 ring-[#5fa5ba]/20 shadow-xl transition-all group-hover:ring-[#5fa5ba]/40" style={{ backgroundImage: `url("${profileImage}")` }}></div>
                            <button className="absolute bottom-1 right-1 bg-[#5fa5ba] text-white p-2.5 rounded-full shadow-lg hover:scale-110 hover:bg-[#4d8ca0] transition-all">
                                <span className="material-symbols-outlined text-sm font-bold">photo_camera</span>
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-[28px] font-bold leading-tight tracking-tight text-center text-stone-900">Sarah Jenkins</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="bg-[#E0F2F1] text-[#00695C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#B2EBF2]">Family Manager</span>
                                <span className="text-stone-500 text-sm font-medium">• Managing 2 patients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Linked Members Section */}
            <section>
                <div className="flex items-center justify-between px-2 mb-4">
                    <h2 className="text-[22px] font-bold text-stone-900">Linked Members</h2>
                    <button
                        onClick={() => setIsAddMemberModalOpen(true)}
                        className="text-[#5fa5ba] text-sm font-bold flex items-center gap-2 hover:bg-[#E0F2F1] px-3 py-1.5 rounded-full transition-all"
                    >
                        <span className="material-symbols-outlined text-lg">add_circle</span> Add Member
                    </button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {/* Patient 1 */}
                    <div className="min-w-[300px] bg-white p-5 rounded-[1.5rem] border border-stone-100 flex items-center gap-4 hover:shadow-lg hover:border-[#B2EBF2] transition-all group cursor-pointer">
                        <div className="size-16 rounded-2xl bg-cover bg-center shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEKv1OS-ytSED9DdtAbVWZQ_MyKqrCjoq8uh2KaXf3Ux1Qi39U4dMjbxy7T8bAjTUPmSoNMYBFheCWPbrZXcx7XlJTc7kVQrNaHXhu43A4TM3QYAIRWtHHXhrjSMjwOOZ7oNGanTbAWxbNU5tix4gchFgS__4a_yM2265C3UxwX7GwgWLRm6w1Q_DdJK7YLVjwY5NeNxNH03ZAqD47Pn0Y_609DVmvJPTMgoG6fBw8LWgrE3P3ls-eBSAoIA4BPZ_gPxZ-ucB8P3y5")' }}></div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-stone-900 group-hover:text-[#5fa5ba] transition-colors">Grandma Eleanor</p>
                            <p className="text-xs font-bold text-[#00695C] bg-[#E0F2F1] px-2 py-0.5 rounded-md inline-block mt-1">Active Care Plan</p>
                        </div>
                        <span className="material-symbols-outlined text-emerald-500 text-2xl">check_circle</span>
                    </div>
                    {/* Patient 2 */}
                    <div className="min-w-[300px] bg-white p-5 rounded-[1.5rem] border border-stone-100 flex items-center gap-4 hover:shadow-lg hover:border-[#B2EBF2] transition-all group cursor-pointer">
                        <div className="size-16 rounded-2xl bg-cover bg-center shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ2IBWFf5x2rEXCmNG40xZ0iXz5hde2lVIZcrPlzwUH1C_qMlIAKkyL6IahuLVNP7iLIAzxw90S4_7AfmrV5p6PJWaBdEcxHIOcvv8rjQDiT7KYmxBGqZMDMFqEt0dpk8sLFbso-hyeDf6MQ6Jx2z9l9en_L2F019y8rSNu2NjwsptFw0HBDe5rJZ6mIVE0jWaMhFgB2jm5wHKhJm35brS1a9hxxjsU93KjOL0HaVjXgEtmyX4U8Vh6IIHxk3Pt8qEnOt6al0sC3cA")' }}></div>
                        <div className="flex-1">
                            <p className="font-bold text-lg text-stone-900 group-hover:text-[#5fa5ba] transition-colors">Dad John</p>
                            <p className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md inline-block mt-1">Post-Op Recovery</p>
                        </div>
                        <span className="material-symbols-outlined text-amber-500 text-2xl">pending</span>
                    </div>
                </div>
            </section>

            {/* Information Form Section */}
            <section className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm">
                <h2 className="text-[22px] font-bold px-2 pb-8 text-stone-900 border-b border-stone-100 mb-8">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative">
                            <input className="w-full bg-stone-50 border-2 border-transparent hover:border-stone-200 rounded-2xl p-4 font-bold text-stone-800 focus:bg-white focus:border-[#5fa5ba] focus:ring-4 focus:ring-[#E0F2F1] outline-none transition-all placeholder:font-medium" type="text" defaultValue="Sarah Johnson" />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">person</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative">
                            <input className="w-full bg-stone-50 border-2 border-transparent hover:border-stone-200 rounded-2xl p-4 font-bold text-stone-800 focus:bg-white focus:border-[#5fa5ba] focus:ring-4 focus:ring-[#E0F2F1] outline-none transition-all placeholder:font-medium" type="email" defaultValue="sarah.j@family.com" />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">mail</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Primary Phone</label>
                        <div className="relative">
                            <input className="w-full bg-stone-50 border-2 border-transparent hover:border-stone-200 rounded-2xl p-4 font-bold text-stone-800 focus:bg-white focus:border-[#5fa5ba] focus:ring-4 focus:ring-[#E0F2F1] outline-none transition-all placeholder:font-medium" type="tel" defaultValue="+1 (555) 000-1234" />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">phone</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold text-stone-500 uppercase tracking-wider ml-1">Home Address</label>
                        <div className="relative">
                            <input className="w-full bg-stone-50 border-2 border-transparent hover:border-stone-200 rounded-2xl p-4 font-bold text-stone-800 focus:bg-white focus:border-[#5fa5ba] focus:ring-4 focus:ring-[#E0F2F1] outline-none transition-all placeholder:font-medium" type="text" defaultValue="123 Oak Lane, Maplewood, NJ" />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400">location_on</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm">
                <h2 className="text-[22px] font-bold px-2 pb-8 text-stone-900 border-b border-stone-100 mb-8">Security & Privacy</h2>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between p-5 bg-stone-50 rounded-[1.5rem] border border-stone-100 hover:border-[#B2EBF2] transition-colors group">
                        <div className="flex items-center gap-5">
                            <div className="p-3.5 bg-white rounded-2xl text-[#5fa5ba] shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg">Password</p>
                                <p className="text-xs font-bold text-stone-400 mt-0.5">Last changed 3 months ago</p>
                            </div>
                        </div>
                        <button className="bg-white border-2 border-stone-200 text-stone-600 px-6 py-2.5 rounded-full font-bold text-sm hover:border-[#5fa5ba] hover:text-[#5fa5ba] transition-all shadow-sm">Change</button>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-stone-50 rounded-[1.5rem] border border-stone-100 hover:border-[#B2EBF2] transition-colors">
                        <div className="flex items-center gap-5">
                            <div className="p-3.5 bg-[#E0F2F1] rounded-2xl text-[#00695C] shadow-sm">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg flex items-center gap-3">
                                    Two-Factor Authentication
                                    <span className="text-[10px] bg-[#5fa5ba] text-white px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm shadow-[#5fa5ba]/20">Recommended</span>
                                </p>
                                <p className="text-xs font-bold text-stone-400 mt-0.5">Secure your health records with an extra layer</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-14 h-8 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5fa5ba]"></div>
                        </label>
                    </div>
                </div>
            </section>

            {/* Notification Preferences */}
            <section className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm">
                <h2 className="text-[22px] font-bold px-2 pb-8 text-stone-900 border-b border-stone-100 mb-8">Notification Preferences</h2>
                <div className="space-y-6">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                                <span className="material-symbols-outlined">emergency</span>
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg">Emergency Health Warnings</p>
                                <p className="text-xs font-bold text-stone-400 mt-0.5">Immediate SMS & Email for urgent alerts</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-12 h-7 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5fa5ba]"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                                <span className="material-symbols-outlined">login</span>
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg">Shift Check-ins</p>
                                <p className="text-xs font-bold text-stone-400 mt-0.5">Know exactly when caregivers arrive</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" />
                            <div className="w-12 h-7 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5fa5ba]"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center">
                                <span className="material-symbols-outlined">assignment</span>
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg">Weekly Health Summary</p>
                                <p className="text-xs font-bold text-stone-400 mt-0.5">Consolidated reports delivered every Sunday</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" />
                            <div className="w-12 h-7 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5fa5ba]"></div>
                        </label>
                    </div>
                </div>
            </section>

            {/* Action Footer */}
            <div className="flex justify-end gap-4">
                <button className="px-8 py-4 rounded-full border-2 border-stone-200 text-stone-400 font-bold hover:border-stone-800 hover:text-stone-800 transition-all uppercase tracking-wider text-sm">Discard</button>
                <button className="px-10 py-4 rounded-full bg-[#5fa5ba] text-white font-bold hover:bg-[#4d8ca0] hover:shadow-lg hover:shadow-[#5fa5ba]/20 hover:-translate-y-1 transition-all uppercase tracking-wider text-sm shadow-md">Save Changes</button>
            </div>

            {/* Add Member Modal */}
            <AddMemberModal
                isOpen={isAddMemberModalOpen}
                onClose={() => setIsAddMemberModalOpen(false)}
            />
        </div>
    );
};

export default FamilyProfile;
