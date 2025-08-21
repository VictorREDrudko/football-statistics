import { Team } from '../../classTeam/classTeam'
import { flagDominica } from '@/shared/assets/image/flags'
import { coatOfArmsDominica } from '@/shared/assets/image/coat-of-arms'
import { iconDominica } from '@/shared/assets/iconFootballAssociation'

export const teamDominica = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Dominica', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagDominica, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsDominica,
  associationLogo: iconDominica,
  associationDate: {
    founded: '1970',
    fifaAffiliation: '1994',
    confederationAffiliation: '1994',
  },
})