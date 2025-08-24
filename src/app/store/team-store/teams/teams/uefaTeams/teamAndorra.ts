import { Team } from '../../classTeam/classTeam'
import { flagAndorra } from '@/shared/assets/image/flags'
import { coatOfArmsAndorra } from '@/shared/assets/image/coat-of-arms'
import { iconAndorra } from '@/shared/assets/iconFootballAssociation'

export const teamAndorra = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Andorra', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAndorra, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAndorra,
  associationLogo: iconAndorra,
  associationDate: {
    founded: '1994',
    fifaAffiliation: '1996',
    confederationAffiliation: '1996',
  },
})
