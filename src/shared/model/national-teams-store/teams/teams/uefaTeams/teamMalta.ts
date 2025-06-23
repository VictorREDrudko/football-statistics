import { Team } from '../../classTeam/classTeam'
import { flagMalta } from '@/shared/assets/flags'
import { coatOfArmsMalta } from '@/shared/assets/coat-of-arms'
import { iconMalta } from '@/shared/assets/iconFootballAssociation'

export const teamMalta = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Malta', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMalta, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMalta,
  associationLogo: iconMalta,
  associationDate: {
    founded: '1900',
    fifaAffiliation: '1959',
    confederationAffiliation: '1960',
  },
})