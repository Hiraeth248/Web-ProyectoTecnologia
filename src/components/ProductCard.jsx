
export default function ProductCard({
  product,
  exchangeRate,
  onAdd,
}) {
  const priceCOP = exchangeRate
    ? product.price * exchangeRate
    : null

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden bg-slate-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-56 w-full object-contain p-4 transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-green-600">
          {product.category}
        </span>

        <h3 className="mt-2 line-clamp-2 min-h-12 text-lg font-bold text-slate-900">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-3 min-h-16 text-sm text-slate-500">
          {product.description}
        </p>

        <div className="mt-5">
          <p className="text-sm text-slate-400">
            Precio original: $
            {product.price.toFixed(2)} USD
          </p>

          {exchangeRate ? (
            <p className="mt-1 text-xl font-black text-green-700">
              {priceCOP.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
              })}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-500">
              Esperando tasa de cambio...
            </p>
          )}
        </div>

        <button
          onClick={() => onAdd(product)}
          className="mt-5 w-full rounded-xl bg-green-600 px-4 py-3 font-bold text-white transition hover:bg-green-700"
        >
          + Agregar al carrito
        </button>
      </div>
    </article>
  )
}
