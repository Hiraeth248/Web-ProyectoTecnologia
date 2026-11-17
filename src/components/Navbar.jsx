
export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          className="text-2xl font-black text-green-700"
        >
          TECH<span className="text-slate-900">STORE.</span>
        </a>

        <div className="hidden gap-6 font-medium text-slate-600 sm:flex">
          <a href="#inicio" className="hover:text-green-600">
            Inicio
          </a>

          <a href="#productos" className="hover:text-green-600">
            Productos
          </a>
        </div>

        <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
          Carrito ({cartCount})
        </span>
      </nav>
    </header>
  )
}
