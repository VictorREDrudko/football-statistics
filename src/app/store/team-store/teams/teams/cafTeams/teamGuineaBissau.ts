import { Team } from '../../classTeam/classTeam'
import { flagGuineaBissau } from '@/shared/assets/image/flags'
import { coatOfArmsGuineaBissau } from '@/shared/assets/image/coat-of-arms'
import { iconGuineaBissau } from '@/shared/assets/iconFootballAssociation'

export const teamGuineaBissau = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Guinea-Bissau', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuineaBissau, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuineaBissau,
  associationLogo: iconGuineaBissau,
  associationDate: {
    founded: '1974',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})