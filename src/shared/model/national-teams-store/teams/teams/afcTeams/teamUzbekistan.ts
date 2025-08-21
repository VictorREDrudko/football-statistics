import { Team } from '../../classTeam/classTeam'
import { flagUzbekistan } from '@/shared/assets/image/flags'
import { coatOfArmsUzbekistan } from '@/shared/assets/image/coat-of-arms'
import { iconUzbekistan } from '@/shared/assets/iconFootballAssociation'

export const teamUzbekistan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Uzbekistan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUzbekistan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUzbekistan,
  associationLogo: iconUzbekistan,
  associationDate: {
    founded: '1946',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})