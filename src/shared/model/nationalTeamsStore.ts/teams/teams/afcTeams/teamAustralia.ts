import { Team } from '../../classTeam/classTeam'
import { flagAustralia } from '@/shared/assets/flags'
import { coatOfArmsAustralia } from '@/shared/assets/coat-of-arms'
import { iconAustralia } from '@/shared/assets/iconFootballAssociation'

export const teamAustralia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Australia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAustralia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAustralia,
  associationLogo: iconAustralia,
  associationDate: {
    founded: '1961',
    fifaAffiliation: '1963',
    confederationAffiliation: '2006',
  },
})