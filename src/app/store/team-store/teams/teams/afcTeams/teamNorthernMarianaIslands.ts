import { Team } from '../../classTeam/classTeam'
import { flagNorthernMarianaIslands } from '@/shared/assets/image/flags'
import { coatOfArmsNorthernMarianaIslands } from '@/shared/assets/image/coat-of-arms'
import { iconNorthernMarianaIslands } from '@/shared/assets/iconFootballAssociation'

export const teamNorthernMarianaIslands = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Northern Mariana Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNorthernMarianaIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNorthernMarianaIslands,
  associationLogo: iconNorthernMarianaIslands,
  associationDate: {
    founded: '2005',
    fifaAffiliation: '-',
    confederationAffiliation: '2020',
  },
})