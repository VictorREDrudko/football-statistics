import { Team } from '../../classTeam/classTeam'
import { flagSeychelles } from '@/shared/assets/flags'
import { coatOfArmsSeychelles } from '@/shared/assets/coat-of-arms'
import { iconSeychelles } from '@/shared/assets/iconFootballAssociation'

export const teamSeychelles = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Seychelles', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSeychelles, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSeychelles,
  associationLogo: iconSeychelles,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})