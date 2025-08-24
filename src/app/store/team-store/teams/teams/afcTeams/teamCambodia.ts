import { Team } from '../../classTeam/classTeam'
import { flagCambodia } from '@/shared/assets/image/flags'
import { coatOfArmsCambodia } from '@/shared/assets/image/coat-of-arms'
import { iconCambodia } from '@/shared/assets/iconFootballAssociation'

export const teamCambodia = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Cambodia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagCambodia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsCambodia,
  associationLogo: iconCambodia,
  associationDate: {
    founded: '1933',
    fifaAffiliation: '1954',
    confederationAffiliation: '1954',
  },
})