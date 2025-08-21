import { Team } from '../../classTeam/classTeam'
import { flagGuam } from '@/shared/assets/image/flags'
import { coatOfArmsGuam } from '@/shared/assets/image/coat-of-arms'
import { iconGuam } from '@/shared/assets/iconFootballAssociation'

export const teamGuam = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Guam', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuam, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuam,
  associationLogo: iconGuam,
  associationDate: {
    founded: '1975',
    fifaAffiliation: '1996',
    confederationAffiliation: '1991',
  },
})