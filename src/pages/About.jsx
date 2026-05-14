import React, { useState } from "react";


const TagoreLogo = ({ size = 40 }) => (
    <svg width={size} height={Math.round(size * 1.25)} viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="88" cy="24" rx="15" ry="22" fill="#38BDF8" transform="rotate(-18 88 24)" />
        <ellipse cx="112" cy="20" rx="13" ry="19" fill="#0EA5E9" transform="rotate(14 112 20)" />
        <path d="M100 42 L86 118 L114 118 Z" fill="#7f1d1d" />
        <ellipse cx="100" cy="119" rx="15" ry="7" fill="#7f1d1d" />
        <path d="M30 150 L30 182 L5 182 L5 155 Z" fill="#7f1d1d" />
        <path d="M86 120 L28 153 L28 183 L86 155 Z" fill="#7f1d1d" />
        <path d="M86 120 L52 142 L52 172 L86 155 Z" fill="#38BDF8" opacity="0.7" />
        <path d="M170 150 L170 182 L195 182 L195 155 Z" fill="#7f1d1d" />
        <path d="M114 120 L172 153 L172 183 L114 155 Z" fill="#7f1d1d" />
        <path d="M114 120 L148 142 L148 172 L114 155 Z" fill="#38BDF8" opacity="0.7" />
        <text x="100" y="210" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize="20" fill="#7f1d1d" letterSpacing="1">THE TAGORE</text>
        <text x="100" y="232" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize="20" fill="#7f1d1d" letterSpacing="1">SCHOOL</text>
        <rect x="28" y="238" width="144" height="3" rx="1.5" fill="#38BDF8" />
    </svg>
);

const SectionLabel = ({ text }) => (
    <span className="text-[#800000] tracking-[0.2em] text-xs font-bold uppercase block mb-4 font-body">
        {text}
    </span>
);


const AboutHero = () => (
    <section className="relative flex items-center overflow-hidden bg-[#570000] h-[80vh] min-h-[600px]">
        <div className="absolute inset-0 z-0">
            <img
                alt="Tagore School heritage building"
                className="w-full h-full object-cover opacity-40 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHS1WhX67WXZkj5Y8NXbREGcdYEZKBxUuok50YnjhHEy1FpKcXcu-zmkmzqX_uk9TX26CCl382pmwNQM77Oog4QwBdSxYws1l1X1--P2YUCG4IwKNrVB6RgoUSnnlU5oxEVeO7bwCw-uH5N7qX984PfD_-BR_K-IQT1d3gYQARoH38IVgP1uk93GHNInZsSLNHf0XHHOcHvaVa6NLcOUrK5lou6aSjDF5iHhNGk8BtLW_ULV312psMck-FHeSn1Z1zcljPQx0B-cI"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#570000] via-[#57000099] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
                <span className="text-white/70 tracking-[0.2em] text-xs font-semibold mb-4 block uppercase font-body">
                    Established 1924
                </span>
                <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter mb-8 font-headline">
                    The Heritage <br />
                    <span className="italic font-light">Modernist.</span>
                </h1>
                <p className="text-white/80 text-xl leading-relaxed max-w-lg font-body">
                    Where intellectual rigor meets artistic expression, nurturing the thinkers and creators of tomorrow within a century-old legacy.
                </p>
            </div>
        </div>
    </section>
);

