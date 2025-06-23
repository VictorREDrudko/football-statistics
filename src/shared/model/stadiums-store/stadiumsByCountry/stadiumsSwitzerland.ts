import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsSwitzerland: CountryStadiums = {
  country: 'Switzerland',
  stadiums: {
    wankdorf: new Stadium(
      [
        { title: 'Wankdorf Stadium', period: '1925-2001' },
        { title: 'Stade de Suisse', period: '2005-p.t.' },
      ],
      'Bern',
      '32 000',
      ['1925', '1954', '2005'],
      {
        isActive: true,
        homeTeam: ['BSC Young Boys'],
        imageUrl: '',
      }
    ),

    hardturm: new Stadium(
      [{ title: 'Hardturm Stadium', period: '1929-2007' }],
      'Zürich',
      '17 666',
      ['1929', '1941', '1958', '1985'],
      {
        isActive: false,
        homeTeam: ['FC Zürich (1929-2007)'],
        imageUrl: '',
      }
    ),

    pontaise: new Stadium(
      [{ title: 'Stade Olympique de la Pontaise', period: '1954-2020' }],
      'Lausanne',
      '15 850',
      ['1954', '1984', '1998'],
      {
        isActive: false,
        homeTeam: ['FC Lausanne-Sport (1954-2020)'],
        imageUrl: '',
      }
    ),

    jakob: new Stadium(
      [
        { title: 'St. Jakob Stadium', period: '1954-1998' },
        { title: 'St. Jakob-Park', period: '2001-p.t.' },
      ],
      'Basel',
      '38 512',
      ['1954', '2001'],
      {
        isActive: true,
        homeTeam: ['FC Basel'],
        imageUrl: '',
      }
    ),

    charmilles: new Stadium(
      [{ title: 'Charmilles Stadium', period: '1930-2002' }],
      'Geneva',
      '9 250',
      ['1930', '1947', '1981'],
      {
        isActive: false,
        homeTeam: ['Servette FC (1930-2002)'],
        imageUrl: '',
      }
    ),

    cornaredo: new Stadium(
      [{ title: 'Stadio Cornaredo', period: '1951-p.t.' }],
      'Lugano',
      '6 390',
      ['1951', '1982', '2000', '2015'],
      {
        isActive: true,
        homeTeam: ['FC Lugano'],
        imageUrl: '',
      }
    ),
  },
}
