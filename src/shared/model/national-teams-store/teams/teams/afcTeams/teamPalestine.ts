import { Team } from '../../classTeam/classTeam'
import { flagPalestine } from '@/shared/assets/flags'
import { coatOfArmsPalestine } from '@/shared/assets/coat-of-arms'
import { iconPalestine } from '@/shared/assets/iconFootballAssociation'

export const teamPalestine = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Palestine', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPalestine, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPalestine,
  associationLogo: iconPalestine,
  associationDate: {
    founded: '1998',
    fifaAffiliation: '1998',
    confederationAffiliation: '1998',
  },
})