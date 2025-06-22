import { Team } from '../../classTeam/classTeam'
import { flagJordan } from '@/shared/assets/flags'
import { coatOfArmsJordan } from '@/shared/assets/coat-of-arms'
import { iconJordan } from '@/shared/assets/iconFootballAssociation'

export const teamJordan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Jordan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagJordan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsJordan,
  associationLogo: iconJordan,
  associationDate: {
    founded: '1949',
    fifaAffiliation: '1956',
    confederationAffiliation: '1970',
  },
})