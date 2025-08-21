// import { baseApi } from '@/shared'
// import { configureStore } from '@reduxjs/toolkit'
// import aboutProjectReducer from '@entities/about/model/aboutProjectSlice'
// import historyFootballReducer from '@entities/history-football/model/historyFootballSlice'

// export const store = configureStore({
//   reducer: {
//     aboutProject: aboutProjectReducer,
//     historyFootball: historyFootballReducer,
//     [baseApi.reducerPath]: baseApi.reducer,
//     // другие редьюсеры
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
