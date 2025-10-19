import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'
import {
  themeSlice,
  languageSlice,
  startPageSlice,
  aboutProjectSlice,
  headerMenuSlice,
  nationalTeamsSlice,
  stadiumsSlice,
} from './model/slices'

export const store = configureStore({
  reducer: {
    [themeSlice.reducerPath]: themeSlice.reducer,
    [languageSlice.reducerPath]: languageSlice.reducer,
    [startPageSlice.reducerPath]: startPageSlice.reducer,
    [aboutProjectSlice.reducerPath]: aboutProjectSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [nationalTeamsSlice.name]: nationalTeamsSlice.reducer,
    [stadiumsSlice.name]: stadiumsSlice.reducer,
    [headerMenuSlice.name]: headerMenuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
