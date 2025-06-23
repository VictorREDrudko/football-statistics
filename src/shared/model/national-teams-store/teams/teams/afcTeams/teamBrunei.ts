import { Team } from '../../classTeam/classTeam'
import { flagBrunei } from '@/shared/assets/flags'
import { coatOfArmsBrunei } from '@/shared/assets/coat-of-arms'
import { iconBrunei } from '@/shared/assets/iconFootballAssociation'

export const teamBrunei = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Brunei', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBrunei, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBrunei,
  associationLogo: iconBrunei,
  associationDate: {
    founded: '1952',
    fifaAffiliation: '1972',
    confederationAffiliation: '1969',
  },
})