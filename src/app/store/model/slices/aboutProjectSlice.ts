import { createSlice } from '@reduxjs/toolkit'
import { AboutProjectData, aboutProjectData } from '@/entities/about-project'

const initialState: AboutProjectData = aboutProjectData

export const aboutProjectSlice = createSlice({
  name: 'about-project',
  initialState,
  reducers: {},
})

export default aboutProjectSlice.reducer
