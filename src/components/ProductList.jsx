
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const categories = [
  "smartphones",
  "laptops",
  "tablets",
  "mobile-accessories",
]

export default function ProductList({ onAdd, exchangeRate }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getProducts() {
      try {
        const requests = categories.map((category) =>
          fetch(
            `https://dummyjson.com/products/category/${category}`
          )
        )

        const responses = await Promise.all(requests)

        if (responses.some((response) => !response.ok)) {
          throw new Error("Error al consultar los productos")
        }

        const data = await Promise.all(
          responses.map((response) => response.json())
        )

        const allProducts = data.flatMap(
          (categoryData) => categoryData.products
        )

        setProducts(allProducts)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return (
    <section
      id="productos"
      className="mx-auto max-w-7xl px-5 py-16"
    >
      <div className="mb-10">
        <p className="font-bold uppercase tracking-widest text-green-600">
          Tecnología para ti
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Nuestros productos
        </h2>

        <p className="mt-3 text-slate-500">
          Encuentra celulares, computadores y accesorios.
        </p>
      </div>

      {loading && (
        <p className="text-center text-slate-500">
          Cargando productos desde la API...
        </p>
      )}

      {error && (
        <p className="text-center text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && products.length === 0 && (
        <p>No se encontraron productos.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              exchangeRate={exchangeRate}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  )
}
