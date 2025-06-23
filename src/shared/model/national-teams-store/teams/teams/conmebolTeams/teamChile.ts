import { Team } from '../../classTeam/classTeam'
import { flagChile } from '@/shared/assets/flags'
import { coatOfArmsChile } from '@/shared/assets/coat-of-arms'
import { iconChile } from '@/shared/assets/iconFootballAssociation'

export const teamChile = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Chile', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagChile, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsChile,
  associationLogo: iconChile,
  associationDate: {
    founded: '1895',
    fifaAffiliation: '1913',
    confederationAffiliation: '1916',
  },
})