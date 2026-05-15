import React, { useState } from "react";
import logo from "@/assets/logo.png";

// ─── Data & Constants ────────────────────────────────────────────────────────

const NAV_ITEMS = [
    { icon: "dashboard", label: "Dashboard" },
    { icon: "newspaper", label: "News" },
    { icon: "photo_library", label: "Gallery" },
    { icon: "grade", label: "Results" },
    { icon: "event", label: "Events" },
    { icon: "person_add", label: "Admissions Enquiries" },
];

const STATS = [
    { icon: "person_add", label: "TOTAL ENQUIRIES", value: "1,240", badge: "+12%", badgeClass: "text-[#570000] bg-[#ffdad4]" },
    { icon: "newspaper", label: "NEWS PUBLISHED", value: "85", badge: "Active", badgeClass: "text-green-600 bg-green-50" },
    { icon: "event", label: "UPCOMING EVENTS", value: "12", badge: "This Month", badgeClass: "text-[#862217] bg-[#41000015]" },
    { icon: "photo_library", label: "GALLERY ITEMS", value: "450", badge: "Synced", badgeClass: "text-[#1830c2] bg-[#dfe0ff66]" },
];

const ENQUIRIES = [
    { initials: "AA", name: "Aanya Agrawal", grade: "Grade 9", date: "Oct 24, 2023", status: "Pending" },
    { initials: "RK", name: "Rohan Kumar", grade: "Kindergarten", date: "Oct 22, 2023", status: "Responded" },
    { initials: "SN", name: "Sara Nelson", grade: "Grade 11", date: "Oct 21, 2023", status: "Responded" },
    { initials: "VJ", name: "Vikram Jha", grade: "Grade 4", date: "Oct 20, 2023", status: "Pending" },
    { initials: "MT", name: "Maya Tandon", grade: "Grade 2", date: "Oct 19, 2023", status: "Responded" },
];

const CAMPUS_IMAGES = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmJ3l8ZKa5bbuv7ZN1SUppUzTO48BrlnYoKyw5mrAtvt6hFUFvUxS0rlWcH5Ky2cZUD-tlWY59icVKIY2vV3LM_Uh8G8dhVoikZlXJoiKxx7fWnhiqRs9gntKE8whsE1mXXhuWGTEDkDDwzyZnDHUy7V9I0ugsmnxeTgzAsjHQU-nFbnHBATYwXf6o59Ik6C8A1ASe5h3cIe1pif9p8uIxhck2vwQVCJdggTs4LhoMvmP1wz1dY9W7YKOrWIkq99kI31BAIJHZfpQ",
        alt: "Campus Architecture",
        caption: "Architecture",
        title: "New Science Wing Inauguration",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-vx3TGLo_pvDsHS9npCc3zgZnzbgylxnG9_BuP1WmmI91VUBUm5h09pwjkFdpYmqtRje1490rq0VxIyFALCvs8KvshVqgZYZkwnBVv5Vr_tCv7LdDTGV0K60tknt7z16bSNhulYBcSNx0g7aM3u_Wg9uN0wweZEmzM0MlZULloGbSD2sZ_H85QCXxwbKu2nk-26WDWCPs9NDF8XpjHzSCDakofy5uAvrQ4TQ_Grao70oenii4ARjQPyaQEbdJz3KrlxhqfoL7Oqg",
        alt: "Students",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfeMpgBvLDCF61LWw2p9MiIs9liNFBnJMDvt56VlmRouOQJ6y6OBukyVmDYOdex6Mu38FQIqjUtD-s2oOrF3jFNc84FA2bWQBZfLudx-Xq5spz06wzW2xna0_a2KQsLVMTHzPuwjVUygcsAXA8y3HKZPgZrOgYGL89HQoTzhbay28R9gEGWpy1psu0hhOCqD2feIEKGEi_YOpUsCnp_OVNzeqifodlPh0ZM9ONzYb2Jl0OnSLezflRbUTYGNRx4RWnPIJL1NHiwI",
        alt: "Classroom",
    },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Icon({ name, filled = false, className = "" }) {
    return (
        <span
            className={`material-symbols-outlined ${className}`}
            style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
        >
            {name}
        </span>
    );
}

