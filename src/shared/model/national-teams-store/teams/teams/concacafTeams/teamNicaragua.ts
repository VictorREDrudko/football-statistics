import { Team } from '../../classTeam/classTeam'
import { flagNicaragua } from '@/shared/assets/image/flags'
import { coatOfArmsNicaragua } from '@/shared/assets/image/coat-of-arms'
import { iconNicaragua } from '@/shared/assets/iconFootballAssociation'

export const teamNicaragua = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Nicaragua', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNicaragua, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNicaragua,
  associationLogo: iconNicaragua,
  associationDate: {
    founded: '1931',
    fifaAffiliation: '1950',
    confederationAffiliation: '1961',
  },
})