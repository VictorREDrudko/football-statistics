import { Team } from '../../classTeam/classTeam'
import { flagMexico } from '@/shared/assets/image/flags'
import { coatOfArmsMexico } from '@/shared/assets/image/coat-of-arms'
import { iconMexico } from '@/shared/assets/iconFootballAssociation'

export const teamMexico = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Mexico', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMexico, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMexico,
  associationLogo: iconMexico,
  associationDate: {
    founded: '1922',
    fifaAffiliation: '1929',
    confederationAffiliation: '1961',
  },
})