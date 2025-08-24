import { Team } from '../../classTeam/classTeam'
import { flagYemen } from '@/shared/assets/image/flags'
import { coatOfArmsYemen } from '@/shared/assets/image/coat-of-arms'
import { iconYemen } from '@/shared/assets/iconFootballAssociation'

export const teamYemen = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Yemen', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagYemen, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsYemen,
  associationLogo: iconYemen,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1980',
    confederationAffiliation: '1980',
  },
})