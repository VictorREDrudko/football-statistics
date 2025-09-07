import { createSlice } from '@reduxjs/toolkit'
import {
  stadiumsArgentina,
  stadiumsBrazil,
  stadiumsChile,
  stadiumsEngland,
  stadiumsFrance,
  stadiumsGermany,
  stadiumsItaly,
  stadiumsJapan,
  stadiumsMexico,
  stadiumsSouthKorea,
  stadiumsSpain,
  stadiumsSweden,
  stadiumsSwitzerland,
  stadiumsUruguay,
  stadiumsUSA,
} from '@/entities/stadium'
import { StadiumsState } from '../types'

const initialState: StadiumsState = {
  stadiumsData: {
    Japan: stadiumsJapan,
    'Korea Republic': stadiumsSouthKorea,
    Mexico: stadiumsMexico,
    'United States': stadiumsUSA,
    Argentina: stadiumsArgentina,
    Brazil: stadiumsBrazil,
    Chile: stadiumsChile,
    Uruguay: stadiumsUruguay,
    England: stadiumsEngland,
    France: stadiumsFrance,
    Germany: stadiumsGermany,
    Italy: stadiumsItaly,
    Spain: stadiumsSpain,
    Sweden: stadiumsSweden,
    Switzerland: stadiumsSwitzerland,
  },
}

export const stadiumsSlice = createSlice({
  name: 'stadiums',
  initialState,
  reducers: {},
})

export default stadiumsSlice.reducer
