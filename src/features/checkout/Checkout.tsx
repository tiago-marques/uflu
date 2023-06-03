import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { filterAsync, selectFilter } from './checkoutSlice'

import './Checkout.css'

import Iframe from 'react-iframe'

export function Checkout () {
    return (
        <div className='flex-1 min-w-full md:min-w-0 overflow-auto'>
            <Iframe
                url='https://checkout.dlocalgo.com/validate/uwxZMGDMBiYFJ46YnjtEGb2vmk2J6SMm'
                id='checkout'
                className='container mx-auto p-4 mb-6 bg-white rounded-xl min-h-screen'
                display='block'
            />
        </div>
    )
}
