import { Team } from '../../classTeam/classTeam'
import { flagBolivia } from '@/shared/assets/flags'
import { coatOfArmsBolivia } from '@/shared/assets/coat-of-arms'
import { iconBolivia } from '@/shared/assets/iconFootballAssociation'

export const teamBolivia = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Bolivia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBolivia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBolivia,
  associationLogo: iconBolivia,
  associationDate: {
    founded: '1925',
    fifaAffiliation: '1926',
    confederationAffiliation: '1926',
  },
})