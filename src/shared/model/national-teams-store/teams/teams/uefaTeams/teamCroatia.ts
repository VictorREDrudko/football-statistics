import { Team } from '../../classTeam/classTeam'
import { flagCroatia } from '@/shared/assets/flags'
import { coatOfArmsCroatia } from '@/shared/assets/coat-of-arms'
import { iconCroatia } from '@/shared/assets/iconFootballAssociation'

export const teamCroatia = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Croatia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCroatia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCroatia,
  associationLogo: iconCroatia,
  associationDate: {
    founded: '1912',
    fifaAffiliation: '1941',
    confederationAffiliation: '1993',
  },
})
