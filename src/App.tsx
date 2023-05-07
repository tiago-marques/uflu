import { Merchant } from './features/merchant/Merchant'
import { Topbar } from './features/topbar/Topbar'
import { ProductList } from './features/productList/ProductList'
import './App.css'

function App () {
    return (
        <>
            <Topbar />
            <div className='mx-auto bg-stone-100 flex flex-wrap justify-center'>
                <div className='flex-none '>
                    <Merchant />
                </div>
                <ProductList />
            </div>
        </>
    )
}

export default App
