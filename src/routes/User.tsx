import { Outlet, useParams } from 'react-router-dom'
import { Merchant } from '../features/merchant/Merchant'

function App () {
    let { user } = useParams()
    return (
        <div className='mx-auto bg-stone-100 flex flex-wrap justify-center'>
            <div className='flex-none '>
                <Merchant user={user} />
            </div>
            <Outlet />
        </div>
    )
}

export default App
