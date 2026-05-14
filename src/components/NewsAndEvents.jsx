import React from 'react';

const NEWS_ITEMS = [
    {
        date: "October 15, 2024",
        title: "Tagore School Wins Regional Science Olympiad",
        desc: "Our students secured the first position among 50 participating schools in the annual science exhibition...",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt6zJ1FulKZvs1hM0uC134YUBJqkCJAoxNDb0g8l0ro9iW4msBdW-BU7o6vm78pc1oyp2d9LxrpKhpfGiiVP6GfEtQ4OiMzTbc4mrm3Yzx6y2h2HpY8zTj168vV3O2kXvkX3VXqXQfZZYLSTLwtGpWWGvGng4CjimDB-EVRKIF8Q_Mhc2_OPsXMXMV5TJNVZ7MwNgMTmnuQZHe3Dc4_9zYBBOzXGatE81CmbLwZYnlLwzsxwoipurQLMM112meRvNh5Fe71AUAPmQ",
    },
    {
        date: "October 10, 2024",
        title: "New Digital Innovation Lab Inaugurated",
        desc: "Continuing our commitment to future-ready education, we launched a state-of-the-art AI and Robotics lab...",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgHR3_Iz1ZZnKirLqUDvsZzoWUhhhN5kdRF4Xcv3sA9uo7eqbikcePNltnAnE9sNPEDwOwMxeMdr6Ck7bZ8QQJBZhYwfpHKXSDV73HQ4Hh7SgZOBSkm9ld7SIcJZNXM3sBvdAFR-YmDv0A9xMa4_rxV4iZZ5KIUDU4pEo-Y5IzAVUkFakdZc0iS0kc-dtubwq7aWoKU7PnhZoPzJHUyEeGfJMY0qlkityK_LuXvnsP5Wa08gO6sl8y6ifP4WxeTj5Heq1YgOP-WQA",
    },
    {
        date: "October 02, 2024",
        title: "Annual Parents-Teachers Meet 2024",
        desc: "An insightful session focused on holistic student development and future educational strategies...",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8fYrq2QMHhSr4RzuDlkHxv_gxb-CiHLUuQpTksmNRtjrfmFXJNxgtyfx4xp08MT6opyXCZ-AperLtZXtmFX0-I0SRAKZIA27wjw-cTZNtpdZoKd2Ws_DbsaxF0RXr71yd9ANEFL53DiRtjcVIdnPAAljpqzI2onUsupc8o-c9kvW4SLDXtT7uPQrYVJGus-dQSEJg-HBX1G7opIw1-a_FPVJDSJV3iJ71S6a97hSt6CSM0u5caOOklwot7RmNlbbxjMQvg9UG_uA",
    },
];

const EVENTS = [
    { day: "24", month: "Oct", title: "Annual Sports Meet", venue: "Ground A | 08:30 AM", active: true },
    { day: "02", month: "Nov", title: "Art Exhibition & Sale", venue: "Main Lobby | 10:00 AM", active: false },
    { day: "15", month: "Nov", title: "Alumni Homecoming", venue: "Auditorium | 06:00 PM", active: false },
];

const NewsCard = ({ item }) => (
    <div className="group bg-white p-5 rounded-2xl flex flex-col sm:flex-row gap-6 hover:shadow-[0_10px_30px_-15px_rgba(87,0,0,0.2)] transition-all duration-300 border border-slate-100 cursor-pointer">
        <div className="w-full sm:w-44 h-32 flex-shrink-0 overflow-hidden rounded-xl">
            <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.img}
                alt={item.title}
            />
        </div>
        <div className="flex flex-col justify-center">
            <span className="text-[#a6392b] font-bold text-xs uppercase tracking-widest mb-2 block">{item.date}</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#570000] transition-colors font-headline">{item.title}</h3>
            <p className="text-slate-500 text-sm line-clamp-2 font-body leading-relaxed">{item.desc}</p>
        </div>
    </div>
);

const EventItem = ({ event }) => (
    <div className="flex gap-5 items-center group cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
        <div className={`w-16 h-16 flex flex-col items-center justify-center rounded-xl flex-shrink-0 transition-transform group-hover:scale-105 ${event.active
            ? "bg-[#570000] text-white shadow-lg shadow-red-900/20"
            : "bg-slate-100 text-[#570000] border border-slate-200"
            }`}>
            <span className="text-xl font-bold leading-none">{event.day}</span>
            <span className="text-[10px] uppercase font-black mt-1 tracking-tighter">{event.month}</span>
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-base group-hover:text-[#570000] transition-colors font-headline leading-tight">{event.title}</h4>
            <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                <span className="material-symbols-outlined text-sm"></span>
                <p className="text-xs font-medium font-body">{event.venue}</p>
            </div>
        </div>
    </div>
);

const NewsAndEvents = () => {
    return (
        <section className="py-24 bg-[#f9f9f9]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* News Column */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-4">
                            <div>
                                <span className="text-[#a6392b] font-bold tracking-widest uppercase text-xs mb-2 block">Journal</span>
                                <h2 className="text-4xl font-black tracking-tight text-stone-900 font-headline">Latest News</h2>
                            </div>
                            <a href="#" className="group text-[#570000] font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                                View All
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                        <div className="space-y-6">
                            {NEWS_ITEMS.map((item, i) => <NewsCard key={i} item={item} />)}
                        </div>
                    </div>

                    {/* Events Column */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="mb-12 border-b border-slate-200 pb-4">
                            <span className="text-[#a6392b] font-bold tracking-widest uppercase text-xs mb-2 block">Calendar</span>
                            <h2 className="text-4xl font-black tracking-tight text-stone-900 font-headline">Upcoming</h2>
                        </div>
                        <div className="bg-white/50 border border-slate-100 rounded-3xl p-6 space-y-8">
                            {EVENTS.map((event, i) => <EventItem key={i} event={event} />)}

                            <button className="w-full mt-6 bg-transparent border-2 border-[#570000]/20 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs text-[#570000] hover:bg-[#570000] hover:text-white hover:border-[#570000] transition-all duration-300 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-base"></span>
                                Download School Calendar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;