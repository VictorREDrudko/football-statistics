import { Team } from '../../classTeam/classTeam'
import { flagHungary, flagHungary1, flagHungary2, flagHungary3 } from '@/shared/assets/image/flags'
import { coatOfArmsHungary } from '@/shared/assets/image/coat-of-arms'
import { iconHungary } from '@/shared/assets/iconFootballAssociation'

export const teamHungary = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Hungary', period: '0000-p.t.' }],
  flags: [
    { countryFlag: flagHungary, period: '1957-p.t.' },
    { countryFlag: flagHungary1, period: '1919-1945' },
    { countryFlag: flagHungary2, period: '1946-1948' },
    { countryFlag: flagHungary3, period: '1949-1956' },
  ],
  coatOfArms: coatOfArmsHungary,
  associationLogo: iconHungary,
  associationDate: {
    founded: '1901',
    fifaAffiliation: '1906',
    confederationAffiliation: '1954',
  },
})
