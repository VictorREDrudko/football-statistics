import { Team } from '../../classTeam/classTeam'
import { flagMartinique } from '@/shared/assets/flags'
import { coatOfArmsMartinique } from '@/shared/assets/coat-of-arms'
import { iconMartinique } from '@/shared/assets/iconFootballAssociation'

export const teamMartinique = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Martinique', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMartinique, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMartinique,
  associationLogo: iconMartinique,
  associationDate: {
    founded: '1953',
    fifaAffiliation: '-',
    confederationAffiliation: '2013',
  },
})