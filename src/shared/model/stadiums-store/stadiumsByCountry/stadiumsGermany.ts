import { StadiumsData } from '../types'
import { Stadium } from '../class-stadium/Stadium'
import { Country } from '../../national-teams-store/teams/classTeam/types'

const country: Country = 'Germany'

export const stadiumsGermany: StadiumsData = {
  olympiaB: new Stadium(
    {
      location: { city: 'Berlin', country },
      names: [{ name: 'Olympiastadion Berlin', period: '1936-p.t.' }],
    },
    true,
    '74 475',
    '1936',
    ['1974', '2004', '2015'],
    ['Hertha BSC', 'Germany national team (selected matches)'],
    []
  ),

  allianz: new Stadium(
    {
      location: { city: 'Munich', country },
      names: [{ name: 'Allianz Arena', period: '2005-p.t.' }],
    },
    true,
    '75 024',
    '2005',
    ['2012'],
    ['Bayern Munich', '1860 Munich (2005-2017)'],
    []
  ),

  olympiaM: new Stadium(
    {
      location: { city: 'Munich', country },
      names: [{ name: 'Olympiastadion Munich', period: '1972-p.t.' }],
    },
    true,
    '69 250',
    '1972',
    ['1996', '2011'],
    [],
    []
  ),

  neckar: new Stadium(
    {
      location: { city: 'Stuttgart', country },
      names: [{ name: 'Neckarstadion', period: '1933-1993' }],
    },
    false,
    '72 000',
    '1933',
    ['1949', '1974'],
    ['VfB Stuttgart (historical)'],
    []
  ),

  daimler: new Stadium(
    {
      location: { city: 'Stuttgart', country },
      names: [
        { name: 'Gottlieb-Daimler-Stadion', period: '1993-2008' },
        { name: 'Mercedes-Benz Arena', period: '2008-p.t.' },
      ],
    },
    true,
    '60 449',
    '1993',
    ['2008', '2011', '2019'],
    ['VfB Stuttgart'],
    []
  ),

  parkGelsenk: new Stadium(
    {
      location: { city: 'Gelsenkirchen', country },
      names: [{ name: 'Parkstadion', period: '1973-2001' }],
    },
    false,
    '62 000',
    '1973',
    ['1988'],
    ['Schalke 04 (historical)'],
    []
  ),

  aufSchalke: new Stadium(
    {
      location: { city: 'Gelsenkirchen', country },
      names: [
        { name: 'Arena AufSchalke', period: '2001-2005' },
        { name: 'Veltins-Arena', period: '2005-p.t.' },
      ],
    },
    true,
    '62 271',
    '2001',
    ['2005', '2015'],
    ['Schalke 04'],
    []
  ),

  rhein: new Stadium(
    {
      location: { city: 'Düsseldorf', country },
      names: [{ name: 'Rheinstadion', period: '1926-2002' }],
    },
    false,
    '55 850',
    '1926',
    ['1954', '1974'],
    ['Fortuna Düsseldorf (historical)'],
    []
  ),

  wald: new Stadium(
    {
      location: { city: 'Frankfurt', country },
      names: [
        { name: 'Waldstadion', period: '1925-2005' },
        { name: 'Deutsche Bank Park', period: '2020-p.t.' },
      ],
    },
    true,
    '58 000',
    '1925',
    ['1955', '1974', '2005', '2020'],
    ['Eintracht Frankfurt'],
    []
  ),

  commerzbank: new Stadium(
    {
      location: { city: 'Frankfurt', country },
      names: [{ name: 'Commerzbank-Arena', period: '2005-2020' }],
    },
    false,
    '51 500',
    '2005',
    ['2011'],
    ['Eintracht Frankfurt (historical)'],
    []
  ),

  volkspark: new Stadium(
    {
      location: { city: 'Hamburg', country },
      names: [
        { name: 'Volksparkstadion', period: '1953-1998' },
        { name: 'HSH Nordbank Arena', period: '2001-2007' },
        { name: 'Imtech Arena', period: '2007-2015' },
        { name: 'Volksparkstadion', period: '2015-p.t.' },
      ],
    },
    true,
    '57 000',
    '1953',
    ['1974', '1998', '2001', '2015'],
    ['Hamburger SV'],
    []
  ),

  aol: new Stadium(
    {
      location: { city: 'Hamburg', country },
      names: [{ name: 'AOL Arena', period: '2001-2007' }],
    },
    false,
    '56 114',
    '2001',
    [],
    ['Hamburger SV (historical)'],
    []
  ),

  niedersachsen: new Stadium(
    {
      location: { city: 'Hanover', country },
      names: [
        { name: 'Niedersachsenstadion', period: '1954-2002' },
        { name: 'AWD-Arena', period: '2002-2013' },
        { name: 'HDI-Arena', period: '2013-p.t.' },
      ],
    },
    true,
    '49 200',
    '1954',
    ['1974', '2002', '2013'],
    ['Hannover 96'],
    []
  ),

  zentral: new Stadium(
    {
      location: { city: 'Leipzig', country },
      names: [
        { name: 'Zentralstadion', period: '1956-2000' },
        { name: 'Red Bull Arena', period: '2010-p.t.' },
      ],
    },
    true,
    '47 069',
    '1956',
    ['1974', '2010'],
    ['RB Leipzig'],
    []
  ),

  awd: new Stadium(
    {
      location: { city: 'Hanover', country },
      names: [{ name: 'AWD-Arena', period: '2002-2013' }],
    },
    false,
    '49 200',
    '2002',
    [],
    ['Hannover 96 (historical)'],
    []
  ),

  westfalen: new Stadium(
    {
      location: { city: 'Dortmund', country },
      names: [
        { name: 'Westfalenstadion', period: '1974-2005' },
        { name: 'Signal Iduna Park', period: '2005-p.t.' },
      ],
    },
    true,
    '81 365',
    '1974',
    ['1999', '2005', '2015'],
    ['Borussia Dortmund'],
    []
  ),

  easyCredit: new Stadium(
    {
      location: { city: 'Nuremberg', country },
      names: [
        { name: 'Frankenstadion', period: '1928-1991' },
        { name: 'easyCredit-Stadion', period: '2006-2012' },
        { name: 'Max-Morlock-Stadion', period: '2012-p.t.' },
      ],
    },
    true,
    '50 000',
    '1928',
    ['1991', '2006', '2012'],
    ['1. FC Nürnberg'],
    []
  ),

  rheinEnergie: new Stadium(
    {
      location: { city: 'Cologne', country },
      names: [
        { name: 'Müngersdorfer Stadion', period: '1923-2003' },
        { name: 'RheinEnergieStadion', period: '2003-p.t.' },
      ],
    },
    true,
    '50 000',
    '1923',
    ['1975', '2003', '2015'],
    ['1. FC Köln'],
    []
  ),

  fritzWalter: new Stadium(
    {
      location: { city: 'Kaiserslautern', country },
      names: [{ name: 'Fritz-Walter-Stadion', period: '1920-p.t.' }],
    },
    true,
    '49 780',
    '1920',
    ['1956', '1978', '2006'],
    ['1. FC Kaiserslautern'],
    []
  ),

  signal: new Stadium(
    {
      location: { city: 'Dortmund', country },
      names: [{ name: 'Signal Iduna Park', period: '2005-p.t.' }],
    },
    true,
    '81 365',
    '2005',
    ['2015'],
    ['Borussia Dortmund'],
    []
  ),
}
