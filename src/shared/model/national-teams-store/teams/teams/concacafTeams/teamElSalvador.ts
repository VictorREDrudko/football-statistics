import { Team } from '../../classTeam/classTeam'
import { flagElSalvador } from '@/shared/assets/flags'
import { coatOfArmsElSalvador } from '@/shared/assets/coat-of-arms'
import { iconElSalvador } from '@/shared/assets/iconFootballAssociation'

export const teamElSalvador = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'El Salvador', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagElSalvador, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsElSalvador,
  associationLogo: iconElSalvador,
  associationDate: {
    founded: '1935',
    fifaAffiliation: '1938',
    confederationAffiliation: '1961',
  },
})