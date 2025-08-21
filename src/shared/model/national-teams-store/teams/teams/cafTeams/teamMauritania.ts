import { Team } from '../../classTeam/classTeam'
import { flagMauritania } from '@/shared/assets/image/flags'
import { coatOfArmsMauritania } from '@/shared/assets/image/coat-of-arms'
import { iconMauritania } from '@/shared/assets/iconFootballAssociation'

export const teamMauritania = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Mauritania', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMauritania, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMauritania,
  associationLogo: iconMauritania,
  associationDate: {
    founded: '1961',
    fifaAffiliation: '1970',
    confederationAffiliation: '1968',
  },
})