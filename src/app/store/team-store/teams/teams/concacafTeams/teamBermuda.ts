import { Team } from '../../classTeam/classTeam'
import { flagBermuda } from '@/shared/assets/image/flags'
import { coatOfArmsBermuda } from '@/shared/assets/image/coat-of-arms'
import { iconBermuda } from '@/shared/assets/iconFootballAssociation'

export const teamBermuda = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Bermuda', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBermuda, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBermuda,
  associationLogo: iconBermuda,
  associationDate: {
    founded: '1928',
    fifaAffiliation: '1962',
    confederationAffiliation: '1967',
  },
})