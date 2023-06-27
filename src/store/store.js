import { uiSlice, calendarSlice} from "./";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({

    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
       
    }

});