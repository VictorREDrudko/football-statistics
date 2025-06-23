import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsGermany: CountryStadiums = {
  country: 'Germany',
  stadiums: {
    olympiaB: new Stadium(
      [{ title: 'Olympiastadion Berlin', period: '1936-p.t.' }],
      'Berlin',
      '74 475',
      ['1936', '1974', '2004', '2015'],
      {
        isActive: true,
        homeTeam: ['Hertha BSC', 'Germany national team (selected matches)'],
        imageUrl: '',
      }
    ),

    allianz: new Stadium([{ title: 'Allianz Arena', period: '2005-p.t.' }], 'Munich', '75 024', ['2005', '2012'], {
      isActive: true,
      homeTeam: ['Bayern Munich', '1860 Munich (2005-2017)'],
      imageUrl: '',
    }),

    olympiaM: new Stadium(
      [{ title: 'Olympiastadion Munich', period: '1972-p.t.' }],
      'Munich',
      '69 250',
      ['1972', '1996', '2011'],
      {
        isActive: true,
        homeTeam: [],
        imageUrl: '',
      }
    ),

    neckar: new Stadium(
      [{ title: 'Neckarstadion', period: '1933-1993' }],
      'Stuttgart',
      '72 000',
      ['1933', '1949', '1974'],
      {
        isActive: false,
        homeTeam: ['VfB Stuttgart (historical)'],
        imageUrl: '',
      }
    ),

    daimler: new Stadium(
      [
        { title: 'Gottlieb-Daimler-Stadion', period: '1993-2008' },
        { title: 'Mercedes-Benz Arena', period: '2008-p.t.' },
      ],
      'Stuttgart',
      '60 449',
      ['1993', '2008', '2011', '2019'],
      {
        isActive: true,
        homeTeam: ['VfB Stuttgart'],
        imageUrl: '',
      }
    ),

    parkGelsenk: new Stadium(
      [{ title: 'Parkstadion', period: '1973-2001' }],
      'Gelsenkirchen',
      '62 000',
      ['1973', '1988'],
      {
        isActive: false,
        homeTeam: ['Schalke 04 (historical)'],
        imageUrl: '',
      }
    ),

    aufSchalke: new Stadium(
      [
        { title: 'Arena AufSchalke', period: '2001-2005' },
        { title: 'Veltins-Arena', period: '2005-p.t.' },
      ],
      'Gelsenkirchen',
      '62 271',
      ['2001', '2005', '2015'],
      {
        isActive: true,
        homeTeam: ['Schalke 04'],
        imageUrl: '',
      }
    ),

    rhein: new Stadium(
      [{ title: 'Rheinstadion', period: '1926-2002' }],
      'Düsseldorf',
      '55 850',
      ['1926', '1954', '1974'],
      {
        isActive: false,
        homeTeam: ['Fortuna Düsseldorf (historical)'],
        imageUrl: '',
      }
    ),

    wald: new Stadium(
      [
        { title: 'Waldstadion', period: '1925-2005' },
        { title: 'Deutsche Bank Park', period: '2020-p.t.' },
      ],
      'Frankfurt',
      '58 000',
      ['1925', '1955', '1974', '2005', '2020'],
      {
        isActive: true,
        homeTeam: ['Eintracht Frankfurt'],
        imageUrl: '',
      }
    ),

    commerzbank: new Stadium(
      [{ title: 'Commerzbank-Arena', period: '2005-2020' }],
      'Frankfurt',
      '51 500',
      ['2005', '2011'],
      {
        isActive: false,
        homeTeam: ['Eintracht Frankfurt (historical)'],
        imageUrl: '',
      }
    ),

    volkspark: new Stadium(
      [
        { title: 'Volksparkstadion', period: '1953-1998' },
        { title: 'HSH Nordbank Arena', period: '2001-2007' },
        { title: 'Imtech Arena', period: '2007-2015' },
        { title: 'Volksparkstadion', period: '2015-p.t.' },
      ],
      'Hamburg',
      '57 000',
      ['1953', '1974', '1998', '2001', '2015'],
      {
        isActive: true,
        homeTeam: ['Hamburger SV'],
        imageUrl: '',
      }
    ),

    aol: new Stadium([{ title: 'AOL Arena', period: '2001-2007' }], 'Hamburg', '56 114', ['2001'], {
      isActive: false,
      homeTeam: ['Hamburger SV (historical)'],
      imageUrl: '',
    }),

    niedersachsen: new Stadium(
      [
        { title: 'Niedersachsenstadion', period: '1954-2002' },
        { title: 'AWD-Arena', period: '2002-2013' },
        { title: 'HDI-Arena', period: '2013-p.t.' },
      ],
      'Hanover',
      '49 200',
      ['1954', '1974', '2002', '2013'],
      {
        isActive: true,
        homeTeam: ['Hannover 96'],
        imageUrl: '',
      }
    ),

    zentral: new Stadium(
      [
        { title: 'Zentralstadion', period: '1956-2000' },
        { title: 'Red Bull Arena', period: '2010-p.t.' },
      ],
      'Leipzig',
      '47 069',
      ['1956', '1974', '2010'],
      {
        isActive: true,
        homeTeam: ['RB Leipzig'],
        imageUrl: '',
      }
    ),

    awd: new Stadium([{ title: 'AWD-Arena', period: '2002-2013' }], 'Hanover', '49 200', ['2002'], {
      isActive: false,
      homeTeam: ['Hannover 96 (historical)'],
      imageUrl: '',
    }),

    westfalen: new Stadium(
      [
        { title: 'Westfalenstadion', period: '1974-2005' },
        { title: 'Signal Iduna Park', period: '2005-p.t.' },
      ],
      'Dortmund',
      '81 365',
      ['1974', '1999', '2005', '2015'],
      {
        isActive: true,
        homeTeam: ['Borussia Dortmund'],
        imageUrl: '',
      }
    ),

    easyCredit: new Stadium(
      [
        { title: 'Frankenstadion', period: '1928-1991' },
        { title: 'easyCredit-Stadion', period: '2006-2012' },
        { title: 'Max-Morlock-Stadion', period: '2012-p.t.' },
      ],
      'Nuremberg',
      '50 000',
      ['1928', '1991', '2006', '2012'],
      {
        isActive: true,
        homeTeam: ['1. FC Nürnberg'],
        imageUrl: '',
      }
    ),

    rheinEnergie: new Stadium(
      [
        { title: 'Müngersdorfer Stadion', period: '1923-2003' },
        { title: 'RheinEnergieStadion', period: '2003-p.t.' },
      ],
      'Cologne',
      '50 000',
      ['1923', '1975', '2003', '2015'],
      {
        isActive: true,
        homeTeam: ['1. FC Köln'],
        imageUrl: '',
      }
    ),

    fritzWalter: new Stadium(
      [{ title: 'Fritz-Walter-Stadion', period: '1920-p.t.' }],
      'Kaiserslautern',
      '49 780',
      ['1920', '1956', '1978', '2006'],
      {
        isActive: true,
        homeTeam: ['1. FC Kaiserslautern'],
        imageUrl: '',
      }
    ),

    signal: new Stadium([{ title: 'Signal Iduna Park', period: '2005-p.t.' }], 'Dortmund', '81 365', ['2005', '2015'], {
      isActive: true,
      homeTeam: ['Borussia Dortmund'],
      imageUrl: '',
    }),
  },
}
