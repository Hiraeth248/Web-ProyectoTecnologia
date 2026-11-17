
export default function Banner() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-slate-950 via-green-950 to-green-700 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <span className="rounded-full bg-green-400/20 px-4 py-2 text-sm font-bold text-green-200">
          TECNOLOGÍA DE ÚLTIMA GENERACIÓN
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
          El futuro de la tecnología está aquí.
        </h1>

        <p className="mt-5 max-w-xl text-lg text-slate-300">
          Descubre smartphones, computadores y accesorios
          diseñados para mejorar tu día a día.
        </p>

        <a
          href="#productos"
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-100"
        >
          Explorar productos →
        </a>
      </div>
    </section>
  )
}
