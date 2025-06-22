import { Team } from '../../classTeam/classTeam'
import { flagKyrgyzRepublic } from '@/shared/assets/flags'
import { coatOfArmsKyrgyzRepublic } from '@/shared/assets/coat-of-arms'
import { iconKyrgyzRepublic } from '@/shared/assets/iconFootballAssociation'

export const teamKyrgyzRepublic = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Kyrgyz Republic', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagKyrgyzRepublic, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsKyrgyzRepublic,
  associationLogo: iconKyrgyzRepublic,
  associationDate: {
    founded: '1992',
    fifaAffiliation: '1994',
    confederationAffiliation: '1993',
  },
})