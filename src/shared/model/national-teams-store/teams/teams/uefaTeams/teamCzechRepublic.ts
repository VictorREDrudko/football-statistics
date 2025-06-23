import { Team } from '../../classTeam/classTeam'
import { flagCzechRepublic } from '@/shared/assets/flags'
import { coatOfArmsCzechRepublic } from '@/shared/assets/coat-of-arms'
import { iconCzechRepublic } from '@/shared/assets/iconFootballAssociation'

export const teamCzechRepublic = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Czech Republic', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCzechRepublic, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCzechRepublic,
  associationLogo: iconCzechRepublic,
  associationDate: {
    founded: '1901',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})
