
import { configureStore } from '@reduxjs/toolkit'
import trip from "./trip/tripSlice"

const store = configureStore({
    reducer: {
        trip
    }
})


export default store