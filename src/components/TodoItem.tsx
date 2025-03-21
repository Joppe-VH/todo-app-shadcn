import Badge from "./Badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Todo } from "../types"
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useRemoveTodoMutation, useToggleTodoMutation, useUpdateTodoMutation } from "../store/todoApi"
import { Pen, X } from "lucide-react"
import { TodoEditDialog } from "./TodoEditDialog"

interface Props {
  todo: Todo
}

const TodoItem = ({ todo }: Props) => {
  const [toggleTodo] = useToggleTodoMutation()
  const [removeTodo] = useRemoveTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const handleUpdateTodo = (updatedTodo: Partial<Todo>) => {
    updateTodo(updatedTodo)
  }

  return (
    <AccordionItem value={todo.id}>
      <div className="flex items-center gap-2">
        <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo)} />
        <div className="grow">
          <AccordionTrigger>
            <div className="flex w-full items-center gap-2">
              <span className="grow">{todo.text}</span>
              <Badge color={todo.categorie.color}>{todo.categorie.name}</Badge>
            </div>
          </AccordionTrigger>
        </div>
        <div className="flex items-center gap-2">
          <TodoEditDialog
            todo={todo}
            onSave={handleUpdateTodo}
            trigger={
              <Button variant="ghost" size="icon">
                <Pen className="h-4 w-4" />
              </Button>
            }
          />
          <Button variant="ghost" size="icon" onClick={() => removeTodo(todo.id)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <AccordionContent>
        <p>{todo.description}</p>
      </AccordionContent>
    </AccordionItem>
  )
}
export default TodoItem
