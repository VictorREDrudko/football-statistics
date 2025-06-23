import { Team } from '../../classTeam/classTeam'
import { flagBarbados } from '@/shared/assets/flags'
import { coatOfArmsBarbados } from '@/shared/assets/coat-of-arms'
import { iconBarbados } from '@/shared/assets/iconFootballAssociation'

export const teamBarbados = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Barbados', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBarbados, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBarbados,
  associationLogo: iconBarbados,
  associationDate: {
    founded: '1910',
    fifaAffiliation: '1968',
    confederationAffiliation: '1967',
  },
})