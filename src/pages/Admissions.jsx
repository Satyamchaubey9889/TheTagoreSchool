import React, { useState } from "react";

const ADMISSION_STEPS = [
    {
        icon: "description",
        step: "01",
        title: "Enquiry & Registration",
        desc: "Complete the online enquiry form and register for the upcoming academic session.",
    },
    {
        icon: "school",
        step: "02",
        title: "Interactive Session",
        desc: "Students participate in a friendly interaction and assessment to understand their interests.",
    },
    {
        icon: "verified",
        step: "03",
        title: "Document Verification",
        desc: "Submission of academic records and necessary identity documentation for final review.",
    },
    {
        icon: "check_circle",
        step: "04",
        title: "Confirmation",
        desc: "Formal offer letter issued, followed by fee payment to secure your seat.",
    },
];

const FEE_PLANS = [
    {
        title: "Primary School",
        grades: "Grades K–5",
        price: "₹12,500",
        badge: null,
        highlight: false,
        items: [
            { label: "Registration (One-time)", value: "₹500" },
            { label: "Lab & Library Fees", value: "₹850" },
            { label: "Activity Charges", value: "₹1,200" },
        ],
    },
    {
        title: "Middle & Senior",
        grades: "Grades 6–10",
        price: "₹15,800",
        badge: "Most Enrolled",
        highlight: true,
        items: [
            { label: "Registration (One-time)", value: "₹500" },
            { label: "Lab & Library Fees", value: "₹1,400" },
            { label: "Technology Access", value: "₹1,800" },
        ],
    },
    {
        title: "Residential Program",
        grades: "Boarding",
        price: "₹22,000",
        badge: null,
        highlight: false,
        items: [
            { label: "Full Boarding & Dining", value: "Included" },
            { label: "Health & Wellness Fee", value: "₹900" },
            { label: "Laundry & Maintenance", value: "₹600" },
        ],
    },
];



