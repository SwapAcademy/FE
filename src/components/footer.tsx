import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid untuk 4 kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white pb-6">
          {/* Kolom 1: Gambar Swap Academy */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="/swapAcademy.svg" alt="Swap Academy Logo" className="w-32 mb-4" />
          </div>
          {/* Kolom 2: Alamat */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-2">Alamat</h2>
            <p className="text-sm text-center sm:text-left">Jl. RA Kartini Kav 8, Cilandak Barat, Jakarta Selatan, 12340</p>
          </div>
          {/* Kolom 3: Kontak */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-2">Kontak</h2>
            <p className="text-sm">support@swapacademy.com</p>
            <p className="text-sm">+62 123 456 7890</p>
          </div>
          {/* Kolom 4: Contact Us */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <nav className="flex flex-col gap-2">
              <Link href="#">
                <div className="text-sm hover:underline">Terms of Service</div>
              </Link>
              <Link href="#">
                <div className="text-sm hover:underline">Privacy Policy</div>
              </Link>
            </nav>
          </div>
        </div>

        {/* Baris watermark */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs text-gray-200 ">
          <p className="mx-auto">© 2024 Swap Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
