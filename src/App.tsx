import { Box } from "@mantine/core"
import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Blank from "./pages/layouts/Blank"
import ContainerPage from "./pages/layouts/ContainerPage"
import Fluid from "./pages/layouts/Fluid"
import WithOutMenu from "./pages/layouts/WithOutMenu"
import WithOutNavbar from "./pages/layouts/WithOutNavbar"

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
        <Route path="layouts" element={<MainLayout />}>
          <Route path="with-out-navbar" element={<WithOutNavbar />} />
          <Route path="with-out-menu" element={<WithOutMenu />} />
          <Route path="container" element={<ContainerPage />} />
          <Route path="fluid" element={<Fluid />} />
          <Route path="blank" element={<Blank />} />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
