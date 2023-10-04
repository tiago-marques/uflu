import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpeg'

import './Merchant.css'

export function Merchant (props: any) {
    let [searchParams, setSearchParams] = useSearchParams()
    let [userId, setUserId] = useState(searchParams.get('user_id'))
    let [accessToken, setAccessToken] = useState(
        searchParams.get('access_token')
    )
    let [photo, setPhoto] = useState('')
    let url = new URL(window.location.href)
    let username = url.hostname.split('.')[0]

    useEffect(() => {
        const exec = async () => {
            let response = await axios.get(
                `https://graph.instagram.com/me?fields=id,username,profile_picture_url,name,biography&access_token=${accessToken}`
            )
            let response2 = await axios.get(
                `https://www.instagram.com/${response.data.username}/?__a=1&__d=1&access_token=${accessToken}`
            )
            if (response2) {
                console.log(response2)
                setPhoto(response2.data.graphql.user.profile_pic_url_hd)
            }
        }
        exec()
    }, [])

    return (
        <div className='flex flex-wrap pt-6 md:ps-6 font-mono'>
            <div className='m-auto w-48 h-48 relative z-10 before:absolute before:rounded-full before:-top-1 before:-left-1 before:w-full before:h-full before:bg-teal-400'>
                <img
                    crossOrigin='anonymous'
                    src={photo}
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
                            href={`https://www.instagram.com/${username}/`}
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
