import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Todo, Categorie } from "../types"
import { useGetCategoriesQuery } from "../store/todoApi"
import { toast } from "sonner"

interface TodoEditDialogProps {
  todo: Todo
  onSave: (updatedTodo: Partial<Todo>) => void
  trigger: React.ReactNode
}

export function TodoEditDialog({ todo, onSave, trigger }: TodoEditDialogProps) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState(todo.text)
  const [description, setDescription] = useState(todo.description || "")
  const [categorieId, setCategorieId] = useState(todo.categorieId)

  const { data: categories, isLoading } = useGetCategoriesQuery()

  // Reset form when todo changes or dialog opens
  useEffect(() => {
    if (open) {
      setText(todo.text)
      setDescription(todo.description || "")
      setCategorieId(todo.categorieId)
    }
  }, [todo, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!text.trim()) {
      toast.error("Todo title cannot be empty")
      return
    }

    const updatedTodo: Partial<Todo> = {
      id: todo.id,
      text,
      description: description.trim() || undefined,
      categorieId,
    }

    onSave(updatedTodo)
    setOpen(false)
    toast.success("Todo updated successfully")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>Make changes to your todo here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={text} onChange={e => setText(e.target.value)} placeholder="Todo title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Add details about your todo"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={categorieId} onValueChange={setCategorieId}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {!isLoading &&
                    categories?.map((category: Categorie) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
