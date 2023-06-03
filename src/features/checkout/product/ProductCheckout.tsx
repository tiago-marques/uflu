import { Link } from 'react-router-dom'
import './ProductCheckout.css'

export function ProductCheckout (props: {
    name: string
    img: any
    value: number
    id: string
    stock: number
}) {
    return (
        <div className='flex flex-row-reverse min-w-min md:px-6 md:pt-6 font-mono'>
            <div className='flex-none -top-40 right-10 md:w-64 before:h-64 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:bg-teal-400'>
                <img
                    src={props.img}
                    alt=''
                    className='absolute z-10 inset-0 object-cover rounded-lg'
                    loading='lazy'
                />
            </div>
            <form className='flex-auto m-2'>
                <div className='relative flex flex-wrap items-baseline pb-6 '>
                    <h1 className='relative w-full flex-none mb-2 text-2xl font-semibold'>
                        {props.name}
                    </h1>
                </div>
                <p className='text-xs leading-6 text-slate-500'></p>
            </form>
        </div>
    )
}
