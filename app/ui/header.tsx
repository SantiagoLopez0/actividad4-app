'use client';

import Link from 'next/link';
import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400","800"], });

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`${poppins.className} font-bold text-black`}>LOGO</div>
        <nav className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-gray-700 hover:text-gray-900">INICIO</span>
          </Link>
          <Link href="/page2">
            <span className="text-gray-700 hover:text-gray-900">ACERCA DE</span>
          </Link>
          <Link href="/page2">
            <span className="text-gray-700 hover:text-gray-900">SERVICIOS</span>
          </Link>
          <Link href="/cta">
            <span className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">CONTACTANOS</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
