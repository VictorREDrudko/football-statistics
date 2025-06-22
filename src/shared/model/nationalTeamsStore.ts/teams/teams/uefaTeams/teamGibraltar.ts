import { Team } from '../../classTeam/classTeam'
import { flagGibraltar } from '@/shared/assets/flags'
import { coatOfArmsGibraltar } from '@/shared/assets/coat-of-arms'
import { iconGibraltar } from '@/shared/assets/iconFootballAssociation'

export const teamGibraltar = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Gibraltar', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagGibraltar, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsGibraltar,
  associationLogo: iconGibraltar,
  associationDate: {
    founded: '1895',
    fifaAffiliation: '2016',
    confederationAffiliation: '2013',
  },
})
