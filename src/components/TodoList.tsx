import TodoItem from "./TodoItem"
import { useGetTodosQuery } from "../store/todoApi"
import { Accordion } from "./ui/accordion"

const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery()
  if (isLoading) return null
  return <Accordion type="multiple">{todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}</Accordion>
}
export default TodoList
