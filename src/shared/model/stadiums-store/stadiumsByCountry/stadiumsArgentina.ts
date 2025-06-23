import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsArgentina: CountryStadiums = {
  country: 'Argentina',
  stadiums: {
    riverPlate: new Stadium(
      [
        { title: 'Estadio Monumental', period: '1938-p.t.' },
        { title: 'Estadio Mâs Monumental', period: '2023-p.t.' },
      ],
      'Buenos Aires',
      '84 567',
      ['1938', '1958', '1978', '2019', '2023'],
      {
        isActive: true,
        homeTeam: ['River Plate', 'Argentina national team'],
        imageUrl: '',
      }
    ),

    amalfitani: new Stadium(
      [{ title: 'Estadio José Amalfitani', period: '1951-p.t.' }],
      'Buenos Aires',
      '49 540',
      ['1951', '1978', '2008'],
      {
        isActive: true,
        homeTeam: ['Vélez Sársfield'],
        imageUrl: '',
      }
    ),

    olympic: new Stadium(
      [{ title: 'Estadio Olímpico Chateau Carreras', period: '1978-p.t.' }],
      'Córdoba',
      '57 000',
      ['1978', '2011'],
      {
        isActive: true,
        homeTeam: ['Instituto', 'Talleres (occasional)'],
        imageUrl: '',
      }
    ),

    worldCup: new Stadium(
      [{ title: 'Estadio Ciudad de La Plata', period: '2003-p.t.' }],
      'La Plata, Buenos Aires Province',
      '53 000',
      ['2003', '2011'],
      {
        isActive: true,
        homeTeam: ['Estudiantes LP', 'Gimnasia LP'],
        imageUrl: '',
      }
    ),

    rosario: new Stadium(
      [
        { title: 'Estadio Gigante de Arroyito', period: '1929-p.t.' },
        { title: 'Estadio Dr. Lisandro de la Torre', period: '1939-p.t.' },
      ],
      'Rosario',
      '41 654',
      ['1929', '1957', '1978', '2019'],
      {
        isActive: true,
        homeTeam: ['Rosario Central'],
        imageUrl: '',
      }
    ),

    mendoza: new Stadium(
      [{ title: 'Estadio Malvinas Argentinas', period: '1978-p.t.' }],
      'Mendoza',
      '42 000',
      ['1978', '2001', '2011'],
      {
        isActive: true,
        homeTeam: ['Godoy Cruz (occasional)'],
        imageUrl: '',
      }
    ),
  },
}
