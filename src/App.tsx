import { Routes, Route, Navigate } from "react-router-dom"
import TodoApp from "./pages/TodoApp"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./components/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
