import { Team } from '../../classTeam/classTeam'
import { flagSaoTomeAndPrincipe } from '@/shared/assets/image/flags'
import { coatOfArmsSaoTomeAndPrincipe } from '@/shared/assets/image/coat-of-arms'
import { iconSaoTomeAndPrincipe } from '@/shared/assets/iconFootballAssociation'

export const teamSaoTomeAndPrincipe = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'São Tomé and Príncipe', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaoTomeAndPrincipe, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaoTomeAndPrincipe,
  associationLogo: iconSaoTomeAndPrincipe,
  associationDate: {
    founded: '1975',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})