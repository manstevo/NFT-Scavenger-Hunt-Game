import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
    return configureStore({
        reducer: {},

        // Fix: middleware should be a function returning an array
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

        devTools: process.env.NODE_ENV !== "production",
    });
};
