import { Team } from '../../classTeam/classTeam'
import { flagSaintVincentAndTheGrenadines } from '@/shared/assets/image/flags'
import { coatOfArmsSaintVincentAndTheGrenadines } from '@/shared/assets/image/coat-of-arms'
import { iconSaintVincentAndTheGrenadines } from '@/shared/assets/iconFootballAssociation'

export const teamSaintVincentAndTheGrenadines = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Saint Vincent and the Grenadines', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaintVincentAndTheGrenadines, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaintVincentAndTheGrenadines,
  associationLogo: iconSaintVincentAndTheGrenadines,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1988',
    confederationAffiliation: '1986',
  },
})