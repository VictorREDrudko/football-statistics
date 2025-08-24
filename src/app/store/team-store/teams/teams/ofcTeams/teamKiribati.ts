import { Team } from '../../classTeam/classTeam'
import { flagKiribati } from '@/shared/assets/image/flags'
import { coatOfArmsKiribati } from '@/shared/assets/image/coat-of-arms'
import { iconKiribati } from '@/shared/assets/iconFootballAssociation'

export const teamKiribati = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Kiribati', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKiribati, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKiribati,
  associationLogo: iconKiribati,
  associationDate: {
    founded: '1980',
    fifaAffiliation: '-',
    confederationAffiliation: '2007',
  },
})