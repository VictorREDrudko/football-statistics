import { Team } from '../../classTeam/classTeam'
import { flagCookIslands } from '@/shared/assets/image/flags'
import { coatOfArmsCookIslands } from '@/shared/assets/image/coat-of-arms'
import { iconCookIslands } from '@/shared/assets/iconFootballAssociation'

export const teamCookIslands = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Cook Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCookIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCookIslands,
  associationLogo: iconCookIslands,
  associationDate: {
    founded: '1971',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})