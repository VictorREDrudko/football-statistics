import { Team } from '../../classTeam/classTeam'
import { flagEgypt, flagEgypt1, flagEgypt2, flagEgypt3 } from '@/shared/assets/flags'
import { coatOfArmsEgypt } from '@/shared/assets/coat-of-arms'
import { iconEgypt } from '@/shared/assets/iconFootballAssociation'

export const teamEgypt = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Egypt', period: '0000-p.t.' }],
  flags: [
    { countryFlag: flagEgypt, period: '1984-p.t.' },
    { countryFlag: flagEgypt1, period: '1923-1957' },
    { countryFlag: flagEgypt2, period: '1958-1971' },
    { countryFlag: flagEgypt3, period: '1972-1983' },
  ],
  coatOfArms: coatOfArmsEgypt,
  associationLogo: iconEgypt,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1923',
    confederationAffiliation: '1957',
  },
})