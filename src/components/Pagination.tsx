import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Label>Show:</Label>
        <Select>
          <SelectTrigger>
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
        <Button variant="outline">First</Button>
        <Button variant="outline">Previous</Button>
        <span>Page 1 of 10</span>
        <Button variant="outline">Next</Button>
        <Button variant="outline">Last</Button>
      </div>
    </div>
  )
}
export default Pagination
