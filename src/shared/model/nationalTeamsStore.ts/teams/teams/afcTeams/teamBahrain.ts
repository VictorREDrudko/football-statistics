import { Team } from '../../classTeam/classTeam'
import { flagBahrain } from '@/shared/assets/flags'
import { coatOfArmsBahrain } from '@/shared/assets/coat-of-arms'
import { iconBahrain } from '@/shared/assets/iconFootballAssociation'

export const teamBahrain = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Bahrain', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBahrain, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBahrain,
  associationLogo: iconBahrain,
  associationDate: {
    founded: '1957',
    fifaAffiliation: '1968',
    confederationAffiliation: '1969',
  },
})