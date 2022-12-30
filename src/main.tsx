import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/main.scss"
import "./styles/style.scss"
import "./styles/tailwind.scss"

import { BrowserRouter } from "react-router-dom"
import RTLProvider from "./utils/RTLProvider"
import { RTLContextProvider } from "./contexts/RTLContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RTLContextProvider>
        <RTLProvider>
          <App />
        </RTLProvider>
      </RTLContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
