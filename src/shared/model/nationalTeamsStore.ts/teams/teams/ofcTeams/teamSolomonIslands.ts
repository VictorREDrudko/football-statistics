import { Team } from '../../classTeam/classTeam'
import { flagSolomonIslands } from '@/shared/assets/flags'
import { coatOfArmsSolomonIslands } from '@/shared/assets/coat-of-arms'
import { iconSolomonIslands } from '@/shared/assets/iconFootballAssociation'

export const teamSolomonIslands = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Solomon Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSolomonIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSolomonIslands,
  associationLogo: iconSolomonIslands,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1988',
    confederationAffiliation: '1988',
  },
})