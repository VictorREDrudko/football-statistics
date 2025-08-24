import { Team } from '../../classTeam/classTeam'
import { flagMorocco } from '@/shared/assets/image/flags'
import { coatOfArmsMorocco } from '@/shared/assets/image/coat-of-arms'
import { iconMorocco } from '@/shared/assets/iconFootballAssociation'

export const teamMorocco = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Morocco', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagMorocco, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsMorocco,
  associationLogo: iconMorocco,
  associationDate: {
    founded: '1955',
    fifaAffiliation: '1960',
    confederationAffiliation: '1959',
  },
})