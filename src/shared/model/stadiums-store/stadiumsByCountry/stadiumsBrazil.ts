import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsBrazil: CountryStadiums = {
  country: 'Brazil',
  stadiums: {
    maracana: new Stadium(
      [{ title: 'Estádio do Maracanã', period: '1950-p.t.' }],
      'Rio de Janeiro',
      '78 838',
      ['1950', '1965', '2000', '2007', '2013'],
      {
        isActive: true,
        homeTeam: ['Flamengo', 'Fluminense'],
        imageUrl: '',
      }
    ),

    independencia: new Stadium(
      [{ title: 'Estádio Independência', period: '1950-p.t.' }],
      'Belo Horizonte',
      '23 018',
      ['1950', '1965', '2010', '2012'],
      {
        isActive: true,
        homeTeam: ['América Mineiro'],
        imageUrl: '',
      }
    ),

    britto: new Stadium(
      [{ title: 'Estádio Durival de Britto e Silva', period: '1947-p.t.' }],
      'Curitiba',
      '20 083',
      ['1947', '1984', '1999', '2013'],
      {
        isActive: true,
        homeTeam: ['Coritiba'],
        imageUrl: '',
      }
    ),

    pacaembu: new Stadium(
      [{ title: 'Estádio Municipal Paulo Machado de Carvalho', period: '1940-p.t.' }],
      'São Paulo',
      '37 730',
      ['1940', '1958', '2007'],
      {
        isActive: true,
        homeTeam: ['No permanent tenant'],
        imageUrl: '',
      }
    ),

    eucaliptos: new Stadium(
      [{ title: 'Estádio dos Eucaliptos', period: '1931-1969' }],
      'Porto Alegre',
      '20 000',
      ['1931'],
      {
        isActive: false,
        homeTeam: ['SC Internacional (1931-1969)'],
        imageUrl: '',
      }
    ),

    retiro: new Stadium(
      [{ title: 'Estádio Adelmar da Costa Carvalho', period: '1937-p.t.' }],
      'Recife',
      '32 983',
      ['1937', '1972', '2007', '2013'],
      {
        isActive: true,
        homeTeam: ['Sport Recife'],
        imageUrl: '',
      }
    ),
  },
}
