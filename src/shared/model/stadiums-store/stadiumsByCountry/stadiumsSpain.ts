import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Spain'

export const stadiumsSpain: StadiumsData = {
  campNou: new Stadium(
    {
      location: { city: 'Barcelona', country },
      names: [{ name: 'Camp Nou', period: '1957-p.t.' }],
    },
    true,
    '99 354',
    '1957',
    ['1982', '1994', '2008', '2023'],
    ['FC Barcelona'],
    []
  ),

  sarria: new Stadium(
    {
      location: { city: 'Barcelona', country },
      names: [{ name: 'Estadi de Sarrià', period: '1923-1997' }],
    },
    false,
    '44 000',
    '1923',
    ['1982'],
    ['RCD Espanyol (historical)'],
    []
  ),

  bernabeu: new Stadium(
    {
      location: { city: 'Madrid', country },
      names: [{ name: 'Santiago Bernabéu', period: '1947-p.t.' }],
    },
    true,
    '85 000',
    '1947',
    ['1982', '1994', '2006', '2023'],
    ['Real Madrid'],
    []
  ),

  calderon: new Stadium(
    {
      location: { city: 'Madrid', country },
      names: [{ name: 'Vicente Calderón', period: '1966-2019' }],
    },
    false,
    '54 907',
    '1966',
    ['1982', '2011'],
    ['Atlético Madrid (historical)'],
    []
  ),

  pizjuan: new Stadium(
    {
      location: { city: 'Seville', country },
      names: [{ name: 'Ramón Sánchez Pizjuán', period: '1958-p.t.' }],
    },
    true,
    '43 883',
    '1958',
    ['1982', '2016'],
    ['Sevilla FC'],
    []
  ),

  villamarin: new Stadium(
    {
      location: { city: 'Seville', country },
      names: [{ name: 'Benito Villamarín', period: '1929-p.t.' }],
    },
    true,
    '60 721',
    '1929',
    ['1982', '2017', '2020'],
    ['Real Betis'],
    []
  ),

  nuevo: new Stadium(
    {
      location: { city: 'Elche', country },
      names: [{ name: 'Estadio Manuel Martínez Valero', period: '1976-p.t.' }],
    },
    true,
    '33 732',
    '1976',
    ['2004'],
    ['Elche CF'],
    []
  ),

  casanova: new Stadium(
    {
      location: { city: 'Valencia', country },
      names: [
        { name: 'Estadio Luis Casanova', period: '1923-1994' },
        { name: 'Estadio Mestalla', period: '1994-p.t.' },
      ],
    },
    true,
    '55 000',
    '1923',
    ['1957', '1982', '2001', '2013'],
    ['Valencia CF'],
    []
  ),

  mames: new Stadium(
    {
      location: { city: 'Bilbao', country },
      names: [
        { name: 'San Mamés (old)', period: '1913-2013' },
        { name: 'San Mamés (new)', period: '2013-p.t.' },
      ],
    },
    true,
    '53 331',
    '1913',
    ['1952', '1982', '2013'],
    ['Athletic Bilbao'],
    []
  ),

  molinon: new Stadium(
    {
      location: { city: 'Gijón', country },
      names: [{ name: 'El Molinón', period: '1908-p.t.' }],
    },
    true,
    '30 000',
    '1908',
    ['1982', '2010'],
    ['Sporting de Gijón'],
    []
  ),

  rosaleda: new Stadium(
    {
      location: { city: 'Málaga', country },
      names: [{ name: 'La Rosaleda', period: '1941-p.t.' }],
    },
    true,
    '30 044',
    '1941',
    ['1982', '2000', '2011'],
    ['Málaga CF'],
    []
  ),

  romareda: new Stadium(
    {
      location: { city: 'Zaragoza', country },
      names: [{ name: 'La Romareda', period: '1957-p.t.' }],
    },
    true,
    '33 608',
    '1957',
    ['1982', '1994', '2013'],
    ['Real Zaragoza'],
    []
  ),

  riazor: new Stadium(
    {
      location: { city: 'A Coruña', country },
      names: [{ name: 'Riazor', period: '1944-p.t.' }],
    },
    true,
    '32 912',
    '1944',
    ['1982', '1995'],
    ['Deportivo La Coruña'],
    []
  ),

  balaidos: new Stadium(
    {
      location: { city: 'Vigo', country },
      names: [{ name: 'Balaídos', period: '1928-p.t.' }],
    },
    true,
    '29 000',
    '1928',
    ['1982', '2004', '2018'],
    ['Celta Vigo'],
    []
  ),

  tartiere: new Stadium(
    {
      location: { city: 'Oviedo', country },
      names: [
        { name: 'Carlos Tartiere (old)', period: '1932-2000' },
        { name: 'Carlos Tartiere (new)', period: '2000-p.t.' },
      ],
    },
    true,
    '30 500',
    '1932',
    ['1982', '2000'],
    ['Real Oviedo'],
    []
  ),

  perez: new Stadium(
    {
      location: { city: 'Alicante', country },
      names: [{ name: 'José Rico Pérez', period: '1974-p.t.' }],
    },
    true,
    '29 500',
    '1974',
    ['1999', '2013'],
    ['Hércules CF'],
    []
  ),

  zorrilla: new Stadium(
    {
      location: { city: 'Valladolid', country },
      names: [{ name: 'José Zorrilla', period: '1982-p.t.' }],
    },
    true,
    '27 846',
    '1982',
    ['2000', '2018'],
    ['Real Valladolid'],
    []
  ),
}
