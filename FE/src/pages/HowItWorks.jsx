import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, ShieldCheck, Activity, Users, Settings, Briefcase, Heart, Pill, Home, CheckCircle2, BarChart3 } from "lucide-react";
import { roleContent } from "@/data/home";


const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState("families");

  const roles = [
    { id: "families", label: "For Families", icon: Home },
    { id: "admins", label: "For Admins", icon: BarChart3 },
    { id: "caregivers", label: "For Caregivers", icon: Heart }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-10">
        <div className="max-w-[2200px] w-full px-6">
          <div 
            className="flex min-h-[300px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(14, 25, 27, 0.7) 0%, rgba(14, 25, 27, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpZ2SNSSSEffirLZ2tbTS4bNdfDvV30QvGzIJ5Byfnw9F1mvrHMzi21RfyIviYHezwtIigsMOQj6Ndcp62CrjCY0gv56FzxpZzKYP-2nc66aS8c831ZS98A3c3kIg3WgLIb6o2PPTdKJB6e7PI2oI-J8HQ8EGK40kCdlXkJbYw7EFEaqrJu4a4PrFekiDPTZ8WzzSDHcC9GYVhldgvFYnukbuCoPY0nZT8cZTSpDwmku-KiElj_yRCgz2rrT-VoOdhM0iJK1h57GGY")'
            }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Simple Care for Your Loved Ones
              </h1>
              <p className="text-white/90 text-lg font-normal leading-relaxed">
                Our platform connects families with vetted professional caregivers through a secure, transparent, and easy-to-use system. Learn how we make home care better.
              </p>
            </div>
            <Button asChild className="mt-6 min-w-[180px] h-12 text-base font-bold bg-primary hover:bg-primary/90">
              <Link to="/register">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs & Process Overview */}
      <section className="max-w-[960px] mx-auto w-full px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-[#0e191b] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-4">
            The Process Overview
          </h2>
          <p className="text-[#4e8b97] dark:text-gray-400 text-lg">
            Select a role to see how the platform works for you.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-[#d0e3e7] dark:border-[#2a3c40] justify-between">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                    activeRole === role.id
                      ? "border-primary text-primary"
                      : "border-transparent text-[#4e8b97] dark:text-gray-400 hover:text-primary"
                  }`}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <p className="text-sm font-bold leading-normal tracking-wide">{role.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-4">
            {roleContent[activeRole].steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === roleContent[activeRole].steps.length - 1;
              
              return (
                <div key={index} className="grid grid-cols-[60px_1fr] gap-x-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-7 h-7" />
                    </div>
                    {!isLast && <div className="w-[2px] bg-primary/20 h-24 grow"></div>}
                  </div>
                  <div className="flex flex-col pt-2 pb-10">
                    <h3 className="text-[#0e191b] dark:text-white text-xl font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#4e8b97] dark:text-gray-400 text-base mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Dashboard Preview */}
          <div className="hidden md:block sticky top-24">
            <div className="rounded-xl overflow-hidden shadow-xl border border-[#e7f1f3] dark:border-[#2a3c40]">
              <div className="bg-primary/5 dark:bg-primary/10 p-4 border-b border-[#e7f1f3] dark:border-[#2a3c40]">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-400"></div>
                  <div className="size-3 rounded-full bg-yellow-400"></div>
                  <div className="size-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-xs font-bold text-[#4e8b97]">Live Dashboard Preview</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1a2b2e] p-6 h-[400px] flex flex-col gap-4">
                <div className="h-4 w-32 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center p-3">
                    <Heart className="w-6 h-6 text-primary mb-1" />
                    <span className="text-xs font-bold text-[#0e191b] dark:text-white">Pulse: 72 bpm</span>
                  </div>
                  <div className="h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center p-3">
                    <Pill className="w-6 h-6 text-primary mb-1" />
                    <span className="text-xs font-bold text-[#0e191b] dark:text-white">Meds: Taken</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-4/6"></div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-primary/20"></div>
                    <div className="flex flex-col">
                      <div className="h-2 w-16 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-2 w-10 bg-gray-100 dark:bg-gray-700 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="h-6 w-16 bg-green-100 dark:bg-green-900/30 rounded-full"></div>
                </div>
              </div>
              <img 
                className="w-full h-48 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJutSAqlsX93hFxxcnpbFKL5sodWddkO43yQD7Em8s0H3JOtJ6PXIerfNcYu9YP9rXw4LDmZdScujcqpAquFatvjoElRfkkAlIfdCd2-aG9QB_uRpeoRaXUB6DKJnoRf1sKTjXbaOZWg6R-Umq1uieZFVkUQvHpvECUORqOzXBPE-2DsEI8eo4DQPc73Nt7P2ewiH6B_IAkeKKsoLvOwfIxJ5Mr0svKpB0xudrLwW8ucr7HPmIPHPCBc8IwfhhaXzPNQ8dUWGLf1al"
                alt="Close up of a medical tablet showing health data charts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f0f9fa] dark:bg-[#1a2b2e] py-16 mt-12">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-[#0e191b] dark:text-white text-3xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-[#4e8b97] dark:text-gray-400 text-lg mb-8">
            Experience the future of home care management. Join thousands of families who trust us with their loved ones' daily needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="min-w-[200px] h-12 text-base font-bold bg-primary hover:bg-primary/90">
              <Link to="/register">Create Your Profile</Link>
            </Button>
            <Button 
              variant="outline" 
              className="min-w-[200px] h-12 text-base font-bold border-2 border-primary text-primary hover:bg-primary/5"
              asChild
            >
              <Link to="/contact">Speak to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;