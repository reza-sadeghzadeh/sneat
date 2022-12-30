import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/main.scss"
import "./styles/style.scss"
import "./styles/tailwind.scss"

import { BrowserRouter } from "react-router-dom"
import RTLProvider from "./utils/RTLProvider"
import { RTLContextProvider } from "./contexts/RTLContext"
import initI18n from "./boot/i18n"
import { I18nProvider } from "./utils/RTLi18n"
import { ColorSchemeContextProvider } from "./contexts/ColorSchemeContext"

// initializing the internationalization
initI18n()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorSchemeContextProvider>
        <RTLContextProvider>
          <RTLProvider>
            <I18nProvider>
              <Suspense fallback="Loading...">
                <App />
              </Suspense>
            </I18nProvider>
          </RTLProvider>
        </RTLContextProvider>
      </ColorSchemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
