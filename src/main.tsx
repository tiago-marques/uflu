import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './ErrorPage'
import User from './routes/User'
import { ProductList } from './features/productList/ProductList'
import { Landing } from './features/landing/Landing'
import { Checkout } from './features/checkout/Checkout'
import UserProduct from './routes/UserProduct'
import { Merchant } from './features/merchant/Merchant'
import { Dashboard } from './features/dashboard/Dashboard'

const router = (user: string) => {
    if (!!user) {
        return createBrowserRouter([
            {
                path: '/',
                element: <Root />,
                children: [
                    {
                        path: '',
                        element: <User user={user} />,
                        children: [
                            {
                                path: '',
                                element: <ProductList />,
                            },
                        ],
                    },
                    {
                        path: 'admin',
                        element: <Dashboard />,
                        children: [
                            {
                                path: '',
                                element: <User user={user} sidebar />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'shop/:item',
                element: <UserProduct user={user} />,
                children: [
                    {
                        path: '',
                        element: <Checkout />,
                    },
                ],
            },
        ])
    }

    return createBrowserRouter([
        {
            path: '/',
            element: <Landing />,
            errorElement: <ErrorPage />
        },
    ])
}

const user =
    window.location.host.split('.').length > 1 &&
        window.location.host.split('.')[0] != 'uflu'
        ? window.location.host.split('.')[0]
        : ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router(user)} />
        </Provider>
    </React.StrictMode>
)
