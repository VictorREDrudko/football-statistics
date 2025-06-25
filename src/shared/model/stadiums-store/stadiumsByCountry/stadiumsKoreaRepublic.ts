import { StadiumsData } from '../types'
import { Stadium } from '../class-stadium/Stadium'
import { Country } from '../../national-teams-store/teams/classTeam/types'

const country: Country = 'Korea Republic'

export const stadiumsSouthKorea: StadiumsData = {
  daegu: new Stadium(
    {
      location: { city: 'Daegu', country },
      names: [{ name: 'Daegu World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '66 422',
    '2001',
    ['2011', '2017'],
    ['Daegu FC'],
    []
  ),

  seoul: new Stadium(
    {
      location: { city: 'Seoul', country },
      names: [{ name: 'Seoul World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '66 704',
    '2001',
    ['2011', '2018'],
    ['FC Seoul', 'Korea Republic national team (selected matches)'],
    []
  ),

  busan: new Stadium(
    {
      location: { city: 'Busan', country },
      names: [{ name: 'Busan Asiad Main Stadium', period: '2001-p.t.' }],
    },
    true,
    '53 864',
    '2001',
    ['2014'],
    ['Busan IPark'],
    []
  ),

  incheon: new Stadium(
    {
      location: { city: 'Incheon', country },
      names: [{ name: 'Incheon Football Stadium', period: '2001-p.t.' }],
    },
    true,
    '20 891',
    '2001',
    ['2013'],
    ['Incheon United'],
    []
  ),

  ulsan: new Stadium(
    {
      location: { city: 'Ulsan', country },
      names: [{ name: 'Ulsan Munsu Football Stadium', period: '2001-p.t.' }],
    },
    true,
    '44 474',
    '2001',
    ['2013'],
    ['Ulsan Hyundai'],
    []
  ),

  suwon: new Stadium(
    {
      location: { city: 'Suwon', country },
      names: [{ name: 'Suwon World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '44 031',
    '2001',
    ['2014'],
    ['Suwon Samsung Bluewings'],
    []
  ),

  gwangju: new Stadium(
    {
      location: { city: 'Gwangju', country },
      names: [{ name: 'Gwangju World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '44 118',
    '2001',
    ['2015'],
    ['Gwangju FC'],
    []
  ),

  jeonju: new Stadium(
    {
      location: { city: 'Jeonju', country },
      names: [{ name: 'Jeonju World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '42 477',
    '2001',
    ['2014'],
    ['Jeonbuk Hyundai Motors'],
    []
  ),

  jeju: new Stadium(
    {
      location: { city: 'Seogwipo', country },
      names: [{ name: 'Jeju World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '35 657',
    '2001',
    ['2016'],
    ['Jeju United'],
    []
  ),

  daejeon: new Stadium(
    {
      location: { city: 'Daejeon', country },
      names: [{ name: 'Daejeon World Cup Stadium', period: '2001-p.t.' }],
    },
    true,
    '40 535',
    '2001',
    ['2013'],
    ['Daejeon Hana Citizen'],
    []
  ),
}
