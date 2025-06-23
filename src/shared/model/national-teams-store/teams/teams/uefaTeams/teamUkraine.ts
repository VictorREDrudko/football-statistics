import { Team } from '../../classTeam/classTeam'
import { flagUkraine } from '@/shared/assets/flags'
import { coatOfArmsUkraine } from '@/shared/assets/coat-of-arms'
import { iconUkraine } from '@/shared/assets/iconFootballAssociation'

export const teamUkraine = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Ukraine', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUkraine, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUkraine,
  associationLogo: iconUkraine,
  associationDate: {
    founded: '1991',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})