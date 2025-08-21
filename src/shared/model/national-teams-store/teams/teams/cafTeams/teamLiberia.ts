import { Team } from '../../classTeam/classTeam'
import { flagLiberia } from '@/shared/assets/image/flags'
import { coatOfArmsLiberia } from '@/shared/assets/image/coat-of-arms'
import { iconLiberia } from '@/shared/assets/iconFootballAssociation'

export const teamLiberia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Liberia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLiberia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLiberia,
  associationLogo: iconLiberia,
  associationDate: {
    founded: '1936',
    fifaAffiliation: '1964',
    confederationAffiliation: '1962',
  },
})