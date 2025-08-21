import { Team } from '../../classTeam/classTeam'
import { flagIran } from '@/shared/assets/image/flags'
import { coatOfArmsIran } from '@/shared/assets/image/coat-of-arms'
import { iconIran } from '@/shared/assets/iconFootballAssociation'

export const teamIran = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Iran', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIran, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIran,
  associationLogo: iconIran,
  associationDate: {
    founded: '1920',
    fifaAffiliation: '1948',
    confederationAffiliation: '1958',
  },
})