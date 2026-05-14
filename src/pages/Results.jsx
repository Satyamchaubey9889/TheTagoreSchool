import React from 'react';

// ─── Constants ──────────────────────────────────────────────────────────────

const CHART_BARS = [
  { year: "2021", height: "88%", highlight: false },
  { year: "2022", height: "92%", highlight: false },
  { year: "2023", height: "98%", highlight: true },
];

const LAUREATES = [
  {
    name: "Anya Varma",
    score: "99.2%",
    batch: "Batch 2023",
    detail: "Admitted to Oxford University, Physics",
    quote: "The Tagore School taught me that learning is an architectural process of the mind.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbDIDSPtJPBoh99i8s4YWUyHq3kAcLgZWGgPg58zquia0bIpasJ0-IZqFuzhSxncAOgFgRtOX-LO6DZn9fjrwLaw670HrKCXSeB3Ny8CGLucaPdyGy1QMy_SzURCebaqVn_iS4H0byaOQ1PhsC0UYIkAKYHSmvgTkEdZTGq3io5a5BFT-ysQpIg_0IirxfTRU8Ox_FyDBL1HcjvjKScbLYhwZLupXYo7MZvoW7SD1S8IhfTTWmYfe5MA1R3qtN3jtONmQK6ruoNog",
  },
  {
    name: "Rohan Mehta",
    score: "98.8%",
    batch: "Batch 2023",
    detail: "National Mathematics Olympiad Winner",
    quote: "Excellence is not a destination, but a way of traveling through one's education.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSS08TaNihA_uKMK3VJrMJIq1XI_liyhChKEi4chRP2z0RCwknF6kWxyT8o6TUg1D0Lrnlashl5xwG_vqABTqsnMqNVxjg7PSzrf0txsToVDehH2bOXPE0c6cOLQzpnS1hopRXzrsCj1LDA5rwWeD419ZC-u0fUuFE3a_nuDSgfdAPa9eDjRhzHNDKH4Jj2cZ8UBHK9emYxovDgBxYeIs-wwwLrtu0QR9Ac8Rb7cKCWIO47Th4RxgwW5AmObA_D57s_W1fk4t97a4",
  },
  {
    name: "Sana Kulkarni",
    score: "97.5%",
    batch: "Batch 2022",
    detail: "State Topper in Fine Arts & Literature",
    quote: "Creativity and academic rigor are the twin pillars of the Tagore experience.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXoTvb21ZpdulphwpIf6DCDYtLHhb9GkMMKzTMC3NaqipMJE9HZn0zBl_kqufB9acrfoNCJDbwGKMqtY78nceZlCqD5a1tkcNi2bnza_0SmQSZGpMjH083s21-_lleNq0tLF0Dl7l-hVbd6yz_MV1t3G2B4DSdU2L8hcfUlUlqBa8C2T5aE7Y_-OHAEtE7iv2QvQwgvj6OBKk2Cz6o7b86AYFOf_kug7zwNUgs2SEPjq7ZQIocZHuWf8gRmF7oF1ttSUhrqL6UQZw",
  },
];

