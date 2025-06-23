import { Team } from '../../classTeam/classTeam'
import { flagIsrael } from '@/shared/assets/flags'
import { coatOfArmsIsrael } from '@/shared/assets/coat-of-arms'
import { iconIsrael } from '@/shared/assets/iconFootballAssociation'

export const teamIsrael = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Israel', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIsrael, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIsrael,
  associationLogo: iconIsrael,
  associationDate: {
    founded: '1928',
    fifaAffiliation: '1929',
    confederationAffiliation: '1994',
  },
})
