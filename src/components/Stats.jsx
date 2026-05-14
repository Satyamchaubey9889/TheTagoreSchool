import { motion } from "framer-motion";
import { stats } from "../data/data";

export default function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black text-[#800000]">
              {item.value}
            </h2>

            <p className="mt-2 text-sm uppercase tracking-wider text-slate-600">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}