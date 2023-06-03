import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productListReducer from '../features/productList/productListSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'
import rootReducer from '../routes/rootSlice'

export const store = configureStore({
    reducer: {
        root: rootReducer,
        productList: productListReducer,
        checkout: checkoutReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
