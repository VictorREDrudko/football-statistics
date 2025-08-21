import { Team } from '../../classTeam/classTeam'
import { flagSintMaarten } from '@/shared/assets/image/flags'
import { coatOfArmsSintMaarten } from '@/shared/assets/image/coat-of-arms'
import { iconSintMaarten } from '@/shared/assets/iconFootballAssociation'

export const teamSintMaarten = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Sint Maarten', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSintMaarten, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSintMaarten,
  associationLogo: iconSintMaarten,
  associationDate: {
    founded: '1986',
    fifaAffiliation: '-',
    confederationAffiliation: '2013',
  },
})