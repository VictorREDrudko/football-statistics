import { Team } from '../../classTeam/classTeam'
import { flagLibya } from '@/shared/assets/image/flags'
import { coatOfArmsLibya } from '@/shared/assets/image/coat-of-arms'
import { iconLibya } from '@/shared/assets/iconFootballAssociation'

export const teamLibya = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Libya', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLibya, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLibya,
  associationLogo: iconLibya,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1964',
    confederationAffiliation: '1965',
  },
})