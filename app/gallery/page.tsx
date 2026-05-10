"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    { title: "Nganjuk Creative Night", category: "Event", img: "/assets/image.png" },
    { title: "Workshop Batik", category: "Workshop", img: "/assets/image.png" },
    { title: "Kuliner Expo 2026", category: "Event", img: "/assets/image.png" },
    { title: "Fashion Show Lokal", category: "Fashion", img: "/assets/image.png" },
    { title: "Pameran Kriya", category: "Art", img: "/assets/image.png" },
    { title: "Digital Hub Meetup", category: "Community", img: "/assets/image.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md dark">
      <Navbar />

      <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <PageTransition>
          <header className="mb-16">
            <h1 className="font-h1 text-[2.5rem] md:text-h1 text-on-surface mb-4">Galeri</h1>
            <p className="text-on-surface-variant font-body-lg">
              Dokumentasi kegiatan dan karya kreatif dari komunitas Nganjuk.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary font-label-caps text-label-caps">{item.category}</span>
                  <h3 className="font-h3 text-h3 text-on-surface mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
