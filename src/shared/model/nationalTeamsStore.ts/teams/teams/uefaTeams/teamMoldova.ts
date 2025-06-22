import { Team } from '../../classTeam/classTeam'
import { flagMoldova } from '@/shared/assets/flags'
import { coatOfArmsMoldova } from '@/shared/assets/coat-of-arms'
import { iconMoldova } from '@/shared/assets/iconFootballAssociation'

export const teamMoldova = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Moldova', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMoldova, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMoldova,
  associationLogo: iconMoldova,
  associationDate: {
    founded: '1990',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})