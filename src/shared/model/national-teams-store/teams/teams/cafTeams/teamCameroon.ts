import { Team } from '../../classTeam/classTeam'
import { flagCameroon } from '@/shared/assets/flags'
import { coatOfArmsCameroon } from '@/shared/assets/coat-of-arms'
import { iconCameroon } from '@/shared/assets/iconFootballAssociation'

export const teamCameroon = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Cameroon', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCameroon, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCameroon,
  associationLogo: iconCameroon,
  associationDate: {
    founded: '1959',
    fifaAffiliation: '1962',
    confederationAffiliation: '1963',
  },
})