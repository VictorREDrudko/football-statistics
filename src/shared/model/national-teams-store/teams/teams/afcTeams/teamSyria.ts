import { Team } from '../../classTeam/classTeam'
import { flagSyria } from '@/shared/assets/flags'
import { coatOfArmsSyria } from '@/shared/assets/coat-of-arms'
import { iconSyria } from '@/shared/assets/iconFootballAssociation'

export const teamSyria = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Syria', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSyria, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSyria,
  associationLogo: iconSyria,
  associationDate: {
    founded: '1936',
    fifaAffiliation: '1937',
    confederationAffiliation: '1970',
  },
})