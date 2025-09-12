import { configureStore } from "@reduxjs/toolkit";
import { newsApiSlice } from "./services/news/newsApiSlice";

export const store = configureStore({
  reducer: { [newsApiSlice.reducerPath]: newsApiSlice.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(newsApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
