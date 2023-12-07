import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpeg'

import './Merchant.css'

export function Merchant(props: any) {
    let [searchParams, setSearchParams] = useSearchParams()
    let [userId, setUserId] = useState(searchParams.get('user_id'))
    let [accessToken, setAccessToken] = useState(
        searchParams.get('access_token')
    )
    let [photo, setPhoto] = useState(profile)
    let url = new URL(window.location.href)
    let username = url.hostname.split('.')[0]

    useEffect(() => {
        // const exec = async () => {
        //     let response = await axios.get(
        //         `https://graph.instagram.com/me?fields=id,username,profile_picture_url,name,biography&access_token=${accessToken}`
        //     )
        //     let response2 = await axios.get(
        //         `https://www.instagram.com/${response.data.username}/?__a=1&__d=1`
        //     )
        //     if (response2) {
        //         console.log(response2)
        //         setPhoto(response2.data.graphql.user.profile_pic_url_hd)
        //     }
        // }
        // exec()
    }, [])

    return (
        <div>
            <div className='m-auto w-24 h-24 md:w-48 md:h-48 relative z-10 top-2 before:absolute before:rounded-full before:-top-1 before:-left-1 before:w-full before:h-full before:bg-teal-400'>
                <img
                    crossOrigin='anonymous'
                    src={photo}
                    alt=''
                    className='absolute z-10 inset-0 w-full h-full object-cover rounded-full'
                    loading='lazy'
                />
            </div>
            <form className='flex flex-col py-2'>
                <div className='flex'>
                    <span className='relative mb-2 text-2xl font-semibold text-white text-ellipsis'>
                        {props.user}
                    </span>
                    <a href='#' className='relative m-1.5 pb-2'>
                        <img className='h-4 w-auto' src={logo} alt='' />
                    </a>
                </div>
                <div className='flex'>
                    <span className='text-xs relative uppercase text-teal-400 text-sm'>
                        verificado
                    </span>
                </div>

            </form>
        </div>
    )
}
