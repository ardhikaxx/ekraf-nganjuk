"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"entrepreneur" | "admin">("entrepreneur");

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden dark">
      <Navbar />

      <main className="relative pt-24">
        {/* Background Decorative Elements */}
        <div className="gradient-blob w-[500px] h-[500px] top-[-100px] left-[-100px] bg-secondary-container"></div>
        <div className="gradient-blob w-[600px] h-[600px] bottom-[20%] right-[-200px] bg-tertiary-container"></div>

        {/* Hero Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-secondary">The Future of Creativity</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface">
              Portal Ekonomi Kreatif Kabupaten Nganjuk
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Empowering local UMKM through digital transformation and strategic creative networks. We bridge tradition with innovation to build a sustainable creative ecosystem in the heart of East Java.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-secondary-container to-secondary rounded-full font-label-caps text-label-caps text-on-secondary-fixed shadow-[0_0_20px_rgba(38,65,145,0.4)] hover:scale-105 transition-all">
                Explore Catalog
              </button>
              <button className="px-8 py-4 border border-outline-variant bg-surface/40 backdrop-blur rounded-full font-label-caps text-label-caps text-on-surface hover:bg-surface-container transition-all">
                Join Entrepreneur Hub
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] p-4 relative z-10 overflow-hidden aspect-square flex items-center justify-center">
              <img
                alt="Creative Economy Showcase"
                className="w-full h-full object-cover rounded-[1.5rem]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKMayay69sUJRvEZvyiRDrZMCe8YucU6RcF3ItyAnD2mvjAZ0AXDgtwiC_KU-PFNHUPhNupP320_X2Eggc5r2KBd8LXtrcHm1ighcTSgykQYvwXWuayFVC33qzOF-PX9zpD1U6ipsIaEBJP1iDC2PZJWBtArb8b522sTa7Fwe76UdOOwOLN-RbOTT1O8Kcl0yhOiSSxbLrmY59pcKGgye4V51iH3WZ6Bit5ESKyn30x1hNZ11nlbz5p9lKHpzyg5APqIoKVVnu-iV"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl z-20 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">trending_up</span>
                </div>
                <div>
                  <div className="font-h3 text-h3 text-on-surface">+120%</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">Growth Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
              <div className="font-h1 text-h1 text-primary">1,240+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Creative Entrepreneurs
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
              <div className="font-h1 text-h1 text-secondary">16</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Creative Sectors
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
              <div className="font-h1 text-h1 text-tertiary">85</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Annual Events
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sectors */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="font-h2 text-h2 text-on-surface">Creative Sectors</h2>
              <p className="font-body-md text-on-surface-variant">
                Discover the pillars of Nganjuk&apos;s creative economy.
              </p>
            </div>
            <a href="/catalog" className="text-primary font-label-caps text-label-caps flex items-center gap-2 group">
              View All Sectors{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "restaurant", name: "Kuliner", color: "secondary" },
              { icon: "styler", name: "Fashion", color: "tertiary" },
              { icon: "draw", name: "Kriya", color: "primary" },
              { icon: "music_note", name: "Musik", color: "secondary" },
              { icon: "devices", name: "Digital", color: "tertiary" },
            ].map((sector) => (
              <div
                key={sector.name}
                className="glass-card p-8 rounded-3xl group hover:bg-primary-container/20 transition-all duration-500 cursor-pointer text-center space-y-4"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${sector.color}-container/50 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className={`material-symbols-outlined text-${sector.color} text-3xl`}>
                    {sector.icon}
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">{sector.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Entrepreneurs Showcase */}
        <section className="bg-surface-container-low py-24">
          <div className="px-margin-desktop max-w-container-max mx-auto">
            <div className="mb-12">
              <h2 className="font-h2 text-h2 text-on-surface">Featured Entrepreneurs</h2>
              <p className="font-body-md text-on-surface-variant">
                The minds shaping our local economy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                {
                  title: "Anindya Batik",
                  category: "KRIYA",
                  location: "Nganjuk Kota",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD154YKr9TqtNYk6YZg_naHjZskGnu5aNAPhu7CaoJVT1flzPtXSqqhO_tqLijrsPkVZwApoKkimDVncFu7uWg0K3daUoBGcS2IhjQJBtc5_aitPgV_FCqFxSnUtm3buBjiFzCKqu_oEmSkz-JIh7-61M8Q41Etq6w6ZOXXxIaeEsfsKo8FQ_oYZCrya5i0yTd00vkU66Fi-cK9BaDjTjF7n1YYkh8mcrdLq_HJ1PtxMV52aOWlQKPNJ-22w8pmMusGKAaGaPBQeKZy",
                  color: "primary",
                },
                {
                  title: "Omah Rasa",
                  category: "KULINER",
                  location: "Loceret",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8R9HOyhogV3CiQC5P7PlLesNhRTG5Ll8rvmUa3QDWttD3Rqnipr4Jq9fCa8vAARs14erV0sTWq80DM1WCzK9regu1Pue7Brx-yVK19GLJy-w5yEEkcvMxI6xVkL97CFpF4_db-8GOw84DJqnKZh_oWvOYdBM59-jI4fZtg5C3_fclOuMvflfL8WpRS53FXNWFYNUVZIGrYWNcYPoDQ_6HuyQT5faOA425SltKt32EF0CKhx-4Bs7MXmpRdxDaNRJj15dztiqD9E8",
                  color: "secondary",
                },
                {
                  title: "Pixel Hub",
                  category: "DIGITAL",
                  location: "Kertosono",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD_ZsyCUzytPVIQZZiehhm8M3mYTJ7veD5PDY32gCfOxdAYm03te9iOaBb0wofvjggkr_PrLXotdDt6fs1NH9Yizt7sbHEdhoYjFkxLrwPVGGFDgt1a16v0iaA8iFaTqabAKKr4Hr6fltK0K0pLKcp4eOaoNqeT6SPsjiK-MBMOh2dKhts3NonXpYmkGDduXSknQo4sWCQYSk5Qlsj2SvWyFaeCm7jgttMUi_nIFwSxRX3vowh3xgMtALq83XL-MLvL8W4ZeAk1drE",
                  color: "tertiary",
                },
                {
                  title: "Stitch Studio",
                  category: "FASHION",
                  location: "Berbek",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc0KeSa9EdNbzAr5ixvYQtBW3BY7xFGSrubLpXUFLCjsS95nfpjWIQJQK2w07RDJizNcryb42uyqxJEBpxnbJG4vARecGH_GmhpB5ooj5qaKEP8Ekf7D3_wJ0L9nFw7nXd16XaGLT27mBO8RypdvlnQrsrqlBaNq6UDoJjlM5WLzVoS5F5bTx3NwXlak_OX0wbRoXdLLIaSan5Eii6NEVUkByaGy_DMeCqkqsIeoNRpHBE_QyW1_OjPwIpZvwq3Rjq2vzW7YpZ-T0S",
                  color: "primary-fixed-dim",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={item.img}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6 space-y-2">
                    <div
                      className={`px-3 py-1 bg-${item.color} text-on-${item.color} w-fit rounded-full font-label-caps text-[10px]`}
                    >
                      {item.category}
                    </div>
                    <h4 className="font-h3 text-h3 text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <h2 className="font-h2 text-h2 text-on-surface mb-12">Upcoming Activities</h2>
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 group hover:border-primary/40 transition-all cursor-pointer">
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                <img
                  alt="Creative Workshop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBncbS5aG8i06_UjQ4GQ7C7F0hW_UnkdCrqNv9blAReVGlulTYlPV6M6N7KeHtteIW3HKoNvNA0NYnozTB-sVriOJKWvUXARDdPcnbTzieTwUExvRWh5c5TUTenRGq3Jw3R3Xdv-MOuqTkTsCDT79lYQ86ITt7yBSQvU2oPFuasEzmhoRs6Vue1G7hCux2wd7V38meCEOGaQzLuSd3bie58ErgrBJyQUEMDqnSlg4h67cwQqNwuBCuIoz2pxKtygr6oZz4bKMXKomyQ"
                />
              </div>
              <div className="flex-grow space-y-2">
                <div className="font-label-caps text-label-caps text-tertiary">
                  Oct 24, 2024 &bull; Nganjuk Creative Hub
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Digital Marketing for UMKM</h3>
                <p className="text-on-surface-variant">
                  Intensive workshop on scaling your business using social media and e-commerce
                  platforms.
                </p>
              </div>
              <button className="shrink-0 px-6 py-3 bg-tertiary-container text-on-tertiary-container rounded-xl font-label-caps text-label-caps hover:bg-tertiary transition-colors">
                Join Event
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 group hover:border-secondary/40 transition-all cursor-pointer">
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                <img
                  alt="Art Festival"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEb1s-HDF4XkSygmeGXdqRP2hs3S6KefcNnZpMHSpEV0Ml89Q9POYusdPtFprLHOY1R5tkH-8D8hpi_ljayNJRVi7Bob0rJOzpQx1DxkBV8rwFaNMPviWjIxNFWfre9zP43krTWyIN-vi8dz1m1F2sF7MpX94tdyjW1R5EZBzxpWD29WKyu3RjlP3O8VyUyrzDLpTKDCWAhf3A_UjQE_20wYgOW6mUzh_iDokYhFR1evvt3WRr04KXiVXbWXQjanJVaB97k2k-AFx1"
                />
              </div>
              <div className="flex-grow space-y-2">
                <div className="font-label-caps text-label-caps text-secondary">
                  Nov 12, 2024 &bull; Alun-alun Nganjuk
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Nganjuk Creative Night</h3>
                <p className="text-on-surface-variant">
                  Annual showcase of local music, performing arts, and kriya exhibitions.
                </p>
              </div>
              <button className="shrink-0 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-caps text-label-caps hover:bg-secondary transition-colors">
                Join Event
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="px-margin-desktop max-w-container-max mx-auto text-center">
            <h2 className="font-h2 text-h2 text-on-surface mb-12">Voices of Innovation</h2>
            <div className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] relative">
              <span className="material-symbols-outlined text-6xl text-primary/20 absolute top-8 left-8">
                format_quote
              </span>
              <p className="font-body-lg text-body-lg text-on-surface italic relative z-10">
                &quot;Portal Ekonomi Kreatif Nganjuk has been a game-changer for my fashion label.
                It didn&apos;t just give us a platform to sell, but a community to grow and innovate
                together with other creators.&quot;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    alt="Sarah J."
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKBU006iLJZojqh-xwfyLAjPvzOHRjj3sFCD4QwGaIzW-xRNAI3w-6qZWvf5C-9O_NzMA2p8lVJ_2RDU1Ine-nivcEpn2l-xm6Be9Um0mt-HPgYXqMxTxjTqmbVZcq0UrK4cP2SLMheKfoUXZm62Hde0yP3uYYnl4AjJG02GVzDqRK5cy9Z2PlGrsC2Ii5iC7RqB7ERKdL89qTu0w1vzkA4_AhCuVKwEyRWmAQxoMeVltts381GISo-vVgL92RoCV_PLdGM178rAxM"
                  />
                </div>
                <div className="text-left">
                  <div className="font-h3 text-h3 text-on-surface">Sarah Jatmiko</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Founder, Nganjuk Threads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-margin-desktop max-w-container-max mx-auto py-24">
          <div className="bg-gradient-to-br from-primary-container to-secondary-container rounded-[3rem] p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-h1 text-h1 text-on-surface">
                Ready to Scale Your Creative Venture?
              </h2>
              <p className="font-body-lg text-on-primary-container/80">
                Join over a thousand entrepreneurs in Nganjuk who are redefining the future of our
                local economy. Get access to funding, workshops, and a global marketplace.
              </p>
              <button className="px-12 py-5 bg-on-surface text-surface rounded-full font-h3 text-h3 hover:scale-105 transition-all shadow-xl">
                Register Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
