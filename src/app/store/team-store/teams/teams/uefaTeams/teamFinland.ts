import { Team } from '../../classTeam/classTeam'
import { flagFinland } from '@/shared/assets/image/flags'
import { coatOfArmsFinland } from '@/shared/assets/image/coat-of-arms'
import { iconFinland } from '@/shared/assets/iconFootballAssociation'

export const teamFinland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Finland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagFinland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsFinland,
  associationLogo: iconFinland,
  associationDate: {
    founded: '1907',
    fifaAffiliation: '1908',
    confederationAffiliation: '1954',
  },
})
