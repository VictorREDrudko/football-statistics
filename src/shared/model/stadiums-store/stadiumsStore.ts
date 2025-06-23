import { stadiumsArgentina } from './stadiumsByCountry/stadiumsArgentina'
import { stadiumsBrazil } from './stadiumsByCountry/stadiumsBrazil'
import { stadiumsChile } from './stadiumsByCountry/stadiumsChile'
import { stadiumsEngland } from './stadiumsByCountry/stadiumsEngland'
import { stadiumsFrance } from './stadiumsByCountry/stadiumsFrance'
import { stadiumsGermany } from './stadiumsByCountry/stadiumsGermany'
import { stadiumsItaly } from './stadiumsByCountry/stadiumsItaly'
import { stadiumsJapan } from './stadiumsByCountry/stadiumsJapan'
import { stadiumsSouthKorea } from './stadiumsByCountry/stadiumsKoreaRepublic'
import { stadiumsMexico } from './stadiumsByCountry/stadiumsMexico'
import { stadiumsSpain } from './stadiumsByCountry/stadiumsSpain'
import { stadiumsSweden } from './stadiumsByCountry/stadiumsSweden'
import { stadiumsSwitzerland } from './stadiumsByCountry/stadiumsSwitzerland'
import { stadiumsUSA } from './stadiumsByCountry/stadiumsUnitedStates'
import { stadiumsUruguay } from './stadiumsByCountry/stadiumsUruguay'
import { Stadiums } from './types'

export const stadiumsData: Partial<Stadiums> = {
  Uruguay: stadiumsUruguay,
  Italy: stadiumsItaly,
  France: stadiumsFrance,
  Brazil: stadiumsBrazil,
  Switzerland: stadiumsSwitzerland,
  Sweden: stadiumsSweden,
  Chile: stadiumsChile,
  England: stadiumsEngland,
  Mexico: stadiumsMexico,
  Germany: stadiumsGermany,
  Argentina: stadiumsArgentina,
  Spain: stadiumsSpain,
  "United States": stadiumsUSA,
  "Korea Republic": stadiumsSouthKorea,
  Japan: stadiumsJapan,
}

// noMatch: {
//   noPlace: {
//     title: '',
//     city: '',
//     country: '',
//   },
// },