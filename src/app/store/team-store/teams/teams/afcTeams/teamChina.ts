import { Team } from '../../classTeam/classTeam'
import { flagChina } from '@/shared/assets/image/flags'
import { coatOfArmsChina } from '@/shared/assets/image/coat-of-arms'
import { iconChina } from '@/shared/assets/iconFootballAssociation'

export const teamChina = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'China', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagChina, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsChina,
  associationLogo: iconChina,
  associationDate: {
    founded: '1924',
    fifaAffiliation: '1931',
    confederationAffiliation: '1974',
  },
})