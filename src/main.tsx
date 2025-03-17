import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App.tsx"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { Provider } from "react-redux"
import { store } from "./store"
import { Toaster } from "./components/ui/sonner"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
