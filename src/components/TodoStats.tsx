import { useGetTodosQuery } from "@/store/todoApi"
import { useAppSelector } from "@/store"
import { selectCategorieFilter, selectStatusFilter } from "@/store/filterSlice"

const TodoStats = () => {
  const categorie = useAppSelector(selectCategorieFilter)
  const status = useAppSelector(selectStatusFilter)
  const { data: todos } = useGetTodosQuery({ categorieId: categorie, status: status })

  const totalTodos = todos?.length ?? 0
  const activeTodos = todos?.filter(todo => !todo.completed).length ?? 0
  const completedTodos = totalTodos - activeTodos
  const completedPercentage = ((completedTodos / totalTodos) * 100).toFixed(0)

  return (
    <div className="flex items-center justify-between gap-2 border-t-1 border-t-gray-300">
      <span>Todos: {totalTodos} todos</span>
      <span>Active: {activeTodos} todos</span>
      <span>Completed: {completedTodos} todos</span>
      <span>{completedPercentage}% completed</span>
    </div>
  )
}
export default TodoStats
