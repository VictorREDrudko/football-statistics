import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Mexico'

export const stadiumsMexico: StadiumsData = {
  azteca: new Stadium(
    {
      location: { city: 'Mexico City', country },
      names: [{ name: 'Estadio Azteca', period: '1966-p.t.' }],
    },
    true,
    '87 523',
    '1966',
    ['1985', '1999', '2013', '2016'],
    ['Club América', 'Mexico national team'],
    []
  ),

  olimpico: new Stadium(
    {
      location: { city: 'Mexico City', country },
      names: [{ name: 'Estadio Olímpico Universitario', period: '1952-p.t.' }],
    },
    true,
    '72 000',
    '1952',
    ['1968', '1990', '2010'],
    ['UNAM Pumas'],
    []
  ),

  jalisco: new Stadium(
    {
      location: { city: 'Guadalajara', country },
      names: [{ name: 'Estadio Jalisco', period: '1960-p.t.' }],
    },
    true,
    '56 713',
    '1960',
    ['1970', '1999', '2011'],
    ['Atlas', 'Guadalajara (occasional)'],
    []
  ),

  cuauhtemoc: new Stadium(
    {
      location: { city: 'Puebla City', country },
      names: [{ name: 'Estadio Cuauhtémoc', period: '1968-p.t.' }],
    },
    true,
    '51 726',
    '1968',
    ['1985', '2015'],
    ['Puebla FC'],
    []
  ),

  dosal: new Stadium(
    {
      location: { city: 'Toluca', country },
      names: [{ name: 'Estadio Nemesio Díez', period: '1954-p.t.' }],
    },
    true,
    '31 000',
    '1954',
    ['1984', '1999', '2017'],
    ['Deportivo Toluca'],
    []
  ),

  nouCamp: new Stadium(
    {
      location: { city: 'León', country },
      names: [{ name: 'Estadio Nou Camp', period: '1967-p.t.' }],
    },
    true,
    '31 297',
    '1967',
    ['1994', '2012'],
    ['Club León'],
    []
  ),

  universitario: new Stadium(
    {
      location: { city: 'San Nicolás de los Garza', country },
      names: [{ name: 'Estadio Universitario', period: '1967-p.t.' }],
    },
    true,
    '41 886',
    '1967',
    ['1996', '2015'],
    ['Tigres UANL'],
    []
  ),

  neza86: new Stadium(
    {
      location: { city: 'Nezahualcóyotl', country },
      names: [{ name: 'Estadio Neza 86', period: '1981-p.t.' }],
    },
    true,
    '28 000',
    '1981',
    ['1986', '2008'],
    ['Toros Neza (historical)'],
    []
  ),

  corregidora: new Stadium(
    {
      location: { city: 'Querétaro', country },
      names: [{ name: 'Estadio La Corregidora', period: '1985-p.t.' }],
    },
    true,
    '34 130',
    '1985',
    ['2011', '2015'],
    ['Querétaro FC'],
    []
  ),

  tecnologico: new Stadium(
    {
      location: { city: 'Monterrey', country },
      names: [{ name: 'Estadio Tecnológico', period: '1950-2017' }],
    },
    false,
    '36 485',
    '1950',
    ['1986', '1999'],
    ['CF Monterrey (historical)'],
    []
  ),

  chavez: new Stadium(
    {
      location: { city: 'Irapuato', country },
      names: [{ name: 'Estadio Sergio León Chávez', period: '1960-p.t.' }],
    },
    true,
    '25 000',
    '1960',
    ['1983', '2010'],
    ['Irapuato FC'],
    []
  ),

  marzo: new Stadium(
    {
      location: { city: 'Zapopan', country },
      names: [{ name: 'Estadio Tres de Marzo', period: '1971-p.t.' }],
    },
    true,
    '18 779',
    '1971',
    ['1994', '2012'],
    ['Tecos FC'],
    []
  ),
}