const Mission = () => (
    <section className="py-24 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
                <div className="relative">
                    <img
                        alt="School courtyard fountain"
                        className="rounded-xl shadow-2xl z-10 relative w-full object-cover aspect-[4/5]"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkaDNpEBKFyl-XDvFXun2q4I1bPbpYfQfQ2QWVI7f1YA8JFZNM9jieycUQFke69FKdwLrZ5Hi3sDaNiOHlj8KqBbXbgd2Y_8EHelVHvSD24cajNMjsiKNtmMzm19_Q-SH-0CdPaUtQ5_d_ri-XBNThHlYrdCSlQlvoz6NUonHncVJJzXPUdNwBrki7GosRBQfVQRMutzjX1mw09Pi0g6ZZAQa9s9O-4xtd2kek7a6TTMPt3buoYq-4oX9fffX2YWWIEZS3X9Io1wU"
                    />
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-red-100 opacity-50 rounded-full blur-3xl pointer-events-none" />
                </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
                <SectionLabel text="Our Mission" />
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-headline">
                    Empowering Minds through<br />Holistic Inquiry
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-6 font-body">
                    We believe education should be a liberating process. Our mission is to foster a community of lifelong learners who are intellectually curious, socially responsible, and culturally empathetic.
                </p>

                <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
                    {[
                        { value: "100+", label: "Years of Excellence" },
                        { value: "12:1", label: "Student-Teacher Ratio" },
                    ].map(s => (
                        <div key={s.label}>
                            <span className="text-4xl font-extrabold text-[#800000] block mb-1 font-headline">
                                {s.value}
                            </span>
                            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-body">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const TimelineItem = ({ item }) => (
    <div className={`relative flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}>
        <div className={`md:w-1/2 ${item.reverse ? "pl-0 md:pl-16" : "md:text-right pr-0 md:pr-16"}`}>
            <span className="text-4xl font-black text-red-900/20 block mb-2 font-headline">
                {item.year}
            </span>
            <h3 className="text-2xl font-bold mb-4 font-headline">
                {item.title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-body">{item.desc}</p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#800000] z-10 hidden md:block border-4 border-[#eeeeee]" />

        <div className={`md:w-1/2 ${item.reverse ? "md:text-right pr-0 md:pr-16" : "pl-0 md:pl-16"}`}>
            <img
                alt={item.title}
                className={`rounded-xl w-full object-cover ${item.imgClass}`}
                src={item.img}
            />
        </div>
    </div>
);

const History = () => {
    const TIMELINE = [
        {
            year: "1924",
            title: "The Foundation",
            desc: "Founded as an experimental learning center by visionary educators, bridging traditional philosophies with modern scientific inquiry.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN1ByPS-Qa2rTJf7bA7aY4Oj0K4jAARDCcoaq5zoe900W_etIVjdaKuqHTJCVVRzibmGBFX7W_C9a3zPfL6ShBA-oEMNnOynA1uRyr825SUIT4eeYVsvXXHP6KVGQlswxXy_9Hs0SNTy7IXfTBckZllzbhPx1Hu-dAjpaEQY_Mhs7PbcKvgVO2W7K6QYsRZm1NK32XBemtpxGl_bJeURtC_UqPYoUJ0CIjUrHnMVh3g7mltEELh0Fo1aM-vFzGMQ1TlRLkIdhUpPk",
            imgClass: "grayscale opacity-80",
            reverse: false,
        },
        {
            year: "1972",
            title: "The Modernist Shift",
            desc: "Integration of the Arts and Humanities into a global curriculum, becoming a pioneer in multidisciplinary secondary education.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoLgGPbK-m50GmLAp_yZAN65aEoSEI5BSLTXSJJo4QIsl-hN8ZaQ6Y_4pCef8_AO_Xb2qT-ELJsY-wEPG5ZxRMGgXx_MAHPVBUKkzxzECqM_8WyXZGgTLtCaWgCRZ9w3rYSRWH1TwS_vC6MF7Eg6Z_p1_WnxqdaIXneSLvw5tM2eRdJDid4lpsRpXp_9xiDUgvN5QFa8GJcjoQh2vVJTP-Gp8aCK23fM4vE0cT1rPMNvUL9EpqLfcPEcC-6GWFwlhtRLUCn8mjVHM",
            imgClass: "",
            reverse: true,
        },
        {
            year: "2024",
            title: "Centenary & Future",
            desc: "Unveiling our carbon-neutral campus extension, dedicated to sustainable innovation and advanced digital literacy.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsh6oyBpDGHnNZG-QJFD7iOvW3Z0oEBVbDTQeqlrYUgzuMVmThuhJpZAbtCXx_Z_YrfwdYitqP-JoNqDNk6w5Q2MW8eChvyPT2qsMddxdwzEaCTvQuZ11VTaPm_B6rHuxOc2YV5OEFI5B5mNUxZHvBeaE6ldG-K2YYmC2yqDuJ1qb0aGSwVPEKF_5B6mIEAp6sIieqR9k3PLGbT7URR9UsiSRjCIwQ1bqDRKflrHAQHOunyFf8BycPOi_23gUsKssfb1D8SZIGIKI",
            imgClass: "shadow-lg",
            reverse: false,
        },
    ];

    return (
        <section className="py-24 bg-[#eeeeee]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <SectionLabel text="Our History" />
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-headline">
                        A Century of Transformation
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-px bg-slate-300 hidden md:block top-0 bottom-0" />
                    <div className="space-y-24">
                        {TIMELINE.map((item, i) => <TimelineItem key={i} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Leadership = () => {
    const LEADERS = [
        {
            name: "Dr. Elena Tagore",
            role: "Principal & Director",
            bio: "PhD in Educational Psychology, leading Tagore's academic excellence for over 15 years.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhPXRzva7jozFjxGwB627DFw9qfkx19kwTGLGrkthNYkADW0SqcXPbaZ-38HRo3M4vCvEoexTSNTejq3cShScvLCC3ddCQRg_Z5UpJGqLzU8QNQSMAx0Hr_Itx_Suh8WjCMNrp3J6qWz_TzMl4C4PlK5pDLkbVpe9AWgZvgx3UodXs4ERcS0b9lj7ZdlSeb3zXu5C2NlEselsvM5kzNr5wQWIGPmeuJy4oJLCz8jGnJnZDCpXNXp4oMNELRYNLlVfJFwbP_o9C9Yg",
        },
        {
            name: "Prof. Julian Vane",
            role: "Chairman of the Board",
            bio: "Former University Chancellor, dedicated to maintaining Tagore's historical prestige.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSZQoGk5H2grzULGtfXeex6Dl8-3qmI9a8IkaLSQD4tGkHGSEsiNX2MP3-40lC7rgfUESNXYOMqQ_J0DzUjxRNA8YK36zS3_lXgX4tdW9Yv5jLjIEbIdrbUq3EVr_67QevZQdPdA06uGl3ApO8E8sKRsNgeSMrYjm2ZqAvr_nIVaTICJnM-llaUV__YBRuTxZhAeMrlAxjT6os6K6i7ffdR8nkBjr-UPv1YH7-D6DETKEhk3wKPmy-Q1HRIMpmAN5ehB43b2bCqm8",
        },
        {
            name: "Sarah Sterling",
            role: "Head of Academics",
            bio: "Specialist in international curricula and inquiry-based pedagogy.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2eU_TYH7nEFCXBi3MQ3LDatYLs7Azexfq0nge8grhu29N3tL7T2VOjGL1OyHihJGDz3H9FbzyEKn-IrLdFkEeuoJUnylNcHugMWw7jFsZPF1L-9D8W411OqBZPaxlrmSDYGZZxpenAHKyE12tfLGC79PnmiIVqRZFgnHwDBfEHgwcdgTAz6iJMrP57txUULncSCMnxcAkZPAP_LBeGz9RE35B-kdLQ118JnspOIWBR0JLembKa4VYVScxRMCK9Yeip-MlCnT4asg",
        },
    ];

    return (
        <section className="py-24 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-16">
                    <SectionLabel text="Leadership" />
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-headline">
                        Guided by Vision
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {LEADERS.map((person, i) => (
                        <div key={i} className="group">
                            <div className="overflow-hidden rounded-xl mb-6 aspect-[3/4]">
                                <img
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={person.img}
                                />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 font-headline">
                                {person.name}
                            </h4>
                            <p className="text-[#800000] uppercase text-xs font-bold tracking-widest mt-1 font-body">
                                {person.role}
                            </p>
                            <p className="mt-4 text-slate-500 text-sm leading-relaxed font-body">{person.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AcademicMosaic = () => {
    const MOSAIC = [
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_hKf_bBd5oizIiuY3AJTro7djEIV-b0oP-VeV9_c2QwkmZZywqw4n4oC-aJ76P9UApTcjv0_b_YuzSDQePL_PbSofk75KEAk0jVJGi0355n8af2aw_VIPRibuEQcN7FQ21yBGLRj_bvbn91M1GgO3A8o1VT8YWSCNYRXVmZYBTMAmVsgPlj0H6BABsllaYseSrhVPkH1PYACgD1DRb1x1zdb83149G10rebCA4lqmaS9tgwZeFn8Bta0uptk7ZZE13MMUW6gQQLI",
            label: "Scientific Inquiry", span: "col-span-2 row-span-2",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWrphOb8Uzumj1feqPwAmXGfRvU5GxA6YZNE7V1SsLv5GnoALUrzMqZ3rvQ3FfaOFYLxxEeNyJCt6pC_7MA_t5xRtiBk5NvmpYGHpS7wAO6Yr16CSoBmf5XNLjfEgHIGB3Ythx1oIVWJAfog5NGZVDW1VToT3PJfkbh7zo_6K6G2UhXSsrdHsg8fP-Gf4yE0G66zX2kXf5xKKYUseuv3AFRPxGtkO0_2jtuu3FrCst_ynGx4aI2_ZEvN4qLpJC49LE5JDz75F0e5A",
            label: "Performing Arts", span: "col-span-2 row-span-1",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiRoRMv3_OGG7UhPs4pIdm5VT22duOx9CvSQGz4LVBf7QbWDjf_nGF4ZfLjl7SkdCP9aPJcaUH-QEWIWn0Lw5PCMJAgwtQmhTNRfw5nFoE-SQz4FDDyEtiRkNSyvgBSQmW71hdZRYNkOh9ZzB9QbJk9y-g9bgaFUZJd2LjfoPlV9PqAe-L1hHG6PWKyJbKQLpXNBBkvSQmlUKZ_2rZaOWLcRyiZV_hFzjpoEXY_EpqLfcPEcC-6GWFwlhtRLUCn8mjVHM",
            label: "Sports", span: "col-span-1 row-span-1",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSHe7CY0sSCPr21kVSBMse5pWj5T4n5QDdkSCX99Iy21tG3YSLFEpyS0Eesjyb0S0lTB6c3siYnbMxjOhgFhgzAQqJUXf_5L98pKoxGRT1MDKd6eWrGeR2OysAm4hmL6UPp3h0UQCePLki6c4_F4zOp9Yy-m4QAhSoWuGEYJqFLR0t_XlVClMJthcJGuCJR19A4ErNsxNlwfHRypG_QztXyc6WZ1AtnZKwtfnWgFtzFRYQs1x2-brTFQ5iiPZS-P0nKIUO8CrYOSg",
            label: "Collaborative Learning", span: "col-span-1 row-span-1",
        },
    ];

    return (
        <section className="py-24 bg-[#f3f3f3] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <SectionLabel text="Life at Tagore" />
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-headline">
                        The Academic Mosaic
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 grid-rows-[250px_250px]">
                    {MOSAIC.map((item, i) => (
                        <div key={i} className={`relative group overflow-hidden rounded-xl ${item.span}`}>
                            <img
                                alt={item.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src={item.src}
                            />
                            <div className="absolute inset-0 bg-[#800000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <span className="text-white font-bold text-xl font-headline">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTABanner = () => (
    <section className="py-24 bg-gradient-to-br from-[#570000] to-[#800000] relative">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-headline">
                Ready to Join Our Legacy?
            </h2>
            <p className="text-white/80 text-xl mb-12 font-light font-body">
                Admissions for the 2024–25 academic year are now open. Experience a century of excellence.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="bg-white text-[#800000] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                    Download Prospectus
                </button>
                <button className="text-white border-2 border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                    Book a Campus Tour
                </button>
            </div>
        </div>
    </section>
);



const About = () => {
    return (
        <div className="pt-16"> {/* Spacer for fixed Navbar */}
            <AboutHero />
            <Mission />
            <History />
            <Leadership />
            <AcademicMosaic />
            <CTABanner />
        </div>
    );
};

export default About;