import { Team } from '../../classTeam/classTeam'
import { flagFrenchGuiana } from '@/shared/assets/image/flags'
import { coatOfArmsFrenchGuiana } from '@/shared/assets/image/coat-of-arms'
import { iconFrenchGuiana } from '@/shared/assets/iconFootballAssociation'

export const teamFrenchGuiana = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'French Guiana', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagFrenchGuiana, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsFrenchGuiana,
  associationLogo: iconFrenchGuiana,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '-',
    confederationAffiliation: '2013',
  },
})