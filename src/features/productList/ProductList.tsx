import { useEffect, useState } from 'react'
import { Product } from '../product/Product'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { filterAsync, selectFilter } from './productListSlice'

import p1 from '../../assets/product_1.jpeg'
import p2 from '../../assets/product_2.jpeg'
import p3 from '../../assets/product_3.jpeg'

import './ProductList.css'

interface ProductItem {
    name: string
    src: any
    value: number
    id: string
    stockLeft: number
}

export function ProductList () {
    // var html =
    //     "<div style='height:10rpx;width: 20rpx;'>1<p>2<br/><a href='http://www.baidu.com'>3</a></p><p>2</p></div>"
    // var x = htmlParser(html)
    // console.log(x)
    const storeFilter = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()

    const [filter, setFilter] = useState('')

    const product1 = {
        name: 'Cropped - Gola alta / Manga curta canelado',
        src: p1,
        value: 30.0,
        id: '1',
        stockLeft: 12,
    } as ProductItem

    const product2 = {
        name: 'Conjunto de pijama - Renda de contraste / Bainha com babado',
        src: p2,
        value: 60.0,
        id: '2',
        stockLeft: 8,
    } as ProductItem

    const product3 = {
        name: 'Vestido de Noite  - Floral / Frente de proa',
        src: p3,
        value: 50.0,
        id: '3',
        stockLeft: 5,
    } as ProductItem

    useEffect(() => {
        dispatch(filterAsync(filter))
    }, [filter])

    return (
        <div className='flex-1 min-w-full md:min-w-0'>
            <div className='container mx-auto p-4 mb-6 bg-white rounded-xl'>
                <input
                    type='text'
                    placeholder='Pesquisar...'
                    className='block w-full text-sm font-bold text-teal-800 outline-none'
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className='container mx-auto p-4 bg-white rounded-xl'>
                <div className='flex flex-wrap p-6 font-mono w-full'>
                    {[product1, product2, product3]
                        .filter(
                            p =>
                                p.name
                                    .toLocaleLowerCase()
                                    .indexOf(
                                        storeFilter.toLocaleLowerCase()
                                    ) !== -1 ||
                                p.name
                                    .toLocaleLowerCase()
                                    .indexOf(filter.toLocaleLowerCase()) !== -1
                        )
                        .map(p => {
                            return (
                                <Product
                                    key={p.name}
                                    name={p.name}
                                    img={p.src}
                                    value={p.value}
                                    id={p.id}
                                    stock={p.stockLeft}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
