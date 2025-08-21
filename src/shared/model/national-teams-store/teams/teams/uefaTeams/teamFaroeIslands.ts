import { Team } from '../../classTeam/classTeam'
import { flagFaroeIslands } from '@/shared/assets/image/flags'
import { coatOfArmsFaroeIslands } from '@/shared/assets/image/coat-of-arms'
import { iconFaroeIslands } from '@/shared/assets/iconFootballAssociation'

export const teamFaroeIslands = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Faroe Islands', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagFaroeIslands, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsFaroeIslands,
  associationLogo: iconFaroeIslands,
  associationDate: {
    founded: '1979',
    fifaAffiliation: '1988',
    confederationAffiliation: '1990',
  },
})
