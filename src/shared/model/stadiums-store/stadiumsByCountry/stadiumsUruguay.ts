import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsUruguay: CountryStadiums = {
  country: 'Uruguay',
  stadiums: {
    centenario: new Stadium(
      [
        {
          title: 'Estadio Centenario',
          period: '1930-p.t.',
        },
      ],
      'Montevideo',
      '60 235',
      ['1930', '1983', '2005', '2011', '2021'], 
      {
        isActive: true,
        homeTeam: [
          'Uruguay national team',
          'Montevideo City Torque (2020-2023)',
          'Peñarol (selected matches)'
        ],
        imageUrl: '',
      }
    ),

    parqueCentral: new Stadium(
      [
        {
          title: 'Estadio Gran Parque Central',
          period: '1900-p.t.',
        },
      ],
      'Montevideo',
      '34 000', 
      ['1900', '1911', '1944', '1974', '2005', '2022'], 
      {
        isActive: true,
        homeTeam: [
          'Club Nacional de Football (main)',
          'Uruguay national team (occasional)'
        ],
        imageUrl: '',
      }
    ),

    pocitos: new Stadium(
      [
        {
          title: 'Estadio Pocitos',
          period: '1921-1933',
        },
      ],
      'Montevideo',
      '10 000', 
      ['1921'],
      {
        isActive: false,
        homeTeam: [
          'CA Peñarol (1921-1933)',
          'Uruguay national team (1920s)'
        ],
        imageUrl: '',
      }
    ),
  },
}