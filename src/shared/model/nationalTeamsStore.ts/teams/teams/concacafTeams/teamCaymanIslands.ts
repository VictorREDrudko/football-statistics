import { Team } from '../../classTeam/classTeam'
import { flagCaymanIslands } from '@/shared/assets/flags'
import { coatOfArmsCaymanIslands } from '@/shared/assets/coat-of-arms'
import { iconCaymanIslands } from '@/shared/assets/iconFootballAssociation'

export const teamCaymanIslands = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Cayman Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCaymanIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCaymanIslands,
  associationLogo: iconCaymanIslands,
  associationDate: {
    founded: '1966',
    fifaAffiliation: '1992',
    confederationAffiliation: '1990',
  },
})