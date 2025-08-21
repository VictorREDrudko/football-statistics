import { Team } from '../../classTeam/classTeam'
import { flagCyprus } from '@/shared/assets/image/flags'
import { coatOfArmsCyprus } from '@/shared/assets/image/coat-of-arms'
import { iconCyprus } from '@/shared/assets/iconFootballAssociation'

export const teamCyprus = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Cyprus', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCyprus, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCyprus,
  associationLogo: iconCyprus,
  associationDate: {
    founded: '1934',
    fifaAffiliation: '1948',
    confederationAffiliation: '1962',
  },
})
