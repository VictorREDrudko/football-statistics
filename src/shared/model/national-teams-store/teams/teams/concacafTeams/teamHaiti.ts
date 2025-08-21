import { Team } from '../../classTeam/classTeam'
import { flagHaiti } from '@/shared/assets/image/flags'
import { coatOfArmsHaiti } from '@/shared/assets/image/coat-of-arms'
import { iconHaiti } from '@/shared/assets/iconFootballAssociation'

export const teamHaiti = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Haiti', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagHaiti, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsHaiti,
  associationLogo: iconHaiti,
  associationDate: {
    founded: '1904',
    fifaAffiliation: '1934',
    confederationAffiliation: '1961',
  },
})