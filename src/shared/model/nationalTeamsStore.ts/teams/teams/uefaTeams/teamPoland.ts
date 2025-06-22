import { Team } from '../../classTeam/classTeam'
import { flagPoland } from '@/shared/assets/flags'
import { coatOfArmsPoland } from '@/shared/assets/coat-of-arms'
import { iconPoland } from '@/shared/assets/iconFootballAssociation'

export const teamPoland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Poland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPoland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPoland,
  associationLogo: iconPoland,
  associationDate: {
    founded: '1919',
    fifaAffiliation: '1923',
    confederationAffiliation: '1954',
  },
})