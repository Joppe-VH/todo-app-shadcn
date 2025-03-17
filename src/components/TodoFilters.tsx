import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useAppDispatch, useAppSelector } from "@/store"
import { setFilterCategorie, setFilterStatus, selectCategorieFilter, selectStatusFilter } from "@/store/filterSlice"
import { useGetCategoriesQuery } from "@/store/todoApi"

const TodoFilters = () => {
  const dispatch = useAppDispatch()
  const categorie = useAppSelector(selectCategorieFilter)
  const status = useAppSelector(selectStatusFilter)

  const { data: categories } = useGetCategoriesQuery()
  return (
    <div className="flex gap-2">
      <Select value={categorie} onValueChange={value => dispatch(setFilterCategorie(value))}>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories?.map(category => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={status}
        onValueChange={value => dispatch(setFilterStatus(value as "all" | "active" | "completed"))}
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="incomplete">Incomplete</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
export default TodoFilters
