"use client";
import { Search, Upload, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-3 bg-white shadow-md backdrop-blur-sm">
      {/* -------- LEFT SIDE  -------- */}
      <div className="flex items-center gap-2">
        {/* Logo Text */}
        <h1 className="text-3xl font-extrabold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-none">
          3dimli
        </h1>

      
        <div className="flex flex-col leading-tight border-l pl-2">
          <span className="text-[10px] text-gray-500 font-semibold">BETA</span>
          <span className="text-[9px] text-gray-400 font-medium">1.0.1</span>
        </div>
      </div>

      {/* -------- CENTER NAV LINKS -------- */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Discover</a>
        <a href="#" className="hover:text-black transition">Features</a>
        <a href="#" className="hover:text-black transition">Pricing</a>
      </div>

      {/* -------- RIGHT SIDE BUTTONS -------- */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden sm:flex items-center border rounded-full px-3 py-1">
          <Search className="w-4 h-4 text-gray-400" />
        </div>

      
        <button className="hidden lg:flex bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-2xl items-center gap-2 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h12l-.6-2.1 1.4 1.3 1.3 1.3 2.3 2.3V4c0-2.2-1.8-4-4-4zM8.7 14.8c-.9 0-1.7-.8-1.7-1.7S7.8 11.3 8.7 11.3s1.7.8 1.7 1.7-.8 1.8-1.7 1.8zm6.6 0c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7z" />
          </svg>
          Discord
        </button>

        {/* Upload */}
        <button className="hidden sm:flex bg-linear-to-r from-blue-900 to-gray-900 hover:opacity-90 text-white font-semibold px-4 py-2 rounded-2xl items-center gap-2 transition">
          <Upload className="w-5 h-5" />
          Upload
        </button>

        {/* Profile */}
        <button className="border rounded-full p-2 hover:bg-gray-100 transition">
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
