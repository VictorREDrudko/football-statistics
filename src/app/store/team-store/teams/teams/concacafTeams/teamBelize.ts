import { Team } from '../../classTeam/classTeam'
import { flagBelize } from '@/shared/assets/image/flags'
import { coatOfArmsBelize } from '@/shared/assets/image/coat-of-arms'
import { iconBelize } from '@/shared/assets/iconFootballAssociation'

export const teamBelize = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Belize', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBelize, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBelize,
  associationLogo: iconBelize,
  associationDate: {
    founded: '1980',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})