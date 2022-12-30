import { Box, useMantineTheme } from "@mantine/core"
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { useDarkMode } from "./hooks"
import MainLayout from "./layouts/MainLayout"
import MainPage from "./pages/MainPage"
const CardsPage = lazy(() => import("./pages/CardsPage"))

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="cards" element={<CardsPage />} />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
