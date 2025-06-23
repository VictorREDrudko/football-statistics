import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsSouthKorea: CountryStadiums = {
  country: 'Korea Republic',
  stadiums: {
    daegu: new Stadium(
      [{ title: 'Daegu World Cup Stadium', period: '2001-p.t.' }],
      'Daegu',
      '66 422',
      ['2001', '2011', '2017'],
      {
        isActive: true,
        homeTeam: ['Daegu FC'],
        imageUrl: '',
      }
    ),

    seoul: new Stadium(
      [{ title: 'Seoul World Cup Stadium', period: '2001-p.t.' }],
      'Seoul',
      '66 704',
      ['2001', '2011', '2018'],
      {
        isActive: true,
        homeTeam: ['FC Seoul', 'Korea Republic national team (selected matches)'],
        imageUrl: '',
      }
    ),

    busan: new Stadium(
      [{ title: 'Busan Asiad Main Stadium', period: '2001-p.t.' }],
      'Busan',
      '53 864',
      ['2001', '2014'],
      {
        isActive: true,
        homeTeam: ['Busan IPark'],
        imageUrl: '',
      }
    ),

    incheon: new Stadium(
      [{ title: 'Incheon Football Stadium', period: '2001-p.t.' }],
      'Incheon',
      '20 891',
      ['2001', '2013'],
      {
        isActive: true,
        homeTeam: ['Incheon United'],
        imageUrl: '',
      }
    ),

    ulsan: new Stadium(
      [{ title: 'Ulsan Munsu Football Stadium', period: '2001-p.t.' }],
      'Ulsan',
      '44 474',
      ['2001', '2013'],
      {
        isActive: true,
        homeTeam: ['Ulsan Hyundai'],
        imageUrl: '',
      }
    ),

    suwon: new Stadium(
      [{ title: 'Suwon World Cup Stadium', period: '2001-p.t.' }],
      'Suwon',
      '44 031',
      ['2001', '2014'],
      {
        isActive: true,
        homeTeam: ['Suwon Samsung Bluewings'],
        imageUrl: '',
      }
    ),

    gwangju: new Stadium(
      [{ title: 'Gwangju World Cup Stadium', period: '2001-p.t.' }],
      'Gwangju',
      '44 118',
      ['2001', '2015'],
      {
        isActive: true,
        homeTeam: ['Gwangju FC'],
        imageUrl: '',
      }
    ),

    jeonju: new Stadium(
      [{ title: 'Jeonju World Cup Stadium', period: '2001-p.t.' }],
      'Jeonju',
      '42 477',
      ['2001', '2014'],
      {
        isActive: true,
        homeTeam: ['Jeonbuk Hyundai Motors'],
        imageUrl: '',
      }
    ),

    jeju: new Stadium(
      [{ title: 'Jeju World Cup Stadium', period: '2001-p.t.' }],
      'Seogwipo',
      '35 657',
      ['2001', '2016'],
      {
        isActive: true,
        homeTeam: ['Jeju United'],
        imageUrl: '',
      }
    ),

    daejeon: new Stadium(
      [{ title: 'Daejeon World Cup Stadium', period: '2001-p.t.' }],
      'Daejeon',
      '40 535',
      ['2001', '2013'],
      {
        isActive: true,
        homeTeam: ['Daejeon Hana Citizen'],
        imageUrl: '',
      }
    ),
  },
}