const Admissions = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const CALENDAR_ITEMS = [
        { icon: "event", date: "August 15, 2024", label: "Registrations Open" },
        { icon: "calendar_today", date: "November 30, 2024", label: "Early Bird Deadline" },
        { icon: "groups", date: "January 10, 2025", label: "Main Entrance Exams" },
    ];

    const FAQS = [
        { q: "What is the teacher-to-student ratio?", a: "We maintain a strict 1:12 ratio to ensure every child receives the intellectual attention they deserve." },
        { q: "Do you offer scholarships for academic excellence?", a: "Yes, merit-based scholarships are available for students entering Grades 8 through 11." },
        { q: "Is the school curriculum IB or CBSE?", a: "We offer a hybrid Tagore Curriculum that integrates CBSE rigor with IB inquiry methodology." },
    ];

    return (
        <div className="bg-[#f9f9f9] text-[#1a1c1c] pt-20">

            {/* Hero Section */}
            <header className="relative h-[70vh] min-h-[550px] flex items-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="The Tagore School Campus"
                        className="w-full h-full object-cover "
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6_P0ZQiM-qeNweVu9Y2BSAyAw_8UdQVUsucQJfzrJdvIq_Y5Xe3_weZE_iEzufdc2AZ80scN8Jpiwhz5CNAefbA31COPxb9oxTeJ9wgUhevl4h_TO49UyKNMZsnOQnYIxwXxQmzQSep5E3_IERVtR2LIj2nfyLow61ZO8bI5N31hI21h3QfIAVr0tvWbb3FSZiZqV5ULzb0dMAHXFNVTa2fuAvJO9sMmMzz2KIyzQCa8sJE6aFQw9PdYnYrt9wLA1okbmfFCIUIU"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/40 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
                    <span className="text-[#800000] font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-body">
                        Admissions 2024-25
                    </span>
                    <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter max-w-3xl mb-8 leading-none">
                        A Legacy of <br />
                        <span className="italic text-[#800000] font-light">Modern Minds.</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-xl leading-relaxed font-body">
                        Join a community where heritage meets innovation. Our admissions
                        process is designed to find curious minds ready to shape the future.
                    </p>
                </div>
            </header>

            {/* Admission Journey */}
            <section className="py-32 bg-[#f9f9f9]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-20">
                        <h2 className="font-headline text-4xl md:text-5xl font-black text-[#570000] mb-6">
                            The Admission Journey
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-lg font-body">
                            A clear, phased approach to joining our academic community.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ADMISSION_STEPS.map((step) => (
                            <div key={step.step} className="bg-white p-10 rounded-3xl shadow-[0_12px_32px_rgba(87,0,0,0.06)] relative group hover:-translate-y-2 transition-all duration-500">
                                <div className="mb-8 text-[#800000]">
                                    <span className="material-symbols-outlined text-5xl">{step.icon}</span>
                                </div>
                                <div className="absolute top-10 right-10 font-headline text-5xl font-black opacity-5 text-[#570000]">
                                    {step.step}
                                </div>
                                <h3 className="font-headline font-black text-2xl mb-4 text-stone-900">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-500 font-body">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="py-32 bg-[#f3f3f3]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h2 className="font-headline text-4xl md:text-5xl font-black text-[#570000] mb-4">
                                Transparency in Value
                            </h2>
                            <p className="text-slate-500 text-lg font-body">
                                Investing in a future that honors heritage and embraces progress.
                            </p>
                        </div>
                        <div className="bg-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-100 font-body">
                            <span className="material-symbols-outlined text-[#570000]">info</span>
                            <span className="text-sm font-bold text-stone-700">
                                Session 2024-25 Estimates
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {FEE_PLANS.map((plan) => (
                            <div key={plan.title} className={`bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(87,0,0,0.1)] relative transition-transform hover:scale-[1.02] ${plan.highlight ? "ring-2 ring-[#570000]" : ""}`}>
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-br from-[#570000] to-[#800000] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="p-10 border-b border-slate-50">
                                    <h3 className="font-headline font-black text-xs text-[#a6392b] uppercase tracking-widest mb-3">
                                        {plan.title}
                                    </h3>
                                    <div className="text-5xl font-black text-stone-900 font-headline">
                                        {plan.price} <span className="text-sm font-medium text-slate-400">/pa</span>
                                    </div>
                                </div>
                                <div className="p-10 space-y-6 flex-1 bg-slate-50/30">
                                    {plan.items.map((item) => (
                                        <div key={item.label} className="flex justify-between text-sm font-body">
                                            <span className="text-slate-500">{item.label}</span>
                                            <span className="font-black text-stone-800">{item.value}</span>
                                        </div>
                                    ))}
                                    <button className={`w-full mt-6 py-4 rounded-xl font-headline font-black text-xs uppercase tracking-widest transition-all ${plan.highlight ? 'bg-[#570000] text-white shadow-xl shadow-red-900/20' : 'border-2 border-slate-100 text-[#570000] hover:bg-slate-50'}`}>
                                        Select Tier
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento FAQ & Calendar */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Calendar */}
                        <div className="lg:col-span-5 bg-[#f3f3f3] rounded-[3rem] p-12">
                            <h2 className="font-headline text-3xl font-black text-[#570000] mb-12">
                                Deadlines
                            </h2>
                            <div className="space-y-10">
                                {CALENDAR_ITEMS.map((item) => (
                                    <div key={item.date} className="flex gap-6 items-center group">
                                        <div className="bg-white text-[#570000] p-4 rounded-2xl shadow-sm transition-transform group-hover:scale-110">
                                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-black text-stone-900 font-headline">{item.date}</p>
                                            <p className="text-sm text-slate-500 font-body uppercase tracking-widest font-bold">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="lg:col-span-7">
                            <h2 className="font-headline text-3xl font-black text-[#570000] mb-12">
                                Questions
                            </h2>
                            <div className="space-y-4">
                                {FAQS.map((faq, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 cursor-pointer hover:shadow-md transition-all" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                        <div className="flex items-center justify-between gap-6">
                                            <h4 className="font-black text-stone-900 font-headline">{faq.q}</h4>
                                            <span className={`text-[#570000] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                                                <span className="material-symbols-outlined">add</span>
                                            </span>
                                        </div>
                                        {openFaq === i && (
                                            <p className="text-slate-500 font-body leading-relaxed mt-6 pt-6 border-t border-slate-50">
                                                {faq.a}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 max-w-7xl mx-auto px-8 mb-24">
                <div className="bg-gradient-to-br from-[#570000] to-[#800000] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight mb-8">
                            Start Your Journey Today
                        </h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-14 font-light font-body">
                            Admissions for the 2024-25 session are now filling up. Secure your
                            place in our legacy.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <button className="bg-white text-[#570000] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest font-headline shadow-xl hover:scale-105 transition-transform">
                                Apply Online Now
                            </button>
                            <button className="bg-white/10 border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest font-headline hover:bg-white/20 transition-all">
                                Download Prospectus
                            </button>
                        </div>
                    </div>
                    <img
                        alt=""
                        className="absolute inset-0 opacity-10 object-cover w-full h-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpy1tfG0J3E20JCa6yH1vv0CLTMZ6meZCsAPY_4CsuxpiNiRydZIqQ1nY7J6GLNcKyrT812jwh3JWmPduVarPPphXqmlfzl-Nfczis_gA2kZdJz9FAzORR2e6PxeVyHxrYpmDHN_8hpwwuo_zx0It8_8jqyki-4Q8a07g4rVWn3yHIUj6A5qw0ZkOsFh8Y8b-xzsjIdb7sDsTvth6RjQFdEHauo7pHzs1rQrlQpmMcjxad0fKWC86bgiM35kSYIujPIOwkfHQDf10"
                    />
                </div>
            </section>
        </div>
    );
};

export default Admissions;