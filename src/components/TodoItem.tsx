import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Todo } from "../types"

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={todo.completed} />
      <span className="grow">{todo.text}</span>
      <Badge>{todo.categorie.name}</Badge>
      <Button>✏️</Button>
      <Button>🗑️</Button>
    </div>
  )
}
export default TodoItem
