"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  const objectives = [
    {
      icon: "bolt",
      title: "Empowerment",
      description: "Memberikan pelatihan, workshop, dan pendampingan berkelanjutan bagi pelaku UMKM kreatif untuk meningkatkan standar kualitas produk.",
    },
    {
      icon: "devices",
      title: "Digitalization",
      description: "Membangun infrastruktur digital yang memudahkan akses data, publikasi karya, dan transaksi ekonomi secara transparan dan efisien.",
    },
    {
      icon: "hub",
      title: "Networking",
      description: "Menghubungkan talenta lokal dengan investor, mentor, dan komunitas kreatif di tingkat nasional maupun internasional.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md selection:bg-primary selection:text-primary-container dark">
      <Navbar />

      <main className="pt-24 relative">
        {/* Background Gradient Blobs */}
        <div className="gradient-blob w-[600px] h-[600px] -top-48 -left-48 bg-primary/20"></div>
        <div className="gradient-blob w-[600px] h-[600px] top-1/2 -right-48 opacity-40 bg-secondary/20"></div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 md:pb-20 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="font-label-caps text-[10px] md:text-label-caps text-primary tracking-[0.2em] uppercase">
              Pusat Kreativitas Daerah
            </span>
            <h1 className="font-h1 text-[2.5rem] md:text-h1 leading-tight">
              Membangun Masa Depan{" "}
              <span className="gradient-text">Ekonomi Kreatif</span> di Nganjuk.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0">
              Portal Ekonomi Kreatif Nganjuk (Ekraf Nganjuk) adalah inisiatif strategis untuk
              memetakan, memberdayakan, dan mempromosikan seluruh potensi industri kreatif di
              Kabupaten Nganjuk menuju era digitalisasi global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-primary text-primary-container rounded-full font-h3 text-body-md font-bold hover:shadow-[0_0_20px_rgba(185,199,228,0.4)] transition-all">
                Pelajari Lebih Lanjut
              </button>
              <button className="px-8 py-4 border border-outline-variant text-on-surface rounded-full font-h3 text-body-md hover:bg-surface-container-high transition-all">
                Kontak Kami
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="glass-card glass-stroke rounded-3xl overflow-hidden aspect-video relative z-10">
              <img
                alt="Collaboration in Nganjuk"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTw88q5derlJMMRNzE4Bw3cddZQo3kNy_uZwVc-96gufE1yRLFhhbwVYRjqOqVJPYjMtPeRuGHfzmbY1BE1JBWskFseJr6_mi24msyZTmlHXkvNBRmdp5oTG1CXxTN3V9p0_HLnsX--fjpg4WDPp-UILBR5_tmxstUq2tbN6dTV0pdUHQCHmCKScjR95pduO5HZYy00bloE4cnwOHdkEXiJNdUj-lPszWDGR84-g9e1PZ5p2JpAM7fS535yiPZTBz2OMrA-m0qg4BV"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card p-4 md:p-6 rounded-2xl z-20 border border-outline-variant/30">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" data-icon="rocket_launch">
                  rocket_launch
                </span>
                <div>
                  <div className="font-h3 text-xl md:text-h3">17+</div>
                  <div className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Sektor Kreatif</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission (Bento Grid) */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-h2 text-h2 mb-4">Visi & Misi Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Landasan kami dalam mendorong pertumbuhan ekonomi berbasis kreativitas dan kearifan lokal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
            <div className="md:col-span-2 glass-card glass-stroke p-8 md:p-12 rounded-[2rem] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8" data-icon="visibility">
                  visibility
                </span>
                <h3 className="font-h2 text-h2 mb-4">Visi Utama</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  &quot;Menjadikan Kabupaten Nganjuk sebagai pusat keunggulan ekonomi kreatif di Jawa
                  Timur yang berbasis pada kemandirian digital, kolaborasi lintas sektor, dan
                  pelestarian identitas budaya lokal pada tahun 2029.&quot;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" data-icon="star">
                    star
                  </span>
                </div>
                <span className="font-label-caps text-label-caps">Visi Strategis 2029</span>
              </div>
            </div>

            <div className="space-y-gutter">
              <div className="glass-card glass-stroke p-8 rounded-[2rem] hover:scale-[1.02] transition-all duration-500">
                <span className="material-symbols-outlined text-tertiary mb-4" data-icon="groups">
                  groups
                </span>
                <h4 className="font-h3 text-h3 mb-2">Kolaborasi</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Menciptakan ekosistem inklusif bagi seluruh pelaku kreatif.
                </p>
              </div>
              <div className="glass-card glass-stroke p-8 rounded-[2rem] bg-secondary-container/20 hover:scale-[1.02] transition-all duration-500">
                <span className="material-symbols-outlined text-primary mb-4" data-icon="language">
                  language
                </span>
                <h4 className="font-h3 text-h3 mb-2">Digitalisasi</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Transformasi karya lokal menuju akses pasar global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Objectives */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {objectives.map((obj) => (
                <div key={obj.title} className="flex flex-col items-start gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${obj.title === "Empowerment" ? "primary" : obj.title === "Digitalization" ? "tertiary" : "secondary"}-container flex items-center justify-center border border-${obj.title === "Empowerment" ? "primary" : obj.title === "Digitalization" ? "tertiary" : "secondary"}/20`}
                  >
                    <span className={`material-symbols-outlined text-${obj.title === "Empowerment" ? "primary" : obj.title === "Digitalization" ? "tertiary" : "secondary"} text-3xl`}>
                      {obj.icon}
                    </span>
                  </div>
                  <h3 className="font-h3 text-h3">{obj.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Potensi Daerah Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-32">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="glass-card rounded-2xl overflow-hidden h-64 border-t border-l border-outline-variant/30 shadow-xl">
                  <img
                    alt="Batik Nganjuk"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJwBFKlF1yf5sXpxZEfPxAH6XSE0Cniq1tkGSoYNDVLA-onRD-MnCpuAZMgL_e6eTPeb_BqZ1tvdey6YvVJNkKLfdmHIiGoyaVVrekX1sTZrLZ7OD4GvUNv7oZv7Vs458a5SP0kV27SjOW6BZRw4hLKYpZg-ePzQONE5gpk6apggm3aI6pFjk_MgPNHQuOQtNguzTxiVNb3BJfZHRIjqa8pOIiqqynCPMrLKyynDsHinzwGrMOd7lfDkctkv-5fN1n8Hs6cPry6qME"
                  />
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <h4 className="font-h3 text-h3 text-primary">85%</h4>
                  <p className="font-label-caps text-label-caps">Pertumbuhan Talenta Digital</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-card rounded-2xl overflow-hidden h-96 border-t border-l border-outline-variant/30 shadow-xl">
                  <img
                    alt="Nganjuk Digital Arts"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl-CfvOn4z4EazCbF73BvEJB7esw1OZpCNCZjh7wrxU6ghX2dGJHPqOC_BpKs2ordTlMpJhMUkotWsYSSYRimOGg9eF9M-r84DKUpNgmsnAo3Bgq_E9OZVuMRgo6-Cji7lE1VoQLPLXN_Ymj8fOWDzdmsBvcGSnIoR-f97VHku7-HzOsOACQfoS5F5L33iApU-bWeNZnPs41dGDLwbrnzpkXdBcpD9Qakbcxz75h2cb3laCJgMbFIXS_S96uQy3Ne01-6j7BrXHO6M"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <h2 className="font-h2 text-h2">
                Kekuatan <span className="gradient-text">Potensi Lokal</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nganjuk bukan sekadar wilayah agraris. Kami adalah rumah bagi ribuan pengrajin Batik,
                animator kelas dunia, dan inovator kuliner yang menggabungkan resep warisan dengan
                presentasi modern.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 glass-card p-4 rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary" data-icon="psychology">
                    psychology
                  </span>
                  <span className="font-body-md text-body-md">Local Wisdom & Artisanal Crafts</span>
                </li>
                <li className="flex items-center gap-4 glass-card p-4 rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary" data-icon="person_celebrate">
                    person_celebrate
                  </span>
                  <span className="font-body-md text-body-md">Young Emerging Talent Pool</span>
                </li>
                <li className="flex items-center gap-4 glass-card p-4 rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary" data-icon="landscape">
                    landscape
                  </span>
                  <span className="font-body-md text-body-md">Creative Tourism Destinations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Government Support */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-32 mb-20">
          <div className="glass-card glass-stroke p-12 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <span className="font-label-caps text-label-caps text-primary mb-6 block">
                Kemitraan Strategis
              </span>
              <h2 className="font-h2 text-h2 mb-8">
                Didukung Penuh Oleh Pemerintah Kabupaten Nganjuk
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
                Di bawah naungan{" "}
                <strong>Dinas Pariwisata, Kepemudaan, Olahraga, dan Kebudayaan (Disparporabud) Nganjuk</strong>
                , portal ini menjadi jembatan resmi antara regulasi pemerintah dan kebutuhan nyata
                para pelaku industri kreatif.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <img
                  alt="Logo Kabupaten Nganjuk"
                  className="h-24 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-EX6MtOmnzWZB9nD5gpDZzEmWxTvgrjIVcIu7bJUW0-YotI41lN7U1La7Rdp-lm63_1seZSv5Pa5kwNR6lng8h5Nh9vCtrS-5liC-kxBMNJ4-mTnXiYMuHMtbVShvbQaOGNe-EffJRpExSyjE7EmenwHwkwL_DvOQp7reEZZo29PlJeMCPwoHP3owX6MIw5qvsA9dwGq7GE2vkNNQG2GdM2Di5-1O0Y7xBzop0OcA7Mamt4tWGb981GCBN_V5CIYQrkHxabliu16E"
                />
                <div className="h-16 w-[1px] bg-outline-variant/30 hidden md:block"></div>
                <div className="text-left">
                  <div className="font-h3 text-h3 text-on-surface">Disparporabud</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Pemerintah Kab. Nganjuk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
