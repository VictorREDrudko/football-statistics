import { Team } from '../../classTeam/classTeam'
import { flagPuertoRico } from '@/shared/assets/flags'
import { coatOfArmsPuertoRico } from '@/shared/assets/coat-of-arms'
import { iconPuertoRico } from '@/shared/assets/iconFootballAssociation'

export const teamPuertoRico = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Puerto Rico', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPuertoRico, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPuertoRico,
  associationLogo: iconPuertoRico,
  associationDate: {
    founded: '1940',
    fifaAffiliation: '1960',
    confederationAffiliation: '1964',
  },
})