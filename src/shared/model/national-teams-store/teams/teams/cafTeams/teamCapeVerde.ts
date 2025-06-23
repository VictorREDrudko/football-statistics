import { Team } from '../../classTeam/classTeam'
import { flagCapeVerde } from '@/shared/assets/flags'
import { coatOfArmsCapeVerde } from '@/shared/assets/coat-of-arms'
import { iconCapeVerde } from '@/shared/assets/iconFootballAssociation'

export const teamCapeVerde = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Cape Verde', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCapeVerde, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCapeVerde,
  associationLogo: iconCapeVerde,
  associationDate: {
    founded: '1982',
    fifaAffiliation: '1986',
    confederationAffiliation: '2000',
  },
})