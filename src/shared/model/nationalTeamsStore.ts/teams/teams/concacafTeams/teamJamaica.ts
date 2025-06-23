import { Team } from '../../classTeam/classTeam'
import { flagJamaica } from '@/shared/assets/flags'
import { coatOfArmsJamaica } from '@/shared/assets/coat-of-arms'
import { iconJamaica } from '@/shared/assets/iconFootballAssociation'

export const teamJamaica = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Jamaica', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagJamaica, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsJamaica,
  associationLogo: iconJamaica,
  associationDate: {
    founded: '1910',
    fifaAffiliation: '1962',
    confederationAffiliation: '1963',
  },
})