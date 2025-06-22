import { Team } from '../../classTeam/classTeam'
import { flagLatvia } from '@/shared/assets/flags'
import { coatOfArmsLatvia } from '@/shared/assets/coat-of-arms'
import { iconLatvia } from '@/shared/assets/iconFootballAssociation'

export const teamLatvia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Latvia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLatvia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLatvia,
  associationLogo: iconLatvia,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1922',
    confederationAffiliation: '1992',
  },
})
