import { Team } from '../../classTeam/classTeam'
import { flagDominicanRepublic } from '@/shared/assets/image/flags'
import { coatOfArmsDominicanRepublic } from '@/shared/assets/image/coat-of-arms'
import { iconDominicanRepublic } from '@/shared/assets/iconFootballAssociation'

export const teamDominicanRepublic = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Dominican Republic', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagDominicanRepublic, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsDominicanRepublic,
  associationLogo: iconDominicanRepublic,
  associationDate: {
    founded: '1953',
    fifaAffiliation: '1958',
    confederationAffiliation: '1964',
  },
})