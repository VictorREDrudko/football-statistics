import { configureStore } from '@reduxjs/toolkit'
import aboutProjectReducer from '@entities/about/model/aboutProjectSlice'
import historyFootballReducer from '@entities/history-football/model/historyFootballSlice'
import { baseApi } from '@/shared/api'
import {
  headerMenuSlice,
  nationalTeamsSlice,
  stadiumsSlice,
} from './model/slices'

export const store = configureStore({
  reducer: {
    // aboutProject: aboutProjectReducer,
    // historyFootball: historyFootballReducer,
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
