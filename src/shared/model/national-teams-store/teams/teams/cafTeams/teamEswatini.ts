import { Team } from '../../classTeam/classTeam'
import { flagEswatini } from '@/shared/assets/flags'
import { coatOfArmsEswatini } from '@/shared/assets/coat-of-arms'
import { iconEswatini } from '@/shared/assets/iconFootballAssociation'

export const teamEswatini = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Eswatini', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEswatini, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEswatini,
  associationLogo: iconEswatini,
  associationDate: {
    founded: '1968',
    fifaAffiliation: '1978',
    confederationAffiliation: '1978',
  },
})