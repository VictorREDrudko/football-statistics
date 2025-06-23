import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsFrance: CountryStadiums = {
  country: 'France',
  stadiums: {
    stadeDeFrance: new Stadium(
      [{ title: 'Stade de France', period: '1998-p.t.' }],
      'Saint-Denis',
      '81 338',
      ['1998', '1999', '2015'],
      {
        isActive: true,
        homeTeam: ['France national team'],
        imageUrl: '',
      }
    ),

    parcDesPrinces: new Stadium(
      [{ title: 'Parc des Princes', period: '1897-p.t.' }],
      'Paris',
      '48 583',
      ['1897', '1932', '1972', '2012-2016'],
      {
        isActive: true,
        homeTeam: ['Paris Saint-Germain', 'France national team (selected matches)'],
        imageUrl: '',
      }
    ),

    velodrome: new Stadium(
      [{ title: 'Stade Vélodrome', period: '1937-p.t.' }],
      'Marseille',
      '67 394',
      ['1937', '1984', '1998', '2014'],
      {
        isActive: true,
        homeTeam: ['Olympique de Marseille'],
        imageUrl: '',
      }
    ),

    gerland: new Stadium(
      [
        { title: 'Stade de Gerland', period: '1926-2015' },
        { title: 'Matmut Stadium Gerland', period: '2015-p.t.' },
      ],
      'Lyon',
      '35 000',
      ['1926', '1950', '1980', '1998', '2015'],
      {
        isActive: true,
        homeTeam: ['Olympique Lyonnais (1926-2015)', 'Lyon OU rugby'],
        imageUrl: '',
      }
    ),

    felixBollaert: new Stadium(
      [{ title: 'Stade Félix-Bollaert', period: '1932-p.t.' }],
      'Lens',
      '38 223',
      ['1932', '1976', '1984', '1998', '2015'],
      {
        isActive: true,
        homeTeam: ['RC Lens'],
        imageUrl: '',
      }
    ),

    beaujoire: new Stadium(
      [{ title: 'Stade de la Beaujoire', period: '1984-p.t.' }],
      'Nantes',
      '35 322',
      ['1984', '1998', '2013'],
      {
        isActive: true,
        homeTeam: ['FC Nantes'],
        imageUrl: '',
      }
    ),

    velodromeReims: new Stadium([{ title: 'Vélodrome Municipal', period: '1935-2004' }], 'Reims', '10 000', ['1935'], {
      isActive: false,
      homeTeam: ['Stade Reims (1935-2004)'],
      imageUrl: '',
    }),

    toec: new Stadium([{ title: 'Stade du T.O.E.C.', period: '1949-1980' }], 'Toulouse', '15 000', ['1949'], {
      isActive: false,
      homeTeam: ['Toulouse FC (1949-1980)'],
      imageUrl: '',
    }),

    geoffroyGuichard: new Stadium(
      [{ title: 'Stade Geoffroy-Guichard', period: '1931-p.t.' }],
      'Saint-Étienne',
      '42 000',
      ['1931', '1956', '1984', '1998', '2014'],
      {
        isActive: true,
        homeTeam: ['AS Saint-Étienne'],
        imageUrl: '',
      }
    ),

    toulouse: new Stadium(
      [{ title: 'Stadium Municipal', period: '1937-p.t.' }],
      'Toulouse',
      '33 150',
      ['1937', '1949', '1997', '2016'],
      {
        isActive: true,
        homeTeam: ['Toulouse FC'],
        imageUrl: '',
      }
    ),

    mosson: new Stadium(
      [{ title: 'Stade de la Mosson', period: '1972-p.t.' }],
      'Montpellier',
      '32 900',
      ['1972', '1998', '2007'],
      {
        isActive: true,
        homeTeam: ['Montpellier HSC'],
        imageUrl: '',
      }
    ),

    colombes: new Stadium(
      [
        { title: 'Stade Olympique de Colombes', period: '1907-1972' },
        { title: 'Stade Yves-du-Manoir', period: '1972-p.t.' },
      ],
      'Colombes',
      '14 000',
      ['1907', '1924', '1938', '1972'],
      {
        isActive: true,
        homeTeam: ['Racing Club de France (1907-1972)'],
        imageUrl: '',
      }
    ),

    meinau: new Stadium(
      [{ title: 'Stade de la Meinau', period: '1914-p.t.' }],
      'Strasbourg',
      '26 280',
      ['1914', '1951', '1984', '2001'],
      {
        isActive: true,
        homeTeam: ['RC Strasbourg'],
        imageUrl: '',
      }
    ),

    municipalHavre: new Stadium(
      [
        { title: 'Stade Océane', period: '2012-p.t.' },
        { title: 'Stade Jules Deschaseaux', period: '1932-2012' },
      ],
      'Le Havre',
      '25 178',
      ['2012'],
      {
        isActive: true,
        homeTeam: ['Le Havre AC'],
        imageUrl: '',
      }
    ),

    lescure: new Stadium(
      [
        { title: 'Parc Lescure', period: '1938-2015' },
        { title: 'Matmut Atlantique', period: '2015-p.t.' },
      ],
      'Bordeaux',
      '42 115',
      ['1938', '1985', '1998', '2015'],
      {
        isActive: true,
        homeTeam: ['FC Girondins de Bordeaux'],
        imageUrl: '',
      }
    ),

    boucquey: new Stadium([{ title: 'Stade Victor Boucquey', period: '1902-1975' }], 'Lille', '15 000', ['1902'], {
      isActive: false,
      homeTeam: ['Olympique Lillois (1902-1944)'],
      imageUrl: '',
    }),

    fortCarre: new Stadium([{ title: 'Stade du Fort Carré', period: '1920-1990' }], 'Antibes', '7 000', ['1920'], {
      isActive: false,
      homeTeam: ['FC Antibes (1920-1990)'],
      imageUrl: '',
    }),
  },
}
