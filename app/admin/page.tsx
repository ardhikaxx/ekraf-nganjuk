"use client";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      <aside className={`h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant/10 shadow-xl flex flex-col p-4 gap-2 z-50 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="mb-8 px-4 flex justify-between items-center">
          <div>
            <h3 className="font-h3 text-h3 text-tertiary-fixed-dim font-bold tracking-tight">
              Admin Panel
            </h3>
            <p className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
              Creative Hub
            </p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-on-surface-variant">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-grow flex flex-col gap-2">
          {/* Active Tab: Dashboard */}
          <Link
            href="#"
            className="bg-secondary-container text-on-secondary-container rounded-xl flex items-center gap-3 p-3 transition-transform duration-300"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span className="font-label-caps text-label-caps">Dashboard</span>
          </Link>

          <Link
            href="#"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 p-3 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="material-symbols-outlined" data-icon="monitoring">
              monitoring
            </span>
            <span className="font-label-caps text-label-caps">Analytics</span>
          </Link>

          <Link
            href="/catalog"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 p-3 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="material-symbols-outlined" data-icon="category">
              category
            </span>
            <span className="font-label-caps text-label-caps">Sectors</span>
          </Link>

          <Link
            href="#"
            className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 p-3 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span className="font-label-caps text-label-caps">Entrepreneurs</span>
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/10">
          <Link
            href="#"
            className="text-error hover:bg-error-container/20 rounded-xl flex items-center gap-3 p-3 transition-transform duration-300"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span className="font-label-caps text-label-caps">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-surface/60 backdrop-blur-lg border-b border-outline-variant/20 px-4 md:px-margin-desktop py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-on-surface-variant">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-xs md:max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm md:text-base">
                search
              </span>
              <input
                className="w-full bg-surface-container-high border-none rounded-full pl-10 pr-4 py-2 text-sm md:text-body-md focus:ring-2 focus:ring-primary transition-all"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
              <div className="text-right hidden sm:block">
                <p className="font-label-caps text-label-caps text-on-surface">Admin Utama</p>
              </div>
              <img
                alt="Admin Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-primary/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKbe_-CVnnEsWyzjds9BFyUeB_T9A_VLZr1H2tEM3dVFsJwC99qRGBTPU5MW7VDpRJH_nNDs_-6JXHzPIlLW88EzLzIi9xbNnzOwCaW6zXIIdjWLl-qh7jNAeGJTy7X3F8AHaNfdUJHAo0DFTkEKyY0y6lmo1G8DT1wdXx6yHuPhd6DYfDSyA9CWNu9E_quSYAPgPTM_NueUtO9xdFypx6dlotROxWLr7EHn5BM7zcpy5sGHulib3KQPSCM2AUJfhz7pXL1Ky_DY-S"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="px-4 md:px-margin-desktop py-8 max-w-container-max mx-auto space-y-gutter">
          {/* Page Title & CTA */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-h2 text-h2 text-on-surface">Dashboard Overview</h1>
              <p className="text-on-surface-variant mt-1">
                Pantau performa ekonomi kreatif Nganjuk secara real-time.
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary to-tertiary text-on-primary px-6 py-3 rounded-full font-label-caps text-label-caps flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined" data-icon="add">
                add
              </span>
              Tambah Pelaku Ekraf
            </button>
          </div>

          {/* Stat Cards: Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-container rounded-xl text-primary">
                  <span className="material-symbols-outlined" data-icon="groups">
                    groups
                  </span>
                </div>
                <span className="text-green-400 text-[12px] font-bold flex items-center">
                  +12% <span className="material-symbols-outlined text-[14px]">trending_up</span>
                </span>
              </div>
              <p className="text-on-surface-variant font-label-caps text-label-caps mb-1">
                Total Entrepreneurs
              </p>
              <h2 className="font-h1 text-h2">1,284</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-tertiary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-tertiary-container rounded-xl text-tertiary">
                  <span className="material-symbols-outlined" data-icon="category">
                    category
                  </span>
                </div>
                <span className="text-on-surface-variant text-[12px]">17 Sektor</span>
              </div>
              <p className="text-on-surface-variant font-label-caps text-label-caps mb-1">
                Total Categories
              </p>
              <h2 className="font-h1 text-h2">42</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-secondary-container rounded-xl text-secondary">
                  <span className="material-symbols-outlined" data-icon="person_add">
                    person_add
                  </span>
                </div>
                <span className="text-primary text-[12px] font-bold">Bulan Ini</span>
              </div>
              <p className="text-on-surface-variant font-label-caps text-label-caps mb-1">
                New Registrations
              </p>
              <h2 className="font-h1 text-h2">86</h2>
            </div>

            <div className="glass-card p-6 rounded-2xl group hover:border-primary-fixed-dim/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-surface-container-highest rounded-xl text-on-surface">
                  <span className="material-symbols-outlined" data-icon="show_chart">
                    show_chart
                  </span>
                </div>
                <span className="text-green-400 text-[12px] font-bold">Stable</span>
              </div>
              <p className="text-on-surface-variant font-label-caps text-label-caps mb-1">Growth Rate</p>
              <h2 className="font-h1 text-h2">8.4%</h2>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Main Line Chart (Placeholder Visual) */}
            <div className="lg:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-h3 text-h3">Pertumbuhan Pelaku Ekraf</h3>
                  <p className="text-on-surface-variant text-body-md">Data registrasi per bulan tahun 2024</p>
                </div>
                <select className="bg-surface-container-high border-none rounded-lg text-label-caps px-4 py-2 focus:ring-1 focus:ring-primary">
                  <option>Yearly</option>
                  <option>Monthly</option>
                </select>
              </div>

              {/* Chart Graphic Mockup */}
              <div className="h-64 flex items-end justify-between gap-4 pt-4">
                <div className="w-full bg-primary/10 rounded-t-lg relative group h-[40%] hover:bg-primary/30 transition-all">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-bright p-1 rounded text-[10px]">
                    Jan: 42
                  </div>
                </div>
                <div className="w-full bg-primary/10 rounded-t-lg relative group h-[55%] hover:bg-primary/30 transition-all"></div>
                <div className="w-full bg-primary/10 rounded-t-lg relative group h-[45%] hover:bg-primary/30 transition-all"></div>
                <div className="w-full bg-primary/20 rounded-t-lg relative group h-[70%] hover:bg-primary/40 transition-all"></div>
                <div className="w-full bg-primary/20 rounded-t-lg relative group h-[60%] hover:bg-primary/40 transition-all"></div>
                <div className="w-full bg-primary/30 rounded-t-lg relative group h-[85%] hover:bg-primary/50 transition-all"></div>
                <div className="w-full bg-primary/40 rounded-t-lg relative group h-[95%] hover:bg-primary/60 transition-all border-t-2 border-primary"></div>
              </div>
              <div className="flex justify-between mt-4 text-on-surface-variant font-label-caps text-[10px]">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
                <span>MEI</span>
                <span>JUN</span>
                <span>JUL</span>
              </div>
            </div>

            {/* Pie Chart / Sector Distribution */}
            <div className="glass-card p-8 rounded-3xl flex flex-col">
              <h3 className="font-h3 text-h3 mb-2">Distribusi Sektor</h3>
              <p className="text-on-surface-variant text-body-md mb-8">Sektor paling dominan</p>
              <div className="flex-grow flex items-center justify-center relative">
                {/* Circle Mockup */}
                <div className="w-40 h-40 rounded-full border-[16px] border-primary/20 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent -rotate-45"></div>
                  <div className="text-center">
                    <span className="block font-h2 text-h2">17</span>
                    <span className="font-label-caps text-[10px] text-on-surface-variant">Sectors</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-body-md">Kuliner</span>
                  </div>
                  <span className="font-bold">38%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="text-body-md">Kriya & Batik</span>
                  </div>
                  <span className="font-bold">24%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="text-body-md">Digital Arts</span>
                  </div>
                  <span className="font-bold">18%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Table Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
            {/* Data Table */}
            <div className="xl:col-span-2 glass-card rounded-3xl overflow-hidden">
              <div className="p-8 flex justify-between items-center border-b border-outline-variant/20">
                <h3 className="font-h3 text-h3">Daftar Pelaku Ekraf</h3>
                <div className="flex gap-4">
                  <button className="p-2 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined" data-icon="filter_list">
                      filter_list
                    </span>
                  </button>
                  <button className="p-2 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined" data-icon="download">
                      download
                    </span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container/50">
                      <th className="px-8 py-4 font-label-caps text-label-caps text-on-surface-variant">
                        Entrepreneur
                      </th>
                      <th className="px-8 py-4 font-label-caps text-label-caps text-on-surface-variant">
                        Sektor
                      </th>
                      <th className="px-8 py-4 font-label-caps text-label-caps text-on-surface-variant">
                        Status
                      </th>
                      <th className="px-8 py-4 font-label-caps text-label-caps text-on-surface-variant">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {entrepreneurs.map((entrepreneur) => (
                      <tr
                        key={entrepreneur.name}
                        className="hover:bg-surface-container-high/30 transition-colors"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg bg-${entrepreneur.status === "verified" ? "primary" : entrepreneur.status === "pending" ? "secondary" : "on-surface-variant"}/20 flex items-center justify-center font-bold text-${entrepreneur.status === "verified" ? "primary" : entrepreneur.status === "pending" ? "secondary" : "on-surface-variant"}`}
                            >
                              {entrepreneur.initials}
                            </div>
                            <div>
                              <p className="font-bold">{entrepreneur.name}</p>
                              <p className="text-[12px] text-on-surface-variant">
                                {entrepreneur.location}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span
                            className={`px-3 py-1 bg-${entrepreneur.status === "verified" ? "tertiary" : entrepreneur.status === "pending" ? "secondary" : "surface-container-highest"}/30 text-${entrepreneur.status === "verified" ? "tertiary" : entrepreneur.status === "pending" ? "secondary" : "on-surface-variant"} rounded-full text-[12px]`}
                          >
                            {entrepreneur.sector}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <div
                            className={`flex items-center gap-2 ${
                              entrepreneur.status === "verified"
                                ? "text-green-400"
                                : entrepreneur.status === "pending"
                                  ? "text-primary"
                                  : "text-error"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                entrepreneur.status === "verified"
                                  ? "bg-green-400"
                                  : entrepreneur.status === "pending"
                                    ? "bg-primary"
                                    : "bg-error"
                              }`}
                            ></span>
                            <span className="text-[12px] font-semibold capitalize">
                              {entrepreneur.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-primary">
                              <span className="material-symbols-outlined text-[20px]" data-icon="visibility">
                                visibility
                              </span>
                            </button>
                            <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors text-on-surface-variant hover:text-tertiary">
                              <span className="material-symbols-outlined text-[20px]" data-icon="edit">
                                edit
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity List */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-h3 text-h3 mb-6">Recent Activity</h3>
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant/20">
                {activities.map((activity, idx) => (
                  <div key={idx} className="relative flex gap-6 items-start group">
                    <div
                      className={`w-10 h-10 rounded-full bg-${activity.color} flex items-center justify-center z-10 border-4 border-surface shadow-lg`}
                    >
                      <span
                        className={`material-symbols-outlined ${activity.iconColor} text-[18px]`}
                        data-icon={activity.type}
                      >
                        {activity.type}
                      </span>
                    </div>
                    <div>
                      <p className="text-body-md font-bold">{activity.title}</p>
                      <p className="text-[12px] text-on-surface-variant">{activity.desc}</p>
                      <p className="text-[10px] text-primary mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 border border-outline-variant/30 rounded-xl text-label-caps font-label-caps hover:bg-surface-container-high transition-colors">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
