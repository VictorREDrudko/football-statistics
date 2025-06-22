import { Team } from '../../classTeam/classTeam'
import { flagBhutan } from '@/shared/assets/flags'
import { coatOfArmsBhutan } from '@/shared/assets/coat-of-arms'
import { iconBhutan } from '@/shared/assets/iconFootballAssociation'

export const teamBhutan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Bhutan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBhutan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBhutan,
  associationLogo: iconBhutan,
  associationDate: {
    founded: '1983',
    fifaAffiliation: '2000',
    confederationAffiliation: '1993',
  },
})