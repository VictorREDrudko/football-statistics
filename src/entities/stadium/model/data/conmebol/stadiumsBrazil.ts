import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Brazil'

export const stadiumsBrazil: StadiumsData = {
  maracana: new StadiumEntity(
    { city: 'Rio de Janeiro', country },
    [{ name: 'Estádio do Maracanã', period: '1950-p.t.' }],
    true,
    '78 838',
    '1950',
    ['1965', '2000', '2007', '2013'],
    ['Flamengo', 'Fluminense']
  ),

  independencia: new StadiumEntity(
    { city: 'Belo Horizonte', country },
    [{ name: 'Estádio Independência', period: '1950-p.t.' }],
    true,
    '23 018',
    '1950',
    ['1965', '2010', '2012'],
    ['América Mineiro']
  ),

  britto: new StadiumEntity(
    { city: 'Curitiba', country },
    [{ name: 'Estádio Durival de Britto e Silva', period: '1947-p.t.' }],
    true,
    '20 083',
    '1947',
    ['1984', '1999', '2013'],
    ['Coritiba']
  ),

  pacaembu: new StadiumEntity(
    { city: 'São Paulo', country },
    [
      {
        name: 'Estádio Municipal Paulo Machado de Carvalho',
        period: '1940-p.t.',
      },
    ],
    true,
    '37 730',
    '1940',
    ['1958', '2007'],
    ['No permanent tenant']
  ),

  eucaliptos: new StadiumEntity(
    { city: 'Porto Alegre', country },
    [{ name: 'Estádio dos Eucaliptos', period: '1931-1969' }],
    false,
    '20 000',
    '1931',
    [],
    ['SC Internacional (1931-1969)']
  ),

  retiro: new StadiumEntity(
    { city: 'Recife', country },
    [{ name: 'Estádio Adelmar da Costa Carvalho', period: '1937-p.t.' }],
    true,
    '32 983',
    '1937',
    ['1972', '2007', '2013'],
    ['Sport Recife']
  ),
}
