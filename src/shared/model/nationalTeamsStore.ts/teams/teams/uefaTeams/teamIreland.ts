import { Team } from '../../classTeam/classTeam'
import { flagRepublicOfIreland } from '@/shared/assets/flags'
import { coatOfArmsRepublicOfIreland } from '@/shared/assets/coat-of-arms'
import { iconRepublicOfIreland } from '@/shared/assets/iconFootballAssociation'

export const teamIreland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Ireland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagRepublicOfIreland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsRepublicOfIreland,
  associationLogo: iconRepublicOfIreland,
  associationDate: {
    founded: '1921',
    fifaAffiliation: '1923',
    confederationAffiliation: '1954',
  },
})