import { Team } from '../../classTeam/classTeam'
import { flagGabon } from '@/shared/assets/flags/'
import { coatOfArmsGabon } from '@/shared/assets/coat-of-arms'
import { iconGabon } from '@/shared/assets/iconFootballAssociation'

export const teamGabon = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Gabon', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGabon, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGabon,
  associationLogo: iconGabon,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1966',
    confederationAffiliation: '1967',
  },
})