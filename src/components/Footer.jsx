
export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-10 text-center text-slate-400">
      <h2 className="text-xl font-black text-white">
        TECHSTORE.
      </h2>

      <p className="mt-3 text-sm">
        Tu tienda de tecnología favorita.
      </p>

      <p className="mt-5 text-xs">
        © {new Date().getFullYear()} TECHSTORE.
        Proyecto académico de diseño web.
      </p>

      <div className="mt-4 text-xs">
        Productos: DummyJSON API · Cambio de moneda: Frankfurter API
      </div>
    </footer>
  )
}
