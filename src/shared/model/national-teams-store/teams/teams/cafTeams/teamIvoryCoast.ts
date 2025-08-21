import { Team } from '../../classTeam/classTeam'
import { flagIvoryCoast } from '@/shared/assets/image/flags'
import { coatOfArmsIvoryCoast } from '@/shared/assets/image/coat-of-arms'
import { iconIvoryCoast } from '@/shared/assets/iconFootballAssociation'

export const teamIvoryCoast = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Ivory Coast', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIvoryCoast, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIvoryCoast,
  associationLogo: iconIvoryCoast,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1964',
    confederationAffiliation: '1960',
  },
})