import { Team } from '../../classTeam/classTeam'
import { flagTunisia } from '@/shared/assets/flags'
import { coatOfArmsTunisia } from '@/shared/assets/coat-of-arms'
import { iconTunisia } from '@/shared/assets/iconFootballAssociation'

export const teamTunisia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Tunisia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTunisia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTunisia,
  associationLogo: iconTunisia,
  associationDate: {
    founded: '1957',
    fifaAffiliation: '1960',
    confederationAffiliation: '1960',
  },
})