import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsEngland: CountryStadiums = {
  country: 'England',
  stadiums: {
    wembley: new Stadium(
      [
        { title: 'Wembley Stadium (original)', period: '1923-2000' },
        { title: 'Wembley Stadium (new)', period: '2007-p.t.' },
      ],
      'London',
      '90 000',
      ['1923', '1963', '2007'],
      {
        isActive: true,
        homeTeam: ['England national team'],
        imageUrl: '',
      }
    ),

    city: new Stadium([{ title: 'White City Stadium', period: '1908-1985' }], 'London', '68 000', ['1908', '1931'], {
      isActive: false,
      homeTeam: [],
      imageUrl: '',
    }),

    oldTrafford: new Stadium(
      [{ title: 'Old Trafford', period: '1910-p.t.' }],
      'Manchester',
      '74 310',
      ['1910', '1949', '1996', '2006'],
      {
        isActive: true,
        homeTeam: ['Manchester United'],
        imageUrl: '',
      }
    ),

    goodison: new Stadium(
      [{ title: 'Goodison Park', period: '1892-p.t.' }],
      'Liverpool',
      '39 414',
      ['1892', '1926', '1961', '1994'],
      {
        isActive: true,
        homeTeam: ['Everton'],
        imageUrl: '',
      }
    ),

    villa: new Stadium(
      [{ title: 'Villa Park', period: '1897-p.t.' }],
      'Birmingham',
      '42 682',
      ['1897', '1913', '1976', '1994', '2000'],
      {
        isActive: true,
        homeTeam: ['Aston Villa'],
        imageUrl: '',
      }
    ),

    hillsborough: new Stadium(
      [{ title: 'Hillsborough Stadium', period: '1899-p.t.' }],
      'Sheffield',
      '39 732',
      ['1899', '1913', '1966', '1989', '1996'],
      {
        isActive: true,
        homeTeam: ['Sheffield Wednesday'],
        imageUrl: '',
      }
    ),

    roker: new Stadium(
      [{ title: 'Roker Park', period: '1898-1997' }],
      'Sunderland',
      '42 000',
      ['1898', '1929', '1952', '1980'],
      {
        isActive: false,
        homeTeam: ['Sunderland (historical)'],
        imageUrl: '',
      }
    ),

    ayresome: new Stadium(
      [{ title: 'Ayresome Park', period: '1903-1995' }],
      'Middlesbrough',
      '40 000',
      ['1903', '1927', '1957', '1986'],
      {
        isActive: false,
        homeTeam: ['Middlesbrough (historical)'],
        imageUrl: '',
      }
    ),
  },
}
