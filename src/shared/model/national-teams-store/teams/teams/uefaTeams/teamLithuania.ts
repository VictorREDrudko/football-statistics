import { Team } from '../../classTeam/classTeam'
import { flagLithuania } from '@/shared/assets/image/flags'
import { coatOfArmsLithuania } from '@/shared/assets/image/coat-of-arms'
import { iconLithuania } from '@/shared/assets/iconFootballAssociation'

export const teamLithuania = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Lithuania', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLithuania, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLithuania,
  associationLogo: iconLithuania,
  associationDate: {
    founded: '1922',
    fifaAffiliation: '1923',
    confederationAffiliation: '1992',
  },
})