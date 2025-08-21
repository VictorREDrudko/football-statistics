import { Team } from '../../classTeam/classTeam'
import { flagAlbania } from '@/shared/assets/image/flags'
import { coatOfArmsAlbania } from '@/shared/assets/image/coat-of-arms'
import { iconAlbania } from '@/shared/assets/iconFootballAssociation'

export const teamAlbania = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Albania', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAlbania, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAlbania,
  associationLogo: iconAlbania,
  associationDate: {
    founded: '1930',
    fifaAffiliation: '1932',
    confederationAffiliation: '1954',
  },
})
