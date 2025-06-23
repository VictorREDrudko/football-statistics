import { Team } from '../../classTeam/classTeam'
import { flagKoreaRepublic } from '@/shared/assets/flags'
import { coatOfArmsKoreaRepublic } from '@/shared/assets/coat-of-arms'
import { iconKoreaRepublic } from '@/shared/assets/iconFootballAssociation'

export const teamKoreaRepublic = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Korea Republic', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKoreaRepublic, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKoreaRepublic,
  associationLogo: iconKoreaRepublic,
  associationDate: {
    founded: '1928',
    fifaAffiliation: '1948',
    confederationAffiliation: '1954',
  },
})