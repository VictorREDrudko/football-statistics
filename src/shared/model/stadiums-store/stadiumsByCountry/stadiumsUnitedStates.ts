import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsUSA: CountryStadiums = {
  country: 'United States',
  stadiums: {
    rose: new Stadium(
      [{ title: 'Rose Bowl', period: '1922-p.t.' }],
      'Pasadena, California',
      '92 542',
      ['1922', '1928', '1949', '1972', '1993', '2011', '2017'],
      {
        isActive: true,
        homeTeam: ['UCLA Bruins (1982-2021)', 'Rose Bowl Game'],
        imageUrl: '',
      }
    ),

    stanford: new Stadium(
      [
        { title: 'Stanford Stadium (original)', period: '1921-2005' },
        { title: 'Stanford Stadium', period: '2006-p.t.' },
      ],
      'Stanford, California',
      '50 424',
      ['1921', '1927', '1936', '1960', '2006'],
      {
        isActive: true,
        homeTeam: ['Stanford Cardinal'],
        imageUrl: '',
      }
    ),

    pontiac: new Stadium(
      [{ title: 'Pontiac Silverdome', period: '1975-2017' }],
      'Pontiac, Michigan',
      '82 000',
      ['1975', '1985', '1993'],
      {
        isActive: false,
        homeTeam: ['Detroit Lions (1975-2001)', 'Detroit Pistons (1978-1988)'],
        imageUrl: '',
      }
    ),

    giants: new Stadium(
      [{ title: 'Giants Stadium', period: '1976-2010' }],
      'East Rutherford, New Jersey',
      '80 242',
      ['1976', '1985', '1996'],
      {
        isActive: false,
        homeTeam: ['New York Giants', 'New York Jets', 'NY/NJ MetroStars'],
        imageUrl: '',
      }
    ),

    cotton: new Stadium(
      [
        { title: 'Cotton Bowl (original)', period: '1930-2008' },
        { title: 'Cotton Bowl Stadium', period: '2009-p.t.' },
      ],
      'Dallas, Texas',
      '92 100',
      ['1930', '1936', '1949', '1968', '1994', '2008', '2019'],
      {
        isActive: true,
        homeTeam: ['Cotton Bowl Classic', 'FC Dallas (2003-2005)'],
        imageUrl: '',
      }
    ),

    soldier: new Stadium(
      [
        { title: 'Soldier Field (original)', period: '1924-2001' },
        { title: 'Soldier Field', period: '2003-p.t.' },
      ],
      'Chicago, Illinois',
      '61 500',
      ['1924', '1954', '1978', '2003', '2019'],
      {
        isActive: true,
        homeTeam: ['Chicago Bears', 'Chicago Fire (1998-2005)'],
        imageUrl: '',
      }
    ),

    citrus: new Stadium(
      [
        { title: 'Orlando Stadium', period: '1936-1976' },
        { title: 'Citrus Bowl Stadium', period: '1977-2014' },
        { title: 'Camping World Stadium', period: '2014-p.t.' },
      ],
      'Orlando, Florida',
      '65 000',
      ['1936', '1977', '1989', '2001', '2014'],
      {
        isActive: true,
        homeTeam: ['Orlando City SC (2011-2016)'],
        imageUrl: '',
      }
    ),

    foxboro: new Stadium(
      [{ title: 'Foxboro Stadium', period: '1971-2001' }],
      'Foxborough, Massachusetts',
      '60 292',
      ['1971', '1985', '1991'],
      {
        isActive: false,
        homeTeam: ['New England Patriots', 'New England Revolution (1996-2001)'],
        imageUrl: '',
      }
    ),

    kennedy: new Stadium(
      [
        { title: 'D.C. Stadium', period: '1961-1968' },
        { title: 'Robert F. Kennedy Memorial Stadium', period: '1969-2019' },
      ],
      'Washington, D.C.',
      '45 423',
      ['1961', '1969', '1982', '1996', '2008'],
      {
        isActive: false,
        homeTeam: ['Washington Redskins', 'D.C. United (1996-2017)'],
        imageUrl: '',
      }
    ),
  },
}
