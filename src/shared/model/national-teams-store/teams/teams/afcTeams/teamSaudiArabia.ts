import { Team } from '../../classTeam/classTeam'
import { flagSaudiArabia } from '@/shared/assets/flags'
import { coatOfArmsSaudiArabia } from '@/shared/assets/coat-of-arms'
import { iconSaudiArabia } from '@/shared/assets/iconFootballAssociation'

export const teamSaudiArabia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Saudi Arabia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaudiArabia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaudiArabia,
  associationLogo: iconSaudiArabia,
  associationDate: {
    founded: '1956',
    fifaAffiliation: '1956',
    confederationAffiliation: '1972',
  },
})