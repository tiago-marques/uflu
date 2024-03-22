import hero from '@assets/landing-opaque.svg'
import links from '@assets/links.svg'
import dropshipping from '@assets/dropshipping.svg'
import worldmedias from '@assets/worldmedias.svg'
import paymentlink from '@assets/paymentlink.svg'
import localcurrency from '@assets/localcurrency.svg'
import crossborder from '@assets/crossborder.svg'
import full from '@assets/full.svg'

import social1 from '@assets/icons/social_1.png'
import social2 from '@assets/icons/social_2.png'
import social3 from '@assets/icons/social_3.png'
import social4 from '@assets/icons/social_4.png'
import social5 from '@assets/icons/social_5.png'
import social6 from '@assets/icons/social_6.png'

import { Link, useSearchParams } from 'react-router-dom'
import axios, { isCancel, AxiosError } from 'axios'

import './Landing.scss'
import { useEffect, useRef, useState } from 'react'
import Login from '../login/Login'

export function Landing() {
    const itemEls = useRef({} as any)
    const [selected, setSelected] = useState('')

    let [searchParams, setSearchParams] = useSearchParams()
    let [code, setCode] = useState(searchParams.get('code'))
    if (code) {
        axios
            .postForm('https://api.instagram.com/oauth/access_token', {
                // client_id: '169008989469536',
                app_id: '169008989469536',
                // client_secret: 'ddc3f0350d323d970228660f765ee8c0',
                app_secret: 'ddc3f0350d323d970228660f765ee8c0',
                grant_type: 'authorization_code',
                redirect_uri: 'https://uflu.shop/',
                code: code,
            })
            .then(response => {
                console.log(response.data)
                axios
                    .get(
                        `https://graph.instagram.com/${response.data.user_id}?fields=id,username&access_token=${response.data.access_token}`
                    )
                    .then(response2 => {
                        console.log(window.location.href)
                        let url = new URL(window.location.href)
                        console.log(
                            `${url.protocol}//${response2.data.username}.${url.host}`
                        )

                        window.location.href = `${url.protocol}//${response2.data.username}.${url.host}?user_id=${response.data.user_id}&access_token=${response.data.access_token}`
                    })
            })

        //
        // return redirect('/login')
    }

    return (
        <>
            <main className="flex-shrink-0 overflow-hidden">

                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                    <div className="container px-5">
                        <a className="navbar-brand">
                            <img className="h-16" src={full} alt="..." />
                        </a>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                <li className="nav-item"><a className="nav-link" >Home</a></li>
                                <li className="nav-item"><a className="nav-link" >Resume</a></li>
                                <li className="nav-item"><a className="nav-link" >Projects</a></li>
                                <li className="nav-item"><a className="nav-link" >Contact</a></li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5 pl-0">
                                <div className="text-left text-xxl-start">
                                    <div className="badge bg-gradient-badge-primary-to-secondary text-white mb-4"><div className="text-uppercase">Simple &middot; Social &middot; Sales</div></div>
                                    <div className="fs-3 fw-light text-muted"><b>One-click-to</b></div>
                                    <h1 className="display-5 fw-bolder mb-2"><span className="text-gradient d-inline">Social Media eCommerce</span></h1>
                                    <div className="d-grid gap-3 d-sm-flex mb-3">
                                        <a className="btn btn-lg fs-6 fw-bolder text-left p-0">
                                            <b>Log in</b> with
                                            <div className='h-4 inline-block mx-2'>
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social1} />
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social2} />
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social3} />
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social4} />
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social5} />
                                                <img className='h-auto w-auto max-w-full max-h-full object-contain aspect-square inline-block mx-2' src={social6} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7">
                                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                    <div className="profile bg-gradient-primary-to-secondary">
                                        <img className="profile-img" src={hero} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-light py-5">
                    <div className="container px-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-xxl-8">
                                <div className="text-center my-5">
                                    <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">U+Flu+Shop</span></h2>
                                    <p className="lead fw-light mb-4">With your social networking, start your own business!</p>
                                    <p className="text-muted">Create your own Social Media eCommerce automatically using your preferred social networking.</p>
                                    <div className="d-flex justify-content-center fs-2 gap-4">
                                        <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                        <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                        <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-5">
                    <div className="container px-5">
                        <div className="row gx-5 justify-content-start my-20">
                            <div className="col-xxl-8">
                                <div className='flex'>
                                    <div className="text-left my-5">
                                        <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Social Media first</span></h2>
                                        <p className="lead fw-light mb-4">Everything you need at your hands.</p>
                                        <p className="text-muted">Realtime Dashboard, Reports and finance management.</p>
                                        <div className="d-flex justify-content-center fs-2 gap-4">
                                            <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                    <img className="h-80 inline-block mx-2" src={worldmedias} />
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-end my-20 sm:justify-content-start">
                            <div className="col-xxl-8">
                                <div className='flex flex-row-reverse'>
                                    <div className="text-right my-5">
                                        <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Payment links</span></h2>
                                        <p className="lead fw-light mb-4">Easy to share, simple to use.</p>
                                        <p className="text-muted">One-click buy in all your social networking.</p>
                                        <div className="d-flex justify-content-center fs-2 gap-4">
                                            <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                    <img className="h-80 inline-block mx-2" src={paymentlink} />
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-start my-20">
                            <div className="col-xxl-8">
                                <div className='flex'>
                                    <div className="text-left my-5">
                                        <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Cross border</span></h2>
                                        <p className="lead fw-light mb-4">Worldwide customers</p>
                                        <p className="text-muted">More than 230 payment methods, expand to more than 15 countries.</p>
                                        <div className="d-flex justify-content-center fs-2 gap-4">
                                            <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                    <img className="h-80 inline-block mx-2" src={crossborder} />
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-end my-20 sm:justify-content-start">
                            <div className="col-xxl-8">
                                <div className='flex flex-row-reverse'>
                                    <div className="text-right my-5">
                                        <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Local currency</span></h2>
                                        <p className="lead fw-light mb-4">No complex fees and taxes </p>
                                        <p className="text-muted">Get paid in your local currency, easy-to-understand.</p>
                                        <div className="d-flex justify-content-center fs-2 gap-4">
                                            <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                            <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                    <img className="h-80 inline-block mx-2" src={localcurrency} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; uflu.shop 2024</div></div>
                        <div className="col-auto">
                            <a className="small" href="#!">Privacy</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Terms</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
