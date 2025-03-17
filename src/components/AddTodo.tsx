import { useAddTodoMutation, useGetCategoriesQuery } from "@/store/todoApi"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { SelectGroup, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const AddTodo = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation()
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesQuery()
  const handleAddTodo = (fd: FormData) => {
    const todo = {
      text: fd.get("text") as string,
      categorieId: fd.get("categorieId") as string,
    }
    addTodo(todo)
  }

  if (isCategoriesLoading) return null
  return (
    <form action={handleAddTodo} className="flex w-full space-x-2">
      <Input className="w-full" type="text" name="text" placeholder="Add a new todo..." />
      <Select name="categorieId" defaultValue={categories?.[0].id}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="new">New</SelectItem>
            {categories?.map(categorie => (
              <SelectItem key={categorie.id} value={categorie.id}>
                {categorie.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" disabled={isLoading}>
        Add
      </Button>
    </form>
  )
}
export default AddTodo
