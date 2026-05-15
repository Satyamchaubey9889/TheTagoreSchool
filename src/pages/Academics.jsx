import React from 'react';

const CURRICULUM_TIERS = [
    {
        grades: "GRADES 1-5",
        title: "Primary Tier",
        desc: "Foundational literacy and numeracy taught through play-based inquiry and creative expression.",
        features: ["Inquiry-led Learning", "Dual Language Immersion"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbIcD2itII5rEsyjHq0aTfmnnqhTIpRJ-avKYcs5ZTvXu9QQ5dSPsTkx1_L0OyIn1ZeOUKePshnuPdJBXvqepUiNXQ18h53SXc_kHMcgBT5HesTJJv8Sz_Jk0pakTPeawFBxGwoXYlxXvDE2gulvAR7lJusJwEY7FxB24akWqdvTe1UFwk-MIpA2RaXL2F-fKEwW2SeYbhNtknp7vwW30WFRiJl90vfxlEso_J89EIyTo2BGgmhTgDJG0JEZlhqo5jPqREsPCBYPE",
    },
    {
        grades: "GRADES 6-8",
        title: "Middle Tier",
        desc: "Developing critical thinking and independence through experimental science and social studies.",
        features: ["STEM Integration", "Leadership Development"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqgs2WWZ-H9FhYBPHfAMKMCYFA3Kd77DlEE4dNkWiqPRftp069IxDMKV3ZXA7jC0x0mpyFGMJZFZnIqGIbcEZtDvc2-nUtA1PrBgX2JNsVs2Cko9hnkMxObn-dlSTjUD_4U5P_-YhNnRoAEU1jNp54z2ISvqbbTfG3D7HzIHvLc57fzb0GaELjF289QBwA7epm7LgSZI717yABJkPWIPN1PZJlzB6ty5c_eHmVAYTybH1aalyEOaK5Qo35uGP7kPvGlQ-m4GldEJg",
    },
    {
        grades: "GRADES 9-12",
        title: "High Tier",
        desc: "Preparation for university life with advanced placement courses and career counseling.",
        features: ["University Placement", "Research Thesis"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbqDEUA1XjHoPFCboU242f2WiIA3xBe3yAItPDr8a3jdLM3yMympDzA5h0sWEUA499xj3PnCdO-n64eSoR9n3HQBo5oJ92vOxssMtlfiKd-Es5gVtU54LSFa1vA53BAzpTH9DqwYH2Sw9QbXVLsLIFsto4KnNAr9aEuySPtkeCBcAC0DziBDG0z-zSipwurwfWA1Q5XcOdmMSohK0jUscEQuJaQaetC-J6hR1iWEmJ7qHaCSZ0Py7GX-0H5LyIDtWatomcz40jSVg",
    },
];

const FACULTY = [
    {
        name: "Dr. Elena Rostova",
        role: "Dean of Sciences",
        quote: "Education is not just about filling a bucket, but lighting a fire of curiosity.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Hwk_YFYZ_SKoyvi8BVvk2r6Kn0hxU5PGZ3z3XIKKT2lggDjzhfSSW6sAckaHKqKeqzfC9JZ_-jYeigMKfdf_ioLM3WePbsYKeVo2DJd5QaYfymt6E0JxvXEnPI3wVklTQ2F8qFrGEmvaYshbyS71yiBSIcqD84-U0V4heLHOcxpWdFJ2GRD7blLCQDg4RYFkT7LZJx9hGLVdoC7M6Yr3rpgQ_AfQf57-dW_e9VnQLFsZwwTJlIfLFLkB7XrGdHEZO2ARNzKnbvo",
    },
    {
        name: "Julian Thorne",
        role: "Head of Humanities",
        quote: "We teach students how to think, not what to think, through history and art.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3dQ74fNmK9o1pYiF0lkXkGfN4MngSNRLfXPLuoAk6eBNaevyrb6Te7FGpFHx22WHmuyO46sVXxdPxImVVc8vPHZ1JCvju1M1P1QR9pwAIlUAa877BQCvc3mIW5euPfXLvv_uDSvOagDeh5LREWNX7EooVbGbw6JLW_xAvZub9d9hlfBpJYcrX8RT9MKyEXVHtrDfEjFoMGIH4G8CkoGlurKFt_BJBGI-iIin1Hfe__FOqUoz9ag-XRMJua0LhkcIA7DmPDuqwa4",
    },
    {
        name: "Sarah Jenkins",
        role: "Director of Arts",
        quote: "Creativity is the ultimate problem-solving tool in the 21st-century.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpd_liDIV5DTNcaI5Arymi2NrpOik27Jx8HFj7-JkayJs7A1din8_axotT07lJ2mWGh1Kp6p6HhYBV-7rxM2-3EJtMUpyJ3p-j3DnwnaxoZTpp6PHzGNq_hM_0EwZdEuLO-WrG4HGb7MpMTBSo36-sriNKoN3BLHCCl6qTtqnGUNd8qx5sTdF00Y_pzwaPMiTveKRJtpwh4p1WWQDUEZi6qgscvecZzOvd2xrxv0M9XevV8fqt_VKR3wclB7yFPyHG_GMQ6LGr1Jg",
    },
];


const TierCard = ({ tier }) => (
    <div className="bg-white rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
        <div className="h-72 overflow-hidden relative">
            <img
                alt={tier.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={tier.img}
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] tracking-[0.2em] font-black text-[#570000] uppercase">
                    {tier.grades}
                </span>
            </div>
        </div>
        <div className="p-10 flex-1 flex flex-col">
            <h3 className="text-3xl font-black mb-4 font-headline text-stone-900">{tier.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-8 font-body">{tier.desc}</p>
            <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-semibold text-stone-700 font-body">
                        <span className="material-symbols-outlined text-[#570000] text-xl">check_circle</span>
                        {f}
                    </li>
                ))}
            </ul>
            <button className="w-full py-4 rounded-2xl border-2 border-[#570000]/10 text-[#570000] font-black text-sm uppercase tracking-widest hover:bg-[#570000] hover:text-white transition-all font-headline">
                View Syllabus
            </button>
        </div>
    </div>
);

const Academics = () => {
    return (
        <div className="bg-[#f9f9f9] pt-20">

            {/* Hero Section */}
            <header className="relative py-24 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="z-10">
                        <span className="text-[#a6392b] text-xs tracking-[0.3em] font-black uppercase mb-6 block font-body">
                            The Academic Masterpiece
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-8 font-headline">
                            Legacy of <br />
                            <span className="text-[#570000] italic font-light">Intellectual</span> <br />
                            Growth.
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-12 font-body">
                            Where rigorous international standards meet a century-old heritage of modernist thought. We don't just teach; we curate potential.
                        </p>
                        <div className="flex gap-6 flex-wrap">
                            <button className="bg-[#570000] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-2xl hover:shadow-red-900/20 transition-all font-headline">
                                Explore Curriculum
                            </button>
                            <button className="bg-white border-2 border-slate-100 text-stone-700 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all font-headline">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                            <img
                                alt="Academic Excellence"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvnmOw-EYWpD8UsqbI6cO11mi_3-fWBU2hXc2FkuIIhOqVCDdm3PfWIPHEjKIUQvbYnr3VmF0o8N7hC-bSQZWWi2TV-GHxWvP0KzlItVsmAfaQbn9lNbpezbbDT8gaz16MVnr99iiS7T8X7pCnXoWzKuKCtYOKg06mzpYyWhCXzW7m2dns3L9DRNpOb2PQAWf0gTvtRkP8jyj48XPlZmidDNlqSfFylKkQQBZM9MozGywFQ3KAXLLJySnSB_mCd_tKrhHMgEB5mjs"
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ffdad4] rounded-full blur-3xl opacity-50 -z-0" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#dfe0ff] rounded-full blur-3xl opacity-50 -z-0" />
                    </div>
                </div>
            </header>

            {/* Curriculum Section */}
            <section className="py-32 bg-[#f3f3f3]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
                        <div className="lg:col-span-8">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-6 font-headline">
                                Curriculum Overview
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-body">
                                Structured, intentional, and evolving. Our trans-disciplinary approach connects mathematics with art, and technology with humanities.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex lg:justify-end">
                            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5">
                                <span className="material-symbols-outlined text-4xl text-[#570000]">verified_user</span>
                                <div>
                                    <div className="font-black text-stone-900 font-headline uppercase text-xs tracking-widest">IB Accredited</div>
                                    <div className="text-[10px] text-slate-400 font-bold font-body uppercase">World School Status</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {CURRICULUM_TIERS.map((tier) => <TierCard key={tier.title} tier={tier} />)}
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <span className="text-[#a6392b] text-xs tracking-[0.3em] font-black uppercase mb-4 block font-body">
                            The Academic Vanguard
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 font-headline">
                            Expert Faculty
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {FACULTY.map((f) => (
                            <div key={f.name} className="group text-center">
                                <div className="w-48 h-48 mx-auto rounded-[3rem] overflow-hidden mb-8 shadow-xl group-hover:rotate-3 transition-transform duration-500">
                                    <img alt={f.name} className="w-full h-full object-cover" src={f.img} />
                                </div>
                                <h4 className="text-2xl font-black text-stone-900 font-headline">{f.name}</h4>
                                <p className="text-[#570000] text-xs font-black uppercase tracking-widest mt-2 font-body">{f.role}</p>
                                <p className="mt-6 text-slate-500 font-body italic leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                    "{f.quote}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-24 bg-[#F9F7F2]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-serif italic text-stone-900 mb-4">
                            Holistic Development
                        </h2>
                        <div className="h-1 w-20 bg-[#570000] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[650px]">

                        {/* Fine Arts & Music Card */}
                        <div className="lg:col-span-8 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-10 md:p-16 shadow-2xl shadow-stone-200 group">
                            {/* Soft Grain Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-[#570000]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#570000]/10">
                                        <span className="material-symbols-outlined text-[#570000] text-4xl">palette</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Fine Arts & Music</h3>
                                    <p className="text-stone-600 text-lg max-w-md leading-relaxed">
                                        From classical violin to digital sculpture, arts are a core pillar of our century-old philosophy.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#570000] transition-colors duration-300 shadow-lg">
                                        View Art Gallery
                                    </button>
                                </div>
                            </div>

                            {/* The Fox Image - High contrast, slightly desaturated */}
                            <img
                                alt="Artistic Fox"
                                className="absolute right-[-10%] bottom-[-5%] w-2/3 md:w-1/2 h-auto object-contain opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out mix-blend-multiply"
                                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=800"
                            />
                        </div>

                        {/* Athletics Card */}
                        <div className="lg:col-span-4 relative overflow-hidden rounded-[2.5rem] bg-[#570000] p-10 md:p-12 text-white shadow-2xl shadow-red-950/20 hover:translate-y-[-8px] transition-transform duration-500">
                            {/* Subtle Texture/Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-white/20">
                                        <span className="material-symbols-outlined text-white text-3xl">sports_soccer</span>
                                    </div>
                                    <h3 className="text-4xl font-serif mb-6">Athletics</h3>
                                    <p className="text-white/80 text-lg leading-relaxed font-light">
                                        Championship teams in swimming, soccer, and equestrian sports focusing on teamwork and grit.
                                    </p>

                                    {/* Decorative Laurel Wreath Icon */}
                                    <div className="mt-10 opacity-30">
                                        <span className="material-symbols-outlined text-8xl">military_tech</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/20 flex justify-between items-center group cursor-pointer">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-1">Varsity Program</p>
                                        <span className="text-lg font-bold">15 Varsity Teams</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#570000] transition-all duration-300">
                                        <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;