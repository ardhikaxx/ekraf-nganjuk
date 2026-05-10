"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  PieChart, Pie, Cell 
} from "recharts";

export default function AdminDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chartData = [
    { name: "Jan", value: 42 },
    { name: "Feb", value: 55 },
    { name: "Mar", value: 48 },
    { name: "Apr", value: 72 },
    { name: "Mei", value: 65 },
    { name: "Jun", value: 90 },
  ];

  const pieData = [
    { name: "Kuliner", value: 400 },
    { name: "Kriya", value: 300 },
    { name: "Digital", value: 200 },
  ];
  const COLORS = ["#b9c7e4", "#a4c9ff", "#b6c4ff"];

  const entrepreneurs = [
    {
      name: "Batik Sedudo Makmur",
      location: "Nganjuk Kota",
      initials: "BM",
      sector: "Kriya & Batik",
      status: "verified",
      statusColor: "green-400",
    },
    {
      name: "Cyber Studio Nganjuk",
      location: "Loceret",
      initials: "CS",
      sector: "Aplikasi & Games",
      status: "pending",
      statusColor: "primary",
    },
    {
      name: "Kuliner Nusantara Jaya",
      location: "Kertosono",
      initials: "KN",
      sector: "Kuliner",
      status: "rejected",
      statusColor: "error",
    },
  ];

  const activities = [
    {
      type: "person_add",
      color: "primary",
      iconColor: "text-on-primary",
      title: "Pendaftaran Baru",
      desc: '"Kerajinan Bambu Jaya" mendaftar di sektor Kriya.',
      time: "2 Menit yang lalu",
    },
    {
      type: "verified",
      color: "tertiary",
      iconColor: "text-on-tertiary",
      title: "Verifikasi Disetujui",
      desc: '"Kopi Anjuk Ladang" telah diverifikasi sebagai pelaku ekraf.',
      time: "1 Jam yang lalu",
    },
    {
      type: "update",
      color: "surface-container-highest",
      iconColor: "text-on-surface-variant",
      title: "Update Profil",
      desc: '"Desain Grafis Nganjuk" memperbarui portofolio produk.',
      time: "5 Jam yang lalu",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md dark">
      {/* SideNavBar */}
      <aside className={`h-screen w-72 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant/10 shadow-2xl flex flex-col p-6 z-50 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="mb-0 flex items-center justify-center relative px-2">
          <div className="w-full max-w-[200px] h-28 relative flex items-center justify-center p-1">
             <Image src="/assets/logo-ekraf.png" alt="Logo" width={200} height={112} className="object-contain w-full h-full" />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden absolute right-0 text-on-surface-variant">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-grow flex flex-col gap-2">
          {/* Active Tab: Dashboard */}
          <Link
            href="#"
            className="bg-primary/10 text-primary rounded-xl flex items-center gap-4 p-4 font-bold transition-all duration-300"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </Link>

          <Link
            href="#"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-4 p-4 transition-all duration-300"
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-sm">Analytics</span>
          </Link>

          <Link
            href="/catalog"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-4 p-4 transition-all duration-300"
          >
            <span className="material-symbols-outlined">category</span>
            <span className="text-sm">Sektor</span>
          </Link>

          <Link
            href="#"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-4 p-4 transition-all duration-300"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm">Pelaku Ekraf</span>
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <Link
            href="#"
            className="text-error hover:bg-error-container/20 rounded-xl flex items-center gap-4 p-4 transition-all duration-300"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-bold">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)] px-4 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center gap-2 flex-1">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-sm ml-8 md:ml-12">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                search
              </span>
              <input
                className="w-full bg-surface-container/50 border border-outline-variant/10 rounded-full py-2 pl-10 pr-4 text-xs focus:bg-surface-container focus:ring-1 focus:ring-primary/30 transition-all outline-none"
                placeholder="Cari..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xl transition-all">
              <span className="material-symbols-outlined text-lg">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
            </button>
            
            <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/10">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-on-surface">Admin</p>
                <p className="text-[8px] text-primary uppercase font-semibold tracking-wider">Admin</p>
              </div>
              <button className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-all shrink-0">
                <Image
                  alt="Admin Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKbe_-CVnnEsWyzjds9BFyUeB_T9A_VLZr1H2tEM3dVFsJwC99qRGBTPU5MW7VDpRJH_nNDs_-6JXHzPIlLW88EzLzIi9xbNnzOwCaW6zXIIdjWLl-qh7jNAeGJTy7X3F8AHaNfdUJHAo0DFTkEKyY0y6lmo1G8DT1wdXx6yHuPhd6DYfDSyA9CWNu9E_quSYAPgPTM_NueUtO9xdFypx6dlotROxWLr7EHn5BM7zcpy5sGHulib3KQPSCM2AUJfhz7pXL1Ky_DY-S"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="px-4 md:px-12 py-8 max-w-7xl mx-auto space-y-6">
          {/* Page Title & CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-3xl font-bold text-on-surface">Dashboard Overview</h1>
              <p className="text-on-surface-variant mt-1">
                Pantau performa ekonomi kreatif Nganjuk secara real-time.
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary to-tertiary text-on-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform w-full md:w-auto justify-center">
              <span className="material-symbols-outlined">add</span>
              Tambah Pelaku Ekraf
            </button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-container rounded-xl text-primary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-green-400 text-xs font-bold">+12%</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Total Entrepreneurs</p>
              <h2 className="text-2xl font-bold">1,284</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-tertiary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-tertiary-container rounded-xl text-tertiary">
                  <span className="material-symbols-outlined">category</span>
                </div>
                <span className="text-on-surface-variant text-xs">17 Sektor</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Total Categories</p>
              <h2 className="text-2xl font-bold">42</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-secondary-container rounded-xl text-secondary">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <span className="text-primary text-xs font-bold">Bulan Ini</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">New Registrations</p>
              <h2 className="text-2xl font-bold">86</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-primary-fixed-dim/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-highest rounded-xl text-on-surface">
                  <span className="material-symbols-outlined">show_chart</span>
                </div>
                <span className="text-green-400 text-xs font-bold">Stable</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-1">Growth Rate</p>
              <h2 className="text-2xl font-bold">8.4%</h2>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card p-6 rounded-3xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">Pertumbuhan Pelaku Ekraf</h3>
                  <p className="text-on-surface-variant text-sm">Data registrasi per bulan tahun 2024</p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} />
                    <Line type="monotone" dataKey="value" stroke="#b9c7e4" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex flex-col">
              <h3 className="text-xl font-bold mb-2">Distribusi Sektor</h3>
              <p className="text-on-surface-variant text-sm mb-6">Sektor paling dominan</p>
              <div className="flex-grow flex items-center justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="glass-card rounded-3xl overflow-hidden">
             <div className="p-6 font-bold border-b border-outline-variant/10">Daftar Pelaku Kreatif</div>
             <div className="overflow-x-auto">
                 <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-container-highest/50 text-xs uppercase text-on-surface-variant text-left">
                          <th className="p-4">Nama</th>
                          <th className="p-4 hidden sm:table-cell">Sektor</th>
                          <th className="p-4">Status</th>
                          <th className="p-4">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                        {entrepreneurs.map((e, i) => (
                            <tr key={i} className="hover:bg-surface-container/50 transition-colors">
                                <td className="p-4 font-bold">{e.name}</td>
                                <td className="p-4 text-on-surface-variant hidden sm:table-cell">{e.sector}</td>
                                <td className={`p-4 font-bold ${e.statusColor}`}>{e.status}</td>
                                <td className="p-4"><button className="text-primary hover:underline">Detail</button></td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
