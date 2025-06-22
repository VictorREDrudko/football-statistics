import { Team } from '../../classTeam/classTeam'
import { flagScotland } from '@/shared/assets/flags'
import { coatOfArmsScotland } from '@/shared/assets/coat-of-arms'
import { iconScotland } from '@/shared/assets/iconFootballAssociation'

export const teamScotland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Scotland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagScotland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsScotland,
  associationLogo: iconScotland,
  associationDate: {
    founded: '1873',
    fifaAffiliation: '1910',
    confederationAffiliation: '1954',
  },
})