import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { useSearchParams } from "react-router-dom"
import { useGetTodosQuery } from "../store/todoApi"
import { useAppSelector } from "@/store"
import { selectCategorieFilter, selectStatusFilter } from "@/store/filterSlice"

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageSize = searchParams.get("pageSize") || "10"
  const currentPage = Number(searchParams.get("page")) || 1

  // Get the current filter values to pass to the query
  const categoryFilter = useAppSelector(selectCategorieFilter)
  const statusFilter = useAppSelector(selectStatusFilter)

  // Get total count from the API response
  const { data: todos } = useGetTodosQuery({
    categorieId: categoryFilter,
    status: statusFilter,
    limit: 10000, // Large number to get all todos for counting - in a real app this would be handled by the backend
  })

  const totalItems = todos?.length || 0
  const totalPages = Math.ceil(totalItems / Number(pageSize))

  const handlePageSizeChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("pageSize", value)
    params.set("page", "1") // Reset to first page when changing page size
    setSearchParams(params)
  }

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return

    const params = new URLSearchParams(searchParams)
    params.set("page", page.toString())
    setSearchParams(params)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Label>Show:</Label>
        <Select value={pageSize} onValueChange={handlePageSizeChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="page size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => goToPage(1)} disabled={currentPage === 1}>
          First
        </Button>
        <Button variant="outline" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <Button variant="outline" onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages}>
          Next
        </Button>
        <Button variant="outline" onClick={() => goToPage(totalPages)} disabled={currentPage >= totalPages}>
          Last
        </Button>
      </div>
    </div>
  )
}
export default Pagination
