import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Japan'

export const stadiumsJapan: StadiumsData = {
  yokohama: new StadiumEntity(
    { city: 'Yokohama', country },
    [{ name: 'International Stadium Yokohama', period: '1998-p.t.' }],
    true,
    '72 327',
    '1998',
    ['2002', '2017', '2022'],
    ['Yokohama F. Marinos', 'Japan national team']
  ),

  saitama: new StadiumEntity(
    { city: 'Saitama', country },
    [{ name: 'Saitama Stadium 2002', period: '2001-p.t.' }],
    true,
    '63 700',
    '2001',
    ['2018'],
    ['Urawa Red Diamonds']
  ),

  shizuoka: new StadiumEntity(
    { city: 'Fukuroi, Shizuoka', country },
    [{ name: 'Shizuoka Stadium ECOPA', period: '2001-p.t.' }],
    true,
    '50 889',
    '2001',
    ['2019'],
    ['Júbilo Iwata', 'Shimizu S-Pulse']
  ),

  nagai: new StadiumEntity(
    { city: 'Osaka', country },
    [
      { name: 'Nagai Stadium (original)', period: '1964-1995' },
      { name: 'Yanmar Stadium Nagai', period: '1996-p.t.' },
    ],
    true,
    '47 853',
    '1964',
    ['1996', '2007', '2018'],
    ['Cerezo Osaka']
  ),

  miyagi: new StadiumEntity(
    { city: 'Rifu, Miyagi', country },
    [{ name: 'Miyagi Stadium', period: '2000-p.t.' }],
    true,
    '49 133',
    '2000',
    ['2016'],
    ['Vegalta Sendai']
  ),

  oita: new StadiumEntity(
    { city: 'Ōita', country },
    [{ name: 'Ōita Bank Dome', period: '2001-p.t.' }],
    true,
    '40 000',
    '2001',
    ['2014', '2020'],
    ['Ōita Trinita']
  ),

  niigata: new StadiumEntity(
    { city: 'Niigata', country },
    [{ name: 'Denka Big Swan Stadium', period: '2001-p.t.' }],
    true,
    '42 300',
    '2001',
    ['2017'],
    ['Albirex Niigata']
  ),

  kashima: new StadiumEntity(
    { city: 'Kashima, Ibaraki', country },
    [{ name: 'Kashima Soccer Stadium', period: '1993-p.t.' }],
    true,
    '40 728',
    '1993',
    ['2001', '2016'],
    ['Kashima Antlers']
  ),

  kobe: new StadiumEntity(
    { city: 'Kobe', country },
    [{ name: 'Noevir Stadium Kobe', period: '2001-p.t.' }],
    true,
    '30 132',
    '2001',
    ['2013', '2021'],
    ['Vissel Kobe']
  ),

  sapporo: new StadiumEntity(
    { city: 'Sapporo', country },
    [{ name: 'Sapporo Dome', period: '2001-p.t.' }],
    true,
    '41 484',
    '2001',
    ['2016', '2022'],
    ['Hokkaido Consadole Sapporo']
  ),
}
