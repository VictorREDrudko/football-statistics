import { Team } from '../../classTeam/classTeam'
import { flagThailand } from '@/shared/assets/flags'
import { coatOfArmsThailand } from '@/shared/assets/coat-of-arms'
import { iconThailand } from '@/shared/assets/iconFootballAssociation'

export const teamThailand = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Thailand', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagThailand, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsThailand,
  associationLogo: iconThailand,
  associationDate: {
    founded: '1916',
    fifaAffiliation: '1925',
    confederationAffiliation: '1954',
  },
})