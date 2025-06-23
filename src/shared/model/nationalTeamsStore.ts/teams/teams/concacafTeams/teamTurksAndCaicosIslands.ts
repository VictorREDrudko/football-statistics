import { Team } from '../../classTeam/classTeam'
import { flagTurksAndCaicosIslands } from '@/shared/assets/flags'
import { coatOfArmsTurksAndCaicosIslands } from '@/shared/assets/coat-of-arms'
import { iconTurksAndCaicosIslands } from '@/shared/assets/iconFootballAssociation'

export const teamTurksAndCaicosIslands = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Turks and Caicos Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTurksAndCaicosIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTurksAndCaicosIslands,
  associationLogo: iconTurksAndCaicosIslands,
  associationDate: {
    founded: '1996',
    fifaAffiliation: '1998',
    confederationAffiliation: '1996',
  },
})