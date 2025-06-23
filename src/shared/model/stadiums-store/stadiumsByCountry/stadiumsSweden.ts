import { Stadium } from '../class-stadium/Stadium'
import { CountryStadiums } from '../types'

export const stadiumsSweden: CountryStadiums = {
  country: 'Sweden',
  stadiums: {
    rasunda: new Stadium(
      [{ title: 'Råsunda Stadium', period: '1910-2013' }],
      'Solna',
      '36 608',
      ['1910', '1937', '1958'],
      {
        isActive: false,
        homeTeam: ['AIK'],
        imageUrl: '',
      }
    ),

    ullevi: new Stadium([{ title: 'Ullevi', period: '1958-p.t.' }], 'Gothenburg', '43 000', ['1958', '1992'], {
      isActive: true,
      homeTeam: ['IFK Göteborg'],
      imageUrl: '',
    }),

    malmo: new Stadium([{ title: 'Malmö Stadion', period: '1958-p.t.' }], 'Malmö', '26 500', ['1958'], {
      isActive: true,
      homeTeam: ['Malmö FF'],
      imageUrl: '',
    }),

    idrottsparken: new Stadium(
      [{ title: 'Idrottsparken', period: '1903-p.t.' }],
      'Norrköping',
      '17 234',
      ['1903', '1958'],
      {
        isActive: true,
        homeTeam: ['IFK Norrköping'],
        imageUrl: '',
      }
    ),

    ryavallen: new Stadium([{ title: 'Ryavallen', period: '1941-p.t.' }], 'Borås', '17 800', ['1941', '1958'], {
      isActive: true,
      homeTeam: ['IF Elfsborg'],
      imageUrl: '',
    }),

    rimnersvallen: new Stadium(
      [{ title: 'Rimnersvallen', period: '1921-p.t.' }],
      'Uddevalla',
      '12 000',
      ['1921', '1958'],
      {
        isActive: true,
        homeTeam: ['Uddevalla IS'],
        imageUrl: '',
      }
    ),

    jernvallen: new Stadium([{ title: 'Jernvallen', period: '1935-p.t.' }], 'Sandviken', '7 000', ['1935', '1958'], {
      isActive: true,
      homeTeam: ['Sandvikens IF'],
      imageUrl: '',
    }),

    tunavallen: new Stadium([{ title: 'Tunavallen', period: '1924-p.t.' }], 'Eskilstuna', '7 800', ['1924', '1958'], {
      isActive: true,
      homeTeam: ['AFC Eskilstuna'],
      imageUrl: '',
    }),

    eyravallen: new Stadium([{ title: 'Eyravallen', period: '1923-p.t.' }], 'Örebro', '12 300', ['1923', '1958'], {
      isActive: true,
      homeTeam: ['Örebro SK'],
      imageUrl: '',
    }),

    arosvallen: new Stadium([{ title: 'Arosvallen', period: '1932-p.t.' }], 'Västerås', '10 000', ['1932', '1958'], {
      isActive: true,
      homeTeam: ['Västerås SK'],
      imageUrl: '',
    }),

    olympiastadion: new Stadium(
      [{ title: 'Olympiastadion', period: '1898-p.t.' }],
      'Helsingborg',
      '16 500',
      ['1898', '1958'],
      {
        isActive: true,
        homeTeam: ['Helsingborgs IF'],
        imageUrl: '',
      }
    ),

    orjansVall: new Stadium([{ title: 'Örjans Vall', period: '1922-p.t.' }], 'Halmstad', '10 500', ['1922', '1958'], {
      isActive: true,
      homeTeam: ['Halmstads BK'],
      imageUrl: '',
    }),
  },
}
