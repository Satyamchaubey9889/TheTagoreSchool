import React, { useState } from "react";

/* ─────────────────────────────────────────────
   DATA STRUCTURES
───────────────────────────────────────────── */
const FILTER_TABS = [
  "All",
  "Academic Life",
  "Sports & Athletics",
  "Creative Arts",
  "Campus Heritage",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    size: "large",
    category: "Academic Life",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDTaHsYCBUy_0X6b2w96d95_bB2HyBD9ntsqF7-yXtUM2F-FaOrJIwchiUyv7JfFc33_ACGcfB16uv1yr96LAYfkud_bXvp-bSoG63sx8lbMTqeVmfnAQyyDk2HpQkKmSZRR6K7bckLaZ3glxERTZZWAZcqmmYGBATi54__OL3JIpcq8d8bNxQod0xLqcdM5S0kjt0TWWma1Y-ZEPQOOnIZOrpuyazlj83zK5ntqkYQpszW_O4cDZvZFfVj5sNBXyGBYdW9QIFRQQ",
    hoverLabel: "The Central Knowledge Hub",
    title: "Modern Science Wing",
    subtitle: "Main Campus • Established 2022",
  },
  {
    id: 2,
    size: "small",
    category: "Sports & Athletics",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVGkKMPFWJJEmMbLZQ8oX1IbrxuTyBVE3X1XfZRuQl1eVrjJuIABsfXXqVyYLlojgoXdX3rwBzvCSGJkrgMcBzMauf0HEHSGAro1JpVTBLZN6zulSZx2Jq2nrQ9vZmrGPRocsrkHTjSETiOHuvsfLfBVDlfqvi-OF2gLZ37T3xe1Hg4R1KIzQJkdjZr1L9Y-HYTVI9m7cHeyb1ApyWp7Ra_WrkjXacRJGMQtjzj9FkjugC3nRvRJRuM7kjBIUQRDoPMncnzpCD1VA",
    title: "Athletic Excellence",
    subtitle: "Olympic Track • Sports Grounds",
  },
  {
    id: 3,
    size: "small",
    category: "Creative Arts",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI0fMDd0GsQkzvjpPrOyUv_G1qg2hs5gMnVCfwGbwGBSKZHdKu_1irk6a2ozFmfsSmyWPh4xzOhUnnrHMH7VH9X1Qo59do7ImefqxeKdMbAto3IdAHkM1UKC7SJfj4DpZpoWhFmKO5vOuUj0LMS0lLQ7p5YHzT_ni_M0AI1gwBO5A4Ab0cChwih0j9yahgDRkzOVFn9mrCyOA17K6bJnGWiM9yOG4ECOXO6p8clctoEm3fODySKrYj-6FrZbUjWcPJBhigbtStito",
    title: "Annual Arts Fest",
    subtitle: "Visual Arts Studio • Winter 2023",
  },
  {
    id: 4,
    size: "large",
    category: "Campus Heritage",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUIXYNQtklV-9VZANx6v921IFfB2FZenGb5uFPjTJbnYKkW7kgCxPI-SHLWN9TlpMOW1S2tJ5H7kfQTUxHhk_MQv7tfzMozPcQYv4OsnpLWt7C8L2_EfGo9F5pPIabSFx-mY-6P1kILeblKj_RTHK4RqeUgTiJbFUOENvhVSKRspg9wOMtjuz8OeohPPfamzWCHV353I7WqKu8PWFbFwMcbugzpBzD1aVlrkE0Cx7BXPyuHUrSeF0gFNS7gQFBxo5mdVqiepy8WLI",
    hoverLabel: "The Founders Hall",
    title: "The Founders Hall",
    subtitle: "Heritage Wing • Assemblies",
  },
];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

const GalleryCard = ({ item }) => {
  const isLarge = item.size === "large";
  return (
    <div className={`group flex flex-col ${isLarge ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"}`}>
      <div className={`relative overflow-hidden rounded-[2rem] bg-stone-100 mb-6 ${isLarge ? "aspect-video" : "aspect-square"}`}>
        <img
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          alt={item.title}
          src={item.img}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#570000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
          <span className="text-white font-headline font-black text-2xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {item.hoverLabel || item.title}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-start px-2">
        <div>
          <h3 className="font-headline font-black text-stone-900 text-xl tracking-tight">
            {item.title}
          </h3>
          <p className="text-slate-500 text-sm font-body mt-1">{item.subtitle}</p>
        </div>
        <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-[#570000] group-hover:bg-[#570000] group-hover:text-white transition-colors duration-300">
          <span className="material-symbols-outlined text-sm">north_east</span>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#f9f9f9] pt-24 pb-24">
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="text-[#a6392b] text-xs tracking-[0.3em] font-black uppercase mb-6 block font-body">
                Capturing Excellence
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-8">
                The Scholastic <br />
                <span className="text-[#570000] italic font-light">Gallery.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-body">
                A curated visual journey through heritage corridors and vibrant academic spaces. 
                Witness the evolution of our future leaders.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="School Campus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZeRf3_4ji8P9N3P0Qdx8bxKENOBjFgkZjo5rq9KUYMJlLDMhIRuo6az3N7KJr1L_BKkIIct9HLx1XjzfLIOWK7cBdRCcDmC6BUEOP3IIlWlbASLGDohlB1lCoNDxE1RoMzIaE2CugwwR0DQ6YmpAuKNy6vuhkoUxSuigalh8maS4jPRLS8zyUHThcdaJ6RXtUAAHqE0uNtM8kbU4qHiIP_mNMF1IcGylqKumae7Tt0mRfkqfJJQXzZHQJc5cfeqO7riV2qODQDDY"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60 -z-0" />
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <nav className="sticky top-20 z-40 bg-[#f9f9f9]/80 backdrop-blur-md py-8 mb-16 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap gap-3">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === tab
                    ? "bg-[#570000] text-white shadow-lg shadow-red-900/20"
                    : "bg-white border border-stone-200 text-stone-500 hover:border-[#570000] hover:text-[#570000]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-12 gap-x-8 gap-y-20">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* CTA Invitation */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-stone-900 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img
                alt=""
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpy1tfG0J3E20JCa6yH1vv0CLTMZ6meZCsAPY_4CsuxpiNiRydZIqQ1nY7J6GLNcKyrT812jwh3JWmPduVarPPphXqmlfzl-Nfczis_gA2kZdJz9FAzORR2e6PxeVyHxrYpmDHN_8hpwwuo_zx0It8_8jqyki-4Q8a07g4rVWn3yHIUj6A5qw0ZkOsFh8Y8b-xzsjIdb7sDsTvth6RjQFdEHauo7pHzs1rQrlQpmMcjxad0fKWC86bgiM35kSYIujPIOwkfHQDf10"
              />
            </div>
            <div className="relative z-10">
              <span className="text-red-400 text-xs font-black uppercase tracking-[0.3em] mb-8 block font-body">
                Personal Invitation
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-10 max-w-4xl mx-auto leading-none">
                Experience the Heritage <br />
                in <span className="italic font-light">Person.</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-14 font-body leading-relaxed">
                Digital frames only tell half the story. Walk through our historic
                gates and feel the atmosphere of intellectual rigor and creative freedom.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="bg-white text-stone-900 px-12 py-5 rounded-2xl font-headline font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                  Book a Campus Tour
                </button>
                <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-headline font-black text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-all">
                  Get Prospectus
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;