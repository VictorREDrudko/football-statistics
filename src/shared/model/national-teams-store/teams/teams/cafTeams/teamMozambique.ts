import { Team } from '../../classTeam/classTeam'
import { flagMozambique } from '@/shared/assets/flags'
import { coatOfArmsMozambique } from '@/shared/assets/coat-of-arms'
import { iconMozambique } from '@/shared/assets/iconFootballAssociation'

export const teamMozambique = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Mozambique', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMozambique, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMozambique,
  associationLogo: iconMozambique,
  associationDate: {
    founded: '1976',
    fifaAffiliation: '1980',
    confederationAffiliation: '1980',
  },
})