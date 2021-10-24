import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IConfig, IIncrementAction } from './model';

const initialState: IConfig = {
    value: 0
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state, { payload }: PayloadAction<IIncrementAction>) => {

            state.value += payload.value
        },
        decremented: (state, { payload }: PayloadAction<IIncrementAction>) => {
            state.value -= payload.value
        }
    }
})
export default counterSlice.reducer
export const { incremented, decremented } = counterSlice.actions
console.log(incremented)

// Selectors
export const getCounterValue = (state: { counter: IConfig }) => state.counter?.value