import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import MainPage from "./pages/MainPage"
const CardsPage = lazy(() => import("./pages/CardsPage"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="cards" element={<CardsPage />} />
      </Route>
    </Routes>
  )
}

export default App
