import { Team } from '../../classTeam/classTeam'
import { flagJapan } from '@/shared/assets/flags'
import { coatOfArmsJapan } from '@/shared/assets/coat-of-arms'
import { iconJapan } from '@/shared/assets/iconFootballAssociation'

export const teamJapan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Japan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagJapan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsJapan,
  associationLogo: iconJapan,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1921',
    confederationAffiliation: '1954',
  },
})