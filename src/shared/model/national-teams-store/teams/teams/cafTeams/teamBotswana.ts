import { Team } from '../../classTeam/classTeam'
import { flagBotswana } from '@/shared/assets/image/flags'
import { coatOfArmsBotswana } from '@/shared/assets/image/coat-of-arms'
import { iconBotswana } from '@/shared/assets/iconFootballAssociation'

export const teamBotswana = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Botswana', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBotswana, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBotswana,
  associationLogo: iconBotswana,
  associationDate: {
    founded: '1970',
    fifaAffiliation: '1978',
    confederationAffiliation: '1976',
  },
})