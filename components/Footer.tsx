"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-20 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        <div className="md:col-span-1 space-y-6 text-left">
          <Link href="/">
            <img 
              src="/assets/logo-ekraf.png" 
              alt="Ekraf Nganjuk Logo" 
              className="h-16 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Inisiatif digital untuk mengakselerasi pertumbuhan ekonomi kreatif di Kabupaten Nganjuk
            melalui teknologi, kolaborasi, dan pemberdayaan talenta lokal.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-xl">language</span>
            </Link>
          </div>
        </div>

        <div className="text-left">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Navigasi</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Katalog Produk
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/register" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Pendaftaran
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Kontak Kami</h4>
          <ul className="space-y-4">
            <li className="font-body-md text-body-md text-on-surface-variant">
              Jl. Basuki Rahmad No. 1,<br />
              Nganjuk, Jawa Timur
            </li>
            <li className="font-body-md text-body-md text-on-surface-variant">
              Email: info@ekrafnganjuk.id
            </li>
            <li className="font-body-md text-body-md text-on-surface-variant">
              Telp: (0358) 321xxx
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Legal</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-tertiary transition-colors">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop mt-20 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-label-caps text-label-caps text-on-surface-variant">
          &copy; 2024 Pemerintah Kabupaten Nganjuk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
