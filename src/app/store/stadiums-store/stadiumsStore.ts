import { StadiumsByCountry } from '@/entities/stadium'
import {
  stadiumsJapan,
  stadiumsSouthKorea,
} from '@/entities/stadium/model/data/afc'
import {
  stadiumsMexico,
  stadiumsUSA,
} from '@/entities/stadium/model/data/concacaf'
import {
  stadiumsArgentina,
  stadiumsBrazil,
  stadiumsChile,
  stadiumsUruguay,
} from '@/entities/stadium/model/data/conmebol'
import {
  stadiumsEngland,
  stadiumsFrance,
  stadiumsGermany,
  stadiumsItaly,
  stadiumsSpain,
  stadiumsSweden,
  stadiumsSwitzerland,
} from '@/entities/stadium/model/data/uefa'

export const stadiumsStore: StadiumsByCountry = {
  Uruguay: stadiumsUruguay,
  Brazil: stadiumsBrazil,
  Argentina: stadiumsArgentina,
  Chile: stadiumsChile,
  'United States': stadiumsUSA,
  Mexico: stadiumsMexico,
  'Korea Republic': stadiumsSouthKorea,
  Japan: stadiumsJapan,
  England: stadiumsEngland,
  France: stadiumsFrance,
  Germany: stadiumsGermany,
  Italy: stadiumsItaly,
  Switzerland: stadiumsSwitzerland,
  Spain: stadiumsSpain,
  Sweden: stadiumsSweden,
}
