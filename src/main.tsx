import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import App from './App'
import { Topbar } from './features/topbar/Topbar'
import User from './routes/User'
import { ProductList } from './features/productList/ProductList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: (
                    <center>
                        <h1>Landing Page</h1>
                    </center>
                ),
            },
            {
                path: ':user',
                element: <User />,
                children: [
                    {
                        path: '',
                        element: <ProductList />,
                    },
                    {
                        path: 'admin',
                        element: (
                            <div className='flex flex-auto pl-6'>
                                <h1>Merchant Admin</h1>
                            </div>
                        ),
                    },
                    {
                        path: 'shop/:item',
                        element: (
                            <div className='flex flex-auto pl-6'>
                                <h1>Product</h1>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
