import { Team } from '../../classTeam/classTeam'
import { flagEngland } from '@/shared/assets/flags'
import { coatOfArmsEngland } from '@/shared/assets/coat-of-arms'
import { iconEngland } from '@/shared/assets/iconFootballAssociation'

export const teamEngland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'England', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEngland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEngland,
  associationLogo: iconEngland,
  associationDate: {
    founded: '1863',
    fifaAffiliation: '1905',
    confederationAffiliation: '1954',
  },
})
