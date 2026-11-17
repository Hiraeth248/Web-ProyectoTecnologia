
import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

export default function App() {
  const [cart, setCart] = useState([])
  const [exchangeRate, setExchangeRate] = useState(null)
  const [currencyLoading, setCurrencyLoading] = useState(true)
  const [currencyError, setCurrencyError] = useState("")

  useEffect(() => {
    async function getExchangeRate() {
      try {
        const response = await fetch(
          "https://api.frankfurter.dev/v2/rate/usd/cop"
        )

        if (!response.ok) {
          throw new Error("No se pudo obtener la tasa de cambio")
        }

        const data = await response.json()

        setExchangeRate(data.rate)
      } catch (error) {
        setCurrencyError(error.message)
      } finally {
        setCurrencyLoading(false)
      }
    }

    getExchangeRate()
  }, [])

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar cartCount={cart.length} />

      <main>
        <Banner />

        <div className="mx-auto max-w-7xl px-5 pt-8">
          {currencyLoading && (
            <p className="text-sm text-slate-500">
              Consultando tasa de cambio...
            </p>
          )}

          {currencyError && (
            <p className="text-sm text-red-600">
              {currencyError}. No se pueden convertir los precios.
            </p>
          )}

          {exchangeRate && (
            <p className="rounded-xl bg-green-50 p-4 text-sm text-green-800">
              API de cambio de moneda activa: 1 USD =
              {" "}
              {exchangeRate.toLocaleString("es-CO")} COP
            </p>
          )}
        </div>

        <ProductList
          onAdd={addToCart}
          exchangeRate={exchangeRate}
        />
      </main>

      <Footer />
    </div>
  )
}
