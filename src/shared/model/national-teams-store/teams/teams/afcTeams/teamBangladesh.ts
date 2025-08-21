import { Team } from '../../classTeam/classTeam'
import { flagBangladesh } from '@/shared/assets/image/flags'
import { coatOfArmsBangladesh } from '@/shared/assets/image/coat-of-arms'
import { iconBangladesh } from '@/shared/assets/iconFootballAssociation'

export const teamBangladesh = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Bangladesh', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBangladesh, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBangladesh,
  associationLogo: iconBangladesh,
  associationDate: {
    founded: '1972',
    fifaAffiliation: '1976',
    confederationAffiliation: '1974',
  },
})