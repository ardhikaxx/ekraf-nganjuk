"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Business" },
    { id: 3, label: "Assets" },
    { id: 4, label: "Review" },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="font-h3 text-h3 text-on-surface">Data Pribadi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="Nama Lengkap" />
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="NIK (Nomor Induk Kependudukan)" />
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="Email Aktif" type="email" />
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="Nomor WhatsApp" type="tel" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="font-h3 text-h3 text-on-surface">Detail Usaha</h3>
            <div className="grid grid-cols-1 gap-6">
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="Nama Usaha / Brand" />
              <select className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl text-on-surface-variant">
                <option>Pilih Subsektor Ekonomi Kreatif</option>
                <option>Kuliner</option>
                <option>Fashion</option>
                <option>Kriya & Kerajinan</option>
                <option>Digital & Aplikasi</option>
              </select>
              <textarea className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl min-h-[120px]" placeholder="Deskripsi Singkat Usaha"></textarea>
              <input className="w-full px-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl" placeholder="Alamat Lengkap Usaha" />
            </div>
          </div>
        );
      case 3:
        return (
            <div className="space-y-6">
                <h3 className="font-h3 text-h3 text-on-surface">Upload Aset Kreatif</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-primary">image</span>
                    <p className="mt-2 text-sm text-on-surface-variant">Upload Logo / Foto Produk</p>
                  </div>
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-primary">description</span>
                    <p className="mt-2 text-sm text-on-surface-variant">Upload Izin Usaha (NIB/SKU)</p>
                  </div>
                </div>
            </div>
        );
      case 4:
        return (
            <div className="space-y-6">
                <h3 className="font-h3 text-h3 text-on-surface">Review Data</h3>
                <div className="p-6 bg-surface-container-low rounded-xl space-y-4">
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-on-surface-variant">Nama:</span>
                    <span className="font-bold">Budi Santoso</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span className="text-on-surface-variant">Usaha:</span>
                    <span className="font-bold">Batik Nganjuk Indah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Sektor:</span>
                    <span className="font-bold">Kriya & Batik</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant/30" />
                  <span className="text-sm text-on-surface-variant">Saya menyatakan data di atas adalah benar.</span>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface selection:bg-primary selection:text-primary-container bg-gradient-mesh dark">
      <main className="pt-8 md:pt-32 pb-16 md:pb-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="font-label-caps text-label-caps">Kembali ke Beranda</span>
          </Link>

          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                return (
                  <div key={step.id} className="flex flex-col items-center gap-3 relative flex-1">
                    {index !== 3 && (
                      <div className={`absolute top-4 left-[60%] w-full h-[2px] ${isCompleted ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>
                    )}
                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base border-2 transition-colors duration-300
                      ${isActive ? "bg-primary text-primary-container border-primary" : 
                        isCompleted ? "bg-primary text-primary-container border-primary" : 
                        "bg-surface text-on-surface-variant border-outline-variant/30"}`}
                    >
                      {isCompleted ? <span className="material-symbols-outlined text-lg">check</span> : step.id}
                    </div>
                    <span className={`font-label-caps text-[10px] md:text-label-caps transition-colors ${isActive ? "text-primary" : "text-on-surface-variant/60"}`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {renderStepContent()}
              <div className="pt-8 flex justify-between items-center border-t border-outline-variant/20">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface disabled:opacity-30 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => currentStep === 4 ? alert("Submitted!") : setCurrentStep(Math.min(4, currentStep + 1))}
                  className="bg-gradient-to-r from-primary to-secondary text-on-primary px-10 py-4 rounded-full font-label-caps text-label-caps font-extrabold shadow-[0_10px_30px_rgba(38,65,145,0.4)] hover:scale-105 transition-transform duration-300 active:scale-95 flex items-center gap-2"
                >
                  {currentStep === 4 ? "Submit" : "Next Step"}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
