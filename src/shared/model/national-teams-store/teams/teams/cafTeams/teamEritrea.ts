import { Team } from '../../classTeam/classTeam'
import { flagEritrea } from '@/shared/assets/image/flags'
import { coatOfArmsEritrea } from '@/shared/assets/image/coat-of-arms'
import { iconEritrea } from '@/shared/assets/iconFootballAssociation'

export const teamEritrea = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Eritrea', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEritrea, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEritrea,
  associationLogo: iconEritrea,
  associationDate: {
    founded: '1996',
    fifaAffiliation: '1998',
    confederationAffiliation: '1998',
  },
})