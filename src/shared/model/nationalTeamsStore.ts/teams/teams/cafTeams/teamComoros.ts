import { Team } from '../../classTeam/classTeam'
import { flagComoros } from '@/shared/assets/flags'
import { coatOfArmsComoros } from '@/shared/assets/coat-of-arms'
import { iconComoros } from '@/shared/assets/iconFootballAssociation'

export const teamComoros = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Comoros', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagComoros, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsComoros,
  associationLogo: iconComoros,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '2005',
    confederationAffiliation: '2005',
  },
})