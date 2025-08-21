import { Team } from '../../classTeam/classTeam'
import { flagAruba } from '@/shared/assets/image/flags'
import { coatOfArmsAruba } from '@/shared/assets/image/coat-of-arms'
import { iconAruba } from '@/shared/assets/iconFootballAssociation'

export const teamAruba = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Aruba', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAruba, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAruba,
  associationLogo: iconAruba,
  associationDate: {
    founded: '1932',
    fifaAffiliation: '1988',
    confederationAffiliation: '1986',
  },
})