import { Team } from '../../classTeam/classTeam'
import { flagNewZealand } from '@/shared/assets/image/flags'
import { coatOfArmsNewZealand } from '@/shared/assets/image/coat-of-arms'
import { iconNewZealand } from '@/shared/assets/iconFootballAssociation'

export const teamNewZealand = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'New Zealand', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNewZealand, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNewZealand,
  associationLogo: iconNewZealand,
  associationDate: {
    founded: '1891',
    fifaAffiliation: '1948',
    confederationAffiliation: '1966',
  },
})