import React, { useState } from "react";
import {
    School,
    User,
    Users,
    ArrowRight,
    ArrowLeft,
    Phone,
    Mail,
    CheckCircle,
    Calendar
} from "lucide-react";

/**
 * INSTRUCTIONS:
 * Ensure Google Fonts (Manrope & Work Sans) are linked in your index.html.
 */

const GRADE_LEVELS = ["Pre-Primary", "Primary", "Secondary"];

const ChecklistItems = [
    "Previous school report cards",
    "Student's birth certificate",
    "Recent passport size photos",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar() {
    return (
        <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center space-x-4 w-full">
                <div className="flex-1 h-1 rounded-full bg-[#570000]/10 relative">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-[#570000] rounded-full" />
                </div>
                <span className="text-[0.65rem] font-bold text-[#570000] shrink-0 tracking-[0.15em] uppercase font-['Work_Sans']">
                    Step 1 of 3
                </span>
            </div>
        </div>
    );
}

function GradeSelector({ selected, onSelect }) {
    return (
        <section className="space-y-6">
            <div className="flex items-center space-x-3">
                <School className="text-[#570000] w-6 h-6" />
                <h2 className="text-2xl font-extrabold tracking-tight font-['Manrope']">Academic Intent</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {GRADE_LEVELS.map((grade) => {
                    const isSelected = selected === grade;
                    return (
                        <button
                            key={grade}
                            onClick={() => onSelect(grade)}
                            className={`p-5 rounded-2xl text-left transition-all focus:outline-none ${isSelected
                                    ? "text-white shadow-xl ring-2 ring-[#570000] ring-offset-2"
                                    : "bg-white border border-[#570000]/10 hover:bg-[#570000]/5"
                                }`}
                            style={isSelected ? { background: "linear-gradient(135deg, #570000 0%, #800000 100%)" } : {}}
                        >
                            <span className={`block text-[0.6rem] font-bold mb-1 tracking-[0.1em] uppercase font-['Work_Sans'] ${isSelected ? "text-white/70" : "text-[#5a413d]/60"}`}>
                                Grade Level
                            </span>
                            <span className="block font-bold text-lg font-['Manrope']">{grade}</span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

function InputField({ label, type, placeholder, value, onChange, bg = "bg-[#f3f3f3]" }) {
    return (
        <div className="space-y-2">
            <label className="text-[0.65rem] font-bold text-[#5a413d]/60 uppercase tracking-widest font-['Work_Sans'] block">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full ${bg} border border-[#570000]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#570000]/20 transition-all font-['Work_Sans'] text-sm`}
            />
        </div>
    );
}

function Sidebar() {
    return (
        <aside className="lg:col-span-4 space-y-8">
            {/* Help Card */}
            <div className="bg-white border border-[#570000]/10 p-8 rounded-2xl shadow-sm">
                <h3 className="font-extrabold text-xl font-['Manrope'] mb-4">Need Assistance?</h3>
                <p className="text-[#5a413d]/70 text-sm leading-relaxed font-['Work_Sans'] mb-6">
                    Our admissions office is here to guide you through the process from 9 AM to 4 PM.
                </p>
                <div className="space-y-4">
                    <a href="tel:+911234567890" className="flex items-center space-x-3 text-[#570000] font-bold text-sm hover:opacity-80">
                        <Phone className="w-4 h-4" />
                        <span className="font-['Work_Sans']">+91 123 456 7890</span>
                    </a>
                    <a href="mailto:admissions@tagoreschool.edu" className="flex items-center space-x-3 text-[#570000] font-bold text-sm hover:opacity-80">
                        <Mail className="w-4 h-4" />
                        <span className="font-['Work_Sans']">admissions@tagoreschool.edu</span>
                    </a>
                </div>
            </div>

            {/* Document Checklist */}
            <div className="bg-[#570000] text-white p-8 rounded-2xl">
                <h4 className="font-bold text-[0.65rem] uppercase tracking-[0.2em] text-white/60 mb-6 font-['Work_Sans']">
                    Prepare for Step 2
                </h4>
                <ul className="space-y-4">
                    {ChecklistItems.map((item) => (
                        <li key={item} className="flex items-start space-x-3 text-sm font-['Work_Sans']">
                            <CheckCircle className="w-5 h-5 text-white/40 shrink-0" />
                            <span className="leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}



export default function ApplyNow() {
    const [selectedGrade, setSelectedGrade] = useState("Secondary");
    const [studentForm, setStudentForm] = useState({ fullName: "", dob: "", gender: "", nationality: "" });
    const [parentForm, setParentForm] = useState({ parentName: "", relationship: "", email: "", contact: "" });

    const handleStudentChange = (field, value) => setStudentForm((prev) => ({ ...prev, [field]: value }));
    const handleParentChange = (field, value) => setParentForm((prev) => ({ ...prev, [field]: value }));

    return (
        <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen py-20 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-20">
                    <span className="text-[#570000] font-bold tracking-[0.25em] text-[0.7rem] uppercase mb-4 block font-['Work_Sans']">
                        Admissions 2024-25
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter font-['Manrope'] mb-6 text-[#1a1c1c]">
                        Join Our Heritage.
                    </h1>
                    <p className="text-[#5a413d]/70 text-lg md:text-xl max-w-2xl leading-relaxed font-['Work_Sans']">
                        Begin your intellectual journey at The Tagore School. Please complete the details
                        below to initiate the application process.
                    </p>
                </header>

                <ProgressBar />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Form Area */}
                    <div className="lg:col-span-8 space-y-16">

                        <GradeSelector selected={selectedGrade} onSelect={setSelectedGrade} />

                        {/* Student Info */}
                        <section className="space-y-8 bg-white border border-[#570000]/10 p-10 rounded-2xl shadow-sm">
                            <div className="flex items-center space-x-3">
                                <User className="text-[#570000] w-6 h-6" />
                                <h2 className="text-2xl font-extrabold tracking-tight font-['Manrope']">Student Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField label="Full Legal Name" type="text" placeholder="e.g. Aarav Tagore" value={studentForm.fullName} onChange={(v) => handleStudentChange("fullName", v)} bg="bg-[#f9f9f9]" />
                                <InputField label="Date of Birth" type="date" value={studentForm.dob} onChange={(v) => handleStudentChange("dob", v)} bg="bg-[#f9f9f9]" />
                                <div className="space-y-2">
                                    <label className="text-[0.65rem] font-bold text-[#5a413d]/60 uppercase tracking-widest font-['Work_Sans'] block">Gender</label>
                                    <select
                                        value={studentForm.gender}
                                        onChange={(e) => handleStudentChange("gender", e.target.value)}
                                        className="w-full bg-[#f9f9f9] border border-[#570000]/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#570000]/20 font-['Work_Sans'] text-sm appearance-none"
                                    >
                                        <option value="">Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <InputField label="Nationality" type="text" placeholder="e.g. Indian" value={studentForm.nationality} onChange={(v) => handleStudentChange("nationality", v)} bg="bg-[#f9f9f9]" />
                            </div>
                        </section>

                        {/* Parent Details */}
                        <section className="space-y-8">
                            <div className="flex items-center space-x-3">
                                <Users className="text-[#570000] w-6 h-6" />
                                <h2 className="text-2xl font-extrabold tracking-tight font-['Manrope']">Parent / Guardian Details</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField label="Parent's Name" type="text" value={parentForm.parentName} onChange={(v) => handleParentChange("parentName", v)} />
                                <InputField label="Relationship" type="text" value={parentForm.relationship} onChange={(v) => handleParentChange("relationship", v)} />
                                <InputField label="Email Address" type="email" value={parentForm.email} onChange={(v) => handleParentChange("email", v)} />
                                <InputField label="Contact Number" type="tel" value={parentForm.contact} onChange={(v) => handleParentChange("contact", v)} />
                            </div>
                        </section>

                        {/* Actions */}
                        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#570000]/10">
                            <button className="text-[#570000] font-bold text-sm flex items-center space-x-2 hover:translate-x-[-4px] transition-transform font-['Work_Sans']">
                                <ArrowLeft className="w-4 h-4" />
                                <span>Save as Draft</span>
                            </button>
                            <button
                                className="w-full sm:w-auto text-white px-10 py-4 rounded-xl font-extrabold shadow-2xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center space-x-3 font-['Manrope']"
                                style={{ background: "linear-gradient(135deg, #570000 0%, #800000 100%)" }}
                            >
                                <span>Continue to Next Step</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <Sidebar />
                </div>
            </div>
        </div>
    );
}