import { Team } from '../../classTeam/classTeam'
import { flagNepal } from '@/shared/assets/image/flags'
import { coatOfArmsNepal } from '@/shared/assets/image/coat-of-arms'
import { iconNepal } from '@/shared/assets/iconFootballAssociation'

export const teamNepal = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Nepal', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNepal, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNepal,
  associationLogo: iconNepal,
  associationDate: {
    founded: '1951',
    fifaAffiliation: '1972',
    confederationAffiliation: '1954',
  },
})