import { Team } from '../../classTeam/classTeam'
import { flagDRCongo, flagDRCongo2 } from '@/shared/assets/image/flags'
import { coatOfArmsDRCongo } from '@/shared/assets/image/coat-of-arms'
import { iconDRCongo } from '@/shared/assets/iconFootballAssociation'

export const teamDRCongo = new Team({
  confederation: 'CAF',
  names: [
    { nameCountry: 'DR Congo', period: '0000-p.t.' },
    { nameCountry: 'Zaire', period: '1971-1997' },
  ],
  flags: [
    { countryFlag: flagDRCongo, period: '0000-p.t.' },
    { countryFlag: flagDRCongo2, period: '1971-1997' },
  ],
  coatOfArms: coatOfArmsDRCongo,
  associationLogo: iconDRCongo,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})