import { Team } from '../../classTeam/classTeam'
import { flagGhana } from '@/shared/assets/flags'
import { coatOfArmsGhana } from '@/shared/assets/coat-of-arms'
import { iconGhana } from '@/shared/assets/iconFootballAssociation'

export const teamGhana = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Ghana', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGhana, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGhana,
  associationLogo: iconGhana,
  associationDate: {
    founded: '1957',
    fifaAffiliation: '1958',
    confederationAffiliation: '1958',
  },
})