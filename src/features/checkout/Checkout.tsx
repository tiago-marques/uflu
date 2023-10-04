import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { filterAsync, selectFilter } from './checkoutSlice'

import './Checkout.css'

import Iframe from 'react-iframe'

export function Checkout () {
    return <div className='flex-1 min-w-full md:min-w-0 overflow-auto'></div>
}
