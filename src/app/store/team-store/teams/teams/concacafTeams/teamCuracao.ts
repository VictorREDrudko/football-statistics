import { Team } from '../../classTeam/classTeam'
import { flagCuracao } from '@/shared/assets/image/flags'
import { coatOfArmsCuracao } from '@/shared/assets/image/coat-of-arms'
import { iconCuracao } from '@/shared/assets/iconFootballAssociation'

export const teamCuracao = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Curaçao', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCuracao, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCuracao,
  associationLogo: iconCuracao,
  associationDate: {
    founded: '1990',
    fifaAffiliation: '1996',
    confederationAffiliation: '1996',
  },
})