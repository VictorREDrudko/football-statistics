import { Team } from '../../classTeam/classTeam'
import { flagNigeria } from '@/shared/assets/image/flags'
import { coatOfArmsNigeria } from '@/shared/assets/image/coat-of-arms'
import { iconNigeria } from '@/shared/assets/iconFootballAssociation'

export const teamNigeria = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Nigeria', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNigeria, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNigeria,
  associationLogo: iconNigeria,
  associationDate: {
    founded: '1945',
    fifaAffiliation: '1960',
    confederationAffiliation: '1960',
  },
})