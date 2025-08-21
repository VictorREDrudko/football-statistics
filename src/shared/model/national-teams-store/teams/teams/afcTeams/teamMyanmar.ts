import { Team } from '../../classTeam/classTeam'
import { flagMyanmar } from '@/shared/assets/image/flags'
import { coatOfArmsMyanmar } from '@/shared/assets/image/coat-of-arms'
import { iconMyanmar } from '@/shared/assets/iconFootballAssociation'

export const teamMyanmar = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Myanmar', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMyanmar, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMyanmar,
  associationLogo: iconMyanmar,
  associationDate: {
    founded: '1947',
    fifaAffiliation: '1948',
    confederationAffiliation: '1954',
  },
})