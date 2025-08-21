import { Team } from '../../classTeam/classTeam'
import { flagKenya } from '@/shared/assets/image/flags'
import { coatOfArmsKenya } from '@/shared/assets/image/coat-of-arms'
import { iconKenya } from '@/shared/assets/iconFootballAssociation'

export const teamKenya = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Kenya', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKenya, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKenya,
  associationLogo: iconKenya,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1960',
    confederationAffiliation: '1968',
  },
})