import React from 'react'
import './Login.css'

// import FacebookLogin from 'react-facebook-login'
// import GoogleLogin from 'react-google-login'
import InstagramLogin from 'react-instagram-login-button'
// import TwitterLogin from 'react-twitter-login'

//redux
import { useAppSelector, useAppDispatch } from '../../app/hooks'

const login = ({ user, provider, error }) => async dispatch => {
    try {
        dispatch(setLoading(true))
        dispatch(setProvider(provider))
        if (error) throw error
        dispatch(loginSlice.actions.loginSuccess(user))
    } catch (err) {
        console.log(err.message)
        dispatch(loginSlice.actions.loginFailed())
    } finally {
        // dispatch(setLoading(false))
    }
}

const Login = () => {
    const dispatch = useAppDispatch()

    const thirdPartyLoginHandler = ({ response, provider, error }) => {
        // console.log(" response>>", response)
        // console.log(" provider>>", provider)
        // console.log(" error>>", error)
        dispatch(login({ user: response, provider, error }))
    }

    const responseTwitter = (err, data) => {
        // console.log(err, data);
        if (err)
            return thirdPartyLoginHandler({
                error: true,
                provider: 'twitter',
                response: {},
            })

        thirdPartyLoginHandler({
            error: false,
            provider: 'twitter',
            response: data,
        })
    }

    const responseFacebook = response => {
        // console.log('response >>>', response);
        if (
            response.status === 'unknown' ||
            response.status === undefined ||
            response.error
        )
            return thirdPartyLoginHandler({
                error: true,
                provider: 'facebook',
                response: {},
            })

        thirdPartyLoginHandler({ error: false, provider: 'facebook', response })
    }

    const successResponseInstagram = response =>
        thirdPartyLoginHandler({
            error: false,
            provider: 'instagram',
            response,
        })
    const failResponseInstagram = err =>
        thirdPartyLoginHandler({
            error: true,
            provider: 'instagram',
            responce: {},
        })

    const successResponseGoogle = response => {
        thirdPartyLoginHandler({
            error: false,
            provider: 'google',
            response: response.profileObj,
        })
    }
    const failResponseGoogle = response =>
        thirdPartyLoginHandler({
            error: true,
            provider: 'google',
            response: {},
        })

    return (
        <InstagramLogin
            clientId='169008989469536'
            onSuccess={successResponseInstagram}
            onFailure={failResponseInstagram}
            redirectUri={'https://uflu.shop/'}
            scope={
                'user_profile,user_media,instagram_graph_user_media'
            }
            cssClass='mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full py-1 px-2  focus:outline-none  transform transition hover:scale-105 duration-300 ease-in-out'
        >
            <img
                className='h-4 w-4 me-2 inline-flex'
                src='https://static.cdninstagram.com/rsrc.php/v3/ys/r/aM-g435MtEX.png'
                alt=''
            />
            Conectar com Instagram
            {/* </button> */}
        </InstagramLogin>
    )
}

export default Login
