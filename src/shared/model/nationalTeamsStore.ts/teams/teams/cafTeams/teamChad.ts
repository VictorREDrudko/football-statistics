import { Team } from '../../classTeam/classTeam'
import { flagChad } from '@/shared/assets/flags'
import { coatOfArmsChad } from '@/shared/assets/coat-of-arms'
import { iconChad } from '@/shared/assets/iconFootballAssociation'

export const teamChad = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Chad', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagChad, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsChad,
  associationLogo: iconChad,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})