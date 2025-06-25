import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'France'

export const stadiumsFrance: StadiumsData = {
  stadeDeFrance: new Stadium(
    {
      location: { city: 'Saint-Denis', country },
      names: [{ name: 'Stade de France', period: '1998-p.t.' }],
    },
    true,
    '81 338',
    '1998',
    ['1999', '2015'],
    ['France national team'],
    []
  ),

  parcDesPrinces: new Stadium(
    {
      location: { city: 'Paris', country },
      names: [{ name: 'Parc des Princes', period: '1897-p.t.' }],
    },
    true,
    '48 583',
    '1897',
    ['1932', '1972', '2012-2016'],
    ['Paris Saint-Germain', 'France national team (selected matches)'],
    []
  ),

  velodrome: new Stadium(
    {
      location: { city: 'Marseille', country },
      names: [{ name: 'Stade Vélodrome', period: '1937-p.t.' }],
    },
    true,
    '67 394',
    '1937',
    ['1984', '1998', '2014'],
    ['Olympique de Marseille'],
    []
  ),

  gerland: new Stadium(
    {
      location: { city: 'Lyon', country },
      names: [
        { name: 'Stade de Gerland', period: '1926-2015' },
        { name: 'Matmut Stadium Gerland', period: '2015-p.t.' },
      ],
    },
    true,
    '35 000',
    '1926',
    ['1950', '1980', '1998', '2015'],
    ['Olympique Lyonnais (1926-2015)', 'Lyon OU rugby'],
    []
  ),

  felixBollaert: new Stadium(
    {
      location: { city: 'Lens', country },
      names: [{ name: 'Stade Félix-Bollaert', period: '1932-p.t.' }],
    },
    true,
    '38 223',
    '1932',
    ['1976', '1984', '1998', '2015'],
    ['RC Lens'],
    []
  ),

  beaujoire: new Stadium(
    {
      location: { city: 'Nantes', country },
      names: [{ name: 'Stade de la Beaujoire', period: '1984-p.t.' }],
    },
    true,
    '35 322',
    '1984',
    ['1998', '2013'],
    ['FC Nantes'],
    []
  ),

  velodromeReims: new Stadium(
    {
      location: { city: 'Reims', country },
      names: [{ name: 'Vélodrome Municipal', period: '1935-2004' }],
    },
    false,
    '10 000',
    '1935',
    [],
    ['Stade Reims (1935-2004)'],
    []
  ),

  toec: new Stadium(
    {
      location: { city: 'Toulouse', country },
      names: [{ name: 'Stade du T.O.E.C.', period: '1949-1980' }],
    },
    false,
    '15 000',
    '1949',
    [],
    ['Toulouse FC (1949-1980)'],
    []
  ),

  geoffroyGuichard: new Stadium(
    {
      location: { city: 'Saint-Étienne', country },
      names: [{ name: 'Stade Geoffroy-Guichard', period: '1931-p.t.' }],
    },
    true,
    '42 000',
    '1931',
    ['1956', '1984', '1998', '2014'],
    ['AS Saint-Étienne'],
    []
  ),

  toulouse: new Stadium(
    {
      location: { city: 'Toulouse', country },
      names: [{ name: 'Stadium Municipal', period: '1937-p.t.' }],
    },
    true,
    '33 150',
    '1937',
    ['1949', '1997', '2016'],
    ['Toulouse FC'],
    []
  ),

  mosson: new Stadium(
    {
      location: { city: 'Montpellier', country },
      names: [{ name: 'Stade de la Mosson', period: '1972-p.t.' }],
    },
    true,
    '32 900',
    '1972',
    ['1998', '2007'],
    ['Montpellier HSC'],
    []
  ),

  colombes: new Stadium(
    {
      location: { city: 'Colombes', country },
      names: [
        { name: 'Stade Olympique de Colombes', period: '1907-1972' },
        { name: 'Stade Yves-du-Manoir', period: '1972-p.t.' },
      ],
    },
    true,
    '14 000',
    '1907',
    ['1924', '1938', '1972'],
    ['Racing Club de France (1907-1972)'],
    []
  ),

  meinau: new Stadium(
    {
      location: { city: 'Strasbourg', country },
      names: [{ name: 'Stade de la Meinau', period: '1914-p.t.' }],
    },
    true,
    '26 280',
    '1914',
    ['1951', '1984', '2001'],
    ['RC Strasbourg'],
    []
  ),

  municipalHavre: new Stadium(
    {
      location: { city: 'Le Havre', country },
      names: [
        { name: 'Stade Jules Deschaseaux', period: '1932-2012' },
        { name: 'Stade Océane', period: '2012-p.t.' },
      ],
    },
    true,
    '25 178',
    '2012',
    [],
    ['Le Havre AC'],
    []
  ),

  lescure: new Stadium(
    {
      location: { city: 'Bordeaux', country },
      names: [
        { name: 'Parc Lescure', period: '1938-2015' },
        { name: 'Matmut Atlantique', period: '2015-p.t.' },
      ],
    },
    true,
    '42 115',
    '1938',
    ['1985', '1998', '2015'],
    ['FC Girondins de Bordeaux'],
    []
  ),

  boucquey: new Stadium(
    {
      location: { city: 'Lille', country },
      names: [{ name: 'Stade Victor Boucquey', period: '1902-1975' }],
    },
    false,
    '15 000',
    '1902',
    [],
    ['Olympique Lillois (1902-1944)'],
    []
  ),

  fortCarre: new Stadium(
    {
      location: { city: 'Antibes', country },
      names: [{ name: 'Stade du Fort Carré', period: '1920-1990' }],
    },
    false,
    '7 000',
    '1920',
    [],
    ['FC Antibes (1920-1990)'],
    []
  ),
}
