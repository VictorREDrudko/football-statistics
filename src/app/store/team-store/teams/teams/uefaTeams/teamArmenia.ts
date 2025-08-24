import { Team } from '../../classTeam/classTeam'
import { flagArmenia } from '@/shared/assets/image/flags'
import { coatOfArmsArmenia } from '@/shared/assets/image/coat-of-arms'
import { iconArmenia } from '@/shared/assets/iconFootballAssociation'

export const teamArmenia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Armenia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagArmenia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsArmenia,
  associationLogo: iconArmenia,
  associationDate: {
    founded: '1992',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})