const TABLE_ROWS = [
  { kpi: "Total Students", y2021: "142", y2022: "158", y2023: "164" },
  { kpi: "90%+ Scores", y2021: "42%", y2022: "48%", y2023: "54%" },
  { kpi: "IVY League Admits", y2021: "4", y2022: "7", y2023: "11" },
  { kpi: "Sports Awards", y2021: "12", y2022: "18", y2023: "22" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[500px] flex items-center pt-12 pb-32 px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.2em] text-[#570000] font-semibold mb-4 block">
            Legacy of Merit
          </span>
          <h1 className="font-[Manrope] text-6xl md:text-8xl font-extrabold text-[#1a1c1c] tracking-tighter leading-[0.9] mb-8">
            Academic <br />
            <span className="text-[#570000] italic">Excellence.</span>
          </h1>
          <p className="text-xl text-[#5a413d] leading-relaxed max-w-xl">
            At The Tagore School, we celebrate a heritage of intellectual rigor.
            Our consistent performance across years reflects our commitment to
            nurturing the modernist thinkers of tomorrow.
          </p>
        </div>

        <div className="md:col-span-5 relative">
          <div className="rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(87,0,0,0.06)] rotate-3 transform translate-y-8">
            <img
              className="w-full h-[450px] object-cover"
              alt="School Library"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATcr2rTK0fCg2fr_SRfV0QPfDG3vOPZMo745JxPpDrT_K8wVgFVU5E4m-ZU56IOw3IuRWiGFcezeRPvTRmTcPT4NsNvTALdhBk3uOQl3VmVDLuwe7hh7n8FTAPh3UTAU7jqT6ITtUpCgacRlcnmyksv60U46KvEc04cdlSzAQOD1bUNafCFqd4_EV_noP8TdbjCQbCzq-MDqYqjyWkpQUAogecZHUge_jJEsYjrZWVdVQlmKS-vbTdwV_cHkkOa-a5eIZy_TFtDA"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(87,0,0,0.06)] max-w-[240px]">
            <span className="block text-4xl font-[Manrope] font-bold text-[#570000] mb-1">
              98%
            </span>
            <span className="block text-sm text-[#5a413d] uppercase tracking-wider">
              Distinction Rate 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBento() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-[Manrope] text-4xl font-bold tracking-tight text-[#1a1c1c]">
            Statistical Heritage
          </h2>
          <div className="h-1 w-20 bg-[#570000] mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(87,0,0,0.06)]">
            <h3 className="font-[Manrope] text-xl font-bold mb-8">
              Board Exam Trajectory
            </h3>
            <div className="flex items-end gap-4 h-48">
              {CHART_BARS.map((bar) => (
                <div key={bar.year} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      bar.highlight
                        ? "bg-[#570000]"
                        : "bg-[#eeeeee] hover:bg-[#800000]"
                    }`}
                    style={{ height: bar.height }}
                  />
                  <span
                    className={`text-xs uppercase ${
                      bar.highlight
                        ? "font-bold text-[#570000]"
                        : "text-[#5a413d]"
                    }`}
                  >
                    {bar.year}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-[#5a413d] leading-relaxed">
              A consistent upward climb in overall grade averages over the last
              three academic cycles.
            </p>
          </div>

          <div className="bg-[#570000] text-white p-8 rounded-xl shadow-[0_12px_32px_rgba(87,0,0,0.06)] flex flex-col justify-between">
            <span className="material-symbols-outlined text-4xl">school</span>
            <div>
              <h3 className="font-[Manrope] text-4xl font-bold mb-2">420+</h3>
              <p className="text-sm opacity-80">
                Honors & Distinction graduates since 2021
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(87,0,0,0.06)] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="font-[Manrope] text-xl font-bold leading-tight">
                Average
                <br />
                Aggregate
              </h3>
              <span className="text-[#800000]">
                <span className="material-symbols-outlined">trending_up</span>
              </span>
            </div>
            <div>
              <span className="block text-5xl font-[Manrope] font-extrabold text-[#1a1c1c]">
                91.4<span className="text-2xl">%</span>
              </span>
              <div className="w-full h-1 bg-[#eeeeee] mt-4 rounded-full overflow-hidden">
                <div
                  className="bg-[#570000] h-full rounded-full"
                  style={{ width: "91.4%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WallOfFame() {
  return (
    <section className="py-24 px-8 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#570000] font-semibold mb-4 block">
              Laureates
            </span>
            <h2 className="font-[Manrope] text-5xl font-bold tracking-tight text-[#1a1c1c]">
              The Wall of Fame
            </h2>
          </div>
          <div className="flex gap-4">
            {["chevron_left", "chevron_right"].map((icon) => (
              <button
                key={icon}
                className="w-12 h-12 rounded-full border border-[#e2bfb9] flex items-center justify-center hover:bg-[#570000] hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAUREATES.map((l) => (
            <div key={l.name} className="group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-[0_12px_32px_rgba(87,0,0,0.06)] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={l.name}
                  src={l.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#570000]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-sm italic">"{l.quote}"</p>
                </div>
              </div>
              <h4 className="font-[Manrope] text-2xl font-bold mb-1">{l.name}</h4>
              <p className="text-[#570000] font-semibold text-sm uppercase tracking-wider mb-2">
                {l.score} • {l.batch}
              </p>
              <p className="text-[#5a413d] text-sm">{l.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="py-24 px-8 bg-[#f3f3f3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[Manrope] text-4xl font-bold text-center mb-16">
          Three-Year Comparative Matrix
        </h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(87,0,0,0.06)]">
          <div className="grid grid-cols-4 p-8 border-b border-[#eeeeee] text-xs uppercase tracking-widest text-[#5a413d] font-bold">
            <div>Academic KPI</div>
            <div className="text-center">2021</div>
            <div className="text-center">2022</div>
            <div className="text-center">2023</div>
          </div>
          {TABLE_ROWS.map((row, i) => (
            <div
              key={row.kpi}
              className={`grid grid-cols-4 p-8 items-center ${
                i < TABLE_ROWS.length - 1 ? "border-b border-[#eeeeee]" : ""
              }`}
            >
              <div className="font-[Manrope] font-bold">{row.kpi}</div>
              <div className="text-center text-[#5a413d]">{row.y2021}</div>
              <div className="text-center text-[#5a413d]">{row.y2022}</div>
              <div className="text-center font-bold text-[#570000]">
                {row.y2023}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto bg-[#570000] rounded-xl overflow-hidden flex flex-col md:flex-row relative">
        <div className="flex-1 p-12 md:p-20 z-10">
          <h2 className="font-[Manrope] text-5xl font-extrabold text-white mb-6 leading-tight">
            Be part of the next <br />
            historic batch.
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            Admissions for the 2024-25 academic session are now open for
            meritorious candidates.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-white text-[#570000] px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105">
              Inquire Now
            </button>
            <button className="bg-[#800000] text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105">
              Download Prospectus
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="School Building"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0TPum2ZuCN35zaEwvP3ax4_DWfmiXuVph974SpKSVD3yEWP4HnFNDeTyI9WOcOa7ZQxiobhTwTDK1TxrmDFnVeNV2vmfElTmkX4zVhXNwiHpOW7Rl4SM95hA8ly9q_fXieRDdh-Fja1rrzRIPRMF8zJNmid0zuNGrcHzvqhS0gNca7vD4ABvr6lDdROHvcRffYwX2MIc_k_xScwXJ_n-XAdyr5d3kLuqgfeEfXrRN53CyzDCku4KxhvkrjVLr1YgBOlhrUnXienI"
          />
          <div className="absolute inset-0 bg-[#570000]/20" />
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Results() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen">
      <main>
        <Hero />
        <MetricsBento />
        <WallOfFame />
        <ComparisonTable />
        <CTASection />
      </main>
    </div>
  );
}