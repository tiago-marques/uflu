import { Outlet, useParams } from 'react-router-dom'
import { ProductCheckout } from '../features/checkout/product/ProductCheckout'
import { Merchant } from '../features/merchant/Merchant'
import { useAppSelector, useAppDispatch } from '../app/hooks'

import p1 from '../assets/product_1.jpeg'
import { hideToolbar } from './rootSlice'
import { useEffect } from 'react'

interface ProductCheckoutItem {
    name: string
    src: any
    value: number
    id: string
    stockLeft: number
}

const product1 = {
    name: 'Cropped - Gola alta / Manga curta canelado',
    src: p1,
    value: 30.0,
    id: '1',
    stockLeft: 12,
} as ProductCheckoutItem

function UserProduct (prop: any) {
    const dispatch = useAppDispatch()

    let userProps = prop.user
    return (
        <div className='mx-auto bg-stone-100 flex flex-col justify-center'>
            <div className='flex-none flex-row'>
                <Merchant user={userProps} />
                <ProductCheckout
                    key={product1.name}
                    name={product1.name}
                    img={product1.src}
                    value={product1.value}
                    id={product1.id}
                    stock={product1.stockLeft}
                />
            </div>
            <Outlet />
        </div>
    )
}

export default UserProduct
