import { Team } from '../../classTeam/classTeam'
import { flagSenegal } from '@/shared/assets/image/flags'
import { coatOfArmsSenegal } from '@/shared/assets/image/coat-of-arms'
import { iconSenegal } from '@/shared/assets/iconFootballAssociation'

export const teamSenegal = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Senegal', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSenegal, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSenegal,
  associationLogo: iconSenegal,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})