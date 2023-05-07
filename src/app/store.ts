import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productListReducer from '../features/productList/productListSlice'

export const store = configureStore({
    reducer: {
        productList: productListReducer,
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
