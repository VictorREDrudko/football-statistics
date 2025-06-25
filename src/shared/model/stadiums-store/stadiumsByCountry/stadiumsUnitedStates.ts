import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'United States'

export const stadiumsUSA: StadiumsData = {
  rose: new Stadium(
    {
      location: { city: 'Pasadena, California', country },
      names: [{ name: 'Rose Bowl', period: '1922-p.t.' }],
    },
    true,
    '92 542',
    '1922',
    ['1928', '1949', '1972', '1993', '2011', '2017'],
    ['UCLA Bruins (1982-2021)', 'Rose Bowl Game'],
    []
  ),

  stanford: new Stadium(
    {
      location: { city: 'Stanford, California', country },
      names: [
        { name: 'Stanford Stadium (original)', period: '1921-2005' },
        { name: 'Stanford Stadium', period: '2006-p.t.' },
      ],
    },
    true,
    '50 424',
    '1921',
    ['1927', '1936', '1960', '2006'],
    ['Stanford Cardinal'],
    []
  ),

  pontiac: new Stadium(
    {
      location: { city: 'Pontiac, Michigan', country },
      names: [{ name: 'Pontiac Silverdome', period: '1975-2017' }],
    },
    false,
    '82 000',
    '1975',
    ['1985', '1993'],
    ['Detroit Lions (1975-2001)', 'Detroit Pistons (1978-1988)'],
    []
  ),

  giants: new Stadium(
    {
      location: { city: 'East Rutherford, New Jersey', country },
      names: [{ name: 'Giants Stadium', period: '1976-2010' }],
    },
    false,
    '80 242',
    '1976',
    ['1985', '1996'],
    ['New York Giants', 'New York Jets', 'NY/NJ MetroStars'],
    []
  ),

  cotton: new Stadium(
    {
      location: { city: 'Dallas, Texas', country },
      names: [
        { name: 'Cotton Bowl (original)', period: '1930-2008' },
        { name: 'Cotton Bowl Stadium', period: '2009-p.t.' },
      ],
    },
    true,
    '92 100',
    '1930',
    ['1936', '1949', '1968', '1994', '2008', '2019'],
    ['Cotton Bowl Classic', 'FC Dallas (2003-2005)'],
    []
  ),

  soldier: new Stadium(
    {
      location: { city: 'Chicago, Illinois', country },
      names: [
        { name: 'Soldier Field (original)', period: '1924-2001' },
        { name: 'Soldier Field', period: '2003-p.t.' },
      ],
    },
    true,
    '61 500',
    '1924',
    ['1954', '1978', '2003', '2019'],
    ['Chicago Bears', 'Chicago Fire (1998-2005)'],
    []
  ),

  citrus: new Stadium(
    {
      location: { city: 'Orlando, Florida', country },
      names: [
        { name: 'Orlando Stadium', period: '1936-1976' },
        { name: 'Citrus Bowl Stadium', period: '1977-2014' },
        { name: 'Camping World Stadium', period: '2014-p.t.' },
      ],
    },
    true,
    '65 000',
    '1936',
    ['1977', '1989', '2001', '2014'],
    ['Orlando City SC (2011-2016)'],
    []
  ),

  foxboro: new Stadium(
    {
      location: { city: 'Foxborough, Massachusetts', country },
      names: [{ name: 'Foxboro Stadium', period: '1971-2001' }],
    },
    false,
    '60 292',
    '1971',
    ['1985', '1991'],
    ['New England Patriots', 'New England Revolution (1996-2001)'],
    []
  ),

  kennedy: new Stadium(
    {
      location: { city: 'Washington, D.C.', country },
      names: [
        { name: 'D.C. Stadium', period: '1961-1968' },
        { name: 'Robert F. Kennedy Memorial Stadium', period: '1969-2019' },
      ],
    },
    false,
    '45 423',
    '1961',
    ['1969', '1982', '1996', '2008'],
    ['Washington Redskins', 'D.C. United (1996-2017)'],
    []
  ),
}
