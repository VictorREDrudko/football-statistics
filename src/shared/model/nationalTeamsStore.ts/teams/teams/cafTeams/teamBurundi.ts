import { Team } from '../../classTeam/classTeam'
import { flagBurundi } from '@/shared/assets/flags'
import { coatOfArmsBurundi } from '@/shared/assets/coat-of-arms'
import { iconBurundi } from '@/shared/assets/iconFootballAssociation'

export const teamBurundi = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: "Burundi", period: "0000-p.t." }],
  flags: [{ countryFlag: flagBurundi, period: "0000-p.t." }],
  coatOfArms: coatOfArmsBurundi,
  associationLogo: iconBurundi,
  associationDate: {
    founded: "1948",
    fifaAffiliation: "1972",
    confederationAffiliation: "1972",
  },
})