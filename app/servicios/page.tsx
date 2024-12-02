import Link from 'next/link';
import Head from 'next/head'
import Header from "../ui/header";
import Image from 'next/image';
import { Poppins } from "next/font/google";

import "../globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400","800"], });

export default function Services() {
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
        <h1 className="text-4xl mb-4">Nuestros Servicios</h1>
        <p className="mb-6">
            Conoce todo lo que ofrecemos para que tus propiedades destaquen.
        </p>
      </section>

      <section className="container mx-auto px-6 py-[96px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        <div>
          <h2 className="text-center">Nuestra Historia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border rounded text-center">
              <h4 className="">Fotografía de interiores</h4>
              <p className="text-gray-600 mt-2">
                Capturamos los detalles y el espacio de cada habitación.
              </p>
            </div>
            <div className="p-4 border rounded text-center">
              <h4 className="">Tomas aéreas con drones</h4>
              <p className="text-gray-600 mt-2">
                Proporcionamos perspectivas únicas de cada propiedad.
              </p>
            </div>
            <div className="p-4 border rounded text-center">
              <h4 className="">Edición profesional</h4>
              <p className="text-gray-600 mt-2">
                Mejoramos la calidad de cada imagen para que luzca perfecta.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 h-[360px] rounded-[6px]">
                <Image
                    src='/1.jpg'
                    width={1000}
                    height={360}
                    alt='placeholder 1'
                    className="rounded-[6px] max-h-[360px] object-cover	"
                />
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