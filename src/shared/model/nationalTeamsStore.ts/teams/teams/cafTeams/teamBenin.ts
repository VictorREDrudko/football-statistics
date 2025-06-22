import { Team } from '../../classTeam/classTeam'
import { flagBenin } from '@/shared/assets/flags'
import { coatOfArmsBenin } from '@/shared/assets/coat-of-arms'
import { iconBenin } from '@/shared/assets/iconFootballAssociation'

export const teamBenin = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Benin', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBenin, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBenin,
  associationLogo: iconBenin,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1962',
    confederationAffiliation: '1962',
  },
})