import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
// import { fetchFilter } from './productListAPI'

// import { createSelector } from "reselect";
// import axios from "axios";

export interface LoginState {
    provider: any
    isAuthenticated?: boolean
    loading: boolean
    user: any
    token?: string
}

const initialState: LoginState = {
    token: undefined,
    provider: null,
    isAuthenticated: undefined,
    loading: false,
    user: {},
}

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true
            state.user = action.payload
        },
        loginFailed: state => {
            state.user = {}
            state.isAuthenticated = false
        },
        setProvider: (state, { payload }) => {
            state.provider = payload
        },

        clearAuth: state => {
            state.provider = undefined
            state.token = undefined
            state.user = {}
            state.isAuthenticated = false
            state.loading = false
        },
        // // command - event
        // // addBug - bugAdded
        // resolveBug (command) - bugResolved (event)
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})

export const { setLoading, setProvider, clearAuth } = loginSlice.actions

export default loginSlice.reducer
