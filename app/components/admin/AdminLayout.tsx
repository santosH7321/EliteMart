import ChildrenInterface from "@/app/interface/children.interface"
import { FC } from "react"

const AdminLayout: FC<ChildrenInterface> = ({children}) => {
  return (
    <div>
        <h1>Navbar</h1>
        {children}
    </div>
  )
}

export default AdminLayout