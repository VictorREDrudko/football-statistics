import { Team } from '../../classTeam/classTeam'
import { flagKazakhstan } from '@/shared/assets/image/flags'
import { coatOfArmsKazakhstan } from '@/shared/assets/image/coat-of-arms'
import { iconKazakhstan } from '@/shared/assets/iconFootballAssociation'

export const teamKazakhstan = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Kazakhstan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKazakhstan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKazakhstan,
  associationLogo: iconKazakhstan,
  associationDate: {
    founded: '1994',
    fifaAffiliation: '1994',
    confederationAffiliation: '2002',
  },
})
