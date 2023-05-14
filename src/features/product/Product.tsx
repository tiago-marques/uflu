import { Link } from 'react-router-dom'
import './Product.css'

export function Product (props: {
    name: string
    img: any
    value: number
    id: string
    stock: number
}) {
    return (
        <div className='flex flex-wrap lg:w-1/2 min-w-min md:p-6 font-mono overflow-x-hidden'>
            <div className='flex-none w-32 before:h-32 mb-10 relative z-10 before:absolute before:-top-1 before:-left-1 before:w-full before:h-full before:bg-teal-400'>
                <img
                    src={props.img}
                    alt=''
                    className='absolute z-10 inset-0 object-cover rounded-lg'
                    loading='lazy'
                />
            </div>
            <form className='flex-auto ms-40'>
                <div className='relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-2'>
                    <h1 className='relative w-full flex-none mb-2 text-2xl font-semibold text-white'>
                        {props.name}
                    </h1>
                    <div className='relative text-lg text-white'>
                        <span>R$</span>
                        <span> </span>
                        <span>{props.value}</span>
                    </div>
                </div>
                <p className='text-xs leading-6 text-slate-500'></p>
            </form>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-baseline my-6'>
                    <div className='relative uppercase'>somente</div>
                    <div className='relative text-lg text-teal-400 mx-2'>
                        {props.stock}
                    </div>
                    <div className='relative uppercase'>disponível</div>
                </div>
                <div className='flex space-x-2 mb-4 text-sm font-medium'>
                    <div className='flex space-x-4'>
                        <Link to={`shop/${props.id}`}>
                            <button
                                className='px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black'
                                type='submit'
                            >
                                Comprar
                            </button>
                        </Link>
                    </div>
                    <button
                        className='flex-none flex items-center justify-center w-12 h-12 text-black'
                        type='button'
                        aria-label='Like'
                    >
                        <svg
                            width='20'
                            height='20'
                            fill='red'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
