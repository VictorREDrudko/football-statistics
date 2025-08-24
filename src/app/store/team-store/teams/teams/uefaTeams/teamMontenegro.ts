import { Team } from '../../classTeam/classTeam'
import { flagMontenegro } from '@/shared/assets/image/flags'
import { coatOfArmsMontenegro } from '@/shared/assets/image/coat-of-arms'
import { iconMontenegro } from '@/shared/assets/iconFootballAssociation'

export const teamMontenegro = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Montenegro', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMontenegro, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMontenegro,
  associationLogo: iconMontenegro,
  associationDate: {
    founded: '1931',
    fifaAffiliation: '2007',
    confederationAffiliation: '2007',
  },
})