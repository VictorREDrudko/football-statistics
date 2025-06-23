import { Team } from '../../classTeam/classTeam'
import { flagAmericanSamoa } from '@/shared/assets/flags'
import { coatOfArmsAmericanSamoa } from '@/shared/assets/coat-of-arms'
import { iconAmericanSamoa } from '@/shared/assets/iconFootballAssociation'

export const teamAmericanSamoa = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'American Samoa', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAmericanSamoa, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAmericanSamoa,
  associationLogo: iconAmericanSamoa,
  associationDate: {
    founded: '1984',
    fifaAffiliation: '1998',
    confederationAffiliation: '1998',
  },
})