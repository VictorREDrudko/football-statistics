import { Team } from '../../classTeam/classTeam'
import {
  flagSpain,
  flagSpain1,
  flagSpain2,
  flagSpain3,
  flagSpain4,
  flagSpain5,
  flagSpain6,
} from '@/shared/assets/flags'
import { coatOfArmsSpain } from '@/shared/assets/coat-of-arms'
import { iconSpain } from '@/shared/assets/iconFootballAssociation'

export const teamSpain = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Spain', period: '0000-p.t.' }],
  flags: [
    { countryFlag: flagSpain, period: '1981-p.t.' },
    { countryFlag: flagSpain1, period: '1931-1935' },
    { countryFlag: flagSpain2, period: '1936-1936, 1978-1978' },
    { countryFlag: flagSpain3, period: '1937-1937' },
    { countryFlag: flagSpain4, period: '1938-1945' },
    { countryFlag: flagSpain5, period: '1946-1976' },
    { countryFlag: flagSpain6, period: '1977-1980' },
  ],
  coatOfArms: coatOfArmsSpain,
  associationLogo: iconSpain,
  associationDate: {
    founded: '1913',
    fifaAffiliation: '1914',
    confederationAffiliation: '1954',
  },
})
