import { Team } from '../../classTeam/classTeam'
import { flagGrenada } from '@/shared/assets/flags'
import { coatOfArmsGrenada } from '@/shared/assets/coat-of-arms'
import { iconGrenada } from '@/shared/assets/iconFootballAssociation'

export const teamGrenada = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Grenada', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGrenada, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGrenada,
  associationLogo: iconGrenada,
  associationDate: {
    founded: '1924',
    fifaAffiliation: '1978',
    confederationAffiliation: '1978',
  },
})