"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16 mt-auto text-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/logo-ekraf.png"
              alt="Ekraf Nganjuk Logo"
              width={200}
              height={56}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Inisiatif digital untuk mengakselerasi pertumbuhan ekonomi kreatif di Kabupaten Nganjuk melalui teknologi dan kolaborasi.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Navigasi</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Katalog Produk", href: "/catalog" },
              { label: "Tentang Kami", href: "/about" },
              { label: "Pendaftaran", href: "/register" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Kontak Kami</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Jl. Basuki Rahmad No. 1</li>
            <li>Nganjuk, Jawa Timur</li>
            <li className="mt-2 font-medium text-white">info@ekrafnganjuk.id</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          &copy; {currentYear} Pemerintah Kabupaten Nganjuk. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</Link>
          <Link href="#" className="text-xs text-gray-500 hover:text-gray-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
