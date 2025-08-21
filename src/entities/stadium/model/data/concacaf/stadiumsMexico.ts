import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Mexico'

export const stadiumsMexico: StadiumsData = {
  azteca: new StadiumEntity(
    { city: 'Mexico City', country },
    [{ name: 'Estadio Azteca', period: '1966-p.t.' }],
    true,
    '87 523',
    '1966',
    ['1985', '1999', '2013', '2016'],
    ['Club América', 'Mexico national team']
  ),

  olimpico: new StadiumEntity(
    { city: 'Mexico City', country },
    [{ name: 'Estadio Olímpico Universitario', period: '1952-p.t.' }],
    true,
    '72 000',
    '1952',
    ['1968', '1990', '2010'],
    ['UNAM Pumas']
  ),

  jalisco: new StadiumEntity(
    { city: 'Guadalajara', country },
    [{ name: 'Estadio Jalisco', period: '1960-p.t.' }],
    true,
    '56 713',
    '1960',
    ['1970', '1999', '2011'],
    ['Atlas', 'Guadalajara (occasional)']
  ),

  cuauhtemoc: new StadiumEntity(
    { city: 'Puebla City', country },
    [{ name: 'Estadio Cuauhtémoc', period: '1968-p.t.' }],
    true,
    '51 726',
    '1968',
    ['1985', '2015'],
    ['Puebla FC']
  ),

  dosal: new StadiumEntity(
    { city: 'Toluca', country },
    [{ name: 'Estadio Nemesio Díez', period: '1954-p.t.' }],
    true,
    '31 000',
    '1954',
    ['1984', '1999', '2017'],
    ['Deportivo Toluca']
  ),

  nouCamp: new StadiumEntity(
    { city: 'León', country },
    [{ name: 'Estadio Nou Camp', period: '1967-p.t.' }],
    true,
    '31 297',
    '1967',
    ['1994', '2012'],
    ['Club León']
  ),

  universitario: new StadiumEntity(
    { city: 'San Nicolás de los Garza', country },
    [{ name: 'Estadio Universitario', period: '1967-p.t.' }],
    true,
    '41 886',
    '1967',
    ['1996', '2015'],
    ['Tigres UANL']
  ),

  neza86: new StadiumEntity(
    { city: 'Nezahualcóyotl', country },
    [{ name: 'Estadio Neza 86', period: '1981-p.t.' }],
    true,
    '28 000',
    '1981',
    ['1986', '2008'],
    ['Toros Neza (historical)']
  ),

  corregidora: new StadiumEntity(
    { city: 'Querétaro', country },
    [{ name: 'Estadio La Corregidora', period: '1985-p.t.' }],
    true,
    '34 130',
    '1985',
    ['2011', '2015'],
    ['Querétaro FC']
  ),

  tecnologico: new StadiumEntity(
    { city: 'Monterrey', country },
    [{ name: 'Estadio Tecnológico', period: '1950-2017' }],
    false,
    '36 485',
    '1950',
    ['1986', '1999'],
    ['CF Monterrey (historical)']
  ),

  chavez: new StadiumEntity(
    { city: 'Irapuato', country },
    [{ name: 'Estadio Sergio León Chávez', period: '1960-p.t.' }],
    true,
    '25 000',
    '1960',
    ['1983', '2010'],
    ['Irapuato FC']
  ),

  marzo: new StadiumEntity(
    { city: 'Zapopan', country },
    [{ name: 'Estadio Tres de Marzo', period: '1971-p.t.' }],
    true,
    '18 779',
    '1971',
    ['1994', '2012'],
    ['Tecos FC']
  ),
}
