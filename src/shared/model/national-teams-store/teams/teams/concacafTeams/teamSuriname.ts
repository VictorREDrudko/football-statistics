import { Team } from '../../classTeam/classTeam'
import { flagSuriname } from '@/shared/assets/image/flags'
import { coatOfArmsSuriname } from '@/shared/assets/image/coat-of-arms'
import { iconSuriname } from '@/shared/assets/iconFootballAssociation'

export const teamSuriname = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Suriname', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSuriname, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSuriname,
  associationLogo: iconSuriname,
  associationDate: {
    founded: '1920',
    fifaAffiliation: '1929',
    confederationAffiliation: '1961',
  },
})