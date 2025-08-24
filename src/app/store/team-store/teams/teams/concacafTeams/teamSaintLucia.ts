import { Team } from '../../classTeam/classTeam'
import { flagSaintLucia } from '@/shared/assets/image/flags'
import { coatOfArmsSaintLucia } from '@/shared/assets/image/coat-of-arms'
import { iconSaintLucia } from '@/shared/assets/iconFootballAssociation'

export const teamSaintLucia = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Saint Lucia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaintLucia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaintLucia,
  associationLogo: iconSaintLucia,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1988',
    confederationAffiliation: '1986',
  },
})