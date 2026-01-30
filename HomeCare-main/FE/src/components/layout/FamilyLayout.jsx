import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { welcomeData } from "../../data/Family/welcome";
import { Heart } from "lucide-react";

const FamilyLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    // Close sidebar on route change on mobile
    useEffect(() => {
        // Auto-close on mobile when navigating
    }, [location]);

    // Function to toggle sidebar
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className={`font-['Public_Sans'] bg-cream-light dark:bg-background-dark text-stone-800 dark:text-stone-200 min-h-screen flex flex-col relative`}>

            {/* Sidebar */}
            <aside
                id="sidebar"
                className={`fixed top-0 left-0 h-full bg-cream-sidebar dark:bg-stone-950 border-r border-orange-100 dark:border-stone-800 z-50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out
                    ${isSidebarOpen
                        ? 'translate-x-0 w-[280px]'
                        : '-translate-x-full w-[280px] lg:w-0'
                    }
                `}
            >
                <div className="p-8">
                    {/* Logo */}
                    <Link to="/family" className="flex items-center gap-2 mb-12">
                        <div className="w-8 h-8 bg-family-primary rounded-lg flex items-center justify-center">
                            <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-stone-900 dark:text-white">HomeCare</span>
                    </Link>

                    {/* Nav */}
                    <nav className="space-y-2">
                        {welcomeData.sidebar.map((item, index) => (
                            <Link
                                key={index}
                                to="#"
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium ${item.active
                                    ? 'bg-family-primary text-white shadow-lg shadow-family-primary/25 font-bold'
                                    : 'text-stone-500 hover:bg-orange-100/50 hover:text-family-primary'
                                    }`}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Support Card */}
                <div className="mt-auto p-8">
                    <div className="bg-white dark:bg-stone-900 rounded-3xl p-4 border border-orange-100 dark:border-stone-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-family-primary">
                                <span className="material-symbols-outlined">support_agent</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Support</p>
                                <p className="text-sm font-bold">Help Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Backdrop (Only visible on mobile when open) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            <div
                id="main-content"
                className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-[280px]' : 'ml-0'
                    }`}
            >

                {/* Global Family Header */}
                <header className="sticky top-0 z-30 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Toggle Button */}
                        <button
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-stone-600 dark:text-stone-300">menu</span>
                        </button>

                        <div className="flex items-center gap-2 lg:hidden">
                            <div className="bg-family-primary size-8 rounded-md flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm">medical_services</span>
                            </div>
                            <span className="font-bold text-lg">Family Portal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-sm font-bold rounded-lg border border-red-100 dark:border-red-900/50 flex items-center gap-2 hover:bg-red-100 transition-colors">
                            <span className="material-symbols-outlined text-sm">emergency</span>
                            <span className="hidden sm:inline">Emergency</span>
                        </button>
                        <div className="size-10 rounded-full bg-stone-200 overflow-hidden border-2 border-family-primary/20">
                            <img alt="Avatar" className="w-full h-full object-cover" src={welcomeData.user.avatar} />
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default FamilyLayout;
