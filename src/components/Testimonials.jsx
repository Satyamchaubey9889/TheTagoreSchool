import React from 'react';

const TESTIMONIALS = [
    {
        text: "Choosing The Tagore School was the best decision for our daughter's growth. The balanced approach to academics and heritage is unique.",
        name: "Ananya Sharma",
        role: "Parent, Class IX",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz7lm7_0InpDxoHhNX7zq-hNLtlPDALuyhA7zgiETe0J4CqXeZPLgiXL9Enkziat4QeXY3m-6NVj4GDV9JbeWT0sT9Quq16034eVnpYi2sIrp-B5_mu3Vk1vDLIT_ZwaSv27SA9kJ39W22GUw_gyJBvYy64kLyPPjTwpCtBC8AjbOyLfB8v5h4iWE6dHhAqGq3AaCzGuLNT1rGytEK09xn1e6xYRzazRB4yrGg06Rr-5yl88g5PpCH0bx0epU1uTyxByUMSGYO_dE",
        featured: false,
    },
    {
        text: "The teachers here don't just teach; they mentor. The facilities and the atmosphere pushed me to exceed my own expectations.",
        name: "Rohan Verma",
        role: "Alumnus, Batch 2022",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-epQu6U9Is7dpZTqbDg55uY1HMwLMWLY68CrB_aOS0A2XBWkj9JohrdWvtwIrqwew-7NloxGThk4faIpY5qaCVKJJ-kKlWyGDp0oJp3Rx1UsGxuRiqaZuaz6g4rwWez3jeD0D4VuomAciSqLeJYrg2UAa9C8hCB7kkKo2mY7MOJsB-o8jNaSJZS7_BCYWYc8Zba4vUe3PbMp8edWdfCfxFFse8gJU7IjNfdT3lEXQIFIPmk3AiSy1qIw7MCEvqLi07frq1d54XOQ",
        featured: true,
    },
    {
        text: "The safety standards and modern infrastructure coupled with traditional values make this the ideal campus for modern schooling.",
        name: "Dr. Meera Iyer",
        role: "Parent, Class XII",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGgoOj2BoAMQdb0k8QySXAfYBZwfvstj5D0kmfA5DnhzrBU3ZUHU0mfWL6ccOuRs88T07eRi03ktY4LxP1Cd6WI3v94Hyk36euuaelSfnl7Jp9Jlcrg2hw0Tf1bYb3JifKltFWwNKbOyVyYNYrJqlNMhqhdDWTvNEMuDCpGqHzU1i3s72_gb-3QYhCNJ5D4TuoR46iKRS5WeLcLN-POg1ULOfOrEaV1xjeYqWh5QbDbAXFGsxsWD8kf4I4TtXdZ9vXV1N9FUJ1kmc",
        featured: false,
    },
];

const StarRating = () => (
    <div className="flex text-[#fc7966] mb-6">
        {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
            </span>
        ))}
    </div>
);

const TestimonialCard = ({ item }) => (
    <div className={`bg-white p-10 rounded-[2rem] transition-all duration-500 flex flex-col relative overflow-hidden group cursor-default ${item.featured
            ? "scale-105 shadow-[0_20px_50px_-20px_rgba(87,0,0,0.15)] ring-1 ring-[#570000]/10 z-10"
            : "shadow-sm border border-slate-100 hover:shadow-md"
        }`}>
        {/* Decorative Quote Icon */}
        <span className="absolute top-6 right-8 material-symbols-outlined text-6xl text-slate-50 opacity-10 group-hover:opacity-20 transition-opacity select-none">
            format_quote
        </span>

        <StarRating />

        <p className="text-stone-600 italic mb-10 leading-relaxed flex-1 font-body text-lg relative z-10">
            "{item.text}"
        </p>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
            <div className="relative">
                <img
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm"
                    src={item.img}
                    alt={item.name}
                />
                {item.featured && (
                    <div className="absolute -bottom-1 -right-1 bg-[#570000] text-white rounded-full p-0.5 shadow-sm">
                        <span className="material-symbols-outlined text-[12px] block">verified</span>
                    </div>
                )}
            </div>
            <div>
                <div className="font-black text-stone-900 font-headline tracking-tight">{item.name}</div>
                <div className="text-[10px] text-[#a6392b] font-black uppercase tracking-[0.15em]">{item.role}</div>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
    <section className="py-32 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-8">
            {/* Header */}
            <div className="mb-20 text-center">
                <span className="text-[#a6392b] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                    Community Voices
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 font-headline text-stone-900">
                    What Parents & Students <span className="text-[#570000] italic">Say</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#570000] mx-auto rounded-full" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10 items-stretch">
                {TESTIMONIALS.map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-20 text-center">
                <p className="text-stone-400 font-body text-sm tracking-wide">
                    Trusted by over <span className="font-bold text-stone-600">2,500+ families</span> across Rajasthan.
                </p>
            </div>
        </div>
    </section>
);

export default Testimonials;