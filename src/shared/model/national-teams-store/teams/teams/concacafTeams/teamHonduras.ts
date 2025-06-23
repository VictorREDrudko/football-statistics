import { Team } from '../../classTeam/classTeam'
import { flagHonduras } from '@/shared/assets/flags'
import { coatOfArmsHonduras } from '@/shared/assets/coat-of-arms'
import { iconHonduras } from '@/shared/assets/iconFootballAssociation'

export const teamHonduras = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Honduras', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagHonduras, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsHonduras,
  associationLogo: iconHonduras,
  associationDate: {
    founded: '1935',
    fifaAffiliation: '1946',
    confederationAffiliation: '1961',
  },
})