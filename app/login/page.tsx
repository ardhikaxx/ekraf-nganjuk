"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"entrepreneur" | "admin">("entrepreneur");

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface overflow-x-hidden dark">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-lg border-b border-outline-variant/20 shadow-md">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-h3 text-h3 font-bold text-primary tracking-tight">Ekraf Nganjuk</div>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps">
              Home
            </Link>
            <Link href="/catalog" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps">
              Catalog
            </Link>
            <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps">
              About
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps">
              Gallery
            </Link>
          </div>
          <Link href="/register" className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
            Register
          </Link>
        </div>
      </nav>

      <main className="min-h-screen flex flex-col md:flex-row pt-[72px]">
        {/* Left Side: Narrative Illustration */}
        <section className="relative w-full md:w-1/2 min-h-[409px] md:min-h-0 overflow-hidden flex items-center justify-center p-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Creative Hub"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_pVXFicaoRg4WkYwHU7L-VzlflmfvUl-6R4bVdTQ3a695x6Iy_yjmchAZ2oeVzMaLL-1C2-_1-iI1P46zK0kzzbR8b6P9hzNcrEMT5men9kyCI-g4W-cky-Kd0NL9Hc6ZCIvtLcAcLLdLS8a6zcJZ8Tb1Uzi_uJrV9cqKvZ8ui3-PKxFxCPyjcb9PrMrL9Oymnld66ypOOrI-lxMHiQjIYLa8578elYAtRL8ef62tQJQ_KlC4KHK-vKGSqvms-9aKuq9kV99opmg8"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-lg">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4 block">
              PORTAL EKONOMI KREATIF
            </span>
            <h1 className="font-h1 text-h1 text-on-surface mb-6">
              Pioneering the Creative Era in Nganjuk.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Access the central hub for local entrepreneurs and administrative brilliance.
              Together, we build a smarter, more vibrant creative ecosystem.
            </p>
          </div>
        </section>

        {/* Right Side: Login Form */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
          <div className="w-full max-w-md">
            <div className="glass-card p-10 rounded-xl shadow-xl border border-outline-variant/10">
              <div className="mb-10">
                <h2 className="font-h2 text-h2 text-on-surface mb-2">Welcome Back</h2>
                <p className="font-body-md text-on-surface-variant">
                  Please enter your credentials to continue.
                </p>
              </div>

              {/* Role Selector */}
              <div className="flex gap-4 mb-8">
                <button
                  className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center gap-2 hover:translate-x-1 transition-transform duration-300 ${
                    role === "entrepreneur"
                      ? "bg-secondary-container text-on-secondary-container border-primary/20"
                      : "bg-surface-container-high text-on-surface-variant border-outline-variant/30"
                  }`}
                  onClick={() => setRole("entrepreneur")}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    group
                  </span>
                  <span className="font-label-caps text-label-caps">Entrepreneur</span>
                </button>
                <button
                  className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center gap-2 hover:translate-x-1 transition-transform duration-300 ${
                    role === "admin"
                      ? "bg-secondary-container text-on-secondary-container border-primary/20"
                      : "bg-surface-container-high text-on-surface-variant border-outline-variant/30"
                  }`}
                  onClick={() => setRole("admin")}
                >
                  <span className="material-symbols-outlined">admin_panel_settings</span>
                  <span className="font-label-caps text-label-caps">Admin</span>
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-primary px-1">
                    Email or Username
                  </label>
                  <div className="relative group">
                    <input
                      className="w-full bg-surface-container text-on-surface border border-outline-variant/30 rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none placeholder:text-outline"
                      placeholder="name@company.com"
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                      person
                    </span>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="font-label-caps text-label-caps text-primary">Password</label>
                    <a href="#" className="font-label-caps text-label-caps text-tertiary hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative group">
                    <input
                      className="w-full bg-surface-container text-on-surface border border-outline-variant/30 rounded-lg py-4 pl-12 pr-12 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none placeholder:text-outline"
                      placeholder="••••••••"
                      type="password"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                      lock
                    </span>
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3 px-1">
                  <input
                    className="w-5 h-5 rounded border-outline-variant/30 bg-surface-container text-primary focus:ring-primary focus:ring-offset-background"
                    id="remember"
                    type="checkbox"
                  />
                  <label
                    className="font-body-md text-on-surface-variant cursor-pointer select-none"
                    htmlFor="remember"
                  >
                    Remember this device
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-h3 text-h3 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-4"
                >
                  Sign In
                </button>
              </form>

              {/* Footer Links */}
              <div className="mt-8 text-center">
                <p className="font-body-md text-on-surface-variant">
                  New to the ecosystem?{" "}
                  <Link href="/register" className="text-tertiary font-bold hover:underline">
                    Request Access
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
