import { Team } from '../../classTeam/classTeam'
import { flagParaguay } from '@/shared/assets/flags'
import { coatOfArmsParaguay } from '@/shared/assets/coat-of-arms'
import { iconParaguay } from '@/shared/assets/iconFootballAssociation'

export const teamParaguay = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Paraguay', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagParaguay, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsParaguay,
  associationLogo: iconParaguay,
  associationDate: {
    founded: '1906',
    fifaAffiliation: '1925',
    confederationAffiliation: '1921',
  },
})