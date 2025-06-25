import { StadiumsData } from '../types'
import { Stadium } from '../class-stadium/Stadium'
import { Country } from '../../national-teams-store/teams/classTeam/types'

const country: Country = 'Japan'

export const stadiumsJapan: StadiumsData = {
  yokohama: new Stadium(
    {
      location: { city: 'Yokohama', country },
      names: [{ name: 'International Stadium Yokohama', period: '1998-p.t.' }],
    },
    true,
    '72 327',
    '1998',
    ['2002', '2017', '2022'],
    ['Yokohama F. Marinos', 'Japan national team'],
    []
  ),

  saitama: new Stadium(
    {
      location: { city: 'Saitama', country },
      names: [{ name: 'Saitama Stadium 2002', period: '2001-p.t.' }],
    },
    true,
    '63 700',
    '2001',
    ['2018'],
    ['Urawa Red Diamonds'],
    []
  ),

  shizuoka: new Stadium(
    {
      location: { city: 'Fukuroi, Shizuoka', country },
      names: [{ name: 'Shizuoka Stadium ECOPA', period: '2001-p.t.' }],
    },
    true,
    '50 889',
    '2001',
    ['2019'],
    ['Júbilo Iwata', 'Shimizu S-Pulse'],
    []
  ),

  nagai: new Stadium(
    {
      location: { city: 'Osaka', country },
      names: [
        { name: 'Nagai Stadium (original)', period: '1964-1995' },
        { name: 'Yanmar Stadium Nagai', period: '1996-p.t.' },
      ],
    },
    true,
    '47 853',
    '1964',
    ['1996', '2007', '2018'],
    ['Cerezo Osaka'],
    []
  ),

  miyagi: new Stadium(
    {
      location: { city: 'Rifu, Miyagi', country },
      names: [{ name: 'Miyagi Stadium', period: '2000-p.t.' }],
    },
    true,
    '49 133',
    '2000',
    ['2016'],
    ['Vegalta Sendai'],
    []
  ),

  oita: new Stadium(
    {
      location: { city: 'Ōita', country },
      names: [{ name: 'Ōita Bank Dome', period: '2001-p.t.' }],
    },
    true,
    '40 000',
    '2001',
    ['2014', '2020'],
    ['Ōita Trinita'],
    []
  ),

  niigata: new Stadium(
    {
      location: { city: 'Niigata', country },
      names: [{ name: 'Denka Big Swan Stadium', period: '2001-p.t.' }],
    },
    true,
    '42 300',
    '2001',
    ['2017'],
    ['Albirex Niigata'],
    []
  ),

  kashima: new Stadium(
    {
      location: { city: 'Kashima, Ibaraki', country },
      names: [{ name: 'Kashima Soccer Stadium', period: '1993-p.t.' }],
    },
    true,
    '40 728',
    '1993',
    ['2001', '2016'],
    ['Kashima Antlers'],
    []
  ),

  kobe: new Stadium(
    {
      location: { city: 'Kobe', country },
      names: [{ name: 'Noevir Stadium Kobe', period: '2001-p.t.' }],
    },
    true,
    '30 132',
    '2001',
    ['2013', '2021'],
    ['Vissel Kobe'],
    []
  ),

  sapporo: new Stadium(
    {
      location: { city: 'Sapporo', country },
      names: [{ name: 'Sapporo Dome', period: '2001-p.t.' }],
    },
    true,
    '41 484',
    '2001',
    ['2016', '2022'],
    ['Hokkaido Consadole Sapporo'],
    []
  ),
}
