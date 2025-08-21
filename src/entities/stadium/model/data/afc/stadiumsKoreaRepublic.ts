import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Korea Republic'

export const stadiumsSouthKorea: StadiumsData = {
  daegu: new StadiumEntity(
    { city: 'Daegu', country },
    [{ name: 'Daegu World Cup Stadium', period: '2001-p.t.' }],
    true,
    '66 422',
    '2001',
    ['2011', '2017'],
    ['Daegu FC']
  ),

  seoul: new StadiumEntity(
    { city: 'Seoul', country },
    [{ name: 'Seoul World Cup Stadium', period: '2001-p.t.' }],
    true,
    '66 704',
    '2001',
    ['2011', '2018'],
    ['FC Seoul', 'Korea Republic national team (selected matches)']
  ),

  busan: new StadiumEntity(
    { city: 'Busan', country },
    [{ name: 'Busan Asiad Main Stadium', period: '2001-p.t.' }],
    true,
    '53 864',
    '2001',
    ['2014'],
    ['Busan IPark']
  ),

  incheon: new StadiumEntity(
    { city: 'Incheon', country },
    [{ name: 'Incheon Football Stadium', period: '2001-p.t.' }],
    true,
    '20 891',
    '2001',
    ['2013'],
    ['Incheon United']
  ),

  ulsan: new StadiumEntity(
    { city: 'Ulsan', country },
    [{ name: 'Ulsan Munsu Football Stadium', period: '2001-p.t.' }],
    true,
    '44 474',
    '2001',
    ['2013'],
    ['Ulsan Hyundai']
  ),

  suwon: new StadiumEntity(
    { city: 'Suwon', country },
    [{ name: 'Suwon World Cup Stadium', period: '2001-p.t.' }],
    true,
    '44 031',
    '2001',
    ['2014'],
    ['Suwon Samsung Bluewings']
  ),

  gwangju: new StadiumEntity(
    { city: 'Gwangju', country },
    [{ name: 'Gwangju World Cup Stadium', period: '2001-p.t.' }],
    true,
    '44 118',
    '2001',
    ['2015'],
    ['Gwangju FC']
  ),

  jeonju: new StadiumEntity(
    { city: 'Jeonju', country },
    [{ name: 'Jeonju World Cup Stadium', period: '2001-p.t.' }],
    true,
    '42 477',
    '2001',
    ['2014'],
    ['Jeonbuk Hyundai Motors']
  ),

  jeju: new StadiumEntity(
    { city: 'Seogwipo', country },
    [{ name: 'Jeju World Cup Stadium', period: '2001-p.t.' }],
    true,
    '35 657',
    '2001',
    ['2016'],
    ['Jeju United']
  ),

  daejeon: new StadiumEntity(
    { city: 'Daejeon', country },
    [{ name: 'Daejeon World Cup Stadium', period: '2001-p.t.' }],
    true,
    '40 535',
    '2001',
    ['2013'],
    ['Daejeon Hana Citizen']
  ),
}
