import { Team } from '../../classTeam/classTeam'
import { flagNorthMacedonia } from '@/shared/assets/flags'
import { coatOfArmsNorthMacedonia } from '@/shared/assets/coat-of-arms'
import { iconNorthMacedonia } from '@/shared/assets/iconFootballAssociation'

export const teamNorthMacedonia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'North Macedonia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNorthMacedonia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNorthMacedonia,
  associationLogo: iconNorthMacedonia,
  associationDate: {
    founded: '1926',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})