import { Team } from '../../classTeam/classTeam'
import { flagLaos } from '@/shared/assets/flags'
import { coatOfArmsLaos } from '@/shared/assets/coat-of-arms'
import { iconLaos } from '@/shared/assets/iconFootballAssociation'

export const teamLaos = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Laos', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLaos, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLaos,
  associationLogo: iconLaos,
  associationDate: {
    founded: '1951',
    fifaAffiliation: '1952',
    confederationAffiliation: '1968',
  },
})