import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://VictorREDrudko.github.io/football-statistics/',
    prepareHeaders: (headers) => {
      // Здесь можно добавить заголовки, например, токен авторизации
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: () => ({}),
  tagTypes: [],
})