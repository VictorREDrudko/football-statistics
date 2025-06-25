import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Brazil'

export const stadiumsBrazil: StadiumsData = {
  maracana: new Stadium(
    {
      location: { city: 'Rio de Janeiro', country },
      names: [{ name: 'Estádio do Maracanã', period: '1950-p.t.' }],
    },
    true,
    '78 838',
    '1950',
    ['1965', '2000', '2007', '2013'],
    ['Flamengo', 'Fluminense'],
    []
  ),

  independencia: new Stadium(
    {
      location: { city: 'Belo Horizonte', country },
      names: [{ name: 'Estádio Independência', period: '1950-p.t.' }],
    },
    true,
    '23 018',
    '1950',
    ['1965', '2010', '2012'],
    ['América Mineiro'],
    []
  ),

  britto: new Stadium(
    {
      location: { city: 'Curitiba', country },
      names: [{ name: 'Estádio Durival de Britto e Silva', period: '1947-p.t.' }],
    },
    true,
    '20 083',
    '1947',
    ['1984', '1999', '2013'],
    ['Coritiba'],
    []
  ),

  pacaembu: new Stadium(
    {
      location: { city: 'São Paulo', country },
      names: [{ name: 'Estádio Municipal Paulo Machado de Carvalho', period: '1940-p.t.' }],
    },
    true,
    '37 730',
    '1940',
    ['1958', '2007'],
    ['No permanent tenant'],
    []
  ),

  eucaliptos: new Stadium(
    {
      location: { city: 'Porto Alegre', country },
      names: [{ name: 'Estádio dos Eucaliptos', period: '1931-1969' }],
    },
    false,
    '20 000',
    '1931',
    [],
    ['SC Internacional (1931-1969)'],
    []
  ),

  retiro: new Stadium(
    {
      location: { city: 'Recife', country },
      names: [{ name: 'Estádio Adelmar da Costa Carvalho', period: '1937-p.t.' }],
    },
    true,
    '32 983',
    '1937',
    ['1972', '2007', '2013'],
    ['Sport Recife'],
    []
  ),
}
