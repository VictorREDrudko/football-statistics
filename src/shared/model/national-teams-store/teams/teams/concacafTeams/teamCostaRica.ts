import { Team } from '../../classTeam/classTeam'
import { flagCostaRica } from '@/shared/assets/flags'
import { coatOfArmsCostaRica } from '@/shared/assets/coat-of-arms'
import { iconCostaRica } from '@/shared/assets/iconFootballAssociation'

export const teamCostaRica = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Costa Rica', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCostaRica, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCostaRica,
  associationLogo: iconCostaRica,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1927',
    confederationAffiliation: '1961',
  },
})