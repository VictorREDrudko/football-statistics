import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsItaly: CountryStadiums = {
  country: 'Italy',
  stadiums: {
    sanSiro: new Stadium(
      [
        { title: 'Stadio San Siro', period: '1926-1980' },
        { title: 'Stadio Giuseppe Meazza', period: '1980-p.t.' }
      ],
      'Milan',
      '75 817',
      ['1926', '1935', '1955', '1990', '2015-2016'],
      {
        isActive: true,
        homeTeam: ['AC Milan', 'FC Internazionale'],
        imageUrl: '',
      }
    ),

    ferraris: new Stadium(
      [
        { title: 'Stadio Luigi Ferraris', period: '1911-p.t.' }
      ],
      'Genoa',
      '36 599',
      ['1911', '1934', '1989', '2020'],
      {
        isActive: true,
        homeTeam: ['Genoa CFC', 'UC Sampdoria'],
        imageUrl: '',
      }
    ),

    nicola: new Stadium(
      [
        { title: 'Stadio San Nicola', period: '1990-p.t.' }
      ],
      'Bari',
      '58 270',
      ['1990'],
      {
        isActive: true,
        homeTeam: ['SSC Bari'],
        imageUrl: '',
      }
    ),

    maradona: new Stadium(
      [
        { title: 'Stadio San Paolo', period: '1959-2020' },
        { title: 'Stadio Diego Armando Maradona', period: '2020-p.t.' }
      ],
      'Naples',
      '54 726',
      ['1959', '1989', '2019'],
      {
        isActive: true,
        homeTeam: ['SSC Napoli'],
        imageUrl: '',
      }
    ),

    olimpico: new Stadium(
      [
        { title: 'Stadio dei Cipressi', period: '1911-1927' },
        { title: 'Stadio del Partito Nazionale Fascista', period: '1927-1945' },
        { title: 'Stadio Torino', period: '1945-1953' },
        { title: 'Stadio Olimpico', period: '1953-p.t.' }
      ],
      'Rome',
      '70 634',
      ['1927', '1953', '1990', '2008'],
      {
        isActive: true,
        homeTeam: ['AS Roma', 'SS Lazio'],
        imageUrl: '',
      }
    ),

    franchi: new Stadium(
      [
        { title: 'Stadio Giovanni Berta', period: '1931-1945' },
        { title: 'Stadio Comunale', period: '1945-1991' },
        { title: 'Stadio Artemio Franchi', period: '1991-p.t.' }
      ],
      'Florence',
      '43 147',
      ['1931', '1990', '2013'],
      {
        isActive: true,
        homeTeam: ['ACF Fiorentina'],
        imageUrl: '',
      }
    ),

    santElia: new Stadium(
      [
        { title: "Stadio Sant'Elia", period: '1970-2017' }
      ],
      'Cagliari',
      '16 234',
      ['1970', '1990'],
      {
        isActive: false,
        homeTeam: ['Cagliari Calcio (до 2017)'],
        imageUrl: '',
      }
    ),

    favorita: new Stadium(
      [
        { title: 'Stadio La Favorita', period: '1931-1985' }
      ],
      'Palermo',
      '12 000',
      ['1931'],
      {
        isActive: false,
        homeTeam: ['Palermo FC (исторический)'],
        imageUrl: '',
      }
    ),

    dallAra: new Stadium(
      [
        { title: 'Stadio Littoriale', period: '1927-1945' },
        { title: 'Stadio Comunale', period: '1945-1983' },
        { title: "Stadio Renato Dall'Ara", period: '1983-p.t.' }
      ],
      'Bologna',
      '36 462',
      ['1927', '1983', '2015'],
      {
        isActive: true,
        homeTeam: ['Bologna FC'],
        imageUrl: '',
      }
    ),

    friuli: new Stadium(
      [
        { title: 'Stadio Friuli', period: '1976-2016' },
        { title: 'Dacia Arena', period: '2016-p.t.' }
      ],
      'Udine',
      '25 144',
      ['1976', '2016'],
      {
        isActive: true,
        homeTeam: ['Udinese Calcio'],
        imageUrl: '',
      }
    ),

    alpi: new Stadium(
      [
        { title: 'Stadio delle Alpi', period: '1990-2006' }
      ],
      'Turin',
      '69 041',
      ['1990'],
      {
        isActive: false,
        homeTeam: ['Juventus FC (1990-2006)', 'Torino FC (1990-2006)'],
        imageUrl: '',
      }
    ),

    bentegodi: new Stadium(
      [
        { title: "Stadio Marc'Antonio Bentegodi", period: '1963-p.t.' }
      ],
      'Verona',
      '39 211',
      ['1963', '1989', '2019'],
      {
        isActive: true,
        homeTeam: ['Hellas Verona', 'Chievo Verona (до 2021)'],
        imageUrl: '',
      }
    ),

    ascarelli: new Stadium(
      [
        { title: 'Stadio Giorgio Ascarelli', period: '1930-1942' }
      ],
      'Naples',
      '12 000',
      ['1930'],
      {
        isActive: false,
        homeTeam: ['Napoli (1930-1942)'],
        imageUrl: '',
      }
    ),

    nazionalePNF: new Stadium(
      [
        { title: 'Stadio Nazionale PNF', period: '1927-1953' }
      ],
      'Rome',
      '47 300',
      ['1927'],
      {
        isActive: false,
        homeTeam: ['SS Lazio (1927-1953)', 'AS Roma (1927-1940)'],
        imageUrl: '',
      }
    ),

    mussolini: new Stadium(
      [
        { title: 'Stadio Benito Mussolini', period: '1933-1945' },
        { title: 'Stadio Comunale', period: '1945-2006' }
      ],
      'Turin',
      '65 000',
      ['1933', '1945'],
      {
        isActive: false,
        homeTeam: ['Juventus FC (1933-1990)', 'Torino FC (1933-1990)'],
        imageUrl: '',
      }
    ),

    littorio: new Stadium(
      [
        { title: 'Stadio Littorio', period: '1933-1992' }
      ],
      'Trieste',
      '8 000',
      ['1933'],
      {
        isActive: false,
        homeTeam: ['US Triestina (1933-1992)'],
        imageUrl: '',
      }
    ),

    // Добавленные стадионы
    comunaleTorino: new Stadium(
      [
        { title: 'Stadio Filadelfia', period: '1926-1963' },
        { title: 'Stadio Comunale', period: '1963-1990' }
      ],
      'Turin',
      '50 000',
      ['1926', '1963'],
      {
        isActive: false,
        homeTeam: ['Torino FC (1926-1990)'],
        imageUrl: '',
      }
    ),

    berta: new Stadium(
      [
        { title: 'Stadio Giovanni Berta', period: '1931-1945' }
      ],
      'Florence',
      '47 000',
      ['1931'],
      {
        isActive: false,
        homeTeam: ['ACF Fiorentina (1931-1945)'],
        imageUrl: '',
      }
    ),

    garibaldi: new Stadium(
      [
        { title: 'Stadio Romeo Menti', period: '1939-p.t.' }
      ],
      'Livorno',
      '19 238',
      ['1939', '2007'],
      {
        isActive: true,
        homeTeam: ['AS Livorno'],
        imageUrl: '',
      }
    )
  },
}