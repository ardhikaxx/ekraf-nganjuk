import Link from "next/link";

export default function NewsSection() {
  const news = [
    {
      title: "Pendaftaran Gelombang ke-2 UMKM Kreatif Resmi Dibuka",
      date: "7 Mei 2026",
      excerpt: "Pemerintah Kabupaten Nganjuk mengundang seluruh pelaku UMKM untuk bergabung dalam ekosistem kreatif...",
      category: "Pengumuman",
      img: "/assets/image.png"
      },
      {
      title: "Nganjuk Creative Night Sukses Menarik Ribuan Pengunjung",
      date: "5 Mei 2026",
      excerpt: "Festival kreatif tahunan Nganjuk mencatatkan rekor kunjungan tertinggi tahun ini...",
      category: "Berita",
      img: "/assets/image.png"
      }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-h2 text-h2 text-on-surface">News & Announcements</h2>
          <p className="font-body-md text-on-surface-variant">Stay updated with the latest from Nganjuk Creative Hub.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <div key={index} className="glass-card rounded-3xl overflow-hidden group hover:border-primary/40 transition-all flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <span className="text-primary font-label-caps text-label-caps">{item.category} • {item.date}</span>
              <h3 className="font-h3 text-h3 text-on-surface group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-2">{item.excerpt}</p>
              <Link href="#" className="mt-auto text-primary font-label-caps text-label-caps flex items-center gap-2">
                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
