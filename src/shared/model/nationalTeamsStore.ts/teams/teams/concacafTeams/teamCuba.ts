import { Team } from '../../classTeam/classTeam'
import { flagCuba } from '@/shared/assets/flags'
import { coatOfArmsCuba } from '@/shared/assets/coat-of-arms'
import { iconCuba } from '@/shared/assets/iconFootballAssociation'

export const teamCuba = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Cuba', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCuba, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCuba,
  associationLogo: iconCuba,
  associationDate: {
    founded: '1924',
    fifaAffiliation: '1929',
    confederationAffiliation: '1961',
  },
})