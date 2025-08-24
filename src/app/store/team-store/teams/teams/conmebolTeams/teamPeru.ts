import { Team } from '../../classTeam/classTeam'
import { flagPeru } from '@/shared/assets/image/flags'
import { coatOfArmsPeru } from '@/shared/assets/image/coat-of-arms'
import { iconPeru } from '@/shared/assets/iconFootballAssociation'

export const teamPeru = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Peru', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPeru, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPeru,
  associationLogo: iconPeru,
  associationDate: {
    founded: '1922',
    fifaAffiliation: '1924',
    confederationAffiliation: '1925',
  },
})