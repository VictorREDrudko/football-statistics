import { Team } from '../../classTeam/classTeam'
import { flagDjibouti } from '@/shared/assets/image/flags'
import { coatOfArmsDjibouti } from '@/shared/assets/image/coat-of-arms'
import { iconDjibouti } from '@/shared/assets/iconFootballAssociation'

export const teamDjibouti = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Djibouti', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagDjibouti, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsDjibouti,
  associationLogo: iconDjibouti,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})