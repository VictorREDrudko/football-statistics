import { Team } from '../../classTeam/classTeam'
import { flagQatar } from '@/shared/assets/flags'
import { coatOfArmsQatar } from '@/shared/assets/coat-of-arms'
import { iconQatar } from '@/shared/assets/iconFootballAssociation'

export const teamQatar = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Qatar', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagQatar, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsQatar,
  associationLogo: iconQatar,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1972',
    confederationAffiliation: '1974',
  },
})