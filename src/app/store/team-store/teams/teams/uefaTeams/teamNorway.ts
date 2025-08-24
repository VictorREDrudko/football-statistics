import { Team } from '../../classTeam/classTeam'
import { flagNorway } from '@/shared/assets/image/flags'
import { coatOfArmsNorway } from '@/shared/assets/image/coat-of-arms'
import { iconNorway } from '@/shared/assets/iconFootballAssociation'

export const teamNorway = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Norway', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNorway, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNorway,
  associationLogo: iconNorway,
  associationDate: {
    founded: '1902',
    fifaAffiliation: '1908',
    confederationAffiliation: '1954',
  },
})