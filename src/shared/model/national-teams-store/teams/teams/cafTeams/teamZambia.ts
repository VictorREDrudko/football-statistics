import { Team } from '../../classTeam/classTeam'
import { flagZambia } from '@/shared/assets/flags'
import { coatOfArmsZambia } from '@/shared/assets/coat-of-arms'
import { iconZambia } from '@/shared/assets/iconFootballAssociation'

export const teamZambia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Zambia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagZambia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsZambia,
  associationLogo: iconZambia,
  associationDate: {
    founded: '1929',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})