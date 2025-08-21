import { Team } from '../../classTeam/classTeam'
import { flagGuyana } from '@/shared/assets/image/flags'
import { coatOfArmsGuyana } from '@/shared/assets/image/coat-of-arms'
import { iconGuyana } from '@/shared/assets/iconFootballAssociation'

export const teamGuyana = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Guyana', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuyana, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuyana,
  associationLogo: iconGuyana,
  associationDate: {
    founded: '1902',
    fifaAffiliation: '1970',
    confederationAffiliation: '1969',
  },
})