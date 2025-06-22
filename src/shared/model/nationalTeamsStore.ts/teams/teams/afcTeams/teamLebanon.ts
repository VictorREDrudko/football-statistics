import { Team } from '../../classTeam/classTeam'
import { flagLebanon } from '@/shared/assets/flags'
import { coatOfArmsLebanon } from '@/shared/assets/coat-of-arms'
import { iconLebanon } from '@/shared/assets/iconFootballAssociation'

export const teamLebanon = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Lebanon', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagLebanon, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsLebanon,
  associationLogo: iconLebanon,
  associationDate: {
    founded: '1933',
    fifaAffiliation: '1936',
    confederationAffiliation: '1964',
  },
})