import { Team } from '../../classTeam/classTeam'
import { flagUnitedStates } from '@/shared/assets/flags'
import { coatOfArmsUnitedStates } from '@/shared/assets/coat-of-arms'
import { iconUnitedStates } from '@/shared/assets/iconFootballAssociation'

export const teamUnitedStates = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'United States', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUnitedStates, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUnitedStates,
  associationLogo: iconUnitedStates,
  associationDate: {
    founded: '1913',
    fifaAffiliation: '1914',
    confederationAffiliation: '1961',
  },
})