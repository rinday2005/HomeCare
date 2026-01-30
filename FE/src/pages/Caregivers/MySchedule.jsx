import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "@/components/ui/scroll-animation";
import { SCHEDULE_DATA } from '../../data/Caregiver/MySchedule';
import { CAREGIVER_INFO } from '../../data/Caregiver/CareLogs';
import { FAMILY_MEMBERS } from '../../data/Family/patients';

const MySchedule = () => {
    const [viewMode, setViewMode] = useState('month'); // 'month' or 'week'
    const [selectedDay, setSelectedDay] = useState(24); // Default to today mock
    const [selectedShift, setSelectedShift] = useState(null);

    // Generate days based on view mode
    const days = viewMode === 'month'
        ? Array.from({ length: 31 }, (_, i) => i + 1)
        : Array.from({ length: 7 }, (_, i) => i + 20); // Mock week: May 20 - May 26

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Initial load logic
    useEffect(() => {
        const todayShift = SCHEDULE_DATA.shifts.find(s => s.day === 24);
        if (todayShift && todayShift.events) {
            const active = todayShift.events.find(e => e.type === 'active');
            if (active) {
                handleEventClick(active, 24);
            }
        }
    }, []);

    const handleEventClick = (event, day, e) => {
        if (e) e.stopPropagation(); // Prevent parent click if any
        setSelectedDay(day);

        // Find patient in shared data shared data
        // event.patient gives a string name (e.g. "Eleanor")
        const member = FAMILY_MEMBERS.find(m => event.patient.includes(m.name) || m.name.includes(event.patient)) || FAMILY_MEMBERS[0];

        setSelectedShift({
            ...event,
            fullTime: event.time === "09:00" ? "09:00 AM - 01:00 PM" : "02:30 PM - 06:30 PM",
            patientName: member.name,
            address: member.address,
            requirements: member.name.includes("Thompson") || member.name.includes("Eleanor")
                ? ["Blood pressure monitoring", "Assistance with meal prep", "Light mobility exercise"]
                : ["Post-Op Support", "Medication Admin"],
            isCurrent: event.type === 'active',
            status: event.type // 'active', 'standard' (assumed upcoming), or 'completed'
        });
    };

    // Helper to determine style based on status
    const getEventStyle = (type, isSelected) => {
        // Color coding logic
        // Active -> Blue
        // Completed -> Gray
        // Upcoming ("standard") -> Green/Emerald

        if (type === 'active') { // In Progress
            return "bg-[#5fa5ba] text-white shadow-[#5fa5ba]/30";
        } else if (type === 'completed') { // Completed
            return "bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300";
        } else { // Standard/Upcoming
            return "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-300";
        }
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-stone-950 font-manrope">
            <ScrollAnimation animation="fade-down" delay={0.1}>
                <header className="bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800 px-8 py-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold text-stone-800 dark:text-white tracking-tight">My Schedule</h1>
                        <p className="text-sm font-medium text-stone-400 mt-1">View and manage your upcoming shifts</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-700">
                            <button
                                onClick={() => setViewMode('month')}
                                className={`px-6 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${viewMode === 'month' ? 'bg-white dark:bg-stone-700 shadow-sm text-stone-800 dark:text-white' : 'text-stone-500 hover:text-stone-700'}`}>
                                Month
                            </button>
                            <button
                                onClick={() => setViewMode('week')}
                                className={`px-6 py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${viewMode === 'week' ? 'bg-white dark:bg-stone-700 shadow-sm text-stone-800 dark:text-white' : 'text-stone-500 hover:text-stone-700'}`}>
                                Week
                            </button>
                        </div>
                        <div className="flex items-center gap-4 pl-6 border-l border-stone-100 dark:border-stone-800">
                            <button className="p-2 text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-full transition-colors relative">
                                <span className="material-symbols-outlined text-2xl">notifications</span>
                            </button>
                            <Link to="/caregiver/profile" className="group">
                                <img
                                    alt="Caregiver profile"
                                    className="w-12 h-12 rounded-2xl object-cover shadow-sm border-2 border-white dark:border-stone-800 group-hover:border-[#5fa5ba] transition-all"
                                    src={CAREGIVER_INFO.profileImage}
                                />
                            </Link>
                        </div>
                    </div>
                </header>
            </ScrollAnimation>

            <div className="flex-1 overflow-hidden flex">
                {/* Calendar Grid Section */}
                <ScrollAnimation animation="fade-right" delay={0.2} className="flex-1 overflow-hidden">
                    <div className="h-full p-8 overflow-y-auto custom-scrollbar">
                        <div className="bg-white dark:bg-stone-800 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 shadow-xl overflow-hidden flex flex-col min-h-[700px]">
                            <div className="flex items-center justify-between p-8 border-b border-stone-100 dark:border-stone-800">
                                <div className="flex items-center gap-6">
                                    <h2 className="text-3xl font-extrabold text-stone-800 dark:text-white tracking-tight">{SCHEDULE_DATA.currentMonth}</h2>
                                    <div className="flex gap-2 text-stone-400 dark:text-stone-400">
                                        <button className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full hover:bg-stone-50 hover:text-stone-800 transition-all">
                                            <span className="material-symbols-outlined">chevron_left</span>
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full hover:bg-stone-50 hover:text-stone-800 transition-all">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setSelectedDay(24); }}
                                    className="text-sm font-black text-[#5fa5ba] hover:underline uppercase tracking-wider">
                                    Today
                                </button>
                            </div>

                            <div className="grid grid-cols-7 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                                {weekDays.map(day => (
                                    <div key={day} className="py-4 text-center text-[10px] font-black text-stone-400 uppercase tracking-widest">{day}</div>
                                ))}
                            </div>

                            <div className={`grid grid-cols-7 divide-x divide-y divide-stone-100 dark:divide-stone-800 flex-1 ${viewMode === 'week' ? 'auto-rows-[minmax(500px,1fr)]' : ''}`}>
                                {/* Mock padding for Month view only */}
                                {viewMode === 'month' && [...Array(3)].map((_, i) => (
                                    <div key={`empty-${i}`} className="p-2 bg-stone-50/50 dark:bg-stone-900/30"></div>
                                ))}

                                {days.map(day => {
                                    const shift = SCHEDULE_DATA.shifts.find(s => s.day === day);
                                    const isToday = day === 24;

                                    return (
                                        <div
                                            key={day}
                                            className={`min-h-[140px] p-4 group transition-colors 
                                                hover:bg-stone-50 dark:hover:bg-stone-700/20
                                                ${isToday ? 'ring-2 ring-[#5fa5ba] ring-inset bg-[#5fa5ba]/5' : ''}
                                            `}
                                        >
                                            <span className={`text-sm font-bold ${isToday ? 'text-[#5fa5ba]' : 'text-stone-400 dark:text-stone-500'}`}>{day}</span>

                                            {shift && (
                                                <div className="mt-3 space-y-2">
                                                    {shift.events ? (
                                                        shift.events.map((event, idx) => (
                                                            <div
                                                                key={idx}
                                                                onClick={(e) => handleEventClick(event, day, e)}
                                                                className={`p-2 rounded-xl text-[10px] font-bold truncate shadow-sm transition-transform hover:scale-105 cursor-pointer ${getEventStyle(event.type)}`}
                                                            >
                                                                {event.time} - {event.patient}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div
                                                            onClick={(e) => handleEventClick({
                                                                time: shift.title.split(' - ')[0],
                                                                patient: shift.title.split(' - ')[1],
                                                                type: shift.type || 'standard'
                                                            }, day, e)}
                                                            className={`p-2 rounded-xl text-[10px] font-bold truncate shadow-sm transition-transform hover:scale-105 cursor-pointer ${getEventStyle(shift.type || 'standard')}`}
                                                        >
                                                            {shift.title}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Sidebar Details Section */}
                <ScrollAnimation animation="fade-left" delay={0.3} className="flex-shrink-0">
                    <aside className="w-[420px] h-full bg-white dark:bg-stone-800 border-l border-stone-100 dark:border-stone-800 overflow-y-auto custom-scrollbar p-8">
                        <div className="mb-8">
                            <span className="text-[10px] font-black text-[#5fa5ba] uppercase tracking-widest">Selected Date</span>
                            <h3 className="text-3xl font-extrabold mt-1 text-stone-800 dark:text-white tracking-tight">
                                {selectedDay === 24 ? "Friday, May 24" : `May ${selectedDay}, 2024`}
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {/* Selected Shift Card */}
                            {selectedShift ? (
                                <div className="bg-[#5fa5ba]/5 dark:bg-[#5fa5ba]/10 rounded-[2rem] p-8 border border-[#5fa5ba]/20 dark:border-[#5fa5ba]/30 relative overflow-hidden group">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`text-[10px] px-3 py-1.5 rounded-lg font-black uppercase tracking-wider ${selectedShift.isCurrent
                                            ? 'bg-[#5fa5ba] text-white'
                                            : 'bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300'
                                            }`}>
                                            {selectedShift.isCurrent ? "Current" : (selectedShift.type === 'completed' ? "Completed" : "Upcoming")}
                                        </span>
                                        <span className="text-xs text-stone-500 font-bold dark:text-stone-400">{selectedShift.fullTime}</span>
                                    </div>
                                    <h4 className="font-extrabold text-stone-800 dark:text-white text-2xl">{selectedShift.patientName}</h4>
                                    <div className="mt-6 space-y-5">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-[#5fa5ba] text-2xl">location_on</span>
                                            <p className="text-sm text-stone-600 dark:text-stone-300 font-medium leading-relaxed">{selectedShift.address}</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-[#5fa5ba] text-2xl">assignment</span>
                                            <div className="space-y-2">
                                                <p className="text-sm font-bold text-stone-700 dark:text-stone-100 uppercase tracking-wide">Care Requirements</p>
                                                <ul className="text-xs text-stone-500 dark:text-stone-400 space-y-2 font-medium">
                                                    {selectedShift.requirements && selectedShift.requirements.map((req, i) => (
                                                        <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#5fa5ba]"></span>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedShift.isCurrent && (
                                        <Link to="/caregiver/active-shift" className="w-full mt-8 bg-[#5fa5ba] hover:bg-[#4d8ca0] text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-[#5fa5ba]/20 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]">
                                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">login</span>
                                            QUICK CHECK-IN
                                        </Link>
                                    )}
                                </div>
                            ) : (
                                <div className="bg-stone-50 dark:bg-stone-900 rounded-[2rem] p-8 border border-dashed border-stone-200 dark:border-stone-800 text-center py-12">
                                    <span className="material-symbols-outlined text-4xl text-stone-300 mb-2">event_busy</span>
                                    <p className="text-stone-500 font-bold">Select a shift to view details</p>
                                    <p className="text-xs text-stone-400 mt-1">Click on any colored shift block</p>
                                </div>
                            )}

                            {/* Status Legend */}
                            <div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-[2rem] border border-stone-200 dark:border-stone-700">
                                <h5 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4">Shift Status</h5>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#5fa5ba]"></div>
                                        <span className="text-xs font-bold text-stone-600 dark:text-stone-300">Active / In Progress</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        <span className="text-xs font-bold text-stone-600 dark:text-stone-300">Upcoming</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                                        <span className="text-xs font-bold text-stone-600 dark:text-stone-300">Completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-stone-50 dark:bg-stone-900 rounded-[2rem] border border-dashed border-stone-200 dark:border-stone-700">
                                <div className="flex items-start gap-4 text-stone-500">
                                    <span className="material-symbols-outlined text-2xl text-[#5fa5ba]">help</span>
                                    <p className="text-xs leading-relaxed font-medium">Need to request a shift change? Contact your supervisor or use the <strong className="text-[#5fa5ba]">Reports</strong> section related to scheduling.</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default MySchedule;