import { Team } from '../../classTeam/classTeam'
import { flagSamoa } from '@/shared/assets/flags'
import { coatOfArmsSamoa } from '@/shared/assets/coat-of-arms'
import { iconSamoa } from '@/shared/assets/iconFootballAssociation'

export const teamSamoa = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Samoa', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSamoa, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSamoa,
  associationLogo: iconSamoa,
  associationDate: {
    founded: '1968',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})