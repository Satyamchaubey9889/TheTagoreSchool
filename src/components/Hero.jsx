import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_upMnRFkDZB0-aIcFO6he9RmbkzW8VZdNrJnhS8PkPBuVfSqjFiTCrla3FFL9n9Me48NRsGixKu0sn8By8JuyULSqkb8-3SZFw1jIfBsYfVbP2ixzkB73UNZpP1kDlN1DP7zKGD0N_QmnEFPSzWOOl_yt2bLiHQj5FkMV2L74aH4Wzfimbn075uSCok8Io2B5djXmQ-QLmjcLCiVOIuOu4Y-0ZF85hw2L7mOW3LBJDik4wute7fjFzop-9ZNY7JwIMenjd4c7Po"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 " />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block rounded-full border border-white/20 bg-gradient-to-r from-[#570000]/90 to-[#800000]/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                        Excellence in Education since 1924
                    </div>

                    <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
                        Shaping Tomorrow's <br /> Leaders Today
                    </h1>

                    <p className="max-w-xl text-lg text-white/80">
                        A sanctuary of learning where heritage meets innovation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="bg-white text-[#800000] hover:bg-slate-100"
                        >
                            Apply for Admission
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className=" bg-gradient-to-r from-[#570000]/90 to-[#800000]/70 text-white hover:bg-white/10"
                        >
                            Explore School
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}