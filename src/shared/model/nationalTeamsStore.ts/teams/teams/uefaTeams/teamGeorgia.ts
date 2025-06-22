import { Team } from '../../classTeam/classTeam'
import { flagGeorgia } from '@/shared/assets/flags'
import { coatOfArmsGeorgia } from '@/shared/assets/coat-of-arms'
import { iconGeorgia } from '@/shared/assets/iconFootballAssociation'

export const teamGeorgia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Georgia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGeorgia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGeorgia,
  associationLogo: iconGeorgia,
  associationDate: {
    founded: '1990',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})
