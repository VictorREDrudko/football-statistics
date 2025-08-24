import { Team } from '../../classTeam/classTeam'
import { flagPortugal } from '@/shared/assets/image/flags'
import { coatOfArmsPortugal } from '@/shared/assets/image/coat-of-arms'
import { iconPortugal } from '@/shared/assets/iconFootballAssociation'

export const teamPortugal = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Portugal', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPortugal, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPortugal,
  associationLogo: iconPortugal,
  associationDate: {
    founded: '1914',
    fifaAffiliation: '1923',
    confederationAffiliation: '1954',
  },
})