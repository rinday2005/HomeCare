import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";

// Mock Data matching CareReport.jsx IDs
const REPORT_DETAILS = {
    1: {
        id: 1,
        patientName: "Robert Jenkins",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACzNI-AJql1WfdghgRXth_vB8ICMd7_n-ThzQSDvR-mz-wciRS4bf-Uq8pObMhv11e1AxMNXqH1yAIfZeucNX__G4RjF5GqMt4pjZixJWytEtn6fiOz3ITMzwyhEQGMGr5-WxMT2D6WB2u6krSVkpWm4ufvcdoNdyuxmqegYAbZjqzA4PSsYpmYpY6sy426SDTB4fP-YjGuRmoJKQCuYRJintXdKAH9lM3VAIOj06iT0jl7H_Mmx7117nNvrDLMYC0-ARcPKEwAx-m",
        carePeriod: "Oct 16 - Oct 23, 2023",
        status: "Stable",
        statusColor: "emerald",
        summary: "Robert has shown consistent improvement this week. His blood pressure regulation has stabilized, and he is responding well to the new physical therapy routine. Mood markers are positive.",
        vitals: {
            bp: { value: "118/78", status: "Optimal", trend: "stable" },
            hr: { value: "72", status: "Stable", trend: "stable" }
        },
        observations: [
            { date: "Oct 23, 2023", time: "09:00 AM", caregiver: "Sarah Connor", note: "Robert was in high spirits today. Completed all morning exercises without fatigue. Appetite is normal." },
            { date: "Oct 22, 2023", time: "02:30 PM", caregiver: "Mike Ross", note: "Afternoon nap was restful. BP check post-nap showed optimal levels (118/76)." },
            { date: "Oct 21, 2023", time: "10:15 AM", caregiver: "Sarah Connor", note: "Assisted with medication. Robert reported feeling more energetic than last week." }
        ],
        medications: [
            { name: "Lisinopril", dose: "10mg • Daily", time: "08:00 AM" },
            { name: "Metformin", dose: "500mg • After Breakfast", time: "08:45 AM" }
        ]
    },
    2: {
        id: 2,
        patientName: "Eleanor Jenkins",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG2TcLFomEjFb5KddJkETS8rgrk0sXvCV1r-biHOlg_0OtstDtcFrYCiGjDQgPSA4C1GYaKvD6xLHqQ29ZxwKB2-qfTZt0R771pEk-Lp-Li3Y_HaGvjyLy5VASFVNN3fnb56OAQqrYgGzZGBXq4VKieQyl140B4dqnBeoCo7laKVr3VHVgVe2Jn2BsttftBZeA0NwPYrVkgTSf_Jq_2uKb6KwpjZ_7cg0pwYNFf1RSjyacTwYQHEzBn_PtRdiOzzdI3OZnNJnsTIfo",
        carePeriod: "Oct 16 - Oct 23, 2023",
        status: "Warning",
        statusColor: "amber",
        summary: "Eleanor has experienced some fluctuations in blood pressure. Recommending a stricter low-sodium diet and close monitoring of fluid intake. Activity levels have slightly decreased.",
        vitals: {
            bp: { value: "142/90", status: "Elevated", trend: "rising" },
            hr: { value: "78", status: "Normal", trend: "stable" }
        },
        observations: [
            { date: "Oct 23, 2023", time: "08:45 AM", caregiver: "Sarah Connor", note: "Eleanor complained of mild dizziness upon standing. BP check indicated slight elevation. Advised rest." },
            { date: "Oct 22, 2023", time: "01:00 PM", caregiver: "Sarah Connor", note: "Lunch finished, but sodium intake needs better management. Reminded family about meal prep guidelines." }
        ],
        medications: [
            { name: "Amlodipine", dose: "5mg • Daily", time: "09:00 AM" },
            { name: "Furosemide", dose: "20mg • Morning", time: "08:00 AM" }
        ]
    },
    3: {
        id: 3,
        patientName: "Robert Jenkins",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACzNI-AJql1WfdghgRXth_vB8ICMd7_n-ThzQSDvR-mz-wciRS4bf-Uq8pObMhv11e1AxMNXqH1yAIfZeucNX__G4RjF5GqMt4pjZixJWytEtn6fiOz3ITMzwyhEQGMGr5-WxMT2D6WB2u6krSVkpWm4ufvcdoNdyuxmqegYAbZjqzA4PSsYpmYpY6sy426SDTB4fP-YjGuRmoJKQCuYRJintXdKAH9lM3VAIOj06iT0jl7H_Mmx7117nNvrDLMYC0-ARcPKEwAx-m",
        carePeriod: "Oct 09 - Oct 15, 2023",
        status: "Incident",
        statusColor: "rose",
        summary: "An incident was recorded this week involving a minor slip. Immediate assistance was provided. Recovery is proceeding well, but mobility assistance is now required for all transfers.",
        vitals: {
            bp: { value: "130/82", status: "Monitor", trend: "variable" },
            hr: { value: "85", status: "Elevated", trend: "rising" }
        },
        observations: [
            { date: "Oct 15, 2023", time: "11:20 AM", caregiver: "Mike Ross", note: "INCIDENT: Slip occurred in hallway. No major injury, but patient is shaken. Doctor notified." },
            { date: "Oct 14, 2023", time: "09:00 AM", caregiver: "Mike Ross", note: "Routine morning care. Patient seems slightly agitated." }
        ],
        medications: [
            { name: "Lisinopril", dose: "10mg • Daily", time: "08:00 AM" },
            { name: "Metformin", dose: "500mg • After Breakfast", time: "08:45 AM" }
        ]
    }
};

