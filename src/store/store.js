import { uiSlice, calendarSlice} from "./";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


export const store = configureStore({

    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
       
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false
    })

});