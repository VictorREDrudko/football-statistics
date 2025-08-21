import { Team } from '../../classTeam/classTeam'
import { flagUruguay } from '@/shared/assets/image/flags'
import { coatOfArmsUruguay } from '@/shared/assets/image/coat-of-arms'
import { iconUruguay } from '@/shared/assets/iconFootballAssociation'

export const teamUruguay = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Uruguay', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUruguay, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUruguay,
  associationLogo: iconUruguay,
  associationDate: {
    founded: '1900',
    fifaAffiliation: '1923',
    confederationAffiliation: '1916',
  },
})