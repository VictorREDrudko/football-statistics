import { Team } from '../../classTeam/classTeam'
import { flagSanMarino } from '@/shared/assets/flags'
import { coatOfArmsSanMarino } from '@/shared/assets/coat-of-arms'
import { iconSanMarino } from '@/shared/assets/iconFootballAssociation'

export const teamSanMarino = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'San Marino', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSanMarino, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSanMarino,
  associationLogo: iconSanMarino,
  associationDate: {
    founded: '1931',
    fifaAffiliation: '1988',
    confederationAffiliation: '1988',
  },
})