import { Team } from '../../classTeam/classTeam'
import { flagAfghanistan } from '@/shared/assets/image/flags'
import { coatOfArmsAfghanistan } from '@/shared/assets/image/coat-of-arms'
import { iconAfghanistan } from '@/shared/assets/iconFootballAssociation'

export const teamAfghanistan = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Afghanistan', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAfghanistan, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAfghanistan,
  associationLogo: iconAfghanistan,
  associationDate: {
    founded: '1933',
    fifaAffiliation: '1948',
    confederationAffiliation: '1954',
  },
})