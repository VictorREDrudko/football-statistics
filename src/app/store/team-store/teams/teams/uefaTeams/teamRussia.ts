import { Team } from '../../classTeam/classTeam'
import { flagRussia } from '@/shared/assets/image/flags'
import { coatOfArmsRussia } from '@/shared/assets/image/coat-of-arms'
import { iconRussia } from '@/shared/assets/iconFootballAssociation'

export const teamRussia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Russia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagRussia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsRussia,
  associationLogo: iconRussia,
  associationDate: {
    founded: '1912',
    fifaAffiliation: '1912',
    confederationAffiliation: '1954',
  },
})