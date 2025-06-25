import { Country } from '../../national-teams-store/teams/classTeam/types'
import { Stadium } from '../class-stadium/Stadium'
import { StadiumsData } from '../types'

const country: Country = 'Sweden'

export const stadiumsSweden: StadiumsData = {
  rasunda: new Stadium(
    {
      location: { city: 'Solna', country },
      names: [{ name: 'Råsunda Stadium', period: '1910-2013' }],
    },
    false,
    '36 608',
    '1910',
    ['1937', '1958'],
    ['AIK'],
    []
  ),

  ullevi: new Stadium(
    {
      location: { city: 'Gothenburg', country },
      names: [{ name: 'Ullevi', period: '1958-p.t.' }],
    },
    true,
    '43 000',
    '1958',
    ['1992'],
    ['IFK Göteborg'],
    []
  ),

  malmo: new Stadium(
    {
      location: { city: 'Malmö', country },
      names: [{ name: 'Malmö Stadion', period: '1958-p.t.' }],
    },
    true,
    '26 500',
    '1958',
    [],
    ['Malmö FF'],
    []
  ),

  idrottsparken: new Stadium(
    {
      location: { city: 'Norrköping', country },
      names: [{ name: 'Idrottsparken', period: '1903-p.t.' }],
    },
    true,
    '17 234',
    '1903',
    ['1958'],
    ['IFK Norrköping'],
    []
  ),

  ryavallen: new Stadium(
    {
      location: { city: 'Borås', country },
      names: [{ name: 'Ryavallen', period: '1941-p.t.' }],
    },
    true,
    '17 800',
    '1941',
    ['1958'],
    ['IF Elfsborg'],
    []
  ),

  rimnersvallen: new Stadium(
    {
      location: { city: 'Uddevalla', country },
      names: [{ name: 'Rimnersvallen', period: '1921-p.t.' }],
    },
    true,
    '12 000',
    '1921',
    ['1958'],
    ['Uddevalla IS'],
    []
  ),

  jernvallen: new Stadium(
    {
      location: { city: 'Sandviken', country },
      names: [{ name: 'Jernvallen', period: '1935-p.t.' }],
    },
    true,
    '7 000',
    '1935',
    ['1958'],
    ['Sandvikens IF'],
    []
  ),

  tunavallen: new Stadium(
    {
      location: { city: 'Eskilstuna', country: 'Sweden' },
      names: [{ name: 'Tunavallen', period: '1924-p.t.' }],
    },
    true,
    '7 800',
    '1924',
    ['1958'],
    ['AFC Eskilstuna'],
    []
  ),

  eyravallen: new Stadium(
    {
      location: { city: 'Örebro', country },
      names: [{ name: 'Eyravallen', period: '1923-p.t.' }],
    },
    true,
    '12 300',
    '1923',
    ['1958'],
    ['Örebro SK'],
    []
  ),

  arosvallen: new Stadium(
    {
      location: { city: 'Västerås', country },
      names: [{ name: 'Arosvallen', period: '1932-p.t.' }],
    },
    true,
    '10 000',
    '1932',
    ['1958'],
    ['Västerås SK'],
    []
  ),

  olympiastadion: new Stadium(
    {
      location: { city: 'Helsingborg', country },
      names: [{ name: 'Olympiastadion', period: '1898-p.t.' }],
    },
    true,
    '16 500',
    '1898',
    ['1958'],
    ['Helsingborgs IF'],
    []
  ),

  orjansVall: new Stadium(
    {
      location: { city: 'Halmstad', country },
      names: [{ name: 'Örjans Vall', period: '1922-p.t.' }],
    },
    true,
    '10 500',
    '1922',
    ['1958'],
    ['Halmstads BK'],
    []
  ),
}
