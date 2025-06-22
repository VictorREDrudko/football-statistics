import { Team } from '../../classTeam/classTeam'
import { flagDPRKorea } from '@/shared/assets/flags'
import { coatOfArmsDPRKorea } from '@/shared/assets/coat-of-arms'
import { iconDPRKorea } from '@/shared/assets/iconFootballAssociation'

export const teamDPRKorea = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'DPR Korea', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagDPRKorea, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsDPRKorea,
  associationLogo: iconDPRKorea,
  associationDate: {
    founded: '1945',
    fifaAffiliation: '1958',
    confederationAffiliation: '1974',
  },
})