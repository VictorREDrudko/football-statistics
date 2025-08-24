import { Team } from '../../classTeam/classTeam'
import { flagKuwait } from '@/shared/assets/image/flags'
import { coatOfArmsKuwait } from '@/shared/assets/image/coat-of-arms'
import { iconKuwait } from '@/shared/assets/iconFootballAssociation'

export const teamKuwait = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Kuwait', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKuwait, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKuwait,
  associationLogo: iconKuwait,
  associationDate: {
    founded: '1952',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})