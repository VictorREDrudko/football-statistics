import { Team } from '../../classTeam/classTeam'
import { flagTanzania } from '@/shared/assets/image/flags'
import { coatOfArmsTanzania } from '@/shared/assets/image/coat-of-arms'
import { iconTanzania } from '@/shared/assets/iconFootballAssociation'

export const teamTanzania = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Tanzania', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTanzania, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTanzania,
  associationLogo: iconTanzania,
  associationDate: {
    founded: '1930',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})