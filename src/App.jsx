import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
