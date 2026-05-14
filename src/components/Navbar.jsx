import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
export default function Navbar() {
    const navLinkStyles = ({ isActive }) =>
        `transition-colors hover:text-[#800000] font-medium ${isActive
            ? "text-[#800000] border-b-2 border-[#800000] pb-1"
            : "text-stone-600"
        }`;

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="The Tagore School Logo"
                        className="h-16 w-28 object-contain"
                    />
                    <h1 className="text-2xl font-extrabold tracking-tight text-[#800000] uppercase hidden sm:block">
                        The Tagore School
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
                    <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                    <NavLink to="/about" className={navLinkStyles}>About</NavLink>
                    <NavLink to="/academics" className={navLinkStyles}>Academics</NavLink>
                    <NavLink to="/admissions" className={navLinkStyles}>Admissions</NavLink>
                    <NavLink to="/gallery" className={navLinkStyles}>Gallery</NavLink>
                    <NavLink to="/results" className={navLinkStyles}>Results</NavLink>
                    <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
                </div>

                {/* Action Button */}
                <Button className="bg-[#800000] hover:bg-[#650000] text-white px-6">
                    Apply Now
                </Button>
            </div>
        </nav>
    );
}