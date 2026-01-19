import { LayoutGrid, Bell, Shield, Users } from "lucide-react";
import { features } from "@/data/home";

const FeaturesSection = () => {
  return (
    <section className="px-6 lg:px-40 py-20 bg-white dark:bg-[#0d1618] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            
            if (feature.highlight) {
              // Big Feature - Real-time Health Dashboard
              return (
                <div
                  key={feature.title}
                  className={`${feature.colSpan} rounded-3xl p-10 flex flex-col justify-between text-white overflow-hidden relative group min-h-[280px]`}
                  style={{ backgroundColor: '#19c3e6' }}
                >
                  <div className="z-10 relative">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-white/80 text-base max-w-[400px]">
                      {feature.description}
                    </p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm self-start z-10 mt-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Background Chart/Dashboard Image */}
                  <div className="absolute bottom-0 right-0 opacity-30 group-hover:opacity-40 transition-opacity">
                    <svg className="w-64 h-48" viewBox="0 0 200 150" fill="none">
                      <rect x="140" y="60" width="20" height="70" fill="rgba(255,255,255,0.5)" rx="4" />
                      <rect x="165" y="40" width="20" height="90" fill="rgba(255,255,255,0.5)" rx="4" />
                      <rect x="115" y="80" width="20" height="50" fill="rgba(255,255,255,0.5)" rx="4" />
                    </svg>
                  </div>
                </div>
              );
            }

            // Small Features
            return (
              <div
                key={feature.title}
                className={`${feature.colSpan} bg-[#f0f9fb] dark:bg-[#1a282b] rounded-3xl p-8 border border-blue-500/10 flex flex-col gap-4`}
              >
                <div className="h-12 w-12 rounded-xl bg-white dark:bg-[#25393d] shadow-sm flex items-center justify-center text-blue-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;