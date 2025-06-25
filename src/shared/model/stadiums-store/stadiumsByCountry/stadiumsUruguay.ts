import { StadiumsData } from '../types'
import { Stadium } from '../class-stadium/Stadium'
import { Country } from '../../national-teams-store/teams/classTeam/types'

const country: Country = 'Uruguay'

export const stadiumsUruguay: StadiumsData = {
  centenario: new Stadium(
    {
      location: { city: 'Montevideo', country },
      names: [{ name: 'Estadio Centenario', period: '1930-p.t.' }],
    },
    true,
    '60 235',
    '1930',
    ['1983', '2005', '2011', '2021'],
    ['Uruguay national team', 'Peñarol (selected matches)'],
    []
  ),

  parqueCentral: new Stadium(
    {
      location: { city: 'Montevideo', country },
      names: [{ name: 'Estadio Gran Parque Central', period: '1900-p.t.' }],
    },
    true,
    '34 000',
    '1900',
    ['1911', '1944', '1974', '2005', '2022'],
    ['Club Nacional de Football (main)', 'Uruguay national team (occasional)'],
    []
  ),

  pocitos: new Stadium(
    {
      location: { city: 'Montevideo', country },
      names: [{ name: 'Estadio Pocitos', period: '1921-1933' }],
    },
    false,
    '10 000',
    '1921',
    [],
    ['CA Peñarol (1921-1933)', 'Uruguay national team (1920s)'],
    []
  ),
}
