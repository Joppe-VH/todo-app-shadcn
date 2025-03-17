import TodoItem from "./TodoItem"
import { useGetTodosQuery } from "../store/todoApi"
import { Accordion } from "./ui/accordion"
import { selectStatusFilter } from "@/store/filterSlice"
import { useAppSelector } from "@/store"
import { selectCategorieFilter } from "@/store/filterSlice"

const TodoList = () => {
  const categorie = useAppSelector(selectCategorieFilter)
  const status = useAppSelector(selectStatusFilter)
  const { data: todos, isLoading } = useGetTodosQuery({ categorieId: categorie, status: status })
  if (isLoading) return null
  return <Accordion type="multiple">{todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}</Accordion>
}
export default TodoList
