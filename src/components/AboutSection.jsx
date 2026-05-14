import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-0 px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAY-ZpHI6vePHDi8ez-Oc9XyMB3_gDL6cqGPBUt54w8J53iWS0qytQmo1SPYQsCKMx1tG9OChUE4_gcQfaHre_VB5iRqlYv6zwMP56qCTJmadcQEYfPu9SwE2KzId1smHlqWOxUTx10CJRf-16ESzn7aO8hIZsyjRyaG4E1slr1jHNXw4l8CSiTac2zQjfrb55IQ-M_7s1JbGQYeHn4OZgFIi8T4MU9bvOBdTQIAd_dT-OEWdOvsMLanYw0q78vUet173dGBgLLFY"
                        alt="School Heritage"
                    />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-surface-container-high rounded-xl -z-10"></div>
            </div>
            <div>
                <span className="text-primary font-label uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Our Heritage</span>
                <h2 className="text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">
                    A Legacy of Intellectual <span className="text-primary italic">Curiosity</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-on-surface/80">
                    <p>Founded in 1994, The Tagore School has stood as a beacon of academic excellence in Lucknow for over three decades.</p>
                    <p>Inspired by the philosophy of Rabindranath Tagore, we blend rigorous CBSE standards with an editorial approach to learning.</p>
                </div>
                <div className="mt-12 flex gap-4 items-center text-primary font-bold cursor-pointer group">
                    <span className="border-b-2 border-primary">Read our full history</span>
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform"></span>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;