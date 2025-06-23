import { Team } from '../../classTeam/classTeam'
import { flagTuvalu } from '@/shared/assets/flags'
import { coatOfArmsTuvalu } from '@/shared/assets/coat-of-arms'
import { iconTuvalu } from '@/shared/assets/iconFootballAssociation'

export const teamTuvalu = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Tuvalu', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTuvalu, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTuvalu,
  associationLogo: iconTuvalu,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '-',
    confederationAffiliation: '2006',
  },
})