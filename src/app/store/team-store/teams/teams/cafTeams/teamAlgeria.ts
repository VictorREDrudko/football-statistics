import { Team } from '../../classTeam/classTeam'
import { flagAlgeria } from '@/shared/assets/image/flags'
import { coatOfArmsAlgeria } from '@/shared/assets/image/coat-of-arms'
import { iconAlgeria } from '@/shared/assets/iconFootballAssociation'

export const teamAlgeria = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Algeria', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAlgeria, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAlgeria,
  associationLogo: iconAlgeria,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1963',
    confederationAffiliation: '1964',
  },
})
