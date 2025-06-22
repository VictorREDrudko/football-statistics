import { Team } from '../../classTeam/classTeam'
import { flagCongo } from '@/shared/assets/flags'
import { coatOfArmsCongo } from '@/shared/assets/coat-of-arms'
import { iconCongo } from '@/shared/assets/iconFootballAssociation'

export const teamCongo = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Congo', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCongo, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCongo,
  associationLogo: iconCongo,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1964',
    confederationAffiliation: '1966',
  },
})