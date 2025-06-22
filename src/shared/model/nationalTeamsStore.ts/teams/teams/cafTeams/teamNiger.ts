import { Team } from '../../classTeam/classTeam'
import { flagNiger } from '@/shared/assets/flags'
import { coatOfArmsNiger } from '@/shared/assets/coat-of-arms'
import { iconNiger } from '@/shared/assets/iconFootballAssociation'

export const teamNiger = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Niger', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNiger, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNiger,
  associationLogo: iconNiger,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1967',
    confederationAffiliation: '1967',
  },
})