import { Team } from '../../classTeam/classTeam'
import { flagZanzibar } from '@/shared/assets/flags'
import { coatOfArmsZanzibar } from '@/shared/assets/coat-of-arms'
import { iconZanzibar } from '@/shared/assets/iconFootballAssociation'

export const teamZanzibar = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Zanzibar', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagZanzibar, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsZanzibar,
  associationLogo: iconZanzibar,
  associationDate: {
    founded: '1965',
    fifaAffiliation: '-',
    confederationAffiliation: '1980',
  },
})