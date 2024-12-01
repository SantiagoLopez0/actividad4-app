import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-sans bg-gray-200">
      <Head>
        <title>Interfaz</title>
        <meta name="description" content="Página de ejemplo creada con Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">LOGO</div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 1</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 2</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 3</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 4</a>
            <a href="#" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">CTA</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">TÍTULO DE LA PÁGINA</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="px-6 py-2 bg-white text-gray-700 rounded hover:bg-gray-200">Button</button>
      </section>

      {/* Placeholder Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">PLACEHOLDER</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
          </ul>
          <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">Button</button>
        </div>
        <div className="bg-gray-700 h-64"></div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-700 text-white text-center py-20">
        <h2 className="text-2xl font-bold mb-4">TÍTULO CTA</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="px-6 py-2 bg-white text-gray-700 rounded hover:bg-gray-200">Button</button>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">TÍTULO DE SECCIÓN</h2>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 h-40 text-white flex items-center justify-center rounded">
            Título<br /><a href="#" className="text-blue-400">LINK</a>
          </div>
          <div className="bg-gray-700 h-40 text-white flex items-center justify-center rounded">
            Título<br /><a href="#" className="text-blue-400">LINK</a>
          </div>
          <div className="bg-gray-700 h-40 text-white flex items-center justify-center rounded">
            Título<br /><a href="#" className="text-blue-400">LINK</a>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-700 h-64"></div>
        <div>
          <h2 className="text-2xl font-bold mb-4">PLACEHOLDER</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
          </ul>
          <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-900">Button</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-8">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="font-bold">LOGO</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">LINK</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LINK</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LINK</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LINK</a>
          </nav>
          <p className="text-gray-500">Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}