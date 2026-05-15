import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkStyles = ({ isActive }) =>
        `transition-colors hover:text-[#800000] font-medium ${isActive
            ? "text-[#800000] border-b-2 border-[#800000] pb-1"
            : "text-stone-600"
        }`;

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="The Tagore School Logo"
                        className="h-16 w-28 object-contain"
                    />

                    <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#800000] uppercase">
                        The Tagore School
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
                    <NavLink to="/" className={navLinkStyles}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={navLinkStyles}>
                        About
                    </NavLink>

                    <NavLink to="/academics" className={navLinkStyles}>
                        Academics
                    </NavLink>

                    <NavLink to="/admissions" className={navLinkStyles}>
                        Admissions
                    </NavLink>

                    <NavLink to="/gallery" className={navLinkStyles}>
                        Gallery
                    </NavLink>

                    <NavLink to="/results" className={navLinkStyles}>
                        Results
                    </NavLink>

                    <NavLink to="/contact" className={navLinkStyles}>
                        Contact
                    </NavLink>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/apply">
                        <button className="bg-[#800000] hover:bg-[#650000] text-white px-6 py-2 rounded-xl text-sm font-bold">
                            Apply Now
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#800000]"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="flex flex-col px-6 py-4 space-y-4 text-sm uppercase tracking-wider">

                        <NavLink
                            to="/"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/academics"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Academics
                        </NavLink>

                        <NavLink
                            to="/admissions"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Admissions
                        </NavLink>

                        <NavLink
                            to="/gallery"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </NavLink>

                        <NavLink
                            to="/results"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Results
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={navLinkStyles}
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>

                        <Button className="bg-[#800000] hover:bg-[#650000] text-white w-full">
                            Apply Now
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}