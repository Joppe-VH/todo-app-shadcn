import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"

const TodoItem = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox />
      <span className="grow">Todo 1</span>
      <Badge>Category</Badge>
      <Button>✏️</Button>
      <Button>🗑️</Button>
    </div>
  )
}
export default TodoItem
