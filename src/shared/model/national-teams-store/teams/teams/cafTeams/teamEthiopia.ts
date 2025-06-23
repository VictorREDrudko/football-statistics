import { Team } from '../../classTeam/classTeam'
import { flagEthiopia } from '@/shared/assets/flags'
import { coatOfArmsEthiopia } from '@/shared/assets/coat-of-arms'
import { iconEthiopia } from '@/shared/assets/iconFootballAssociation'

export const teamEthiopia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Ethiopia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEthiopia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEthiopia,
  associationLogo: iconEthiopia,
  associationDate: {
    founded: '1943',
    fifaAffiliation: '1952',
    confederationAffiliation: '1957',
  },
})