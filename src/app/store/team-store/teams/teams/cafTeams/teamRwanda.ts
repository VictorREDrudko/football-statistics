import { Team } from '../../classTeam/classTeam'
import { flagRwanda } from '@/shared/assets/image/flags'
import { coatOfArmsRwanda } from '@/shared/assets/image/coat-of-arms'
import { iconRwanda } from '@/shared/assets/iconFootballAssociation'

export const teamRwanda = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Rwanda', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagRwanda, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsRwanda,
  associationLogo: iconRwanda,
  associationDate: {
    founded: '1972',
    fifaAffiliation: '1978',
    confederationAffiliation: '1978',
  },
})