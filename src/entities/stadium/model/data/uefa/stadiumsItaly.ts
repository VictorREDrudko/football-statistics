import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Italy'

export const stadiumsItaly: StadiumsData = {
  sanSiro: new StadiumEntity(
    { city: 'Milan', country },
    [
      { name: 'Stadio San Siro', period: '1926-1980' },
      { name: 'Stadio Giuseppe Meazza', period: '1980-p.t.' },
    ],
    true,
    '75 817',
    '1926',
    ['1935', '1955', '1990', '2015-2016'],
    ['AC Milan', 'FC Internazionale']
  ),

  ferraris: new StadiumEntity(
    { city: 'Genoa', country },
    [{ name: 'Stadio Luigi Ferraris', period: '1911-p.t.' }],
    true,
    '36 599',
    '1911',
    ['1934', '1989', '2020'],
    ['Genoa CFC', 'UC Sampdoria']
  ),

  nicola: new StadiumEntity(
    { city: 'Bari', country },
    [{ name: 'Stadio San Nicola', period: '1990-p.t.' }],
    true,
    '58 270',
    '1990',
    [],
    ['SSC Bari']
  ),

  maradona: new StadiumEntity(
    { city: 'Naples', country },
    [
      { name: 'Stadio San Paolo', period: '1959-2020' },
      { name: 'Stadio Diego Armando Maradona', period: '2020-p.t.' },
    ],
    true,
    '54 726',
    '1959',
    ['1989', '2019'],
    ['SSC Napoli']
  ),

  dallAra: new StadiumEntity(
    { city: 'Bologna', country },
    [
      { name: 'Stadio Littoriale', period: '1927-1945' },
      { name: 'Stadio Comunale', period: '1946-1983' },
      { name: `Stadio Renato Dall'Ara`, period: '1984-p.t.' },
    ],
    true,
    '36 000',
    '1927',
    ['2015'],
    ['Bologna F.C.']
  ),

  franchi: new StadiumEntity(
    { city: 'Florence', country },
    [
      { name: 'Stadio Giovanni Berta', period: '1931-1945' },
      { name: 'Stadio Comunale', period: '1946-1991' },
      { name: 'Stadio Artemio Franchi', period: '1992-p.t.' },
    ],
    true,
    '47 282',
    '1931',
    ['1990', '2013', '2024'],
    ['ACF Fiorentina']
  ),

  olimpico: new StadiumEntity(
    { city: 'Rome', country },
    [
      { name: 'Stadio dei Cipressi', period: '1911-1927' },
      { name: 'Stadio del Partito Nazionale Fascista', period: '1927-1945' },
      { name: 'Stadio Torino', period: '1945-1953' },
      { name: 'Stadio Olimpico', period: '1953-p.t.' },
    ],
    true,
    '70 634',
    '1927',
    ['1953', '1990', '2008'],
    ['AS Roma', 'SS Lazio']
  ),

  torino: new StadiumEntity(
    { city: 'Turin', country },
    [
      { name: 'Stadio Municipale Benito Mussolini', period: '1911-1927' },
      { name: 'Stadio Comunale Vittorio Pozzo', period: '1927-1945' },
      { name: 'Stadio Olimpico Grande Torino', period: '1953-p.t.' },
    ],
    true,
    '28 117',
    '1933',
    ['2006'],
    ['Torino FC']
  ),

  alpi: new StadiumEntity(
    { city: 'Turin', country },
    [{ name: 'Stadio delle Alpi', period: '1990-2006' }],
    false,
    '69 041',
    '1990',
    [],
    ['Juventus FC (1990-2006)', 'Torino FC (1990-2006)']
  ),

  ascarelli: new StadiumEntity(
    { city: 'Naples', country },
    [{ name: 'Stadio Giorgio Ascarelli', period: '0000-1942' }],
    false,
    '40 000',
    '1934',
    [],
    ['S.S.C. Napoli']
  ),

  nazionalePNF: new StadiumEntity(
    { city: 'Rome', country },
    [{ name: 'Stadio Nazionale del PNF', period: '1911-1953' }],
    false,
    '47 300',
    '1911',
    ['1928'],
    ['SS Lazio', 'AS Roma']
  ),

  bentegodi: new StadiumEntity(
    { city: 'Verona', country },
    [{ name: 'Stadio Marcantonio Bentegodi', period: '1963-p.t.' }],
    true,
    '39 211',
    '1963',
    ['1989', '2007', '2019'],
    ['Hellas Verona', 'Chievo Verona (2001-2021)']
  ),

  friuli: new StadiumEntity(
    { city: 'Udine', country },
    [
      { name: 'Stadio Friuli', period: '1976-2016' },
      { name: 'Stadio Dacia Arena', period: '2016-p.t.' },
    ],
    true,
    '25 144',
    '1976',
    ['1990', '2014-2016'],
    ['Udinese Calcio']
  ),

  santElia: new StadiumEntity(
    { city: 'Cagliari', country },
    [{ name: "Stadio Sant'Elia", period: '1970-2017' }],
    false, // Стадион снесен в 2017
    '39 905',
    '1970',
    ['1990', '2003'],
    ['Cagliari Calcio (1970-2017)']
  ),

  favorita: new StadiumEntity(
    { city: 'Palermo', country },
    [
      { name: 'Stadio La Favorita', period: '1932-2002' },
      { name: 'Stadio Renzo Barbera', period: '2002-p.t.' },
    ],
    true,
    '36 349',
    '1932',
    ['1989', '2002', '2016'],
    ['Palermo FC']
  ),
}
