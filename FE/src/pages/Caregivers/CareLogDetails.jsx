import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CareLogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - in a real app, fetch based on ID
    const logData = {
        patientName: "Eleanor Thompson",
        date: "May 24, 2024",
        time: "09:00 AM - 01:00 PM (4h)",
        status: "Submitted",
        vitals: {
            bp: "122/80",
            heartRate: "72",
            temp: "98.6"
        },
        medications: [
            { name: "Lisinopril", dosage: "10mg Tablet", time: "09:30 AM", status: "Administered" },
            { name: "Metformin", dosage: "500mg Tablet", time: "09:30 AM", status: "Administered" },
            { name: "Multivitamin", dosage: "1 Capsule", time: "12:30 PM", status: "Administered" }
        ],
        nutrition: {
            breakfast: "Oatmeal with blueberries and 1 slice of whole wheat toast. Patient ate 100% of the meal.",
            lunch: "Chicken salad sandwich and a small apple. Patient ate approximately 75% of the meal.",
            fluid: "850"
        },
        observations: "Patient was in good spirits today. Slightly complained about knee pain during morning exercises but managed to complete the routine."
    };

    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 custom-scrollbar p-8 font-manrope animate-in slide-in-from-bottom-8 fade-in duration-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                    <button onClick={() => navigate(-1)} className="w-12 h-12 flex items-center justify-center bg-white hover:bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full transition-all shadow-sm">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div>
                        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">Care Log Details</h1>
                        <p className="text-sm font-medium text-stone-500 mt-1">
                            <span className="font-bold text-[#5fa5ba]">{logData.patientName}</span> • {logData.date} • {logData.time}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider">
                        {logData.status}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#5fa5ba]/10 flex items-center justify-center text-[#5fa5ba] font-black shadow-sm">ET</div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-10 pb-20">
                {/* Vital Signs */}
                <section className="bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm">
                    <h2 className="text-xl font-bold text-stone-800 dark:text-white mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                            <span className="material-symbols-outlined">monitor_heart</span>
                        </span>
                        Vital Signs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1.5">Blood Pressure</p>
                                <p className="text-4xl font-extrabold text-stone-800 dark:text-white">{logData.vitals.bp} <span className="text-sm text-stone-400 font-bold">mmHg</span></p>
                            </div>
                            <span className="material-symbols-outlined text-emerald-500 text-3xl">check_circle</span>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1.5">Heart Rate</p>
                                <p className="text-4xl font-extrabold text-stone-800 dark:text-white">{logData.vitals.heartRate} <span className="text-sm text-stone-400 font-bold">BPM</span></p>
                            </div>
                            <span className="material-symbols-outlined text-emerald-500 text-3xl">check_circle</span>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1.5">Temperature</p>
                                <p className="text-4xl font-extrabold text-stone-800 dark:text-white">{logData.vitals.temp} <span className="text-sm text-stone-400 font-bold">°F</span></p>
                            </div>
                            <span className="material-symbols-outlined text-emerald-500 text-3xl">check_circle</span>
                        </div>
                    </div>
                </section>

                {/* Medication */}
                <section className="bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm">
                    <h2 className="text-xl font-bold text-stone-800 dark:text-white mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                            <span className="material-symbols-outlined">medication</span>
                        </span>
                        Medication Administration
                    </h2>
                    <div className="bg-stone-50 dark:bg-stone-900/50 rounded-[2rem] border border-stone-200 dark:border-stone-700 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white dark:bg-stone-800 border-b border-stone-100 dark:border-stone-700">
                                <tr>
                                    <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Medication Name</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Dosage</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest">Time</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-stone-400 uppercase tracking-widest text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                                {logData.medications.map((med, i) => (
                                    <tr key={i}>
                                        <td className="px-8 py-5 font-bold text-stone-800 dark:text-white">{med.name}</td>
                                        <td className="px-8 py-5 text-sm font-medium text-stone-500">{med.dosage}</td>
                                        <td className="px-8 py-5 text-sm font-medium text-stone-500">{med.time}</td>
                                        <td className="px-8 py-5 text-right">
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black text-[10px] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-lg">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                {med.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Nutrition */}
                <section className="bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm">
                    <h2 className="text-xl font-bold text-stone-800 dark:text-white mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                            <span className="material-symbols-outlined">restaurant</span>
                        </span>
                        Nutrition & Hydration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Meal Intake</h3>
                            <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800">
                                <p className="text-xs font-black text-[#5fa5ba] mb-2 uppercase tracking-wide">Breakfast (09:15 AM)</p>
                                <p className="text-sm font-medium text-stone-600 dark:text-stone-300 leading-relaxed">{logData.nutrition.breakfast}</p>
                            </div>
                            <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-800">
                                <p className="text-xs font-black text-[#5fa5ba] mb-2 uppercase tracking-wide">Lunch (12:45 PM)</p>
                                <p className="text-sm font-medium text-stone-600 dark:text-stone-300 leading-relaxed">{logData.nutrition.lunch}</p>
                            </div>
                        </div>
                        <div className="bg-[#5fa5ba]/5 dark:bg-[#5fa5ba]/10 p-8 rounded-[2rem] border border-[#5fa5ba]/10 flex flex-col items-center justify-center text-center">
                            <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-8 w-full text-left">Fluid Intake</h3>
                            <span className="material-symbols-outlined text-8xl text-[#5fa5ba] mb-6 opacity-80">water_drop</span>
                            <p className="text-6xl font-black text-stone-800 dark:text-white mb-2 tracking-tight">{logData.nutrition.fluid} <span className="text-2xl text-stone-400 font-bold">ml</span></p>
                            <p className="text-sm text-stone-500 font-bold">Total water and juice consumed</p>
                        </div>
                    </div>
                </section>

                {/* Observations */}
                <section className="bg-white dark:bg-stone-900 p-10 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-sm">
                    <h2 className="text-xl font-bold text-stone-800 dark:text-white mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                            <span className="material-symbols-outlined">visibility</span>
                        </span>
                        Observations
                    </h2>
                    <div className="bg-stone-50 dark:bg-stone-900/50 p-8 rounded-[2rem] border border-stone-100 dark:border-stone-800 min-h-[120px]">
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-medium text-lg">
                            {logData.observations}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CareLogDetails;
