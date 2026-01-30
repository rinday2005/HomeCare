import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCareLog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock initial state
    const [formData, setFormData] = useState({
        patientName: "Maria Rodriguez",
        date: "May 22, 2024",
        timeStart: "17:00",
        timeEnd: "21:00",
        notes: "Patient seemed agitated initially but calmed down after dinner.",
        mood: "Neutral"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save draft or submit
        navigate('/caregiver/care-logs');
    };

    return (
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-stone-950 custom-scrollbar p-8 font-manrope animate-in slide-in-from-bottom-8 fade-in duration-700">
            <div className="max-w-4xl mx-auto pb-20">
                <div className="flex items-center gap-6 mb-10">
                    <button onClick={() => navigate(-1)} className="w-12 h-12 flex items-center justify-center bg-white hover:bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-full transition-all shadow-sm">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div>
                        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">Edit Draft Log</h1>
                        <p className="text-sm font-medium text-stone-500 mt-1">Make changes and finalize your report</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-stone-800 p-10">
                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* Header Info (Read only) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-stone-50 dark:bg-stone-900/50 rounded-[2rem] border border-stone-100 dark:border-stone-800">
                            <div>
                                <label className="block text-xs font-black text-stone-400 uppercase tracking-widest mb-2">Patient</label>
                                <p className="font-extrabold text-stone-800 dark:text-white text-xl">{formData.patientName}</p>
                            </div>
                            <div>
                                <label className="block text-xs font-black text-stone-400 uppercase tracking-widest mb-2">Date</label>
                                <p className="font-extrabold text-stone-800 dark:text-white text-xl">{formData.date}</p>
                            </div>
                        </div>

                        {/* Time Adjustments */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-3 ml-1">Start Time</label>
                                <input
                                    type="time"
                                    name="timeStart"
                                    value={formData.timeStart}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white dark:bg-stone-800 border-2 border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-[#5fa5ba] focus:border-transparent font-bold text-lg outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-3 ml-1">End Time</label>
                                <input
                                    type="time"
                                    name="timeEnd"
                                    value={formData.timeEnd}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-white dark:bg-stone-800 border-2 border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-[#5fa5ba] focus:border-transparent font-bold text-lg outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Mood Selection */}
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-4 ml-1">Patient Mood</label>
                            <div className="flex flex-wrap gap-4">
                                {['Happy', 'Neutral', 'Sad', 'Agitated'].map(mood => (
                                    <button
                                        key={mood}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, mood }))}
                                        className={`px-8 py-4 rounded-xl font-bold text-sm border transition-all ${formData.mood === mood
                                            ? 'border-[#5fa5ba] bg-[#5fa5ba]/10 text-[#5fa5ba] shadow-lg shadow-[#5fa5ba]/10'
                                            : 'border-stone-200 dark:border-stone-700 text-stone-500 bg-white dark:bg-stone-800 hover:border-[#5fa5ba]/50 hover:bg-stone-50'
                                            }`}
                                    >
                                        {mood}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-3 ml-1">Care Notes & Observations</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-6 py-5 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-[2rem] focus:ring-2 focus:ring-[#5fa5ba] focus:border-transparent leading-relaxed text-stone-700 font-medium outline-none transition-all resize-none"
                                placeholder="Enter details about the visit..."
                            ></textarea>
                        </div>

                        {/* Actions */}
                        <div className="pt-8 flex gap-6">
                            <button
                                type="submit"
                                className="flex-1 bg-[#5fa5ba] hover:bg-[#4d8ca0] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#5fa5ba]/20 transition-all active:scale-95"
                            >
                                Save & Submit Log
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/caregiver/care-logs')}
                                className="px-10 py-5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 font-bold text-lg rounded-2xl transition-all"
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

export default EditCareLog;
