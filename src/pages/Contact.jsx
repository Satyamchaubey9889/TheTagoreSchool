import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Mail, Phone, MapPin, Globe, Users, Camera, BookOpen, CalendarDays, MessageSquare, ChevronDown } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Undergraduate Admissions",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    // Google Maps embed URL for Jhunjhunu, Rajasthan
    const mapEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56826.92!2d75.4022233!3d28.1317038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913953501F17B4D%3A0xBBC8FAA6ABC6!2sJhunjhunu%2C%20Rajasthan%20333001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

    return (
        <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Work_Sans'] py-20 px-8">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap');
        .headline { font-family: 'Manrope', sans-serif; }
        .academic-shadow { box-shadow: 0 12px 40px rgba(87,0,0,0.08); }
        .btn-primary {
          background: linear-gradient(135deg, #570000 0%, #800000 100%);
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .btn-primary:hover { box-shadow: 0 8px 28px rgba(87,0,0,0.22); transform: translateY(-2px); }
        .form-field {
          width: 100%;
          background: #f3f3f3;
          border: 1.5px solid rgba(142,112,108,0.13);
          border-radius: 10px;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-field:focus { border-color: rgba(87,0,0,0.35); box-shadow: 0 0 0 3px rgba(87,0,0,0.07); }
        .social-btn { transition: all 0.3s; }
        .social-btn:hover { background: linear-gradient(135deg, #570000 0%, #800000 100%); color: #fff; }
        .resource-card { transition: box-shadow 0.3s, transform 0.2s; border: 1px solid rgba(142,112,108,0.08); }
        .resource-card:hover { box-shadow: 0 12px 40px rgba(87,0,0,0.10); transform: translateY(-4px); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade { animation: fadeIn 0.4s ease; }
      `}</style>

            <div className="max-w-7xl mx-auto my-16">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85"
                    alt="Campus background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="relative  overflow-hidden min-h-[380px] flex items-end mb-20">
                    {/* Background Image */}

                    {/* Dark gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(30,0,0,0.82) 0%, rgba(60,0,0,0.45) 55%, rgba(0,0,0,0.10) 100%)" }}
                    />
                    {/* Text content */}
                    <div className="relative z-10 p-10 w-full">
                        <Button
                            size="lg"
                            variant="outline"
                            className=" bg-gradient-to-r from-[#570000]/90 to-[#800000]/70 text-white hover:bg-white/10"
                        >
                            Admission 2026-27 Open
                        </Button>
                        <h1 className="headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white max-w-3xl"
                            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}>
                            Let's begin a conversation about your future.
                        </h1>
                    </div>
                </div>

                {/* Form and Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Map & Contact Info */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="bg-[#f3f3f3] rounded-2xl overflow-hidden academic-shadow">
                            <div className="relative h-80 w-full overflow-hidden">
                                <iframe
                                    title="Jhunjhunu, Rajasthan - Google Maps"
                                    src={mapEmbedUrl}
                                    className="w-full h-full border-none sepia-[0.2] saturate-[0.85]"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/95 rounded-full p-3 shadow-lg">
                                        <MapPin size={28} className="text-[#570000] fill-[#570000]/15" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="headline text-xl font-bold text-[#570000] mb-4">Campus Heritage</h3>
                                <p className="text-[#5a413d] leading-relaxed text-sm lg:text-base">
                                    Tagore Plaza, Academic District IV<br />
                                    Heritage Drive, Jhunjhunu<br />
                                    Rajasthan, 333001
                                </p>

                                <div className="mt-8 flex flex-col gap-4">
                                    <div className="flex items-center gap-4 text-[#5a413d]">
                                        <Phone size={20} className="text-[#570000]" />
                                        <span className="font-medium">+91 (01592) 232-751</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#5a413d]">
                                        <Mail size={20} className="text-[#570000]" />
                                        <span className="font-medium">admissions@tagoreschool.edu</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-[#8e706c]/10 flex gap-3">
                                    {[Globe, Users, Camera].map((Icon, i) => (
                                        <button key={i} className="social-btn p-2.5 bg-[#e8e8e8] rounded-full text-[#570000]">
                                            <Icon size={18} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Inquiry Form */}
                    <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-14 academic-shadow">
                        <h2 className="headline text-3xl font-extrabold text-[#1a1c1c] mb-9 tracking-tight">Inquiry Form</h2>

                        {submitted && (
                            <div className="bg-gradient-to-r from-[#570000] to-[#800000] text-white rounded-xl p-4 text-center font-bold text-sm mb-6 animate-fade">
                                ✓ Message sent! We'll get back to you shortly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                <div>
                                    <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#1a1c1c]/50 mb-2 block">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="form-field"
                                        placeholder="Rabindranath Tagore"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#1a1c1c]/50 mb-2 block">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="form-field"
                                        placeholder="example@domain.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#1a1c1c]/50 mb-2 block">Subject of Inquiry</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        className="form-field appearance-none pr-10"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>Undergraduate Admissions</option>
                                        <option>Graduate Programs</option>
                                        <option>Scholarship Opportunities</option>
                                        <option>Alumni Relations</option>
                                        <option>General Support</option>
                                    </select>
                                    <ChevronDown size={16} className="text-[#5a413d] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#1a1c1c]/50 mb-2 block">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="form-field resize-none"
                                    placeholder="How can we assist your intellectual journey?"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="btn-primary text-white px-10 py-3.5 rounded-xl headline font-extrabold text-base">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Resource Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7">
                    {[
                        {
                            Icon: BookOpen,
                            title: "Prospectus 2024",
                            desc: "Download our digital guide to explore academic paths, campus life, and community values.",
                            link: "Download PDF",
                        },
                        {
                            Icon: CalendarDays,
                            title: "Visit the Campus",
                            desc: "We host guided architectural and academic tours every Tuesday and Thursday afternoon.",
                            link: "Schedule Tour",
                        },
                        {
                            Icon: MessageSquare,
                            title: "Direct Counseling",
                            desc: "Speak directly with our academic advisors for a personalized consultation session.",
                            link: "Request Callback",
                        },
                    ].map(({ Icon, title, desc, link }) => (
                        <div key={title} className="resource-card bg-white rounded-2xl p-8">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#ffdad4] to-[#ffb4a8] rounded-2xl flex items-center justify-center mb-5">
                                <Icon size={24} className="text-[#570000]" />
                            </div>
                            <h4 className="headline text-lg font-bold mb-3">{title}</h4>
                            <p className="text-[#5a413d] text-sm leading-relaxed mb-5">{desc}</p>
                            <a href="#" className="text-[#570000] font-bold text-sm border-b-2 border-[#570000]/20 pb-0.5 hover:border-[#570000] transition-colors">
                                {link}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}