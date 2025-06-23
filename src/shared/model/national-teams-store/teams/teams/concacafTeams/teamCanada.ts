import { Team } from '../../classTeam/classTeam'
import { flagCanada } from '@/shared/assets/flags'
import { coatOfArmsCanada } from '@/shared/assets/coat-of-arms'
import { iconCanada } from '@/shared/assets/iconFootballAssociation'

export const teamCanada = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Canada', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCanada, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCanada,
  associationLogo: iconCanada,
  associationDate: {
    founded: '1912',
    fifaAffiliation: '1913',
    confederationAffiliation: '1961',
  },
})