import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Germany'

export const stadiumsGermany: StadiumsData = {
  olympiaB: new StadiumEntity(
    { city: 'Berlin', country },
    [{ name: 'Olympiastadion Berlin', period: '1936-p.t.' }],
    true,
    '74 475',
    '1936',
    ['1974', '2004', '2015'],
    ['Hertha BSC', 'Germany national team (selected matches)']
  ),

  allianz: new StadiumEntity(
    { city: 'Munich', country },
    [{ name: 'Allianz Arena', period: '2005-p.t.' }],
    true,
    '75 024',
    '2005',
    ['2012'],
    ['Bayern Munich', '1860 Munich (2005-2017)']
  ),

  olympiaM: new StadiumEntity(
    { city: 'Munich', country },
    [{ name: 'Olympiastadion Munich', period: '1972-p.t.' }],
    true,
    '69 250',
    '1972',
    ['1996', '2011'],
    []
  ),

  neckar: new StadiumEntity(
    { city: 'Stuttgart', country },
    [{ name: 'Neckarstadion', period: '1933-1993' }],
    false,
    '72 000',
    '1933',
    ['1949', '1974'],
    ['VfB Stuttgart (historical)']
  ),

  daimler: new StadiumEntity(
    { city: 'Stuttgart', country },
    [
      { name: 'Gottlieb-Daimler-Stadion', period: '1993-2008' },
      { name: 'Mercedes-Benz Arena', period: '2008-p.t.' },
    ],
    true,
    '60 449',
    '1993',
    ['2008', '2011', '2019'],
    ['VfB Stuttgart']
  ),

  parkGelsenk: new StadiumEntity(
    { city: 'Gelsenkirchen', country },
    [{ name: 'Parkstadion', period: '1973-2001' }],
    false,
    '62 000',
    '1973',
    ['1988'],
    ['Schalke 04 (historical)']
  ),

  aufSchalke: new StadiumEntity(
    { city: 'Gelsenkirchen', country },
    [
      { name: 'Arena AufSchalke', period: '2001-2005' },
      { name: 'Veltins-Arena', period: '2005-p.t.' },
    ],
    true,
    '62 271',
    '2001',
    ['2005', '2015'],
    ['Schalke 04']
  ),

  rhein: new StadiumEntity(
    { city: 'Düsseldorf', country },
    [{ name: 'Rheinstadion', period: '1926-2002' }],
    false,
    '55 850',
    '1926',
    ['1954', '1974'],
    ['Fortuna Düsseldorf (historical)']
  ),

  wald: new StadiumEntity(
    { city: 'Frankfurt', country },
    [
      { name: 'Waldstadion', period: '1925-2005' },
      { name: 'Deutsche Bank Park', period: '2020-p.t.' },
    ],
    true,
    '58 000',
    '1925',
    ['1955', '1974', '2005', '2020'],
    ['Eintracht Frankfurt']
  ),

  commerzbank: new StadiumEntity(
    { city: 'Frankfurt', country },
    [{ name: 'Commerzbank-Arena', period: '2005-2020' }],
    false,
    '51 500',
    '2005',
    ['2011'],
    ['Eintracht Frankfurt (historical)']
  ),

  volkspark: new StadiumEntity(
    { city: 'Hamburg', country },
    [
      { name: 'Volksparkstadion', period: '1953-1998' },
      { name: 'HSH Nordbank Arena', period: '2001-2007' },
      { name: 'Imtech Arena', period: '2007-2015' },
      { name: 'Volksparkstadion', period: '2015-p.t.' },
    ],
    true,
    '57 000',
    '1953',
    ['1974', '1998', '2001', '2015'],
    ['Hamburger SV']
  ),

  aol: new StadiumEntity(
    { city: 'Hamburg', country },
    [{ name: 'AOL Arena', period: '2001-2007' }],
    false,
    '56 114',
    '2001',
    [],
    ['Hamburger SV (historical)']
  ),

  niedersachsen: new StadiumEntity(
    { city: 'Hanover', country },
    [
      { name: 'Niedersachsenstadion', period: '1954-2002' },
      { name: 'AWD-Arena', period: '2002-2013' },
      { name: 'HDI-Arena', period: '2013-p.t.' },
    ],
    true,
    '49 200',
    '1954',
    ['1974', '2002', '2013'],
    ['Hannover 96']
  ),

  zentral: new StadiumEntity(
    { city: 'Leipzig', country },
    [
      { name: 'Zentralstadion', period: '1956-2000' },
      { name: 'Red Bull Arena', period: '2010-p.t.' },
    ],
    true,
    '47 069',
    '1956',
    ['1974', '2010'],
    ['RB Leipzig']
  ),

  awd: new StadiumEntity(
    { city: 'Hanover', country },
    [{ name: 'AWD-Arena', period: '2002-2013' }],
    false,
    '49 200',
    '2002',
    [],
    ['Hannover 96 (historical)']
  ),

  westfalen: new StadiumEntity(
    { city: 'Dortmund', country },
    [
      { name: 'Westfalenstadion', period: '1974-2005' },
      { name: 'Signal Iduna Park', period: '2005-p.t.' },
    ],
    true,
    '81 365',
    '1974',
    ['1999', '2005', '2015'],
    ['Borussia Dortmund']
  ),

  easyCredit: new StadiumEntity(
    { city: 'Nuremberg', country },
    [
      { name: 'Frankenstadion', period: '1928-1991' },
      { name: 'easyCredit-Stadion', period: '2006-2012' },
      { name: 'Max-Morlock-Stadion', period: '2012-p.t.' },
    ],
    true,
    '50 000',
    '1928',
    ['1991', '2006', '2012'],
    ['1. FC Nürnberg']
  ),

  rheinEnergie: new StadiumEntity(
    { city: 'Cologne', country },
    [
      { name: 'Müngersdorfer Stadion', period: '1923-2003' },
      { name: 'RheinEnergieStadion', period: '2003-p.t.' },
    ],
    true,
    '50 000',
    '1923',
    ['1975', '2003', '2015'],
    ['1. FC Köln']
  ),

  fritzWalter: new StadiumEntity(
    { city: 'Kaiserslautern', country },
    [{ name: 'Fritz-Walter-Stadion', period: '1920-p.t.' }],
    true,
    '49 780',
    '1920',
    ['1956', '1978', '2006'],
    ['1. FC Kaiserslautern']
  ),

  signal: new StadiumEntity(
    { city: 'Dortmund', country },
    [{ name: 'Signal Iduna Park', period: '2005-p.t.' }],
    true,
    '81 365',
    '2005',
    ['2015'],
    ['Borussia Dortmund']
  ),
}
