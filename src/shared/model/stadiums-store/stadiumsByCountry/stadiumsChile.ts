import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsChile: CountryStadiums = {
  country: 'Chile',
  stadiums: {
    nacional: new Stadium(
      [{ title: 'Estadio Nacional', period: '1938-p.t.' }],
      'Santiago',
      '48 665',
      ['1938', '1962', '2008', '2010'],
      {
        isActive: true,
        homeTeam: ['Chile national team', 'Universidad de Chile', 'Colo-Colo'],
        imageUrl: '',
      }
    ),

    sausalito: new Stadium(
      [{ title: 'Estadio Sausalito', period: '1929-p.t.' }],
      'Viña del Mar',
      '23 423',
      ['1929', '1962', '2015'],
      {
        isActive: true,
        homeTeam: ['Everton de Viña del Mar'],
        imageUrl: '',
      }
    ),

    teniente: new Stadium(
      [{ title: 'Estadio El Teniente', period: '1945-p.t.' }],
      'Rancagua',
      '15 252',
      ['1945', '1962', '2014'],
      {
        isActive: true,
        homeTeam: ['O’Higgins'],
        imageUrl: '',
      }
    ),

    dittborn: new Stadium(
      [{ title: 'Estadio Carlos Dittborn', period: '1962-p.t.' }],
      'Arica',
      '14 373',
      ['1962', '2016'],
      {
        isActive: true,
        homeTeam: ['San Marcos de Arica'],
        imageUrl: '',
      }
    ),
  },
}
