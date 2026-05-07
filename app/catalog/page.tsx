"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CatalogPage() {
  const [placeholder, setPlaceholder] = useState("Cari sektor...");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPlaceholder("Cari sektor atau nama pelaku kreatif...");
      } else {
        setPlaceholder("Cari sektor...");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectors = [
    { icon: "restaurant", name: "Kuliner", count: 124, color: "primary" },
    { icon: "styler", name: "Fashion", count: 86, color: "secondary" },
    { icon: "brush", name: "Kriya", count: 92, color: "tertiary" },
    { icon: "music_note", name: "Musik", count: 45, color: "primary" },
    { icon: "photo_camera", name: "Fotografi", count: 38, color: "secondary" },
    { icon: "design_services", name: "Desain Grafis", count: 61, color: "tertiary" },
    { icon: "movie", name: "Film & Video", count: 29, color: "primary" },
    { icon: "devices", name: "Aplikasi", count: 22, color: "secondary" },
    { icon: "theater_comedy", name: "Seni Tari", count: 54, color: "tertiary" },
    { icon: "architecture", name: "Arsitektur", count: 19, color: "primary" },
  ];

  const entrepreneurs = [
    {
      name: "Anjuk Craft Studio",
      owner: "Ahmad Fauzi",
      category: "Kriya",
      location: "Loceret, Nganjuk",
      description: "Spesialis kerajinan kulit tradisional Nganjuk dengan sentuhan desain modern minimalis untuk pasar ekspor.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1ud6Bc-lC2wA8VElbQ2gEtYNWzMkcomajdmV7uK9XPBv2A7PlCqXOEaZN96QnyGfb0Ny28ehHjmsThk-JwoMkHRBN83669FnqYaU8ajjDU3TX9E01IcTLVlozXV0bvJgHefktchTG5FbO0Ja7kRkcs0DLMTyT3dGmZyQQMhX88zRd6Tjh81qowAwf5RFfsy1QmKw-Hw_sys158XGg6qLDo0iv2ZfWfRBFMZ9JZKcs0Ce4vIyE7uxDGdYI_2ZvlNdasz_vFP4ee8xm",
      color: "primary",
    },
    {
      name: "Kopi Wilis Blend",
      owner: "Siti Rahmawati",
      category: "Kuliner",
      location: "Sawahan, Nganjuk",
      description: "Roastery kopi lokal yang memberdayakan petani kopi lereng Gunung Wilis dengan teknik roasting specialty.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATNt01RLVkGEqzExl560AZH4vx6AVDU9bDtshZ-I9OvN_PDbmVIalzWn-pHHRyyFoOz85IZA7OIIWRbQ6hb8T12M4i4--BxKX-R5abMVhoKVC8_QpnLvPLzdR09Oy8vzO6mYXrTG8p_s7HxY4RW3QN-HC-4Y2goZhOKvBp3sYnNF2UK2zj_VeGY-6haBYYdGXjm2zOQL2UV20jjttiuR-h29hJGUFEdx_ITAjraH50eiH2J31OLaYbqMvIlLTh3Aa8Tm_TDDWwolQU",
      color: "secondary",
    },
    {
      name: "Digital Nganjuk Hub",
      owner: "Kevin Sanjaya",
      category: "Aplikasi",
      location: "Kertosono, Nganjuk",
      description: "Startup pengembang solusi digital untuk UMKM lokal, mulai dari e-commerce hingga sistem manajemen inventori.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmkjGRKRMuJF6BYvlJapwK1PkMY4yV5v9SWZQloPa4TsBTI1V0V9St1OPRWmlOgqc236awMbN2CINLmqCZO-DQpFhc3WSCFjgJc86iXT29CLAR7GG5gQPpYFSJjm0Cdj_xtfE4Zovvq91D9LMUhgN6BBYWg0TOGF1zjKU1fuaonEWoUsnhwgH7OJ78oSDscxJCGs9Aae-aq3DRvm9RXh326dk_pR8qAdoWF-vnkDl2LfgrUliSV-3qtzHI7tWtLisjILZ8m-_vbajp",
      color: "tertiary",
    },
    {
      name: "Batik Bayu Bersemi",
      owner: "Ibu Hartati",
      category: "Fashion",
      location: "Berbek, Nganjuk",
      description: "Produsen batik tulis eksklusif dengan motif khas Nganjuk yang telah tampil di berbagai ajang fashion show nasional.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLaqIj8A_7FqFeYqOB-ZXSqs930dalWwUnK0Oy8No3sINlDBPP_ynrVRY3ao17YaeNfuCjBV3rl8HBf6MdrPxJ-N2VT7VpIPAY71qg_RReS0IaKkrVn1x_8oW7tmvshL1148LmnijEHxjt37yOlpGd7lkvfuJ-8DuEbay_QKnJ1qXpoGBjbJx0XZ6ss8YU5aYLKD9ZPRJnZW3XrMQKnVemJ_9XXkUyYML3VIS0K0fSS3-CCc0g6x-kjzZW03vqV4KtxOypsmumrq6y",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md min-h-screen dark">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section with Search */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-20 relative">
          <div className="absolute inset-0 hero-glow -z-10"></div>
          <div className="max-w-3xl">
            <h1 className="font-h1 text-[2.5rem] md:text-h1 text-primary-fixed mb-6 leading-tight">
              Katalog Sektor Ekonomi Kreatif
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Jelajahi ekosistem kreatif Nganjuk melalui 17 subsektor unggulan. Temukan inovasi, karya
              seni, dan peluang kolaborasi bersama para pelaku industri lokal.
            </p>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 md:left-6 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">search</span>
              </div>
              <input
                className="w-full bg-surface-container-high border-outline-variant/30 border text-on-surface rounded-full py-4 md:py-5 pl-10 md:pl-12 pr-6 md:pr-8 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-on-surface-variant/50 backdrop-blur-md text-sm md:text-base"
                placeholder={placeholder}
                type="text"
              />
              <div className="absolute right-2 inset-y-2">
                <button className="h-full px-6 md:px-8 bg-secondary-container text-on-secondary-container rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-tertiary font-label-caps text-[10px] md:text-label-caps uppercase tracking-widest mb-2 block">
                Kategori Unggulan
              </span>
              <h2 className="font-h2 text-[2rem] md:text-h2 text-on-surface">Subsektor Kreatif</h2>
            </div>
            <div className="text-on-surface-variant font-body-md text-sm md:text-base">17 Sektor Tersedia</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className={`glass-card p-6 md:p-8 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-${sector.color}-container rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
                >
                  <span className={`material-symbols-outlined text-${sector.color} text-2xl md:text-4xl`}>
                    {sector.icon}
                  </span>
                </div>
                <h3 className={`font-h3 text-lg md:text-h3 text-${sector.color} mb-2`}>{sector.name}</h3>
                <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">
                  {sector.count} Pelaku
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Entrepreneurs Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-h2 text-h2 text-on-surface">Pelaku Kreatif Unggulan</h2>
            <button className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-2 group">
              Lihat Semua Pelaku{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {entrepreneurs.map((item) => (
              <div key={item.name} className="glass-card overflow-hidden rounded-2xl flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.name}
                    src={item.img}
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-h3 text-h3 text-${item.color}`}>{item.name}</h3>
                      <span
                        className={`bg-${item.color}/10 text-${item.color} px-3 py-1 rounded-full text-[10px] font-bold uppercase`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-on-surface-variant font-label-caps text-label-caps mb-4">
                      Pemilik: {item.owner}
                    </p>
                    <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">
                      {item.description || `Spesialis ${item.category.toLowerCase()} dengan sentuhan lokal Nganjuk.`}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span className="text-xs">{item.location}</span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined">public</span>
                      </a>
                      <a
                        href="#"
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined">mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
