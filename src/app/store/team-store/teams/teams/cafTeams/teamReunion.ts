import { Team } from '../../classTeam/classTeam'
import { flagReunion } from '@/shared/assets/image/flags'
import { coatOfArmsReunion } from '@/shared/assets/image/coat-of-arms'
import { iconReunion } from '@/shared/assets/iconFootballAssociation'

export const teamReunion = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Reunion', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagReunion, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsReunion,
  associationLogo: iconReunion,
  associationDate: {
    founded: '1956',
    fifaAffiliation: '-',
    confederationAffiliation: '1992',
  },
})