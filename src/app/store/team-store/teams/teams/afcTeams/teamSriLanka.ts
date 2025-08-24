import { Team } from '../../classTeam/classTeam'
import { flagSriLanka } from '@/shared/assets/image/flags'
import { coatOfArmsSriLanka } from '@/shared/assets/image/coat-of-arms'
import { iconSriLanka } from '@/shared/assets/iconFootballAssociation'

export const teamSriLanka = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Sri Lanka', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSriLanka, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSriLanka,
  associationLogo: iconSriLanka,
  associationDate: {
    founded: '1939',
    fifaAffiliation: '1952',
    confederationAffiliation: '1954',
  },
})