import { Team } from '../../classTeam/classTeam'
import { flagSaintKittsAndNevis } from '@/shared/assets/flags'
import { coatOfArmsSaintKittsAndNevis } from '@/shared/assets/coat-of-arms'
import { iconSaintKittsAndNevis } from '@/shared/assets/iconFootballAssociation'

export const teamSaintKittsAndNevis = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Saint Kitts and Nevis', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSaintKittsAndNevis, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSaintKittsAndNevis,
  associationLogo: iconSaintKittsAndNevis,
  associationDate: {
    founded: '1932',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})