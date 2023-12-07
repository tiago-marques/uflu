import { Link, Outlet } from 'react-router-dom'
import { Topbar } from '../features/topbar/Topbar'

export default function Root (props) {
    return (
        <>
            <Outlet />
        </>
    )
}
