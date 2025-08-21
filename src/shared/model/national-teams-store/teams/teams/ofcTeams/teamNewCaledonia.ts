import { Team } from '../../classTeam/classTeam'
import { flagNewCaledonia } from '@/shared/assets/image/flags'
import { coatOfArmsNewCaledonia } from '@/shared/assets/image/coat-of-arms'
import { iconNewCaledonia } from '@/shared/assets/iconFootballAssociation'

export const teamNewCaledonia = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'New Caledonia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNewCaledonia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNewCaledonia,
  associationLogo: iconNewCaledonia,
  associationDate: {
    founded: '1928',
    fifaAffiliation: '2004',
    confederationAffiliation: '1999',
  },
})