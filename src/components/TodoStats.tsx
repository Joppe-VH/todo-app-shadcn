const TodoStats = () => {
  return (
    <div className="flex items-center justify-between gap-2 border-t-1 border-t-gray-300">
      <span>Todos: 15 todos</span>
      <span>Active: 10 todos</span>
      <span>Completed: 5 todos</span>
      <span>40% completed</span>
    </div>
  )
}
export default TodoStats
