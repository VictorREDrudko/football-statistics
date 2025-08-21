import { Team } from '../../classTeam/classTeam'
import { flagSaintMartin } from '@/shared/assets/image/flags'
import { coatOfArmsSaintMartin } from '@/shared/assets/image/coat-of-arms'
import { iconSaintMartin } from '@/shared/assets/iconFootballAssociation'

export const teamSaintMartin = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Saint Martin', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaintMartin, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaintMartin,
  associationLogo: iconSaintMartin,
  associationDate: {
    founded: '1999',
    fifaAffiliation: '-',
    confederationAffiliation: '2013',
  },
})