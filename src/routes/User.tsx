import { Outlet, useParams } from 'react-router-dom'
import { Merchant } from '../features/merchant/Merchant'

function User(prop: any) {
    // let { user } = useParams()
    let userProps = prop.user
    return (
        <div className='mx-auto flex flex-col justify-center'>
            <div className='flex-none '>
                <Merchant user={userProps} sidebar={userProps.sidebar} />
            </div>
            <Outlet />
        </div>
    )
}

export default User
