import { uiSlice, calendarSlice, authSlice} from "./";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


export const store = configureStore({

    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer
       
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false
    })

});