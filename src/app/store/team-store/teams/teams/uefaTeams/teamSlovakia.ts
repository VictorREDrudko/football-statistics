import { Team } from '../../classTeam/classTeam'
import { flagSlovakia } from '@/shared/assets/image/flags'
import { coatOfArmsSlovakia } from '@/shared/assets/image/coat-of-arms'
import { iconSlovakia } from '@/shared/assets/iconFootballAssociation'

export const teamSlovakia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Slovakia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSlovakia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSlovakia,
  associationLogo: iconSlovakia,
  associationDate: {
    founded: '1938',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})