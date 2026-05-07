"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface selection:bg-primary selection:text-primary-container bg-gradient-mesh dark">
      <Navbar />

      <main className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          {/* Step Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              {/* Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -z-10 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-primary -z-10 -translate-y-1/2"></div>
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-container flex items-center justify-center font-bold shadow-[0_0_20px_rgba(185,199,228,0.4)]">
                  1
                </div>
                <span className="font-label-caps text-label-caps text-primary">Personal</span>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold">
                  2
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Business</span>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold">
                  3
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Assets</span>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold">
                  4
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Review</span>
              </div>
            </div>
          </div>

          {/* Registration Form Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>

            <header className="mb-10 text-center">
              <h1 className="font-h2 text-h2 text-on-surface mb-2">Join the Creative Hub</h1>
              <p className="text-on-surface-variant font-body-md">
                Empower your creative business in the heart of Nganjuk.
              </p>
            </header>

            <form className="space-y-8">
              {/* Step 1 Content: Personal Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="block font-label-caps text-label-caps text-primary mb-2 ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                        person
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40"
                        placeholder="e.g. Ahmad Fauzi"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <label className="block font-label-caps text-label-caps text-primary mb-2 ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                        mail
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40"
                        placeholder="ahmad@creative.com"
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <label className="block font-label-caps text-label-caps text-primary mb-2 ml-1">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                        call
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-on-surface placeholder:text-on-surface-variant/40"
                        placeholder="+62 812-XXXX-XXXX"
                        type="tel"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="pt-8 flex justify-between items-center border-t border-outline-variant/20">
                <button
                  type="button"
                  className="text-on-surface-variant font-label-caps text-label-caps hover:text-on-surface transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-gradient-to-r from-primary to-secondary text-on-primary px-10 py-4 rounded-full font-label-caps text-label-caps font-extrabold shadow-[0_10px_30px_rgba(38,65,145,0.4)] hover:scale-105 transition-transform duration-300 active:scale-95 flex items-center gap-2"
                >
                  Next Step
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Bento Preview Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative group">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                alt="Creative Studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNidFitoGv0xKD2sHbLeAYwq4sFkxot5YtsEZhMiniF4kq3eVTuFgih9ATH_dQqj2U-IZm-I3rGRKMJDovoc-NJNhBl7gVJDXtTeDxcKR9U7jql4qyNTUxQ9YHSsIoF0vNVsXLOnM5axOL9bjBYDb-0-gB6t3Nn9Q0cx-ifY1mYYQ-tQ1OYjawz41pQ_5wua7VIAlo_umxFHKeXFipRYtrJELKpz7KFQmdgvq6ZM0a7DvxI9iQUtW0TlZPGWt1v_ukmOtkLvvsCdPZ"
              />
              <div className="relative z-10">
                <h3 className="font-h3 text-h3 text-primary mb-4">Why Join Ekraf?</h3>
                <p className="text-on-surface-variant font-body-md mb-6 max-w-md">
                  Gain access to exclusive government funding, mentorship programs, and a network of
                  500+ creative entrepreneurs in East Java.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-label-caps">
                    Network
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-caps text-label-caps">
                    Grants
                  </span>
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary font-label-caps text-label-caps">
                    Exhibition
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-primary/20 bg-primary-container/40 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl" data-weight="fill">
                  verified
                </span>
              </div>
              <h4 className="font-h3 text-h3 text-on-surface mb-2">Government Verified</h4>
              <p className="text-on-surface-variant font-body-md">
                Official platform supported by Dinas Pariwisata & Kebudayaan Nganjuk.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
