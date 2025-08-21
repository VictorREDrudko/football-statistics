import { Team } from '../../classTeam/classTeam'
import { flagGuinea } from '@/shared/assets/image/flags'
import { coatOfArmsGuinea } from '@/shared/assets/image/coat-of-arms'
import { iconGuinea } from '@/shared/assets/iconFootballAssociation'

export const teamGuinea = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Guinea', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGuinea, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGuinea,
  associationLogo: iconGuinea,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1962',
    confederationAffiliation: '1963',
  },
})