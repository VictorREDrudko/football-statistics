import { Team } from '../../classTeam/classTeam'
import { flagRomania } from '@/shared/assets/flags'
import { coatOfArmsRomania } from '@/shared/assets/coat-of-arms'
import { iconRomania } from '@/shared/assets/iconFootballAssociation'

export const teamRomania = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Romania', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagRomania, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsRomania,
  associationLogo: iconRomania,
  associationDate: {
    founded: '1909',
    fifaAffiliation: '1923',
    confederationAffiliation: '1954',
  },
})