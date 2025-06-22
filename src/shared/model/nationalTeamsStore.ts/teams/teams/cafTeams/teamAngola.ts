import { Team } from '../../classTeam/classTeam'
import { flagAngola } from '@/shared/assets/flags'
import { coatOfArmsAngola } from '@/shared/assets/coat-of-arms'
import { iconAngola } from '@/shared/assets/iconFootballAssociation'

export const teamAngola = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Angola', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAngola, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAngola,
  associationLogo: iconAngola,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1980',
    confederationAffiliation: '1980',
  },
})