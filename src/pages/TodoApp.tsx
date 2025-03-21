import AddTodo from "../components/AddTodo"
import TodoFilters from "../components/TodoFilters"
import TodoList from "../components/TodoList"
import Pagination from "../components/Pagination"
import TodoStats from "../components/TodoStats"

function TodoApp() {
  return (
    <div className="container mx-auto flex max-w-5xl flex-col gap-4 p-4">
      <section className="flex flex-col gap-4">
        <h1 className="mt-4 text-2xl font-bold">Todo App</h1>
        <AddTodo />
      </section>
      <section className="flex flex-col gap-4">
        <TodoFilters />
        <TodoList />
        <Pagination />
        <TodoStats />
      </section>
    </div>
  )
}

export default TodoApp
