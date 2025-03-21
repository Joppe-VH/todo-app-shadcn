import { Link, Outlet, useLocation } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

function Layout() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path ? "font-bold" : ""
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold">
            Todo Application
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/app" className={`text-muted-foreground hover:text-foreground text-sm ${isActive("/app")}`}>
              Todo App
            </Link>
            <Link to="/about" className={`text-muted-foreground hover:text-foreground text-sm ${isActive("/about")}`}>
              About
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
