import { Team } from '../../classTeam/classTeam'
import { flagSerbia, flagSerbia1 } from '@/shared/assets/image/flags'
import { coatOfArmsSerbia } from '@/shared/assets/image/coat-of-arms'
import { iconSerbia } from '@/shared/assets/iconFootballAssociation'

export const teamSerbia = new Team({
  confederation: 'UEFA',
  names: [
    { nameCountry: 'Serbia', period: '2007-p.t.' },
    { nameCountry: 'FR Yugoslavia', period: '1992-2002' },
    { nameCountry: 'Serbia and Montenegro', period: '2003-2006' },
  ],
  flags: [
    { countryFlag: flagSerbia, period: '2006-p.t.' },
    { countryFlag: flagSerbia1, period: '1992-2005' },
  ],
  coatOfArms: coatOfArmsSerbia,
  associationLogo: iconSerbia,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1921',
    confederationAffiliation: '1954',
  },
})