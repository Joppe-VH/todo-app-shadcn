import AddTodo from "./components/AddTodo"
import TodoFilters from "./components/TodoFilters"
import TodoList from "./components/TodoList"
import Pagination from "./components/Pagination"
import TodoStats from "./components/TodoStats"
import { ModeToggle } from "./components/mode-toggle"
function App() {
  return (
    <main className="container mx-auto flex max-w-5xl flex-col gap-4 p-4">
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1>Todo App</h1>
          <ModeToggle />
        </div>
        <AddTodo />
      </section>
      <section className="flex flex-col gap-4">
        <TodoFilters />
        <TodoList />
        <Pagination />
        <TodoStats />
      </section>
    </main>
  )
}

export default App
