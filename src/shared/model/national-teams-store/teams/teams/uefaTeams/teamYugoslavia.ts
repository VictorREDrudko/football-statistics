import { Team } from '../../classTeam/classTeam'
import { flagYugoslavia, flagYugoslavia1 } from '@/shared/assets/image/flags'
import { coatOfArmsYugoslavia } from '@/shared/assets/image/coat-of-arms'
import { iconYugoslavia } from '@/shared/assets/iconFootballAssociation'

export const teamYugoslavia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Yugoslavia', period: '1918-1992' }],
  flags: [
    { countryFlag: flagYugoslavia, period: '1918-1944, 1992-2006, 2006-p.t.' },
    { countryFlag: flagYugoslavia1, period: '1945-1992' },
  ],
  coatOfArms: coatOfArmsYugoslavia,
  associationLogo: iconYugoslavia,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1923',
    confederationAffiliation: '1954',
  },
  isCountryReal: false,
})