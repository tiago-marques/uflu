import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpeg'

import './Merchant.css'

//USAR https://github.com/unreleased/request-curl

export function Merchant (props: any) {
    // USAR request-curl
    async function insta (uid: string) {
        return fetch('https://www.save-free.com/process', {
            body: 'instagram_url=surfistaperdido&type=profile&resource=save',
            method: 'POST',
        })
    }

    useEffect(() => {
        var x = insta('6343303999045780').then(x => console.log(x))
    }, [])

    return (
        <div className='flex flex-wrap pt-6 md:ps-6 font-mono'>
            <div className='m-auto w-48 h-48 relative z-10 before:absolute before:rounded-full before:-top-1 before:-left-1 before:w-full before:h-full before:bg-teal-400'>
                <img
                    src={profile}
                    alt=''
                    className='absolute z-10 inset-0 w-full h-full object-cover rounded-full'
                    loading='lazy'
                />
            </div>
            <form className='flex-auto ps-6'>
                <div className='relative flex flex-wrap items-baseline pb-6 before:bg-slate-700 before:absolute before:-top-6 before:bottom-0 before:-left-60 before:right-0'>
                    <span className='relative shrink mb-2 text-2xl font-semibold text-white'>
                        {props.user}
                    </span>
                    <a href='#' className='relative  m-1.5 pb-2'>
                        <img className='h-4 w-auto' src={logo} alt='' />
                    </a>
                    <span className='text-xs w-full flex-auto relative uppercase text-teal-400 text-sm'>
                        verificado
                    </span>
                </div>
                <div className='flex items-baseline my-6'>
                    <div className='space-x-3 flex flex-wrap text-sm font-medium'>
                        {/* <Link
                            to='admin'
                            className='text-sm font-semibold leading-6 text-gray-900'
                        >
                            Admin <span aria-hidden='true'>&rarr;</span>
                        </Link>
                        <a
                            href='#'
                            className='relative flex grow m-1.5 pb-2 font-bold'
                        >
                            <img
                                className='h-4 w-4 me-2'
                                src='https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png'
                                alt=''
                            />
                            +5519996613308
                        </a> */}
                        <a
                            href='#'
                            className='relative flex grow m-1.5 pb-2 font-bold'
                        >
                            <img
                                className='h-4 w-4 me-2'
                                src='https://static.cdninstagram.com/rsrc.php/v3/ys/r/aM-g435MtEX.png'
                                alt=''
                            />
                            {props.user}
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
