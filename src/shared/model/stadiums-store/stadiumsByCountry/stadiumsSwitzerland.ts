import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Switzerland'

export const stadiumsSwitzerland: StadiumsData = {
  wankdorf: new Stadium(
    {
      location: { city: 'Bern', country },
      names: [
        { name: 'Wankdorf Stadium', period: '1925-2001' },
        { name: 'Stade de Suisse', period: '2005-p.t.' },
      ],
    },
    true,
    '32 000',
    '1925',
    ['1954', '2005'],
    ['BSC Young Boys'],
    []
  ),

  hardturm: new Stadium(
    {
      location: { city: 'Zürich', country },
      names: [{ name: 'Hardturm Stadium', period: '1929-2007' }],
    },
    false,
    '17 666',
    '1929',
    ['1941', '1958', '1985'],
    ['FC Zürich (1929-2007)'],
    []
  ),

  pontaise: new Stadium(
    {
      location: { city: 'Lausanne', country },
      names: [{ name: 'Stade Olympique de la Pontaise', period: '1954-2020' }],
    },
    false,
    '15 850',
    '1954',
    ['1984', '1998'],
    ['FC Lausanne-Sport (1954-2020)'],
    []
  ),

  jakob: new Stadium(
    {
      location: { city: 'Basel', country },
      names: [
        { name: 'St. Jakob Stadium', period: '1954-1998' },
        { name: 'St. Jakob-Park', period: '2001-p.t.' },
      ],
    },
    true,
    '38 512',
    '1954',
    ['2001'],
    ['FC Basel'],
    []
  ),

  charmilles: new Stadium(
    {
      location: { city: 'Geneva', country },
      names: [{ name: 'Charmilles Stadium', period: '1930-2002' }],
    },
    false,
    '9 250',
    '1930',
    ['1947', '1981'],
    ['Servette FC (1930-2002)'],
    []
  ),

  cornaredo: new Stadium(
    {
      location: { city: 'Lugano', country },
      names: [{ name: 'Stadio Cornaredo', period: '1951-p.t.' }],
    },
    true,
    '6 390',
    '1951',
    ['1982', '2000', '2015'],
    ['FC Lugano'],
    []
  ),
}
