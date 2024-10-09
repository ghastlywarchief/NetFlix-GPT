import { createSlice } from "@reduxjs/toolkit";

const gptSearchToggleSlice = createSlice({
    name: "gptSearch",
    initialState: {
        gptSearchToggle: false,
    },
    reducers: {
        setGPTSearchToggle: (state) => {
            state.gptSearchToggle = !state.gptSearchToggle;
        }
    }
})

export default gptSearchToggleSlice.reducer;
export const {setGPTSearchToggle} = gptSearchToggleSlice.actions;