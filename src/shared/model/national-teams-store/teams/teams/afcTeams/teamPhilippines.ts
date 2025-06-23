import { Team } from '../../classTeam/classTeam'
import { flagPhilippines } from '@/shared/assets/flags'
import { coatOfArmsPhilippines } from '@/shared/assets/coat-of-arms'
import { iconPhilippines } from '@/shared/assets/iconFootballAssociation'

export const teamPhilippines = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Philippines', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPhilippines, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPhilippines,
  associationLogo: iconPhilippines,
  associationDate: {
    founded: '1907',
    fifaAffiliation: '1930',
    confederationAffiliation: '1954',
  },
})