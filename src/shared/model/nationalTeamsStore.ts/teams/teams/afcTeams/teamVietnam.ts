import { Team } from '../../classTeam/classTeam'
import { flagVietnam } from '@/shared/assets/flags'
import { coatOfArmsVietnam } from '@/shared/assets/coat-of-arms'
import { iconVietnam } from '@/shared/assets/iconFootballAssociation'

export const teamVietnam = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Vietnam', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagVietnam, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsVietnam,
  associationLogo: iconVietnam,
  associationDate: {
    founded: '1952',
    fifaAffiliation: '1952',
    confederationAffiliation: '1954',
  },
})