import { Team } from '../../classTeam/classTeam'
import { flagOman } from '@/shared/assets/flags'
import { coatOfArmsOman } from '@/shared/assets/coat-of-arms'
import { iconOman } from '@/shared/assets/iconFootballAssociation'

export const teamOman = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Oman', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagOman, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsOman,
  associationLogo: iconOman,
  associationDate: {
    founded: '1978',
    fifaAffiliation: '1980',
    confederationAffiliation: '1980',
  },
})