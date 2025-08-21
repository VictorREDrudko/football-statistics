import { Team } from '../../classTeam/classTeam'
import { flagArgentina } from '@/shared/assets/image/flags'
import { coatOfArmsArgentina } from '@/shared/assets/image/coat-of-arms'
import { iconArgentina } from '@/shared/assets/iconFootballAssociation'

export const teamArgentina = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Argentina', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagArgentina, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsArgentina,
  associationLogo: iconArgentina,
  associationDate: {
    founded: '1893',
    fifaAffiliation: '1912',
    confederationAffiliation: '1916',
  },
})