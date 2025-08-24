import { Team } from '../../classTeam/classTeam'
import { flagGreece } from '@/shared/assets/image/flags'
import { coatOfArmsGreece } from '@/shared/assets/image/coat-of-arms'
import { iconGreece } from '@/shared/assets/iconFootballAssociation'

export const teamGreece = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Greece', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGreece, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGreece,
  associationLogo: iconGreece,
  associationDate: {
    founded: '1926',
    fifaAffiliation: '1927',
    confederationAffiliation: '1954',
  },
})
