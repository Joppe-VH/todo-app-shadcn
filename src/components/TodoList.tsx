import TodoItem from "./TodoItem"
import { useGetTodosQuery } from "../store/todoApi"

const TodoList = () => {
  const { data: todos } = useGetTodosQuery()

  console.log(todos)
  return (
    <div>
      <ul>{todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>
    </div>
  )
}
export default TodoList
