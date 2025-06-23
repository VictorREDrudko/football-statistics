import { Team } from '../../classTeam/classTeam'
import { flagGuadeloupe } from '@/shared/assets/flags'
import { coatOfArmsGuadeloupe } from '@/shared/assets/coat-of-arms'
import { iconGuadeloupe } from '@/shared/assets/iconFootballAssociation'

export const teamGuadeloupe = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Guadeloupe', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuadeloupe, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuadeloupe,
  associationLogo: iconGuadeloupe,
  associationDate: {
    founded: '1958',
    fifaAffiliation: '-',
    confederationAffiliation: '2013',
  },
})