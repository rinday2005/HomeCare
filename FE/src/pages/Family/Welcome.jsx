import React from 'react';
import { welcomeData } from '../../data/Family/welcome';
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Meteors } from "@/components/ui/meteors";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Welcome = () => {
    // CTA Data (extracted locally or could be in welcomeData)
    const cta = {
        title: "Ready to find the right care?",
        description: "Join thousands of families who have already improved their quality of life with our professional care services.",
        footerText: "© 2024 Wellness Hub Healthcare Management. All rights reserved."
    };

    return (
        <div className="font-['Public_Sans'] bg-background-light dark:bg-background-dark text-stone-900 dark:text-stone-100 min-h-screen relative overflow-x-hidden pb-12">

            {/* Main Content */}
            <main className="transition-all duration-300">

                {/* Hero Section with Carousel */}
                <ScrollAnimation animation="fade-in" duration={1}>
                    <section className="p-6">
                        <Carousel
                            className="w-full"
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {welcomeData.hero.slides.map((slide, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative overflow-hidden rounded-[2rem] bg-stone-900 min-h-[520px] flex items-center shadow-2xl">
                                            <div className="absolute inset-0 z-0">
                                                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/40 to-transparent z-10"></div>
                                                <img alt="Hero Background" className="w-full h-full object-cover opacity-80" src={slide.bgImage} />
                                            </div>
                                            <div className="relative z-20 px-8 md:px-16 max-w-2xl">
                                                <ScrollAnimation animation="slide-right" delay={0.2}>
                                                    <span className="inline-block px-4 py-1.5 rounded-full bg-family-primary/20 text-family-primary font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-md border border-family-primary/30">
                                                        {slide.badge}
                                                    </span>
                                                </ScrollAnimation>
                                                <ScrollAnimation animation="fade-up" delay={0.3}>
                                                    <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                                                        {slide.title.main} <span className="text-family-primary">{slide.title.highlight}</span>
                                                    </h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animation="fade-up" delay={0.4}>
                                                    <p className="text-stone-200 text-lg mb-10 leading-relaxed font-medium">
                                                        {slide.description}
                                                    </p>
                                                </ScrollAnimation>
                                                <ScrollAnimation animation="fade-up" delay={0.5}>
                                                    <div className="flex flex-wrap gap-4">
                                                        <button className="px-10 py-4 bg-family-primary text-stone-900 font-bold rounded-xl hover:bg-family-primary-dark transition-colors shadow-lg shadow-family-primary/25">
                                                            Get Started
                                                        </button>
                                                        <button className="px-10 py-4 bg-white/10 text-white backdrop-blur-md font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                                                            How it Works
                                                        </button>
                                                    </div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="hidden sm:block">
                                <CarouselPrevious className="left-12 border-none bg-black/20 text-white hover:bg-black/40 hover:text-white" />
                                <CarouselNext className="right-12 border-none bg-black/20 text-white hover:bg-black/40 hover:text-white" />
                            </div>
                        </Carousel>
                    </section>
                </ScrollAnimation>

                {/* Philosophy Section */}
                <section className="px-6 py-12">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                            <ScrollAnimation animation="slide-right" className="max-w-xl">
                                <h2 className="text-3xl font-black mb-4">{welcomeData.philosophy.title}</h2>
                                <p className="text-stone-500">{welcomeData.philosophy.subtitle}</p>
                            </ScrollAnimation>
                        </div>
                        <div className="grid grid-cols-12 gap-6 auto-rows-[220px]">
                            {welcomeData.philosophy.features.map((feature, index) => (
                                <ScrollAnimation
                                    key={index}
                                    animation="fade-up"
                                    delay={index * 0.1}
                                    className={`${feature.colSpan} ${feature.bgClass} p-8 rounded-3xl ${!feature.isEmergency ? 'border' : ''} flex flex-col justify-between group hover:border-family-primary transition-all shadow-sm hover:shadow-xl relative overflow-hidden`}
                                >
                                    {feature.isEmergency && (
                                        <>
                                            <div className="absolute top-0 right-0 p-8">
                                                <span className="material-symbols-outlined text-[10rem] text-family-primary/10 select-none">emergency_share</span>
                                            </div>
                                            <Meteors number={20} />
                                        </>
                                    )}
                                    {feature.isEmergency ? (
                                        <div className="p-4 bg-red-500 rounded-2xl text-white w-fit shadow-lg shadow-red-500/30 relative z-10">
                                            <span className="material-symbols-outlined text-3xl">emergency</span>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-start">
                                            <div className={`p-4 ${feature.iconBg} rounded-2xl ${feature.iconColor}`}>
                                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                            </div>
                                            {feature.subTitle && <span className="text-xs font-bold uppercase tracking-widest text-family-primary">{feature.subTitle}</span>}
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${feature.isEmergency ? 'text-family-primary' : ''}`}>{feature.title}</h3>
                                        <p className={`${feature.isEmergency ? 'text-stone-400' : 'text-stone-500'} ${feature.title === 'Daily Monitoring' ? 'max-w-md' : 'text-sm'}`}>{feature.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="px-6 py-20 bg-warm-beige dark:bg-stone-950/40">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation animation="slide-right" className="order-2 md:order-1">
                            <div className="inline-block px-4 py-1 bg-white dark:bg-stone-800 rounded-full text-family-primary font-bold text-xs mb-6 shadow-sm border border-stone-100 dark:border-stone-700">OUR STORY</div>
                            <h2 className="text-4xl font-black mb-8 leading-tight whitespace-pre-line">{welcomeData.story.title}</h2>
                            <p className="text-lg text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
                                {welcomeData.story.description}
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                {welcomeData.story.stats.map((stat, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className={`text-4xl font-black mb-1 ${index === 0 ? 'text-family-primary' : 'text-secondary-orange'}`}>{stat.value}</span>
                                        <span className="text-xs uppercase font-bold text-stone-500 tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animation="slide-left" className="relative order-1 md:order-2">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img alt="Caregiver connection" className="w-full h-full object-cover" src={welcomeData.story.image} />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-stone-900 p-8 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-800 max-w-[280px]">
                                <div className="flex gap-1 text-family-primary mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    ))}
                                </div>
                                <p className="italic text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">{welcomeData.story.testimonial.text}</p>
                                <p className="font-bold text-stone-900 dark:text-white">— {welcomeData.story.testimonial.author}</p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="px-6 py-24 bg-white dark:bg-stone-900">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-4xl font-black mb-4">{welcomeData.steps.title}</h2>
                            <p className="text-stone-500 mb-20 max-w-2xl mx-auto">{welcomeData.steps.subtitle}</p>
                        </ScrollAnimation>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-stone-200 dark:border-stone-700 -z-0"></div>
                            {welcomeData.steps.items.map((step, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.2} className="relative z-10 flex flex-col items-center group">
                                    <div className="size-24 rounded-[2rem] bg-warm-accent flex items-center justify-center text-family-primary-dark text-4xl font-black mb-8 shadow-xl group-hover:bg-family-primary group-hover:text-white transition-all">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-stone-500 leading-relaxed px-6">{step.description}</p>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Insights Section */}
                <section className="px-6 py-20 bg-warm-beige dark:bg-stone-950/20">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-black mb-3">Health & Wellness Insights</h2>
                                <p className="text-stone-500">Expert advice and the latest news for healthy aging at home.</p>
                            </div>
                            <button className="hidden sm:flex items-center gap-2 text-family-primary font-bold hover:gap-3 transition-all">
                                View All Articles <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {welcomeData.insights.map((insight, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1} className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100 dark:border-stone-800">
                                    <div className={`h-48 ${insight.bgHeader} flex items-center justify-center relative`}>
                                        <span className={`material-symbols-outlined ${insight.iconColor} text-6xl`}>{insight.icon}</span>
                                        <span className={`absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase ${insight.iconColor}`}>{insight.category}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className={`text-xl font-bold mb-3 hover:${insight.iconColor} transition-colors cursor-pointer`}>{insight.title}</h3>
                                        <p className="text-stone-500 text-sm mb-6 line-clamp-2">{insight.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-stone-400">{insight.readTime}</span>
                                            <span className="material-symbols-outlined text-stone-300">chevron_right</span>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-6 py-20">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {welcomeData.features.map((feature, index) => (
                            <ScrollAnimation key={index} animation={index % 2 === 0 ? "slide-right" : "slide-left"} className="flex items-start gap-8 p-10 bg-white dark:bg-stone-900 rounded-[2rem] border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-lg transition-all">
                                <div className={`p-5 ${feature.iconBg} ${feature.iconColor} rounded-2xl`}>
                                    <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </section>

                {/* CTA Section - Replaces Footer content */}
                <section className="px-6 pb-20">
                    <ScrollAnimation animation="fade-up">
                        <div className="max-w-[1200px] mx-auto bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-family-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-orange/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{cta.title}</h2>
                                <p className="text-stone-400 mb-12 max-w-xl mx-auto text-lg">{cta.description}</p>
                                <div className="flex flex-col md:flex-row gap-6 justify-center">
                                    <button className="px-12 py-5 bg-family-primary text-stone-900 text-xl font-bold rounded-2xl shadow-xl hover:shadow-family-primary/30 hover:scale-105 transition-all">
                                        Book Your First Visit
                                    </button>
                                    <button className="px-12 py-5 bg-white/5 text-white text-xl font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                        View Demo Dashboard
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
            </main>

            {/* Styles for Material Symbols Font Variation if needed */}
            <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
        </div>
    );
};

export default Welcome;
