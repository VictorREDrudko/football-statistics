import { NationalTeam } from '@/data/nationalTeamsData/type-nationalTeams'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nationalTeamApi = createApi({
  reducerPath: 'nationalTeamApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://VictorREDrudko.github.io/football-statistics/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['NationalTeams'],
  endpoints: (builder) => ({
    // Get all national teams
    getAllNationalTeams: builder.query<Record<string, NationalTeam>, void>({
      query: () => 'national-teams', // Adjust the endpoint URL as needed
      providesTags: ['NationalTeams'],
    }),
    
    // Get a specific national team by name
    getNationalTeamByName: builder.query<NationalTeam, string>({
      query: (name) => `national-teams/${name}`, // Adjust the endpoint URL as needed
      providesTags: (result, error, name) => [{ type: 'NationalTeams', id: name }],
    }),
    
    // Add a new national team
    addNationalTeam: builder.mutation<void, { name: string; data: NationalTeam }>({
      query: ({ name, data }) => ({
        url: `national-teams/${name}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['NationalTeams'],
    }),
    
    // Update a national team
    updateNationalTeam: builder.mutation<void, { name: string; data: Partial<NationalTeam> }>({
      query: ({ name, data }) => ({
        url: `national-teams/${name}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { name }) => [{ type: 'NationalTeams', id: name }],
    }),
    
    // Delete a national team
    deleteNationalTeam: builder.mutation<void, string>({
      query: (name) => ({
        url: `national-teams/${name}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['NationalTeams'],
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  useGetAllNationalTeamsQuery,
  useGetNationalTeamByNameQuery,
  useAddNationalTeamMutation,
  useUpdateNationalTeamMutation,
  useDeleteNationalTeamMutation,
} = nationalTeamApi