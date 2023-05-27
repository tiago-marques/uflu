import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchFilter } from './productListAPI'

export interface CounterState {
    filter: string
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
    filter: '',
    status: 'idle',
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const filterAsync = createAsyncThunk(
    'productList/fetchFilter',
    async (filter: string) => {
        const response = await fetchFilter(filter)
        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        filter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: builder => {
        builder
            .addCase(filterAsync.pending, state => {
                state.status = 'loading'
            })
            .addCase(filterAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.filter = action.payload
            })
            .addCase(filterAsync.rejected, state => {
                state.status = 'failed'
            })
    },
})

export const { filter } = productListSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFilter = (state: RootState) => state.productList.filter

export default productListSlice.reducer