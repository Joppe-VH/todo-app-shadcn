import { Link } from "react-router-dom"
import { CalendarCheck, Info } from "lucide-react"

function Home() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col gap-8 p-4">
      <h1 className="mt-8 text-3xl font-bold">Welcome to the Todo Application</h1>

      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
        <Link
          to="/app"
          className="border-primary hover:bg-primary/10 flex h-[300px] flex-col items-center justify-center rounded-lg border-2 p-10 transition-colors duration-300"
        >
          <div className="bg-primary/20 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <CalendarCheck className="text-primary h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Todo App</h2>
          <p className="text-muted-foreground text-center">Manage your tasks and stay organized</p>
        </Link>

        <Link
          to="/about"
          className="border-primary hover:bg-primary/10 flex h-[300px] flex-col items-center justify-center rounded-lg border-2 p-10 transition-colors duration-300"
        >
          <div className="bg-primary/20 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <Info className="text-primary h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">About</h2>
          <p className="text-muted-foreground text-center">Learn about the technologies used</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
