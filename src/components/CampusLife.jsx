import React from 'react';

const CAMPUS_IMAGES = [
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lhWhqZticdtg9GbM6aZsCurJ62N9tzuWCClarsKW-_C6PE6z8gPDZNX71GokX2wczwMU6nn11x28ImIfnsl2m7l1i1xqsN86n1jrNIbeVHhITE2XlKZD-bgkhW0GwwfR06DL26ESGPB6tJMmKB1FPPHCe5zSH92kDj0y77ddSgxttnn0uLMKbfKbvFvYc1e8CMgoHxExwDi-xdY7a5ro9Ey9npO84nFesdmy7DjVCdOgMehwU_T0ateJvIWlgA05PI2hM2bQePU",
        title: "Excellence in Sports",
        desc: "Developing discipline and teamwork on the field.",
        span: "md:row-span-2",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAF8zBsgnCllO7DjNPt9Obp53nYDsxaTIU5lNwP6wYv6agTKsYUSFYY1j36cR-s8erkbmIacCHZfLiZaYN9cC3AwFKERP_JatY2gfeJJXgFwV4JvAI2BKAqn8tZQRJwzahLOSe1MOhBd2fqZpyo2c44iWieiEVXd7JHMASsUJlpxrBcPEfJCH5hbETAepi12I_cXPZUCzemWyGr3hKp1bMJ5ks4Pub62OpJFu5CqHvaLMveltK5uPag71V69dCtxEGBIQVvlpy74Y",
        title: "Creative Arts",
        desc: "Where imagination meets technical mastery.",
        span: "md:col-span-1",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3V4EYhSz4qK6xh9cbUoYqSScTSk71Jk36iDMEPPYU7pKK7T7zAoUekvQFCSIlUIOUF9RZn4U1tWjCvNCqQ1-EPwtpnutH6u9Co0cz-t6m-S4H-oqF_RG3gzwek3XG28GNLr-LPGbzCENNx4lXBhSG3aiqk8dwtRflANhm1I602GRruh85ztTDYM7Txz8aLGBN302ChyWi-IJuxy2ViRnO52pIux8WdCrFUcyFBwHrDIpGnu67_sG_hsOvkXVnkJGTJlQUqbxWFk",
        title: "Advanced Labs",
        desc: "Nurturing the scientific temper of tomorrow.",
        span: "md:col-span-1",
    },
    {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKCUl_TY-TUStjpjNBOJEQhpQY55BwWZMe3AyYTm7Z7HiXl3rwTQa2yeaNODEdXvC62y46-6Ux9JLHxBXefZo5z04IG0PlVqqNkxAXyTQXxRGNUdyRqOirIdSEyplQTJlxlM1azmunf9bbQc-8kpA_k1bSZrYXwlgd0qnPLPmOENgVh49aWE-j66LRaTx_-dackT-cYHcsPPdhc7WJnTjLDsz4MChdvAgrjg55Njyg1NN15b32BOP3Sbnt-dcWOe2LxFS7lpzeS4",
        title: "Lush Campus",
        desc: "A serene environment designed for focused learning.",
        span: "md:col-span-2",
    },
];

const CampusLifeCard = ({ item }) => (
    <div className={`relative overflow-hidden rounded-3xl group cursor-pointer ${item.span}`}>
        {/* Image Container */}
        <img
            className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
            src={item.src}
            alt={item.title}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#570000]/90 via-[#570000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold font-headline">{item.title}</h3>
                <p className="text-white/80 mt-2 text-sm font-body tracking-wide">{item.desc}</p>
            </div>
        </div>
    </div>
);

const CampusLife = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <div className="mb-16 text-center">
                <span className="text-[#a6392b] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                    Experience our campus
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline text-stone-900">
                    Life at Tagore School
                </h2>
                <p className="text-stone-500 max-w-2xl mx-auto text-lg font-body">
                    Beyond the classroom, we foster talent in sports, arts, and innovation,
                    creating well-rounded global citizens.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:min-h-[750px]">
                {CAMPUS_IMAGES.map((item, i) => (
                    <CampusLifeCard key={i} item={item} />
                ))}
            </div>

            {/* Optional Footer Action */}
            <div className="mt-16 text-center">
                <button className="px-10 py-4 border-2 border-[#570000] text-[#570000] font-bold rounded-xl hover:bg-[#570000] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                    View Full Gallery
                </button>
            </div>
        </section>
    );
};

export default CampusLife;