function SideNav({ activeItem, onNav }) {
    return (
        <aside className="bg-red-950 h-screen w-64 fixed left-0 top-0 shadow-2xl flex flex-col py-6 z-50 overflow-y-auto">
            <div className="px-6 mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#570000] flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                    {/* Use the imported logo variable here */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-white tracking-tight leading-tight font-['Manrope']">Tagore Admin</h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-semibold">System CMS</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {NAV_ITEMS.map(({ icon, label }) => {
                    const isActive = activeItem === label;
                    return (
                        <button
                            key={label}
                            onClick={() => onNav(label)}
                            className={`w-full flex items-center px-4 py-3 transition-all rounded-lg text-left ${isActive ? "bg-red-900/50 text-white font-semibold border-r-4 border-red-400" : "text-red-100/70 hover:bg-red-900/40 hover:text-white"
                                }`}
                        >
                            <Icon name={icon} filled={isActive} className="mr-3 text-lg" />
                            <span className="text-sm">{label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="px-6 mt-auto">
                <button className="w-full py-3 px-4 bg-gradient-to-br from-[#570000] to-[#800000] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-red-900/40 transition-all active:scale-95">
                    <Icon name="add_circle" className="text-sm" />
                    Quick Post
                </button>
            </div>
        </aside>
    );
}

function StatCard({ icon, label, value, badge, badgeClass }) {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#570000]/5 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-50 text-[#570000] rounded-2xl"><Icon name={icon} filled /></div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${badgeClass}`}>{badge}</span>
            </div>
            <p className="text-sm font-medium text-[#5a413d]/60">{label}</p>
            <h3 className="text-3xl font-extrabold text-[#570000] mt-1 font-['Manrope']">{value}</h3>
        </div>
    );
}



export default function Dashboard() {
    const [activeNav, setActiveNav] = useState("Dashboard");

    return (
        <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-['Work_Sans']">
            <SideNav activeItem={activeNav} onNav={setActiveNav} />

            <main className="pl-64 w-full">
                <div className="p-10 max-w-[1600px] mx-auto">
                    {/* Top Header */}
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <h2 className="text-2xl font-extrabold font-['Manrope'] text-red-950 tracking-tight">Executive Dashboard</h2>
                            <p className="text-sm text-[#5a413d]/60 font-medium">Welcome back, Administrator</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative group flex-grow md:flex-grow-0">
                                <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-900 transition-colors" />
                                <input type="text" placeholder="Search data..." className="bg-white border border-[#570000]/10 rounded-full pl-10 pr-4 py-2 text-sm w-full md:w-64 outline-none focus:ring-2 focus:ring-[#570000]/10 transition-all" />
                            </div>
                            <button className="p-2.5 bg-white border border-[#570000]/10 rounded-full text-red-900 shadow-sm relative shrink-0">
                                <Icon name="notifications" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
                            </button>
                        </div>
                    </header>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
                    </div>

                    {/* Tables and Actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-9 bg-white rounded-3xl p-8 shadow-sm border border-[#570000]/5">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold font-['Manrope'] text-red-950">Admissions Pipeline</h3>
                                <button className="text-xs font-bold text-[#570000] hover:underline">View All Records</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-[#570000]/5">
                                            {["Student Name", "Grade", "Received", "Status"].map(h => (
                                                <th key={h} className="pb-4 text-[0.65rem] font-bold uppercase tracking-widest text-[#5a413d]/50">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#570000]/5">
                                        {ENQUIRIES.map((e) => (
                                            <tr key={e.name} className="hover:bg-[#f9f9f9]/50 transition-colors">
                                                <td className="py-4 text-sm font-bold text-[#1a1c1c]">{e.name}</td>
                                                <td className="py-4 text-sm text-[#5a413d]">{e.grade}</td>
                                                <td className="py-4 text-sm text-[#5a413d]">{e.date}</td>
                                                <td className="py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${e.status === 'Responded' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                        {e.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-[#570000] p-8 rounded-3xl text-white shadow-xl">
                                <h4 className="font-bold text-lg mb-2 font-['Manrope']">CMS Actions</h4>
                                <p className="text-xs text-white/60 mb-6">Manage live content across the school portal.</p>
                                <div className="space-y-3">
                                    {["Add News", "Upload Result", "Add Event"].map(btn => (
                                        <button key={btn} className="w-full py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl text-xs font-bold text-left px-4 flex items-center justify-between">
                                            {btn} <Icon name="chevron_right" className="text-sm" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Preview */}
                    <div className="mt-12">
                        <h3 className="font-bold font-['Manrope'] mb-6">Latest Editorial Content</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {CAMPUS_IMAGES.map((img, i) => (
                                <div key={i} className="group relative rounded-2xl overflow-hidden h-48 shadow-sm">
                                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                                        <p className="text-white font-bold text-sm truncate">{img.title || img.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}