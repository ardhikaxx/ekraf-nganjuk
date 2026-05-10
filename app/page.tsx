"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function Home() {
  const testimonialText = "Portal Ekonomi Kreatif Nganjuk telah membawa perubahan besar bagi label fashion saya. Ini bukan sekadar platform untuk berjualan, tetapi sebuah komunitas bagi para kreatif untuk tumbuh dan berinovasi bersama.";

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden dark">
      <Navbar />

      <main className="relative pt-24">
        <PageTransition>
          {/* Background Decorative Elements */}
          <div className="gradient-blob w-[500px] h-[500px] top-[-100px] left-[-100px] bg-secondary-container"></div>
          <div className="gradient-blob w-[600px] h-[600px] bottom-[20%] right-[-200px] bg-tertiary-container"></div>

          {/* Hero Section */}
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-caps text-label-caps text-secondary text-[10px] md:text-label-caps">Masa Depan Kreativitas</span>
              </div>
              <h1 className="font-h1 text-[2.5rem] leading-tight md:text-h1 text-on-surface">
                Portal Ekonomi Kreatif Kabupaten Nganjuk
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Memberdayakan UMKM lokal melalui transformasi digital dan jaringan kreatif yang strategis. Kami menjembatani tradisi dengan inovasi untuk membangun ekosistem kreatif yang berkelanjutan di jantung Jawa Timur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-secondary-container to-secondary rounded-full font-label-caps text-label-caps text-on-secondary-fixed shadow-[0_0_20px_rgba(38,65,145,0.4)] hover:scale-105 transition-all">
                  Jelajahi Katalog
                </button>
                <button className="w-full sm:w-auto px-8 py-4 border border-outline-variant bg-surface/40 backdrop-blur rounded-full font-label-caps text-label-caps text-on-surface hover:bg-surface-container transition-all">
                  Gabung Hub Wirausaha
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-[2rem] p-4 relative z-10 overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  alt="Etalase Ekonomi Kreatif"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKMayay69sUJRvEZvyiRDrZMCe8YucU6RcF3ItyAnD2mvjAZ0AXDgtwiC_KU-PFNHUPhNupP320_X2Eggc5r2KBd8LXtrcHm1ighcTSgykQYvwXWuayFVC33qzOF-PX9zpD1U6ipsIaEBJP1iDC2PZJWBtArb8b522sTa7Fwe76UdOOwOLN-RbOTT1O8Kcl0yhOiSSxbLrmY59pcKGgye4V51iH3WZ6Bit5ESKyn30x1hNZ11nlbz5p9lKHpzyg5APqIoKVVnu-iV"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 glass-card p-4 md:p-6 rounded-2xl z-20 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">trending_up</span>
                  </div>
                  <div>
                    <div className="font-h3 text-xl md:text-h3 text-on-surface">+120%</div>
                    <div className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Tingkat Pertumbuhan</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-gutter">
              <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
                <div className="font-h1 text-h1 text-primary">1,240+</div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Wirausaha Kreatif
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
                <div className="font-h1 text-h1 text-secondary">16</div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Sektor Kreatif
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center space-y-2 hover:scale-[1.02] transition-transform">
                <div className="font-h1 text-h1 text-tertiary">85</div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Kegiatan Tahunan
                </div>
              </div>
            </div>
          </section>

          {/* Featured Sectors */}
          <section className="px-margin-desktop max-w-container-max mx-auto py-24">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <h2 className="font-h2 text-h2 text-on-surface">Sektor Kreatif</h2>
                <p className="font-body-md text-on-surface-variant">
                  Temukan pilar-pilar ekonomi kreatif Nganjuk.
                </p>
              </div>
              <a href="/catalog" className="text-primary font-label-caps text-label-caps flex items-center gap-2 group">
                Lihat Semua Sektor{" "}
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
                <h2 className="font-h2 text-h2 text-on-surface">Pelaku Kreatif Unggulan</h2>
                <p className="font-body-md text-on-surface-variant">
                  Sosok-sosok di balik ekonomi lokal kita.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {[
                  {
                    title: "Anindya Batik",
                    category: "KRIYA",
                    location: "Nganjuk Kota",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD154YKr9TqtNYk6YZg_naHjZskGnu5aNAPhu7CaoJVT1flzPtXSqqhO_tqLijrsPkVZwApoKkimDVncFu7uWg0K3daUoBGcS2IhjQJBtc5_aitPgV_FCqFxSnUtm3buBjiFzCKqu_oEmSkz-JIh7-61M8Q41Etq6w6ZOXXxIaeEsfsKo8FQ_oYZCrya5i0yTd00vkU66Fi-cK9BaDjTjF7n1YYkh8mcrdLq_HJ1PtxMV52aOWlQKPNJ-22w8pmMusGKAaGaPBQeKZy",
                  },
                  {
                    title: "Omah Rasa",
                    category: "KULINER",
                    location: "Loceret",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8R9HOyhogV3CiQC5P7PlLesNhRTG5Ll8rvmUa3QDWttD3Rqnipr4Jq9fCa8vAARs14erV0sTWq80DM1WCzK9regu1Pue7Brx-yVK19GLJy-w5yEEkcvMxI6xVkL97CFpF4_db-8GOw84DJqnKZh_oWvOYdBM59-jI4fZtg5C3_fclOuMvflfL8WpRS53FXNWFYNUVZIGrYWNcYPoDQ_6HuyQT5faOA425SltKt32EF0CKhx-4Bs7MXmpRdxDaNRJj15dztiqD9E8",
                  },
                  {
                    title: "Pixel Hub",
                    category: "DIGITAL",
                    location: "Kertosono",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD_ZsyCUzytPVIQZZiehhm8M3mYTJ7veD5PDY32gCfOxdAYm03te9iOaBb0wofvjggkr_PrLXotdDt6fs1NH9Yizt7sbHEdhoYjFkxLrwPVGGFDgt1a16v0iaA8iFaTqabAKKr4Hr6fltK0K0pLKcp4eOaoNqeT6SPsjiK-MBMOh2dKhts3NonXpYmkGDduXSknQo4sWCQYSk5Qlsj2SvWyFaeCm7jgttMUi_nIFwSxRX3vowh3xgMtALq83XL-MLvL8W4ZeAk1drE",
                  },
                  {
                    title: "Stitch Studio",
                    category: "FASHION",
                    location: "Berbek",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc0KeSa9EdNbzAr5ixvYQtBW3BY7xFGSrubLpXUFLCjsS95nfpjWIQJQK2w07RDJizNcryb42uyqxJEBpxnbJG4vARecGH_GmhpB5ooj5qaKEP8Ekf7D3_wJ0L9nFw7nXd16XaGLT27mBO8RypdvlnQrsrqlBaNq6UDoJjlM5WLzVoS5F5bTx3NwXlak_OX0wbRoXdLLIaSan5Eii6NEVUkByaGy_DMeCqkqsIeoNRpHBE_QyW1_OjPwIpZvwq3Rjq2vzW7YpZ-T0S",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group relative bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <Image
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        src={item.img}
                        width={300}
                        height={375}
                      />
                    </div>                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 p-6 space-y-2">
                      <div
                        className="bg-primary-container text-white px-3 py-1 w-fit rounded-full font-label-caps text-[10px] font-bold uppercase"
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
            <h2 className="font-h2 text-h2 text-on-surface mb-12">Kegiatan Mendatang</h2>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 group hover:border-primary/40 transition-all cursor-pointer">
                <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                  <Image
                    alt="Creative Workshop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBncbS5aG8i06_UjQ4GQ7C7F0hW_UnkdCrqNv9blAReVGlulTYlPV6M6N7KeHtteIW3HKoNvNA0NYnozTB-sVriOJKWvUXARDdPcnbTzieTwUExvRWh5c5TUTenRGq3Jw3R3Xdv-MOuqTkTsCDT79lYQ86ITt7yBSQvU2oPFuasEzmhoRs6Vue1G7hCux2wd7V38meCEOGaQzLuSd3bie58ErgrBJyQUEMDqnSlg4h67cwQqNwuBCuIoz2pxKtygr6oZz4bKMXKomyQ"
                    width={192}
                    height={128}
                  />
                </div>
                <div className="flex-grow space-y-2">
                  <div className="font-label-caps text-label-caps text-tertiary">
                    24 Okt 2024 &bull; Nganjuk Creative Hub
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">Pemasaran Digital untuk UMKM</h3>
                  <p className="text-on-surface-variant">
                    Workshop intensif tentang mengembangkan bisnis menggunakan media sosial dan platform e-commerce.
                  </p>
                </div>
                <button className="shrink-0 px-6 py-3 bg-tertiary-container text-on-tertiary-container rounded-xl font-label-caps text-label-caps hover:bg-tertiary transition-colors">
                  Daftar Kegiatan
                </button>
              </div>

              <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 group hover:border-secondary/40 transition-all cursor-pointer">
                <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                  <Image
                    alt="Art Festival"
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEb1s-HDF4XkSygmeGXdqRP2hs3S6KefcNnZpMHSpEV0Ml89Q9POYusdPtFprLHOY1R5tkH-8D8hpi_ljayNJRVi7Bob0rJOzpQx1DxkBV8rwFaNMPviWjIxNFWfre9zP43krTWyIN-vi8dz1m1F2sF7MpX94tdyjW1R5EZBzxpWD29WKyu3RjlP3O8VyUyrzDLpTKDCWAhf3A_UjQE_20wYgOW6mUzh_iDokYhFR1evvt3WRr04KXiVXbWXQjanJVaB97k2k-AFx1"
                    width={192}
                    height={128}
                  />
                </div>
                <div className="flex-grow space-y-2">
                  <div className="font-label-caps text-label-caps text-secondary">
                    12 Nov 2024 &bull; Alun-alun Nganjuk
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">Nganjuk Creative Night</h3>
                  <p className="text-on-surface-variant">
                    Ajang tahunan menampilkan musik lokal, seni pertunjukan, dan pameran kriya.
                  </p>
                </div>
                <button className="shrink-0 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-caps text-label-caps hover:bg-secondary transition-colors">
                  Daftar Kegiatan
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-surface-container-lowest">
            <div className="px-margin-desktop max-w-container-max mx-auto text-center">
              <h2 className="font-h2 text-h2 text-on-surface mb-12">Suara Inovasi</h2>
              <div className="max-w-3xl mx-auto glass-card p-12 rounded-[3rem] relative">
                <span className="material-symbols-outlined text-6xl text-primary/20 absolute top-8 left-8">
                  format_quote
                </span>
                <p 
                  suppressHydrationWarning
                  className="font-body-lg text-body-lg text-on-surface italic relative z-10"
                >
                  &quot;{testimonialText}&quot;
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      alt="Sarah J."
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKBU006iLJZojqh-xwfyLAjPvzOHRjj3sFCD4QwGaIzW-xRNAI3w-6qZWvf5C-9O_NzMA2p8lVJ_2RDU1Ine-nivcEpn2l-xm6Be9Um0mt-HPgYXqMxTxjTqmbVZcq0UrK4cP2SLMheKfoUXZm62Hde0yP3uYYnl4AjJG02GVzDqRK5cy9Z2PlGrsC2Ii5iC7RqB7ERKdL89qTu0w1vzkA4_AhCuVKwEyRWmAQxoMeVltts381GISo-vVgL92RoCV_PLdGM178rAxM"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-h3 text-h3 text-on-surface">Sarah Jatmiko</div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant">
                      Pendiri, Nganjuk Threads
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
                  Siap Mengembangkan Bisnis Kreatif Anda?
                </h2>
                <p className="font-body-lg text-on-primary-container/80">
                  Bergabunglah dengan ribuan wirausahawan di Nganjuk yang mendefinisikan kembali masa depan ekonomi lokal kita. Dapatkan akses ke pendanaan, lokakarya, dan pasar global.
                </p>
                <button className="px-12 py-5 bg-on-surface text-surface rounded-full font-h3 text-h3 hover:scale-105 transition-all shadow-xl">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </section>

          <NewsSection />
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
