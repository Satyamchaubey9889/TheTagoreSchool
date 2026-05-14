import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Academics from "../components/Academics";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AboutSection from "@/components/AboutSection";
import CampusLife from "@/components/CampusLife";
import NewsAndEvents from "@/components/NewsAndEvents";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <main className="bg-[#f9f9f9] text-slate-900 overflow-hidden">
            <Navbar />
            <Hero />
            <Stats />
            <AboutSection />
            <CampusLife />
            <NewsAndEvents />
            <Academics />
            <Testimonials/>
            <CTA />

        </main>
    );
}