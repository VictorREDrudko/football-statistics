import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'England'

export const stadiumsEngland: StadiumsData = {
  wembley: new Stadium(
    {
      location: { city: 'London', country },
      names: [
        { name: 'Wembley Stadium (original)', period: '1923-2000' },
        { name: 'Wembley Stadium (new)', period: '2007-p.t.' },
      ],
    },
    true,
    '90 000',
    '1923',
    ['1963', '2007'],
    ['England national team'],
    []
  ),

  city: new Stadium(
    {
      location: { city: 'London', country },
      names: [{ name: 'White City Stadium', period: '1908-1985' }],
    },
    false,
    '68 000',
    '1908',
    ['1931'],
    [],
    []
  ),

  oldTrafford: new Stadium(
    {
      location: { city: 'Manchester', country },
      names: [{ name: 'Old Trafford', period: '1910-p.t.' }],
    },
    true,
    '74 310',
    '1910',
    ['1949', '1996', '2006'],
    ['Manchester United'],
    []
  ),

  goodison: new Stadium(
    {
      location: { city: 'Liverpool', country },
      names: [{ name: 'Goodison Park', period: '1892-p.t.' }],
    },
    true,
    '39 414',
    '1892',
    ['1926', '1961', '1994'],
    ['Everton'],
    []
  ),

  villa: new Stadium(
    {
      location: { city: 'Birmingham', country },
      names: [{ name: 'Villa Park', period: '1897-p.t.' }],
    },
    true,
    '42 682',
    '1897',
    ['1913', '1976', '1994', '2000'],
    ['Aston Villa'],
    []
  ),

  hillsborough: new Stadium(
    {
      location: { city: 'Sheffield', country },
      names: [{ name: 'Hillsborough Stadium', period: '1899-p.t.' }],
    },
    true,
    '39 732',
    '1899',
    ['1913', '1966', '1989', '1996'],
    ['Sheffield Wednesday'],
    []
  ),

  roker: new Stadium(
    {
      location: { city: 'Sunderland', country },
      names: [{ name: 'Roker Park', period: '1898-1997' }],
    },
    false,
    '42 000',
    '1898',
    ['1929', '1952', '1980'],
    ['Sunderland (historical)'],
    []
  ),

  ayresome: new Stadium(
    {
      location: { city: 'Middlesbrough', country },
      names: [{ name: 'Ayresome Park', period: '1903-1995' }],
    },
    false,
    '40 000',
    '1903',
    ['1927', '1957', '1986'],
    ['Middlesbrough (historical)'],
    []
  ),
}
