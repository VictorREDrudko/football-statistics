import { Team } from '../../classTeam/classTeam'
import { flagBonaire } from '@/shared/assets/image/flags'
import { coatOfArmsBonaire } from '@/shared/assets/image/coat-of-arms'
import { iconBonaire } from '@/shared/assets/iconFootballAssociation'

export const teamBonaire = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Bonaire', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBonaire, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBonaire,
  associationLogo: iconBonaire,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '-',
    confederationAffiliation: '2014',
  },
})