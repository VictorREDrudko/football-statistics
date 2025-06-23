import { Team } from '../../classTeam/classTeam'
import { flagGuatemala } from '@/shared/assets/flags'
import { coatOfArmsGuatemala } from '@/shared/assets/coat-of-arms'
import { iconGuatemala } from '@/shared/assets/iconFootballAssociation'

export const teamGuatemala = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Guatemala', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuatemala, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuatemala,
  associationLogo: iconGuatemala,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1946',
    confederationAffiliation: '1961',
  },
})