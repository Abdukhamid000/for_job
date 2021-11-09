import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    text: "",
    isOpen: false
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        fill: (state, action) => {
            state.text = action.payload
        },
        setModal: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const {fill, setModal} = modalSlice.actions
export default modalSlice.reducer