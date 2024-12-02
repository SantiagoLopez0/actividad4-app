import Link from 'next/link';
import Head from 'next/head'
import Header from "../ui/header";
import Image from 'next/image';
import { Poppins } from "next/font/google";

import "../globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400","800"], });

export default function Contact() {
  return (
    <div className={`${poppins.className} font-sans bg-gray-200`}>
      <Head>
        <title>Interfaz</title>
        <meta name="description" content="Página de ejemplo creada con Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <section className="bg-gray-700 text-white text-center py-[96px] h-[700px] flex flex-col justify-center items-center hero">
        <h1 className="text-4xl mb-4">Contáctanos</h1>
        <p className="mb-6">
        Estamos aquí para ayudarte a destacar tus propiedades. ¡Conéctate con nosotros!
        </p>
      </section>

      <section className="py-16 px-8 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4">Envíanos un Mensaje</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Mensaje"
              className="border p-2 rounded"
            ></textarea>
            <button className="bg-gray-700 text-white hover:bg-gray-900 button">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white text-gray-700 py-8">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="font-bold">LOGO</div>
          <nav className="space-x-4">
            <a href="" className="text-gray-700 hover:text-gray-900">INICIO</a>
            <a href="/acerca-de" className="text-gray-700 hover:text-gray-900">ACERCA DE</a>
            <a href="/servicios" className="text-gray-700 hover:text-gray-900">SERVICIOS</a>
            <a href="/contacto" className="text-gray-700 hover:text-gray-900">CONTACTO</a>
          </nav>
          <p className="text-gray-500">Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}