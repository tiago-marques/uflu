import hero from '../../assets/landing-opaque.svg'
import links from '../../assets/links.svg'
import dropshipping from '../../assets/dropshipping.svg'
import worldmedias from '../../assets/worldmedias.svg'
import full from '../../assets/full.svg'

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
                        <a className="navbar-brand" href="index.html">
                            <img className="h-16" src={full} alt="..." />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="resume.html">Resume</a></li>
                                <li className="nav-item"><a className="nav-link" href="projects.html">Projects</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">
                                <div className="text-center text-xxl-start">
                                    <div className="badge bg-gradient-badge-primary-to-secondary text-white mb-4"><div className="text-uppercase">Simple &middot; Social &middot; Sales</div></div>
                                    <div className="fs-3 fw-light text-muted">Transform your business to</div>
                                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Social Media eCommerce</span></h1>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                        <a className="btn btn-outline-primary btn-lg py-3 px-5 fs-6 fw-bolder" href="projects.html">
                                            <b>Log in</b> with
                                            <div className='h-6 inline-block mx-2'>
                                                <img className='h-6 inline-block mx-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png' />
                                                <img className='h-6 inline-block mx-2' src='https://static.wikia.nocookie.net/tiktok/images/e/eb/TikTok_Logo.png' />
                                                <img className='h-6 inline-block mx-2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUAAAD////Ly8vi4uKOjo7d3d3m5ub7+/v09PTQ0NDx8fHu7u739/fr6+urq6tqamq7u7sqKiqwsLCUlJTFxcVWVlY5OTlJSUl9fX1zc3MODg5BQUEvLy9SUlIYGBjV1dWgoKBeXl4gICCRkZFcXFyGhoajo6M0NDQTExMiIiIrKys+Pj5vb29lZWXV7mHbAAAJk0lEQVR4nO2d61YUOxCFEVEu4gW8g+IMisJR3//1zuLo4BS1d6qSVNJxnXy/e7o7PZ3s7KpKemdnMplMJpPJZDKZTCaTyWQy6c6zw90aDn+2vb2T5O0dPnOc4sODSi6atvBJ8trHl55zPK9s4aOWDXyUvvY331meVTbR86YU8ip95dfe8xgPyuR5qwYaz/69+0Rnx5VNvGnTwL30VV9mnOp1ZQsfNmmgMUCcZp3sZWUT867m4236kruZp9utbOKP8Aae7CcvmP/aHFU28SS6hU+Tlzs6yz7heWULHwc30BjfPxSc8qqyibFdMUoIBS8qm/gusIFhQihJv/k2JW8OxnifcoRQ8K2yhWFdMVQIBe8rm/gipoHBQig4rWxiSFc0hLDSypAx+vFDBT7wTUAL047wqPLsl/j5rfSReOR9Wnn9HUsI96uHs5/4xGBS9hge+Kr2Bgwh/Fh7/p2dFT7zP+pAEv24qrt8IyEUfIKnBkpARt7zmosbjvBzzbn/gO0wUAI88j6puHQ7IRR8xKcHShDdFVsKoeAzvoBWghN84F7hdcMdIQfbYfD6/cD38rbssmmLWiuEEiy64PXDXbHsZgwhdIZGnXzHVwGvH57blPSY9kIoeOe9zCU+MH9Y7yGEAjwpO9AHkgE+95EHhka9YCU41Afih3+cd7VOQiggdnilj8QjBHgWnG5CKCBKsFYHXrj9CKOjEAqwEuzrdOEa35g/HtbWESbArx/w2F/hgcfeoG1rR8ghdhh0e+xHPvku01kIBWt8Ta1NZxVdsbsQCogd1u/NF3ygHpYUCwihAL9+IBqDnwUYlu6xhBBK3Hb4EB5ohf6WEUIBscMgGoOfxdfk2W8WEkIBscM6GkOeRbKgaDEhFGA7DK5OMuWJrhhTLFMPftCgi+CuyF81I7NeliMsgWSHwTh+AA9k46EhhJHpSAuSzdPPmIyMuIphaSEUYDsM5p1kWEJVDIYQBiXq3GA7DOaduGuBgLkhhFnuMgKSowBihyOC6h+5STcwurDDAclR6JI98t/cnz+nhfDguk+rBCQ7rEv2yLAktW0UIRTgwCgQO2z3xGTdEMIvvdokIXYYjHn4Ddw60KgW6CmEApId1vdDZgh3BxpCuOrYpnvgaAxISZGA+e8DSQxvQ28hFGA7DFJSqa5oCKEzttMK3BVBSgrXj90eSFKOGxYQQgEpltYpKRIwvzKXTywhhAJiAXVGlHTFc0MIIwqOKsFKBlJSRaWcjtBce/C8E0yU8WQ9yWJCKHDb4fzlVKvujcG47XBuKeeiQijAYrevR8G8Us6FhVCAxQ7EfnO64tJCKCA9TK9gM2zuNu5MXB/cdtiYgm4xgBAKSA/T6zm9KxsXcoQJ3HbYt7JxDCEUkB6mY78Xngauut+/A7cdJgduM44QCogd1jEksyuOJIQCd3bY6IpDCaGAFCdoO0wKin4zmBAKiB3W2eF1qoWjCaHAbYdJn71lPCEU4IwosMO4zz4YUgglOCOqs8Okz3bOEZZAIoP6xklBUb88djEkfK3vnBQULR5as8F2GAQFcVdsui1KEDj+Ce68pKBoCEjsV995SUHRGJDYr7bD+QVFo0Bivzo7XFbbNwI44ATsMJbPhjsURUHSSdoOE/lstkNRHKT4R0/JiHyGb4sSD3G52g7jxE6fMtI6sMsFdhgndjrUOtfitsMksdO4ID8CMrXW2WGS2Gm4aiQKsm5B22E8kx03WvMHtx02C4qGBeu5zg6/wf/28HY/ww6Tmewy5XpZkEFEB5uabYvSHJId1hFRXlA0Ot7scJttUXpA7LB2D6Qrfl/gnjNx22HcFXstA6oAiyKyw412KGoNLfXSU5a/syuSmdstesrSYoei1pBO+As9ZYncFqUP61QDURotbluUPpDp5h16ykLKHUp3KGrNhbmdtB4nSXyncIei1jhq2PQ4ieM7wHENAM2Bpv+cgG1ROuGredZ/DikoGi9zmhBC488hBUVN98IoICmExp9DtkVZoBUJ1u4GIjv8F3RFsvMZRue1r3GodaCuaAuhQNvh4asYcrfI1nYYj1PDlIO5hFCg7XDVDkWtKVn8o5Np+EVfdW8NwBBCfOfaDpMiwAGK3gwhPCULFrUdxlUMyxcUrdMNPKRHaDs8ZhWD4Qj/y+yS11hH8EcsKLpOC+HBr9HeWyw9YkGR4Qg3OU/8HLQdHq+gyBDCuykJ+XN0rGK0rmgI4VZinuxZo+3wWAVFhhCKebN37fBQBUWmEAq8a4fJv93ok2dJiB1g90781Uqdd5iCIo8QCtzZ4UEKiiwhBD/B45KelQ1SUGQIIaw48GaHyb+tv67REpYj/A0Ok7nXDg9QUOQXQoF77TD+tzt2xRwhFJC1w8oOk2GsW1fME0IBDhvq949colNtn/E1z2SU8xr/Rtth3A/6dMVsIRSs8a+0HcaDdZfaPjw33mBmxbx2mAy8HWr7nI6Q491Kiwy8zdebFgmhxGuH8cDburbP2IzFNZwTg6TtMK5iaNsVjS8GOzMpZMWFssNklUrLgiJjxyD3nAPPyvQgRaoY2hUUGUKYUQSDy7y1kuIqhppPniUxvlCa41GJpq7UgXgO1Ki27yzya1pkVqbsMNmLoU1BEfkk54bMKSOxwypfSKoYWhQUBQihAM8ctB3GVQwNavsihFBApEDbYTwHCq/tM4Sw5LOSRAqUHSYLxoK+ZLkhSggFZMGissMkbBlaUBQnhAKvHcZ2JLK2z9jfsThYS6po9MSzdVc0hLBihkHeP+UBz7AnDSsoSgth1de0iB1WHpBk54IKioy90+s6PFZZ/VrgsfwgpKDIEEL8YQ4/+P3TE0/8nCMKigwhrJ4gEjusPSB+FKva61tCGJCb9dph8ihq91VuJIQCrx3Gj6Jy82/DEQYVEOAkhbbD+FFU3UQ7IRQQO6zVDt9OTUGRIYRhe3V47TB5FOUFRYYQBppQ8qGlvXtc4Ynsvt721ochhKH1HwV7t29R2BVbC6HA+ByERZFotRdCgfHxLouCF8oQwvhwnnfDaEL2qNdHCAW+DaMZuR61kxAKiB32khlI6SWEgnVVC/OifUZotNXyTu/iN0KGE+8phALjyRr4qxi6CqEkXSJg4U2dGsUyTat1jQ9dWfiqGLoLocD4GpuFp4rBKJZpXlJufETewFHFQAKTG5olX/+Q/pyXhf2Kpef4jYRQYO3KYGBVMSwkhAL/imlIuorBqBrttCKg6FNmdyTzNcacottmHHV2OBX/G2XN7WQymUwmk8lkMplMJpPJ/4x/ARsqfOxiDM9EAAAAAElFTkSuQmCC' />
                                                <img className='h-6 inline-block mx-2' src='https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg' />
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
                                    <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                                    <p className="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
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
