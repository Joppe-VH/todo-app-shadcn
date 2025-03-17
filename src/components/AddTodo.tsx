import { useAddTodoMutation, useGetCategoriesQuery } from "@/store/todoApi"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const AddTodo = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation()
  const { data: categories } = useGetCategoriesQuery()
  const handleAddTodo = (fd: FormData) => {
    const todo = {
      text: fd.get("text") as string,
      categorieId: fd.get("categorieId") as string,
    }
    addTodo(todo)
  }

  return (
    <form action={handleAddTodo} className="flex w-full space-x-2">
      <Input className="w-full" type="text" name="text" placeholder="Add a new todo..." />
      <Select name="categorieId">
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories?.map(categorie => (
            <SelectItem key={categorie.id} value={categorie.id}>
              {categorie.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isLoading}>
        Add
      </Button>
    </form>
  )
}
export default AddTodo
