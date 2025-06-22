import { Team } from '../../classTeam/classTeam'
import { flagMadagascar } from '@/shared/assets/flags'
import { coatOfArmsMadagascar } from '@/shared/assets/coat-of-arms'
import { iconMadagascar } from '@/shared/assets/iconFootballAssociation'

export const teamMadagascar = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Madagascar', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMadagascar, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMadagascar,
  associationLogo: iconMadagascar,
  associationDate: {
    founded: '1961',
    fifaAffiliation: '1964',
    confederationAffiliation: '1963',
  },
})