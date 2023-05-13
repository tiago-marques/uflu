import { useEffect, useState } from 'react'
import { Product } from '../product/Product'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { filterAsync, selectFilter } from './productListSlice'

import './ProductList.css'

export function ProductList () {
    const storeFilter = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()

    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(filterAsync(filter))
    }, [filter])

    return (
        <div className='flex-1 min-w-full md:min-w-0'>
            <div className='container mx-auto md:m-4 p-4 mb-6 bg-white rounded-xl'>
                <input
                    type='text'
                    placeholder='Pesquisar...'
                    className='block w-full text-sm font-bold text-teal-800 outline-none'
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className='container mx-auto md:m-4 p-4 bg-white rounded-xl'>
                <div className='flex flex-wrap p-6 font-mono w-full'>
                    {['hello', 'world', 'xuxa', 'pele']
                        .filter(
                            f =>
                                f.indexOf(storeFilter) !== -1 ||
                                f.indexOf(filter) !== -1
                        )
                        .map(name => {
                            return <Product key={name} name={name} />
                        })}
                </div>
            </div>
        </div>
    )
}
