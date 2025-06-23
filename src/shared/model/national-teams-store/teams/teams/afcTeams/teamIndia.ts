import { Team } from '../../classTeam/classTeam'
import { flagIndia } from '@/shared/assets/flags'
import { coatOfArmsIndia } from '@/shared/assets/coat-of-arms'
import { iconIndia } from '@/shared/assets/iconFootballAssociation'

export const teamIndia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'India', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIndia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIndia,
  associationLogo: iconIndia,
  associationDate: {
    founded: '1937',
    fifaAffiliation: '1948',
    confederationAffiliation: '1954',
  },
})