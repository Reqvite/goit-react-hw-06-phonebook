const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        contactsFilter (state, action) {
     return  state = action.payload
        }, 
    }
})


export const { contactsFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;