import { Link, useParams } from 'react-router-dom';
import { getCareLogById } from '../../data/mockDataStore';

const FamilyCareLogDetail = () => {
    const { id } = useParams();
    const LOG_DATA = getCareLogById(id);

    if (!LOG_DATA) {
        return (
            <div className="flex h-screen items-center justify-center font-manrope">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-stone-800">Log Not Found</h2>
                    <Link to="/family/reports" className="text-[#5fa5ba] font-bold mt-4 inline-block">Return to Reports</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full min-h-screen font-manrope bg-slate-50 text-stone-900 animate-fade-in-up pb-12">
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto space-y-8">
                {/* Header Banner */}
                <div className="bg-[#99C5D3] rounded-b-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-[#99C5D3]/20 relative overflow-hidden -mx-4 md:mx-0 md:rounded-[2.5rem] mb-8">
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link to="/family/reports" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white hover:text-[#5fa5ba] transition-all">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-white">Care Log Details</h1>
                                <p className="text-white/80 font-medium text-sm">Reference: LOG-{id || '241023'}</p>
                            </div>
                        </div>
                        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-bold transition-all border border-white/20">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Download PDF
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto w-full px-4 md:px-0">
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-stone-100 overflow-hidden">
                        {/* Summary Header */}
                        <div className="p-8 border-b border-stone-50 bg-stone-50/50">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <img src={LOG_DATA.caregiver.image} alt={LOG_DATA.caregiver.name} className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white" />
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Caregiver</p>
                                        <h3 className="text-lg font-bold text-stone-800">{LOG_DATA.caregiver.name}</h3>
                                        <p className="text-sm text-stone-500">{LOG_DATA.caregiver.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Date</p>
                                        <p className="font-bold text-stone-800">{LOG_DATA.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Duration</p>
                                        <p className="font-bold text-[#5fa5ba] text-xl">{LOG_DATA.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 space-y-10">
                            {/* Vitals */}
                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-8 h-8 rounded-lg bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">monitoring</span>
                                    </span>
                                    <h3 className="font-bold text-stone-800 text-lg">Vital Signs</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Heart Rate</p>
                                        <p className="text-xl font-black text-stone-700">{LOG_DATA.vitals.heartRate} <span className="text-sm font-normal text-stone-400">BPM</span></p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Temperature</p>
                                        <p className="text-xl font-black text-stone-700">{LOG_DATA.vitals.temperature} <span className="text-sm font-normal text-stone-400">°F</span></p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Blood Pressure</p>
                                        <p className="text-xl font-black text-stone-700">{LOG_DATA.vitals.bloodPressure} <span className="text-sm font-normal text-stone-400">mmHg</span></p>
                                    </div>
                                </div>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Medications */}
                                <section>
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">medication</span>
                                        </span>
                                        <h3 className="font-bold text-stone-800 text-lg">Medications</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {LOG_DATA.medications.map((med, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                <div className="flex-1">
                                                    <p className="font-bold text-sm text-stone-800">{med.name}</p>
                                                    <p className="text-xs text-stone-500 font-medium">{med.desc}</p>
                                                </div>
                                                <span className="text-[10px] font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-lg">{med.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Nutrition */}
                                <section>
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="w-8 h-8 rounded-lg bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg">restaurant</span>
                                        </span>
                                        <h3 className="font-bold text-stone-800 text-lg">Nutrition & Hydration</h3>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 space-y-4">
                                        <div>
                                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Meals</p>
                                            <p className="text-sm text-stone-700 font-medium leading-relaxed">{LOG_DATA.nutrition.meal}</p>
                                        </div>
                                        <div className="pt-4 border-t border-stone-200">
                                            <div className="flex items-center justify-between">
                                                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Hydration</p>
                                                <div className="flex items-center gap-1 text-[#5fa5ba] font-bold bg-white px-3 py-1 rounded-full shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">water_drop</span>
                                                    {LOG_DATA.nutrition.hydration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Care Notes */}
                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-8 h-8 rounded-lg bg-[#5fa5ba]/10 text-[#5fa5ba] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">description</span>
                                    </span>
                                    <h3 className="font-bold text-stone-800 text-lg">Care Notes</h3>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <span className="material-symbols-outlined text-6xl">format_quote</span>
                                    </div>
                                    <p className="text-stone-700 leading-loose italic font-medium relative z-10">"{LOG_DATA.notes}"</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FamilyCareLogDetail;
