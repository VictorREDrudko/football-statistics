import { Team } from '../../classTeam/classTeam'
import { flagPanama } from '@/shared/assets/image/flags'
import { coatOfArmsPanama } from '@/shared/assets/image/coat-of-arms'
import { iconPanama } from '@/shared/assets/iconFootballAssociation'

export const teamPanama = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Panama', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPanama, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPanama,
  associationLogo: iconPanama,
  associationDate: {
    founded: '1937',
    fifaAffiliation: '1938',
    confederationAffiliation: '1961',
  },
})