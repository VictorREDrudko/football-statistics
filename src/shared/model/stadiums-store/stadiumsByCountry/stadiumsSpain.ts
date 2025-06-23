import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsSpain: CountryStadiums = {
  country: 'Spain',
  stadiums: {
    campNou: new Stadium(
      [{ title: 'Camp Nou', period: '1957-p.t.' }],
      'Barcelona',
      '99 354',
      ['1957', '1982', '1994', '2008', '2023'],
      {
        isActive: true,
        homeTeam: ['FC Barcelona'],
        imageUrl: '',
      }
    ),

    sarria: new Stadium([{ title: 'Estadi de Sarrià', period: '1923-1997' }], 'Barcelona', '44 000', ['1923', '1982'], {
      isActive: false,
      homeTeam: ['RCD Espanyol (historical)'],
      imageUrl: '',
    }),

    bernabeu: new Stadium(
      [{ title: 'Santiago Bernabéu', period: '1947-p.t.' }],
      'Madrid',
      '85 000',
      ['1947', '1982', '1994', '2006', '2023'],
      {
        isActive: true,
        homeTeam: ['Real Madrid'],
        imageUrl: '',
      }
    ),

    calderon: new Stadium(
      [{ title: 'Vicente Calderón', period: '1966-2019' }],
      'Madrid',
      '54 907',
      ['1966', '1982', '2011'],
      {
        isActive: false,
        homeTeam: ['Atlético Madrid (historical)'],
        imageUrl: '',
      }
    ),

    pizjuan: new Stadium(
      [{ title: 'Ramón Sánchez Pizjuán', period: '1958-p.t.' }],
      'Seville',
      '43 883',
      ['1958', '1982', '2016'],
      {
        isActive: true,
        homeTeam: ['Sevilla FC'],
        imageUrl: '',
      }
    ),

    villamarin: new Stadium(
      [{ title: 'Benito Villamarín', period: '1929-p.t.' }],
      'Seville',
      '60 721',
      ['1929', '1982', '2017', '2020'],
      {
        isActive: true,
        homeTeam: ['Real Betis'],
        imageUrl: '',
      }
    ),

    nuevo: new Stadium(
      [{ title: 'Estadio Manuel Martínez Valero', period: '1976-p.t.' }],
      'Elche',
      '33 732',
      ['1976', '2004'],
      {
        isActive: true,
        homeTeam: ['Elche CF'],
        imageUrl: '',
      }
    ),

    casanova: new Stadium(
      [
        { title: 'Estadio Luis Casanova', period: '1923-1994' },
        { title: 'Estadio Mestalla', period: '1994-p.t.' },
      ],
      'Valencia',
      '55 000',
      ['1923', '1957', '1982', '2001', '2013'],
      {
        isActive: true,
        homeTeam: ['Valencia CF'],
        imageUrl: '',
      }
    ),

    mames: new Stadium(
      [
        { title: 'San Mamés (old)', period: '1913-2013' },
        { title: 'San Mamés (new)', period: '2013-p.t.' },
      ],
      'Bilbao',
      '53 331',
      ['1913', '1952', '1982', '2013'],
      {
        isActive: true,
        homeTeam: ['Athletic Bilbao'],
        imageUrl: '',
      }
    ),

    molinon: new Stadium([{ title: 'El Molinón', period: '1908-p.t.' }], 'Gijón', '30 000', ['1908', '1982', '2010'], {
      isActive: true,
      homeTeam: ['Sporting de Gijón'],
      imageUrl: '',
    }),

    rosaleda: new Stadium(
      [{ title: 'La Rosaleda', period: '1941-p.t.' }],
      'Málaga',
      '30 044',
      ['1941', '1982', '2000', '2011'],
      {
        isActive: true,
        homeTeam: ['Málaga CF'],
        imageUrl: '',
      }
    ),

    romareda: new Stadium(
      [{ title: 'La Romareda', period: '1957-p.t.' }],
      'Zaragoza',
      '33 608',
      ['1957', '1982', '1994', '2013'],
      {
        isActive: true,
        homeTeam: ['Real Zaragoza'],
        imageUrl: '',
      }
    ),

    riazor: new Stadium([{ title: 'Riazor', period: '1944-p.t.' }], 'A Coruña', '32 912', ['1944', '1982', '1995'], {
      isActive: true,
      homeTeam: ['Deportivo La Coruña'],
      imageUrl: '',
    }),

    balaidos: new Stadium(
      [{ title: 'Balaídos', period: '1928-p.t.' }],
      'Vigo',
      '29 000',
      ['1928', '1982', '2004', '2018'],
      {
        isActive: true,
        homeTeam: ['Celta Vigo'],
        imageUrl: '',
      }
    ),

    tartiere: new Stadium(
      [
        { title: 'Carlos Tartiere (old)', period: '1932-2000' },
        { title: 'Carlos Tartiere (new)', period: '2000-p.t.' },
      ],
      'Oviedo',
      '30 500',
      ['1932', '1982', '2000'],
      {
        isActive: true,
        homeTeam: ['Real Oviedo'],
        imageUrl: '',
      }
    ),

    perez: new Stadium(
      [{ title: 'José Rico Pérez', period: '1974-p.t.' }],
      'Alicante',
      '29 500',
      ['1974', '1999', '2013'],
      {
        isActive: true,
        homeTeam: ['Hércules CF'],
        imageUrl: '',
      }
    ),

    zorrilla: new Stadium(
      [{ title: 'José Zorrilla', period: '1982-p.t.' }],
      'Valladolid',
      '27 846',
      ['1982', '2000', '2018'],
      {
        isActive: true,
        homeTeam: ['Real Valladolid'],
        imageUrl: '',
      }
    ),
  },
}
