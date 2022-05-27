import { configureStore } from "@reduxjs/toolkit";
import useGame from "../feature/UseGame";

export const Store = configureStore({
    reducer: {
        game: useGame
    }
})

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;