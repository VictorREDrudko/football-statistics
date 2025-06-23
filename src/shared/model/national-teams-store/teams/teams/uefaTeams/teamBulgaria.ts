import { Team } from '../../classTeam/classTeam'
import { flagBulgaria } from '@/shared/assets/flags'
import { coatOfArmsBulgaria } from '@/shared/assets/coat-of-arms'
import { iconBulgaria } from '@/shared/assets/iconFootballAssociation'

export const teamBulgaria = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Bulgaria', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBulgaria, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBulgaria,
  associationLogo: iconBulgaria,
  associationDate: {
    founded: '1923',
    fifaAffiliation: '1924',
    confederationAffiliation: '1954',
  },
})
