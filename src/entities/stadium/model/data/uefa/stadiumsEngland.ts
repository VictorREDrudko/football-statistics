import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'
const country: Country = 'England'

export const stadiumsEngland: StadiumsData = {
  wembley: new StadiumEntity(
    { city: 'London', country },
    [
      { name: 'Wembley Stadium (original)', period: '1923-2000' },
      { name: 'Wembley Stadium (new)', period: '2007-p.t.' },
    ],
    true,
    '90 000',
    '1923',
    ['1963', '2007'],
    ['England national team']
  ),

  city: new StadiumEntity(
    { city: 'London', country },
    [{ name: 'White City Stadium', period: '1908-1985' }],
    false,
    '68 000',
    '1908',
    ['1931'],
    []
  ),

  oldTrafford: new StadiumEntity(
    { city: 'Manchester', country },
    [{ name: 'Old Trafford', period: '1910-p.t.' }],
    true,
    '74 310',
    '1910',
    ['1949', '1996', '2006'],
    ['Manchester United']
  ),

  goodison: new StadiumEntity(
    { city: 'Liverpool', country },
    [{ name: 'Goodison Park', period: '1892-p.t.' }],
    true,
    '39 414',
    '1892',
    ['1926', '1961', '1994'],
    ['Everton']
  ),

  villa: new StadiumEntity(
    { city: 'Birmingham', country },
    [{ name: 'Villa Park', period: '1897-p.t.' }],
    true,
    '42 682',
    '1897',
    ['1913', '1976', '1994', '2000'],
    ['Aston Villa']
  ),

  hillsborough: new StadiumEntity(
    { city: 'Sheffield', country },
    [{ name: 'Hillsborough Stadium', period: '1899-p.t.' }],
    true,
    '39 732',
    '1899',
    ['1913', '1966', '1989', '1996'],
    ['Sheffield Wednesday']
  ),

  roker: new StadiumEntity(
    { city: 'Sunderland', country },
    [{ name: 'Roker Park', period: '1898-1997' }],
    false,
    '42 000',
    '1898',
    ['1929', '1952', '1980'],
    ['Sunderland (historical)']
  ),

  ayresome: new StadiumEntity(
    { city: 'Middlesbrough', country },
    [{ name: 'Ayresome Park', period: '1903-1995' }],
    false,
    '40 000',
    '1903',
    ['1927', '1957', '1986'],
    ['Middlesbrough (historical)']
  ),
}
