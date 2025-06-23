import { Team } from '../../classTeam/classTeam'
import { flagColombia } from '@/shared/assets/flags'
import { coatOfArmsColombia } from '@/shared/assets/coat-of-arms'
import { iconColombia } from '@/shared/assets/iconFootballAssociation'

export const teamColombia = new Team({
  confederation: 'CONMEBOL',
  names: [{ nameCountry: 'Colombia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagColombia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsColombia,
  associationLogo: iconColombia,
  associationDate: {
    founded: '1924',
    fifaAffiliation: '1936',
    confederationAffiliation: '1936',
  },
})