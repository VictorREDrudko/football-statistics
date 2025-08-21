import { Team } from '../../classTeam/classTeam'
import { flagVanuatu } from '@/shared/assets/image/flags'
import { coatOfArmsVanuatu } from '@/shared/assets/image/coat-of-arms'
import { iconVanuatu } from '@/shared/assets/iconFootballAssociation'

export const teamVanuatu = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Vanuatu', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagVanuatu, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsVanuatu,
  associationLogo: iconVanuatu,
  associationDate: {
    founded: '1934',
    fifaAffiliation: '1988',
    confederationAffiliation: '1988',
  },
})