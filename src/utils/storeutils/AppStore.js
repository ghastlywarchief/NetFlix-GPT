import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice"
import configReducer from "./slices/configSlice"
import gptSearchReducer from "./slices/gptsearchToggleSlice"

const AppStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            appConfig: configReducer,
            gptSearch: gptSearchReducer,
        },
    }
);

export default AppStore;