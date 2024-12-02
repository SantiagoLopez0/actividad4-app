import Link from 'next/link';
import Head from 'next/head'
import Header from "./ui/header";
import Image from 'next/image';
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400","800"], });

export default function Home() {
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
        <h1 className="text-4xl mb-4">Capturamos la esencia de cada propiedad</h1>
        <p className="mb-6">
        Transformamos espacios en imágenes irresistibles para ayudarte a vender más rápido.
        </p>
        <Link href='/contacto' className=" bg-white text-gray-700 rounded hover:bg-gray-200 button">¡CONTACTANOS!</Link>
      </section>

      
      <section className="container mx-auto px-6 py-[96px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        <div>
          <h2 className="text-2xl mb-4">Pasión por la excelencia visual</h2>
          <p className="mb-4">
          Somos expertos en fotografía inmobiliaria. Trabajamos junto a agentes de bienes raíces para destacar las mejores características de cada propiedad y atraer a los compradores ideales.
          </p>
          <Link href='/acerca-de' className="bg-gray-700 text-white hover:bg-gray-900 button">VER MÁS</Link>
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

      
      <section className="bg-gray-700 text-white text-center py-[96px]">
        <h2 className="mb-4"> ¿Listo para destacar tus propiedades?</h2>
        <p className="mb-6">
        Agenda una sesión de fotos profesional y sorprende a tus clientes con imágenes de alto impacto.
        </p>
        <Link href='/contacto' className="mx-auto px-6 py-2 bg-white text-gray-700 rounded hover:bg-gray-200 button">CONTACTANOS</Link>
      </section>

      
      <section className="container mx-auto px-6 py-[96px] text-center text-black">
        <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="mb-8">
          Explora lo que tenemos que ofrecerte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='flex flex-col justify-left align-start'>
            <div className="bg-gray-700 h-[200px] flex items-center justify-center rounded">
              <Image
                src='/bg.jpg'
                width={1000}
                height={360}
                alt='placeholder 2'
                className="rounded-[6px] max-h-[200px] object-cover	"
              />
            </div>
            <p className='text-left'>Tomas aéreas con drones</p>
          </div>
          <div className='flex flex-col justify-left align-start'>
          <div className="bg-gray-700 h-[200px] flex items-center justify-center rounded">
              <Image
                src='/bg.jpg'
                width={1000}
                height={360}
                alt='placeholder 2'
                className="rounded-[6px] max-h-[200px] object-cover	"
              />
            </div>
            <p className='text-left'>Fotografía profesional de interiores</p>
          </div>
          <div className='flex flex-col justify-left align-start'>
          <div className="bg-gray-700 h-[200px] flex items-center justify-center rounded">
              <Image
                src='/bg.jpg'
                width={1000}
                height={360}
                alt='placeholder 2'
                className="rounded-[6px] max-h-[200px] object-cover	"
              />
            </div>
            <p className='text-left'>Edición avanzada de imágenes</p>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-6 pb-[96px] pt-[0] grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-black">
        <div className="bg-gray-700 h-[360px] rounded-[6px]">
          <Image
            src='/3.jpg'
            width={1000}
            height={360}
            alt='placeholder 2'
            className="rounded-[6px] max-h-[360px] object-cover	"
          />
        </div>
        <div>
          <h2 className="text-2xl mb-4">Descubre cómo podemos ayudarte aún más</h2>
          <p className="mb-4">
          Conoce todos nuestros servicios y lleva tu estrategia de ventas al siguiente nivel
          </p>
          <Link href='/servicios' className="bg-gray-700 text-white hover:bg-gray-900 button">VER TODOS</Link>
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