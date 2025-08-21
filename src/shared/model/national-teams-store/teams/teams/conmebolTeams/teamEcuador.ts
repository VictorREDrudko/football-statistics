import { Team } from '../../classTeam/classTeam'
import { flagEcuador } from '@/shared/assets/image/flags'
import { coatOfArmsEcuador } from '@/shared/assets/image/coat-of-arms'
import { iconEcuador } from '@/shared/assets/iconFootballAssociation'

export const teamEcuador = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Ecuador', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEcuador, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEcuador,
  associationLogo: iconEcuador,
  associationDate: {
    founded: '1925',
    fifaAffiliation: '1926',
    confederationAffiliation: '1927',
  },
})