const HealthReportDetail = () => {
    const { id } = useParams();
    const [report, setReport] = useState(null);

    useEffect(() => {
        // Simulate fetch
        if (id && REPORT_DETAILS[id]) {
            setReport(REPORT_DETAILS[id]);
        }
    }, [id]);

    if (!report) return <div className="p-10 text-center">Loading report details...</div>;

    const statusColors = {
        emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', badge: 'bg-[#E0F2F1] text-[#00695C] border-[#B2EBF2]' },
        amber: { bg: 'bg-amber-100', text: 'text-amber-700', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
        rose: { bg: 'bg-rose-100', text: 'text-rose-700', badge: 'bg-rose-50 text-rose-700 border-rose-200' }
    };

    const currentStatus = statusColors[report.statusColor] || statusColors.emerald;

    return (
        <div className="flex h-full min-h-screen font-manrope bg-slate-50 text-stone-900 animate-fade-in-up pb-12">
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto space-y-8">
                {/* Blue Header Banner */}
                <ScrollAnimation animation="fade-in">
                    <div className="bg-[#99C5D3] rounded-b-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/10 relative overflow-hidden flex flex-col md:flex-row justify-between items-end gap-6 pb-20 -mx-4 md:mx-0 md:rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-6">
                                <Link to="/family/reports" className="hidden lg:flex w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-all">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </Link>
                                <div className="flex items-center gap-5">
                                    <div className="size-16 rounded-full bg-center bg-cover border-2 border-white shadow-md ring-4 ring-[#E0F2F1] shadow-black/5" style={{ backgroundImage: `url('${report.image}')` }}></div>
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tight text-white">{report.patientName}</h2>
                                        <p className="text-sm text-white/80 font-semibold flex items-center gap-2">
                                            <span className={`size-2 rounded-full ${report.statusColor === 'emerald' ? 'bg-emerald-300' : report.statusColor === 'amber' ? 'bg-amber-300' : 'bg-rose-300'}`}></span>
                                            {report.status} Condition
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                                <div className="relative w-full sm:w-auto">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-xl">calendar_today</span>
                                    <div className="appearance-none bg-white/10 border border-white/20 rounded-full pl-12 pr-6 py-3 text-sm font-bold w-full sm:w-auto shadow-sm text-white">
                                        {report.carePeriod}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <div className="max-w-7xl mx-auto w-full px-4 md:px-0 -mt-20 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* NURSE REPORT / OBSERVATIONS (Priority) */}
                            <ScrollAnimation animation="fade-up" delay={0.1}>
                                <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-stone-200/40 border border-stone-100 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[#5fa5ba]"></div>
                                    <h4 className="text-xl font-bold mb-8 flex items-center gap-3 text-[#5fa5ba]">
                                        <span className="material-symbols-outlined fill-icon text-2xl">history_edu</span>
                                        Nurse's Daily Observations
                                    </h4>
                                    <div className="space-y-8">
                                        {report.observations.map((obs, i) => (
                                            <div key={i} className="relative pl-8 border-l-2 border-stone-100 last:border-l-0 pb-2">
                                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#5fa5ba]"></span>
                                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#5fa5ba]/30 transition-colors">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div>
                                                            <span className="text-xs font-black text-[#5fa5ba] uppercase tracking-widest">{obs.date} • {obs.time}</span>
                                                            <p className="text-sm font-bold text-stone-900 mt-1">Caregiver: {obs.caregiver}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-stone-600 font-medium leading-relaxed italic">
                                                        "{obs.note}"
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollAnimation>

                            {/* Vital Signs Dashboard */}
                            <ScrollAnimation animation="fade-up" delay={0.2}>
                                <section className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-stone-100">
                                    <div className="flex items-center justify-between mb-8">
                                        <h4 className="text-xl font-bold flex items-center gap-3 text-stone-900">
                                            <span className="material-symbols-outlined text-[#5fa5ba] text-2xl fill-icon">monitoring</span>
                                            Vital Signs Trends
                                        </h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Blood Pressure</p>
                                                    <p className="text-2xl font-black text-stone-900">{report.vitals.bp.value} <span className="text-sm font-normal text-stone-400 ml-1">mmHg</span></p>
                                                </div>
                                                <div className={`px-3 py-1 rounded-lg text-xs font-bold border ${report.vitals.bp.status === 'Optimal' || report.vitals.bp.status === 'Stable' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                                    {report.vitals.bp.status}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Heart Rate</p>
                                                    <p className="text-2xl font-black text-stone-900">{report.vitals.hr.value} <span className="text-sm font-normal text-stone-400 ml-1">BPM</span></p>
                                                </div>
                                                <div className={`px-3 py-1 rounded-lg text-xs font-bold border ${report.vitals.hr.status === 'Stable' || report.vitals.hr.status === 'Normal' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                                                    {report.vitals.hr.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollAnimation>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Overall Summary Card */}
                            <ScrollAnimation animation="fade-up">
                                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-stone-100">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6 border ${currentStatus.badge}`}>
                                        <span className="material-symbols-outlined fill-icon text-lg">
                                            {report.statusColor === 'emerald' ? 'verified_user' : 'warning'}
                                        </span>
                                        {report.status} Summary
                                    </div>
                                    <p className="text-stone-700 leading-relaxed font-medium">
                                        {report.summary}
                                    </p>
                                </div>
                            </ScrollAnimation>

                            {/* Medication */}
                            <ScrollAnimation animation="fade-up" delay={0.3}>
                                <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-stone-100">
                                    <h4 className="text-lg font-bold mb-6 flex items-center gap-3 text-stone-900">
                                        <span className="material-symbols-outlined text-[#5fa5ba] fill-icon">pill</span>
                                        Current Medication
                                    </h4>
                                    <div className="space-y-4">
                                        {report.medications.map((med, i) => (
                                            <div key={i} className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold text-stone-900">{med.name}</p>
                                                    <p className="text-xs text-stone-500">{med.dose}</p>
                                                </div>
                                                <span className="text-[10px] font-bold text-[#5fa5ba] border border-[#5fa5ba]/20 bg-white px-2 py-1 rounded">{med.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollAnimation>

                            {/* Actions */}
                            <div className="flex flex-col gap-4 mt-auto pt-4">
                                <button className="w-full bg-[#5fa5ba] text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg shadow-[#5fa5ba]/20 hover:bg-[#4d8ca0] transition-all flex items-center justify-center gap-3 text-md">
                                    <span className="material-symbols-outlined fill-icon text-xl">medical_information</span>
                                    Ask Doctor
                                </button>
                                <button className="w-full py-4 px-8 rounded-2xl bg-white border-2 border-stone-100 font-extrabold text-stone-900 hover:bg-stone-50 hover:border-[#99C5D3] transition-colors flex items-center justify-center gap-3 text-md">
                                    <span className="material-symbols-outlined text-xl">download</span>
                                    PDF Report
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
