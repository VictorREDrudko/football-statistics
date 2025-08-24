import { Team } from '../../classTeam/classTeam'
import { flagNetherlands } from '@/shared/assets/image/flags'
import { coatOfArmsNetherlands } from '@/shared/assets/image/coat-of-arms'
import { iconNetherlands } from '@/shared/assets/iconFootballAssociation'

export const teamNetherlands = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Netherlands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNetherlands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNetherlands,
  associationLogo: iconNetherlands,
  associationDate: {
    founded: '1889',
    fifaAffiliation: '1904',
    confederationAffiliation: '1954',
  },
})