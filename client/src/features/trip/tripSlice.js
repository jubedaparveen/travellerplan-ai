import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const tripSlice = createSlice({
    name: 'trip',
    initialState: {
        travelPlan: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    extraReducers: builder => {
        builder
            .addCase(generatePlan.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(generatePlan.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.travelPlan = action.payload
                state.isError = false
            })
            .addCase(generatePlan.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export default tripSlice.reducer


// Generate Plan
export const generatePlan = createAsyncThunk("TRIP/GENERATE_PLAN", async (formData) => {
    try {
        const response = await axios.post('/api/plan', formData)
        console.log(response.data, "Response from generatePlan")
        return response.data
    } catch (error) {
        console.log(error, "Error in generatePlan")
    }
})

