import { Team } from '../../classTeam/classTeam'
import { flagTogo } from '@/shared/assets/flags'
import { coatOfArmsTogo } from '@/shared/assets/coat-of-arms'
import { iconTogo } from '@/shared/assets/iconFootballAssociation'

export const teamTogo = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Togo', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTogo, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTogo,
  associationLogo: iconTogo,
  associationDate: {
    founded: '1960',
    fifaAffiliation: '1962',
    confederationAffiliation: '1964',
  },
})