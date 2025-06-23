import { Team } from '../../classTeam/classTeam'
import { flagBahamas } from '@/shared/assets/flags'
import { coatOfArmsBahamas } from '@/shared/assets/coat-of-arms'
import { iconBahamas } from '@/shared/assets/iconFootballAssociation'

export const teamBahamas = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Bahamas', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBahamas, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBahamas,
  associationLogo: iconBahamas,
  associationDate: {
    founded: '1967',
    fifaAffiliation: '1968',
    confederationAffiliation: '1961',
  },
})