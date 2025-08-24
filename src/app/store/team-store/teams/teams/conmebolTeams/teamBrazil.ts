import { Team } from '../../classTeam/classTeam'
import { flagBrazil } from '@/shared/assets/image/flags'
import { coatOfArmsBrazil } from '@/shared/assets/image/coat-of-arms'
import { iconBrazil } from '@/shared/assets/iconFootballAssociation'

export const teamBrazil = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Brazil', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBrazil, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBrazil,
  associationLogo: iconBrazil,
  associationDate: {
    founded: '1914',
    fifaAffiliation: '1923',
    confederationAffiliation: '1916',
  },
})