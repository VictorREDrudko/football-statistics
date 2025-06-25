import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Italy'

export const stadiumsItaly: StadiumsData = {
  sanSiro: new Stadium(
    {
      location: { city: 'Milan', country },
      names: [
        { name: 'Stadio San Siro', period: '1926-1980' },
        { name: 'Stadio Giuseppe Meazza', period: '1980-p.t.' },
      ],
    },
    true,
    '75 817',
    '1926',
    ['1935', '1955', '1990', '2015-2016'],
    ['AC Milan', 'FC Internazionale'],
    []
  ),

  ferraris: new Stadium(
    {
      location: { city: 'Genoa', country },
      names: [{ name: 'Stadio Luigi Ferraris', period: '1911-p.t.' }],
    },
    true,
    '36 599',
    '1911',
    ['1934', '1989', '2020'],
    ['Genoa CFC', 'UC Sampdoria'],
    []
  ),

  nicola: new Stadium(
    {
      location: { city: 'Bari', country },
      names: [{ name: 'Stadio San Nicola', period: '1990-p.t.' }],
    },
    true,
    '58 270',
    '1990',
    [],
    ['SSC Bari'],
    []
  ),

  maradona: new Stadium(
    {
      location: { city: 'Naples', country },
      names: [
        { name: 'Stadio San Paolo', period: '1959-2020' },
        { name: 'Stadio Diego Armando Maradona', period: '2020-p.t.' },
      ],
    },
    true,
    '54 726',
    '1959',
    ['1989', '2019'],
    ['SSC Napoli'],
    []
  ),

  dallAra: new Stadium(
    {
      location: { city: 'Bologna', country },
      names: [
        { name: 'Stadio Littoriale', period: '1927-1945' },
        { name: 'Stadio Comunale', period: '1946-1983' },
        { name: `Stadio Renato Dall'Ara`, period: '1984-p.t.' },
      ],
    },
    true,
    '36 000',
    '1927',
    ['2015'],
    ['Bologna F.C.'],
    []
  ),

  franchi: new Stadium(
    {
      location: { city: 'Florence', country },
      names: [
        { name: 'Stadio Giovanni Berta', period: '1931-1945' },
        { name: 'Stadio Comunale', period: '1946-1991' },
        { name: 'Stadio Artemio Franchi', period: '1992-p.t.' },
      ],
    },
    true,
    '47 282',
    '1931',
    ['1990', '2013', '2024'],
    ['ACF Fiorentina'],
    []
  ),

  olimpico: new Stadium(
    {
      location: { city: 'Rome', country },
      names: [
        { name: 'Stadio dei Cipressi', period: '1911-1927' },
        { name: 'Stadio del Partito Nazionale Fascista', period: '1927-1945' },
        { name: 'Stadio Torino', period: '1945-1953' },
        { name: 'Stadio Olimpico', period: '1953-p.t.' },
      ],
    },
    true,
    '70 634',
    '1927',
    ['1953', '1990', '2008'],
    ['AS Roma', 'SS Lazio'],
    []
  ),

  torino: new Stadium(
    {
      location: { city: 'Turin', country },
      names: [
        { name: 'Stadio Municipale Benito Mussolini', period: '1911-1927' },
        { name: 'Stadio Comunale Vittorio Pozzo', period: '1927-1945' },
        { name: 'Stadio Olimpico Grande Torino', period: '1953-p.t.' },
      ],
    },
    true,
    '28 117',
    '1933',
    ['2006'],
    ['Torino FC'],
    []
  ),

  alpi: new Stadium(
    {
      location: { city: 'Turin', country },
      names: [{ name: 'Stadio delle Alpi', period: '1990-2006' }],
    },
    false,
    '69 041',
    '1990',
    [],
    ['Juventus FC (1990-2006)', 'Torino FC (1990-2006)'],
    []
  ),

  ascarelli: new Stadium(
    {
      location: { city: 'Naples', country },
      names: [{ name: 'Stadio Giorgio Ascarelli', period: '0000-1942' }],
    },
    false,
    '40 000',
    '1934',
    [],
    ['S.S.C. Napoli'],
    []
  ),

  nazionalePNF: new Stadium(
    {
      location: { city: 'Rome', country },
      names: [{ name: 'Stadio Nazionale del PNF', period: '1911-1953' }],
    },
    false,
    '47 300',
    '1911',
    ['1928'],
    ['SS Lazio', 'AS Roma'],
    []
  ),
}
