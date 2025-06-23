import { Team } from '../../classTeam/classTeam'
import { flagKosovo } from '@/shared/assets/flags'
import { coatOfArmsKosovo } from '@/shared/assets/coat-of-arms'
import { iconKosovo } from '@/shared/assets/iconFootballAssociation'

export const teamKosovo = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Kosovo', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKosovo, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKosovo,
  associationLogo: iconKosovo,
  associationDate: {
    founded: '2008',
    fifaAffiliation: '2016',
    confederationAffiliation: '2016',
  },
})
