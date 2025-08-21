import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'France'

export const stadiumsFrance: StadiumsData = {
  stadeDeFrance: new StadiumEntity(
    { city: 'Saint-Denis', country },
    [{ name: 'Stade de France', period: '1998-p.t.' }],
    true,
    '81 338',
    '1998',
    ['1999', '2015'],
    ['France national team']
  ),

  parcDesPrinces: new StadiumEntity(
    { city: 'Paris', country },
    [{ name: 'Parc des Princes', period: '1897-p.t.' }],
    true,
    '48 583',
    '1897',
    ['1932', '1972', '2012-2016'],
    ['Paris Saint-Germain', 'France national team (selected matches)']
  ),

  velodrome: new StadiumEntity(
    { city: 'Marseille', country },
    [{ name: 'Stade Vélodrome', period: '1937-p.t.' }],
    true,
    '67 394',
    '1937',
    ['1984', '1998', '2014'],
    ['Olympique de Marseille']
  ),

  gerland: new StadiumEntity(
    { city: 'Lyon', country },
    [
      { name: 'Stade de Gerland', period: '1926-2015' },
      { name: 'Matmut Stadium Gerland', period: '2015-p.t.' },
    ],
    true,
    '35 000',
    '1926',
    ['1950', '1980', '1998', '2015'],
    ['Olympique Lyonnais (1926-2015)', 'Lyon OU rugby']
  ),

  felixBollaert: new StadiumEntity(
    { city: 'Lens', country },
    [{ name: 'Stade Félix-Bollaert', period: '1932-p.t.' }],
    true,
    '38 223',
    '1932',
    ['1976', '1984', '1998', '2015'],
    ['RC Lens']
  ),

  beaujoire: new StadiumEntity(
    { city: 'Nantes', country },
    [{ name: 'Stade de la Beaujoire', period: '1984-p.t.' }],
    true,
    '35 322',
    '1984',
    ['1998', '2013'],
    ['FC Nantes']
  ),

  velodromeReims: new StadiumEntity(
    { city: 'Reims', country },
    [{ name: 'Vélodrome Municipal', period: '1935-2004' }],
    false,
    '10 000',
    '1935',
    [],
    ['Stade Reims (1935-2004)']
  ),

  toec: new StadiumEntity(
    { city: 'Toulouse', country },
    [{ name: 'Stade du T.O.E.C.', period: '1949-1980' }],
    false,
    '15 000',
    '1949',
    [],
    ['Toulouse FC (1949-1980)']
  ),

  geoffroyGuichard: new StadiumEntity(
    { city: 'Saint-Étienne', country },
    [{ name: 'Stade Geoffroy-Guichard', period: '1931-p.t.' }],
    true,
    '42 000',
    '1931',
    ['1956', '1984', '1998', '2014'],
    ['AS Saint-Étienne']
  ),

  toulouse: new StadiumEntity(
    { city: 'Toulouse', country },
    [{ name: 'Stadium Municipal', period: '1937-p.t.' }],
    true,
    '33 150',
    '1937',
    ['1949', '1997', '2016'],
    ['Toulouse FC']
  ),

  mosson: new StadiumEntity(
    { city: 'Montpellier', country },
    [{ name: 'Stade de la Mosson', period: '1972-p.t.' }],
    true,
    '32 900',
    '1972',
    ['1998', '2007'],
    ['Montpellier HSC']
  ),

  colombes: new StadiumEntity(
    { city: 'Colombes', country },
    [
      { name: 'Stade Olympique de Colombes', period: '1907-1972' },
      { name: 'Stade Yves-du-Manoir', period: '1972-p.t.' },
    ],
    true,
    '14 000',
    '1907',
    ['1924', '1938', '1972'],
    ['Racing Club de France (1907-1972)']
  ),

  meinau: new StadiumEntity(
    { city: 'Strasbourg', country },
    [{ name: 'Stade de la Meinau', period: '1914-p.t.' }],
    true,
    '26 280',
    '1914',
    ['1951', '1984', '2001'],
    ['RC Strasbourg']
  ),

  municipalHavre: new StadiumEntity(
    { city: 'Le Havre', country },
    [
      { name: 'Stade Jules Deschaseaux', period: '1932-2012' },
      { name: 'Stade Océane', period: '2012-p.t.' },
    ],
    true,
    '25 178',
    '2012',
    [],
    ['Le Havre AC']
  ),

  lescure: new StadiumEntity(
    { city: 'Bordeaux', country },
    [
      { name: 'Parc Lescure', period: '1938-2015' },
      { name: 'Matmut Atlantique', period: '2015-p.t.' },
    ],
    true,
    '42 115',
    '1938',
    ['1985', '1998', '2015'],
    ['FC Girondins de Bordeaux']
  ),

  boucquey: new StadiumEntity(
    { city: 'Lille', country },
    [{ name: 'Stade Victor Boucquey', period: '1902-1975' }],
    false,
    '15 000',
    '1902',
    [],
    ['Olympique Lillois (1902-1944)']
  ),

  fortCarre: new StadiumEntity(
    { city: 'Antibes', country },
    [{ name: 'Stade du Fort Carré', period: '1920-1990' }],
    false,
    '7 000',
    '1920',
    [],
    ['FC Antibes (1920-1990)']
  ),
}
