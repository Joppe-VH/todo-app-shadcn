import TodoItem from "./TodoItem"
import { useGetTodosQuery } from "../store/todoApi"
import { Accordion } from "./ui/accordion"
import { selectStatusFilter } from "@/store/filterSlice"
import { useAppSelector } from "@/store"
import { selectCategorieFilter } from "@/store/filterSlice"
import { useSearchParams } from "react-router-dom"

const TodoList = () => {
  const [searchParams] = useSearchParams()
  const pageSize = Number(searchParams.get("pageSize") || "10")
  const currentPage = Number(searchParams.get("page") || "1")

  const categorie = useAppSelector(selectCategorieFilter)
  const status = useAppSelector(selectStatusFilter)

  const { data: todos, isLoading } = useGetTodosQuery({
    categorieId: categorie,
    status: status,
    limit: pageSize,
    page: currentPage,
  })

  if (isLoading) return null

  // Return a message if no todos are found
  if (!todos || todos.length === 0) {
    return (
      <div className="text-muted-foreground py-8 text-center">
        No todos found. Try adjusting your filters or adding a new todo.
      </div>
    )
  }

  return (
    <Accordion type="multiple">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Accordion>
  )
}

export default TodoList
