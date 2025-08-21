import { Team } from '../../classTeam/classTeam'
import { flagMalaysia } from '@/shared/assets/image/flags'
import { coatOfArmsMalaysia } from '@/shared/assets/image/coat-of-arms'
import { iconMalaysia } from '@/shared/assets/iconFootballAssociation'

export const teamMalaysia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Malaysia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMalaysia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMalaysia,
  associationLogo: iconMalaysia,
  associationDate: {
    founded: '1933',
    fifaAffiliation: '1954',
    confederationAffiliation: '1954',
  },
})