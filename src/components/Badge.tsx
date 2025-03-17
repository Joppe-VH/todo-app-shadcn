import { CSSProperties } from "react"
import { Badge as BadgeUI } from "./ui/badge"

interface Props {
  color: CSSProperties["color"]
  children: React.ReactNode
}

const Badge = ({ color, children }: Props) => {
  return <BadgeUI style={{ backgroundColor: color }}>{children}</BadgeUI>
}
export default Badge
