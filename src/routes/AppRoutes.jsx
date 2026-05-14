import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Results from "@/pages/Results";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}