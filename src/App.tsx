import { Outlet, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import CardsPage from "./pages/CardsPage"
import MainPage from "./pages/MainPage"

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
