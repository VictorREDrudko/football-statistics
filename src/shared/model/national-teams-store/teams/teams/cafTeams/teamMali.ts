import { Team } from '../../classTeam/classTeam'
import { flagMali } from '@/shared/assets/image/flags'
import { coatOfArmsMali } from '@/shared/assets/image/coat-of-arms'
import { iconMali } from '@/shared/assets/iconFootballAssociation'

export const teamMali = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Mali', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMali, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMali,
  associationLogo: iconMali,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1963',
    confederationAffiliation: '1963',
  },
})