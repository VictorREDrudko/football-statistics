import { Team } from '../../classTeam/classTeam'
import { flagCentralAfricanRepublic } from '@/shared/assets/flags'
import { coatOfArmsCentralAfricanRepublic } from '@/shared/assets/coat-of-arms'
import { iconCentralAfricanRepublic } from '@/shared/assets/iconFootballAssociation'

export const teamCentralAfricanRepublic = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Central African Republic', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCentralAfricanRepublic, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCentralAfricanRepublic,
  associationLogo: iconCentralAfricanRepublic,
  associationDate: {
    founded: '1961',
    fifaAffiliation: '1964',
    confederationAffiliation: '1965',
  },
})