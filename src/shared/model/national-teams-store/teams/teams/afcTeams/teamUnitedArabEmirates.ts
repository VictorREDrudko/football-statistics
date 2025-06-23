import { Team } from '../../classTeam/classTeam'
import { flagUnitedArabEmirates } from '@/shared/assets/flags'
import { coatOfArmsUnitedArabEmirates } from '@/shared/assets/coat-of-arms'
import { iconUnitedArabEmirates } from '@/shared/assets/iconFootballAssociation'

export const teamUnitedArabEmirates = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'U. A. Emirates', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagUnitedArabEmirates, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsUnitedArabEmirates,
  associationLogo: iconUnitedArabEmirates,
  associationDate: {
    founded: '1971',
    fifaAffiliation: '1974',
    confederationAffiliation: '1974',
  },
})