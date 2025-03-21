import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App.tsx"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { Toaster } from "./components/ui/sonner"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
