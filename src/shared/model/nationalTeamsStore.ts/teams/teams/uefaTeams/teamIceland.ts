import { Team } from '../../classTeam/classTeam'
import { flagIceland } from '@/shared/assets/flags'
import { coatOfArmsIceland } from '@/shared/assets/coat-of-arms'
import { iconIceland } from '@/shared/assets/iconFootballAssociation'

export const teamIceland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Iceland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIceland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIceland,
  associationLogo: iconIceland,
  associationDate: {
    founded: '1947',
    fifaAffiliation: '1947',
    confederationAffiliation: '1954',
  },
})