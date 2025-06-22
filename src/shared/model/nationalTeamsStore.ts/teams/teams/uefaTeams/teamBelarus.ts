import { Team } from '../../classTeam/classTeam'
import { flagBelarus } from '@/shared/assets/flags'
import { coatOfArmsBelarus } from '@/shared/assets/coat-of-arms'
import { iconBelarus } from '@/shared/assets/iconFootballAssociation'

export const teamBelarus = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Belarus', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBelarus, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBelarus,
  associationLogo: iconBelarus,
  associationDate: {
    founded: '1989',
    fifaAffiliation: '1992',
    confederationAffiliation: '1993',
  },
})
