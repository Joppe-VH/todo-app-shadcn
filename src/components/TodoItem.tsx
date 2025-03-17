import Badge from "./Badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Todo } from "../types"
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useToggleTodoMutation } from "../store/todoApi"
interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  const [toggleTodo] = useToggleTodoMutation()

  const handleToggleTodo = () => {
    toggleTodo(todo)
  }
  return (
    <AccordionItem value={todo.id}>
      <div className="flex items-center gap-2">
        <Checkbox checked={todo.completed} onCheckedChange={handleToggleTodo} />
        <div className="grow">
          <AccordionTrigger>
            <div className="flex w-full items-center gap-2">
              <span className="grow">{todo.text}</span>
              <Badge color={todo.categorie.color}>{todo.categorie.name}</Badge>
            </div>
          </AccordionTrigger>
        </div>
        <div className="flex items-center gap-2">
          <Button>✏️</Button>
          <Button>🗑️</Button>
        </div>
      </div>
      <AccordionContent>
        <p>{todo.description}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
export default TodoItem
