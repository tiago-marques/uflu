import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface State {
    hideHeader: boolean
}

const initialState: State = {
    hideHeader: false,
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        hideToolbar: (state, action: PayloadAction<boolean>) => {
            state.hideHeader = action.payload
        },
    },
})

export const { hideToolbar } = rootSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHeader = (state: RootState) => state.root.hideHeader

export default rootSlice.reducer
