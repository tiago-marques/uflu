import { Link } from 'react-router-dom'
import full from '../../assets/full.svg'
import './Topbar.css'

export function Topbar () {
    return (
        <>
            <header className='drop-shadow-xl bg-white fixed w-full z-50'>
                <nav
                    className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
                    aria-label='Global'
                >
                    <div className='flex lg:flex-1'>
                        <Link to='/' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Uflu</span>
                            <img
                                className='h-16 w-auto App-logo'
                                src={full}
                                alt=''
                            />
                        </Link>
                    </div>
                    <div className='flex lg:hidden'>
                        <Link
                            to='/@baabsvieira'
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            <button
                                type='button'
                                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                            >
                                <span className='sr-only'>Open main menu</span>
                                <svg
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12'></div>
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <Link
                            to='/@baabsvieira'
                            className='text-sm font-semibold leading-6 no-underline hover:underline text-gray-800 hover:text-slate-700'
                        >
                            Ver Demonstração{' '}
                            <span aria-hidden='true'>&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className='pt-24'></div>
        </>
    )
}
