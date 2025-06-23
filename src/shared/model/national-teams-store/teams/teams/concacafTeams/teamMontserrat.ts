import { Team } from '../../classTeam/classTeam'
import { flagMontserrat } from '@/shared/assets/flags'
import { coatOfArmsMontserrat } from '@/shared/assets/coat-of-arms'
import { iconMontserrat } from '@/shared/assets/iconFootballAssociation'

export const teamMontserrat = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Montserrat', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMontserrat, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMontserrat,
  associationLogo: iconMontserrat,
  associationDate: {
    founded: '1994',
    fifaAffiliation: '1996',
    confederationAffiliation: '1996',
  },
})