import { StadiumEntity, StadiumsData } from '@/entities/stadium'
import { Country } from '@/shared/types'

const country: Country = 'Sweden'

export const stadiumsSweden: StadiumsData = {
  rasunda: new StadiumEntity(
    { city: 'Solna', country },
    [{ name: 'Råsunda Stadium', period: '1910-2013' }],
    false,
    '36 608',
    '1910',
    ['1937', '1958'],
    ['AIK']
  ),

  ullevi: new StadiumEntity(
    { city: 'Gothenburg', country },
    [{ name: 'Ullevi', period: '1958-p.t.' }],
    true,
    '43 000',
    '1958',
    ['1992'],
    ['IFK Göteborg']
  ),

  malmo: new StadiumEntity(
    { city: 'Malmö', country },
    [{ name: 'Malmö Stadion', period: '1958-p.t.' }],
    true,
    '26 500',
    '1958',
    [],
    ['Malmö FF']
  ),

  idrottsparken: new StadiumEntity(
    { city: 'Norrköping', country },
    [{ name: 'Idrottsparken', period: '1903-p.t.' }],
    true,
    '17 234',
    '1903',
    ['1958'],
    ['IFK Norrköping']
  ),

  ryavallen: new StadiumEntity(
    { city: 'Borås', country },
    [{ name: 'Ryavallen', period: '1941-p.t.' }],
    true,
    '17 800',
    '1941',
    ['1958'],
    ['IF Elfsborg']
  ),

  rimnersvallen: new StadiumEntity(
    { city: 'Uddevalla', country },
    [{ name: 'Rimnersvallen', period: '1921-p.t.' }],
    true,
    '12 000',
    '1921',
    ['1958'],
    ['Uddevalla IS']
  ),

  jernvallen: new StadiumEntity(
    { city: 'Sandviken', country },
    [{ name: 'Jernvallen', period: '1935-p.t.' }],
    true,
    '7 000',
    '1935',
    ['1958'],
    ['Sandvikens IF']
  ),

  tunavallen: new StadiumEntity(
    { city: 'Eskilstuna', country: 'Sweden' },
    [{ name: 'Tunavallen', period: '1924-p.t.' }],
    true,
    '7 800',
    '1924',
    ['1958'],
    ['AFC Eskilstuna']
  ),

  eyravallen: new StadiumEntity(
    { city: 'Örebro', country },
    [{ name: 'Eyravallen', period: '1923-p.t.' }],
    true,
    '12 300',
    '1923',
    ['1958'],
    ['Örebro SK']
  ),

  arosvallen: new StadiumEntity(
    { city: 'Västerås', country },
    [{ name: 'Arosvallen', period: '1932-p.t.' }],
    true,
    '10 000',
    '1932',
    ['1958'],
    ['Västerås SK']
  ),

  olympiastadion: new StadiumEntity(
    { city: 'Helsingborg', country },
    [{ name: 'Olympiastadion', period: '1898-p.t.' }],
    true,
    '16 500',
    '1898',
    ['1958'],
    ['Helsingborgs IF']
  ),

  orjansVall: new StadiumEntity(
    { city: 'Halmstad', country },
    [{ name: 'Örjans Vall', period: '1922-p.t.' }],
    true,
    '10 500',
    '1922',
    ['1958'],
    ['Halmstads BK']
  ),
}
