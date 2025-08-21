import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Chile'

export const stadiumsChile: StadiumsData = {
  nacional: new StadiumEntity(
    { city: 'Santiago', country },
    [{ name: 'Estadio Nacional', period: '1938-p.t.' }],
    true,
    '48 665',
    '1938',
    ['1962', '2008', '2010'],
    ['Chile national team', 'Universidad de Chile', 'Colo-Colo']
  ),

  sausalito: new StadiumEntity(
    { city: 'Viña del Mar', country },
    [{ name: 'Estadio Sausalito', period: '1929-p.t.' }],
    true,
    '23 423',
    '1929',
    ['1962', '2015'],
    ['Everton de Viña del Mar']
  ),

  teniente: new StadiumEntity(
    { city: 'Rancagua', country },
    [{ name: 'Estadio El Teniente', period: '1945-p.t.' }],
    true,
    '15 252',
    '1945',
    ['1962', '2014'],
    ["O'Higgins"]
  ),

  dittborn: new StadiumEntity(
    { city: 'Arica', country },
    [{ name: 'Estadio Carlos Dittborn', period: '1962-p.t.' }],
    true,
    '14 373',
    '1962',
    ['2016'],
    ['San Marcos de Arica']
  ),
}
