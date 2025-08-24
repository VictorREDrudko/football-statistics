import { Team } from '../../classTeam/classTeam'
import { flagMongolia } from '@/shared/assets/image/flags'
import { coatOfArmsMongolia } from '@/shared/assets/image/coat-of-arms'
import { iconMongolia } from '@/shared/assets/iconFootballAssociation'

export const teamMongolia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Mongolia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMongolia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMongolia,
  associationLogo: iconMongolia,
  associationDate: {
    founded: '1959',
    fifaAffiliation: '1998',
    confederationAffiliation: '1993',
  },
})