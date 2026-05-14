import { motion } from "framer-motion";
import { academicData } from "../data/data";

export default function Academics() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 max-w-2xl">
          <h2 className="mb-6 text-5xl font-black text-[#800000]">
            Academic Excellence
          </h2>

          <p className="text-lg text-slate-600">
            Our curriculum is designed to challenge the intellect.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {academicData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl border bg-white p-10 shadow-sm transition-all"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#800000]/10 text-2xl font-bold text-[#800000]">
                {i + 1}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mb-6 text-slate-600">
                {item.desc}
              </p>

              <button className="font-semibold text-[#800000]">
                Learn More →
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
