import { Team } from '../../classTeam/classTeam'
import { flagSierraLeone } from '@/shared/assets/flags'
import { coatOfArmsSierraLeone } from '@/shared/assets/coat-of-arms'
import { iconSierraLeone } from '@/shared/assets/iconFootballAssociation'

export const teamSierraLeone = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Sierra Leone', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSierraLeone, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSierraLeone,
  associationLogo: iconSierraLeone,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1960',
    confederationAffiliation: '1960',
  },
})