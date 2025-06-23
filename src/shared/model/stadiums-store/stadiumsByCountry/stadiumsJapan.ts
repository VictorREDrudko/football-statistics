import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsJapan: CountryStadiums = {
  country: 'Japan',
  stadiums: {
    yokohama: new Stadium(
      [{ title: 'International Stadium Yokohama', period: '1998-p.t.' }],
      'Yokohama',
      '72 327',
      ['1998', '2002', '2017', '2022'],
      {
        isActive: true,
        homeTeam: ['Yokohama F. Marinos', 'Japan national team'],
        imageUrl: '',
      }
    ),

    saitama: new Stadium(
      [{ title: 'Saitama Stadium 2002', period: '2001-p.t.' }],
      'Saitama',
      '63 700',
      ['2001', '2018'],
      {
        isActive: true,
        homeTeam: ['Urawa Red Diamonds'],
        imageUrl: '',
      }
    ),

    shizuoka: new Stadium(
      [{ title: 'Shizuoka Stadium ECOPA', period: '2001-p.t.' }],
      'Fukuroi, Shizuoka',
      '50 889',
      ['2001', '2019'],
      {
        isActive: true,
        homeTeam: ['Júbilo Iwata', 'Shimizu S-Pulse'],
        imageUrl: '',
      }
    ),

    nagai: new Stadium(
      [
        { title: 'Nagai Stadium (original)', period: '1964-1995' },
        { title: 'Yanmar Stadium Nagai', period: '1996-p.t.' },
      ],
      'Osaka',
      '47 853',
      ['1964', '1996', '2007', '2018'],
      {
        isActive: true,
        homeTeam: ['Cerezo Osaka'],
        imageUrl: '',
      }
    ),

    miyagi: new Stadium(
      [{ title: 'Miyagi Stadium', period: '2000-p.t.' }],
      'Rifu, Miyagi',
      '49 133',
      ['2000', '2016'],
      {
        isActive: true,
        homeTeam: ['Vegalta Sendai'],
        imageUrl: '',
      }
    ),

    oita: new Stadium([{ title: 'Ōita Bank Dome', period: '2001-p.t.' }], 'Ōita', '40 000', ['2001', '2014', '2020'], {
      isActive: true,
      homeTeam: ['Ōita Trinita'],
      imageUrl: '',
    }),

    niigata: new Stadium(
      [{ title: 'Denka Big Swan Stadium', period: '2001-p.t.' }],
      'Niigata',
      '42 300',
      ['2001', '2017'],
      {
        isActive: true,
        homeTeam: ['Albirex Niigata'],
        imageUrl: '',
      }
    ),

    kashima: new Stadium(
      [{ title: 'Kashima Soccer Stadium', period: '1993-p.t.' }],
      'Kashima, Ibaraki',
      '40 728',
      ['1993', '2001', '2016'],
      {
        isActive: true,
        homeTeam: ['Kashima Antlers'],
        imageUrl: '',
      }
    ),

    kobe: new Stadium(
      [{ title: 'Noevir Stadium Kobe', period: '2001-p.t.' }],
      'Kobe',
      '30 132',
      ['2001', '2013', '2021'],
      {
        isActive: true,
        homeTeam: ['Vissel Kobe'],
        imageUrl: '',
      }
    ),

    sapporo: new Stadium(
      [{ title: 'Sapporo Dome', period: '2001-p.t.' }],
      'Sapporo',
      '41 484',
      ['2001', '2016', '2022'],
      {
        isActive: true,
        homeTeam: ['Hokkaido Consadole Sapporo'],
        imageUrl: '',
      }
    ),
  },
}
