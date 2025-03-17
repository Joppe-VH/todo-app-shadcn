import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const AddTodo = () => {
  return (
    <div className="flex w-full space-x-2">
      <Input className="w-full" type="text" placeholder="Add a new todo..." />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Add</Button>
    </div>
  )
}
export default AddTodo
