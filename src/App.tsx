import { Merchant } from './features/merchant/Merchant'
import { ProductList } from './features/productList/ProductList'
import './App.css'

function App () {
    return (
        <div className='mx-auto bg-stone-100 flex flex-wrap justify-center'>
            <div className='flex-none '>
                <Merchant />
            </div>
            <ProductList />
        </div>
    )
}

export default App
