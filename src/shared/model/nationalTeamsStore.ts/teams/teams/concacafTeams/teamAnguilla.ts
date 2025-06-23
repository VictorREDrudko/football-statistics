import { Team } from '../../classTeam/classTeam'
import { flagAnguilla } from '@/shared/assets/flags'
import { coatOfArmsAnguilla } from '@/shared/assets/coat-of-arms'
import { iconAnguilla } from '@/shared/assets/iconFootballAssociation'

export const teamAnguilla = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Anguilla', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAnguilla, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAnguilla,
  associationLogo: iconAnguilla,
  associationDate: {
    founded: '1990',
    fifaAffiliation: '1996',
    confederationAffiliation: '1996',
  },
})