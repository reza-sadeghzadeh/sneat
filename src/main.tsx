import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/main.scss"
import "./styles/style.scss"
import "./styles/tailwind.scss"

import { BrowserRouter } from "react-router-dom"
import RTLProvider from "./utils/RTLProvider"
import { RTLContextProvider } from "./contexts/RTLContext"
import initI18n from "./utils/i18n"

// initializing the internationalization
initI18n()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RTLContextProvider>
        <RTLProvider>
          <Suspense fallback="Loading...">
            <App />
          </Suspense>
        </RTLProvider>
      </RTLContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
