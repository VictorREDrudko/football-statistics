import { Team } from '../../classTeam/classTeam'
import { flagLesotho } from '@/shared/assets/flags'
import { coatOfArmsLesotho } from '@/shared/assets/coat-of-arms'
import { iconLesotho } from '@/shared/assets/iconFootballAssociation'

export const teamLesotho = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Lesotho', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLesotho, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLesotho,
  associationLogo: iconLesotho,
  associationDate: {
    founded: '1932',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})