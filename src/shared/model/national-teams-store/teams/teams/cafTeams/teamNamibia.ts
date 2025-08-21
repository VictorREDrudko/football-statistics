import { Team } from '../../classTeam/classTeam'
import { flagNamibia } from '@/shared/assets/image/flags'
import { coatOfArmsNamibia } from '@/shared/assets/image/coat-of-arms'
import { iconNamibia } from '@/shared/assets/iconFootballAssociation'

export const teamNamibia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Namibia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNamibia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNamibia,
  associationLogo: iconNamibia,
  associationDate: {
    founded: '1990',
    fifaAffiliation: '1992',
    confederationAffiliation: '1992',
  },
})