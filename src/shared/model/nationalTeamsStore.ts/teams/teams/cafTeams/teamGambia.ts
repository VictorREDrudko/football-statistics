import { Team } from '../../classTeam/classTeam'
import { flagGambia } from '@/shared/assets/flags'
import { coatOfArmsGambia } from '@/shared/assets/coat-of-arms'
import { iconGambia } from '@/shared/assets/iconFootballAssociation'

export const teamGambia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Gambia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGambia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGambia,
  associationLogo: iconGambia,
  associationDate: {
    founded: '1952',
    fifaAffiliation: '1968',
    confederationAffiliation: '1966',
  },
})