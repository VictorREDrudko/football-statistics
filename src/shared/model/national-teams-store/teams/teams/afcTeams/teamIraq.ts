import { Team } from '../../classTeam/classTeam'
import { flagIraq } from '@/shared/assets/flags'
import { coatOfArmsIraq } from '@/shared/assets/coat-of-arms'
import { iconIraq } from '@/shared/assets/iconFootballAssociation'

export const teamIraq = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Iraq', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagIraq, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsIraq,
  associationLogo: iconIraq,
  associationDate: {
    founded: '1948',
    fifaAffiliation: '1950',
    confederationAffiliation: '1970',
  },
})