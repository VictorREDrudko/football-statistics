import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsMexico: CountryStadiums = {
  country: 'Mexico',
  stadiums: {
    azteca: new Stadium(
      [{ title: 'Estadio Azteca', period: '1966-p.t.' }],
      'Mexico City',
      '87 523',
      ['1966', '1985', '1999', '2013', '2016'],
      {
        isActive: true,
        homeTeam: ['Club América', 'Mexico national team'],
        imageUrl: '',
      }
    ),

    olimpico: new Stadium(
      [{ title: 'Estadio Olímpico Universitario', period: '1952-p.t.' }],
      'Mexico City',
      '72 000',
      ['1952', '1968', '1990', '2010'],
      {
        isActive: true,
        homeTeam: ['UNAM Pumas'],
        imageUrl: '',
      }
    ),

    jalisco: new Stadium(
      [{ title: 'Estadio Jalisco', period: '1960-p.t.' }],
      'Guadalajara',
      '56 713',
      ['1960', '1970', '1999', '2011'],
      {
        isActive: true,
        homeTeam: ['Atlas', 'Guadalajara (occasional)'],
        imageUrl: '',
      }
    ),

    cuauhtemoc: new Stadium(
      [{ title: 'Estadio Cuauhtémoc', period: '1968-p.t.' }],
      'Puebla City',
      '51 726',
      ['1968', '1985', '2015'],
      {
        isActive: true,
        homeTeam: ['Puebla FC'],
        imageUrl: '',
      }
    ),

    dosal: new Stadium(
      [{ title: 'Estadio Nemesio Díez', period: '1954-p.t.' }],
      'Toluca',
      '31 000',
      ['1954', '1984', '1999', '2017'],
      {
        isActive: true,
        homeTeam: ['Deportivo Toluca'],
        imageUrl: '',
      }
    ),

    nouCamp: new Stadium(
      [{ title: 'Estadio Nou Camp', period: '1967-p.t.' }],
      'León',
      '31 297',
      ['1967', '1994', '2012'],
      {
        isActive: true,
        homeTeam: ['Club León'],
        imageUrl: '',
      }
    ),

    universitario: new Stadium(
      [{ title: 'Estadio Universitario', period: '1967-p.t.' }],
      'San Nicolás de los Garza',
      '41 886',
      ['1967', '1996', '2015'],
      {
        isActive: true,
        homeTeam: ['Tigres UANL'],
        imageUrl: '',
      }
    ),

    neza86: new Stadium(
      [{ title: 'Estadio Neza 86', period: '1981-p.t.' }],
      'Nezahualcóyotl',
      '28 000',
      ['1981', '1986', '2008'],
      {
        isActive: true,
        homeTeam: ['Toros Neza (historical)'],
        imageUrl: '',
      }
    ),

    corregidora: new Stadium(
      [{ title: 'Estadio La Corregidora', period: '1985-p.t.' }],
      'Querétaro',
      '34 130',
      ['1985', '2011', '2015'],
      {
        isActive: true,
        homeTeam: ['Querétaro FC'],
        imageUrl: '',
      }
    ),

    tecnologico: new Stadium(
      [{ title: 'Estadio Tecnológico', period: '1950-2017' }],
      'Monterrey',
      '36 485',
      ['1950', '1986', '1999'],
      {
        isActive: false,
        homeTeam: ['CF Monterrey (historical)'],
        imageUrl: '',
      }
    ),

    chavez: new Stadium(
      [{ title: 'Estadio Sergio León Chávez', period: '1960-p.t.' }],
      'Irapuato',
      '25 000',
      ['1960', '1983', '2010'],
      {
        isActive: true,
        homeTeam: ['Irapuato FC'],
        imageUrl: '',
      }
    ),

    marzo: new Stadium(
      [{ title: 'Estadio Tres de Marzo', period: '1971-p.t.' }],
      'Zapopan',
      '18 779',
      ['1971', '1994', '2012'],
      {
        isActive: true,
        homeTeam: ['Tecos FC'],
        imageUrl: '',
      }
    ),
  },
}
