import { useState } from "react";
import logo from "../assets/logo.png";

const SocialBtn = ({ children }) => (
    <button className="w-8 h-8 rounded-full border border-[#9b1c1c] text-[#9b1c1c] flex items-center justify-center text-sm hover:bg-[#9b1c1c] hover:text-white transition-all duration-200">
        {children}
    </button>
);

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap');

          .footer-root * {
            font-family: 'Source Sans 3', sans-serif;
            box-sizing: border-box;
          }

          .footer-root h3,
          .footer-root .brand-name {
            font-family: 'Crimson Pro', Georgia, serif;
          }
        `}
            </style>

            <footer className="footer-root bg-white">

                {/* Main Grid */}
                <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b  border-[#c0c0c0]">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="The Tagore School Logo"
                                className="w-16 h-auto object-contain"
                            />
                        </div>

                        {/* Brand Name */}


                        {/* Description */}
                        <p className="text-[#9b1c1c] text-sm leading-relaxed">
                            Inspiring young minds to achieve excellence through tradition and
                            innovation for over a century.
                        </p>


                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#9b1c1c] font-bold text-base mb-4 ">
                            Quick Links
                        </h3>

                        <ul className="space-y-2.5">
                            {[
                                "Academic Calendar",
                                "Fee Structure",
                                "Student Life",
                                "Careers",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-slate-600 text-sm hover:text-[#9b1c1c] transition-colors duration-150 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#9b1c1c] transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-[#9b1c1c] font-bold text-base mb-4">
                            Contact Info
                        </h3>

                        <ul className="space-y-3">

                            {/* Address */}
                            <li className="flex items-start gap-2.5 text-slate-600 text-sm">
                                <svg
                                    className="w-4 h-4 mt-0.5 text-[#9b1c1c] shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>

                                <span>
                                    12 Tagore Lane, Knowledge Hub,
                                    <br />
                                    Jaipur, Rajasthan 302001
                                </span>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center gap-2.5 text-slate-600 text-sm">
                                <svg
                                    className="w-4 h-4 text-[#9b1c1c] shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>

                                <span>+91 11 2345 6789</span>
                            </li>

                            {/* Email */}
                            <li className="flex items-center gap-2.5 text-slate-600 text-sm">
                                <svg
                                    className="w-4 h-4 text-[#9b1c1c] shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>

                                <a
                                    href="mailto:info@tagoreschool.edu.in"
                                    className="hover:text-[#9b1c1c] transition-colors"
                                >
                                    info@tagoreschool.edu.in
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-[#9b1c1c] font-bold text-base mb-4 pb-2">
                            Newsletter
                        </h3>

                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                            Stay updated with our latest activities and news.
                        </p>

                        {subscribed ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded px-3 py-2.5 font-medium">
                                ✓ Thank you for subscribing!
                            </div>
                        ) : (
                            <div className="flex">

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && handleSubscribe()
                                    }
                                    placeholder="Your email"
                                    className="flex-1 border border-[#c0c0c0] border-r-0 rounded-l text-sm px-3 py-2 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#9b1c1c] transition-colors bg-white"
                                />

                                <button
                                    onClick={handleSubscribe}
                                    className="bg-[#9b1c1c] hover:bg-[#7f1616] text-white px-3 py-2 rounded-r transition-colors duration-200 flex items-center justify-center"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="w-4 h-4"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>

                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

                    <p className="text-slate-500 text-xs">
                        © 2026 The Tagore School. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">

                        {[
                            "Privacy Policy",
                            "Terms of Service",
                            "Alumni Association",
                            "Calendar",
                        ].map((item, i, arr) => (
                            <span key={item} className="flex items-center gap-5">
                                <a
                                    href="#"
                                    className="text-slate-500 text-xs hover:text-[#9b1c1c] transition-colors"
                                >
                                    {item}
                                </a>

                                {i < arr.length - 1 && (
                                    <span className="text-slate-300 text-xs">|</span>
                                )}
                            </span>
                        ))}

                    </div>
                </div>
            </footer>
        </>
    );
}