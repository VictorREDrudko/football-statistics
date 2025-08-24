import { Team } from '../../classTeam/classTeam'
import { flagZimbabwe } from '@/shared/assets/image/flags'
import { coatOfArmsZimbabwe } from '@/shared/assets/image/coat-of-arms'
import { iconZimbabwe } from '@/shared/assets/iconFootballAssociation'

export const teamZimbabwe = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Zimbabwe', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagZimbabwe, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsZimbabwe,
  associationLogo: iconZimbabwe,
  associationDate: {
    founded: '1965',
    fifaAffiliation: '1965',
    confederationAffiliation: '1980',
  },
})