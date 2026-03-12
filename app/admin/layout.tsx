import { FC } from "react"
import AdminLayout from "../components/admin/admins/AdminLayout"
import ChildrenInterface from "../interface/children.interface"

const AdminLayoutRouter: FC<ChildrenInterface> = ({children}) => {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  )
}

export default AdminLayoutRouter