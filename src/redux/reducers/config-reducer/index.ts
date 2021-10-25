import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IConfig, IIncrementAction, IVerse } from './model';

const initialState: IConfig = {
    value: 0,
    verses: {}
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
        },
        favouriteVerse: (state, { payload }: PayloadAction<IVerse>) => {
            let { verse_id } = payload || ''
            console.log('verse_id: ', verse_id)
            if (verse_id && !state.verses[verse_id]) {
                state.verses[verse_id] = payload
            } else if (verse_id && state.verses[verse_id]) {
                state.verses[verse_id] = false
            }
        }
    }
})
export default counterSlice.reducer
export const { incremented, decremented, favouriteVerse } = counterSlice.actions
console.log(incremented)

// Selectors
export const getCounterValue = (state: { counter: IConfig }) => state.counter?.value
export const getVerses = (state: any) => state.counter.verses