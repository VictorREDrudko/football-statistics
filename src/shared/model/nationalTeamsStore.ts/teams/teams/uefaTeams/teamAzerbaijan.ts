import { Team } from '../../classTeam/classTeam'
import { flagAzerbaijan } from '@/shared/assets/flags'
import { coatOfArmsAzerbaijan } from '@/shared/assets/coat-of-arms'
import { iconAzerbaijan } from '@/shared/assets/iconFootballAssociation'

export const teamAzerbaijan = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Azerbaijan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAzerbaijan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAzerbaijan,
  associationLogo: iconAzerbaijan,
  associationDate: {
    founded: '1992',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})
