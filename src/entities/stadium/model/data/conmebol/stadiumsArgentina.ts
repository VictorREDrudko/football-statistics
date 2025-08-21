import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Argentina'

export const stadiumsArgentina: StadiumsData = {
  riverPlate: new StadiumEntity(
    { city: 'Buenos Aires', country },
    [
      { name: 'Estadio Monumental', period: '1938-p.t.' },
      { name: 'Estadio Mâs Monumental', period: '2023-p.t.' },
    ],
    true,
    '84 567',
    '1938',
    ['1958', '1978', '2019', '2023'],
    ['River Plate', 'Argentina national team']
  ),

  amalfitani: new StadiumEntity(
    { city: 'Buenos Aires', country },
    [{ name: 'Estadio José Amalfitani', period: '1951-p.t.' }],
    true,
    '49 540',
    '1951',
    ['1978', '2008'],
    ['Vélez Sársfield']
  ),

  olympic: new StadiumEntity(
    { city: 'Córdoba', country },
    [{ name: 'Estadio Olímpico Chateau Carreras', period: '1978-p.t.' }],
    true,
    '57 000',
    '1978',
    ['2011'],
    ['Instituto', 'Talleres (occasional)']
  ),

  worldCup: new StadiumEntity(
    { city: 'La Plata, Buenos Aires Province', country },
    [{ name: 'Estadio Ciudad de La Plata', period: '2003-p.t.' }],
    true,
    '53 000',
    '2003',
    ['2011'],
    ['Estudiantes LP', 'Gimnasia LP']
  ),

  rosario: new StadiumEntity(
    { city: 'Rosario', country },
    [
      { name: 'Estadio Gigante de Arroyito', period: '1929-p.t.' },
      { name: 'Estadio Dr. Lisandro de la Torre', period: '1939-p.t.' },
    ],
    true,
    '41 654',
    '1929',
    ['1957', '1978', '2019'],
    ['Rosario Central']
  ),

  mendoza: new StadiumEntity(
    { city: 'Mendoza', country },
    [{ name: 'Estadio Malvinas Argentinas', period: '1978-p.t.' }],
    true,
    '42 000',
    '1978',
    ['2001', '2011'],
    ['Godoy Cruz (occasional)']
  ),
}
