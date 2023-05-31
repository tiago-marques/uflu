import { Outlet, useParams } from 'react-router-dom'
import { Merchant } from '../features/merchant/Merchant'

function User (prop: any) {
    // let { user } = useParams()
    let userProps = prop.user
    return (
        <div className='mx-auto bg-stone-100 flex flex-col justify-center'>
            <div className='flex-none '>
                <Merchant user={userProps} />
            </div>
            <Outlet />
        </div>
    )
}

export default User
