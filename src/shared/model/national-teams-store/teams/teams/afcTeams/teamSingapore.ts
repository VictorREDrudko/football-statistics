import { Team } from '../../classTeam/classTeam'
import { flagSingapore } from '@/shared/assets/image/flags'
import { coatOfArmsSingapore } from '@/shared/assets/image/coat-of-arms'
import { iconSingapore } from '@/shared/assets/iconFootballAssociation'

export const teamSingapore = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Singapore', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSingapore, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSingapore,
  associationLogo: iconSingapore,
  associationDate: {
    founded: '1892',
    fifaAffiliation: '1952',
    confederationAffiliation: '1954',
  },
})