import SideBar from "./Components/SideBar"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
    return (
        <SideBar>
            <Outlet />
        </SideBar>
    )
}