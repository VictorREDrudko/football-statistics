import { Team } from '../../classTeam/classTeam'
import { flagHongKong } from '@/shared/assets/image/flags'
import { coatOfArmsHongKong } from '@/shared/assets/image/coat-of-arms'
import { iconHongKong } from '@/shared/assets/iconFootballAssociation'

export const teamHongKong = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Hong Kong', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagHongKong, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsHongKong,
  associationLogo: iconHongKong,
  associationDate: {
    founded: '1914',
    fifaAffiliation: '1954',
    confederationAffiliation: '1954',
  },
})