import { Team } from '../../classTeam/classTeam'
import { flagPapuaNewGuinea } from '@/shared/assets/flags'
import { coatOfArmsPapuaNewGuinea } from '@/shared/assets/coat-of-arms'
import { iconPapuaNewGuinea } from '@/shared/assets/iconFootballAssociation'

export const teamPapuaNewGuinea = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Papua New Guinea', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagPapuaNewGuinea, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsPapuaNewGuinea,
  associationLogo: iconPapuaNewGuinea,
  associationDate: {
    founded: '1962',
    fifaAffiliation: '1966',
    confederationAffiliation: '1966',
  },
})